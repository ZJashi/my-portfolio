export type Project = {
    slug: string;
    title: string;
    shortDescription: string;
    heroLabel?: string;
    preview: string; // image or gif (public/)
    tags: string[];
};

export const projects: Project[] = [
    {
        slug: "schumann-resonance",
        title: "Schumann Resonance Analysis",
        shortDescription:
            "Multi-year electromagnetic field processing with node detection and frequency statistics.",
        heroLabel: "Physics • Signal Processing",
        preview: "/previews/schumann.gif",
        tags: ["Physics", "Signal Processing", "Python"],
    },
    {
        slug: "options-trading",
        title: "Options Trading Simulator",
        shortDescription:
            "Implied volatility research, strategy backtesting, and EOD simulations.",
        heroLabel: "Quant • Finance",
        preview: "/previews/options.gif",
        tags: ["Finance", "Python", "Quant"],
    },
    {
        slug: "streaming-offers",
        title: "Streaming Offers Pipeline",
        shortDescription:
            "Spark + Kafka pipelines for eligibility and recommender payloads.",
        heroLabel: "Big Data • Streaming",
        preview: "/previews/streaming.gif",
        tags: ["Spark", "Kafka", "Data Engineering"],
    },
    {
        slug: "budget-dashboard",
        title: "Personal Budget Dashboard",
        shortDescription:
            "Fast analytics dashboard for personal finance tracking.",
        heroLabel: "Analytics",
        preview: "/previews/budget.png",
        tags: ["Analytics", "UI"],
    },
];
