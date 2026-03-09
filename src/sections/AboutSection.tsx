"use client";

import SectionWrapper from "@/components/SectionWrapper";
import RevealText from "@/components/RevealText";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="section-dark mt-16 md:mt-24 py-[60px] md:py-[120px] px-8 sm:px-12 md:px-[8vw] lg:px-[10vw] xl:px-[12vw] 2xl:px-[14vw] overflow-hidden relative z-10"
        >
            <div className="max-w-[1400px] w-full mx-auto">

                {/* Main Heading */}
                <SectionWrapper>
                    <RevealText
                        text="WHAT I DO /"
                        className="heading-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-12 sm:mb-16 md:mb-24 text-[#efece6]"
                    />
                </SectionWrapper>


                {/* Services Label + Intro */}
                <SectionWrapper delay={0.1}>
                    <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-24 items-start">
                        <div className="md:col-span-6 flex md:justify-end md:pr-16 mb-4 md:mb-0">
                            <span className="font-mono text-xs text-[#7a7a7a] tracking-widest mt-2 uppercase">
                                (Services)
                            </span>
                        </div>
                        <div className="md:col-span-6">
                            <p className="text-lg md:text-xl text-[#a09c95] leading-[1.6] max-w-lg font-light">
                                I specialize in building fast, reliable, and
                                user-friendly full-stack web applications.
                                I bridge the gap between AI concepts and polished
                                production products that actually work and scale.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>


                {/* Divider */}
                <div className="border-t border-[#2a2a2a] w-full my-8 md:my-12" />


                {/* Services */}
                <div className="flex flex-col">

                    {/* Service 1 */}
                    <SectionWrapper delay={0.2}>
                        <div className="grid md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-16 border-b border-[#2a2a2a] mb-8 md:mb-12 group cursor-default">
                            <div className="md:col-span-6 flex md:justify-end md:pr-16 items-start">
                                <span className="heading-display text-3xl md:text-4xl text-[#efece6]/50 group-hover:text-white transition-colors duration-500 font-bold tracking-tighter sm:mb-2">
                                    (01)
                                </span>
                            </div>
                            <div className="md:col-span-6 space-y-4">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-[#efece6] group-hover:text-white transform group-hover:translate-x-4 transition-all duration-500">
                                    Full-Stack Development
                                </h3>
                                <p className="text-[#a09c95] group-hover:text-[#d0cdc7] text-base md:text-lg leading-relaxed max-w-lg font-light transform group-hover:translate-x-4 transition-all duration-500 delay-75">
                                    From frontend interactions to backend APIs, 
                                    I build complete web solutions using React, 
                                    Next.js, Django, and modern databases designed 
                                    for scalability and production reliability.
                                </p>
                            </div>
                        </div>
                    </SectionWrapper>


                    {/* Service 2 */}
                    <SectionWrapper delay={0.3}>
                        <div className="grid md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-16 border-b border-[#2a2a2a] mb-8 md:mb-12 group cursor-default">
                            <div className="md:col-span-6 flex md:justify-end md:pr-16 items-start">
                                <span className="heading-display text-3xl md:text-4xl text-[#efece6]/50 group-hover:text-white transition-colors duration-500 font-bold tracking-tighter sm:mb-2">
                                    (02)
                                </span>
                            </div>
                            <div className="md:col-span-6 space-y-4">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-[#efece6] group-hover:text-white transform group-hover:translate-x-4 transition-all duration-500">
                                    AI Integration
                                </h3>
                                <p className="text-[#a09c95] group-hover:text-[#d0cdc7] text-base md:text-lg leading-relaxed max-w-lg font-light transform group-hover:translate-x-4 transition-all duration-500 delay-75">
                                    Integrating machine learning and LLM APIs into real
                                    applications. Experienced with Python, Scikit-learn,
                                    and modern AI workflows that power intelligent
                                    user experiences.
                                </p>
                            </div>
                        </div>
                    </SectionWrapper>


                    {/* Service 3 */}
                    <SectionWrapper delay={0.4}>
                        <div className="grid md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-16 border-b border-[#2a2a2a] group cursor-default">
                            <div className="md:col-span-6 flex md:justify-end md:pr-16 items-start">
                                <span className="heading-display text-3xl md:text-4xl text-[#efece6]/50 group-hover:text-white transition-colors duration-500 font-bold tracking-tighter sm:mb-2">
                                    (03)
                                </span>
                            </div>
                            <div className="md:col-span-6 space-y-4">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-[#efece6] group-hover:text-white transform group-hover:translate-x-4 transition-all duration-500">
                                    Systems Design
                                </h3>
                                <p className="text-[#a09c95] group-hover:text-[#d0cdc7] text-base md:text-lg leading-relaxed max-w-lg font-light transform group-hover:translate-x-4 transition-all duration-500 delay-75">
                                    Applying core computer science principles like data
                                    structures, algorithms, and database design to build
                                    systems that remain performant, reliable, and
                                    maintainable as they scale.
                                </p>
                            </div>
                        </div>
                    </SectionWrapper>

                </div>

            </div>
        </section>
    );
}
