import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function ScalingSection() {
  return (
    <section id="scaling" className={styles.section}>
      <span className={styles.sectionNumber}>
        03 / HOW MUCH HISTORY AND HOW MUCH TIME?
      </span>
      <h2>Horizon and model risk</h2>
      <p>
        <MathText>
          {
            "For normally distributed loss $L\\sim N(\\mu,\\sigma^2)$, write $z_\\alpha=\\Phi^{-1}(\\alpha)$. Then:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\operatorname{VaR}_\\alpha=\\mu+\\sigma z_\\alpha,\\qquad\\operatorname{ES}_\\alpha=\\mu+\\sigma\\frac{\\phi(z_\\alpha)}{1-\\alpha}."
        }
      </Equation>
      <p>
        Historical simulation instead revalues the current portfolio under
        selected past shocks. Choices of history window, shock scaling, weights
        and revaluation method affect the estimate. A model is not validated
        merely by reproducing losses on its training period.
      </p>
      <h3>Original time scaling check</h3>
      <p>
        <MathText>
          {
            "If daily losses are independent normal with mean $\\mu$ and variance $\\sigma^2$, a T day sum has mean $T\\mu$ and variance $T\\sigma^2$. Square root scaling applies to the standard deviation term; a nonzero mean scales linearly. With two daily losses correlated at 0.25, their total variance is $2\\sigma^2(1+0.25)=2.5\\sigma^2$, rather than $2\\sigma^2$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "For a stationary sequence with autocovariance $\\gamma_k$, $\\operatorname{Var}(\\sum_{t=1}^T L_t)=T\\gamma_0+2\\sum_{k=1}^{T-1}(T-k)\\gamma_k$. Dependence, fat tails and changing volatility can all undermine naive horizon extrapolation."
          }
        </MathText>
      </p>
      <p>
        For linear exposure δ and factor covariance C, loss variance is δᵀCδ.
        With material nonlinear payoffs, a Gaussian factor model plus a
        quadratic payoff is generally not itself Gaussian; moment matching is an
        approximation.
      </p>
    </section>
  );
}
