"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { projects } from "@/lib/data";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const badgeStyles = {
  "🏆": "bg-amber-100 text-amber-800",
  "🥇": "bg-blue-100 text-blue-800",
  "⚙️": "bg-gray-100 text-gray-700",
  "🔗": "bg-emerald-100 text-emerald-800",
  "🤖": "bg-purple-100 text-purple-800",
  "📐": "bg-cyan-100 text-cyan-800",
};

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      rotateX.set(-y * 6);
      rotateY.set(x * 6);
    },
    [rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  }, [rotateX, rotateY]);

  const badgeColor = badgeStyles[project.badgeEmoji] || "bg-gray-100 text-gray-700";

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        rotateX: springX,
        rotateY: springY,
        translateY: isHovered ? -4 : 0,
      }}
      transition={{ translateY: { duration: 0.25 } }}
      className={`bg-card rounded-xl border border-border shadow-sm transition-shadow duration-300 overflow-hidden ${
        isHovered ? "shadow-lg" : ""
      } ${project.isSolana ? "border-l-4 border-l-accent-solana" : ""}`}
    >
      <div className="p-6 sm:p-8">
        {/* Cluster label */}
        <span className="text-xs font-sans font-medium uppercase tracking-wider text-accent-blue mb-2 block">
          {project.cluster}
        </span>

        {/* Project name */}
        <h3 className="font-sans-heading font-bold text-xl sm:text-2xl text-text-heading mb-2">
          {project.name}
        </h3>

        {/* Description */}
        <p className="font-sans text-text-body text-sm sm:text-base leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-sans font-medium text-text-body"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Badge */}
        {project.badge && (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-sans font-semibold ${badgeColor}`}
          >
            <span>{project.badgeEmoji}</span>
            {project.badge}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-bg-light py-20 sm:py-28 px-6">
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
          className="font-sans-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-heading mb-3"
        >
          Projects
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={cardVariants}
          className="font-sans text-text-body text-lg sm:text-xl mb-12"
        >
          Things I&apos;ve built, shipped, and competed with.
        </motion.p>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
