"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField() {
    const ref = useRef<THREE.Points>(null);
    const count = 600;

    const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
            const c = new THREE.Color().setHSL(0.55 + Math.random() * 0.15, 0.8, 0.6);
            col[i * 3] = c.r;
            col[i * 3 + 1] = c.g;
            col[i * 3 + 2] = c.b;
        }
        return [pos, col];
    }, []);

    useFrame(({ clock, pointer }) => {
        if (!ref.current) return;
        ref.current.rotation.y = clock.getElapsedTime() * 0.05 + pointer.x * 0.3;
        ref.current.rotation.x = pointer.y * 0.2;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-color" args={[colors, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.04} vertexColors transparent opacity={0.8} sizeAttenuation />
        </points>
    );
}

function NeuralConnections() {
    const ref = useRef<THREE.Group>(null);
    const nodeCount = 30;

    const nodes = useMemo(() => {
        const arr: THREE.Vector3[] = [];
        for (let i = 0; i < nodeCount; i++) {
            arr.push(
                new THREE.Vector3(
                    (Math.random() - 0.5) * 8,
                    (Math.random() - 0.5) * 8,
                    (Math.random() - 0.5) * 8
                )
            );
        }
        return arr;
    }, []);

    const connections = useMemo(() => {
        const lines: [THREE.Vector3, THREE.Vector3][] = [];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                if (nodes[i].distanceTo(nodes[j]) < 4) {
                    lines.push([nodes[i], nodes[j]]);
                }
            }
        }
        return lines;
    }, [nodes]);

    useFrame(({ clock }) => {
        if (!ref.current) return;
        ref.current.rotation.y = clock.getElapsedTime() * 0.03;
    });

    return (
        <group ref={ref}>
            {nodes.map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.06, 16, 16]} />
                    <meshBasicMaterial color="#38bdf8" transparent opacity={0.8} />
                </mesh>
            ))}
            {connections.map(([start, end], i) => {
                const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
                const dir = new THREE.Vector3().subVectors(end, start);
                const len = dir.length();
                const quaternion = new THREE.Quaternion();
                quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
                return (
                    <mesh key={`c-${i}`} position={mid} quaternion={quaternion}>
                        <cylinderGeometry args={[0.005, 0.005, len, 4]} />
                        <meshBasicMaterial color="#38bdf8" transparent opacity={0.15} />
                    </mesh>
                );
            })}
        </group>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.2} />
                <ParticleField />
                <NeuralConnections />
            </Canvas>
        </div>
    );
}
