"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[75vh] flex flex-col items-center justify-center text-center relative"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--ultramarine)]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--gold)]/5 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                   bg-[var(--gold)]/10 text-[var(--gold)] text-sm mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--gold)] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--gold)]" />
        </span>
        Open to opportunities
      </motion.div>

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
        Hi, I&apos;m{" "}
        <span className="text-[var(--ultramarine)]">Zura</span>
        <span className="text-[var(--gold)]">.</span>
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
          <div className="absolute inset-0 bg-[var(--ultramarine)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
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
    </section>
  );
}
