import Link from "next/link";
import { quantumChapterThreeLessons } from "@/components/notes/QuantumLesson";
import styles from "../../../notes.module.css";
export const metadata = { title: "Angular Momentum & Central Potentials | Quantum Physics I | Zura Jashi" };
export default function ChapterPage() { return <div className={styles.page}>
<nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes/physics">Physics</Link><span>/</span><Link href="/notes/quantum-mechanics">Quantum Mechanics</Link><span>/</span><Link href="/notes/quantum-mechanics/quantum-physics-i">Quantum Physics I</Link><span>/</span><span>Chapter 3</span></nav>
<header className={styles.chapterHeader}><p className={styles.subjectKicker}><span>03</span> QUANTUM PHYSICS I / CHAPTER 3</p><h1 className={styles.subjectTitle}>Angular Momentum &amp; <em>Central Potentials</em></h1><p className={styles.subjectDescription}>Move into three dimensions: use rotational symmetry, separate radial and angular motion, calculate probabilities with the correct spherical measure, and derive the hydrogen spectrum and orbitals.</p></header>
<div className={styles.chapterListHeading}><h2>Lessons</h2><span>{quantumChapterThreeLessons.length} lessons · All available</span></div>
<ol className={styles.chapterLessons}>{quantumChapterThreeLessons.map(([number,title,slug])=><li key={slug}><Link href={`/notes/quantum-mechanics/quantum-physics-i/chapter-3/${slug}`} className={styles.availableLesson}><span className={styles.lessonNumber}>{number}</span><h3>{title}</h3><span className={styles.openNotebook}>Read notes</span></Link></li>)}</ol>
<p className={styles.reference}>Topics follow <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/lecture-notes/">MIT 8.04 lecture-note sets 20–22</a>. Chapter organization is local to this notebook. Builds on the operators and eigenvalue methods of Chapters 1–2.</p>
</div>; }
