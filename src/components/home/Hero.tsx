"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RollingProjects from "./RollingProjects";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[70vh] flex flex-col items-center justify-center text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-sm tracking-[0.2em] uppercase text-[var(--stone)]"
      >
        Data • AI • Physics • Math
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="mt-5 text-5xl md:text-6xl font-semibold text-[var(--ink)]"
      >
        Hi, I&apos;m Zura.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-6 max-w-2xl text-base md:text-lg text-[var(--stone)] leading-relaxed"
      >
        Currently, I am an AI researcher at New York University&apos;s Center for
        Artificial Intelligence and Data Science. I have a diverse scientific
        background spanning mathematics and physics. You can find a more
        detailed story{" "}
        <a
          href="/about"
          className="relative font-medium text-[var(--ink)]
            after:absolute after:left-0 after:-bottom-1
            after:h-[1.5px] after:w-0 after:bg-[var(--ink)]
            hover:after:w-full after:transition-all after:duration-300"
        >
          here
        </a>
        .
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        className="mt-10 flex flex-col sm:flex-row gap-3"
      >
        <Link
          href="/#contact"
          className="rounded-xl px-6 py-3 border border-black/15 bg-white/50 hover:bg-white/70 transition"
          style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
        >
          Contact me
        </Link>

        <Link
          href="/#projects"
          className="rounded-xl px-6 py-3 border border-black/15 bg-white/50 hover:bg-white/70 transition"
        >
          View projects
        </Link>
      </motion.div>

      <RollingProjects />
    </section>
  );
}
