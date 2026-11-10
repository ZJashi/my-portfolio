import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
import { ConvexitySection } from "./convexity-section";
import { HullProofSection } from "./hull-proof-section";
import { RememberSection } from "./remember-section";
import { WellDefinedSection } from "./well-defined-section";
import { ConvexOperationsSection } from "./convex-operations-section";
import { SubspaceImagesSection } from "./subspace-images-section";
import { CombinationsSection } from "./combinations-section";
import { HullSection } from "./hull-section";
import { EquivalenceSection } from "./equivalence-section";
import { QuotientSection } from "./quotient-section";
import { LinearMapsSection } from "./linear-maps-section";

export const metadata = {
  title: "Quotient Spaces and Convex Sets | Functional Analysis | Zura Jashi",
  description:
    "Lecture 2: equivalence classes, quotient spaces, linear maps, convex combinations and convex hulls, with proofs.",
};

export default function QuotientSpacesLesson() {
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
        <span>Lecture 2</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>02 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>Quotient spaces and convex sets</h1>
        <p className={styles.subjectDescription}>
          Identify vectors that differ by a subspace, preserve linear structure
          through maps, and build convex sets from finite combinations.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 2</span>
          <span>Linear spaces · Subspaces · Induction</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=Hb9bCMB7KS8">
            Claudio Landim · IMPA lecture 2
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
                  "A quotient space treats vectors differing by an element of a chosen subspace as one object. Convexity places a different restriction on combinations: the coefficients must be nonnegative and sum to one. Both constructions lead from abstract definitions to explicit descriptions and closure proofs."
                }
              </MathText>
            </p>
          </div>
          <EquivalenceSection />
          <QuotientSection />
          <WellDefinedSection />
          <LinearMapsSection />
          <SubspaceImagesSection />
          <ConvexitySection />
          <CombinationsSection />
          <ConvexOperationsSection />
          <section id="convex-maps" className={styles.section}>
            <span className={styles.sectionNumber}>09 / LECTURE 2</span>
            <h2>Linear images and preimages preserve convexity</h2>
            <p>
              <MathText>
                {
                  "Let $T:X\\to W$ be a linear map between real linear spaces. Linearity preserves the coefficients of a convex combination:"
                }
              </MathText>
            </p>
            <Equation>{"T(tx+(1-t)u)=tT(x)+(1-t)T(u)."}</Equation>
            <h3>Images</h3>
            <p>
              <MathText>
                {
                  "Let $C\\subseteq X$ be convex. Given $z_1,z_2\\in T(C)$, choose $x_1,x_2\\in C$ with $T(x_i)=z_i$. Convexity gives $tx_1+(1-t)x_2\\in C$. Applying $T$ yields"
                }
              </MathText>
            </p>
            <Equation>{"tz_1+(1-t)z_2=T(tx_1+(1-t)x_2)\\in T(C)."}</Equation>
            <p>
              <MathText>{"Therefore $T(C)$ is convex."}</MathText>
            </p>
            <h3>Preimages</h3>
            <p>
              <MathText>
                {
                  "Let $D\\subseteq W$ be convex and take $x_1,x_2\\in T^{-1}(D)$. Then $T(x_1),T(x_2)\\in D$, and convexity of $D$ gives"
                }
              </MathText>
            </p>
            <Equation>{"T(tx_1+(1-t)x_2)=tT(x_1)+(1-t)T(x_2)\\in D."}</Equation>
            <p>
              <MathText>
                {
                  "This says precisely that $tx_1+(1-t)x_2\\in T^{-1}(D)$. Therefore the preimage is convex. No inverse map is required; if the preimage is empty it remains convex."
                }
              </MathText>
            </p>
          </section>
          <HullSection />
          <HullProofSection />
          <RememberSection />

          <LessonNavigation
            contents={{
              href: "/notes/mathematics/functional-analysis",
              title: "Functional Analysis",
            }}
            previous={{
              href: "/notes/mathematics/functional-analysis/linear-spaces",
              title: "Linear spaces",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/normed-linear-spaces",
              title: "Normed linear spaces",
            }}
          />
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              <li>
                <a href="#equivalence">Equivalence modulo a subspace</a>
              </li>
              <li>
                <a href="#quotient">Classes and the quotient space</a>
              </li>
              <li>
                <a href="#well-defined">
                  Why the quotient operations are well defined
                </a>
              </li>
              <li>
                <a href="#linear-maps">Linear maps and isomorphisms</a>
              </li>
              <li>
                <a href="#subspace-images">Images and preimages of subspaces</a>
              </li>
              <li>
                <a href="#convexity">Convex sets</a>
              </li>
              <li>
                <a href="#combinations">Finite convex combinations</a>
              </li>
              <li>
                <a href="#convex-operations">
                  Subspaces, sums, intersections and unions
                </a>
              </li>
              <li>
                <a href="#convex-maps">
                  Linear images and preimages preserve convexity
                </a>
              </li>
              <li>
                <a href="#hull">The convex hull</a>
              </li>
              <li>
                <a href="#hull-proof">
                  The hull consists of finite convex combinations
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
