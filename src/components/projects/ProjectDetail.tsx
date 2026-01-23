"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TechIcons } from "@/components/TechIcons";
import { IoArrowBack, IoGlobeOutline, IoLogoGithub } from "react-icons/io5";
import type { Project } from "@/content/projects";

type Props = {
  project: Project;
};

export function ProjectDetail({ project }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--stone)] hover:text-[var(--ultramarine)] transition-colors group"
        >
          <IoArrowBack size={16} className="transition-transform group-hover:-translate-x-1" />
          All Projects
        </Link>
      </motion.div>

      {/* Hero Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        {project.heroLabel && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4 text-sm px-3 py-1 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]"
          >
            {project.heroLabel}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl md:text-5xl font-semibold text-[var(--ink)] mb-4"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-xl text-[var(--stone)] leading-relaxed"
        >
          {project.shortDescription}
        </motion.p>
      </motion.header>

      {/* Project Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative aspect-video overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-xl mb-10"
      >
        <Image
          src={project.preview}
          alt={project.title}
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </motion.div>

      {/* Tech Stack */}
      {project.tech && project.tech.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-8 p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5"
        >
          <h2 className="text-lg font-semibold text-[var(--ink)] mb-4">
            Tech Stack
          </h2>
          <TechIcons tech={project.tech} size={28} />
        </motion.section>
      )}

      {/* Tags */}
      {project.tags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {project.tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              className="rounded-full border border-black/10 dark:border-white/10
                         bg-white/60 dark:bg-white/5 px-4 py-1.5 text-sm text-[var(--stone)]"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* Action Buttons Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="flex gap-4"
      >
        <button
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-[var(--ultramarine)] text-white font-medium
                     hover:bg-[var(--ultramarine)]/90 transition-colors"
        >
          <IoGlobeOutline size={18} />
          Live Demo
        </button>
        <button
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     border border-black/10 dark:border-white/10
                     hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <IoLogoGithub size={18} />
          View Code
        </button>
      </motion.div>
    </main>
  );
}
