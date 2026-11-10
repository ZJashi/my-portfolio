import Link from "next/link";
import { quantumChapterTwoLessons } from "@/components/notes/QuantumLesson";
import styles from "../../../notes.styles";
export const metadata = {
  title: "Energy Eigenstates | Quantum Physics I | Zura Jashi",
};
export default function ChapterPage() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes/physics">Physics</Link>
        <span>/</span>
        <Link href="/notes/quantum-mechanics">Quantum Mechanics</Link>
        <span>/</span>
        <Link href="/notes/quantum-mechanics/quantum-physics-i">
          Quantum Physics I
        </Link>
        <span>/</span>
        <span>Chapter 2</span>
      </nav>
      <header className={styles.chapterHeader}>
        <p className={styles.subjectKicker}>
          <span>02</span> QUANTUM PHYSICS I / CHAPTER 2
        </p>
        <h1 className={styles.subjectTitle}>
          Energy <em>Eigenstates</em>
        </h1>
        <p className={styles.subjectDescription}>
          Use the time-independent Schrödinger equation to connect potentials,
          boundary conditions, and allowed energies. Develop bound-state
          methods, oscillator algebra, and scattering through steps and
          barriers, then connect scattering phases to time delays, resonances,
          and bound-state counting.
        </p>
      </header>
      <div className={styles.chapterListHeading}>
        <h2>Lessons</h2>
        <span>{quantumChapterTwoLessons.length} lessons · All available</span>
      </div>
      <ol className={styles.chapterLessons}>
        {quantumChapterTwoLessons.map(([number, title, slug]) => (
          <li key={slug}>
            <Link
              href={`/notes/quantum-mechanics/quantum-physics-i/chapter-2/${slug}`}
              className={styles.availableLesson}
            >
              <span className={styles.lessonNumber}>{number}</span>
              <h3>{title}</h3>
              <span className={styles.openNotebook}>Read notes</span>
            </Link>
          </li>
        ))}
      </ol>
      <p className={styles.reference}>
        Chapter organization is local to this notebook. These lessons follow the
        topics of{" "}
        <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/lecture-notes/">
          MIT 8.04 lecture-note sets 10–19, with additional coherent-state,
          barrier, and parity-channel applications
        </a>
        . Builds on Chapter 1’s wavefunctions, operators, and measurement rules.
      </p>
    </div>
  );
}
