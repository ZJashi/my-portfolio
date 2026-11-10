import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function CovarianceSection() {
  return (
    <section id="covariance" className={styles.section}>
      <span className={styles.sectionNumber}>06 / JOINT VARIATION</span>
      <h2>Covariance and portfolio risk</h2>
      <NoteBox title="Covariance records how centred outcomes move together">
        <Equation>
          {
            "\\operatorname{Cov}(X,Y)=\\mathbb E[(X-\\mu_X)(Y-\\mu_Y)],\\qquad\\rho_{XY}=\\frac{\\operatorname{Cov}(X,Y)}{\\sigma_X\\sigma_Y}."
          }
        </Equation>
        <p>
          Assume finite second moments. Correlation requires both standard
          deviations to be positive. Independence implies zero covariance; the
          converse generally fails.
        </p>
      </NoteBox>
      <p>
        <strong>Original dependence example.</strong>
        <MathText>
          {
            " Let X take $-1,0,1$ with equal probability and set $Y=X^2$. Then $\\mathbb E[X]=\\mathbb E[X^3]=0$, so covariance is zero. But observing Y tells us whether X is zero. The variables are dependent despite zero correlation."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Risk of a weighted sum">
        <Equation>
          {
            "\\mu=\\mathbb E[R],\\quad\\Sigma=\\mathbb E[(R-\\mu)(R-\\mu)^T],\\qquad\\mathbb E[w^TR]=w^T\\mu,\\quad\\operatorname{Var}(w^TR)=w^T\\Sigma w."
          }
        </Equation>
        <p>
          Weights are fixed before returns are realised. Returns use a common
          period and convention. This identity does not require a normal
          distribution.
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "To derive it, centre the portfolio return: $w^T(R-\\mu)$. Its square is $w^T(R-\\mu)(R-\\mu)^Tw$; expectation leaves $w^T\\Sigma w$. This is nonnegative for every w, proving positive semidefiniteness."
          }
        </MathText>
      </p>
      <h3>Original diversification calculation</h3>
      <p>
        Two assets have period standard deviations of 20% and 10%, and
        correlation 0.25. An equally weighted portfolio has variance 0.015 and
        standard deviation 12.25%.
      </p>
      <Equation>
        {
          "\\Sigma=\\begin{pmatrix}0.04&0.005\\\\0.005&0.01\\end{pmatrix},\\quad w=\\begin{pmatrix}0.5\\\\0.5\\end{pmatrix},\\quad w^T\\Sigma w=0.25(0.04)+0.25(0.01)+2(0.25)(0.005)=0.015."
        }
      </Equation>
      <p>
        If correlation were 1, the same weights would give standard deviation
        15%. Diversification reduces risk here because the returns do not move
        perfectly together. The covariance terms must be included twice when
        expanding the quadratic form.
      </p>
    </section>
  );
}
