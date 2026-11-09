import { StatisticalSketch } from "@/components/notes/StatisticalSketch";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import Link from "next/link";
import { QuantumSketch } from "@/components/notes/QuantumSketch";
import type { ReactNode } from "react";
import styles from "../notes.module.css";

export const metadata = {
  title: "Physics | Notes | Zura Jashi",
  description: "Study notes that connect physical intuition with quantitative reasoning. Starting with classical mechanics, following Goldstein.",
};

export default function NotesPage() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><span>Physics</span></nav>
      <SubjectHeader title="Physics" description="From the motion of a pendulum to the behavior of many particles. Notes on the laws behind the physical world." />

      <Link href="/notes/classical-mechanics" className={styles.notebook}>
        <div className={styles.notebookDrawing} aria-hidden="true">
          <span className={styles.drawingNumber}>01 / MECHANICS</span>
          <svg viewBox="0 0 280 240" fill="none">
            <path d="M75 38h130M87 30l-8 8m24-8-8 8m24-8-8 8m24-8-8 8m24-8-8 8m24-8-8 8m24-8-8 8m24-8-8 8" stroke="currentColor" strokeWidth="1.2" />
            <path d="M140 38v156M140 38l62 139" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" opacity=".45" />
            <path d="M140 38l-60 141" stroke="currentColor" strokeWidth="2" />
            <path d="M121 83q10 7 19 5M80 179q58 28 122-2" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 4" />
            <circle cx="140" cy="38" r="3" fill="currentColor" />
            <circle cx="80" cy="179" r="12" fill="currentColor" />
            <text x="121" y="110" fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="18">θ</text>
            <text x="91" y="128" fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="18">l</text>
            <text x="57" y="210" fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="18">m</text>
          </svg>
          <span className={styles.drawingCaption}>A simpler way to describe motion.</span>
        </div>
        <div className={styles.notebookBody}>

          <h2>Classical Mechanics</h2>
          <p>Forces, constraints, and the coordinates that make a problem simpler.</p>

        </div>
      </Link>
      <NotebookPlaceholder number="02" subject="ELECTROMAGNETISM" title="Electromagnetism" caption="Fields that fill the space between." description="Charges, fields, and electromagnetic waves. Building a picture of how electric and magnetic phenomena fit together.">
        <g stroke="currentColor" strokeWidth="1.5">
          <path d="M77 120h126M77 120C110 45 170 45 203 120M77 120C100 10 180 10 203 120M77 120C110 195 170 195 203 120M77 120C100 230 180 230 203 120" />
          <path d="m137 117 6 3-6 3m0-56 6 1-4 5m-2 101 6-1-4-5m-2-130 6 1-4 5m-2 152 6-1-4-5" />
          <circle cx="77" cy="120" r="15" fill="var(--bg-main)" /><circle cx="203" cy="120" r="15" fill="var(--bg-main)" />
          <path d="M71 120h12m-6-6v12m120-6h12" />
        </g>
        <text x="135" y="222" fill="currentColor" fontFamily="Georgia" fontStyle="italic" fontSize="17">E</text>
      </NotebookPlaceholder>
      <Link href="/notes/quantum-mechanics" className={styles.notebook}><div className={styles.notebookDrawing} aria-hidden="true"><span className={styles.drawingNumber}>03 / QUANTUM</span><QuantumSketch /><span className={styles.drawingCaption}>From possibilities to probabilities.</span></div><div className={styles.notebookBody}><h2>Quantum Mechanics</h2><p>States, amplitudes, wave mechanics, and the quantum description of matter.</p></div></Link>
      <Link href="/notes/statistical-mechanics" className={styles.notebook}><div className={styles.notebookDrawing} aria-hidden="true"><span className={styles.drawingNumber}>04 / STATISTICAL</span><StatisticalSketch/><span className={styles.drawingCaption}>Many particles. A collective picture.</span></div><div className={styles.notebookBody}><h2>Statistical Mechanics</h2><p>Thermodynamics, particles, and the collective behavior of many-body systems.</p></div></Link>
    </div>
  );
}

function NotebookPlaceholder({ number, subject, title, caption, description, children }: {
  number: string;
  subject: string;
  title: string;
  caption: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <article className={`${styles.notebook} ${styles.placeholder}`} aria-label={`${title} — coming soon`}>
      <div className={styles.notebookDrawing} aria-hidden="true">
        <span className={styles.drawingNumber}>{number} / {subject}</span>
        <svg viewBox="0 0 280 240" fill="none">{children}</svg>
        <span className={styles.drawingCaption}>{caption}</span>
      </div>
      <div className={styles.notebookBody}>

        <h2>{title}</h2>
        <p>{description}</p>

      </div>
    </article>
  );
}
