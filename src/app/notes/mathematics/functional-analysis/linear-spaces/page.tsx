import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
import { Section9Section } from "./section9-section";
import { Section2Section } from "./section2-section";
import { DefinitionSection } from "./definition-section";
import { Section10Section } from "./section10-section";
import { Section7Section } from "./section7-section";
import { Section1Section } from "./section1-section";
import { Section4Section } from "./section4-section";
import { Section6Section } from "./section6-section";
import { Section3Section } from "./section3-section";

export const metadata = {
  title: "Linear Spaces | Functional Analysis | Zura Jashi",
  description:
    "Lecture 1: vector spaces, examples, subspaces, sums, intersections, chains and linear spans, with complete proofs.",
};

export default function LinearSpacesLesson() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/mathematics">Mathematics</Link>
        <span>/</span>
        <Link href="/notes/mathematics/functional-analysis">
          Functional Analysis
        </Link>
        <span>/</span>
        <span>Lecture 1</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>01 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>Linear spaces</h1>
        <p className={styles.subjectDescription}>
          Definitions, examples and the algebra of subspaces. Build the span
          from first principles, then describe every element explicitly.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 1</span>
          <span>Real and complex scalars · Sets · Basic algebra</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=OonaUALrKUk">
            Claudio Landim · IMPA lecture 1
          </a>
          .
        </p>
      </header>
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          <div className={styles.lessonOverview}>
            <p>
              {
                "The structure of a linear space provides the algebraic foundation for functional analysis. Starting with "
              }
              <a href="https://www.youtube.com/watch?v=OonaUALrKUk">
                {"linear spaces"}
              </a>
              {
                ", we develop subspaces and prove that every element of a span is a finite linear combination of its generators."
              }
            </p>
          </div>
          <DefinitionSection />
          <Section1Section />
          <Section2Section />
          <Section3Section />
          <Section4Section />
          <section id="section-5" className={styles.section}>
            <span className={styles.sectionNumber}>06 / LECTURE 1</span>
            <h2>Intersections of subspaces</h2>
            <p>
              <MathText>
                {
                  "Let the family of subspaces be indexed by an arbitrary set $I$. The index set need not be countable. Their intersection is again a subspace."
                }
              </MathText>
            </p>
            <Equation>{"Y=\\bigcap_{\\theta\\in I}Y_\\theta."}</Equation>
            <p>
              <strong>{"Proof."}</strong>
              <MathText>
                {
                  " Each subspace contains zero, so the intersection contains zero. Suppose $x$, $y$ belong to $Y$ and $\\alpha$ belongs to $\\mathbb K$. Membership in the intersection means that $x$ and $y$ belong to every $Y_\\theta$. Closure in each such subspace gives:"
                }
              </MathText>
            </p>
            <Equation>
              {
                "\\alpha x+y\\in Y_\\theta\\quad\\text{for every }\\theta\\in I."
              }
            </Equation>
            <p>
              {
                "Consequently the vector belongs to the intersection itself. This establishes closure and proves the claim."
              }
            </p>
            <p>
              <strong>{"Important condition."}</strong>
              <MathText>
                {
                  " If $I$ is empty, the intersection is conventionally taken within the ambient space $X$ and equals $X$."
                }
              </MathText>
            </p>
          </section>
          <Section6Section />
          <Section7Section />
          <section id="section-8" className={styles.section}>
            <span className={styles.sectionNumber}>09 / LECTURE 1</span>
            <h2>Linear combinations</h2>
            <p>
              {"A "}
              <strong>{"linear combination"}</strong>
              <MathText>
                {
                  " of elements $x_1,\\ldots,x_n$ of a set is a finite sum of scalar multiples of those elements."
                }
              </MathText>
            </p>
            <Equation>
              {"\\sum_{j=1}^{n}\\alpha_jx_j,\\qquad \\alpha_j\\in\\mathbb K."}
            </Equation>
            <p>
              {
                "The number of terms can vary from one combination to another. The word "
              }
              <strong>{"finite"}</strong>
              {
                " is essential. No operation of summing infinitely many vectors has been defined in an abstract linear space."
              }
            </p>
          </section>
          <Section9Section />
          <Section10Section />

          <LessonNavigation
            contents={{
              href: "/notes/mathematics/functional-analysis",
              title: "Functional Analysis",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/quotient-spaces-and-convex-sets",
              title: "Quotient spaces and convex sets",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#definition">Definition of a linear space</a>
              </li>
              <li>
                <a href="#section-1">Two consequences of the axioms</a>
              </li>
              <li>
                <a href="#section-2">Examples of linear spaces</a>
              </li>
              <li>
                <a href="#section-3">Linear subspaces</a>
              </li>
              <li>
                <a href="#section-4">The zero subspace and sums of subspaces</a>
              </li>
              <li>
                <a href="#section-5">Intersections of subspaces</a>
              </li>
              <li>
                <a href="#section-6">
                  Totally ordered families and their unions
                </a>
              </li>
              <li>
                <a href="#section-7">Definition of the linear span</a>
              </li>
              <li>
                <a href="#section-8">Linear combinations</a>
              </li>
              <li>
                <a href="#section-9">
                  The span consists of finite linear combinations
                </a>
              </li>
              <li>
                <a href="#section-10">Main results to remember</a>
              </li>
            </ol>
          </nav>
        </aside>
      </div>
    </div>
  );
}
