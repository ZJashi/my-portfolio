import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { RememberSection } from "./remember-section";
import { LpCompleteSection } from "./lp-complete-section";
import { HolderSection } from "./holder-section";
import { LinftyCompleteSection } from "./linfty-complete-section";
import { UniformExercisesSection } from "./uniform-exercises-section";
import { CompletionSection } from "./completion-section";
import { CompactSupportSection } from "./compact-support-section";
import { IntegralNormSection } from "./integral-norm-section";
import { LpSection } from "./lp-section";
import { IntegralExerciseSection } from "./integral-exercise-section";
import { BoundedSection } from "./bounded-section";

export const metadata = {
  title: "Examples of Normed Linear Spaces | Functional Analysis | Zura Jashi",
  description:
    "Lecture 6: completeness of sequence spaces, Hölder and Minkowski inequalities, compactly supported continuous functions, integral norms and Lp completion.",
};

export default function ExamplesLesson() {
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
        <span>Lecture 6</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>06 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>
          Examples of normed linear spaces
        </h1>
        <p className={styles.subjectDescription}>
          Prove completeness for sequence spaces, use Hölder to control products
          and sums, and see why continuous function spaces may need completion.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 6</span>
          <span>Sequences · Supremum norms · Integrals · Completion</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=hk3aTWjc3wg">
            Claudio Landim · IMPA lecture 6
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
                  "Four examples make completeness concrete: $\\ell^\\infty$, $\\ell^p$, compactly supported continuous functions under the supremum norm, and those same functions under an integral norm. The sequence spaces are Banach. The continuous function examples reveal two different ways that limits can leave the original space."
                }
              </MathText>
            </p>
          </div>
          <BoundedSection />
          <section id="linfty" className={styles.section}>
            <span className={styles.sectionNumber}>02 / LECTURE 6</span>
            <h2>Bounded sequences and the supremum norm</h2>
            <NoteBox kind="definition" title="The space of bounded sequences">
              <Equation>
                {
                  "\\ell^\\infty=\\left\\{a=(a_j)_{j\\geq1}:a_j\\in\\mathbb K,\\ \\sup_{j\\geq1}|a_j|<\\infty\\right\\},\\qquad \\|a\\|_\\infty=\\sup_{j\\geq1}|a_j|."
                }
              </Equation>
            </NoteBox>
            <p>
              <MathText>
                {
                  "Addition and scalar multiplication act coordinate by coordinate. If $a,b\\in\\ell^\\infty$, then $|a_j+b_j|\\leq\\|a\\|_\\infty+\\|b\\|_\\infty$ for every $j$, so the sum is bounded. Scalar multiplication preserves boundedness as well."
                }
              </MathText>
            </p>
            <h3>Checking the norm</h3>
            <p>
              <MathText>
                {
                  "The supremum is nonnegative and is zero exactly when every coordinate vanishes. For a scalar $\\alpha$, taking the supremum in $|\\alpha a_j|=|\\alpha|\\,|a_j|$ gives absolute homogeneity. Taking the supremum in the scalar triangle inequality gives"
                }
              </MathText>
            </p>
            <Equation>
              {"\\|a+b\\|_\\infty\\leq\\|a\\|_\\infty+\\|b\\|_\\infty."}
            </Equation>
            <p>
              <MathText>
                {
                  "A supremum need not be attained at any coordinate. For example, $a_j=1-1/j$ has supremum one, although each entry is strictly less than one."
                }
              </MathText>
            </p>
          </section>
          <LinftyCompleteSection />
          <LpSection />
          <HolderSection />
          <LpCompleteSection />
          <CompactSupportSection />
          <UniformExercisesSection />
          <IntegralNormSection />
          <IntegralExerciseSection />
          <CompletionSection />
          <RememberSection />

          <LessonNavigation
            contents={{
              href: "/notes/mathematics/functional-analysis",
              title: "Functional Analysis",
            }}
            previous={{
              href: "/notes/mathematics/functional-analysis/finite-dimensional-linear-spaces",
              title: "Finite dimensional linear spaces",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/noncompact-unit-balls-and-separability",
              title: "Noncompact unit balls and separability",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#bounded">Every Cauchy sequence is bounded</a>
              </li>
              <li>
                <a href="#linfty">Bounded sequences and the supremum norm</a>
              </li>
              <li>
                <a href="#linfty-complete">
                  Completeness of the bounded sequence space
                </a>
              </li>
              <li>
                <a href="#lp">Summable sequences</a>
              </li>
              <li>
                <a href="#holder">Hölder inequality and conjugate exponents</a>
              </li>
              <li>
                <a href="#lp-complete">
                  Completeness of summable sequence spaces
                </a>
              </li>
              <li>
                <a href="#compact-support">
                  Continuous functions with compact support
                </a>
              </li>
              <li>
                <a href="#uniform-exercises">Exercises on the supremum norm</a>
              </li>
              <li>
                <a href="#integral-norm">
                  Integral norms on compactly supported functions
                </a>
              </li>
              <li>
                <a href="#integral-exercise">
                  An integral Cauchy sequence with a discontinuous limit
                </a>
              </li>
              <li>
                <a href="#completion">
                  Completing the function space to obtain Lp
                </a>
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
