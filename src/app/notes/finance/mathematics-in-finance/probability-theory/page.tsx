import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { course, contents } from "./lesson-data";
import { NormalSection } from "./normal-section";
import { PayoffsSection } from "./payoffs-section";
import { CovarianceSection } from "./covariance-section";
import { MomentsSection } from "./moments-section";
import { ReadingSection } from "./reading-section";
import { PcaSection } from "./pca-section";
import { PracticeSection } from "./practice-section";

export const metadata = {
  title: "Probability Theory | MIT 18.642 Lecture 4 | Zura Jashi",
  description:
    "Distributions, moments, normal and lognormal models, covariance, portfolio risk and PCA, with original examples and a companion reading guide.",
};

export default function ProbabilityLesson() {
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
        <span>Lecture 4</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>04 / MIT 18.642</p>
        <h1 className={styles.subjectTitle}>Probability theory</h1>
        <p className={styles.subjectDescription}>
          Describe uncertain outcomes, measure how they vary together, and
          connect covariance matrices to portfolio risk and principal
          components.
        </p>
        <div className={styles.readingMeta}>
          <span>Peter Kempthorne · Lecture 4</span>
          <span>Linear algebra review · Probability foundations</span>
        </div>
      </header>
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          <div className={styles.lessonOverview}>
            <p>
              The{" "}
              <a href={`${course}resources/18642-lecture-4-version-2_mp4/`}>
                Lecture 4 recording
              </a>{" "}
              continues linear algebra before introducing probability, moments,
              covariance and PCA. These study notes pair that transition with
              original calculations. The final reading guide previews additional
              topics in the posted slides, some of which continue into Lecture
              5.
            </p>
            <p>
              <strong>Course numbering:</strong> Lecture 3 is Jeff Shen’s
              quantitative equity investing guest lecture. MIT does not provide
              its recording to OCW learners, so the next available recording is
              Lecture 4.
            </p>
          </div>
          <section id="bridge" className={styles.section}>
            <span className={styles.sectionNumber}>
              01 / LINEAR ALGEBRA CONTINUED
            </span>
            <h2>From matrices to uncertainty</h2>
            <p>
              <MathText>
                {
                  "Recall the distinction between eigenvalues and singular values. For a square diagonalizable matrix, $A=S\\Lambda S^{-1}$ describes repeated applications. For a real symmetric matrix, an orthonormal eigenbasis gives $A=Q\\Lambda Q^T$. For a rectangular matrix, $A=U\\Sigma V^T$ describes rotations and stretching."
                }
              </MathText>
            </p>
            <p>
              <MathText>
                {
                  "A covariance matrix is symmetric and positive semidefinite. That puts it in the especially useful case where real eigenvalues and perpendicular eigenvectors separate different directions of variability. We will derive this property from the variance of a weighted sum."
                }
              </MathText>
            </p>
          </section>
          <section id="distributions" className={styles.section}>
            <span className={styles.sectionNumber}>
              02 / OUTCOMES AND PROBABILITIES
            </span>
            <h2>Distributions</h2>
            <NoteBox title="A distribution assigns probabilities to outcomes">
              <p>
                <MathText>
                  {
                    "A random variable $X$ maps outcomes to numbers. Its cumulative distribution function is $F_X(x)=\\Pr(X\\le x)$. Discrete variables use probability masses; absolutely continuous variables use a density integrated over intervals."
                  }
                </MathText>
              </p>
              <Equation>
                {
                  "\\Pr(X=x)=p_X(x),\\quad\\sum_x p_X(x)=1;\\qquad\\Pr(a<X\\le b)=\\int_a^b f_X(x)\\,dx."
                }
              </Equation>
            </NoteBox>
            <h3>Original discrete example</h3>
            <p>
              A one period return is −10%, 0%, or 20%, with respective
              probabilities 0.2, 0.5, and 0.3. Use decimal returns in
              calculations. Its CDF is a step function; at zero it includes both
              the loss and zero return outcomes.
            </p>
            <Equation>
              {
                "F_R(x)=\\begin{cases}0&x<-0.1,\\\\0.2&-0.1\\le x<0,\\\\0.7&0\\le x<0.2,\\\\1&x\\ge0.2.\\end{cases}"
              }
            </Equation>
            <p>
              <strong>Mixed distributions.</strong> A model may put a positive
              mass at bankruptcy value zero while assigning a continuous density
              to surviving values. An ordinary density alone cannot represent
              that atom. For an absolutely continuous variable, the probability
              of any exact single value is zero even where its density is high.
            </p>
          </section>
          <MomentsSection />
          <NormalSection />
          <PayoffsSection />
          <CovarianceSection />
          <PcaSection />
          <ReadingSection />
          <PracticeSection />
          <div className={styles.lessonSources}>
            <p>
              Course sources:{" "}
              <a href={`${course}pages/week-3/`}>Week 3 materials</a>,{" "}
              <a href={`${course}mit18_642_f24_lec04_1.pdf`}>
                Probability Theory slides
              </a>
              , and{" "}
              <a href={`${course}mit18_642_f24_lec04_2.pdf`}>
                Probability Theory Applications slides
              </a>
              . Independent explanations, derivations, examples and exercises.
              Qualifications used here include finite moment conditions, zero
              skewness versus symmetry, absolute Jacobians, and the distinction
              between expected payoffs and prices. PCA and the companion reading
              continue toward Lecture 5.
            </p>
          </div>
          <nav className={styles.lessonEnd} aria-label="Lesson navigation">
            <Link href="/notes/finance/mathematics-in-finance/linear-algebra">
              Previous available: Linear algebra
            </Link>
            <Link href="/notes/finance/mathematics-in-finance">
              Course contents
            </Link>
            <Link href="/notes/finance/mathematics-in-finance/stochastic-processes-i">
              Next: Probability and stochastic processes
            </Link>
          </nav>
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              {contents.map(([id, title]) => (
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
