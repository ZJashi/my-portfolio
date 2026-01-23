"use client";

import { TbMathFunction } from "react-icons/tb";
import { GiAtom } from "react-icons/gi";
import { PiBrainBold } from "react-icons/pi";
import type { BlogTag } from "@/content/blog";
import { TAG_LABELS } from "@/content/blog";

const TAG_ICONS: Record<BlogTag, React.ComponentType<{ size?: number; className?: string }>> = {
  math: TbMathFunction,
  physics: GiAtom,
  ai: PiBrainBold,
};

const TAG_COLORS: Record<BlogTag, string> = {
  math: "text-[#1F4E8C]",
  physics: "text-[#7C3AED]",
  ai: "text-[#059669]",
};

type Props = {
  tag: BlogTag;
  size?: number;
  showLabel?: boolean;
  className?: string;
};

export function TagIcon({ tag, size = 16, showLabel = true, className = "" }: Props) {
  const Icon = TAG_ICONS[tag];
  const colorClass = TAG_COLORS[tag];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/10 px-2.5 py-1 text-xs ${className}`}
    >
      <Icon size={size} className={colorClass} />
      {showLabel && <span className="text-[var(--stone)]">{TAG_LABELS[tag]}</span>}
    </span>
  );
}

export function TagFilter({
  tags,
  activeTag,
  onTagChange,
}: {
  tags: BlogTag[];
  activeTag: BlogTag | null;
  onTagChange: (tag: BlogTag | null) => void;
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
