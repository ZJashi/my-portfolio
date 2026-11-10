import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function SwapsSection() {
  return (
    <section id="swaps" className={styles.section}>
      <span className={styles.sectionNumber}>03 / TWO CASH FLOW LEGS</span>
      <h2>Valuing a swap</h2>
      <p>
        <MathText>
          {
            "A vanilla interest rate swap exchanges fixed and floating interest on a notional, normally without exchanging that notional. Use K for the fixed annual rate, $\\alpha_i$ for fixed accruals, $\\beta_j$ for floating accruals and $F_j$ for projected floating rates. The formulas below value the receiver of fixed and payer of floating."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Swap present value and the par fixed rate">
        <Equation>
          {
            "V_{\\mathrm{recv}}=N\\left[K\\sum_i\\alpha_iD(0,T_i)-\\sum_j\\beta_jF_jD(0,U_j)\\right]."
          }
        </Equation>
        <Equation>
          {
            "K_{\\mathrm{par}}=\\frac{\\sum_j\\beta_jF_jD(0,U_j)}{\\sum_i\\alpha_iD(0,T_i)}."
          }
        </Equation>
        <p>
          Payment schedules may differ across the legs. A par swap has zero
          initial value under the chosen curves and conventions; an existing off
          market swap generally does not.
        </p>
      </NoteBox>
      <h3>Original two payment example</h3>
      <p>
        <MathText>
          {
            "Use payment times 0.5 and 1, accrual fractions 0.5 on both legs, $D_1=0.98$, $D_2=0.95$, and an immediate start. In the single curve model, projected floating coupons telescope:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\sum_i\\alpha_iF_iD_i=\\sum_i(D_{i-1}-D_i)=1-D_2=0.05,\\qquad A=0.5(0.98+0.95)=0.965."
        }
      </Equation>
      <Equation>{"K_{\\mathrm{par}}=0.05/0.965\\approx5.18135\\%."}</Equation>
      <p>
        For notional 1,000,000, a receiver fixed swap at 5% has value
        1,000,000(0.05 × 0.965 − 0.05) = −1,750. Receiving a below market fixed
        rate has negative value in this example.
      </p>
      <p>
        The telescoping identity assumes matching reset/payment periods, one
        curve, no payment lag complications and an immediate start. It should
        not be carried unchanged into an arbitrary multi curve or seasoned swap
        calculation.
      </p>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 600 150"
          role="img"
          aria-labelledby="swap-title swap-desc"
        >
          <title id="swap-title">Two legs of a fixed receiver swap</title>
          <desc id="swap-desc">
            The fixed receiver receives fixed payments and pays floating
            payments at each of the two dates. The notional is not exchanged.
          </desc>
          <g stroke="currentColor" fill="none" strokeWidth="2">
            <path d="M40 75H560M220 75V30M480 75V30M220 75v45M480 75v45" />
            <path d="m215 37 5-7 5 7m250 0 5-7 5 7M215 113l5 7 5-7m250 0 5 7 5-7" />
          </g>
          <g fill="currentColor" textAnchor="middle" fontSize="16">
            <text x="220" y="20">
              Receive NKα₁
            </text>
            <text x="480" y="20">
              Receive NKα₂
            </text>
            <text x="220" y="144">
              Pay NF₁α₁
            </text>
            <text x="480" y="144">
              Pay NF₂α₂
            </text>
            <text x="220" y="70">
              T₁
            </text>
            <text x="480" y="70">
              T₂
            </text>
          </g>
        </svg>
        <figcaption>
          Schematic cash flow directions from the fixed receiver’s perspective.
        </figcaption>
      </figure>
    </section>
  );
}
