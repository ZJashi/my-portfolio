import type { TechKey } from "@/content/tech";

export type Project = {
  title: string;
  shortDescription: string;
  heroLabel?: string;
  preview: string;
  previewDark?: string; // shown when in dark mode
  tags: string[];
  tech?: TechKey[];
  github: string;
  company?: string;
  isPersonal?: boolean;
};

export const projects: Project[] = [
  {
    title: "Offers Hub",
    shortDescription:
      "End-to-end data pipeline for real-time offer processing and analytics.",
    heroLabel: "Data Engineering",
    preview: "/Offers_Hub.png",
    tags: ["Python", "Spark", "PostgreSQL", "Kafka", "Airflow"],
    tech: ["python", "spark", "postgres", "kafka", "airflow"],
    github: "https://github.com/ZJashi",
    company: "Bank of Georgia",
  },
  {
    title: "Portfolio",
    shortDescription:
      "My personal portfolio website built with modern web technologies.",
    heroLabel: "Web Development",
    preview: "/portfolio-dark.gif",
    previewDark: "/portfolio-light.gif",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    tech: ["nextjs", "typescript", "tailwind", "react"],
    github: "https://github.com/ZJashi/portfolio",
    isPersonal: true,
  },
];
