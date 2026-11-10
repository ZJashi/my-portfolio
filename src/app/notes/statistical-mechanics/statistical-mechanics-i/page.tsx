import Link from "next/link";
import { CourseContents } from "@/components/notes/CourseContents";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import styles from "../../notes.styles";
export const metadata = {
  title: "Statistical Mechanics I | Notes | Zura Jashi",
};
export default function CoursePage() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes/physics">Physics</Link>
        <span>/</span>
        <Link href="/notes/statistical-mechanics">Statistical Mechanics</Link>
        <span>/</span>
        <span>Course I</span>
      </nav>
      <SubjectHeader
        title="Statistical Mechanics I"
        description="Statistical Mechanics of Particles. Begin with thermodynamics, then work toward the statistical description of many-particle systems."
        credit={
          <>
            {" "}
            Mehran Kardar’s{" "}
            <a href="https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/">
              MIT 8.333
            </a>{" "}
          </>
        }
      />
      <CourseContents
        groups={[
          {
            title: "Thermodynamics",
            range: "Chapter 1 · Lessons 1.1–1.4",
            entries: [
              {
                number: "1.1",
                title: "Equilibrium, Temperature & the First Law",
                href: "/notes/statistical-mechanics/statistical-mechanics-i/chapter-1/equilibrium-and-first-law",
              },
              {
                number: "1.2",
                title: "The Second Law, Carnot Engines & Entropy",
                href: "/notes/statistical-mechanics/statistical-mechanics-i/chapter-1/second-law-and-entropy",
              },
              {
                number: "1.3",
                title: "Equilibrium & Thermodynamic Potentials",
                href: "/notes/statistical-mechanics/statistical-mechanics-i/chapter-1/equilibrium-and-thermodynamic-potentials",
              },
              {
                number: "1.4",
                title: "Stability & the Third Law",
                href: "/notes/statistical-mechanics/statistical-mechanics-i/chapter-1/stability-and-third-law",
              },
            ],
          },
        ]}
      />
    </div>
  );
}
