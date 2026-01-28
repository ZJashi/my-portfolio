export type NoteTag = "math" | "physics" | "ai";

export const TAG_LABELS: Record<NoteTag, string> = {
  math: "Mathematics",
  physics: "Physics",
  ai: "AI",
};

export type Note = {
  title: string;
  date: string; // ISO date string (YYYY-MM-DD)
  tag: NoteTag;
  abstract: string;
  pdfUrl: string;
};

export const notes: Note[] = [
  {
    title: "Advanced Probability Lecture Notes",
    date: "2022-01-15",
    tag: "math",
    abstract:
      "Lecture notes covering sigma-algebras, measures, integration, convergence theorems, and Markov chains.",
    pdfUrl: "/notes/advanced-probability.pdf",
  },
  {
    title: "Relativity Notes",
    date: "2023-03-10",
    tag: "physics",
    abstract:
      "Notes on special and introductory general relativity, focusing on spacetime structure and relativistic dynamics.",
    pdfUrl: "/papers/relativity-notes.pdf",
  },
  {
    title: "Quantum Field Theory 0 Notes",
    date: "2023-02-20",
    tag: "physics",
    abstract:
      "Introductory notes bridging quantum mechanics and field theory, with emphasis on quantization and free fields.",
    pdfUrl: "/papers/qft0-notes.pdf",
  },
  {
    title: "Quantum Field Theory I Notes",
    date: "2023-04-05",
    tag: "physics",
    abstract:
      "Notes on interacting quantum field theories, perturbation theory, and diagrammatic techniques.",
    pdfUrl: "/papers/qft1-notes.pdf",
  },
  {
    title: "Classical Mechanics Notes",
    date: "2023-01-08",
    tag: "physics",
    abstract:
      "Lecture notes on classical mechanics, including Lagrangian and Hamiltonian formalisms.",
    pdfUrl: "/papers/mechanics-notes.pdf",
  },
];
