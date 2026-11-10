import { FinanceLesson } from "@/components/notes/FinanceLesson";
import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
import { course, sections } from "./lesson-data";
import { SwapsSection } from "./swaps-section";
import { RatesSection } from "./rates-section";
import { CurvesSection } from "./curves-section";
import { ForwardsSection } from "./forwards-section";

export const metadata = {
  title: "Linear Rates Products and Models | MIT 18.642 Lecture 7 | Zura Jashi",
  description:
    "Rates conventions, deposits, forwards, swaps, curve calibration, PV01 hedging, PnL attribution and bond spreads.",
};

export default function LectureSeven() {
  return (
    <FinanceLesson
      number={7}
      title="Linear rates, products and models"
      description="Turn interest rate quotes into cash flows, calibrate a curve, and express the resulting risk in instruments that can hedge it."
      instructor="Andrew Gunstensen"
      topics="Guest lecture · Mizuho Financial Group · Fall 2024"
      sections={sections}
      previous={{
        slug: "stopping-times-and-regression",
        title: "Stopping times and regression",
      }}
      next={{
        slug: "regression-inference-and-diagnostics",
        title: "Regression inference and diagnostics",
      }}
      sources={
        <p>
          Course sources:{" "}
          <a href={`${course}resources/18642-lecture-7-version-2_mp4/`}>
            Lecture 7 recording
          </a>{" "}
          and{" "}
          <a href={`${course}mit18_642_f24_lec07.pdf`}>
            Linear Rates Models slides
          </a>
          . These notes follow the Fall 2024 teaching context, with original
          simplified examples. Market conventions are stated for each
          calculation; examples are not live market quotes or trading
          recommendations.
        </p>
      }
    >
      <div className={styles.lessonOverview}>
        <p>
          The guest lecture connects rates products, valuation, curve
          construction, hedging, clearing and electronic trading. The worked
          examples use a deliberately simple single curve model first, then
          identify where funding, index conventions and collateral arrangements
          require more detail.
        </p>
      </div>
      <RatesSection />
      <ForwardsSection />
      <SwapsSection />
      <CurvesSection />
      <section id="risk" className={styles.section}>
        <span className={styles.sectionNumber}>
          05 / EXPRESS RISK IN QUOTE SPACE
        </span>
        <h2>Sensitivities and hedges</h2>
        <p>
          <MathText>
            {
              "Let $q_i$ be a market rate quote in decimal units. Define a signed PV01 here as the linear PV change for a +1 bp move, holding other market quotes fixed and recalibrating the curve. Some desks report the opposite sign or an absolute amount, so the convention must accompany the number."
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\Delta_i\\approx\\frac{V(q_i+h)-V(q_i-h)}{2h},\\qquad\\mathrm{PV01}_i=10^{-4}\\Delta_i."
          }
        </Equation>
        <Equation>
          {"\\Gamma_{ii}\\approx\\frac{V(q_i+h)-2V(q_i)+V(q_i-h)}{h^2}."}
        </Equation>
        <p>
          Differentiate with respect to observable quotes or internal curve
          parameters deliberately; they are different risks. A parallel bump
          compresses risk into one number, while a bucket ladder retains
          maturity exposures. Finite bump sizes trade truncation error against
          numerical noise.
        </p>
        <h3>Original hedge calculation</h3>
        <p>
          A portfolio’s signed PV01 is +4,800 currency units per bp. One unit of
          an available hedge has PV01 −1,200. Four units neutralise the first
          order parallel exposure: 4,800 + 4(−1,200) = 0.
        </p>
        <p>
          This hedge does not automatically remove curve twists, basis risk or
          convexity. For several buckets, assemble a sensitivity matrix B whose
          columns are hedge instruments and solve Bh = −d when possible, or a
          suitably weighted least squares approximation when an exact hedge is
          unavailable.
        </p>
      </section>
      <section id="desk" className={styles.section}>
        <span className={styles.sectionNumber}>
          06 / A MODEL ON A TRADING DESK
        </span>
        <h2>PnL and market structure</h2>
        <p>
          The lecture ties pricing to clearing, margin, electronic quotes and
          PnL attribution. Collateral and clearing arrangements affect funding
          and exposure; similar contracts at different clearing venues can
          retain a basis. A theoretical mid price is distinct from a tradable
          bid or offer.
        </p>
        <Equation>
          {
            "\\Delta V\\approx\\Theta\\Delta t+\\sum_i\\Delta_i\\Delta q_i+\\frac12\\sum_{i,j}\\Gamma_{ij}\\Delta q_i\\Delta q_j+\\text{trade and cash flow effects}."
          }
        </Equation>
        <p>
          <strong>Original attribution example.</strong> If signed PV01 is
          +4,800 and the relevant quote rises 2 bp, the linear contribution is
          +9,600. Add time passage, realised cash flows, changes in positions
          and higher order terms before comparing against total economic PnL. A
          large unexplained remainder can reveal missing risks or valuation
          inconsistencies.
        </p>
        <p>
          Fast electronic pricing can reuse a recent full valuation and
          sensitivities for small quote moves. Recalibration remains necessary
          as the market moves far enough that the local approximation becomes
          inaccurate. Operational dates and cash flow rolls are as important as
          the numerical derivative.
        </p>
      </section>
      <section id="bonds" className={styles.section}>
        <span className={styles.sectionNumber}>07 / BOND AND SWAP RISK</span>
        <h2>Bonds on the same curve</h2>
        <p>
          <MathText>
            {
              "A fixed bond can be valued with the same discount curve plus a fitted constant spread. In a continuous spread convention, choose s so that $P_{\\mathrm{dirty}}=\\sum_iCF_iD(0,T_i)e^{-sT_i}$. This is a z spread in the stated convention. The fitted spread can reflect several effects and is not a pure default probability."
            }
          </MathText>
        </p>
        <p>
          <strong>Original example.</strong>
          <MathText>
            {
              " A single payment of 100 in two years has market price 90, while the base curve discount factor is 0.94. Then $90=94e^{-2s}$, giving $s=\\log(94/90)/2\\approx2.1743\\%$. Use dirty price including accrued interest when matching a coupon bond’s full payment PV."
            }
          </MathText>
        </p>
        <p>
          Mapping bond risk to a common curve permits comparison with swap
          hedges, but spread changes and issue specific liquidity can remain. A
          duration match alone does not remove every source of bond risk.
        </p>
      </section>
      <section id="practice" className={styles.section}>
        <span className={styles.sectionNumber}>08 / PRACTICE</span>
        <h2>Check your understanding</h2>
        <p>Original exercises, separate from MIT’s assignments.</p>
        <ol>
          <li>What decimal rate is a 25 bp move?</li>
          <li>
            With discount factors 0.98 and 0.95, what is the value of the two
            period fixed receiver swap at K = 6% and notional 1,000,000?
          </li>
          <li>
            Does a parallel PV01 hedge necessarily hedge a steepening of the
            yield curve?
          </li>
        </ol>
        <details>
          <summary>Compare your answers</summary>
          <p>1. 0.0025, or 0.25 percentage points.</p>
          <p>2. 1,000,000(0.06 × 0.965 − 0.05) = +7,900.</p>
          <p>
            3. No. A steepening changes maturities differently; bucket
            sensitivities matter.
          </p>
        </details>
      </section>
    </FinanceLesson>
  );
}
