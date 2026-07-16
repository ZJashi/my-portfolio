import {
  SiReact,
  SiCplusplus,
  SiSpringboot,
  SiApachespark,
  SiApachekafka,
  SiApachehadoop,
  SiApacheairflow,
  SiRust,
  SiFastapi,
  SiFlask,
  SiPython,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

export const TECH = {
  react: { name: "React", Icon: SiReact, color: "#61DAFB" },
  java: { name: "Java", Icon: DiJava, color: "#ED8B00" },
  cpp: { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  springboot: { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  spark: { name: "Spark", Icon: SiApachespark, color: "#E25A1C" },
  kafka: { name: "Kafka", Icon: SiApachekafka, color: "#231F20" },
  hdfs: { name: "HDFS", Icon: SiApachehadoop, color: "#66CCFF" },
  airflow: { name: "Airflow", Icon: SiApacheairflow, color: "#017CEE" },
  rust: { name: "Rust", Icon: SiRust, color: "#DEA584" },
  fastapi: { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  flask: { name: "Flask", Icon: SiFlask, color: "#000000" },
  python: { name: "Python", Icon: SiPython, color: "#3776AB" },
  postgres: { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  nextjs: { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  typescript: { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  tailwind: { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
} as const;

export type TechKey = keyof typeof TECH;
