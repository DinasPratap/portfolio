"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { personalInfo, stats, marqueeItems } from "@/lib/data";

// --------------- Counter Hook ---------------

function useCounter(target, isInView, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || target === 0) return;
    hasAnimated.current = true;

    const start = performance.now();
    let raf;

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration]);

  return count;
}

// --------------- Stat Card ---------------

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(stat.value, isInView);

  const isPropFirm = stat.value === 0 && stat.displayText;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="text-3xl sm:text-4xl font-sans-heading font-bold text-text-heading mb-2">
        {isPropFirm ? (
          <span className="inline-flex items-center gap-1.5">
            <Check className="text-accent-blue" size={32} strokeWidth={3} />
          </span>
        ) : (
          <span>
            {stat.prefix ?? ""}
            {count}
            {stat.suffix ?? ""}
          </span>
        )}
      </div>
      <p className="text-sm text-text-body font-sans">
        {isPropFirm ? stat.displayText : stat.label}
      </p>
    </motion.div>
  );
}

// --------------- Marquee ---------------

function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden py-6 group">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-bg-light to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-bg-light to-transparent pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-4 text-sm sm:text-base font-sans text-text-body/70 flex items-center gap-4 shrink-0"
          >
            {item}
            <span className="text-border-secondary">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// --------------- About Section ---------------

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section id="about" className="bg-bg-light py-20 sm:py-28 px-6">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-5xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          variants={childVariants}
          className="font-sans-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-heading mb-8"
        >
          About Me
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={childVariants}
          className="font-sans text-lg sm:text-xl text-text-body leading-relaxed max-w-3xl mb-14"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Marquee */}
        <motion.div variants={childVariants}>
          <Marquee />
        </motion.div>
      </motion.div>
    </section>
  );
}
