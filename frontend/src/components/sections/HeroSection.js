"use client";

import { useState, useEffect, useRef, useMemo, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// --------------- 3D Particle Field ---------------

function ParticleField({ count = 400 }) {
  const meshRef = useRef();

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sz[i] = Math.random() * 0.03 + 0.01;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    const posAttr = meshRef.current.geometry.attributes.position;
    const arr = posAttr.array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += Math.sin(time * 0.3 + i) * 0.001;
      arr[i * 3] += Math.cos(time * 0.2 + i) * 0.0005;
    }
    posAttr.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#3B82F6"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 1.5]}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: false, alpha: true }}
    >
      <ParticleField />
    </Canvas>
  );
}

const DynamicScene = dynamic(() => Promise.resolve(Scene), { ssr: false });

// --------------- Hero Section ---------------

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.04, duration: 0.5, ease: "easeOut" },
  }),
};

const roleVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, filter: "blur(4px)", transition: { duration: 0.3 } },
};

export default function HeroSection() {
  const { displayName, roles, tagline } = personalInfo;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const letters = displayName.split("");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0F1E" }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <DynamicScene />
        </Suspense>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#0A0F1E]/40 to-[#0A0F1E]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Display Name */}
        <h1 className="font-sans-heading font-bold text-4xl sm:text-5xl md:text-7xl tracking-tight mb-6">
          {letters.map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
              style={{ color: "#F8F7F4" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Roles typewriter */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              variants={roleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-lg sm:text-2xl font-sans-heading font-medium"
              style={{ color: "#3B82F6" }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-base sm:text-lg font-sans mb-10"
          style={{ color: "#F8F7F4", opacity: 0.75 }}
        >
          {tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-8 py-3 rounded-lg font-sans-heading font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-blue/25"
            style={{ backgroundColor: "#3B82F6", color: "#F8F7F4" }}
          >
            View Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3 rounded-lg font-sans-heading font-semibold text-sm tracking-wide border transition-all duration-300 hover:scale-105"
            style={{ borderColor: "#3B82F6", color: "#F8F7F4" }}
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} style={{ color: "#F8F7F4", opacity: 0.5 }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
