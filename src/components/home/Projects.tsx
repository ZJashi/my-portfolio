"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { TechIcons } from "@/components/ui/TechIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/lib/projects";
import { useTheme } from "@/hooks/useTheme";
import { fadeUp } from "@/lib/animations";
import styles from "./Projects.module.css";

function ProjectCard({ project }: { project: Project }) {
  const inner = <ProjectCardContent project={project} />;
  return project.isPersonal ? (
    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.card}>
      {inner}
    </a>
  ) : (
    <div className={styles.card}>{inner}</div>
  );
}

function ProjectCardContent({ project }: { project: Project }) {
  const { theme } = useTheme();
  const previewSrc =
    theme === "dark" && project.previewDark ? project.previewDark : project.preview;

  return (
    <>
      <div className={styles.imageWrapper}>
        <Image
          src={previewSrc}
          alt={project.title}
          fill
          className={styles.image}
          unoptimized
        />
        <div className={styles.imageOverlay} />

        {project.isPersonal && (
          <span className={styles.githubBadge}>
            <FaGithub size={14} />
            View on GitHub
          </span>
        )}
      </div>

      <div className={styles.cardContent}>
        <div>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <div className={styles.badgeRow}>
            {project.heroLabel && (
              <span className={`${styles.badge} ${styles.badgeHero}`}>
                {project.heroLabel}
              </span>
            )}
            {project.company && (
              <span className={`${styles.badge} ${styles.badgeCompany}`}>
                @ {project.company}
              </span>
            )}
            {project.isPersonal && (
              <span className={`${styles.badge} ${styles.badgePersonal}`}>
                Personal Project
              </span>
            )}
          </div>
        </div>

        <p className={styles.cardDescription}>{project.shortDescription}</p>

        {project.tech && project.tech.length > 0 && (
          <div className={styles.techRow}>
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
      <div className={styles.header}>
        <SectionHeader title="Projects" />
      </div>

      <div className={styles.grid}>
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
