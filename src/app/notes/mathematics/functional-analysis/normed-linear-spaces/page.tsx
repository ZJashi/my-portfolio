import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
import { RememberSection } from "./remember-section";
import { ProductExercisesSection } from "./product-exercises-section";
import { QuotientTriangleSection } from "./quotient-triangle-section";
import { QuotientNormSection } from "./quotient-norm-section";
import { ClosureSection } from "./closure-section";
import { BanachSection } from "./banach-section";
import { EquivalentSection } from "./equivalent-section";
import { ReverseTriangleSection } from "./reverse-triangle-section";
import { NormSection } from "./norm-section";
import { MetricSection } from "./metric-section";
import { SubspacesSection } from "./subspaces-section";
import { QuotientHomogeneitySection } from "./quotient-homogeneity-section";

export const metadata = {
  title: "Normed Linear Spaces | Functional Analysis | Zura Jashi",
  description:
    "Lecture 3: norms, induced metrics, equivalent norms, products, closures, quotient norms and Banach spaces, with proofs and solved exercises.",
};

export default function NormedSpacesLesson() {
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
        <span>Lecture 3</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>03 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>Normed linear spaces</h1>
        <p className={styles.subjectDescription}>
          Give vectors a size, turn size into distance, and construct norms on
          subspaces, products and quotients. Finish with completeness and Banach
          spaces.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 3</span>
          <span>Linear spaces · Quotients · Infima · Sequences</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=9p5hp53yh6w">
            Claudio Landim · IMPA lecture 3
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
                  "A norm links the algebra of a vector space to the analysis of limits. It induces a metric and a topology, allows different notions of size to be compared, and makes it possible to ask whether every Cauchy sequence converges within the space. The main construction here is the norm on a quotient by a closed subspace."
                }
              </MathText>
            </p>
          </div>
          <NormSection />
          <ReverseTriangleSection />
          <MetricSection />
          <section id="topology" className={styles.section}>
            <span className={styles.sectionNumber}>04 / LECTURE 3</span>
            <h2>Convergence and the induced topology</h2>
            <p>
              <MathText>
                {
                  "The induced metric gives a meaning to convergence. A sequence $(x_n)$ converges to $x$ precisely when its distance from $x$ tends to zero:"
                }
              </MathText>
            </p>
            <Equation>
              {
                "x_n\\longrightarrow x\\quad\\Longleftrightarrow\\quad\\|x_n-x\\|\\longrightarrow0."
              }
            </Equation>
            <p>
              <MathText>
                {
                  "It also supplies the topology in which we discuss open sets, closed sets and compact sets. For example, an open ball with centre $x$ and radius $r>0$ is"
                }
              </MathText>
            </p>
            <Equation>{"B(x,r)=\\{u\\in X:\\|u-x\\|<r\\}."}</Equation>
            <p>
              <MathText>
                {
                  "A set is open if each of its points has an open ball contained in the set. In this metric topology, a set is closed if it contains every limit in $X$ of a convergent sequence of its points. This sequential description will be crucial for the quotient norm."
                }
              </MathText>
            </p>
          </section>
          <EquivalentSection />
          <SubspacesSection />
          <ProductExercisesSection />
          <ClosureSection />
          <QuotientNormSection />
          <QuotientHomogeneitySection />
          <QuotientTriangleSection />
          <BanachSection />
          <RememberSection />

          <LessonNavigation
            contents={{
              href: "/notes/mathematics/functional-analysis",
              title: "Functional Analysis",
            }}
            previous={{
              href: "/notes/mathematics/functional-analysis/quotient-spaces-and-convex-sets",
              title: "Quotient spaces and convex sets",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/completing-a-normed-linear-space",
              title: "Completing a normed linear space",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#norm">Norms on linear spaces</a>
              </li>
              <li>
                <a href="#reverse-triangle">
                  Symmetry and the reverse triangle inequality
                </a>
              </li>
              <li>
                <a href="#metric">The metric induced by a norm</a>
              </li>
              <li>
                <a href="#topology">Convergence and the induced topology</a>
              </li>
              <li>
                <a href="#equivalent">Equivalent norms</a>
              </li>
              <li>
                <a href="#subspaces">Subspaces and product spaces</a>
              </li>
              <li>
                <a href="#product-exercises">Exercises on the product norms</a>
              </li>
              <li>
                <a href="#closure">The closure of a linear subspace</a>
              </li>
              <li>
                <a href="#quotient-norm">
                  A norm on a quotient by a closed subspace
                </a>
              </li>
              <li>
                <a href="#quotient-homogeneity">
                  Absolute homogeneity of the quotient norm
                </a>
              </li>
              <li>
                <a href="#quotient-triangle">
                  The quotient triangle inequality
                </a>
              </li>
              <li>
                <a href="#banach">
                  Cauchy sequences, completeness and Banach spaces
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
