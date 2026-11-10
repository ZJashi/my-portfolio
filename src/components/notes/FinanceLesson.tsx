import type { ReactNode } from "react";
import Link from "next/link";
import styles from "@/app/notes/notes.styles";

const base = "/notes/finance/mathematics-in-finance";

export function FinanceLesson({
  number,
  title,
  description,
  instructor,
  topics,
  sections,
  previous,
  next,
  sources,
  children,
}: {
  number: number;
  title: string;
  description: string;
  instructor: string;
  topics: string;
  sections: readonly (readonly [string, string])[];
  previous: { slug: string; title: string };
  next?: { slug: string; title: string };
  sources: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/finance">Finance</Link>
        <span>/</span>
        <Link href={base}>Mathematics in Finance</Link>
        <span>/</span>
        <span>Lecture {number}</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>
          {String(number).padStart(2, "0")} / MIT 18.642
        </p>
        <h1 className={styles.subjectTitle}>{title}</h1>
        <p className={styles.subjectDescription}>{description}</p>
        <div className={styles.readingMeta}>
          <span>
            {instructor} · Lecture {number}
          </span>
          <span>{topics}</span>
        </div>
      </header>
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          {children}
          <div className={styles.lessonSources}>{sources}</div>
          <nav className={styles.lessonEnd} aria-label="Lesson navigation">
            <Link href={`${base}/${previous.slug}`}>
              Previous: {previous.title}
            </Link>
            <Link href={base}>Course contents</Link>
            {next && (
              <Link href={`${base}/${next.slug}`}>Next: {next.title}</Link>
            )}
          </nav>
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              {sections.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      </div>
    </div>
  );
}
