import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects | Zura Jashi",
  description:
    "Selected projects in data engineering, AI, physics, and quantitative research.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 space-y-20">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--ink)]">
          Projects
        </h1>
        <p className="text-lg text-[var(--stone)] leading-relaxed">
          A selection of projects spanning data engineering, artificial
          intelligence, physics, and quantitative research. Each project focuses
          on solving real problems with a strong emphasis on correctness,
          performance, and clarity.
        </p>
      </header>

      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative rounded-3xl border border-black/10
                       bg-white/40 p-6 transition
                       hover:bg-white/60"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.06)" }}
          >
            <div className="relative mb-5 aspect-video overflow-hidden rounded-2xl border border-black/5 bg-white">
              <Image
                src={project.preview}
                alt={project.title}
                fill
                className="object-cover transition duration-500
                           group-hover:scale-105"
                unoptimized
              />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-[var(--ink)]">
                {project.title}
              </h2>

              <p className="text-sm text-[var(--stone)] leading-relaxed">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10
                               bg-white/60 px-3 py-1
                               text-xs text-[var(--ink)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span
              className="pointer-events-none absolute right-6 top-6
                         text-sm text-[var(--stone)]
                         opacity-0 transition
                         group-hover:opacity-100"
            >
              View →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
