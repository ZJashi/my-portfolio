import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
import { course, sections } from "./lesson-data";
import { PricingSection } from "./pricing-section";
import { ReplicationSection } from "./replication-section";
import { SvdSection } from "./svd-section";
import { MarkovSection } from "./markov-section";
import { EigenvaluesSection } from "./eigenvalues-section";
import { VectorsSection } from "./vectors-section";

export const metadata = {
  title: "Linear Algebra | MIT 18.642 Lecture 2 | Zura Jashi",
  description:
    "Portfolio vectors, payoff matrices, replication, state prices, eigenvalues, Markov chains and SVD, with worked examples.",
};

export default function LinearAlgebraLesson() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/finance">Finance</Link>
        <span>/</span>
        <Link href="/notes/finance/mathematics-in-finance">
          Mathematics in Finance
        </Link>
        <span>/</span>
        <span>Lecture 2</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>02 / MIT 18.642</p>
        <h1 className={styles.subjectTitle}>Linear algebra</h1>
        <p className={styles.subjectDescription}>
          Represent a portfolio as a vector and a market as a matrix. Then use
          linear equations to replicate payments and eigenvectors to understand
          repeated changes.
        </p>
        <div className={styles.readingMeta}>
          <span>Peter Kempthorne · Lecture 2</span>
          <span>Vectors · Matrices · Finite state models</span>
        </div>
      </header>
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          <div className={styles.lessonOverview}>
            <p>
              MIT’s <a href={`${course}pages/week-2/`}>Lecture 2 materials</a>{" "}
              connect vector and matrix operations to quantitative finance.
              These notes develop the main topics through original numerical
              examples, with the accompanying one period model reading used for
              pricing and completeness.
            </p>
          </div>
          <VectorsSection />
          <section id="geometry" className={styles.section}>
            <span className={styles.sectionNumber}>02 / LINEAR OPERATIONS</span>
            <h2>Geometry and matrix algebra</h2>
            <p>
              <MathText>
                {
                  "For real vectors, $u^Tv=\\sum_i u_iv_i$, $\\|v\\|_2=\\sqrt{v^Tv}$ and $u^Tv=\\|u\\|_2\\|v\\|_2\\cos\\theta$. Nonzero vectors are orthogonal when their dot product vanishes. A basis is an independent spanning collection; independence means $\\sum_j c_jv_j=0$ forces every $c_j=0$."
                }
              </MathText>
            </p>
            <p>
              <MathText>
                {
                  "An $m\\times n$ matrix maps $n$ inputs to $m$ outputs. Its product with a vector is a weighted sum of its columns. If $B$ is $n\\times k$, $AB$ is $m\\times k$."
                }
              </MathText>
            </p>
            <Equation>
              {
                "Ah=\\sum_{j=1}^n h_j a_j,\\qquad (AB)_{ij}=\\sum_{\\ell=1}^n A_{i\\ell}B_{\\ell j},\\qquad (AB)^T=B^TA^T."
              }
            </Equation>
            <p>
              <MathText>
                {
                  "The identity satisfies $Iv=v$; a diagonal matrix scales coordinates separately. A symmetric matrix satisfies $A^T=A$. Matrix multiplication preserves order: $AB$ generally differs from $BA$."
                }
              </MathText>
            </p>
            <p>
              <strong>Original geometric example.</strong>
              <MathText>
                {
                  " The vectors $(1,1)^T$ and $(1,-1)^T$ are orthogonal and form a basis of $\\mathbb R^2$. The vector $(3,1)^T$ is $2(1,1)^T+(1,-1)^T$. Coordinates depend on the chosen basis even though the vector stays the same."
                }
              </MathText>
            </p>
          </section>
          <ReplicationSection />
          <PricingSection />
          <EigenvaluesSection />
          <MarkovSection />
          <SvdSection />
          <section id="practice" className={styles.section}>
            <span className={styles.sectionNumber}>
              08 / CHECK YOUR UNDERSTANDING
            </span>
            <h2>Practice</h2>
            <p>Original exercises, separate from MIT’s problem set.</p>
            <ol>
              <li>
                In the two state example, replicate a put with strike £100.
                Verify its price using state prices.
              </li>
              <li>
                With three states and two independent asset payoff columns, is
                the market complete?
              </li>
              <li>
                For the two regime chain, find the probability vector after two
                transitions from the first regime.
              </li>
            </ol>
            <details>
              <summary>Compare your answers</summary>
              <p>
                <MathText>
                  {
                    "1. The payoff is $(0,20)^T$. Subtraction gives $h_S=-1/2$ and $h_B=60/1.05$. Its price is $60/1.05-50=50/7\\approx\\pounds7.14$, also $20\\psi_d$."
                  }
                </MathText>
              </p>
              <p>
                2. No. Rank is 2, below the three state dimension. Some claims
                may still be replicated.
              </p>
              <p>
                <MathText>{"3. $P(0.9,0.1)^T=(0.83,0.17)^T$."}</MathText>
              </p>
            </details>
          </section>
          <div className={styles.lessonSources}>
            <p>
              Sources:{" "}
              <a href={`${course}resources/18642-lecture-2-version-2_mp4/`}>
                Lecture 2 video
              </a>
              ,{" "}
              <a href={`${course}mit18_642_f24_lec02_1.pdf`}>
                Linear Algebra slides
              </a>{" "}
              and{" "}
              <a href={`${course}mit18_642_f24_lec02_2.pdf`}>
                One Period Financial Models reading
              </a>
              . Independent exposition with original examples. The slides’
              matrix norm statement is qualified here: the general Euclidean
              norm is the largest singular value. The longer reading supports
              the pricing discussion; these notes do not imply that every
              reading result was proved in the video.
            </p>
          </div>
          <nav className={styles.lessonEnd} aria-label="Lesson navigation">
            <Link href="/notes/finance/mathematics-in-finance/markets-and-bond-math">
              Previous: Markets and bond mathematics
            </Link>
            <Link href="/notes/finance/mathematics-in-finance">
              Course contents
            </Link>
            <Link href="/notes/finance/mathematics-in-finance/probability-theory">
              Next available: Probability theory · Lecture 4
            </Link>
          </nav>
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              {sections.map(([id, title]) => (
                <li key={id}>
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      </div>
    </div>
  );
}
