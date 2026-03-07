"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface RevealTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function RevealText({ text, className = "", delay = 0 }: RevealTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            const chars = containerRef.current.querySelectorAll(".reveal-word");

            gsap.fromTo(
                chars,
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "power3.out",
                    delay: delay,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className={`${className} flex flex-wrap gap-x-3 gap-y-2`}>
            {text.split(" ").map((word, index) => (
                <span key={index} className="overflow-hidden inline-block pb-2">
                    <span className="reveal-word inline-block">{word}</span>
                </span>
            ))}
        </div>
    );
}
