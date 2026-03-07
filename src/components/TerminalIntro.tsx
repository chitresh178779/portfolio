"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
    { text: "> initializing portfolio...", delay: 0 },
    { text: "> loading developer profile...", delay: 600 },
    { text: "> compiling skills matrix...", delay: 1200 },
    { text: "> system ready.", delay: 1800 },
    { text: "> welcome, visitor.", delay: 2400 },
];

export default function TerminalIntro({ onComplete }: { onComplete: () => void }) {
    const [visibleLines, setVisibleLines] = useState<number>(0);
    const [showTerminal, setShowTerminal] = useState(true);

    useEffect(() => {
        lines.forEach((_, i) => {
            setTimeout(() => setVisibleLines(i + 1), lines[i].delay);
        });
        const exitTimer = setTimeout(() => {
            setShowTerminal(false);
            setTimeout(onComplete, 500);
        }, 3500);
        return () => clearTimeout(exitTimer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {showTerminal && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
                >
                    <div className="w-full max-w-xl mx-6">
                        <div className="rounded-2xl overflow-hidden border border-[#2a2a2a]">
                            {/* Title bar */}
                            <div className="flex items-center gap-2 px-5 py-3 bg-[#141414] border-b border-[#2a2a2a]">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                                <span className="ml-3 text-xs font-mono text-[#7a7a7a]">
                                    chitresh@portfolio ~
                                </span>
                            </div>
                            {/* Body */}
                            <div className="p-6 bg-[#0a0a0a] font-mono text-sm min-h-[200px]">
                                {lines.slice(0, visibleLines).map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`mb-2 ${line.text.includes("system ready") || line.text.includes("welcome")
                                                ? "text-[#efece6]"
                                                : "text-[#7a7a7a]"
                                            }`}
                                    >
                                        {line.text}
                                    </motion.div>
                                ))}
                                {visibleLines < lines.length && (
                                    <span className="terminal-cursor text-[#efece6]">▊</span>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
