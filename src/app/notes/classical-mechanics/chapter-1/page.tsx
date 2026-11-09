import Link from "next/link";
import styles from "../../notes.module.css";

export const metadata = {
  title: "Survey of the Elementary Principles | Classical Mechanics | Zura Jashi",
  description: "Chapter 1 of the classical mechanics notebook: six lessons from particle mechanics to the Lagrangian formulation.",
};

const lessons = [
  ["1.1", "Mechanics of a Particle"],
  ["1.2", "Mechanics of a System of Particles"],
  ["1.3", "Constraints"],
  ["1.4", "D’Alembert’s Principle and Lagrange’s Equations"],
  ["1.5", "Velocity-Dependent Potentials and the Dissipation Function"],
  ["1.6", "Simple Applications of the Lagrangian Formulation"],
];

export default function ChapterOnePage() {
  return <div className={styles.page}>
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <Link href="/notes">Notes</Link><span>/</span><Link href="/notes/physics">Physics</Link><span>/</span><Link href="/notes/classical-mechanics">Classical Mechanics</Link><span>/</span><span>Chapter 1</span>
    </nav>
    <header className={styles.chapterHeader}>
      <p className={styles.subjectKicker}><span>01</span> CLASSICAL MECHANICS / CHAPTER 1</p>
      <h1 className={styles.subjectTitle}>Survey of the<br /><em>Elementary Principles</em></h1>
      <p className={styles.subjectDescription}>From the mechanics of a single particle to the Lagrangian formulation. Six lessons following the opening chapter of Goldstein.</p>
    </header>
    <div className={styles.chapterListHeading}><h2>Lessons</h2><span>6 lessons · 2 available</span></div>
    <ol className={styles.chapterLessons}>
      {lessons.map(([number, title]) => <li key={number}>
        {(number === "1.1" || number === "1.2") ? <Link href={`/notes/classical-mechanics/chapter-1/${number === "1.1" ? "mechanics-of-a-particle" : "mechanics-of-a-system-of-particles"}`} className={styles.availableLesson}><span className={styles.lessonNumber}>{number}</span><h3>{title}</h3><span className={styles.openNotebook}>Read notes</span></Link> : <><span className={styles.lessonNumber}>{number}</span><h3>{title}</h3><span className={styles.comingSoon}>Coming soon</span></>}
      </li>)}
    </ol>
  </div>;
}
