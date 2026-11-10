import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { RememberSection } from "./remember-section";
import { DualSection } from "./dual-section";
import { ContinuitySection } from "./continuity-section";
import { LimitSection } from "./limit-section";
import { KernelSection } from "./kernel-section";
import { NormLimitSection } from "./norm-limit-section";

export const metadata = {
  title: "Dual of a normed linear space | Functional Analysis | Zura Jashi",
  description:
    "Bounded linear functionals, dual norms, closed kernels, and completeness of the continuous dual.",
};
export default function Lesson() {
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
        <span>Lecture 12</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>12 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>Dual of a normed linear space</h1>
        <p className={styles.subjectDescription}>
          Bounded linear functionals, dual norms, closed kernels, and
          completeness of the continuous dual.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 12</span>
          <span>Normed spaces / Scalar completeness</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=GTfESSApUXg">
            Claudio Landim · IMPA lecture 12
          </a>
          . Adapted from captions; board notation unverified.
        </p>
      </header>
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          <div className={styles.lessonOverview}>
            <p>
              <MathText>
                {
                  "The continuous scalar measurements on a normed space form a new space of their own. Its norm records the best uniform bound, and its completeness follows from a uniform Cauchy estimate."
                }
              </MathText>
            </p>
          </div>
          <section id="functionals" className={styles.section}>
            <span className={styles.sectionNumber}>01 / LECTURE 12</span>
            <h2>Linear functionals and boundedness</h2>
            <p>
              <MathText>
                {
                  "Let $X$ be a normed linear space over $\\mathbb K=\\mathbb R$ or $\\mathbb C$. A linear functional is a map $L:X\\to\\mathbb K$ satisfying $L(\\alpha x+\\beta y)=\\alpha L(x)+\\beta L(y)$. Thus $L(0)=0$ and $L(x)-L(y)=L(x-y)$. Continuity means that $x_n\\to x$ implies $L(x_n)\\to L(x)$."
                }
              </MathText>
            </p>
            <NoteBox kind="definition" title="Bounded linear functional">
              <p>
                <MathText>
                  {
                    "There is a constant $C\\geq0$, independent of the input, such that"
                  }
                </MathText>
              </p>
              <Equation>{"|L(x)|\\leq C\\|x\\|\\qquad(x\\in X)."}</Equation>
            </NoteBox>
            <p>
              <MathText>
                {
                  "“Bounded” means bounded on the unit ball, or equivalently the displayed linear growth estimate. A nonzero linear functional is not bounded on the whole vector space. The absolute value measures the scalar output; the norm measures the vector input."
                }
              </MathText>
            </p>
          </section>
          <ContinuitySection />
          <DualSection />
          <section id="norm-axioms" className={styles.section}>
            <span className={styles.sectionNumber}>04 / LECTURE 12</span>
            <h2>Verify the norm axioms</h2>
            <p>
              <MathText>
                {
                  "Nonnegativity is immediate. If $\\|L\\|=0$, the basic bound forces $L(x)=0$ for every $x$; conversely the zero functional has norm zero. Absolute homogeneity follows by taking a constant outside the supremum:"
                }
              </MathText>
            </p>
            <Equation>
              {
                "\\|\\alpha L\\|=\\sup_{\\|x\\|\\leq1}|\\alpha L(x)|=|\\alpha|\\|L\\|."
              }
            </Equation>
            <p>
              <MathText>
                {"For the triangle inequality, estimate each input first:"}
              </MathText>
            </p>
            <Equation>
              {"|(L+M)(x)|\\leq|L(x)|+|M(x)|\\leq(\\|L\\|+\\|M\\|)\\|x\\|."}
            </Equation>
            <p>
              <MathText>
                {
                  "Taking the supremum over the unit ball yields $\\|L+M\\|\\leq\\|L\\|+\\|M\\|$. These calculations complete the norm-axiom exercise and show that $X'$ is a normed linear space."
                }
              </MathText>
            </p>
          </section>
          <KernelSection />
          <LimitSection />
          <NormLimitSection />
          <RememberSection />

          <LessonNavigation
            contents={{
              href: "/notes/mathematics/functional-analysis",
              title: "Functional Analysis",
            }}
            previous={{
              href: "/notes/mathematics/functional-analysis/geometric-hahn-banach-theorems",
              title: "Geometric Hahn–Banach theorems",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/extensions-of-bounded-linear-functionals",
              title: "Extensions of bounded linear functionals",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#functionals">Linear functionals and boundedness</a>
              </li>
              <li>
                <a href="#continuity">Bounded if and only if continuous</a>
              </li>
              <li>
                <a href="#dual">The dual space and its norm</a>
              </li>
              <li>
                <a href="#norm-axioms">Verify the norm axioms</a>
              </li>
              <li>
                <a href="#kernel">Closed kernels and codimension one</a>
              </li>
              <li>
                <a href="#limit">Completeness: construct a limit functional</a>
              </li>
              <li>
                <a href="#norm-limit">From pointwise to norm convergence</a>
              </li>
              <li>
                <a href="#remember">Main results to remember</a>
              </li>
            </ol>
          </nav>
        </aside>
      </div>
    </div>
  );
}
