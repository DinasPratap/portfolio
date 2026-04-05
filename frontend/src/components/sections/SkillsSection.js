"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

const categories = Object.keys(skills);

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-bg-light py-20 sm:py-28 px-6">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-5xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          variants={cardVariants}
          className="font-sans-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-heading mb-12"
        >
          Skills &amp; Stack
        </motion.h2>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={cardVariants}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-sans-heading font-bold text-lg text-text-heading mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skills[category].map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pillVariants}
                    whileHover={{
                      scale: 1.07,
                      boxShadow: "0 0 12px rgba(59,130,246,0.35), 0 0 20px rgba(6,182,212,0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="inline-block rounded-full border border-border bg-white px-3.5 py-1.5 text-sm font-sans text-text-body cursor-default transition-colors duration-200 hover:border-accent-blue/40"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
