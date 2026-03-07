"use client";
import SectionWrapper from "@/components/SectionWrapper";
import RevealText from "@/components/RevealText";
import { achievements } from "@/lib/data";

export default function AchievementsSection() {
    return (
        <section id="achievements" className="section-dark mt-16 md:mt-24 py-[80px] md:py-[120px] px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 2xl:px-64 border-t border-[#2a2a2a] overflow-hidden relative z-10">
            <div className="max-w-[1400px] w-full mx-auto">
                <SectionWrapper>
                    <RevealText
                        text="MILESTONES"
                        className="heading-section text-3xl md:text-5xl lg:text-6xl tracking-widest mb-12"
                    />
                </SectionWrapper>

                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-5 hidden md:block" />

                    <div className="md:col-span-7 flex flex-col gap-12">
                        {achievements.map((item: any, index: number) => (
                            <SectionWrapper key={item.title} delay={0.1 * index}>
                                <div className="group border-b border-[#2a2a2a] pb-12 mb-8 md:mb-12 flex flex-col gap-4">
                                    <div className="flex md:items-center justify-between flex-col md:flex-row gap-4">
                                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#efece6] group-hover:text-[#8a8579] transition-colors">
                                            {item.title}
                                        </h3>
                                        <span className="font-mono text-sm text-[#7a7a7a] shrink-0">
                                            {item.date}
                                        </span>
                                    </div>

                                    <p className="text-[#a09c95] text-lg max-w-xl">
                                        {item.description}
                                    </p>

                                    <p className="font-mono text-sm uppercase tracking-widest text-[#efece6] mt-4">
                                        {item.organization}
                                    </p>
                                </div>
                            </SectionWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
