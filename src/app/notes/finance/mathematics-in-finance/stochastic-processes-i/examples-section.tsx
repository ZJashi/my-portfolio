import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function ExamplesSection() {
  return (
    <section id="examples" className={styles.section}>
      <span className={styles.sectionNumber}>05 / BUILDING FAIR PROCESSES</span>
      <h2>Constructing martingales</h2>
      <h3>Centred sums</h3>
      <p>
        <MathText>
          {
            "For independent integrable increments with $\\mathbb E[X_k]=0$, let $S_n=\\sum_{k=1}^n X_k$ and $\\mathcal F_n=\\sigma(X_1,\\ldots,X_n)$. Independence gives $\\mathbb E[X_{n+1}\\mid\\mathcal F_n]=0$. Therefore:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\mathbb E[S_{n+1}\\mid\\mathcal F_n]=S_n+\\mathbb E[X_{n+1}\\mid\\mathcal F_n]=S_n."
        }
      </Equation>
      <p>
        <MathText>
          {
            "For independent steps $\\pm1$ with equal probabilities, $\\operatorname{Var}(S_n)=n$. The mean stays zero while the standard deviation grows like $\\sqrt n$. A martingale is not a process that stays close to its starting point."
          }
        </MathText>
      </p>
      <h3>Subtract predictable variance growth</h3>
      <p>
        <MathText>
          {
            "If the increments also have common finite variance $\\sigma^2$, expand $(S_n+X_{n+1})^2$. The cross term has conditional mean zero and the squared increment has mean $\\sigma^2$. Thus:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\mathbb E[S_{n+1}^2\\mid\\mathcal F_n]=S_n^2+\\sigma^2,\\qquad M_n=S_n^2-n\\sigma^2\\text{ is a martingale}."
        }
      </Equation>
      <h3>Products and exponentials</h3>
      <p>
        <MathText>
          {
            "Independent nonnegative factors $Y_k$ with $\\mathbb E[Y_k]=1$ give $M_n=\\prod_{k=1}^nY_k$, $M_0=1$. Pull the known product outside the conditional expectation to verify the martingale property. For iid increments X with $\\varphi(\\theta)=\\mathbb E[e^{\\theta X}]<\\infty$, take $Y_k=e^{\\theta X_k}/\\varphi(\\theta)$:"
          }
        </MathText>
      </p>
      <Equation>{"M_n=\\frac{e^{\\theta S_n}}{\\varphi(\\theta)^n}."}</Equation>
      <p>
        <strong>Original product example.</strong> Factors 0.8 and 1.2, equally
        likely and independent at each step, have mean 1. After two steps the
        product takes 0.64, 0.96 and 1.44 with probabilities 1/4, 1/2 and 1/4.
        Their weighted mean is still 1.
      </p>
    </section>
  );
}
