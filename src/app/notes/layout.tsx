import "katex/dist/katex.min.css";
import type { ReactNode } from "react";

export default function NotesLayout({ children }: { children: ReactNode }) {
  return <div className="study-notes">{children}</div>;
}
