"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)]">
          About Me
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-black/10 to-transparent dark:from-white/10" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 text-[var(--stone)] leading-relaxed"
        >
          <p>
            I&apos;m a researcher and engineer at the intersection of{" "}
            <span className="text-[var(--ink)] font-medium">artificial intelligence</span>,{" "}
            <span className="text-[var(--ink)] font-medium">physics</span>, and{" "}
            <span className="text-[var(--ink)] font-medium">mathematics</span>.
          </p>

          <p>
            Currently pursuing my Master&apos;s in Data Science at NYU while working
            as an AI researcher at the Center for Data Science.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-5 text-[var(--stone)] leading-relaxed"
        >
          <p>
            My journey started with theoretical physics and pure mathematics,
            giving me a strong foundation for understanding complex systems.
          </p>

          <p>
            This naturally led me to machine learning and data engineering—from
            large-scale pipelines to cutting-edge AI research.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
