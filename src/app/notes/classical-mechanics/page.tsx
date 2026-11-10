import { CourseContents } from "@/components/notes/CourseContents";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import Link from "next/link";
import styles from "../notes.styles";

export const metadata = {
  title: "Classical Mechanics | Notes | Zura Jashi",
  description:
    "Intuitive, quantitative classical mechanics notes following Goldstein, Poole, and Safko. Start with Newton’s laws, constraints, and generalized coordinates.",
};

export default function ClassicalMechanicsPage() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/physics">Physics</Link>
        <span>/</span>
        <span>Classical Mechanics</span>
      </nav>
      <SubjectHeader
        title="Classical Mechanics"
        description="From Newton’s laws and conservation principles to constraints and analytical mechanics."
        credit={
          <>
            {" "}
            Goldstein, Poole &amp; Safko’s{" "}
            <a href="https://www.pearson.com/en-us/subject-catalog/p/Goldstein-Classical-Mechanics-3rd-Edition/P200000006871?view=educator">
              Classical Mechanics, 3rd ed.
            </a>{" "}
          </>
        }
      />

      <CourseContents
        groups={[
          {
            title: "Survey of the Elementary Principles",
            range: "Chapter 1 · Lessons 1.1–1.6",
            entries: [
              {
                number: "1.1",
                title: "Mechanics of a Particle",
                href: "/notes/classical-mechanics/chapter-1/mechanics-of-a-particle",
              },
              {
                number: "1.2",
                title: "Mechanics of a System of Particles",
                href: "/notes/classical-mechanics/chapter-1/mechanics-of-a-system-of-particles",
              },
              {
                number: "1.3",
                title: "Constraints",
                description: "Notes in preparation.",
              },
              {
                number: "1.4",
                title: "D’Alembert’s Principle and Lagrange’s Equations",
                description: "Notes in preparation.",
              },
              {
                number: "1.5",
                title:
                  "Velocity-Dependent Potentials and the Dissipation Function",
                description: "Notes in preparation.",
              },
              {
                number: "1.6",
                title: "Simple Applications of the Lagrangian Formulation",
                description: "Notes in preparation.",
              },
            ],
          },
        ]}
      />
    </div>
  );
}
