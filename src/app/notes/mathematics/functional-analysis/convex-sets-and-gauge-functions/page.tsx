import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
import { RememberSection } from "./remember-section";
import { MembershipSection } from "./membership-section";
import { ConverseSection } from "./converse-section";
import { InteriorSection } from "./interior-section";
import { SubadditivitySection } from "./subadditivity-section";
import { HomogeneitySection } from "./homogeneity-section";
import { GaugeSection } from "./gauge-section";

export const metadata = {
  title: "Convex sets and gauge functions | Functional Analysis | Zura Jashi",
  description:
    "Turn a convex set with an algebraic interior point into a sublinear gauge, then recover its interior through a strict unit sublevel.",
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
        <span>Lecture 10</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>10 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>Convex sets and gauge functions</h1>
        <p className={styles.subjectDescription}>
          Turn a convex set with an algebraic interior point into a sublinear
          gauge, then recover its interior through a strict unit sublevel.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 10</span>
          <span>Convexity · Algebraic interior · Infima · Sublinearity</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=jLhKJRmKbUY">
            Claudio Landim · IMPA lecture 10
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
                  "Gauge functions connect the geometry of convex sets with the sublinear bounds required by Hahn–Banach. The construction works in a real vector space without a topology, using directional segments at an algebraic interior point."
                }
              </MathText>
            </p>
          </div>
          <InteriorSection />
          <GaugeSection />
          <section id="admissible" className={styles.section}>
            <span className={styles.sectionNumber}>03 / LECTURE 10</span>
            <h2>Admissible scales form an upper interval</h2>
            <p>
              <MathText>
                {
                  "Fix $v$ and let $A_v=\\{\\lambda>0:a+v/\\lambda\\in K\\}$. Suppose $b\\in A_v$ and $b'>b$. Put $\\theta=b/b'\\in(0,1)$. Since both $a$ and $a+v/b$ belong to $K$, convexity gives"
                }
              </MathText>
            </p>
            <Equation>
              {
                "(1-\\theta)a+\\theta\\left(a+\\frac vb\\right)=a+\\frac{v}{b'}\\in K."
              }
            </Equation>
            <p>
              <MathText>
                {
                  "Therefore $b'\\in A_v$. Once a scale is admissible, every larger scale is admissible too. The set is an upper interval in $(0,\\infty)$, with infimum $p(v)$; its left endpoint may or may not be included. If $p(v)=0$, the interval is all of $(0,\\infty)$."
                }
              </MathText>
            </p>
            <p>
              <MathText>
                {
                  "In particular, every $\\lambda>p(v)$ is admissible. To see this, choose an admissible $b<\\lambda$ using the definition of the infimum, then use the upper-interval property. At $\\lambda=p(v)$, admissibility cannot be inferred without further information."
                }
              </MathText>
            </p>
          </section>
          <SubadditivitySection />
          <HomogeneitySection />
          <MembershipSection />
          <ConverseSection />
          <section id="examples" className={styles.section}>
            <span className={styles.sectionNumber}>08 / LECTURE 10</span>
            <h2>What a gauge need not satisfy</h2>
            <p>
              <MathText>
                {
                  "On $\\mathbb R$, take $K=(-1,2)$ and $a=0$. Computing the admissible scales gives"
                }
              </MathText>
            </p>
            <Equation>
              {"p(v)=\\begin{cases}v/2,&v\\geq0,\\\\-v,&v<0.\\end{cases}"}
            </Equation>
            <p>
              <MathText>
                {
                  "The gauge is sublinear but asymmetric: $p(1)=1/2$ and $p(-1)=1$. It cannot be a norm. Its strict unit sublevel is exactly $(-1,2)$, matching the algebraic interior characterization."
                }
              </MathText>
            </p>
            <p>
              <MathText>
                {
                  "For an unbounded example, take $K=(-1,\\infty)$ and again $a=0$. Every positive scale is admissible when $v\\geq0$, so $p(v)=0$ on that ray. A nonzero vector can therefore have gauge zero. Neither positive homogeneity nor subadditivity alone supplies norm definiteness."
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
              href: "/notes/mathematics/functional-analysis/hahn-banach-theorem",
              title: "The Hahn–Banach theorem",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/geometric-hahn-banach-theorems",
              title: "Geometric Hahn–Banach theorems",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#interior">Algebraic interior points</a>
              </li>
              <li>
                <a href="#gauge">The gauge based at an interior point</a>
              </li>
              <li>
                <a href="#admissible">
                  Admissible scales form an upper interval
                </a>
              </li>
              <li>
                <a href="#subadditivity">Subadditivity of the gauge</a>
              </li>
              <li>
                <a href="#homogeneity">Positive homogeneity of the gauge</a>
              </li>
              <li>
                <a href="#membership">Membership and the gauge threshold</a>
              </li>
              <li>
                <a href="#converse">Convex sets from sublinear functions</a>
              </li>
              <li>
                <a href="#examples">What a gauge need not satisfy</a>
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
