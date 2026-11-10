import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function PayoffsSection() {
  return (
    <section id="payoffs" className={styles.section}>
      <span className={styles.sectionNumber}>05 / NONLINEAR PAYMENTS</span>
      <h2>Expected option payoffs</h2>
      <p>
        <MathText>
          {
            "A call payoff is $(X-K)^+=\\max(X-K,0)$. For each realised X, this equals the area of indicators $\\int_K^\\infty\\mathbf1_{\\{X>u\\}}du$. Taking expectations and using nonnegativity gives the tail integral identity, even if the result is infinite:"
          }
        </MathText>
      </p>
      <Equation>
        {"\\mathbb E[(X-K)^+]=\\int_K^\\infty\\Pr(X>u)\\,du."}
      </Equation>
      <p>
        <strong>Original example.</strong> A terminal asset value is 80, 100, or
        130 with probabilities 0.2, 0.5, and 0.3. At strike 100, the expected
        payoff is 9. Between 100 and 130, the survival probability is 0.3, so
        the tail integral is the rectangle of height 0.3 and width 30.
      </p>
      <Equation>
        {
          "\\mathbb E[(X-100)^+]=0.3(30)=9,\\qquad (\\mathbb E[X]-100)^+=(105-100)^+=5."
        }
      </Equation>
      <p>
        <strong>
          Taking an expectation and applying a nonlinear payoff do not commute.
        </strong>{" "}
        Convexity gives the inequality between these two calculations. The
        expected payoff is also distinct from today’s price: pricing needs
        discounting and a suitable pricing measure or a replication argument.
      </p>
      <p>
        <MathText>
          {
            "For a normal variable, put $d=(\\mu-K)/\\sigma$. Substituting $x=\\mu+\\sigma z$ into the payoff integral and using $\\phi'(z)=-z\\phi(z)$ gives:"
          }
        </MathText>
      </p>
      <Equation>
        {"\\mathbb E[(X-K)^+]=(\\mu-K)\\Phi(d)+\\sigma\\phi(d)."}
      </Equation>
      <p>
        <MathText>
          {
            "For $Y=e^X$ and $K>0$, completing the square in $e^xf_X(x)$ similarly gives:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\mathbb E[(Y-K)^+]=e^{\\mu+\\sigma^2/2}\\Phi(d_1)-K\\Phi(d_2),\\quad d_2=\\frac{\\mu-\\log K}{\\sigma},\\quad d_1=d_2+\\sigma."
        }
      </Equation>
    </section>
  );
}
