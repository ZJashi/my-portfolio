import { SubjectHeader } from "@/components/notes/SubjectHeader";
import Link from "next/link";
import styles from "../notes.module.css";

export const metadata = {
  title: "Classical Mechanics | Notes | Zura Jashi",
  description: "Intuitive, quantitative classical mechanics notes following Goldstein, Poole, and Safko. Start with Newton’s laws, constraints, and generalized coordinates.",
};

export default function ClassicalMechanicsPage() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><Link href="/notes/physics">Physics</Link><span>/</span><span>Classical Mechanics</span></nav>
      <SubjectHeader number="01" label="PHYSICS / COURSE NOTEBOOK" title="Classical Mechanics"
        description="Start with a physical question. Choose the right coordinates. Work from Newton’s laws toward the analytical mechanics of Goldstein."
        topics="Forces / Constraints / Generalized coordinates"
        caption="One coordinate. A whole description of motion."
        >
        <svg viewBox="0 0 280 260" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M72 34h136m-124-8-8 8m26-8-8 8m26-8-8 8m26-8-8 8m26-8-8 8m26-8-8 8m26-8-8 8" />
          <path d="M140 34v155M140 34l63 143" opacity=".4" strokeDasharray="4 5" />
          <path d="M140 34 77 177" strokeWidth="2" />
          <path d="M121 78q9 7 19 5M77 177q63 29 126 0" strokeDasharray="3 4" />
          <circle cx="140" cy="34" r="3" fill="currentColor" />
          <circle cx="77" cy="177" r="12" fill="currentColor" />
          <path d="M77 191v27m-4-6 4 6 4-6" />
          <g fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="17">
            <text x="123" y="106">θ</text><text x="95" y="126">l</text><text x="45" y="183">m</text><text x="87" y="214">mg</text>
            <text x="82" y="250">q = θ</text>
          </g>
        </svg>
      </SubjectHeader>
      <p className={styles.label}>Chapters</p>
      <Link href="/notes/classical-mechanics/chapter-1" className={styles.chapterCard}>
        <span className={styles.chapterNumber}>01</span>
        <div><p className={styles.cardTop}>CHAPTER 1 · 6 LESSONS</p><h2>Survey of the Elementary Principles</h2><p>Particle mechanics, constraints, and the path to Lagrange’s equations.</p><span className={styles.openNotebook}>View chapter contents</span></div>
      </Link>
      <p className={styles.reference}>Reading companion: Herbert Goldstein, Charles Poole, and John Safko, <a href="https://www.pearson.com/en-us/subject-catalog/p/Goldstein-Classical-Mechanics-3rd-Edition/P200000006871?view=educator" target="_blank" rel="noopener noreferrer"><em>Classical Mechanics</em>, 3rd edition</a>, Chapter 1: Survey of the Elementary Principles. Independent study notes organized by chapter and topic.</p>
    </div>
  );
}
