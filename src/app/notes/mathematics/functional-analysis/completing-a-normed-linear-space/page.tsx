import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { DoubleIndicesSection } from "./double-indices-section";
import { RowBandsSection } from "./row-bands-section";
import { RememberSection } from "./remember-section";
import { NullSequencesSection } from "./null-sequences-section";
import { LimitNormSection } from "./limit-norm-section";
import { ConvergenceSection } from "./convergence-section";
import { CompletionSection } from "./completion-section";
import { NormAxiomsSection } from "./norm-axioms-section";
import { CauchySpaceSection } from "./cauchy-space-section";
import { EmbeddingSection } from "./embedding-section";
import { DiagonalSection } from "./diagonal-section";

export const metadata = {
  title: "Completing a Normed Linear Space | Functional Analysis | Zura Jashi",
  description:
    "Lecture 4: constructing a completion from Cauchy sequences, the limit norm, the full diagonal completeness proof, isometric embedding and density.",
};

export default function CompletionLesson() {
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
        <span>Lecture 4</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>04 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>
          Completing a normed linear space
        </h1>
        <p className={styles.subjectDescription}>
          Build the missing limits from Cauchy sequences, prove the resulting
          space is complete, and recover the original space as a dense isometric
          copy.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 4</span>
          <span>Cauchy sequences · Quotients · Norms · Geometric series</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=9_0S3O23Caw">
            Claudio Landim · IMPA lecture 4
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
                  "The completion construction turns an incomplete normed space into a Banach space. Its points are equivalence classes of Cauchy sequences. The central proof uses a carefully selected diagonal sequence and summable error bounds to show that this new space has every required limit."
                }
              </MathText>
            </p>
          </div>
          <CompletionSection />
          <CauchySpaceSection />
          <NullSequencesSection />
          <LimitNormSection />
          <NormAxiomsSection />
          <DoubleIndicesSection />
          <RowBandsSection />
          <DiagonalSection />
          <ConvergenceSection />
          <EmbeddingSection />
          <section id="density" className={styles.section}>
            <span className={styles.sectionNumber}>11 / LECTURE 4</span>
            <h2>The original space is dense in its completion</h2>
            <p>
              <MathText>
                {
                  "Take an arbitrary $\\xi=[(x_j)]\\in\\widehat X$. For each $n$, the constant sequence with value $x_n$ defines the point $\\iota(x_n)$ of the embedded original space. Compare it with $\\xi$:"
                }
              </MathText>
            </p>
            <Equation>
              {
                "\\|\\iota(x_n)-\\xi\\|_{\\widehat X}=\\lim_{j\\to\\infty}\\|x_n-x_j\\|_X."
              }
            </Equation>
            <p>
              <MathText>
                {
                  "Because $(x_j)$ is Cauchy, for every $\\varepsilon>0$ there is $N$ such that $\\|x_n-x_j\\|_X\\leq\\varepsilon$ whenever $n,j\\geq N$. For each fixed $n\\geq N$, taking the limit in $j$ preserves this bound. Hence $\\|\\iota(x_n)-\\xi\\|_{\\widehat X}\\to0$ as $n\\to\\infty$."
                }
              </MathText>
            </p>
            <NoteBox kind="result" title="Density of the embedded copy">
              <Equation>
                {
                  "\\iota(x_n)\\longrightarrow[(x_j)],\\qquad \\overline{\\iota(X)}^{\\,\\widehat X}=\\widehat X."
                }
              </Equation>
            </NoteBox>
            <p>
              <MathText>
                {
                  "This completes the construction: $\\widehat X$ is complete, $\\iota$ preserves the linear structure and norm, and every added point is a limit of original points. In particular, each original Cauchy sequence converges in the completion to its own equivalence class."
                }
              </MathText>
            </p>
          </section>
          <RememberSection />

          <LessonNavigation
            contents={{
              href: "/notes/mathematics/functional-analysis",
              title: "Functional Analysis",
            }}
            previous={{
              href: "/notes/mathematics/functional-analysis/normed-linear-spaces",
              title: "Normed linear spaces",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/finite-dimensional-linear-spaces",
              title: "Finite dimensional linear spaces",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#completion">What it means to complete a space</a>
              </li>
              <li>
                <a href="#cauchy-space">The vector space of Cauchy sequences</a>
              </li>
              <li>
                <a href="#null-sequences">Null sequences and the quotient</a>
              </li>
              <li>
                <a href="#limit-norm">Defining the norm by a limit</a>
              </li>
              <li>
                <a href="#norm-axioms">Verifying the norm axioms</a>
              </li>
              <li>
                <a href="#double-indices">
                  Completeness and the two sequence indices
                </a>
              </li>
              <li>
                <a href="#row-bands">Choosing rows and uniform tail bounds</a>
              </li>
              <li>
                <a href="#diagonal">Constructing the candidate limit</a>
              </li>
              <li>
                <a href="#convergence">Proving convergence to the candidate</a>
              </li>
              <li>
                <a href="#embedding">
                  Embedding the original space isometrically
                </a>
              </li>
              <li>
                <a href="#density">
                  The original space is dense in its completion
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
