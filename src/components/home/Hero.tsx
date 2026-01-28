"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[75vh] flex flex-col items-center justify-center text-center relative"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--ink)]/5 blur-[120px]" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm tracking-[0.25em] uppercase text-[var(--stone)] font-medium"
      >
        Data • AI • Physics • Math
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 text-5xl md:text-7xl font-semibold text-[var(--ink)]"
      >
        Hi, I&apos;m Zura.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-6 max-w-2xl text-lg md:text-xl text-[var(--stone)] leading-relaxed"
      >
        AI Researcher at{" "}
        <span className="text-[var(--ink)] font-medium">NYU</span> building at the
        intersection of machine learning, physics, and mathematics.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/projects"
          className="group relative px-8 py-4 rounded-xl
                     bg-[var(--ink)] text-white dark:text-[#1A1A1F]
                     font-medium overflow-hidden
                     hover:shadow-xl transition-shadow duration-300"
        >
          <span className="relative z-10">View my work</span>
          <div className="absolute inset-0 bg-[var(--stone)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Link>

        <Link
          href="/contact"
          className="px-8 py-4 rounded-xl
                     border border-black/15 dark:border-white/15
                     bg-white/50 dark:bg-white/10
                     hover:bg-white/80 dark:hover:bg-white/20
                     hover:shadow-lg transition-all duration-300"
        >
          Get in touch
        </Link>
      </motion.div>

      {/* Skills - Single Line Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 w-full max-w-3xl relative overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10" />

        <div className="flex gap-4 animate-scroll-left">
          {[...skills, ...skills].map((key, index) => {
            const tech = TECH[key];
            return (
              <div
                key={`${key}-${index}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                           border border-black/10 dark:border-white/10
                           bg-white/50 dark:bg-white/5
                           shrink-0"
              >
                <tech.Icon size={18} className="text-[var(--stone)]" />
                <span className="text-sm font-medium text-[var(--ink)]">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
