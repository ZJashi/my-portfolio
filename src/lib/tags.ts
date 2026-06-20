/**
 * Central tag registry. To add a new tag:
 *   1. Add an entry to TAGS below.
 *   2. Set `parent` to a main tag key if it's a subtag.
 *   Done — it appears in filters and note cards automatically.
 */

import {
  TbCode,
  TbMathFunction,
  TbAtom,
  TbChartLine,
  TbBrain,
  TbDatabase,
  TbServer,
  TbBinaryTree,
  TbWorld,
  TbMathIntegrals,
  TbMatrix,
  TbChartBar,
  TbDice,
  TbInfinity,
  TbAtom2,
  TbVectorTriangle,
  TbBolt,
  TbFlask,
  TbWaveSine,
  TbMathSymbols,
  TbTrendingUp,
  TbSphere,
} from "react-icons/tb";
import { SiRust, SiCplusplus } from "react-icons/si";
import type { IconType } from "react-icons";

export type TagDef = {
  label: string;
  icon: IconType;
  /** Tailwind classes for the pill badge */
  pill: string;
  /** Tailwind bg class for the accent dot / top stripe */
  dot: string;
  /** Key of the parent main tag — omit for main tags */
  parent?: string;
};

export const TAGS: Record<string, TagDef> = {
  // ── Main tags ───────────────────────────────────────────────────────────
  CS: {
    label: "CS",
    icon: TbCode,
    pill: "bg-emerald-500/12 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
  Math: {
    label: "Math",
    icon: TbMathFunction,
    pill: "bg-blue-500/12 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
    dot: "bg-blue-500",
  },
  Physics: {
    label: "Physics",
    icon: TbAtom,
    pill: "bg-cyan-500/12 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",
    dot: "bg-cyan-500",
  },
  Finance: {
    label: "Finance",
    icon: TbChartLine,
    pill: "bg-amber-500/12 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
    dot: "bg-amber-500",
  },

  // ── CS subtags ──────────────────────────────────────────────────────────
  AI: {
    label: "AI",
    icon: TbBrain,
    pill: "bg-violet-500/12 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
    dot: "bg-violet-500",
    parent: "CS",
  },
  Data: {
    label: "Data",
    icon: TbDatabase,
    pill: "bg-indigo-500/12 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
    dot: "bg-indigo-500",
    parent: "CS",
  },
  Systems: {
    label: "Systems",
    icon: TbServer,
    pill: "bg-slate-500/12 text-slate-700 dark:bg-slate-500/15 dark:text-slate-300",
    dot: "bg-slate-500",
    parent: "CS",
  },
  Algorithms: {
    label: "Algorithms",
    icon: TbBinaryTree,
    pill: "bg-teal-500/12 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300",
    dot: "bg-teal-500",
    parent: "CS",
  },
  Web: {
    label: "Web",
    icon: TbWorld,
    pill: "bg-sky-500/12 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    dot: "bg-sky-500",
    parent: "CS",
  },
  Rust: {
    label: "Rust",
    icon: SiRust,
    pill: "bg-orange-500/12 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300",
    dot: "bg-orange-500",
    parent: "CS",
  },
  "C++": {
    label: "C++",
    icon: SiCplusplus,
    pill: "bg-rose-500/12 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
    dot: "bg-rose-500",
    parent: "CS",
  },

  // ── Math subtags ────────────────────────────────────────────────────────
  "Linear Algebra": {
    label: "Linear Algebra",
    icon: TbMatrix,
    pill: "bg-blue-500/12 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
    dot: "bg-blue-400",
    parent: "Math",
  },
  Calculus: {
    label: "Calculus",
    icon: TbMathIntegrals,
    pill: "bg-indigo-500/12 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
    dot: "bg-indigo-500",
    parent: "Math",
  },
  Statistics: {
    label: "Statistics",
    icon: TbChartBar,
    pill: "bg-violet-500/12 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
    dot: "bg-violet-400",
    parent: "Math",
  },
  Probability: {
    label: "Probability",
    icon: TbDice,
    pill: "bg-purple-500/12 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300",
    dot: "bg-purple-500",
    parent: "Math",
  },
  "Discrete Math": {
    label: "Discrete Math",
    icon: TbInfinity,
    pill: "bg-sky-500/12 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    dot: "bg-sky-400",
    parent: "Math",
  },

  // ── Physics subtags ─────────────────────────────────────────────────────
  Quantum: {
    label: "Quantum",
    icon: TbAtom2,
    pill: "bg-cyan-500/12 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",
    dot: "bg-cyan-400",
    parent: "Physics",
  },
  Classical: {
    label: "Classical",
    icon: TbVectorTriangle,
    pill: "bg-teal-500/12 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300",
    dot: "bg-teal-400",
    parent: "Physics",
  },
  "E&M": {
    label: "E&M",
    icon: TbBolt,
    pill: "bg-yellow-500/12 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-300",
    dot: "bg-yellow-500",
    parent: "Physics",
  },
  Thermo: {
    label: "Thermo",
    icon: TbFlask,
    pill: "bg-red-500/12 text-red-700 dark:bg-red-500/15 dark:text-red-300",
    dot: "bg-red-500",
    parent: "Physics",
  },
  Waves: {
    label: "Waves",
    icon: TbWaveSine,
    pill: "bg-sky-500/12 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    dot: "bg-sky-500",
    parent: "Physics",
  },

  // ── Finance subtags ─────────────────────────────────────────────────────
  Quant: {
    label: "Quant",
    icon: TbMathSymbols,
    pill: "bg-amber-500/12 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
    dot: "bg-amber-400",
    parent: "Finance",
  },
  Markets: {
    label: "Markets",
    icon: TbTrendingUp,
    pill: "bg-green-500/12 text-green-700 dark:bg-green-500/15 dark:text-green-300",
    dot: "bg-green-500",
    parent: "Finance",
  },
  Derivatives: {
    label: "Derivatives",
    icon: TbSphere,
    pill: "bg-orange-500/12 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300",
    dot: "bg-orange-400",
    parent: "Finance",
  },
};

// ── Helpers ─────────────────────────────────────────────────────────────────

const FALLBACK: TagDef = {
  label: "",
  icon: TbCode,
  pill: "bg-black/5 dark:bg-white/8 text-[--stone]",
  dot: "bg-[--stone]",
};

export function getTag(key: string): TagDef {
  return TAGS[key] ?? { ...FALLBACK, label: key };
}

export const MAIN_TAGS = Object.keys(TAGS).filter((k) => !TAGS[k].parent);

export function getSubtags(mainKey: string): string[] {
  return Object.keys(TAGS).filter((k) => TAGS[k].parent === mainKey);
}

export function getParent(key: string): string | undefined {
  return TAGS[key]?.parent;
}
