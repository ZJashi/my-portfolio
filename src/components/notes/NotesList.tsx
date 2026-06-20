"use client";

import { useState } from "react";
import type { NoteMetadata } from "@/lib/notes";
import { getTag, getSubtags, MAIN_TAGS } from "@/lib/tags";
import { NoteCard } from "./NoteCard";

function noteMatchesFilter(
  note: NoteMetadata,
  activeMain: string | null,
  activeSub: string | null,
): boolean {
  if (activeMain === null) return true;
  const children = getSubtags(activeMain);
  const matchesMain = note.tags.some(
    (t) => t === activeMain || children.includes(t),
  );
  if (!matchesMain) return false;
  if (activeSub !== null) return note.tags.includes(activeSub);
  return true;
}

function countForMain(notes: NoteMetadata[], mainKey: string): number {
  const children = getSubtags(mainKey);
  return notes.filter((n) =>
    n.tags.some((t) => t === mainKey || children.includes(t)),
  ).length;
}

function countForSub(notes: NoteMetadata[], subKey: string): number {
  return notes.filter((n) => n.tags.includes(subKey)).length;
}

export function NotesList({
  notes,
}: {
  notes: NoteMetadata[];
  tags: string[]; // kept for API compat, derived internally now
}) {
  const [activeMain, setActiveMain] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);

  const handleMainClick = (key: string) => {
    if (activeMain === key && activeSub === null) {
      setActiveMain(null);
    } else {
      setActiveMain(key);
      setActiveSub(null);
    }
  };

  const handleSubClick = (key: string) => {
    setActiveSub(activeSub === key ? null : key);
  };

  const subtags = activeMain ? getSubtags(activeMain) : [];
  const filtered = notes.filter((n) =>
    noteMatchesFilter(n, activeMain, activeSub),
  );

  return (
    <div>
      {/* ── Main tag row ── */}
      <div className="flex flex-wrap gap-2 mb-3">
        <button
          onClick={() => { setActiveMain(null); setActiveSub(null); }}
          className={`px-4 py-1.5 text-sm rounded-xl font-medium transition-all duration-200
            ${activeMain === null
              ? "bg-[--ink] text-[--bg-main] shadow-sm"
              : "bg-black/5 dark:bg-white/6 text-[--stone] hover:text-[--ink] dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10"
            }`}
        >
          All
          <span className={`ml-1.5 text-xs ${activeMain === null ? "opacity-60" : "opacity-40"}`}>
            {notes.length}
          </span>
        </button>

        {MAIN_TAGS.map((key) => {
          const cfg = getTag(key);
          const Icon = cfg.icon;
          const count = countForMain(notes, key);
          const isActive = activeMain === key;
          return (
            <button
              key={key}
              onClick={() => handleMainClick(key)}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-xl font-medium
                transition-all duration-200
                ${isActive
                  ? "bg-[--ink] text-[--bg-main] shadow-sm"
                  : "bg-black/5 dark:bg-white/6 text-[--stone] hover:text-[--ink] dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10"
                }`}
            >
              <Icon size={13} />
              {cfg.label}
              <span className={`text-xs ${isActive ? "opacity-60" : "opacity-40"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Subtag row (visible when a main tag is active) ── */}
      {activeMain && subtags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-8 pl-2 border-l-2 border-black/8 dark:border-white/10">
          {subtags.map((key) => {
            const cfg = getTag(key);
            const Icon = cfg.icon;
            const count = countForSub(notes, key);
            const isActive = activeSub === key;
            return (
              <button
                key={key}
                onClick={() => handleSubClick(key)}
                disabled={count === 0}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-lg font-medium
                  transition-all duration-200
                  ${isActive
                    ? `${cfg.pill} ring-1 ring-current/30`
                    : count === 0
                      ? "bg-black/3 dark:bg-white/4 text-[--stone]/40 cursor-not-allowed"
                      : "bg-black/5 dark:bg-white/6 text-[--stone] hover:text-[--ink] dark:hover:text-white hover:bg-black/8 dark:hover:bg-white/10"
                  }`}
              >
                <Icon size={11} />
                {cfg.label}
                <span className="opacity-50">{count}</span>
              </button>
            );
          })}
        </div>
      )}

      {!activeMain && <div className="mb-8" />}

      {/* ── Notes grid ── */}
      {filtered.length === 0 ? (
        <p className="text-[--stone] text-sm">No notes yet for this topic.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}