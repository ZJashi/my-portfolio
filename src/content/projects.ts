import type { TechKey } from "@/content/tech";

export type Project = {
    slug: string;
    title: string;
    shortDescription: string;
    heroLabel?: string;
    preview: string;
    tags: string[];
    tech?: TechKey[];
};

export const projects: Project[] = [
    {
        slug: "budget-dashboard",
        title: "Personal Budget Dashboard",
        shortDescription:
            "Fast analytics dashboard for personal finance tracking.",
        heroLabel: "Analytics",
        preview: "/previews/budget.png",
        tags: ["Analytics", "UI"],
        tech: ["react", "python"],
    },
    {
        slug: "streaming-offers",
        title: "Streaming Offers Pipeline",
        shortDescription:
            "Spark + Kafka structured streaming pipelines for real-time offer delivery.",
        heroLabel: "Big Data",
        preview: "/previews/streaming.png",
        tags: ["Streaming", "Infra"],
        tech: ["spark", "kafka", "airflow"],
    },
];
