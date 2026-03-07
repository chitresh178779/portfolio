"use client";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const [onDark, setOnDark] = useState(false);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
        // Detect if cursor is over a dark section
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (el) {
            const section = el.closest(".section-dark");
            setOnDark(!!section);
        }
    }, [isVisible]);

    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
            setIsTouch(true);
            return;
        }
        window.addEventListener("mousemove", handleMouseMove);
        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);
        const addHoverListeners = () => {
            document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
                el.addEventListener("mouseenter", handleHoverStart);
                el.addEventListener("mouseleave", handleHoverEnd);
            });
        };
        addHoverListeners();
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            observer.disconnect();
        };
    }, [handleMouseMove]);

    if (isTouch || !isVisible) return null;

    const cursorColor = onDark ? "#efece6" : "#1a1a1a";

    return (
        <motion.div
            className="fixed top-0 left-0 z-[10000] pointer-events-none mix-blend-difference"
            animate={{
                x: position.x - (isHovering ? 28 : 5),
                y: position.y - (isHovering ? 28 : 5),
                width: isHovering ? 56 : 10,
                height: isHovering ? 56 : 10,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            style={{
                borderRadius: "50%",
                background: isHovering ? "transparent" : cursorColor,
                border: isHovering ? `2px solid ${cursorColor}` : "none",
            }}
        />
    );
}
