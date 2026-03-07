"use client";
import SectionWrapper from "@/components/SectionWrapper";
import RevealText from "@/components/RevealText";
import { skills } from "@/lib/data";

export default function SkillsSection() {
    const languages = skills["Programming Languages"] || [];
    const frameworks = skills["Frameworks & Libraries"] || [];
    const aiTools = skills["AI/ML Tools"] || [];
    const devTools = skills["Databases & DevTools"] || [];

    return (
        <section id="skills" className="section-dark mt-16 md:mt-24 py-[80px] md:py-[120px] px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 2xl:px-64 border-t border-[#2a2a2a] overflow-hidden relative z-10">
            <div className="max-w-[1400px] w-full min-h-[50vh] mx-auto">
                <div className="grid md:grid-cols-12 gap-12 md:gap-8">
                    {/* Left: Large decorative heading */}
                    <div className="md:col-span-5 flex flex-col justify-center">
                        <SectionWrapper>
                            <div className="heading-section text-4xl md:text-6xl lg:text-7xl tracking-widest leading-[0.85]">
                                <RevealText text="DEVELOPER" delay={0.01} />
                            </div>
                        </SectionWrapper>
                    </div>

                    {/* Right: Skills title + 3 columns */}
                    <div className="md:col-span-7">
                        <SectionWrapper delay={0.15}>
                            <h2 className="heading-section text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#efece6] mb-12 md:mb-16">
                                Skills
                            </h2>
                        </SectionWrapper>

                        <SectionWrapper delay={0.2}>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
                                {/* Column 1: Languages & Tools */}
                                <div>
                                    <h4 className="font-sans font-bold text-base md:text-lg text-[#efece6] mb-6 tracking-tight">
                                        Languages & Tools
                                    </h4>
                                    <div className="space-y-3 font-mono text-sm">
                                        {languages.map((skill: any) => (
                                            <div key={skill.name}>
                                                <span className="text-[#a09c95] hover:text-[#efece6] transition-colors cursor-default">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                        {devTools.map((skill: any) => (
                                            <div key={skill.name}>
                                                <span className="text-[#a09c95] hover:text-[#efece6] transition-colors cursor-default">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Column 2: Frameworks & Libraries */}
                                <div>
                                    <h4 className="font-sans font-bold text-base md:text-lg text-[#efece6] mb-6 tracking-tight">
                                        Frameworks & Libraries
                                    </h4>
                                    <div className="space-y-3 font-mono text-sm">
                                        {frameworks.map((skill: any) => (
                                            <div key={skill.name}>
                                                <span className="text-[#a09c95] hover:text-[#efece6] transition-colors cursor-default">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Column 3: AI/ML Tools */}
                                <div>
                                    <h4 className="font-sans font-bold text-base md:text-lg text-[#efece6] mb-6 tracking-tight">
                                        AI/ML Tools
                                    </h4>
                                    <div className="space-y-3 font-mono text-sm">
                                        {aiTools.map((skill: any) => (
                                            <div key={skill.name}>
                                                <span className="text-[#a09c95] hover:text-[#efece6] transition-colors cursor-default">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SectionWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}
