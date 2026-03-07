"use client";
import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
    "Programming Languages": "#38bdf8",
    "Frameworks & Libraries": "#a78bfa",
    "AI/ML Tools": "#22c55e",
    "Databases & DevTools": "#f59e0b",
};

type SkillItem = { name: string; level: number; category: string; color: string };

function CentralCore() {
    const ref = useRef<THREE.Mesh>(null);
    useFrame(({ clock }) => {
        if (!ref.current) return;
        ref.current.rotation.y = clock.getElapsedTime() * 0.5;
        ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    });
    return (
        <mesh ref={ref}>
            <icosahedronGeometry args={[0.5, 1]} />
            <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.6} />
        </mesh>
    );
}

function SkillNode({
    skill,
    index,
    total,
    radius,
    onHover,
    onLeave,
    hovered,
}: {
    skill: SkillItem;
    index: number;
    total: number;
    radius: number;
    onHover: (s: SkillItem) => void;
    onLeave: () => void;
    hovered: boolean;
}) {
    const ref = useRef<THREE.Group>(null);
    const angle = (index / total) * Math.PI * 2;

    useFrame(({ clock }) => {
        if (!ref.current) return;
        const t = clock.getElapsedTime() * 0.3 + angle;
        ref.current.position.x = Math.cos(t) * radius;
        ref.current.position.z = Math.sin(t) * radius;
        ref.current.position.y = Math.sin(t * 0.7 + index) * 0.8;
    });

    return (
        <group ref={ref}>
            <mesh
                onPointerEnter={() => onHover(skill)}
                onPointerLeave={onLeave}
            >
                <sphereGeometry args={[hovered ? 0.2 : 0.12, 16, 16]} />
                <meshBasicMaterial
                    color={skill.color}
                    transparent
                    opacity={hovered ? 1 : 0.7}
                />
            </mesh>
            {hovered && (
                <Html center distanceFactor={10}>
                    <div className="glass-card rounded-lg px-3 py-2 text-center whitespace-nowrap pointer-events-none">
                        <div className="text-xs font-semibold text-[#e2e8f0]">{skill.name}</div>
                        <div className="text-[10px] text-[#94a3b8] mt-0.5">{skill.category}</div>
                        <div className="mt-1 w-full bg-[#1e293b] rounded-full h-1.5">
                            <div
                                className="h-1.5 rounded-full transition-all duration-300"
                                style={{
                                    width: `${skill.level}%`,
                                    backgroundColor: skill.color,
                                }}
                            />
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}

function GalaxyScene() {
    const [hovered, setHovered] = useState<SkillItem | null>(null);

    const allSkills = useMemo(() => {
        const arr: SkillItem[] = [];
        Object.entries(skills).forEach(([category, items]) => {
            items.forEach((s) => {
                arr.push({
                    ...s,
                    category,
                    color: categoryColors[category] || "#38bdf8",
                });
            });
        });
        return arr;
    }, []);

    return (
        <>
            <ambientLight intensity={0.3} />
            <CentralCore />
            {allSkills.map((skill, i) => (
                <SkillNode
                    key={skill.name}
                    skill={skill}
                    index={i}
                    total={allSkills.length}
                    radius={2.5 + (i % 3) * 0.8}
                    onHover={setHovered}
                    onLeave={() => setHovered(null)}
                    hovered={hovered?.name === skill.name}
                />
            ))}
        </>
    );
}

export default function SkillGalaxy() {
    return (
        <div className="w-full h-[500px]">
            <Canvas camera={{ position: [0, 2, 6], fov: 50 }} dpr={[1, 1.5]}>
                <GalaxyScene />
            </Canvas>
        </div>
    );
}
