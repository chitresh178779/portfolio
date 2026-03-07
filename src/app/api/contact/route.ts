import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ── Rate Limiter ───────────────────────────────────────────────
// In-memory store: IP → { count, firstRequestAt }
// Limits: 3 emails per IP per 15-minute window
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

const rateLimitStore = new Map<
    string,
    { count: number; firstRequestAt: number }
>();

function isRateLimited(ip: string): { limited: boolean; retryAfterSec?: number } {
    const now = Date.now();
    const entry = rateLimitStore.get(ip);

    if (!entry) {
        rateLimitStore.set(ip, { count: 1, firstRequestAt: now });
        return { limited: false };
    }

    // Window expired — reset
    if (now - entry.firstRequestAt > RATE_LIMIT_WINDOW_MS) {
        rateLimitStore.set(ip, { count: 1, firstRequestAt: now });
        return { limited: false };
    }

    // Within window — check count
    if (entry.count >= RATE_LIMIT_MAX) {
        const retryAfterSec = Math.ceil(
            (RATE_LIMIT_WINDOW_MS - (now - entry.firstRequestAt)) / 1000
        );
        return { limited: true, retryAfterSec };
    }

    entry.count++;
    return { limited: false };
}

// Clean up stale entries every 30 minutes
setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of rateLimitStore) {
        if (now - entry.firstRequestAt > RATE_LIMIT_WINDOW_MS) {
            rateLimitStore.delete(ip);
        }
    }
}, 30 * 60 * 1000);

// ── Minimum word count ─────────────────────────────────────────
const MIN_WORDS = 10;

// ── API Handler ────────────────────────────────────────────────
export async function POST(req: NextRequest) {
    try {
        // Get client IP
        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            req.headers.get("x-real-ip") ||
            "unknown";

        // Check rate limit
        const { limited, retryAfterSec } = isRateLimited(ip);
        if (limited) {
            return NextResponse.json(
                {
                    error: `Too many requests. Please try again in ${Math.ceil(
                        (retryAfterSec || 900) / 60
                    )} minutes.`,
                },
                { status: 429 }
            );
        }

        const { name, email, message } = await req.json();

        // Validate fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        // Validate minimum word count
        const wordCount = message.trim().split(/\s+/).filter(Boolean).length;
        if (wordCount < MIN_WORDS) {
            return NextResponse.json(
                { error: `Message must be at least ${MIN_WORDS} words` },
                { status: 400 }
            );
        }

        // Create transporter with Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email to you (site owner)
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `New Portfolio Inquiry from ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">New Contact Form Submission</h2>
                    <hr style="border: 1px solid #eee;" />
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
                    <hr style="border: 1px solid #eee; margin-top: 24px;" />
                    <p style="color: #999; font-size: 12px;">Sent from your portfolio contact form</p>
                </div>
            `,
        });

        // Auto-reply to the sender
        await transporter.sendMail({
            from: `"Chitresh Gurjar" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "Thanks for reaching out!",
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Hey ${name}! 👋</h2>
                    <p>Thanks for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.</p>
                    <p style="color: #666;">Here's a copy of your message:</p>
                    <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
                    <br />
                    <p>Best regards,<br /><strong>Chitresh Gurjar</strong></p>
                </div>
            `,
        });

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Email send error:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
