import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { NormalizationSection } from "./normalization-section";
import { RememberSection } from "./remember-section";
import { NormUniquenessSection } from "./norm-uniqueness-section";
import { SignsSection } from "./signs-section";
import { CorrespondenceSection } from "./correspondence-section";
import { SettingSection } from "./setting-section";
import { VariationSection } from "./variation-section";
import { DensityExampleSection } from "./density-example-section";
import { StepFunctionsSection } from "./step-functions-section";

export const metadata = {
  title: "The dual space of C([a,b]) | Functional Analysis | Zura Jashi",
  description:
    "Signed measures, total variation, bounded variation, and the interval proof of the Riesz representation theorem.",
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
        <span>Lecture 14A</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>14A / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>The dual space of C([a,b])</h1>
        <p className={styles.subjectDescription}>
          Signed measures, total variation, bounded variation, and the interval
          proof of the Riesz representation theorem.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 14A</span>
          <span>Hahn–Banach / Measure theory</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=N9qxmcjj21s">
            Claudio Landim · IMPA lecture 14A
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
                  "Every bounded linear functional on $C([a,b])$ is integration against a unique finite signed measure. The interval proof builds cumulative BV data from an extension to bounded functions, then recovers the functional through step approximations."
                }
              </MathText>
            </p>
          </div>
          <SettingSection />
          <section id="riesz" className={styles.section}>
            <span className={styles.sectionNumber}>02 / LECTURE 14A</span>
            <h2>The representation theorem</h2>
            <NoteBox
              kind="result"
              title="Riesz representation for continuous functions"
            >
              <p>
                <MathText>
                  {
                    "For compact metric $K$, every $\\ell\\in C(K)'$ has a unique finite signed Borel measure $\\nu$ such that"
                  }
                </MathText>
              </p>
              <Equation>
                {
                  "\\ell(f)=\\int_K f\\,d\\nu\\quad(f\\in C(K)),\\qquad \\|\\ell\\|=\\|\\nu\\|_{\\mathrm{TV}}."
                }
              </Equation>
            </NoteBox>
            <p>
              <MathText>
                {
                  "Conversely, integration against any such measure is a bounded linear functional. Thus $C(K)'$ and $M(K)$ are isometrically identified. On compact metric spaces finite Borel measures are regular, which makes continuous functions sufficient to determine them. The general theorem is stated as measure-theory background; the remainder develops the interval case $K=[a,b]$, with $a<b$, by Hahn–Banach and Stieltjes integration."
                }
              </MathText>
            </p>
          </section>
          <VariationSection />
          <CorrespondenceSection />
          <section id="extension" className={styles.section}>
            <span className={styles.sectionNumber}>05 / LECTURE 14A</span>
            <h2>Extend the functional to bounded functions</h2>
            <p>
              <MathText>
                {
                  "Fix $\\ell\\in C([a,b])'$ and set $C=\\|\\ell\\|$. Let $B([a,b])$ be the space of all bounded real functions, with supremum norm. Since $C([a,b])$ is a linear subspace, Hahn–Banach gives an extension $\\Lambda:B([a,b])\\to\\mathbb R$ with $\\|\\Lambda\\|=C$. Indicators now belong to the domain. Define the preliminary cumulative function"
                }
              </MathText>
            </p>
            <Equation>{"r(t)=\\Lambda(\\mathbf1_{[a,t]})."}</Equation>
            <p>
              <MathText>
                {
                  "Then $r(t)-r(s)=\\Lambda(\\mathbf1_{(s,t]})$. This is the motivation for the construction: if $\\ell$ were already integration against a measure, these quantities would be its interval masses. However, an arbitrary Hahn–Banach extension is not automatically countably additive on indicators; its preliminary $r$ need not yet be right-continuous. We first obtain BV control, then choose the normalized Stieltjes representative."
                }
              </MathText>
            </p>
          </section>
          <SignsSection />
          <StepFunctionsSection />
          <NormalizationSection />
          <NormUniquenessSection />
          <DensityExampleSection />
          <RememberSection />

          <LessonNavigation
            contents={{
              href: "/notes/mathematics/functional-analysis",
              title: "Functional Analysis",
            }}
            previous={{
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
                <a href="#setting">Continuous functions and signed measures</a>
              </li>
              <li>
                <a href="#riesz">The representation theorem</a>
              </li>
              <li>
                <a href="#variation">
                  Functions of bounded variation and the endpoint mass
                </a>
              </li>
              <li>
                <a href="#correspondence">
                  Cumulative functions and Stieltjes measures
                </a>
              </li>
              <li>
                <a href="#extension">
                  Extend the functional to bounded functions
                </a>
              </li>
              <li>
                <a href="#signs">The sign-function estimate</a>
              </li>
              <li>
                <a href="#step-functions">
                  Approximate continuous functions by step functions
                </a>
              </li>
              <li>
                <a href="#normalization">
                  Choose the right-continuous representative
                </a>
              </li>
              <li>
                <a href="#norm-uniqueness">
                  Equality of norms, uniqueness and the converse
                </a>
              </li>
              <li>
                <a href="#density-example">Example: an integrable density</a>
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
