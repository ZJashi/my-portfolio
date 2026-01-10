import Link from "next/link";


export default function Projects() {
    const projects = [
        {
            title: "Schumann Resonance Data Project",
            desc:
                "Processing multi-year electromagnetic field data into daily summaries and frequency statistics.",
        },
        {
            title: "Options Trading Simulator",
            desc:
                "Strategy research with Python, implied volatility analysis, and end-of-day simulation.",
        },
        {
            title: "Streaming Offers Pipeline",
            desc:
                "Spark + Kafka structured streaming pipelines for eligibility + recommender offer payloads.",
        },
        {
            title: "Personal Budget Dashboard",
            desc:
                "Expense tracking dashboard with fast querying and clean analytics views.",
        },
    ];

    return (
        <section id="projects" className="space-y-6">
            <div className="flex items-end justify-between gap-4 flex-wrap">
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)]">
                    Projects
                </h2>
                <Link
                    href="/projects"
                    className="text-sm underline underline-offset-4 text-[var(--ultramarine)]"
                >
                    See all →
                </Link>

            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                {projects.map((p) => (
                    <div
                        key={p.title}
                        className="rounded-2xl border border-black/10 bg-white/40 p-6 hover:bg-white/55 transition"
                        style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}
                    >
                        <h3 className="text-lg font-semibold text-[var(--ink)]">
                            {p.title}
                        </h3>
                        <p className="mt-2 text-[var(--stone)] leading-relaxed">
                            {p.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
