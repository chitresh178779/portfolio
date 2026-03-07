"use client";
import { Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-8 px-6 border-t border-[#1e293b]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-[#64748b] flex items-center gap-1">
                    © {year} {personalInfo.name}. Built with{" "}
                    <Heart size={12} className="text-red-500 inline" fill="currentColor" /> using Next.js
                </div>
                <div className="flex items-center gap-6">
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-hover
                        className="text-xs text-[#64748b] hover:text-[#38bdf8] transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-hover
                        className="text-xs text-[#64748b] hover:text-[#38bdf8] transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        data-hover
                        className="text-xs text-[#64748b] hover:text-[#38bdf8] transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
