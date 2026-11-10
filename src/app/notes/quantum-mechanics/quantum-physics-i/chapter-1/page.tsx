import { quantumLessons } from "@/components/notes/QuantumLesson";
import Link from "next/link";
import styles from "../../../notes.styles";
export const metadata = {
  title: "Basic Concepts | Quantum Physics I | Zura Jashi",
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
        <span>Chapter 1</span>
      </nav>
      <header className={styles.chapterHeader}>
        <p className={styles.subjectKicker}>
          <span>01</span> QUANTUM PHYSICS I / CHAPTER 1
        </p>
        <h1 className={styles.subjectTitle}>
          Basic <em>Concepts</em>
        </h1>
        <p className={styles.subjectDescription}>
          Start with quantum states and photon experiments, then connect energy
          and momentum to matter waves, Schrödinger evolution, probability
          conservation, uncertainty, momentum-space predictions, and
          observables. Topics follow the first nine lecture-note sets of MIT
          8.04.
        </p>
      </header>
      <div className={styles.chapterListHeading}>
        <h2>Lessons</h2>
        <span>{quantumLessons.length} lessons · All available</span>
      </div>
      <ol className={styles.chapterLessons}>
        {quantumLessons.map(([number, title, slug]) => (
          <li key={slug}>
            <Link
              href={`/notes/quantum-mechanics/quantum-physics-i/chapter-1/${slug}`}
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
        Chapter organization is local to this notebook; lesson topics follow{" "}
        <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/lecture-notes/">
          Zwiebach’s first nine lecture notes
        </a>
        . Continue in Chapter 2 with energy eigenstates and boundary-value
        problems.
      </p>
    </div>
  );
}
