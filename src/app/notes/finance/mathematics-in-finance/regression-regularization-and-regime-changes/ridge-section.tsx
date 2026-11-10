import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RidgeSection() {
  return (
    <section id="ridge" className={styles.section}>
      <span className={styles.sectionNumber}>02 / SHRINK WEAK DIRECTIONS</span>
      <h2>Ridge and unstable directions</h2>
      <p>
        <MathText>
          {
            "Use centred y and centred, appropriately scaled predictor columns; treat the intercept separately. Ridge minimises $\\|y-Xb\\|^2+\\lambda\\|b\\|^2$ with $\\lambda\\ge0$. Differentiating gives the normal equations $(X^TX+\\lambda I)b=X^Ty$."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Ridge trades bias for variance">
        <Equation>
          {
            "\\widehat\\beta_\\lambda=(X^TX+\\lambda I)^{-1}X^Ty,\\qquad\\widehat y_\\lambda=U\\operatorname{diag}\\left(\\frac{d_i^2}{d_i^2+\\lambda}\\right)U^Ty."
          }
        </Equation>
        <p>
          The second expression uses a reduced SVD X = UDVᵀ. Positive λ makes
          the coefficient problem well defined even when X is rank deficient.
          Small singular directions receive more shrinkage.
        </p>
      </NoteBox>
      <h3>Original diagonal example</h3>
      <p>
        <MathText>
          {
            "Suppose $X^TX=\\operatorname{diag}(100,1)$ and $X^Ty=(100,1)^T$. OLS gives $(1,1)^T$. Ridge with $\\lambda=9$ gives $(100/109,1/10)^T\\approx(0.9174,0.1)^T$. The weak second direction is shrunk much more."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Under zero conditional mean errors and covariance $\\sigma^2I$, the expected ridge estimate is $(X^TX+\\lambda I)^{-1}X^TX\\beta$, and its covariance is $\\sigma^2(X^TX+\\lambda I)^{-1}X^TX(X^TX+\\lambda I)^{-1}$. Lower variance does not by itself mean lower total prediction error: bias also matters."
          }
        </MathText>
      </p>
      <p>
        The numerical example isolates the spectral effect. It does not imply
        that every predictor should be left on its original scale; the penalty
        changes when units change, which is why scaling is an explicit modelling
        choice.
      </p>
    </section>
  );
}
