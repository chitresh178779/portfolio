"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import GitHubStatsSection from "@/sections/GitHubStatsSection";
import AchievementsSection from "@/sections/AchievementsSection";
import CertificatesSection from "@/sections/CertificatesSection";
import AIChatSection from "@/sections/AIChatSection";
import ContactSection from "@/sections/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";

const DynamicCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const DynamicTerminal = dynamic(() => import("@/components/TerminalIntro"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-[#1a1a1a]/20 bg-[#efece6]">
      <Suspense fallback={null}>
        <DynamicCursor />
      </Suspense>

      <ScrollProgress />

      <div className="sticky top-0 h-[100dvh] z-0">
        <HeroSection />
      </div>

      <div className="relative z-10 bg-[#0a0a0a] rounded-t-[2.5rem] md:rounded-t-[4rem] overflow-hidden drop-shadow-2xl">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubStatsSection />
        <AchievementsSection />
        <CertificatesSection />
        <AIChatSection />
        <ContactSection />
      </div>
    </main>
  );
}
