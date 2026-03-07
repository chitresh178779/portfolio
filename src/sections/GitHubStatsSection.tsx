"use client";
import { useState, useEffect } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import RevealText from "@/components/RevealText";
import { MoveUpRight, Loader2 } from "lucide-react";

interface GitHubData {
    repos: number;
    stars: number;
    followers: number;
    forks: number;
}

export default function GitHubStatsSection() {
    const [data, setData] = useState<GitHubData>({ repos: 0, stars: 0, followers: 0, forks: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                const username = "Chitresh178779";

                // Fetch user profile stats
                const userRes = await fetch(`https://api.github.com/users/${username}`);
                const userData = await userRes.json();

                // Fetch repositories for stars and forks calculation (up to 100 recent repos)
                const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                const reposData = await reposRes.json();

                let totalStars = 0;
                let totalForks = 0;

                if (Array.isArray(reposData)) {
                    reposData.forEach(repo => {
                        totalStars += repo.stargazers_count;
                        totalForks += repo.forks_count;
                    });
                }

                setData({
                    repos: userData.public_repos || 0,
                    followers: userData.followers || 0,
                    stars: totalStars,
                    forks: totalForks,
                });
            } catch (error) {
                console.error("Failed to fetch GitHub stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubStats();
    }, []);

    return (
        <section id="github" className="section-dark mt-16 md:mt-24 py-[80px] md:py-[120px] px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 2xl:px-64 border-t border-[#2a2a2a] overflow-hidden relative z-10">
            <div className="max-w-[1400px] w-full mx-auto">
                <SectionWrapper>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
                        <RevealText
                            text="OPEN SOURCE"
                            className="heading-section text-4xl md:text-5xl lg:text-6xl tracking-widest leading-[0.85]"
                        />
                        <a
                            href="https://github.com/Chitresh178779"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-pill btn-light uppercase text-[10px] md:text-xs mb-4"
                        >
                            View GitHub <MoveUpRight size={14} />
                        </a>
                    </div>
                </SectionWrapper>

                {/* Minimalist Grid replacement for RPG stats */}
                <div className="grid md:grid-cols-12 gap-12">
                    {/* Left: Summary */}
                    <SectionWrapper delay={0.1} className="md:col-span-5">
                        <p className="text-lg md:text-xl font-medium text-[#efece6] leading-[1.8] mb-8">
                            A track record of consistent contributions, complex system architectures, and community-driven development.
                        </p>
                        <div className="font-mono text-sm text-[#7a7a7a] space-y-2">
                            <p>Status: <span className="text-[#efece6]">{loading ? "Fetching live data..." : "Live via GitHub API"}</span></p>
                            <p>System: <span className="text-[#efece6]">Active</span></p>
                        </div>
                    </SectionWrapper>

                    {/* Right: Brutalist Metrics */}
                    <div className="md:col-span-7 grid grid-cols-2 gap-8 md:gap-10 gap-y-16">
                        <SectionWrapper delay={0.2}>
                            <h3 className="font-mono text-sm text-[#7a7a7a] mb-2 uppercase tracking-widest">Repositories</h3>
                            <div className="heading-display text-6xl md:text-8xl text-[#efece6]">
                                {loading ? <Loader2 className="animate-spin w-12 h-12 md:w-20 md:h-20 text-[#4a4a4a]" /> : data.repos}
                            </div>
                        </SectionWrapper>

                        <SectionWrapper delay={0.3}>
                            <h3 className="font-mono text-sm text-[#7a7a7a] mb-2 uppercase tracking-widest">Total Stars</h3>
                            <div className="heading-display text-6xl md:text-8xl text-[#efece6]">
                                {loading ? <Loader2 className="animate-spin w-12 h-12 md:w-20 md:h-20 text-[#4a4a4a]" /> : data.stars}
                            </div>
                        </SectionWrapper>

                        <SectionWrapper delay={0.4}>
                            <h3 className="font-mono text-sm text-[#7a7a7a] mb-2 uppercase tracking-widest">Followers</h3>
                            <div className="heading-display text-6xl md:text-8xl text-[#efece6]">
                                {loading ? <Loader2 className="animate-spin w-12 h-12 md:w-20 md:h-20 text-[#4a4a4a]" /> : data.followers}
                            </div>
                        </SectionWrapper>

                        <SectionWrapper delay={0.5}>
                            <h3 className="font-mono text-sm text-[#7a7a7a] mb-2 uppercase tracking-widest">Forks Generated</h3>
                            <div className="heading-display text-6xl md:text-8xl text-[#efece6]">
                                {loading ? <Loader2 className="animate-spin w-12 h-12 md:w-20 md:h-20 text-[#4a4a4a]" /> : data.forks}
                            </div>
                        </SectionWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}
