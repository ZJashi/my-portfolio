import "katex/dist/katex.min.css";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { notesEnabled } from "@/lib/notes-visibility";

export default function NotesLayout({ children }: { children: ReactNode }) {
  if (!notesEnabled) notFound();
  return <div className="study-notes">{children}</div>;
}
