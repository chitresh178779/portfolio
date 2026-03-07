"use client";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
    const progress = useScrollProgress();

    return (
        <div
            className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
            style={{
                transform: `scaleX(${progress / 100})`,
                backgroundColor: "#1a1a1a",
                transition: "transform 0.1s linear",
            }}
        />
    );
}
