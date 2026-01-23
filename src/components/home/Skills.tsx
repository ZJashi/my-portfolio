"use client";

import { motion } from "framer-motion";
import { TECH, type TechKey } from "@/content/tech";

const skills: TechKey[] = [
  "python",
  "java",
  "react",
  "spark",
  "kafka",
  "airflow",
  "fastapi",
  "rust",
  "cpp",
  "springboot",
  "hdfs",
  "flask",
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)]">
          Skills
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-black/10 to-transparent dark:from-white/10" />
      </motion.div>

      {/* Floating Skills - Marquee Style */}
      <div className="relative overflow-hidden py-8">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10" />

        {/* First row - scrolling left */}
        <div className="flex gap-6 mb-6 animate-scroll-left">
          {[...skills, ...skills].map((key, index) => {
            const tech = TECH[key];
            return (
              <motion.div
                key={`${key}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl
                           border border-black/10 dark:border-white/10
                           bg-white/50 dark:bg-white/5
                           hover:bg-white/80 dark:hover:bg-white/10
                           hover:shadow-lg hover:scale-105
                           transition-all duration-300 shrink-0"
              >
                <tech.Icon size={24} className="text-[var(--ultramarine)]" />
                <span className="text-sm font-medium text-[var(--ink)]">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Second row - scrolling right */}
        <div className="flex gap-6 animate-scroll-right">
          {[...skills.slice().reverse(), ...skills.slice().reverse()].map((key, index) => {
            const tech = TECH[key];
            return (
              <motion.div
                key={`${key}-rev-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl
                           border border-black/10 dark:border-white/10
                           bg-white/50 dark:bg-white/5
                           hover:bg-white/80 dark:hover:bg-white/10
                           hover:shadow-lg hover:scale-105
                           transition-all duration-300 shrink-0"
              >
                <tech.Icon size={24} className="text-[var(--ultramarine)]" />
                <span className="text-sm font-medium text-[var(--ink)]">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
