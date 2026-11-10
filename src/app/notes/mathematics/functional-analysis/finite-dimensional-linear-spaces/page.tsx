import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { CoordinateBoundSection } from "./coordinate-bound-section";
import { RememberSection } from "./remember-section";
import { DimensionSection } from "./dimension-section";
import { CompactnessSection } from "./compactness-section";
import { CompletenessSection } from "./completeness-section";
import { CoordinateNormSection } from "./coordinate-norm-section";
import { EquivalenceSection } from "./equivalence-section";
import { IndependenceSection } from "./independence-section";
import { BasisSection } from "./basis-section";

export const metadata = {
  title: "Finite Dimensional Linear Spaces | Functional Analysis | Zura Jashi",
  description:
    "Lecture 5: bases and dimension, coordinate estimates, compact unit balls, equivalence of all norms and completeness in finite dimensions.",
};

export default function FiniteDimensionalLesson() {
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
        <span>Lecture 5</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>05 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>
          Finite dimensional linear spaces
        </h1>
        <p className={styles.subjectDescription}>
          Use a finite basis to control coordinates, extract convergent
          subsequences, compare every norm, and prove completeness.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 5</span>
          <span>
            Linear independence · Matrices · Norms · Scalar compactness
          </span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=2tnSxSeypNk">
            Claudio Landim · IMPA lecture 5
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
                  "Finite dimension gives strong analytic conclusions from elementary coordinate arguments. The central estimate bounds the sum of coordinate magnitudes by the norm of the vector. It leads to compactness of the closed unit ball, equivalence of all norms, and completeness."
                }
              </MathText>
            </p>
          </div>
          <IndependenceSection />
          <BasisSection />
          <DimensionSection />
          <CoordinateBoundSection />
          <CompactnessSection />
          <CoordinateNormSection />
          <EquivalenceSection />
          <section id="all-norms" className={styles.section}>
            <span className={styles.sectionNumber}>08 / LECTURE 5</span>
            <h2>All norms on a finite dimensional space are equivalent</h2>
            <p>
              <MathText>
                {
                  "Apply the preceding comparison to two norms $N$ and $P$ using the same basis and therefore the same coordinate norm. There are positive constants $C_N,M_N,C_P,M_P$ such that"
                }
              </MathText>
            </p>
            <Equation>
              {
                "\\|x\\|_0\\leq C_NN(x),\\quad N(x)\\leq M_N\\|x\\|_0,\\qquad \\|x\\|_0\\leq C_PP(x),\\quad P(x)\\leq M_P\\|x\\|_0."
              }
            </Equation>
            <p>
              <MathText>
                {"Combining them gives bounds directly between the two norms:"}
              </MathText>
            </p>
            <Equation>
              {"P(x)\\leq M_PC_NN(x),\\qquad N(x)\\leq M_NC_PP(x)."}
            </Equation>
            <NoteBox kind="result" title="All norms are equivalent">
              <p>
                <MathText>
                  {
                    "Any two norms on a fixed finite dimensional real or complex vector space are equivalent. They induce the same convergence, open sets and closed sets."
                  }
                </MathText>
              </p>
            </NoteBox>
            <p>
              <MathText>
                {
                  "Equivalence does not mean the norms assign the same value to a vector. It means that uniform positive constants compare their sizes in both directions. The finite dimension assumption is essential to the coordinate-subsequence argument."
                }
              </MathText>
            </p>
          </section>
          <CompletenessSection />
          <RememberSection />

          <LessonNavigation
            contents={{
              href: "/notes/mathematics/functional-analysis",
              title: "Functional Analysis",
            }}
            previous={{
              href: "/notes/mathematics/functional-analysis/completing-a-normed-linear-space",
              title: "Completing a normed linear space",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/examples-of-normed-linear-spaces",
              title: "Examples of normed linear spaces",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#independence">
                  Linear independence and unique coordinates
                </a>
              </li>
              <li>
                <a href="#basis">Bases and maximal independent families</a>
              </li>
              <li>
                <a href="#dimension">Why all finite bases have the same size</a>
              </li>
              <li>
                <a href="#coordinate-bound">A uniform bound on coordinates</a>
              </li>
              <li>
                <a href="#compactness">The closed unit ball is compact</a>
              </li>
              <li>
                <a href="#coordinate-norm">The coordinate norm</a>
              </li>
              <li>
                <a href="#equivalence">
                  Every norm is equivalent to the coordinate norm
                </a>
              </li>
              <li>
                <a href="#all-norms">
                  All norms on a finite dimensional space are equivalent
                </a>
              </li>
              <li>
                <a href="#completeness">
                  Finite dimensional normed spaces are complete
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
