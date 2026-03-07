"use client";
import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface Props {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function SectionWrapper({ children, className = "", delay = 0 }: Props) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!wrapperRef.current) return;

            gsap.fromTo(
                wrapperRef.current,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    delay: delay,
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        },
        { scope: wrapperRef }
    );

    return (
        <div ref={wrapperRef} className={className}>
            {children}
        </div>
    );
}
