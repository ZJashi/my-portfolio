"use client";

import { motion } from "framer-motion";
import { TECH } from "@/lib/tech";
import { skillGroups } from "@/lib/skills";
import { slideUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[70vh] flex flex-col items-center justify-center relative"
    >
      {/* Main content */}
      <div className="text-center max-w-3xl">
        <motion.p
          {...slideUp}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] uppercase text-(--stone) font-medium mb-6"
        >
          Data • AI • Physics • Math
        </motion.p>

        <motion.h1
          {...slideUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-(--ink) leading-tight"
        >
          Building the future
          <br />
          <span className="bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            with AI
          </span>
        </motion.h1>

        <motion.p
          {...slideUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-(--stone) leading-relaxed max-w-2xl mx-auto"
        >
          AI Researcher & Developer at{" "}
          <span className="text-(--ink) font-semibold">NYU</span>. Passionate
          about the intersection of physics, mathematics, and machine learning.
        </motion.p>

        <motion.div
          {...slideUp}
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
                       bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500
                       text-white shadow-lg shadow-teal-500/25
                       hover:shadow-xl hover:shadow-teal-500/30
                       hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">View my work</span>
            <div
              className="absolute inset-0 bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/zurab-jashi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl font-semibold
                       border-2 border-(--ink)/20 dark:border-white/20
                       bg-white/50 dark:bg-white/5 backdrop-blur-sm
                       hover:border-teal-500/50 hover:bg-teal-500/5
                       hover:scale-105 transition-all duration-300"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Skills — grouped */}
      <motion.div
        {...slideUp}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 w-full max-w-3xl"
      >
        <div className="h-px bg-linear-to-r from-transparent via-black/10 dark:via-white/10 to-transparent mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <div key={group.label}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-(--stone) mb-3">
                {group.label}
              </p>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                transition={{ delayChildren: gi * 0.1 }}
                className="flex flex-wrap gap-2"
              >
                {group.keys.map((key) => {
                  const tech = TECH[key];
                  return (
                    <motion.span
                      key={key}
                      variants={staggerItem}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm
                                 border border-black/10 dark:border-white/10
                                 bg-white/50 dark:bg-white/5
                                 text-(--ink) transition-colors duration-200
                                 hover:bg-white/80 dark:hover:bg-white/10"
                    >
                      <tech.Icon size={14} style={{ color: tech.color }} />
                      {tech.name}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
