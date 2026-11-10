import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function UtilitySection() {
  return (
    <section id="utility" className={styles.section}>
      <span className={styles.sectionNumber}>
        03 / WILLINGNESS TO HOLD RISK
      </span>
      <h2>Utility and risk premiums</h2>
      <p>
        <MathText>
          {
            "Consider an investor with initial wealth $w_0$, choosing h units of a risky payoff F at price p. Remaining cash earns the one period risk free rate $r_f$. Terminal wealth is $W(h)=w_0(1+r_f)+h[F-p(1+r_f)]$. Holdings can be negative in this unconstrained model."
          }
        </MathText>
      </p>
      <Equation>
        {"\\max_h\\mathbb E[U(W(h))],\\qquad\\mathbb E[U'(W)(F-p(1+r_f))]=0."}
      </Equation>
      <p>
        The first order condition assumes an interior optimum and that
        differentiation may pass under expectation. Concavity of utility makes
        the objective concave in holdings; an admissible interior stationary
        point is then a global maximum.
      </p>
      <h3>Original CARA and normal calculation</h3>
      <p>
        <MathText>
          {
            "Take $U(w)=-e^{-aw}$ with $a>0$ and $F\\sim N(\\mu_F,\\sigma_F^2)$, $\\sigma_F>0$. Because W is normal, its exponential expectation can be evaluated exactly. Maximising expected utility is equivalent to maximising its certainty equivalent:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\mathrm{CE}(h)=w_0(1+r_f)+h[\\mu_F-p(1+r_f)]-\\frac a2h^2\\sigma_F^2."
        }
      </Equation>
      <NoteBox kind="result" title="Optimal holding and a consistent price">
        <Equation>
          {
            "h^*=\\frac{\\mu_F-p(1+r_f)}{a\\sigma_F^2},\\qquad p=\\frac{\\mu_F-ah^*\\sigma_F^2}{1+r_f}."
          }
        </Equation>
        <p>
          The second derivative of the certainty equivalent is negative. The
          price relation expresses this investor’s optimality condition; an
          equilibrium also requires holdings to match asset supply.
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "For an original numerical example, let $\\mu_F=110$, $\\sigma_F=20$, $a=0.01$, $r_f=0.05$ and suppose the investor must absorb two units in an equilibrium with this representative investor. Then $p=(110-0.01(2)(400))/1.05\\approx97.14$. Expected return is about 13.24%, including an 8.24 percentage point premium over the risk free rate."
          }
        </MathText>
      </p>
      <p>
        The normal payoff here can be negative; it is an analytic risk model,
        not a limited liability stock price model. The risk aversion coefficient
        has inverse wealth units.
      </p>
      <p>
        <MathText>
          {
            "For jointly normal vector payoffs with positive definite covariance, the same calculation gives $h^*=(1/a)\\Sigma_F^{-1}[\\mu_F-(1+r_f)p]$. Covariance with the whole position determines marginal risk. Under the additional market equilibrium assumptions in the application reading, this leads to the CAPM beta relation discussed in Lecture 4."
          }
        </MathText>
      </p>
    </section>
  );
}
