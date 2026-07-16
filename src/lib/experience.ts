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
    role: "AI Researcher",
    company: "NYU — Center of Artificial Intelligence & Data Science",
    shortName: "NYU",
    url: "https://cds.nyu.edu/",
    time: "Jan 2025 — Present",
    bullets: [
      "Conducting research on large language models and their applications",
      "Developing novel AI architectures for scientific computing",
      "Collaborating with faculty on cutting-edge machine learning research",
    ],
    tech: ["python", "react"],
  },
  {
    role: "Big Data Engineering Intern",
    company: "Bank of Georgia — Customer Tribe",
    shortName: "Bank of Georgia",
    url: "https://bankofgeorgia.ge/",
    time: "Apr 2024 — Jan 2025",
    bullets: [
      "Developed Spark pipelines (batch + streaming) to calculate customer eligibility for cashback, discounts, and loyalty offers across 4M+ customers.",
      "Built real-time Kafka workflows that update customer eligibility instantly when their data changes.",
      "Supported campaign launches by rerunning eligibility logic on demand for newly created offers.",
      "Worked with Java and QA Engineers to investigate customer cases and fix logic issues in complex Spark code.",
      "Deployed updates from dev to prod using Git, Jenkins, Docker, and Kubernetes",
    ],
    tech: ["spark", "kafka", "airflow", "hdfs", "python"],
  },
  {
    role: "Machine Learning Intern",
    company: "Perimeter Institute for Theoretical Physics",
    shortName: "Perimeter Institute",
    url: "https://perimeterinstitute.ca/",
    time: "2022 — 2023",
    bullets: [
      "Investigated, developed and implemented the twinned regression algorithm",
      "Developed analytical and computational tools for theoretical physics",
      "Produced research notes and technical write-ups with faculty",
      "Extended existing theoretical frameworks with original contributions",
    ],
  },
];

export const education: ExperienceItem[] = [
  {
    role: "M.S. in Theoretical Physics",
    company: "Perimeter Institute for Theoretical Physics",
    shortName: "Perimeter Institute",
    url: "https://perimeterinstitute.ca/",
    time: "2023 — 2024",
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
