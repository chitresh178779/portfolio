"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, MessageSquare, Send, CheckCircle, AlertCircle, Github, Linkedin } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import RevealText from "@/components/RevealText";
import { personalInfo } from "@/lib/data";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "Something went wrong");
            }

            setSubmitted(true);
            reset();
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Failed to send message. Please try again.";
            setSubmitError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="section-dark mt-16 md:mt-24 py-[100px] md:py-[160px] px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 2xl:px-64 border-t border-[#2a2a2a] overflow-hidden relative z-10 flex flex-col items-center justify-center min-h-screen"
        >
            <div className="max-w-[1100px] w-full flex flex-col items-center justify-center text-center mx-auto">
                {/* Hero Heading */}
                <div className="w-full flex flex-col items-center justify-center mb-16 md:mb-24 text-center mx-auto">
                    <SectionWrapper className="flex flex-col items-center justify-center w-full text-center mx-auto">
                        <div className="heading-section text-[8vw] md:text-6xl lg:text-7xl leading-[0.85] tracking-tighter text-[#efece6] flex flex-col items-center justify-center text-center w-full mx-auto">
                            <RevealText text="LET'S MAKE" className="mx-auto text-center" />
                            <RevealText text=" IT HAPPEN" delay={0.1} className="mx-auto text-center" />
                        </div>
                    </SectionWrapper>
                </div>

                {/* Glass Contact Form */}
                <div className="w-full flex flex-col items-center justify-center mt-16 md:mt-24 text-center mx-auto">
                    <SectionWrapper delay={0.2} className="w-full max-w-[650px] mx-auto">
                        <motion.div
                            className="w-full rounded-2xl p-8 md:p-10 flex flex-col items-center text-center"
                            style={{
                                background: "rgba(255, 255, 255, 0.04)",
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                borderRadius: "16px",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255,255,255,0.03) inset",
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            {/* Heading */}
                            <h3 className="heading-display text-3xl md:text-4xl text-[#efece6] mb-3 text-center">
                                Have a Project in Mind?
                            </h3>

                            {/* Subtitle */}
                            <p className="font-mono text-sm text-[#7a7a7a] mb-10 max-w-[400px] leading-relaxed">
                                Tell me about your idea and let&apos;s build something great.
                            </p>

                            {/* Form */}
                            <form
                                className="flex flex-col gap-5 text-left w-full"
                                onSubmit={handleSubmit(onSubmit)}
                                noValidate
                            >
                                {/* Name Field */}
                                <div>
                                    <div className="relative">
                                        <User
                                            className="absolute pointer-events-none text-[#555]"
                                            style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }}
                                            size={16}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            {...register("name", { required: "Name is required" })}
                                            style={{ paddingLeft: '48px' }}
                                            className={`w-full h-12 bg-[rgba(0,0,0,0.25)] rounded-[10px] pr-5 font-mono text-sm text-[#efece6] placeholder:text-[#555] transition-all duration-250 ease-out outline-none border ${errors.name
                                                ? "border-[#ff4444]/50 focus:border-[#ff4444]/70"
                                                : "border-[rgba(255,255,255,0.08)] focus:border-[rgba(255,255,255,0.2)]"
                                                } focus:shadow-[0_0_0_2px_rgba(255,255,255,0.04)]`}
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {errors.name && (
                                            <motion.span
                                                className="text-[#ff6b6b] text-xs font-mono mt-1.5 block pl-1"
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {errors.name.message}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Email Field */}
                                <div>
                                    <div className="relative">
                                        <Mail
                                            className="absolute pointer-events-none text-[#555]"
                                            style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }}
                                            size={16}
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                            style={{ paddingLeft: '48px' }}
                                            className={`w-full h-12 bg-[rgba(0,0,0,0.25)] rounded-[10px] pr-5 font-mono text-sm text-[#efece6] placeholder:text-[#555] transition-all duration-250 ease-out outline-none border ${errors.email
                                                ? "border-[#ff4444]/50 focus:border-[#ff4444]/70"
                                                : "border-[rgba(255,255,255,0.08)] focus:border-[rgba(255,255,255,0.2)]"
                                                } focus:shadow-[0_0_0_2px_rgba(255,255,255,0.04)]`}
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {errors.email && (
                                            <motion.span
                                                className="text-[#ff6b6b] text-xs font-mono mt-1.5 block pl-1"
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {errors.email.message}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Message Field */}
                                <div>
                                    <div className="relative">
                                        <MessageSquare
                                            className="absolute pointer-events-none text-[#555]"
                                            style={{ left: '16px', top: '16px' }}
                                            size={16}
                                        />
                                        <textarea
                                            placeholder="Tell me about your project..."
                                            rows={5}
                                            {...register("message", {
                                                required: "Message is required",
                                                validate: (value) => {
                                                    const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
                                                    return wordCount >= 10 || "Please write at least 10 words describing your project";
                                                },
                                            })}
                                            style={{ paddingLeft: '48px' }}
                                            className={`w-full min-h-[140px] bg-[rgba(0,0,0,0.25)] rounded-[10px] pr-5 py-4 font-mono text-sm text-[#efece6] placeholder:text-[#555] transition-all duration-250 ease-out outline-none resize-none leading-relaxed border ${errors.message
                                                ? "border-[#ff4444]/50 focus:border-[#ff4444]/70"
                                                : "border-[rgba(255,255,255,0.08)] focus:border-[rgba(255,255,255,0.2)]"
                                                } focus:shadow-[0_0_0_2px_rgba(255,255,255,0.04)]`}
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {errors.message && (
                                            <motion.span
                                                className="text-[#ff6b6b] text-xs font-mono mt-1.5 block pl-1"
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {errors.message.message}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Error Message */}
                                <AnimatePresence>
                                    {submitError && (
                                        <motion.div
                                            className="flex items-center gap-2 text-[#ff6b6b] font-mono text-xs px-4 py-3 rounded-lg bg-[#ff4444]/10 border border-[#ff4444]/20"
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <AlertCircle size={14} />
                                            {submitError}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || submitted}
                                    className={`w-full flex items-center justify-center gap-2 mt-8 tracking-wide font-medium text-base py-[16px] px-[26px] rounded-[10px] transition-all duration-300 border cursor-pointer ${isSubmitting
                                        ? "bg-black text-[#7a7a7a] border-[rgba(255,255,255,0.08)] cursor-wait"
                                        : submitted
                                            ? "bg-[#27c93f] text-black border-[#27c93f]"
                                            : "bg-[#efece6] text-black border-[#efece6] hover:bg-white hover:border-white"
                                        }`}
                                    whileHover={
                                        !isSubmitting && !submitted
                                            ? { y: -2, boxShadow: "0 8px 25px rgba(255,255,255,0.15)" }
                                            : {}
                                    }
                                    whileTap={!isSubmitting && !submitted ? { scale: 0.98 } : {}}
                                    transition={{ duration: 0.25 }}
                                >
                                    {isSubmitting ? (
                                        <motion.div
                                            className="w-4 h-4 border-2 border-[#7a7a7a] border-t-transparent rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                                        />
                                    ) : submitted ? (
                                        <>
                                            <CheckCircle size={14} />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </SectionWrapper>
                </div>
            </div>
            <br></br>
            {/* Footer */}
            <div className="max-w-[1200px] w-full mx-auto mt-32 md:mt-48 pt-8 pb-12 border-t border-[#2a2a2a]">
                <div className="flex flex-col flex-col-reverse md:flex-row items-center justify-between gap-8 font-mono text-sm text-[#7a7a7a]">
                    {/* Copyright */}
                    <div className="flex-1 md:text-left text-center">
                        © {new Date().getFullYear()} {personalInfo.name}
                    </div>

                    {/* Centered Socials */}
                    <div className="flex items-center justify-center gap-6 flex-1">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#7a7a7a] hover:text-[#efece6] transition-colors flex items-center gap-2"
                        >
                            <Github size={20} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#7a7a7a] hover:text-[#efece6] transition-colors flex items-center gap-2"
                        >
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>

                    {/* Back to Top */}
                    <div className="flex-1 md:text-right text-center">
                        <a href="#" className="hover:text-[#efece6] transition-colors inline-block tracking-widest uppercase">
                            BACK TO TOP ↑
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
