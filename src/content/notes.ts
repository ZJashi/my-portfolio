export type NoteCategory = "mathematics" | "physics" | "ai";

export const CATEGORY_LABELS: Record<NoteCategory, string> = {
  mathematics: "Mathematics",
  physics: "Physics",
  ai: "AI",
};

export type Note = {
  slug: string; // optional for now, useful later
  title: string;
  year: number;
  month: number; // 1–12
  category: NoteCategory;
  tags: string[];
  abstract: string;
  pdfUrl: string; // must NOT include `/public`
};

export const notes: Note[] = [
  {
    slug: "advanced-probability-lecture-notes",
    title: "Advanced Probability Lecture Notes",
    year: 2022,
    month: 1,
    category: "mathematics",
    tags: ["Probability", "Measure Theory", "Markov Chains"],
    abstract:
      "Lecture notes covering sigma-algebras, measures, integration, convergence theorems, and Markov chains.",
    pdfUrl: "/notes/advanced-probability.pdf",
  },
  {
    slug: "relativity-notes",
    title: "Relativity Notes",
    year: 2023,
    month: 1,
    category: "physics",
    tags: ["Relativity", "Spacetime", "Lorentz Transformations"],
    abstract:
      "Notes on special and introductory general relativity, focusing on spacetime structure and relativistic dynamics.",
    pdfUrl: "/papers/relativity-notes.pdf",
  },
  {
    slug: "qft0-notes",
    title: "Quantum Field Theory 0 Notes",
    year: 2023,
    month: 1,
    category: "physics",
    tags: ["Quantum Field Theory", "Second Quantization"],
    abstract:
      "Introductory notes bridging quantum mechanics and field theory, with emphasis on quantization and free fields.",
    pdfUrl: "/papers/qft0-notes.pdf",
  },
  {
    slug: "qft1-notes",
    title: "Quantum Field Theory I Notes",
    year: 2023,
    month: 1,
    category: "physics",
    tags: ["Quantum Field Theory", "Perturbation Theory", "Feynman Diagrams"],
    abstract:
      "Notes on interacting quantum field theories, perturbation theory, and diagrammatic techniques.",
    pdfUrl: "/papers/qft1-notes.pdf",
  },
  {
    slug: "mechanics-notes",
    title: "Classical Mechanics Notes",
    year: 2023,
    month: 1,
    category: "physics",
    tags: [
      "Classical Mechanics",
      "Lagrangian Mechanics",
      "Hamiltonian Mechanics",
    ],
    abstract:
      "Lecture notes on classical mechanics, including Lagrangian and Hamiltonian formalisms.",
    pdfUrl: "/papers/mechanics-notes.pdf",
  },
];
