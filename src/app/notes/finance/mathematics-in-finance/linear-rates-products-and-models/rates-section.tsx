import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RatesSection() {
  return (
    <section id="rates" className={styles.section}>
      <span className={styles.sectionNumber}>
        01 / DEFINE THE CONTRACT FIRST
      </span>
      <h2>Rates and conventions</h2>
      <p>
        “Linear” products include vanilla bonds, swaps and interest rate
        futures. Their cash flows can be fixed or linear in a rate, but their
        present values can still be nonlinear in a curve. Convexity and cash
        flow conventions therefore remain relevant.
      </p>
      <NoteBox title="A rate needs units and an accrual convention">
        <Equation>
          {
            "\\text{interest}=N r\\alpha,\\qquad\\alpha=\\text{year fraction},\\qquad1\\text{ basis point}=10^{-4}."
          }
        </Equation>
        <p>
          N is notional in currency units, r is an annual decimal rate, and α is
          the contract’s accrual fraction. Reset dates, accrual dates and
          payment dates can differ.
        </p>
      </NoteBox>
      <p>
        <strong>Original example.</strong> A notional of 1,000,000 at 5% over 90
        days on an Actual/360 convention accrues 12,500. Using 90/365 would
        instead give about 12,328.77. A quoted annual rate alone is insufficient
        to determine the cash flow.
      </p>
      <p>
        The lecture contrasts the unsecured LIBOR framework with overnight SOFR
        and the effects of compounding in arrears. Keep overnight compounded
        rates distinct from a forward looking term rate.
      </p>
      <Equation>
        {
          "R_{\\mathrm{comp}}=\\frac{\\prod_{i=1}^{m}(1+r_i\\delta_i)-1}{\\alpha},\\qquad\\alpha=\\sum_i\\delta_i."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Here $\\delta_i$ is the accrual fraction associated with each fixing. For two synthetic half year periods at 4% and 6%, the compounded annual return is $(1.02)(1.03)-1=5.06\\%$, not the 5% simple weighted average. Actual overnight periods are much shorter and follow specific calendars and fixing rules."
          }
        </MathText>
      </p>
    </section>
  );
}
