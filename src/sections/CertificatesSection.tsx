"use client";
import SectionWrapper from "@/components/SectionWrapper";
import RevealText from "@/components/RevealText";
import { certificates } from "@/lib/data";
import { Award, Code, Database, BarChart, FileBadge } from "lucide-react";

export default function CertificatesSection() {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "code": return <Code size={20} className="text-[#7a7a7a] group-hover:text-[#efece6] transition-colors" />;
            case "database": return <Database size={20} className="text-[#7a7a7a] group-hover:text-[#efece6] transition-colors" />;
            case "barChart": return <BarChart size={20} className="text-[#7a7a7a] group-hover:text-[#efece6] transition-colors" />;
            default: return <Award size={20} className="text-[#7a7a7a] group-hover:text-[#efece6] transition-colors" />;
        }
    };

    return (
        <section id="certificates" className="section-dark mt-16 md:mt-24 py-[100px] md:py-[200px] px-12 sm:px-20 md:px-32 lg:px-40 xl:px-56 2xl:px-72 border-t border-[#2a2a2a] overflow-hidden relative z-10">
            <div className="max-w-[1400px] w-full mx-auto">
                <SectionWrapper>
                    <RevealText
                        text="CERTIFICATIONS"
                        className="heading-section text-[2.5rem] sm:text-3xl md:text-5xl lg:text-6xl tracking-widest mb-12 md:mb-20"
                    />
                </SectionWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert: any, index: number) => (
                        <SectionWrapper key={cert.title} delay={0.1 * index} className="h-full">
                            <a
                                href={cert.link || "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="group block h-full bg-[#111111]/80 border border-[#2a2a2a] rounded-2xl p-8 hover:bg-[#1a1a1a] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300 shadow-lg cursor-pointer"
                            >
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-[#2a2a2a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            {getIcon(cert.icon)}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#efece6] mb-4 leading-snug group-hover:text-white transition-colors">
                                            {cert.title}
                                        </h3>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-[#2a2a2a] flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <FileBadge size={16} className="text-[#555]" />
                                            <span className="font-mono text-xs uppercase tracking-widest text-[#8a8579]">
                                                {cert.issuer}
                                            </span>
                                        </div>
                                        {cert.link && (
                                            <div className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/5">
                                                <span className="text-[#efece6] text-sm -rotate-45 leading-none transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">→</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </a>
                        </SectionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
