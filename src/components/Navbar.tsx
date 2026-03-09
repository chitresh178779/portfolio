"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handler = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`pointer-events-auto transition-all duration-500 rounded-full relative ${isScrolled
                    ? "bg-[#111111]/80 backdrop-blur-xl py-4 md:py-5 px-6 sm:px-8 md:px-12 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
                    : "bg-[#1a1a1a]/60 backdrop-blur-md py-4 md:py-5 px-6 sm:px-8 md:px-12 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
                    }`}
            >
                <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-12">
                    {/* Desktop & Mobile Links (clean, minimal, centered) */}
                    <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                data-hover
                                className="text-[15px] font-medium text-white/90 hover:text-white transition-colors duration-200 whitespace-nowrap tracking-wide"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden text-[#efece6]"
                        onClick={() => setIsOpen(!isOpen)}
                        data-hover
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile menu dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 right-0 mt-2 md:hidden bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
                        >
                            <div className="flex flex-col px-6 py-4 gap-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-sm font-medium text-[#efece6] hover:text-white transition-colors py-3 border-b border-white/10 last:border-0"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
