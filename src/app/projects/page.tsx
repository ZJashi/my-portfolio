"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { TechIcons } from "@/components/TechIcons";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Hero Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-sm tracking-[0.2em] uppercase text-[var(--gold)] mb-4"
        >
          My Work
        </motion.p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--ink)] mb-4">
          Featured <span className="text-[var(--ultramarine)]">Projects</span>
        </h1>
        <p className="text-lg text-[var(--stone)] max-w-2xl mx-auto leading-relaxed">
          A selection of projects spanning data engineering, AI, and quantitative research.
          Each focuses on solving real problems with correctness and clarity.
        </p>
      </motion.header>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block h-full rounded-3xl border border-black/10 dark:border-white/10
                         bg-white/40 dark:bg-white/5 overflow-hidden
                         hover:shadow-xl hover:scale-[1.02]
                         transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10">
                <Image
                  src={project.preview}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* View badge */}
                <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full
                                 bg-white/90 dark:bg-black/70 text-xs font-medium
                                 text-[var(--ink)] opacity-0 -translate-y-2
                                 group-hover:opacity-100 group-hover:translate-y-0
                                 transition-all duration-300">
                  View Project →
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--ink)] group-hover:text-[var(--ultramarine)] transition-colors">
                    {project.title}
                  </h2>
                  {project.heroLabel && (
                    <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                      {project.heroLabel}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[var(--stone)] leading-relaxed line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                {project.tech && project.tech.length > 0 && (
                  <div className="pt-2">
                    <TechIcons tech={project.tech} size={18} showLabelsOnHover />
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full
                                 border border-black/10 dark:border-white/10
                                 text-[var(--stone)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
