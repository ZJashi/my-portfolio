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

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[70vh] flex flex-col items-center justify-center relative scroll-mt-24"
    >
      {/* Main content - centered */}
      <div className="text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] uppercase text-[var(--stone)] font-medium mb-6"
        >
          Data • AI • Physics • Math
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-[var(--ink)] leading-tight"
        >
          Building the future
          <br />
          <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            with AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-[var(--stone)] leading-relaxed max-w-2xl mx-auto"
        >
          AI Researcher & Developer at{" "}
          <span className="text-[var(--ink)] font-semibold">NYU</span>.
          Passionate about the intersection of physics, mathematics, and machine learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 rounded-2xl font-semibold overflow-hidden
                       bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500
                       text-white shadow-lg shadow-teal-500/25
                       hover:shadow-xl hover:shadow-teal-500/30
                       hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">View my work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-2xl font-semibold
                       border-2 border-[var(--ink)]/20 dark:border-white/20
                       bg-white/50 dark:bg-white/5 backdrop-blur-sm
                       hover:border-teal-500/50 hover:bg-teal-500/5
                       hover:scale-105 transition-all duration-300"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Skills - Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 w-full relative overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10" />

        <div className="flex gap-4 animate-scroll-left">
          {[...skills, ...skills].map((key, index) => {
            const tech = TECH[key];
            return (
              <div
                key={`${key}-${index}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                           border border-black/5 dark:border-white/10
                           bg-white/60 dark:bg-white/5 backdrop-blur-sm
                           hover:border-teal-500/30 hover:bg-teal-500/5
                           transition-all duration-300
                           shrink-0"
              >
                <tech.Icon size={20} className="text-[var(--stone)]" />
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
