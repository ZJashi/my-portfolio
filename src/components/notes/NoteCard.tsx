"use client";

import Link from "next/link";
import type { NoteMetadata } from "@/lib/notes";
import { getTag } from "@/lib/tags";

function formatDate(raw: string) {
  if (!raw) return "";
  return new Date(raw).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function NoteCard({ note }: { note: NoteMetadata }) {
  const primaryCfg = note.tags.length > 0 ? getTag(note.tags[0]) : getTag("");
  const PrimaryIcon = primaryCfg.icon;

  return (
    <Link href={`/notes/${note.slug}`} className="group block h-full">
      <article
        className="relative flex flex-col h-full p-5 rounded-2xl
                   border border-black/6 dark:border-white/8
                   bg-white/50 dark:bg-white/3
                   hover:bg-white/80 dark:hover:bg-white/6
                   hover:border-black/12 dark:hover:border-white/16
                   hover:shadow-md dark:hover:shadow-black/30
                   transition-all duration-300"
      >
        {/* Coloured top stripe */}
        <div
          className={`absolute inset-x-0 top-0 h-0.5 rounded-t-2xl ${primaryCfg.dot} opacity-60 group-hover:opacity-100 transition-opacity`}
        />

        {/* Title row */}
        <div className="flex items-start gap-3 mt-1">
          <span className={`mt-0.5 shrink-0 p-1.5 rounded-lg ${primaryCfg.pill}`}>
            <PrimaryIcon size={14} />
          </span>
          <h3
            className="text-sm font-semibold text-[--ink] leading-snug
                       group-hover:text-teal-600 dark:group-hover:text-teal-400
                       transition-colors duration-200"
          >
            {note.title}
          </h3>
        </div>

        {/* Description */}
        {note.description && (
          <p className="mt-3 text-xs text-[--stone] leading-relaxed line-clamp-2 flex-1">
            {note.description}
          </p>
        )}

        {/* Footer */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {note.tags.map((tag) => {
              const cfg = getTag(tag);
              const Icon = cfg.icon;
              return (
                <span
                  key={tag}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full ${cfg.pill}`}
                >
                  <Icon size={10} />
                  {cfg.label}
                </span>
              );
            })}
          </div>
          <time className="text-xs text-[--stone]/60 shrink-0">
            {formatDate(note.date)}
          </time>
        </div>
      </article>
    </Link>
  );
}