import type { TechKey } from "@/lib/tech";

export type SkillGroup = {
  label: string;
  keys: TechKey[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    keys: ["python", "java", "typescript"],
  },
  {
    label: "Data",
    keys: ["spark", "kafka", "airflow", "hdfs", "pydanticai", "postgres"],
  },
  {
    label: "Frameworks",
    keys: ["react", "fastapi", "springboot"],
  },
];
