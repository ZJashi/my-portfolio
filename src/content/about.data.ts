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
      "Designed and maintained Spark batch and streaming pipelines for personalization systems",
      "Built Airflow DAGs with Kafka-based triggers, retries, and SLAs",
      "Integrated Kafka, HDFS, PostgreSQL, and internal APIs at production scale",
      "Optimized jobs for performance, memory usage, and fault tolerance",
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
    role: "M.S. in Data Science",
    company: "New York University",
    shortName: "NYU",
    url: "https://cds.nyu.edu/",
    time: "2025 — Present",
    bullets: [
      "Focus on machine learning, deep learning, and statistical methods",
      "Research in natural language processing and AI systems",
    ],
  },
  {
    role: "B.Sc. in Physics & Mathematics",
    company: "Free University of Tbilisi",
    shortName: "Free University",
    url: "https://freeuni.edu.ge/",
    time: "2020 — 2024",
    bullets: [
      "Double major in Theoretical Physics and Pure Mathematics",
      "Thesis on quantum information theory and machine learning applications",
      "Dean's list recognition for academic excellence",
    ],
  },
];

// Keep legacy export for backwards compatibility
export const about = workExperience;
