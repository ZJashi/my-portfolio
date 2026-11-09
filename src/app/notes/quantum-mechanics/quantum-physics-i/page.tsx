import Link from "next/link";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import styles from "../../notes.module.css";
export const metadata = { title: "Quantum Physics I | Notes | Zura Jashi" };
const chapters = [
  { number: "01", slug: "chapter-1", title: "Basic Concepts", description: "Quantum states, photon experiments, matter waves, the Schrödinger equation, uncertainty, expectation values, and observables." },
  { number: "02", slug: "chapter-2", title: "Energy Eigenstates", description: "Square wells, oscillator algebra, coherent states, scattering, tunneling, phase delay, and resonances." },
  { number: "03", slug: "chapter-3", title: "Angular Momentum & Central Potentials", description: "Three-dimensional states, radial equations, angular momentum, spherical harmonics, hydrogen orbitals, and the atomic spectrum." },
];
export default function CoursePage() {
  return <div className={styles.page}>
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes/physics">Physics</Link><span>/</span><Link href="/notes/quantum-mechanics">Quantum Mechanics</Link><span>/</span><span>Quantum Physics I</span></nav>
    <SubjectHeader title="Quantum Physics I" description="An independent study companion from quantum amplitudes and wave mechanics through scattering, angular momentum, and hydrogen. Original derivations, diagrams, interactive models, and exercises with solutions." credit={<> Based on Barton Zwiebach’s <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/">MIT 8.04</a>. </>} />

    {chapters.map(chapter => <Link key={chapter.slug} href={`/notes/quantum-mechanics/quantum-physics-i/${chapter.slug}`} className={styles.chapterCard}><span className={styles.chapterNumber}>{chapter.number}</span><div><h2>{chapter.title}</h2><p>{chapter.description}</p></div></Link>)}
    <p className={styles.reference}>The introductory topic sequence reaches hydrogen and ends with a review in lesson 3.4. Local lessons do not map one-to-one to source lectures. These notes complement the source course and its assignments and exams.</p>
  </div>;
}
