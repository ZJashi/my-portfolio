import Link from "next/link";
import styles from "../../../notes.styles";
export const metadata = {
  title: "Thermodynamics | Statistical Mechanics I | Zura Jashi",
};
const lessons = [
  [
    "1.1",
    "Equilibrium, Temperature & the First Law",
    "equilibrium-and-first-law",
  ],
  ["1.2", "The Second Law, Carnot Engines & Entropy", "second-law-and-entropy"],
  [
    "1.3",
    "Equilibrium & Thermodynamic Potentials",
    "equilibrium-and-thermodynamic-potentials",
  ],
  ["1.4", "Stability & the Third Law", "stability-and-third-law"],
];
export default function ChapterPage() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes/physics">Physics</Link>
        <span>/</span>
        <Link href="/notes/statistical-mechanics">Statistical Mechanics</Link>
        <span>/</span>
        <Link href="/notes/statistical-mechanics/statistical-mechanics-i">
          Statistical Mechanics I
        </Link>
        <span>/</span>
        <span>Chapter 1</span>
      </nav>
      <header className={styles.chapterHeader}>
        <p className={styles.subjectKicker}>
          <span>01</span> STATISTICAL MECHANICS I / CHAPTER 1
        </p>
        <h1 className={styles.subjectTitle}>Thermodynamics</h1>
        <p className={styles.subjectDescription}>
          What equilibrium means, how energy moves, and why a heat engine has a
          limit. Four connected lessons follow Kardar’s thermodynamics outline,
          from equilibrium states to stability and low-temperature entropy.
        </p>
      </header>
      <div className={styles.chapterListHeading}>
        <h2>Lessons</h2>
        <span>4 lessons · All available</span>
      </div>
      <ol className={styles.chapterLessons}>
        {lessons.map(([number, title, slug]) => (
          <li key={number}>
            {slug ? (
              <Link
                href={`/notes/statistical-mechanics/statistical-mechanics-i/chapter-1/${slug}`}
                className={styles.availableLesson}
              >
                <span className={styles.lessonNumber}>{number}</span>
                <h3>{title}</h3>
                <span className={styles.openNotebook}>Read notes</span>
              </Link>
            ) : (
              <>
                <span className={styles.lessonNumber}>{number}</span>
                <h3>{title}</h3>
                <span className={styles.comingSoon}>Coming soon</span>
              </>
            )}
          </li>
        ))}
      </ol>
      <p className={styles.reference}>
        Chapter organization follows{" "}
        <a href="https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/pages/lecture-notes/">
          MIT 8.333’s thermodynamics notes
        </a>
        . Lesson titles and explanations are local to this notebook.
      </p>
    </div>
  );
}
