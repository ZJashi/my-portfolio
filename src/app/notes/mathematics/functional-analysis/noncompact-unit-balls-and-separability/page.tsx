import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { RememberSection } from "./remember-section";
import { VariationSection } from "./variation-section";
import { SeparatedSequenceSection } from "./separated-sequence-section";
import { RieszSection } from "./riesz-section";
import { ApproximationSection } from "./approximation-section";
import { ClosedSpansSection } from "./closed-spans-section";
import { NonseparableSection } from "./nonseparable-section";
import { NoncompactnessSection } from "./noncompactness-section";
import { DiracSection } from "./dirac-section";
import { UnitBallSection } from "./unit-ball-section";

export const metadata = {
  title:
    "Noncompact Unit Balls and Separability | Functional Analysis | Zura Jashi",
  description:
    "Lecture 7: Riesz’s lemma, closed finite dimensional subspaces, separated unit vectors, noncompactness of infinite dimensional unit balls, and nonseparability in total variation.",
};

export default function NoncompactUnitBallLesson() {
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
        <span>Lecture 7</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>07 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>
          Noncompact unit balls and separability
        </h1>
        <p className={styles.subjectDescription}>
          Use Riesz’s lemma to separate unit vectors in infinite dimensions,
          then use Dirac measures to show how separability can fail.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 7</span>
          <span>Finite spans · Compactness · Dense sets · Signed measures</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=Wmi4woYpmL0">
            Claudio Landim · IMPA lecture 7
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
                  "Infinite dimensional normed spaces contain bounded sequences with no convergent subsequence. The proof builds unit vectors separated from all previous finite spans. A related separation argument shows that the space of finite signed measures, with its total variation norm, is not separable."
                }
              </MathText>
            </p>
          </div>
          <UnitBallSection />
          <RieszSection />
          <ApproximationSection />
          <ClosedSpansSection />
          <SeparatedSequenceSection />
          <NoncompactnessSection />
          <section id="separability" className={styles.section}>
            <span className={styles.sectionNumber}>07 / LECTURE 7</span>
            <h2>Separable normed spaces</h2>
            <NoteBox kind="definition" title="Separable space">
              <p>
                <MathText>
                  {
                    "A normed linear space is separable if it contains a countable dense subset $D$. Density means that every vector can be approximated arbitrarily closely by elements of $D$."
                  }
                </MathText>
              </p>
              <Equation>
                {
                  "\\forall x\\in X\\ \\forall\\varepsilon>0\\ \\exists d\\in D:\\quad\\|x-d\\|<\\varepsilon."
                }
              </Equation>
            </NoteBox>
            <p>
              <MathText>
                {
                  "Separability concerns how many points are needed to approximate the space. It is different from finite dimension, and it is not implied merely by choosing a real or complex scalar field. The following measure-space example shows how an uncountable family of uniformly separated points rules it out."
                }
              </MathText>
            </p>
          </section>
          <VariationSection />
          <DiracSection />
          <NonseparableSection />
          <RememberSection />

          <LessonNavigation
            contents={{
              href: "/notes/mathematics/functional-analysis",
              title: "Functional Analysis",
            }}
            previous={{
              href: "/notes/mathematics/functional-analysis/examples-of-normed-linear-spaces",
              title: "Examples of normed linear spaces",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/zorns-lemma",
              title: "Zorn’s lemma",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#unit-ball">
                  The closed unit ball in infinite dimensions
                </a>
              </li>
              <li>
                <a href="#riesz">Riesz’s lemma</a>
              </li>
              <li>
                <a href="#approximation">The proof without a nearest point</a>
              </li>
              <li>
                <a href="#closed-spans">
                  Finite dimensional subspaces are closed
                </a>
              </li>
              <li>
                <a href="#separated-sequence">
                  Constructing separated unit vectors
                </a>
              </li>
              <li>
                <a href="#noncompactness">Why no subsequence can converge</a>
              </li>
              <li>
                <a href="#separability">Separable normed spaces</a>
              </li>
              <li>
                <a href="#variation">
                  Finite signed measures and total variation
                </a>
              </li>
              <li>
                <a href="#dirac">An uncountable separated family of measures</a>
              </li>
              <li>
                <a href="#nonseparable">
                  Why the signed measure space is not separable
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
