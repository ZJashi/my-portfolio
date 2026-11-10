import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { RememberSection } from "./remember-section";
import { RestrictionSection } from "./restriction-section";
import { CriterionSection } from "./criterion-section";
import { ComplementSection } from "./complement-section";
import { DistanceSection } from "./distance-section";
import { PrescribedValuesSection } from "./prescribed-values-section";
import { NormingSection } from "./norming-section";
import { ClosedSpanSection } from "./closed-span-section";
import { DistanceConstructionSection } from "./distance-construction-section";

export const metadata = {
  title:
    "Extensions of bounded linear functionals | Functional Analysis | Zura Jashi",
  description:
    "Norm-preserving extensions, closed complements, dual distance formulas, annihilators, and a criterion for closed linear spans.",
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
        <span>Lecture 13</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>13 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>
          Extensions of bounded linear functionals
        </h1>
        <p className={styles.subjectDescription}>
          Norm-preserving extensions, closed complements, dual distance
          formulas, annihilators, and a criterion for closed linear spans.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 13</span>
          <span>Real normed spaces / Hahn–Banach</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=XK16FTHY0Hk">
            Claudio Landim · IMPA lecture 13
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
                  "Hahn–Banach turns a locally prescribed scalar measurement into a continuous functional on all of $X$. This gives closed complements for finite dimensional subspaces, exact formulas for norms and distances, and a test for membership in a closed linear span."
                }
              </MathText>
            </p>
          </div>
          <section id="extension" className={styles.section}>
            <span className={styles.sectionNumber}>01 / LECTURE 13</span>
            <h2>Extension without increasing the norm</h2>
            <p>
              <MathText>
                {
                  "Throughout this lecture $X$ is a real normed linear space and $Y\\subseteq X$ is a linear subspace. Neither completeness of $X$ nor closedness of $Y$ is assumed. Let $\\ell:Y\\to\\mathbb R$ be linear with $|\\ell(y)|\\leq C_0\\|y\\|$. Define the sublinear function $p(x)=C_0\\|x\\|$. Hahn–Banach gives a linear extension $L:X\\to\\mathbb R$ satisfying $L(x)\\leq p(x)$. Applying this inequality also to $-x$ yields the two-sided bound."
                }
              </MathText>
            </p>
            <NoteBox
              kind="result"
              title="Norm-preserving Hahn–Banach extension"
            >
              <p>
                <MathText>
                  {
                    "Every $\\ell\\in Y'$ admits an extension $L\\in X'$ such that"
                  }
                </MathText>
              </p>
              <Equation>
                {"L|_Y=\\ell,\\qquad \\|L\\|_{X'}=\\|\\ell\\|_{Y'}."}
              </Equation>
            </NoteBox>
            <p>
              <MathText>
                {
                  "To get equality, choose $C_0=\\|\\ell\\|_{Y'}$. Domination gives $\\|L\\|\\leq C_0$, while restriction to $Y$ gives the reverse inequality. The extension need not be unique. The repeated method in this lecture is to prescribe a functional on a convenient small subspace, estimate its norm there, then extend."
                }
              </MathText>
            </p>
          </section>
          <PrescribedValuesSection />
          <ComplementSection />
          <NormingSection />
          <DistanceSection />
          <DistanceConstructionSection />
          <RestrictionSection />
          <ClosedSpanSection />
          <CriterionSection />
          <RememberSection />

          <LessonNavigation
            contents={{
              href: "/notes/mathematics/functional-analysis",
              title: "Functional Analysis",
            }}
            previous={{
              href: "/notes/mathematics/functional-analysis/dual-of-a-normed-linear-space",
              title: "Dual of a normed linear space",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/reflexive-spaces",
              title: "Reflexive spaces",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#extension">Extension without increasing the norm</a>
              </li>
              <li>
                <a href="#prescribed-values">
                  Prescribe values on independent vectors
                </a>
              </li>
              <li>
                <a href="#complement">
                  A closed complement to every finite dimensional subspace
                </a>
              </li>
              <li>
                <a href="#norming">Recover a vector norm from the dual</a>
              </li>
              <li>
                <a href="#distance">
                  Distance to a subspace: the easy inequality
                </a>
              </li>
              <li>
                <a href="#distance-construction">
                  Construct a functional attaining the distance
                </a>
              </li>
              <li>
                <a href="#restriction">
                  Restriction norm as a distance in the dual
                </a>
              </li>
              <li>
                <a href="#closed-span">The closed linear span</a>
              </li>
              <li>
                <a href="#criterion">
                  Membership in a closed span via functionals
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
