import Link from "next/link";
import { notes, CATEGORY_LABELS, type NoteCategory } from "@/content/notes";
import { formatDate } from "@/lib/date";

export const metadata = {
  title: "Notes | Zura Jashi",
  description:
    "A collection of LaTeX notes on mathematics, physics, and AI topics.",
};

const categories = Object.keys(CATEGORY_LABELS) as NoteCategory[];

export default function NotesPage() {
  const byCategory = Object.fromEntries(
    categories.map((c) => [
      c,
      notes
        .filter((n) => n.category === c)
        .sort((a, b) => b.year - a.year || b.month - a.month),
    ])
  ) as Record<NoteCategory, typeof notes>;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-[var(--ink)]">Notes</h1>
        <p className="max-w-2xl text-[var(--stone)] leading-relaxed">
          A collection of LaTeX notes. Each category scrolls vertically, newest
          notes first.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-3">
        {categories.map((cat) => (
          <section key={cat} className="space-y-4">
            <div className="flex items-baseline justify-between">
              <Link
                href={`/notes/${cat}`}
                className="text-xl font-semibold text-[var(--ink)] hover:underline underline-offset-4"
              >
                {CATEGORY_LABELS[cat]}
              </Link>
              <span className="text-sm text-[var(--stone)]">
                {byCategory[cat].length}
              </span>
            </div>

            <div
              className="
                relative
                h-[520px]
                overflow-y-auto
                rounded-2xl
                border border-black/10
                bg-white/30
                p-4
                space-y-4
              "
            >
              {byCategory[cat].map((n) => (
                <article
                  key={`${n.title}-${n.year}-${n.month}`}
                  className="
                    rounded-xl
                    border border-black/10
                    bg-white/50
                    p-4
                    hover:bg-white/70
                    transition
                  "
                >
                  <div className="flex justify-between items-baseline gap-3">
                    <h3 className="text-sm font-semibold leading-snug">
                      {n.title}
                    </h3>
                    <span className="text-xs text-[var(--stone)]">
                      {formatDate(n.year, n.month)}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-[var(--stone)] line-clamp-3">
                    {n.abstract}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {n.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 bg-white/40 px-2.5 py-0.5 text-xs text-[var(--stone)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-4">
                    <a
                      href={n.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs hover:underline"
                    >
                      Open PDF
                    </a>
                    <a
                      href={n.pdfUrl}
                      download
                      className="text-xs hover:underline"
                    >
                      Download
                    </a>
                  </div>
                </article>
              ))}

              {byCategory[cat].length === 0 && (
                <div className="text-sm text-[var(--stone)]">No notes yet.</div>
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
