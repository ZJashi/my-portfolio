import Link from "next/link";
import type { ReactNode } from "react";
import styles from "@/app/notes/notes.module.css";
const base='/notes/statistical-mechanics/statistical-mechanics-i/chapter-1';
const lessonLinks = [
  ["1.1", "equilibrium-and-first-law", "Equilibrium & First Law"],
  ["1.2", "second-law-and-entropy", "Second Law & Entropy"],
  ["1.3", "equilibrium-and-thermodynamic-potentials", "Thermodynamic Potentials"],
  ["1.4", "stability-and-third-law", "Stability & Third Law"],
];
export function StatisticalLesson({number,title,description,sections,children}:{number:string;title:string;description:string;sections:string[][];children:ReactNode}) {
 const index = lessonLinks.findIndex(([id]) => id === number);
 const previous = lessonLinks[index - 1];
 const next = lessonLinks[index + 1];
 return <div className={styles.page}><nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes/physics">Physics</Link><span>/</span><Link href="/notes/statistical-mechanics">Statistical Mechanics</Link><span>/</span><Link href="/notes/statistical-mechanics/statistical-mechanics-i">Statistical Mechanics I</Link><span>/</span><Link href={base}>Chapter 1</Link><span>/</span><span>{number}</span></nav>
 <header className={styles.readingHeader}><p className={styles.subjectKicker}><span>{number}</span> STATISTICAL MECHANICS I / THERMODYNAMICS</p><h1 className={styles.subjectTitle}>{title}</h1><p className={styles.subjectDescription}>{description}</p><div className={styles.readingMeta}><span>20–30 min + exercises</span><span>Calculus · Equilibrium · Energy</span></div></header>
 <div className={styles.lessonLayout}><article className={`${styles.article} ${styles.proseLesson}`}>{children}<nav className={styles.lessonEnd} aria-label="Lesson navigation">{previous && <Link href={`${base}/${previous[1]}`}>Previous: {previous[2]}</Link>}<Link href={base}>Chapter contents</Link>{next && <Link href={`${base}/${next[1]}`}>Next: {next[2]}</Link>}</nav></article><aside className={styles.toc}><nav aria-label="On this page"><p className={styles.label}>In this lesson</p><ol>{sections.map(([id,label])=><li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav></aside></div></div>;
}
