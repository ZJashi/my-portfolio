import { FinanceLesson } from "@/components/notes/FinanceLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { course, sections } from "./lesson-data";
import { RiskSection } from "./risk-section";
import { EsSection } from "./es-section";
import { ScalingSection } from "./scaling-section";
import { NetworkSection } from "./network-section";

export const metadata = {
  title: "Counterparty Risk Optimisation | MIT 18.642 Lecture 10 | Zura Jashi",
  description:
    "Loss conventions, VaR, expected shortfall, margin, convex scenario optimisation and risk preserving network trades.",
};

export default function LectureTen() {
  return (
    <FinanceLesson
      number={10}
      title="Counterparty risk optimisation"
      description="Measure potential losses, distinguish current exposure from future margin risk, and reduce network costs while preserving agreed portfolio constraints."
      instructor="James Shepherd"
      topics="Guest lecture · Quantile Technologies, LSEG · Fall 2024"
      sections={sections}
      previous={{ slug: "pca-in-finance", title: "PCA in finance" }}
      next={{
        slug: "regression-regularization-and-regime-changes",
        title: "Regression, regularisation and regime changes",
      }}
      sources={
        <p>
          Sources:{" "}
          <a href={`${course}resources/18642-lecture-10-version-2_mp4/`}>
            Lecture 10 recording
          </a>{" "}
          and{" "}
          <a href={`${course}mit18_642_f24_lec10.pdf`}>
            Counterparty Risk Optimization slides
          </a>
          . Independent study notes with original discrete loss and network
          examples. The lecture’s margin and regulatory discussion is historical
          course context; the simplified objectives here are not implementations
          of a current CCP margin model or ISDA SIMM.
        </p>
      }
    >
      <div className={styles.lessonOverview}>
        <p>
          The lecture connects risk measures with initial margin and constrained
          optimisation across counterparties. The worked examples below use an
          explicit loss sign convention and discrete distributions. This matters
          because a quantile is not an upper bound on losses, and a tail average
          needs care when probability mass sits exactly at the quantile.
        </p>
      </div>
      <section id="exposure" className={styles.section}>
        <span className={styles.sectionNumber}>01 / WHAT CAN BE LOST?</span>
        <h2>Exposure and collateral</h2>
        <p>
          Market risk concerns changing prices; counterparty risk concerns loss
          when a trading partner fails to perform. Netting, collateral and
          central clearing can change exposure, but they do not make all market,
          liquidity or operational risk disappear.
        </p>
        <NoteBox title="Variation margin and initial margin cover different intervals">
          <p>
            <strong>Variation margin</strong> addresses current mark to market
            exposure under the agreement. <strong>Initial margin</strong>{" "}
            addresses possible adverse changes during the interval needed to
            close or replace a position after default, the margin period of
            risk.
          </p>
        </NoteBox>
        <p>
          <strong>Original example.</strong> A derivative is worth +5 million to
          a bank, which holds 5 million of variation margin. If its replacement
          value rises to 7 million before closeout after a counterparty default,
          the simplified incremental exposure is 2 million. An initial margin
          buffer may cover some of that change. Actual recovery depends on the
          closeout and collateral arrangements.
        </p>
        <p>
          Current PV, future exposure and notional are different quantities. A
          large notional can have near zero PV at inception while retaining
          substantial risk. Netting applies within the relevant enforceable
          netting set, rather than automatically across every trade a bank
          holds.
        </p>
      </section>
      <RiskSection />
      <ScalingSection />
      <EsSection />
      <NetworkSection />
      <section id="implementation" className={styles.section}>
        <span className={styles.sectionNumber}>
          06 / A SOLUTION MUST SURVIVE IMPLEMENTATION
        </span>
        <h2>Feasibility and fairness</h2>
        <p>
          Practical optimisation also needs executable trade sizes, reliable
          sensitivities, acceptable counterparty changes and an allocation of
          savings. Sparse structure can make a large problem tractable; nearly
          dependent risk factors can make small data perturbations produce
          unstable trades.
        </p>
        <p>
          <strong>Original rounding example.</strong> A continuous solution
          requests 0.49 million units on an edge. Rounding it to zero and
          rounding a paired offset to 1 million can break net risk constraints.
          Rounding is a new constrained problem, not a cosmetic formatting step.
        </p>
        <ol>
          <li>
            Verify trade symmetry, risk tolerances and net exposure preservation
            after implementation adjustments.
          </li>
          <li>
            Recompute margin using the intended model, rather than relying only
            on a local proxy.
          </li>
          <li>Separate aggregate savings from each participant’s savings.</li>
          <li>
            Among solutions with comparable cost, consider trade count,
            concentration and fairness objectives.
          </li>
        </ol>
        <p>
          A two stage approach can first minimise total margin and then choose
          among equally good solutions using a fairness criterion. The second
          stage must retain the first stage’s feasibility and agreed cost
          tolerance.
        </p>
      </section>
      <section id="practice" className={styles.section}>
        <span className={styles.sectionNumber}>07 / PRACTICE</span>
        <h2>Check your understanding</h2>
        <p>Original exercises, separate from MIT’s assignments.</p>
        <ol>
          <li>
            For losses 0, 1, 2, 3 and 10, each with probability 20%, find 80%
            VaR and ES.
          </li>
          <li>
            Why does expected shortfall use slack variables in the scenario
            formulation?
          </li>
          <li>
            In the three party example, what is node A’s net after the
            circulation?
          </li>
        </ol>
        <details>
          <summary>Compare your answers</summary>
          <p>
            1. VaR is 3 under the stated lower quantile convention; ES is 10,
            the worst 20% loss.
          </p>
          <p>
            2. The inequalities represent the positive part as a linear
            epigraph, avoiding a nonsmooth maximum in the objective.
          </p>
          <p>3. 3 − (−3) = 6, unchanged.</p>
        </details>
      </section>
    </FinanceLesson>
  );
}
