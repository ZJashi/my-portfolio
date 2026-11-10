import { LessonContents } from "./LessonContents";
import { LessonNavigation } from "@/components/notes/LessonNavigation";
import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { RememberSection } from "./remember-section";
import { ExtensionPosetSection } from "./extension-poset-section";
import { CompatibleSection } from "./compatible-section";
import { ChainDomainSection } from "./chain-domain-section";
import { LowerBoundSection } from "./lower-bound-section";
import { SublinearSection } from "./sublinear-section";
import { MaximalSection } from "./maximal-section";
import { OneDirectionSection } from "./one-direction-section";
import { UpperBoundSection } from "./upper-bound-section";
import { FunctionalsSection } from "./functionals-section";

export const metadata = {
  title: "The Hahn–Banach theorem | Functional Analysis | Zura Jashi",
  description:
    "Extend a dominated real linear functional one direction at a time, then use Zorn’s lemma to reach the whole space.",
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
        <span>Lecture 9</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>09 / FUNCTIONAL ANALYSIS</p>
        <h1 className={styles.subjectTitle}>The Hahn–Banach theorem</h1>
        <p className={styles.subjectDescription}>
          Extend a dominated real linear functional one direction at a time,
          then use Zorn’s lemma to reach the whole space.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 9</span>
          <span>
            Sublinear functions · Real linear functionals · Zorn’s lemma
          </span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Source:{" "}
          <a href="https://www.youtube.com/watch?v=qm4C2cnB-FE">
            Claudio Landim · IMPA lecture 9
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
                  "The Hahn–Banach theorem extends a linear functional without losing a sublinear upper bound. The local step reduces extension to choosing a real number in a nonempty interval. The global step combines compatible partial extensions and uses maximality to force a full domain."
                }
              </MathText>
            </p>
          </div>
          <FunctionalsSection />
          <SublinearSection />
          <section id="statement" className={styles.section}>
            <span className={styles.sectionNumber}>03 / LECTURE 9</span>
            <h2>The real Hahn–Banach theorem</h2>
            <NoteBox kind="result" title="Hahn–Banach extension theorem">
              <p>
                <MathText>
                  {
                    "Let $X$ be a real vector space, $Y\\subseteq X$ a linear subspace, and $p:X\\to\\mathbb R$ a finite-valued sublinear function. Suppose $\\ell:Y\\to\\mathbb R$ is linear and $\\ell(y)\\leq p(y)$ for all $y\\in Y$. Then there exists a linear $L:X\\to\\mathbb R$ such that"
                  }
                </MathText>
              </p>
              <Equation>
                {"L|_Y=\\ell,\\qquad L(x)\\leq p(x)\\quad(x\\in X)."}
              </Equation>
            </NoteBox>
            <p>
              <MathText>
                {
                  "There are three requirements on the extension: linearity, agreement on the original domain, and domination on the enlarged domain. The upper bound is initially one-sided. Linearity also yields the companion lower bound $L(x)=-L(-x)\\geq-p(-x)$."
                }
              </MathText>
            </p>
            <p>
              <MathText>
                {
                  "The proof has two parts. First, extend across one new direction. Then order all dominated extensions and use Zorn’s lemma to obtain an extension whose domain cannot be enlarged further."
                }
              </MathText>
            </p>
          </section>
          <OneDirectionSection />
          <UpperBoundSection />
          <LowerBoundSection />
          <CompatibleSection />
          <ExtensionPosetSection />
          <ChainDomainSection />
          <MaximalSection />
          <section id="interpretation" className={styles.section}>
            <span className={styles.sectionNumber}>11 / LECTURE 9</span>
            <h2>What the theorem preserves</h2>
            <p>
              <MathText>
                {
                  "The theorem preserves the values already assigned on $Y$ and a common sublinear upper bound on the entire space. It asserts existence; it does not generally assert uniqueness. The one-dimensional interval may contain more than one admissible value."
                }
              </MathText>
            </p>
            <p>
              <MathText>
                {
                  "When $p(x)=C\\|x\\|$ for $C\\geq0$, the one-sided domination implies a two-sided bound: applying it to $x$ gives $L(x)\\leq C\\|x\\|$, while applying it to $-x$ gives $-L(x)\\leq C\\|x\\|$. Thus $|L(x)|\\leq C\\|x\\|$. This explains the link between sublinear domination and size control of functionals."
                }
              </MathText>
            </p>
            <p>
              <MathText>
                {
                  "The result proved here is over the real field. The inequalities compare real values; no ordering of complex numbers is being used."
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
              href: "/notes/mathematics/functional-analysis/zorns-lemma",
              title: "Zorn’s lemma",
            }}
            next={{
              href: "/notes/mathematics/functional-analysis/convex-sets-and-gauge-functions",
              title: "Convex sets and gauge functions",
            }}
          />
        </article>
        <LessonContents />
      </div>
    </div>
  );
}
