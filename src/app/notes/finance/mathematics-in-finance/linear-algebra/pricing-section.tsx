import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function PricingSection() {
  return (
    <section id="pricing" className={styles.section}>
      <span className={styles.sectionNumber}>04 / CONSISTENT PRICES</span>
      <h2>Arbitrage and state prices</h2>
      <NoteBox title="Arbitrage in a finite state market">
        <p>
          <MathText>
            {
              "An arbitrage has $p^Th\\le0$, $Ah\\ge0$ componentwise, and a strict gain either initially or in at least one possible terminal state. With a positive payoff cash account, an initial receipt can be invested to give the usual zero cost version."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "A strictly positive state price vector $\\psi$ satisfying $A^T\\psi=p$ rules this out: the cost of a portfolio equals $\\psi^TAh$, which is positive whenever its payoff is nonnegative and nonzero. Conversely, the finite dimensional separation theorem gives such a vector in an arbitrage free frictionless market."
          }
        </MathText>
      </p>
      <Equation>
        {
          "A^T\\psi=p,\\qquad\\psi_i>0,\\qquad C_0=\\psi^Tc\\quad\\text{for an attainable claim}."
        }
      </Equation>
      <h3>Price the same call a second way</h3>
      <p>
        For the bond and stock above, solve the two asset pricing equations.
        Adding state prices prices the bond; their weighted sum prices the
        stock.
      </p>
      <Equation>
        {
          "1.05(\\psi_u+\\psi_d)=1,\\qquad120\\psi_u+80\\psi_d=100\\quad\\Longrightarrow\\quad\\psi=\\begin{pmatrix}25/42\\\\5/14\\end{pmatrix}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The discount factor is $D=\\psi_u+\\psi_d=20/21$. Normalising gives pricing probabilities $Q_u=5/8$ and $Q_d=3/8$. Hence:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "C_0=D\\mathbb E_Q[c]=\\frac{20}{21}\\left(\\frac58\\times20+\\frac38\\times0\\right)=\\frac{250}{21}."
        }
      </Equation>
      <p>
        <strong>Pricing probabilities are not forecasts.</strong> They encode
        consistency with observed prices. No assumption about the real world up
        probability was needed. If this call traded at £15, selling it and
        buying its £11.90 replicating portfolio would leave an initial receipt
        and zero net terminal payoff.
      </p>
      <p>
        <MathText>
          {
            "With no arbitrage, completeness is equivalent to uniqueness of state prices, and therefore uniqueness of the pricing measure when a risk free account fixes discounting. In an incomplete market, attainable claims still have unique replication prices; unspanned claims generally do not."
          }
        </MathText>
      </p>
    </section>
  );
}
