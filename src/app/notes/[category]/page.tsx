"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { notes, CATEGORY_LABELS, type NoteCategory } from "@/content/notes";
import { formatDate } from "@/lib/date";
import { IoArrowBack, IoOpen, IoDownload, IoDocumentText } from "react-icons/io5";

const categoryIcons: Record<NoteCategory, string> = {
  mathematics: "∑",
  physics: "⚛",
  ai: "🧠",
};

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;

  if (!(category in CATEGORY_LABELS)) {
    notFound();
  }

  const cat = category as NoteCategory;
  const filtered = notes
    .filter((n) => n.category === cat)
    .sort((a, b) => b.year - a.year || b.month - a.month);

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link
          href="/notes"
          className="inline-flex items-center gap-2 text-sm text-[var(--stone)] hover:text-[var(--ultramarine)] transition-colors group"
        >
          <IoArrowBack size={16} className="transition-transform group-hover:-translate-x-1" />
          All Notes
        </Link>
      </motion.div>

      {/* Hero Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl
                     bg-[var(--gold)]/10 text-3xl mb-6"
        >
          {categoryIcons[cat]}
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--ink)] mb-4">
          {CATEGORY_LABELS[cat]} <span className="text-[var(--ultramarine)]">Notes</span>
        </h1>
        <p className="text-lg text-[var(--stone)]">
          {filtered.length} note{filtered.length !== 1 && "s"} in this collection
        </p>
      </motion.header>

      {/* Notes List */}
      <section className="space-y-6">
        {filtered.map((n, index) => (
          <motion.article
            key={`${n.title}-${n.year}-${n.month}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            className="group rounded-2xl border border-black/10 dark:border-white/10
                       bg-white/40 dark:bg-white/5 p-6
                       hover:bg-white/70 dark:hover:bg-white/10
                       hover:shadow-lg hover:scale-[1.01]
                       transition-all duration-300"
          >
            <div className="flex justify-between items-start gap-4">
              <h2 className="text-xl font-semibold leading-snug text-[var(--ink)] group-hover:text-[var(--ultramarine)] transition-colors">
                {n.title}
              </h2>
              <span className="text-sm text-[var(--stone)] whitespace-nowrap px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
                {formatDate(n.year, n.month)}
              </span>
            </div>

            <p className="mt-4 text-[var(--stone)] leading-relaxed">
              {n.abstract}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {n.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 dark:border-white/10
                             bg-white/40 dark:bg-white/5 px-3 py-1 text-xs text-[var(--stone)]"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                           bg-[var(--ultramarine)]/10 text-[var(--ultramarine)]
                           hover:bg-[var(--ultramarine)]/20 transition-colors text-sm font-medium"
              >
                <IoOpen size={16} />
                Open PDF
              </a>
              <a
                href={n.pdfUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                           border border-black/10 dark:border-white/10
                           hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-sm"
              >
                <IoDownload size={16} />
                Download
              </a>
            </div>
          </motion.article>
        ))}

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-[var(--stone)]"
          >
            <IoDocumentText size={48} className="mb-4 opacity-30" />
            <p className="text-lg">No notes in this category yet</p>
          </motion.div>
        )}
      </section>
    </main>
  );
}
