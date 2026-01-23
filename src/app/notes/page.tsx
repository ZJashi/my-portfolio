"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { notes, CATEGORY_LABELS, type NoteCategory } from "@/content/notes";
import { formatDate } from "@/lib/date";
import { IoDocumentText, IoDownload, IoOpen } from "react-icons/io5";

const categories = Object.keys(CATEGORY_LABELS) as NoteCategory[];

const categoryIcons: Record<NoteCategory, string> = {
  mathematics: "∑",
  physics: "⚛",
  ai: "🧠",
};

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
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Hero Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-sm tracking-[0.2em] uppercase text-[var(--gold)] mb-4"
        >
          Knowledge Archive
        </motion.p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--ink)] mb-4">
          LaTeX <span className="text-[var(--ultramarine)]">Notes</span>
        </h1>
        <p className="text-lg text-[var(--stone)] max-w-2xl mx-auto leading-relaxed">
          A curated collection of notes on mathematics, physics, and AI.
          Each category scrolls vertically, newest first.
        </p>
      </motion.header>

      {/* Category Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {categories.map((cat, catIndex) => (
          <motion.section
            key={cat}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
            className="space-y-4"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between">
              <Link
                href={`/notes/${cat}`}
                className="group flex items-center gap-3 hover:text-[var(--ultramarine)] transition-colors"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl
                               bg-[var(--gold)]/10 text-lg">
                  {categoryIcons[cat]}
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-[var(--ink)] group-hover:text-[var(--ultramarine)] transition-colors">
                    {CATEGORY_LABELS[cat]}
                  </h2>
                  <span className="text-xs text-[var(--stone)]">
                    {byCategory[cat].length} note{byCategory[cat].length !== 1 && "s"}
                  </span>
                </div>
              </Link>
            </div>

            {/* Notes Container */}
            <div
              className="relative h-[520px] overflow-y-auto rounded-2xl
                         border border-black/10 dark:border-white/10
                         bg-white/30 dark:bg-white/5 p-4 space-y-4
                         scrollbar-thin scrollbar-thumb-black/10 scrollbar-track-transparent"
            >
              {byCategory[cat].map((n, noteIndex) => (
                <motion.article
                  key={`${n.title}-${n.year}-${n.month}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + noteIndex * 0.05 }}
                  className="group rounded-xl border border-black/10 dark:border-white/10
                             bg-white/50 dark:bg-white/5 p-4
                             hover:bg-white/80 dark:hover:bg-white/10
                             hover:shadow-md hover:scale-[1.01]
                             transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="text-sm font-semibold leading-snug text-[var(--ink)] group-hover:text-[var(--ultramarine)] transition-colors">
                      {n.title}
                    </h3>
                    <span className="text-xs text-[var(--stone)] whitespace-nowrap">
                      {formatDate(n.year, n.month)}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-[var(--stone)] line-clamp-3 leading-relaxed">
                    {n.abstract}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {n.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 dark:border-white/10
                                   bg-white/40 dark:bg-white/5 px-2 py-0.5 text-xs text-[var(--stone)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    <a
                      href={n.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[var(--ultramarine)] hover:underline"
                    >
                      <IoOpen size={14} />
                      Open
                    </a>
                    <a
                      href={n.pdfUrl}
                      download
                      className="inline-flex items-center gap-1.5 text-xs text-[var(--ultramarine)] hover:underline"
                    >
                      <IoDownload size={14} />
                      Download
                    </a>
                  </div>
                </motion.article>
              ))}

              {byCategory[cat].length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-[var(--stone)]">
                  <IoDocumentText size={32} className="mb-2 opacity-30" />
                  <span className="text-sm">No notes yet</span>
                </div>
              )}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
