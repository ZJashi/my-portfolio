import { notFound } from "next/navigation";
import Link from "next/link";
import { notes, CATEGORY_LABELS, type NoteCategory } from "@/content/notes";
import { formatDate } from "@/lib/date";

export function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const label = CATEGORY_LABELS[category as NoteCategory];
  if (!label) return { title: "Notes" };

  return {
    title: `${label} Notes | Zura Jashi`,
    description: `Notes and lecture materials on ${label.toLowerCase()} topics.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!(category in CATEGORY_LABELS)) {
    notFound();
  }

  const filtered = notes
    .filter((n) => n.category === category)
    .sort((a, b) => b.year - a.year || b.month - a.month);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-12">
      <header className="space-y-4">
        <Link
          href="/notes"
          className="text-sm text-[var(--stone)] hover:underline"
        >
          ← All notes
        </Link>

        <h1 className="text-4xl font-semibold text-[var(--ink)]">
          {CATEGORY_LABELS[category as NoteCategory]}
        </h1>

        <p className="text-[var(--stone)]">
          {filtered.length} note{filtered.length !== 1 && "s"}
        </p>
      </header>

      <section className="space-y-4">
        {filtered.map((n) => (
          <article
            key={`${n.title}-${n.year}-${n.month}`}
            className="
              rounded-2xl
              border border-black/10
              bg-white/40
              p-6
              hover:bg-white/55
              transition
            "
          >
            <div className="flex justify-between items-baseline gap-4">
              <h2 className="text-lg font-semibold leading-snug">{n.title}</h2>
              <span className="text-sm text-[var(--stone)]">
                {formatDate(n.year, n.month)}
              </span>
            </div>

            <p className="mt-3 text-[var(--stone)] leading-relaxed">
              {n.abstract}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {n.tags.map((t) => (
                <span
                  key={t}
                  className="
                    rounded-full
                    border border-black/10
                    bg-white/40
                    px-3 py-1
                    text-xs
                    text-[var(--stone)]
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={n.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Open PDF
              </a>
              <a href={n.pdfUrl} download className="text-sm hover:underline">
                Download
              </a>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="text-[var(--stone)]">
            No notes in this category yet.
          </div>
        )}
      </section>
    </main>
  );
}
