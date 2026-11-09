import Link from "next/link";
import type { ReactNode } from "react";
import styles from "@/app/notes/notes.module.css";
const courseBase='/notes/quantum-mechanics/quantum-physics-i';
export const quantumLessons = [
 ["1.1", "Key Features of Quantum Mechanics", "key-features"],
 ["1.2", "Experiments with Photons", "photon-experiments"],
 ["1.3", "Particle Nature of Light & Matter Waves", "light-and-matter"],
 ["1.4", "Matter Waves, Phase & Group Velocity", "wave-motion"],
 ["1.5", "The Schrödinger Equation & the Wavefunction", "schrodinger-equation"],
 ["1.6", "Normalization & Probability Current", "normalization-and-current"],
 ["1.7", "Wavepackets, Spreading & Uncertainty", "wavepackets-and-uncertainty"],
 ["1.8", "Momentum Space & Expectation Values", "momentum-and-expectation"],
 ["1.9", "Observables & Hermitian Operators", "observables-and-operators"],
];
export const quantumChapterTwoLessons = [
 ["2.1", "Stationary States & Energy Eigenvalues", "stationary-states-and-energy"],
 ["2.2", "The Infinite Square Well", "infinite-square-well"],
 ["2.3", "The Finite Square Well", "finite-square-well"],
 ["2.4", "Bound States, Turning Points & Shooting", "bound-states-and-shooting"],
 ["2.5", "Delta Potentials, Nodes & the Harmonic Oscillator", "delta-potential-and-oscillator"],
 ["2.6", "The Oscillator Through Ladder Operators", "oscillator-ladder-operators"],
 ["2.7", "Oscillator Observables & Coherent States", "oscillator-observables-and-coherent-states"],
 ["2.8", "Scattering States & the Potential Step", "scattering-and-potential-step"],
 ["2.9", "Finite Barriers, Tunneling & Resonant Transmission", "barriers-tunneling-and-resonance"],
 ["2.10", "Scattering Phase Shifts & Time Delay", "phase-shifts-and-time-delay"],
 ["2.11", "Resonances, Lifetimes & Bound-State Counting", "resonances-lifetimes-and-bound-states"],
];
const allLessons = [...quantumLessons, ...quantumChapterTwoLessons];
function lessonHref(lesson: string[]) { return `${courseBase}/chapter-${lesson[0].split(".")[0]}/${lesson[2]}`; }
export function QuantumLesson({number,title,description,sections,children}:{number:string;title:string;description:string;sections:string[][];children:ReactNode}) {
 const chapter = number.split(".")[0];
 const base = `${courseBase}/chapter-${chapter}`;
 const chapterTitle = chapter === "1" ? "BASIC CONCEPTS" : "ENERGY EIGENSTATES";
 const index = allLessons.findIndex(([id]) => id === number);
 const previous = allLessons[index - 1];
 const next = allLessons[index + 1];
 return <div className={styles.page}><nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes/physics">Physics</Link><span>/</span><Link href="/notes/quantum-mechanics">Quantum Mechanics</Link><span>/</span><Link href="/notes/quantum-mechanics/quantum-physics-i">Quantum Physics I</Link><span>/</span><Link href={base}>Chapter {chapter}</Link><span>/</span><span>{number}</span></nav>
 <header className={styles.readingHeader}><p className={styles.subjectKicker}><span>{number}</span> QUANTUM PHYSICS I / {chapterTitle}</p><h1 className={styles.subjectTitle}>{title}</h1><p className={styles.subjectDescription}>{description}</p><div className={styles.readingMeta}><span>20–30 min + exercises</span><span>Complex numbers · Vectors · Basic calculus</span></div></header>
 <div className={styles.lessonLayout}><article className={styles.article}>{children}<nav className={styles.lessonEnd} aria-label="Lesson navigation">{previous && <Link href={lessonHref(previous)}>Previous: {previous[1]}</Link>}<Link href={base}>Chapter contents</Link>{next && <Link href={lessonHref(next)}>Next: {next[1]}</Link>}</nav></article><aside className={styles.toc}><nav aria-label="On this page"><p className={styles.label}>In this lesson</p><ol>{sections.map(([id,label])=><li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav></aside></div></div>;
}
