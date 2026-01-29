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
} from "react-icons/si";
import { DiJava } from "react-icons/di";

export const TECH = {
  react: { name: "React", Icon: SiReact },
  java: { name: "Java", Icon: DiJava },
  cpp: { name: "C++", Icon: SiCplusplus },
  springboot: { name: "Spring Boot", Icon: SiSpringboot },
  spark: { name: "Spark", Icon: SiApachespark },
  kafka: { name: "Kafka", Icon: SiApachekafka },
  hdfs: { name: "HDFS", Icon: SiApachehadoop },
  airflow: { name: "Airflow", Icon: SiApacheairflow },
  rust: { name: "Rust", Icon: SiRust },
  fastapi: { name: "FastAPI", Icon: SiFastapi },
  flask: { name: "Flask", Icon: SiFlask },
  python: { name: "Python", Icon: SiPython },
  postgres: { name: "PostgreSQL", Icon: SiPostgresql },
} as const;

export type TechKey = keyof typeof TECH;
