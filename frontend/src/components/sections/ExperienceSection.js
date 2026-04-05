"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const entryVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-bg-light py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-sans-heading font-extrabold text-text-heading mb-16"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-accent-blue/20" />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                variants={entryVariants}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full bg-accent-blue ring-4 ring-bg-light" />

                <p className="text-xs font-sans text-text-body/60 mb-1">
                  {item.period}
                </p>
                <h3 className="text-lg font-sans-heading font-bold text-text-heading">
                  {item.role}
                </h3>
                <p className="text-sm font-sans text-accent-blue font-medium mb-2">
                  {item.company}
                </p>
                <p className="text-sm font-sans text-text-body leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
