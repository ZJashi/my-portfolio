import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { source, sections } from "./lesson-data";
import { BondsSection } from "./bonds-section";
import { SensitivitySection } from "./sensitivity-section";
import { TimeSection } from "./time-section";
import { PracticeSection } from "./practice-section";

export const metadata = {
  title: "Markets and Bond Mathematics | MIT 18.642 Lecture 1 | Zura Jashi",
  description:
    "Discounting and bond pricing with derivations, original worked examples, duration, convexity and forward rates.",
};

export default function BondMathLesson() {
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
        <span>Lecture 1</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>01 / MIT 18.642</p>
        <h1 className={styles.subjectTitle}>Markets and bond mathematics</h1>
        <p className={styles.subjectDescription}>
          Move cash flows to a common date, price a bond, and measure how its
          value changes when interest rates move.
        </p>
        <div className={styles.readingMeta}>
          <span>Lecture 1 · Fall 2024</span>
          <span>Algebra · Exponentials · Differentiation</span>
        </div>
      </header>
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          <div className={styles.lessonOverview}>
            <p>
              Lecture 1 introduces markets, investment choices and fixed income.
              Its three parts are taught by Peter Kempthorne, Jake Xia and
              Vasily Strela. The core connection is that future payments can be
              compared through discounting.{" "}
              <a href={`${source}pages/week-1/`}>
                Lecture videos and materials
              </a>
              .
            </p>
          </div>
          <section id="markets" className={styles.section}>
            <span className={styles.sectionNumber}>01 / FINANCIAL CONTEXT</span>
            <h2>Markets and participants</h2>
            <p>
              Trading occurs on exchanges and over the counter. Products include
              equities, bonds, currencies and derivatives. Hedgers reduce
              exposures, market makers quote buying and selling prices, and
              portfolio managers take risk in pursuit of returns.
            </p>
            <NoteBox title="Start with objectives and constraints">
              <p>
                Investment choices depend on goals, time horizon, liquidity
                needs and risk tolerance. The lecture distinguishes active and
                passive approaches, public and private assets, and systematic
                and discretionary strategies.
              </p>
            </NoteBox>
            <p>
              <a href={`${source}mit18_642_f24_lec01_1.pdf`}>
                Lecture slides, pages 7–17
              </a>
              .
            </p>
            <p>
              <strong>Illustrative connection.</strong> Imagine a business that
              owes £1,000 in two years. A matching bond payment can fund that
              obligation; a fluctuating equity investment introduces uncertainty
              about whether the money will be available. The relevant question
              begins with the liability, before comparing expected returns.
            </p>
          </section>
          <TimeSection />
          <BondsSection />
          <section id="yield" className={styles.section}>
            <span className={styles.sectionNumber}>
              04 / INTERPRETING RATES
            </span>
            <h2>Yield and the yield curve</h2>
            <NoteBox title="Yield to maturity">
              <p>
                <MathText>
                  {
                    "Yield to maturity $y$ is the single rate that reproduces a bond’s observed price when used to discount its promised payments. For annual coupons, solve the pricing equation above for $y$."
                  }
                </MathText>
              </p>
            </NoteBox>
            <p>
              Yield is a summary of price and promised payments, rather than a
              guaranteed realised return. Selling before maturity changes the
              sale price, and reinvesting coupons at another rate changes
              terminal wealth.
            </p>
            <p>
              <MathText>
                {
                  "Different maturities can have different rates. A zero rate $z_k$ gives $D(0,k)=(1+z_k)^{-k}$. Discounting every cash flow at its own zero rate is distinct from fitting one yield to the whole bond. Do not substitute coupon bond yields directly for zero rates."
                }
              </MathText>
            </p>
            <p>
              <a href={`${source}mit18_642_f24_lec01_1.pdf`}>
                Lecture slides, pages 19–23
              </a>
              .
            </p>
          </section>
          <SensitivitySection />
          <section id="forwards" className={styles.section}>
            <span className={styles.sectionNumber}>06 / NO ARBITRAGE</span>
            <h2>Forward rates from discount factors</h2>
            <p>
              <MathText>
                {
                  "For $0<t<T$, compare a certain unit invested from zero to $T$ with investment to $t$ followed by a rate locked today for the remaining period. With matching credit and funding assumptions and no trading frictions, unequal terminal payoffs would permit arbitrage."
                }
              </MathText>
            </p>
            <NoteBox kind="result" title="Annualised effective forward rate">
              <Equation>
                {
                  "(1+f_{t,T})^{T-t}=\\frac{D(0,t)}{D(0,T)},\\qquad f_{t,T}=\\left(\\frac{D(0,t)}{D(0,T)}\\right)^{1/(T-t)}-1."
                }
              </Equation>
            </NoteBox>
            <p>
              <MathText>
                {
                  "For an original example, take one year and two year effective zero rates of 4% and 5%. Then $1+f_{1,2}=1.05^2/1.04$, giving $f_{1,2}\\approx6.01\\%$. This is a rate implied today, not a prediction of the spot rate next year. A simple interest forward convention instead uses $L_{t,T}=[D(0,t)/D(0,T)-1]/(T-t)$."
                }
              </MathText>
            </p>
          </section>
          <PracticeSection />
          <div className={styles.lessonSources}>
            <p>
              Independent notes on{" "}
              <a href={`${source}pages/week-1/`}>MIT 18.642 Lecture 1</a>, with
              original derivations and numerical examples. Topic reference:{" "}
              <a href={`${source}mit18_642_f24_lec01_1.pdf`}>
                Introduction, Financial Terms and Concepts, Bond Math slides
              </a>
              , particularly pages 7–25. Rates and sensitivity formulas here
              explicitly use the compounding conventions stated beside them.{" "}
              <a href="https://www.youtube.com/watch?v=b8u2CQLQBVU&list=PLUl4u3cNGP601Q2jo-J_3raNCMMs6Jves">
                YouTube lecture series
              </a>
              .
            </p>
          </div>
          <nav className={styles.lessonEnd} aria-label="Lesson navigation">
            <Link href="/notes/finance">Finance notebooks</Link>
            <Link href="/notes/finance/mathematics-in-finance">
              Course contents
            </Link>
            <Link href="/notes/finance/mathematics-in-finance/linear-algebra">
              Next: Linear algebra
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
