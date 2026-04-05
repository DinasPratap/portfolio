"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/data";

const SocialIcon = ({ name }) => {
  const paths = {
    github: (
      <path
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
        fill="currentColor"
      />
    ),
    twitter: (
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
      />
    ),
    linkedin: (
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        fill="currentColor"
      />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.12 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-bg-dark py-28 px-6 relative overflow-hidden">
      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-accent-blue text-white text-sm font-sans font-medium px-5 py-2.5 rounded-lg shadow-lg"
          >
            Email copied!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.h2
          variants={childVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-sans-heading font-extrabold text-text-light mb-4"
        >
          Let&apos;s Build Something.
        </motion.h2>

        <motion.p
          variants={childVariants}
          className="text-text-light/70 font-sans text-base md:text-lg mb-10"
        >
          Open to internships, collabs, and interesting problems.
        </motion.p>

        <motion.button
          variants={childVariants}
          onClick={copyEmail}
          className="text-lg md:text-xl font-sans text-accent-cyan hover:text-accent-blue transition-colors cursor-pointer mb-12 break-all"
        >
          {personalInfo.email}
        </motion.button>

        <motion.div
          variants={childVariants}
          className="flex justify-center gap-5"
        >
          {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-12 h-12 rounded-full border border-text-light/20 flex items-center justify-center text-text-light/70 hover:text-text-light hover:border-accent-blue hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                <SocialIcon name={link.icon} />
              </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
