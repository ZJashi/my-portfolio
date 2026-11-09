import type { ReactNode } from "react";
import styles from "@/app/notes/notes.module.css";

export function SubjectHeader({ number, title, description, topics, caption, children, label = "FIELD NOTEBOOK", details }: {
  label?: string;
  details?: ReactNode;
  number: string;
  title: string;
  description: string;
  topics: string;
  caption: string;
  children: ReactNode;
}) {
  return <header className={styles.subjectHeader}>
    <div className={styles.subjectCopy}>
      <p className={styles.subjectKicker}><span>{number}</span> {label}</p>
      <h1 className={styles.subjectTitle}>{title}</h1>
      <p className={styles.subjectDescription}>{description}</p>
      <p className={styles.subjectTopics}>{topics}</p>
      {details}
    </div>
    <figure className={styles.subjectFigure} aria-hidden="true">
      {children}
      <figcaption>{caption}</figcaption>
    </figure>
  </header>;
}
