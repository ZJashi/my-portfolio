"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { notes, TAG_LABELS, type NoteTag } from "@/content/notes";
import { IoOpen, IoDownload } from "react-icons/io5";
import { TbMathFunction } from "react-icons/tb";
import { GiAtom } from "react-icons/gi";
import { PiBrainBold } from "react-icons/pi";

const TAG_ICONS: Record<NoteTag, React.ComponentType<{ size?: number; className?: string }>> = {
  math: TbMathFunction,
  physics: GiAtom,
  ai: PiBrainBold,
};

const TAG_COLORS: Record<NoteTag, string> = {
  math: "text-[#1F4E8C]",
  physics: "text-[#7C3AED]",
  ai: "text-[#059669]",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function TagFilter({
  tags,
  activeTag,
  onTagChange,
}: {
  tags: NoteTag[];
  activeTag: NoteTag | null;
  onTagChange: (tag: NoteTag | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagChange(null)}
        className={`rounded-full border px-3 py-1.5 text-sm transition ${
          activeTag === null
            ? "border-[var(--ink)] bg-[var(--ink)] text-white dark:text-[#1A1A1F]"
            : "border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 text-[var(--stone)] hover:bg-white/60 dark:hover:bg-white/10"
        }`}
      >
        All
      </button>
      {tags.map((tag) => {
        const Icon = TAG_ICONS[tag];
        const isActive = activeTag === tag;
        return (
          <button
            key={tag}
            onClick={() => onTagChange(tag)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition ${
              isActive
                ? "border-[var(--ink)] bg-[var(--ink)] text-white dark:text-[#1A1A1F]"
                : "border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 text-[var(--stone)] hover:bg-white/60 dark:hover:bg-white/10"
            }`}
          >
            <Icon size={14} className={isActive ? "text-white dark:text-[#1A1A1F]" : TAG_COLORS[tag]} />
            {TAG_LABELS[tag]}
          </button>
        );
      })}
    </div>
  );
}

function NoteTagIcon({ tag }: { tag: NoteTag }) {
  const Icon = TAG_ICONS[tag];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/10 px-2.5 py-1 text-xs">
      <Icon size={14} className={TAG_COLORS[tag]} />
      <span className="text-[var(--stone)]">{TAG_LABELS[tag]}</span>
    </span>
  );
}

export default function NotesPage() {
  const [activeTag, setActiveTag] = useState<NoteTag | null>(null);

  const sortedNotes = [...notes].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredNotes = activeTag
    ? sortedNotes.filter((note) => note.tag === activeTag)
    : sortedNotes;

  const allTags: NoteTag[] = ["math", "physics", "ai"];

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Hero Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-sm tracking-[0.2em] uppercase text-[var(--stone)] mb-4"
        >
          Knowledge Archive
        </motion.p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--ink)] mb-4">
          LaTeX Notes
        </h1>
        <p className="text-lg text-[var(--stone)] max-w-2xl mx-auto leading-relaxed">
          A curated collection of notes on mathematics, physics, and AI.
        </p>
      </motion.header>

      {/* Tag Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <TagFilter tags={allTags} activeTag={activeTag} onTagChange={setActiveTag} />
      </motion.div>

      {/* Notes Grid */}
      {filteredNotes.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[var(--stone)] text-center py-12"
        >
          No notes yet. Check back soon!
        </motion.p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNotes.map((note, index) => (
            <motion.article
              key={note.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl border border-black/10 dark:border-white/10
                         bg-white/40 dark:bg-white/5 p-5
                         hover:bg-white/70 dark:hover:bg-white/10
                         hover:shadow-xl hover:scale-[1.02]
                         transition-all duration-300"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                <NoteTagIcon tag={note.tag} />
              </div>

              <h2 className="text-lg font-semibold text-[var(--ink)] leading-snug mb-2">
                {note.title}
              </h2>

              <time className="block text-xs text-[var(--stone)] mb-3">
                {formatDate(note.date)}
              </time>

              <p className="text-sm text-[var(--stone)] line-clamp-3 leading-relaxed mb-4">
                {note.abstract}
              </p>

              <div className="flex gap-2 mt-auto">
                <a
                  href={note.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                             bg-[var(--ink)]/10 text-[var(--ink)]
                             hover:bg-[var(--ink)]/20 transition-colors text-xs font-medium"
                >
                  <IoOpen size={14} />
                  Open
                </a>
                <a
                  href={note.pdfUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                             border border-black/10 dark:border-white/10
                             hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-xs"
                >
                  <IoDownload size={14} />
                  Download
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </main>
  );
}
