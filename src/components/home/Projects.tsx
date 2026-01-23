import Link from "next/link";
import { projects } from "@/content/projects";
import { TechIcons } from "@/components/TechIcons";

export default function Projects() {
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
        {projects.map((project) => (
          <article
            key={project.slug}
            className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 p-6
                       hover:bg-white/55 dark:hover:bg-white/10 transition"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}
          >
            {project.heroLabel && (
              <span
                className="absolute right-4 top-4 text-xs rounded-full
                               bg-black/5 dark:bg-white/10 px-2 py-0.5 text-[var(--stone)]"
              >
                {project.heroLabel}
              </span>
            )}

            <h3 className="text-lg font-semibold text-[var(--ink)]">
              {project.title}
            </h3>

            <p className="mt-2 text-[var(--stone)] leading-relaxed">
              {project.shortDescription}
            </p>

            {project.tech && project.tech.length > 0 && (
              <div className="mt-4">
                <TechIcons tech={project.tech} size={18} />
              </div>
            )}

            {project.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs rounded-full border border-black/10 dark:border-white/10
                               px-2 py-0.5 text-[var(--stone)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
