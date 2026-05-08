"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import type { Group } from "three";

type Connection = [number, number];

function NeuralCloud() {
  const groupRef = useRef<Group>(null);

  const { points, connections } = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < 600; i += 1) {
      const r = Math.cbrt(Math.random()) * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pts.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }

    const conns: Connection[] = [];
    for (let i = 0; i < pts.length; i += 1) {
      for (let j = i + 1; j < pts.length; j += 1) {
        const [ax, ay, az] = pts[i];
        const [bx, by, bz] = pts[j];
        const d = Math.hypot(ax - bx, ay - by, az - bz);
        if (d < 1.2) conns.push([i, j]);
      }
    }

    return { points: pts, connections: conns };
  }, []);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.0008;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={new Float32Array(points.flat())}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#ffffff" size={0.015} transparent opacity={0.6} />
      </points>
      {connections.map(([i, j], idx) => (
        <Line key={idx} points={[points[i], points[j]]} color="#6C47FF" lineWidth={0.4} transparent opacity={0.15} />
      ))}
    </group>
  );
}

export default function Hero() {
  const lines = ["{ ML / AI ENGINEER }", "NAUFAL", "FAISAL", "CS Student · UMT Lahore · 2027"];

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <fog attach="fog" args={["#06060A", 5, 15]} />
          <NeuralCloud />
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-[20vh]">
        {lines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
            className={
              index === 0
                ? "mb-2 font-mono text-xs tracking-[0.2em] text-muted"
                : index === 1
                  ? "font-display text-[clamp(60px,12vw,130px)] font-extrabold leading-[0.9] text-text"
                  : index === 2
                    ? "font-display text-[clamp(60px,12vw,130px)] font-extrabold leading-[0.9] text-accent"
                    : "mt-3 font-body text-sm text-muted"
            }
          >
            {line}
          </motion.p>
        ))}
      </div>

      <div className="absolute bottom-6 left-5 z-10">
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-mono text-[11px] tracking-[0.2em] text-muted"
        >
          SCROLL ↓
        </motion.span>
      </div>

      <div className="absolute bottom-6 right-5 z-10 font-mono text-[11px] tracking-[0.2em] text-muted">
        © 2025
      </div>
    </section>
  );
}
