import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { RememberSection } from "./remember-section";
import { ContinuousExampleSection } from "./continuous-example-section";
import { ClosedSubspacesSection } from "./closed-subspaces-section";
import { SeparableDualSection } from "./separable-dual-section";
import { EmbeddingSection } from "./embedding-section";
import { ReflexivitySection } from "./reflexivity-section";
import { NonseparableDualSection } from "./nonseparable-dual-section";

export const metadata = {
  title: "Reflexive spaces | Functional Analysis | Zura Jashi",
  description:
    "The canonical bidual embedding, reflexivity, norm attainment, separability, and closed subspaces of reflexive spaces.",
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
        <span>Lecture 14</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>14 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>Reflexive spaces</h1>
        <p className={styles.subjectDescription}>
          The canonical bidual embedding, reflexivity, norm attainment,
          separability, and closed subspaces of reflexive spaces.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 14</span>
          <span>Duality / Hahn–Banach</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=I-yCusXR_24">
            Claudio Landim · IMPA lecture 14
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
                  "A vector $x$ determines an evaluation functional on $X'$. Reflexivity asks whether this accounts for every element of the bidual. The answer connects norm attainment, separability, and the behavior of closed subspaces."
                }
              </MathText>
            </p>
          </div>
          <section id="bidual" className={styles.section}>
            <span className={styles.sectionNumber}>01 / LECTURE 14</span>
            <h2>The dual of the dual</h2>
            <p>
              <MathText>
                {
                  "For a normed linear space $X$ over $\\mathbb K$, its dual $X'$ consists of bounded linear functionals $\\ell:X\\to\\mathbb K$. Since $X'$ is itself normed, we may take its dual again. The resulting bidual $X''=(X')'$ consists of bounded linear maps $F:X'\\to\\mathbb K$, with norm"
                }
              </MathText>
            </p>
            <Equation>
              {"\\|F\\|=\\sup_{\\|\\ell\\|\\leq1}|F(\\ell)|."}
            </Equation>
            <p>
              <MathText>
                {
                  "Keep the domains separate: $x\\in X$ is a vector, $\\ell\\in X'$ acts on vectors, and $F\\in X''$ acts on functionals. Both $X'$ and $X''$ are Banach spaces, even when $X$ is incomplete."
                }
              </MathText>
            </p>
          </section>
          <EmbeddingSection />
          <ReflexivitySection />
          <section id="attainment" className={styles.section}>
            <span className={styles.sectionNumber}>04 / LECTURE 14</span>
            <h2>A consequence: functionals attain their norms</h2>
            <p>
              <MathText>
                {
                  "Assume $X$ is a nonzero real reflexive space. Apply the norming-functional result to the normed space $X'$: for a nonzero $\\ell\\in X'$, there exists $F\\in X''$ with $\\|F\\|=1$ and $F(\\ell)=\\|\\ell\\|$. By reflexivity, $F=Jx$ for some $x\\in X$, and the isometry gives $\\|x\\|=1$. Hence"
                }
              </MathText>
            </p>
            <NoteBox kind="result" title="Norm attainment in a reflexive space">
              <p>
                <MathText>
                  {
                    "Every nonzero continuous linear functional on a reflexive real normed space attains its norm at a unit vector."
                  }
                </MathText>
              </p>
              <Equation>
                {
                  "\\ell(x)=\\|\\ell\\|\\qquad\\text{for some }x\\in X,\\ \\|x\\|=1."
                }
              </Equation>
            </NoteBox>
            <p>
              <MathText>
                {
                  "This is a necessary consequence of reflexivity. To prove a space is not reflexive, it is enough to produce one bounded functional whose supremum over unit vectors is never attained. The zero functional is harmless: on a nonzero space any unit vector attains its zero norm."
                }
              </MathText>
            </p>
          </section>
          <ContinuousExampleSection />
          <SeparableDualSection />
          <NonseparableDualSection />
          <ClosedSubspacesSection />
          <RememberSection />

          <LessonNavigation
            contents={{
              href: "/notes/mathematics/functional-analysis",
              title: "Functional Analysis",
            }}
            previous={{
              href: "/notes/mathematics/functional-analysis/extensions-of-bounded-linear-functionals",
              title: "Extensions of bounded linear functionals",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/dual-of-continuous-functions",
              title: "The dual space of C([a,b])",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#bidual">The dual of the dual</a>
              </li>
              <li>
                <a href="#embedding">Evaluation embeds X into its bidual</a>
              </li>
              <li>
                <a href="#reflexivity">Reflexivity and basic examples</a>
              </li>
              <li>
                <a href="#attainment">
                  A consequence: functionals attain their norms
                </a>
              </li>
              <li>
                <a href="#continuous-example">
                  A functional on C([-1,1]) that never attains its norm
                </a>
              </li>
              <li>
                <a href="#separable-dual">
                  A separable dual forces the original space to be separable
                </a>
              </li>
              <li>
                <a href="#nonseparable-dual">
                  A separable space can have a nonseparable dual
                </a>
              </li>
              <li>
                <a href="#closed-subspaces">
                  Closed subspaces of reflexive spaces are reflexive
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
