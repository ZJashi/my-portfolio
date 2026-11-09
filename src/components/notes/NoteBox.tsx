import type { ReactNode } from "react";
import styles from "@/app/notes/notes.module.css";

/** A titled, author-selected takeaway; derivations stay in the surrounding prose. */
export function NoteBox({
  kind = "definition",
  title,
  children,
}: {
  kind?: "law" | "definition" | "result";
  title: string;
  children: ReactNode;
}) {
  return (
    <aside
      className={`${styles.noteBox} ${styles[kind + "Box"]}`}
      aria-label={title}
    >
      <p className={styles.noteBoxLabel}>
        {kind === "result" ? "Key equation" : kind}
      </p>
      <h3>{title}</h3>
      {children}
    </aside>
  );
}
