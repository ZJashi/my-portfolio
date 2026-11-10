import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function LimitsSection() {
  return (
    <section id="limits" className={styles.section}>
      <span className={styles.sectionNumber}>02 / WHAT AVERAGING CHANGES</span>
      <h2>Averages and limit theorems</h2>
      <p>
        <MathText>
          {
            "Let $X_1,X_2,\\ldots$ be iid with mean $\\mu$, finite variance $\\sigma^2$ and sample mean $\\bar X_n$. Independence removes cross covariances, giving $\\operatorname{Var}(\\bar X_n)=\\sigma^2/n$."
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\Pr(|\\bar X_n-\\mu|>\\varepsilon)\\le\\frac{\\sigma^2}{n\\varepsilon^2}\\longrightarrow0."
        }
      </Equation>
      <p>
        This Chebyshev bound proves the weak law of large numbers under these
        assumptions. The average converges in probability to its mean. It does
        not say that the unscaled sum stops fluctuating.
      </p>
      <NoteBox
        kind="result"
        title="The central limit theorem describes scaled fluctuations"
      >
        <Equation>
          {
            "\\frac{\\sqrt n(\\bar X_n-\\mu)}{\\sigma}\\Rightarrow N(0,1),\\qquad0<\\sigma^2<\\infty."
          }
        </Equation>
        <p>
          The iid finite variance theorem does not require a moment generating
          function. An MGF proof needs additional finiteness near zero. A large
          sample approximation can still be poor in far tails or for strongly
          skewed data.
        </p>
      </NoteBox>
      <h3>Original scale calculation</h3>
      <p>
        <MathText>
          {
            "For iid observations with standard deviation 12 and $n=100$, the sample mean has standard deviation 1.2. At $n=400$ it is 0.6. Reducing standard error by half requires four times as many observations. A normal approximation gives $\\Pr(|\\bar X_{100}-\\mu|\\le2.352)\\approx0.95$; Chebyshev only guarantees at least $1-1.44/2.352^2\\approx0.7397$."
          }
        </MathText>
      </p>
      <p>
        These are different claims: a distributional approximation and a
        conservative bound. Financial observations can be dependent or
        nonstationary, so the iid standard error cannot simply be assumed for a
        return series.
      </p>
    </section>
  );
}
