import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { StrictSeparationSection } from "./strict-separation-section";
import { RememberSection } from "./remember-section";
import { GaugeProofSection } from "./gauge-proof-section";
import { PositiveMajorantSection } from "./positive-majorant-section";
import { PositiveSection } from "./positive-section";
import { TwoSetsSection } from "./two-sets-section";
import { PositiveSublinearSection } from "./positive-sublinear-section";
import { BoundedExtensionSection } from "./bounded-extension-section";
import { HyperplanesSection } from "./hyperplanes-section";
import { WeakPointSection } from "./weak-point-section";
import { TwoSetsProofSection } from "./two-sets-proof-section";

export const metadata = {
  title: "Geometric Hahn–Banach theorems | Functional Analysis | Zura Jashi",
  description:
    "Separate convex sets by hyperplanes, retain bounds when extending functionals, and construct positive extensions on bounded functions.",
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
        <span>Lecture 11</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>11 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>Geometric Hahn–Banach theorems</h1>
        <p className={styles.subjectDescription}>
          Separate convex sets by hyperplanes, retain bounds when extending
          functionals, and construct positive extensions on bounded functions.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 11</span>
          <span>Gauges · Algebraic interior · Separation · Positivity</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=EXnMMb3rgMs">
            Claudio Landim · IMPA lecture 11
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
                  "The analytic extension theorem produces geometric separation once a convex set is encoded by its gauge. The same principle also preserves norm bounds and positivity, provided the dominating sublinear function is chosen carefully."
                }
              </MathText>
            </p>
          </div>
          <HyperplanesSection />
          <StrictSeparationSection />
          <GaugeProofSection />
          <WeakPointSection />
          <TwoSetsSection />
          <TwoSetsProofSection />
          <BoundedExtensionSection />
          <PositiveSection />
          <PositiveMajorantSection />
          <PositiveSublinearSection />
          <section id="positive-finish" className={styles.section}>
            <span className={styles.sectionNumber}>11 / LECTURE 11</span>
            <h2>Extend and prove positivity</h2>
            <p>
              <MathText>
                {
                  "The function $p$ is finite and sublinear, and agrees with $\\ell$ on $Y$. Hahn–Banach therefore supplies a linear extension $L:B(\\Omega)\\to\\mathbb R$ with $L\\leq p$. It remains to prove positivity, since domination itself is only an upper bound."
                }
              </MathText>
            </p>
            <p>
              <MathText>
                {
                  "Take any pointwise nonnegative $f$. Then $-f\\leq0$, so the sign property gives $p(-f)\\leq0$. Apply domination to the negative function:"
                }
              </MathText>
            </p>
            <Equation>{"-L(f)=L(-f)\\leq p(-f)\\leq0."}</Equation>
            <NoteBox kind="result" title="The extension is positive">
              <Equation>
                {"f\\geq0\\quad\\Longrightarrow\\quad L(f)\\geq0."}
              </Equation>
            </NoteBox>
            <p>
              <MathText>
                {
                  "This completes the positive extension theorem. The uniformly positive function ensured finiteness of the majorant; monotonicity ensured agreement with the original functional; and the sign property converted Hahn–Banach domination into positivity."
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
              href: "/notes/mathematics/functional-analysis/convex-sets-and-gauge-functions",
              title: "Convex sets and gauge functions",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/dual-of-a-normed-linear-space",
              title: "Dual of a normed linear space",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#hyperplanes">Hyperplanes and half-spaces</a>
              </li>
              <li>
                <a href="#strict-separation">
                  Separating an algebraically open convex set from a point
                </a>
              </li>
              <li>
                <a href="#gauge-proof">Proof of point separation by a gauge</a>
              </li>
              <li>
                <a href="#weak-point">A convex set with one core point</a>
              </li>
              <li>
                <a href="#two-sets">Separating two disjoint convex sets</a>
              </li>
              <li>
                <a href="#two-sets-proof">Choose a separating level</a>
              </li>
              <li>
                <a href="#bounded-extension">
                  Application to bounded linear functionals
                </a>
              </li>
              <li>
                <a href="#positive">
                  Positive functionals on bounded functions
                </a>
              </li>
              <li>
                <a href="#positive-majorant">
                  Construct the sublinear majorant
                </a>
              </li>
              <li>
                <a href="#positive-sublinear">
                  Verify positive homogeneity and subadditivity
                </a>
              </li>
              <li>
                <a href="#positive-finish">Extend and prove positivity</a>
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
