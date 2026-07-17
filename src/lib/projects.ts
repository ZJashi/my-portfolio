import type { TechKey } from "@/lib/tech";

export type Project = {
  title: string;
  shortDescription: string;
  heroLabel?: string;
  preview: string;
  previewDark?: string;
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
    preview: "/offers-hub.png",
    tech: ["python", "spark", "postgres", "kafka", "airflow"],
    github: "https://github.com/ZJashi",
    company: "Bank of Georgia",
  },
  {
    title: "Portfolio",
    shortDescription:
      "My personal portfolio website built with modern web technologies.",
    heroLabel: "Web Development",
    preview: "/portfolio-dark.png",
    previewDark: "/portfolio-light.png",
    tech: ["nextjs", "typescript", "tailwind", "react"],
    github: "https://github.com/ZJashi/my-portfolio",
    isPersonal: true,
  },
];
