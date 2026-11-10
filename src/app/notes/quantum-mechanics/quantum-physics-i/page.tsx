import { CourseContents } from "@/components/notes/CourseContents";
import {
  quantumLessons,
  quantumChapterTwoLessons,
  quantumChapterThreeLessons,
} from "@/components/notes/QuantumLesson";
import Link from "next/link";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import styles from "../../notes.styles";
export const metadata = { title: "Quantum Physics I | Notes | Zura Jashi" };
const chapters = [
  {
    number: "01",
    slug: "chapter-1",
    title: "Basic Concepts",
    description:
      "Quantum states, photon experiments, matter waves, the Schrödinger equation, uncertainty, expectation values, and observables.",
  },
  {
    number: "02",
    slug: "chapter-2",
    title: "Energy Eigenstates",
    description:
      "Square wells, oscillator algebra, coherent states, scattering, tunneling, phase delay, and resonances.",
  },
  {
    number: "03",
    slug: "chapter-3",
    title: "Angular Momentum & Central Potentials",
    description:
      "Three-dimensional states, radial equations, angular momentum, spherical harmonics, hydrogen orbitals, and the atomic spectrum.",
  },
];
export default function CoursePage() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes/physics">Physics</Link>
        <span>/</span>
        <Link href="/notes/quantum-mechanics">Quantum Mechanics</Link>
        <span>/</span>
        <span>Quantum Physics I</span>
      </nav>
      <SubjectHeader
        title="Quantum Physics I"
        description="An independent study companion from quantum amplitudes and wave mechanics through scattering, angular momentum, and hydrogen. Original derivations, diagrams, interactive models, and exercises with solutions."
        credit={
          <>
            {" "}
            Barton Zwiebach’s{" "}
            <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/">
              MIT 8.04
            </a>{" "}
          </>
        }
      />

      <CourseContents
        groups={chapters.map((chapter, index) => ({
          title: chapter.title,
          range: `Chapter ${index + 1} · Lessons ${[quantumLessons, quantumChapterTwoLessons, quantumChapterThreeLessons][index][0][0]}–${[quantumLessons, quantumChapterTwoLessons, quantumChapterThreeLessons][index].at(-1)![0]}`,
          entries: [
            quantumLessons,
            quantumChapterTwoLessons,
            quantumChapterThreeLessons,
          ][index].map(([number, title, slug]) => ({
            number,
            title,
            href: `/notes/quantum-mechanics/quantum-physics-i/${chapter.slug}/${slug}`,
          })),
        }))}
      />
    </div>
  );
}
