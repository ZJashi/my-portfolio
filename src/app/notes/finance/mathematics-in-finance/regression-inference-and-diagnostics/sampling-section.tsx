import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function SamplingSection() {
  return (
    <section id="sampling" className={styles.section}>
      <span className={styles.sectionNumber}>
        02 / FROM A FIT TO AN ESTIMATOR
      </span>
      <h2>Sampling uncertainty</h2>
      <p>
        <MathText>
          {
            "Now assume $\\mathbb E[\\varepsilon\\mid X]=0$ and $\\operatorname{Cov}(\\varepsilon\\mid X)=\\sigma^2I$. Because $\\widehat\\beta=\\beta+(X^TX)^{-1}X^T\\varepsilon$, its expectation is $\\beta$ and its covariance is $\\sigma^2(X^TX)^{-1}$. Exact normal inference adds $\\varepsilon\\mid X\\sim N_n(0,\\sigma^2I)$."
          }
        </MathText>
      </p>
      <NoteBox
        kind="result"
        title="Normal theory for coefficients and residuals"
      >
        <Equation>
          {
            "\\widehat\\beta\\mid X\\sim N_p(\\beta,\\sigma^2C),\\quad C=(X^TX)^{-1},\\qquad e\\mid X\\sim N_n(0,\\sigma^2(I-H))."
          }
        </Equation>
        <Equation>
          {
            "s^2=\\frac{e^Te}{n-p},\\qquad\\frac{(n-p)s^2}{\\sigma^2}\\sim\\chi^2_{n-p}."
          }
        </Equation>
        <p>
          The coefficient estimator and residual vector are independent under
          the normal model. Residuals themselves are generally correlated and
          have unequal variances, even when the underlying errors are iid.
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "For independence, compute the cross covariance $\\sigma^2(X^TX)^{-1}X^T(I-H)=0$. Joint normality upgrades zero covariance to independence. The projector $I-H$ has rank $n-p$, so its Gaussian quadratic form gives the chi squared result."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "In our example, $n=5$, $p=2$ and $s^2=0.4/3=2/15$. The slope standard error is $s\\sqrt{C_{22}}=\\sqrt{(2/15)/10}\\approx0.11547$; the intercept standard error is $\\sqrt{(2/15)/5}\\approx0.16330$."
          }
        </MathText>
      </p>
      <p>
        Under a Gaussian likelihood, the coefficient MLE is the same OLS fit,
        but the variance MLE is RSS/n. The unbiased variance estimator divides
        by n−p. These answer different estimation criteria.
      </p>
    </section>
  );
}
