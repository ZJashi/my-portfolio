import Link from "next/link";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import styles from "../notes.styles";
export const metadata = { title: "Quantum Mechanics | Notes | Zura Jashi" };
export default function QuantumPage() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/physics">Physics</Link>
        <span>/</span>
        <span>Quantum Mechanics</span>
      </nav>
      <SubjectHeader
        title="Quantum Mechanics"
        description="States, amplitudes, and the experiments that make them necessary. Explore wave mechanics, measurement, and quantum dynamics."
        credit={
          <>
            {" "}
            Barton Zwiebach’s MIT courses:{" "}
            <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/">
              8.04
            </a>{" "}
            ·{" "}
            <a href="https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/">
              8.05
            </a>{" "}
            ·{" "}
            <a href="https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/">
              8.06
            </a>{" "}
          </>
        }
      />

      {[
        [
          "i",
          "01",
          "Quantum Physics I",
          "From superposition and photon experiments to scattering, angular momentum, and hydrogen.",
        ],
        [
          "ii",
          "02",
          "Quantum Physics II",
          "Further study of quantum states, dynamics, and approximation methods.",
        ],
        [
          "iii",
          "03",
          "Quantum Physics III",
          "Advanced quantum mechanics and its applications.",
        ],
      ].map(([slug, num, title, description]) => (
        <Link
          key={slug}
          href={`/notes/quantum-mechanics/quantum-physics-${slug}`}
          className={styles.chapterCard}
        >
          <span className={styles.chapterNumber}>{num}</span>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
