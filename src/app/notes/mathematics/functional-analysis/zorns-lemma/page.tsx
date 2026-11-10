import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { BoundsSection } from "./bounds-section";
import { RememberSection } from "./remember-section";
import { PartialOrderSection } from "./partial-order-section";
import { MaximalSpansSection } from "./maximal-spans-section";
import { AlgebraicBasisSection } from "./algebraic-basis-section";
import { ZornSection } from "./zorn-section";
import { ChainUnionSection } from "./chain-union-section";

export const metadata = {
  title: "Zorn’s lemma | Functional Analysis | Zura Jashi",
  description:
    "Order partial constructions, take unions of chains, and prove that every vector space has an algebraic basis.",
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
        <span>Lecture 8</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>08 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>Zorn’s lemma</h1>
        <p className={styles.subjectDescription}>
          Order partial constructions, take unions of chains, and prove that
          every vector space has an algebraic basis.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 8</span>
          <span>Partial orders · Chains · Linear independence</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=zRcQnXvJGGY">
            Claudio Landim · IMPA lecture 8
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
                  "Zorn’s lemma turns the ability to bound every chain into the existence of a maximal object. The application to algebraic bases develops the precise pattern needed for the Hahn–Banach extension theorem."
                }
              </MathText>
            </p>
          </div>
          <PartialOrderSection />
          <section id="chains" className={styles.section}>
            <span className={styles.sectionNumber}>02 / LECTURE 8</span>
            <h2>Total orders and chains</h2>
            <NoteBox kind="definition" title="Total order and chain">
              <p>
                <MathText>
                  {
                    "A partial order is total if every pair is comparable: $x\\preceq y$ or $y\\preceq x$. A subset of a partially ordered set is a chain when the restricted order is total."
                  }
                </MathText>
              </p>
            </NoteBox>
            <p>
              <MathText>
                {
                  "The whole set need not be totally ordered for some of its subsets to be chains. Under inclusion, a nested collection of subsets is a chain."
                }
              </MathText>
            </p>
            <h3>Example — Coordinatewise order in the plane</h3>
            <Equation>
              {
                "(x_1,x_2)\\preceq(y_1,y_2)\\quad\\Longleftrightarrow\\quad x_1\\leq y_1\\text{ and }x_2\\leq y_2."
              }
            </Equation>
            <p>
              <MathText>
                {
                  "The three partial-order axioms follow coordinate by coordinate. However, $(1,0)$ and $(0,1)$ are incomparable. The points on an increasing line, such as $\\{(t,t):t\\in\\mathbb R\\}$, form a chain. More generally, a path along which both coordinates are nondecreasing gives pairwise comparable points. An arbitrary line or path need not be a chain."
                }
              </MathText>
            </p>
          </section>
          <BoundsSection />
          <ZornSection />
          <AlgebraicBasisSection />
          <section id="independent-poset" className={styles.section}>
            <span className={styles.sectionNumber}>06 / LECTURE 8</span>
            <h2>Order the independent subsets by inclusion</h2>
            <Equation>
              {
                "\\mathcal I=\\{A\\subseteq X:\\text{every finite subset of }A\\text{ is linearly independent}\\}."
              }
            </Equation>
            <p>
              <MathText>
                {
                  "The elements of $\\mathcal I$ are subsets of vectors, rather than vectors themselves. Order them by inclusion. This is a partial order because inclusion is reflexive, antisymmetric and transitive."
                }
              </MathText>
            </p>
            <p>
              <MathText>
                {
                  "The set $\\mathcal I$ is nonempty: it contains the empty set, which is independent. This also handles the zero vector space, whose basis is empty. If $X$ contains a nonzero vector $x$, the singleton $\\{x\\}$ is another element of $\\mathcal I$."
                }
              </MathText>
            </p>
            <p>
              <MathText>
                {
                  "Working with subsets avoids counting different indexings of the same vectors as distinct ordered objects. In particular, antisymmetry remains literal equality of sets."
                }
              </MathText>
            </p>
          </section>
          <ChainUnionSection />
          <MaximalSpansSection />
          <RememberSection />

          <LessonNavigation
            contents={{
              href: "/notes/mathematics/functional-analysis",
              title: "Functional Analysis",
            }}
            previous={{
              href: "/notes/mathematics/functional-analysis/noncompact-unit-balls-and-separability",
              title: "Noncompact unit balls and separability",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/hahn-banach-theorem",
              title: "The Hahn–Banach theorem",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#partial-order">Partial orders</a>
              </li>
              <li>
                <a href="#chains">Total orders and chains</a>
              </li>
              <li>
                <a href="#bounds">
                  Upper bounds, maximal elements and greatest elements
                </a>
              </li>
              <li>
                <a href="#zorn">Zorn’s lemma</a>
              </li>
              <li>
                <a href="#algebraic-basis">
                  Algebraic bases in arbitrary dimensions
                </a>
              </li>
              <li>
                <a href="#independent-poset">
                  Order the independent subsets by inclusion
                </a>
              </li>
              <li>
                <a href="#chain-union">The union of a chain is independent</a>
              </li>
              <li>
                <a href="#maximal-spans">
                  Maximal independence forces spanning
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
