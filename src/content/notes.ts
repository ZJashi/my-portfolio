// content/notes.ts
export type NoteCategory = "Mathematics" | "Physics" | "AI";

export type Note = {
  slug: string;
  title: string;
  year: number;
  category: NoteCategory;
  tags: string[];
  abstract: string;
  pdfUrl: string;
};

export const notes: Note[] = [
  {
    slug: "measure-theory-cheatsheet",
    title: "Measure Theory Cheatsheet",
    year: 2025,
    category: "Mathematics",
    tags: ["Measure", "Probability"],
    abstract:
      "Compact notes covering sigma-algebras, measures, integration, and convergence theorems with examples.",
    pdfUrl: "/papers/2025-measure-theory-cheatsheet.pdf",
  },
  {
    slug: "fermi-surfaces-in-quasicrystals",
    title: "Fermi Surfaces in Quasicrystals",
    year: 2023,
    category: "Physics",
    tags: ["Condensed Matter", "Quasicrystals"],
    abstract:
      "Notes on Fermi surface structure and analytical tools in quasicrystalline settings.",
    pdfUrl: "/papers/2023-fermi-surfaces-quasicrystals.pdf",
  },
  {
    slug: "twinned-regression-notes",
    title: "Twinned Regression: Notes & Experiments",
    year: 2024,
    category: "AI",
    tags: ["ML", "Regression", "Experiments"],
    abstract:
      "Notes on twinned regression objectives, implementation details, and empirical behavior on tabular datasets.",
    pdfUrl: "/papers/2024-twinned-regression-notes.pdf",
  },
];
