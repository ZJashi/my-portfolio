// app/notes/page.tsx
import Link from "next/link";
import { notes, type NoteCategory } from "@/content/notes";

const categories: NoteCategory[] = ["Mathematics", "Physics", "AI"];

export default function NotesPage() {
  const byCategory = Object.fromEntries(
    categories.map((c) => [
      c,
      [...notes]
        .filter((n) => n.category === c)
        .sort((a, b) => b.year - a.year),
    ])
  ) as Record<NoteCategory, typeof notes>;

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-12">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-[var(--ink)]">Notes</h1>
        <p className="max-w-2xl text-[var(--stone)] leading-relaxed">
          LaTeX PDFs grouped into three tracks: Mathematics, Physics, and AI.
        </p>
      </header>

      {categories.map((cat) => (
        <section key={cat} className="space-y-5">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-semibold text-[var(--ink)]">{cat}</h2>
            <span className="text-sm text-[var(--stone)]">
              {byCategory[cat].length} note{byCategory[cat].length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="grid gap-4">
            {byCategory[cat].map((n) => (
              <article
                key={n.slug}
                className="rounded-2xl border border-black/10 bg-white/40 p-6 hover:bg-white/55 transition"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-xl font-semibold text-[var(--ink)]">
                    <Link
                      href={`/notes/${n.slug}`}
                      className="hover:underline underline-offset-4"
                    >
                      {n.title}
                    </Link>
                  </h3>
                  <span className="text-sm text-[var(--stone)]">{n.year}</span>
                </div>

                <p className="mt-3 text-[var(--stone)] leading-relaxed">
                  {n.abstract}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {n.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/10 bg-white/40 px-3 py-1 text-xs text-[var(--stone)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/notes/${n.slug}`}
                    className="rounded-xl px-4 py-2 border border-black/15 hover:bg-black/5 transition text-sm"
                  >
                    Read summary
                  </Link>

                  <a
                    href={n.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl px-4 py-2 border border-black/15 bg-white/50 hover:bg-white/70 transition text-sm"
                  >
                    Open PDF
                  </a>

                  <a
                    href={n.pdfUrl}
                    download
                    className="rounded-xl px-4 py-2 border border-black/15 hover:bg-black/5 transition text-sm"
                  >
                    Download
                  </a>
                </div>
              </article>
            ))}

            {byCategory[cat].length === 0 && (
              <div className="rounded-2xl border border-black/10 bg-white/30 p-6 text-[var(--stone)]">
                No notes here yet.
              </div>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
