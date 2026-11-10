import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { course, sections } from "./lesson-data";
import { UtilitySection } from "./utility-section";
import { StoppingSection } from "./stopping-section";
import { ExamplesSection } from "./examples-section";
import { PracticeSection } from "./practice-section";
import { LimitsSection } from "./limits-section";
import { PcaSection } from "./pca-section";

export const metadata = {
  title:
    "Probability and Stochastic Processes I | MIT 18.642 Lecture 5 | Zura Jashi",
  description:
    "PCA, probability limits, utility pricing and martingale foundations with derivations, original examples and a stopping time reading guide.",
};

export default function StochasticProcessesLesson() {
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
        <span>Lecture 5</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>05 / MIT 18.642</p>
        <h1 className={styles.subjectTitle}>
          Probability and stochastic processes
        </h1>
        <p className={styles.subjectDescription}>
          Finish the transition from covariance to principal components, connect
          risk to utility, and describe a fair process using the information
          available at each step.
        </p>
        <div className={styles.readingMeta}>
          <span>Peter Kempthorne · Lecture 5</span>
          <span>Probability continued · Stochastic Processes I</span>
        </div>
      </header>
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          <div className={styles.lessonOverview}>
            <p>
              <a href={`${course}pages/week-3/`}>MIT’s Lecture 5 overview</a>{" "}
              spans PCA, probability limits, utility optimisation and the
              introduction of martingales. These notes develop that sequence
              with original calculations. Later stopping time and Markov chain
              topics in the Stochastic Processes I slides form a companion
              reading guide here; the course continues stochastic processes in
              Lecture 6.
            </p>
          </div>
          <PcaSection />
          <LimitsSection />
          <UtilitySection />
          <section id="information" className={styles.section}>
            <span className={styles.sectionNumber}>
              04 / STOCHASTIC PROCESSES BEGIN
            </span>
            <h2>Information and martingales</h2>
            <p>
              <MathText>
                {
                  "A stochastic process is a family of random variables indexed by time. In discrete time, $\\mathcal F_n$ records what is known by step n, and $\\mathcal F_n\\subseteq\\mathcal F_{n+1}$. This increasing family is a filtration. A process is adapted when its value at n is measurable using $\\mathcal F_n$."
                }
              </MathText>
            </p>
            <NoteBox title="Martingale with respect to a filtration">
              <p>
                <MathText>
                  {
                    "An adapted process $M_n$ is a martingale when $\\mathbb E|M_n|<\\infty$ at every finite n and its conditional next value equals its current value:"
                  }
                </MathText>
              </p>
              <Equation>
                {"\\mathbb E[M_{n+1}\\mid\\mathcal F_n]=M_n."}
              </Equation>
            </NoteBox>
            <p>
              <MathText>
                {
                  "Conditional expectation averages the next outcome given all currently available information. Its conditioning cannot be replaced by an unconditional average. The tower property gives $\\mathbb E[M_n]=\\mathbb E[M_0]$, but constant expectations alone do not establish a martingale."
                }
              </MathText>
            </p>
            <h3>Original counterexample</h3>
            <p>
              <MathText>
                {
                  "Let X be equally likely to be $+1$ or $-1$, let $M_0=0$, $M_1=X$ and $M_2=-X$. All means are zero. Once $\\mathcal F_1$ reveals X, however, $\\mathbb E[M_2\\mid\\mathcal F_1]=-X\\ne M_1$. The reversal is predictable."
                }
              </MathText>
            </p>
            <p>
              Both the probability measure and the information set matter. In
              asset pricing, suitably discounted prices can be martingales under
              a pricing measure; this is distinct from asserting that real world
              expected stock gains are zero.
            </p>
          </section>
          <ExamplesSection />
          <section id="strategies" className={styles.section}>
            <span className={styles.sectionNumber}>
              06 / CHOOSING BEFORE THE NEXT STEP
            </span>
            <h2>Strategies without foresight</h2>
            <p>
              <MathText>
                {
                  "Let $H_k$ be the position selected using $\\mathcal F_{k-1}$, before the kth increment is observed. Such a strategy is predictable. For bounded positions at each finite step, a martingale M produces another martingale through accumulated gains:"
                }
              </MathText>
            </p>
            <Equation>
              {
                "G_n=\\sum_{k=1}^nH_k(M_k-M_{k-1}),\\qquad\\mathbb E[H_k\\Delta M_k\\mid\\mathcal F_{k-1}]=H_k\\mathbb E[\\Delta M_k\\mid\\mathcal F_{k-1}]=0."
              }
            </Equation>
            <p>
              The proof uses the timing of the choice as well as integrability.
              Depending on observed history is allowed; depending on the next
              outcome is not.
            </p>
            <p>
              <strong>Original contrast.</strong>
              <MathText>
                {
                  " With symmetric unit steps, choose $H_1=1$ and $H_2=2$ after a first step loss, otherwise $H_2=1$. The four two step gains are $2,0,1,-3$, equally likely, so expected gain is zero. Choosing $H_k=X_k$ instead would produce $H_kX_k=1$ each time, but it uses the very step that has not yet happened."
                }
              </MathText>
            </p>
          </section>
          <StoppingSection />
          <PracticeSection />
          <div className={styles.lessonSources}>
            <p>
              Sources:{" "}
              <a href={`${course}resources/18642-lecture-5-version-2_mp4/`}>
                Lecture 5 recording page
              </a>
              ,{" "}
              <a href={`${course}mit18_642_f24_lec04_1.pdf`}>
                Probability Theory slides
              </a>
              ,{" "}
              <a href={`${course}mit18_642_f24_lec04_2.pdf`}>
                Probability Theory Applications slides
              </a>
              , and{" "}
              <a href={`${course}mit18_642_f24_lec05.pdf`}>
                Stochastic Processes I slides
              </a>
              . Independent study notes with original numerical examples and
              derivations. Stopping and Markov topics are labelled as companion
              material; Stochastic Processes I continues in Lecture 6.
            </p>
          </div>
          <nav className={styles.lessonEnd} aria-label="Lesson navigation">
            <Link href="/notes/finance/mathematics-in-finance/probability-theory">
              Previous: Probability theory
            </Link>
            <Link href="/notes/finance/mathematics-in-finance">
              Course contents
            </Link>
            <Link href="/notes/finance/mathematics-in-finance/stopping-times-and-regression">
              Next: Stopping times and regression
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
