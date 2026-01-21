import { projects } from "@/content/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { TechIcons } from "@/components/TechIcons";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project" };

  return {
    title: `${project.title} | Zura Jashi`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-[var(--ink)]">
          {project.title}
        </h1>
        <p className="text-lg text-[var(--stone)] leading-relaxed">
          {project.shortDescription}
        </p>
      </header>

      <div className="relative aspect-video overflow-hidden rounded-2xl border border-black/10">
        <Image
          src={project.preview}
          alt={project.title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {project.tech && project.tech.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--ink)]">
            Technologies
          </h2>
          <TechIcons tech={project.tech} size={24} />
        </section>
      )}

      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-sm text-[var(--stone)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </main>
  );
}
