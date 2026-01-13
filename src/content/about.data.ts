
import type { TechKey } from "./tech";


export const about = [
  {
    role: "AI Researcher",
    company: "NYU — Center of Artificial Intelligence & Data Science",
    time: "Jan 2025 — Present",
    bullets: [],
    tech: ["python", "react"],
  },
  {
    role: "Big Data Engineering Intern",
    company: "Bank of Georgia — Customer Tribe",
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
    company: "Perimeter Institute",
    time: "2022 — 2023",
    bullets: [
      "Investigate, develop and implement the twinned regression algorithm.",
      "Developed analytical and computational tools for theoretical physics",
      "Produced research notes and technical write-ups with faculty",
      "Extended existing theoretical frameworks with original contributions",
    ],
  },
] satisfies Array<{
  role: string;
  company: string;
  time: string;
  bullets: string[];
  tech?: TechKey[];
}>;
