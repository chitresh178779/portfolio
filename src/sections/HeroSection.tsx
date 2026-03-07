"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionWrapper from "@/components/SectionWrapper";

export default function HeroSection() {
    const firstName = personalInfo.name.split(" ")[0];
    const lastName = personalInfo.name.split(" ")[1];
    const heroRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            if (!heroRef.current) return;

            // Name animation
            gsap.fromTo(
                ".hero-title",
                { y: "100%" },
                {
                    y: "0%",
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    delay: 0.2
                }
            );

            // Bottom row elements — simple fade-in, no ScrollTrigger
            gsap.fromTo(
                ".hero-bottom-item",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    delay: 0.6,
                }
            );
        },
        { scope: heroRef }
    );

    return (
        <section ref={heroRef} id="hero" className="section-cream h-screen flex flex-col justify-between pt-28 pb-8 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 2xl:px-64 overflow-hidden">
            <div className="max-w-[1400px] w-full mx-auto flex-1 flex flex-col justify-center">

                {/* Massive Name Typography */}
                <div className="flex flex-col mb-8">
                    <h1 className="heading-display text-[13vw] md:text-[8.5rem] lg:text-[11rem] whitespace-nowrap overflow-hidden">
                        <span className="hero-title block translate-y-full">
                            {firstName}
                        </span>
                    </h1>
                    <div className="flex items-center justify-end gap-4 md:gap-8 -mt-2 md:-mt-4 lg:-mt-8">
                        {/* Profile Image Circle */}
                        <div className="hero-bottom-item opacity-0 relative w-[26vw] h-[26vw] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden shadow-2xl border-[3px] md:border-[6px] border-[#ede9e3] flex-shrink-0 z-10 box-border">
                            <Image
                                src="/profile.jpg"
                                alt="Chitresh Gurjar"
                                fill
                                className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                                priority
                            />
                        </div>
                        <h1 className="heading-display text-[13vw] md:text-[8.5rem] lg:text-[11rem] leading-[0.8] whitespace-nowrap overflow-hidden">
                            <span className="hero-title block translate-y-full">
                                {lastName}
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Bottom Content Row */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-12 mt-auto">
                    {/* Arrow */}
                    <div className="hero-bottom-item hidden md:block opacity-0">
                        <ArrowDownRight size={48} strokeWidth={1} className="text-[#1a1a1a]" />
                    </div>

                    {/* Description & CTA */}
                    <div className="hero-bottom-item max-w-md ml-auto md:ml-0 md:mr-auto lg:mx-auto opacity-0">
                        <p className="text-[#4a4a4a] text-lg md:text-xl font-medium leading-relaxed mb-8">
                            I build fast, intelligent systems that bridge the gap between cutting-edge AI and production-ready applications.
                        </p>
                        <a href="#contact" className="btn-pill btn-dark uppercase font-bold tracking-widest text-xs">
                            Contact <ArrowDownRight size={16} />
                        </a>
                    </div>

                    {/* Availability Tag */}
                    <div className="hero-bottom-item ml-auto text-right opacity-0">
                        <p className="font-mono text-[10px] md:text-xs text-[#8a8579] uppercase tracking-widest mb-1">
                            Available for work
                        </p>
                        <p className="heading-display text-4xl md:text-6xl lg:text-8xl">
                            NOW
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
