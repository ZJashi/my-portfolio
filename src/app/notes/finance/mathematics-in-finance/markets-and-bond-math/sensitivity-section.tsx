import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function SensitivitySection() {
  return (
    <section id="sensitivity" className={styles.section}>
      <span className={styles.sectionNumber}>05 / INTEREST RATE RISK</span>
      <h2>Duration and convexity</h2>
      <p>
        <MathText>
          {
            "Write $CF_k$ for the positive payment at year $k$ and differentiate $P(y)=\\sum_k CF_k(1+y)^{-k}$. Holding these payments fixed gives:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "P'(y)=-\\sum_k kCF_k(1+y)^{-k-1}<0,\\qquad P''(y)=\\sum_k k(k+1)CF_k(1+y)^{-k-2}>0."
        }
      </Equation>
      <p>
        A higher yield reduces the value of each payment. The positive second
        derivative means that the price curve bends upward: its slope becomes
        less negative as yield increases.
      </p>
      <NoteBox kind="result" title="Sensitivity under annual compounding">
        <Equation>
          {
            "D_{\\mathrm{Mac}}=\\frac{\\sum_k kCF_k(1+y)^{-k}}{P},\\qquad D_{\\mathrm{mod}}=\\frac{D_{\\mathrm{Mac}}}{1+y}=-\\frac{P'}P,\\qquad \\mathcal C=\\frac{P''}P."
          }
        </Equation>
        <Equation>
          {
            "\\frac{\\Delta P}{P}\\approx-D_{\\mathrm{mod}}\\Delta y+\\frac12\\mathcal C(\\Delta y)^2."
          }
        </Equation>
        <p>
          These are local sensitivities to one common yield change. Macaulay
          duration is a present value weighted time; modified duration measures
          relative price sensitivity. Convexity adds the second order
          correction.
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "For a three year zero coupon bond at 5%, $D_{\\mathrm{Mac}}=3$, $D_{\\mathrm{mod}}=3/1.05=2.8571$ and $\\mathcal C=12/1.05^2=10.8844$. A rise from 5% to 6% has $\\Delta y=0.01$, not 1."
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\frac{\\Delta P}{P}\\approx-2.8571(0.01)+\\tfrac12(10.8844)(0.01)^2\\approx-2.8027\\%."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Exact repricing gives $(1.05/1.06)^3-1\\approx-2.8036\\%$. The close agreement is for this small move; a general yield curve twist requires sensitivities at different maturities."
          }
        </MathText>
      </p>
    </section>
  );
}
