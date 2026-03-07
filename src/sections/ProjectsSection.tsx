"use client";
import { MoveUpRight, Github, Play } from "lucide-react";
import { projects } from "@/lib/data";
import SectionWrapper from "@/components/SectionWrapper";
import RevealText from "@/components/RevealText";

export default function ProjectsSection() {
    return (
        <section id="projects" className="section-dark mt-16 md:mt-24 py-[80px] md:py-[120px] px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 2xl:px-64 border-t border-[#2a2a2a] overflow-hidden relative z-10">
            <div className="max-w-[1400px] w-full mx-auto">
                <SectionWrapper>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-32 md:mb-40">
                        <RevealText
                            text="PROJECTS"
                            className="heading-section text-3xl md:text-6xl lg:text-7xl tracking-widest leading-[1.25]"
                        />
                        <p className="font-mono text-sm text-[#7a7a7a] max-w-xs md:pb-4">
                            A collection of full-stack applications, AI integrations, and structural web experiences.
                        </p>
                    </div>
                </SectionWrapper>
                <br></br><br></br>
                <div className="space-y-32 md:space-y-48">
                    {projects.map((project, index) => (
                        <SectionWrapper key={project.title} delay={0.1}>
                            <div className="flex flex-col gap-7">
                                {/* Project Header Row */}
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2a2a2a] pb-10 mb-8 md:mb-12">
                                    <div className="flex flex-col md:flex-row gap-4 md:items-baseline md:gap-8">
                                        <span className="heading-display text-4xl md:text-6xl lg:text-7xl text-[#7a7a7a] font-bold tracking-tighter">
                                            (0{index + 1})
                                        </span>
                                        <h3 className="heading-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase text-[#efece6]">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn-pill btn-light uppercase text-xs"
                                            >
                                                Live Site <MoveUpRight size={14} />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn-pill btn-outline-light uppercase text-xs"
                                            >
                                                <Play size={14} /> Demo Video
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn-pill btn-outline-light uppercase text-xs"
                                            >
                                                <Github size={14} /> Repo
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Details Grid */}
                                <div className="grid md:grid-cols-12 gap-8 md:gap-16 pt-8">
                                    {/* Left: Description */}
                                    <div className="md:col-span-6 flex flex-col gap-6">
                                        <h4 className="text-2xl md:text-3xl font-semibold text-[#efece6] tracking-tight">
                                            {project.subtitle}
                                        </h4>
                                        <p className="text-lg text-[#a09c95] leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-auto pt-8">
                                            {project.tech.map((tech: string) => (
                                                <span key={tech} className="font-mono text-sm text-[#7a7a7a]">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Massive Abstract Number/Visual Placeholder */}
                                    <div className="md:col-span-6 bg-[#141414] min-h-[400px] md:min-h-[500px] flex items-center justify-center p-8 rounded-xl border border-[#2a2a2a] group">
                                        <div className="heading-display text-[15rem] md:text-[20rem] text-[#1a1a1a] select-none">
                                            0{index + 1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SectionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
