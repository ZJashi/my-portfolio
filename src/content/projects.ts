import type { TechKey } from "@/content/tech";

export type Project = {
  title: string;
  shortDescription: string;
  heroLabel?: string;
  preview: string;
  tags: string[];
  tech?: TechKey[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Personal Budget Dashboard",
    shortDescription: "Fast analytics dashboard for personal finance tracking.",
    heroLabel: "Analytics",
    preview: "/previews/budget.png",
    tags: ["Analytics", "UI"],
    tech: ["react", "python"],
    github: "https://github.com/ZJashi",
  },
  {
    title: "Streaming Offers Pipeline",
    shortDescription:
      "Spark + Kafka structured streaming pipelines for real-time offer delivery.",
    heroLabel: "Big Data",
    preview: "/previews/streaming.png",
    tags: ["Streaming", "Infra"],
    tech: ["spark", "kafka", "airflow"],
    github: "https://github.com/ZJashi",
  },
];
