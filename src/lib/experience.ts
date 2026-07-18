import type { TechKey } from "./tech";

export type ExperienceItem = {
  role: string;
  company: string;
  shortName: string;
  url?: string;
  time: string;
  bullets: string[];
  tech?: TechKey[];
};

export const workExperience: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "CFG - City Football Group",
    shortName: "CFG",
    url: "https://www.cityfootballgroup.com/",
    time: "Aug 2026 — Present",
    bullets: [
      "Develop agentic workflows to optimize the daily business processes",
    ],
    tech: ["python", "react", "fastapi", "pydanticai", "azure"],
  },
  {
    role: "AI Engineer",
    company: "NYU - Center of Artificial Intelligence & Data Science",
    shortName: "NYU",
    url: "https://cds.nyu.edu/",
    time: "Jan 2026 — Aug 2026",
    bullets: [
      "Conducting research on large language models and their applications",
      "Developing AI agentic workflows to assist mathematicians in their daily processes.",
      "Designed, implemented and benchmarked agentic workflow to generate the new research level" +
        "mathematical problem based on the existing paper.",
    ],
    tech: ["python", "react", "postgres"],
  },
  {
    role: "Big Data Engineer",
    company: "Bank of Georgia - Customer Tribe",
    shortName: "Bank of Georgia",
    url: "https://bankofgeorgia.ge/",
    time: "Apr 2025 — Jan 2026",
    bullets: [
      "Developed Spark pipelines (batch + streaming) to calculate customer eligibility for cashback, discounts, and loyalty offers across 4M+ customers.",
      "Built real-time Kafka workflows that update customer eligibility instantly when their data changes.",
      "Supported campaign launches by rerunning eligibility logic on demand for newly created offers.",
      "Worked with Java and QA Engineers to investigate customer cases and fix logic issues in complex Spark code.",
      "Deployed updates from dev to prod using Git, Jenkins, Docker, and Kubernetes",
    ],
    tech: ["spark", "kafka", "airflow", "hdfs", "python", "postgres", "oracle"],
  },
];

export const education: ExperienceItem[] = [
  {
    role: "M.S. in Theoretical Physics",
    company: "Perimeter Institute for Theoretical Physics",
    shortName: "Perimeter Institute",
    url: "https://perimeterinstitute.ca/",
    time: "Sep 2023 — May 2024",
    bullets: [],
  },
  {
    role: "B.Sc. in Mathematics",
    company: "New York University",
    shortName: "NYU",
    url: "https://www.nyu.edu/",
    time: "2019 — 2023",
    bullets: [],
  },
];
