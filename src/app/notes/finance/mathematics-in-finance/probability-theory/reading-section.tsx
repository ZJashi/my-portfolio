import { MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function ReadingSection() {
  return (
    <section id="reading" className={styles.section}>
      <span className={styles.sectionNumber}>08 / COMPANION MATERIAL</span>
      <h2>Companion reading and the next lecture</h2>
      <p>
        The posted probability slides extend beyond these foundations into
        sampling distributions and limit theorems; the application slides
        develop utility based pricing. This section is a reading guide, rather
        than a claim that all these results were completed in Lecture 4.
      </p>
      <h3>Sampling distributions</h3>
      <p>
        <MathText>
          {
            "For independent standard normals, $U=\\sum_{i=1}^\\nu Z_i^2$ has a chi squared distribution with $\\nu$ degrees of freedom. If Z is an independent standard normal, $Z/\\sqrt{U/\\nu}$ has Student’s t distribution. Independent chi squared variables U and V give $(U/m)/(V/n)\\sim F_{m,n}$. Independence is essential."
          }
        </MathText>
      </p>
      <h3>Averaging independent observations</h3>
      <p>
        <MathText>
          {
            "For iid observations with finite mean $\\mu$ and variance $\\sigma^2$, $\\operatorname{Var}(\\bar X_n)=\\sigma^2/n$. Chebyshev’s inequality gives $\\Pr(|\\bar X_n-\\mu|>\\varepsilon)\\le\\sigma^2/(n\\varepsilon^2)$, proving convergence in probability. When $\\sigma>0$, the central limit theorem gives $\\sqrt n(\\bar X_n-\\mu)/\\sigma\\Rightarrow N(0,1)$. It concerns the scaled average, not a claim that individual returns become normal."
          }
        </MathText>
      </p>
      <h3>Utility based pricing</h3>
      <p>
        <MathText>
          {
            "The applications reading considers choosing a risky holding to maximise expected utility of terminal wealth. For an interior optimum with valid differentiation under expectation, the first order condition is $\\mathbb E[U'(W)(F-p(1+r_f))]=0$. Risk aversion and covariance with wealth influence the price an investor is willing to pay. Market clearing is also needed for an equilibrium interpretation."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Under the reading’s normal payoff and expected utility assumptions, its equilibrium argument leads to the CAPM relation $\\mathbb E[R_i]-r_f=\\beta_i(\\mathbb E[R_M]-r_f)$, where $\\beta_i=\\operatorname{Cov}(R_i,R_M)/\\operatorname{Var}(R_M)$ and market variance is positive. This is a model relation, not an identity true of arbitrary returns."
          }
        </MathText>
      </p>
      <p>
        <strong>Original model calculation.</strong> If beta is 1.2, the risk
        free return is 3%, and the expected market return is 8%, the relation
        gives 9%. The input expectations and the equilibrium assumptions do the
        work; beta alone supplies no return forecast.
      </p>
    </section>
  );
}
