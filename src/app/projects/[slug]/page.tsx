import { projects } from "@/content/projects";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-6">
      <h1 className="text-4xl font-semibold">{project.title}</h1>
      <p className="text-(--stone)">{project.shortDescription}</p>

      {/* expand later: screenshots, tech stack, writeup */}
    </main>
  );
}
