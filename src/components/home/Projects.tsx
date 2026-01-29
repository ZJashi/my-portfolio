"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/content/projects";
import { TechIcons } from "@/components/TechIcons";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)]">
          Projects
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-black/10 to-transparent dark:from-white/10" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full rounded-2xl border border-black/10 dark:border-white/10
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

                {/* GitHub badge */}
                <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full
                                 bg-white/90 dark:bg-black/70 text-xs font-medium
                                 text-[var(--ink)] opacity-0 -translate-y-2
                                 group-hover:opacity-100 group-hover:translate-y-0
                                 transition-all duration-300 flex items-center gap-1.5">
                  <FaGithub size={14} />
                  View on GitHub
                </span>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--stone)] transition-colors">
                    {project.title}
                  </h3>
                  {project.heroLabel && (
                    <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-[var(--ink)]/10 text-[var(--ink)]">
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
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
