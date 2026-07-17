"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { TechIcons } from "@/components/ui/TechIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/lib/projects";
import { useTheme } from "@/context/ThemeContext";
import { fadeUp } from "@/lib/animations";

const cardClass =
  "group block h-full rounded-2xl border border-black/10 dark:border-white/10 \
bg-white/40 dark:bg-white/5 overflow-hidden \
hover:shadow-xl hover:scale-[1.02] \
transition-all duration-300";

function ProjectCard({ project }: { project: Project }) {
  const inner = <ProjectCardContent project={project} />;
  return project.isPersonal ? (
    <a href={project.github} target="_blank" rel="noopener noreferrer" className={cardClass}>
      {inner}
    </a>
  ) : (
    <div className={cardClass}>{inner}</div>
  );
}

function ProjectCardContent({ project }: { project: Project }) {
  const { theme } = useTheme();
  const previewSrc =
    theme === "dark" && project.previewDark ? project.previewDark : project.preview;

  return (
    <>
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-linear-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10">
        <Image
          src={previewSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {project.isPersonal && (
          <span
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full
                       bg-white/90 text-xs font-medium text-black
                       opacity-0 -translate-y-2
                       group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-300 flex items-center gap-1.5"
          >
            <FaGithub size={14} />
            View on GitHub
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-(--ink) group-hover:text-(--stone) transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.heroLabel && (
              <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-(--ink)/10 text-(--ink)">
                {project.heroLabel}
              </span>
            )}
            {project.company && (
              <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                @ {project.company}
              </span>
            )}
            {project.isPersonal && (
              <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                Personal Project
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-(--stone) leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        {project.tech && project.tech.length > 0 && (
          <div className="pt-2">
            <TechIcons tech={project.tech} size={18} showLabelsOnHover />
          </div>
        )}
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeader title="Projects" className="mb-10" />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            {...fadeUp}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
