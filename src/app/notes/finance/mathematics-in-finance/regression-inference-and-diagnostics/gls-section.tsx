import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function GlsSection() {
  return (
    <section id="gls" className={styles.section}>
      <span className={styles.sectionNumber}>
        06 / UNEQUAL OR CORRELATED ERRORS
      </span>
      <h2>Gauss–Markov and generalised least squares</h2>
      <NoteBox
        kind="result"
        title="Best linear unbiased under the stated covariance"
      >
        <p>
          <MathText>
            {
              "With full rank X, $\\mathbb E[\\varepsilon\\mid X]=0$ and $\\operatorname{Cov}(\\varepsilon\\mid X)=\\sigma^2I$, OLS has minimum covariance among estimators linear in y and unbiased for every $\\beta$. Gaussian errors are not required for this Gauss–Markov statement."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "Write an alternative linear unbiased estimator as $(A+D)y$ where $A=(X^TX)^{-1}X^T$ and $DX=0$. The cross covariance terms vanish because $AD^T=CX^TD^T=0$. Its covariance is $\\sigma^2C+\\sigma^2DD^T$, which cannot improve on OLS."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "If instead covariance is $\\sigma^2\\Omega$ with known positive definite $\\Omega$, whiten using a matrix L satisfying $L\\Omega L^T=I$. Fit least squares to Ly and LX. This gives:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\widehat\\beta_{\\mathrm{GLS}}=(X^T\\Omega^{-1}X)^{-1}X^T\\Omega^{-1}y."
        }
      </Equation>
      <h3>Original weighted mean example</h3>
      <p>
        <MathText>
          {
            "For an intercept only model, observations 10 and 14 have independent variances 1 and 4. Weights are inversely proportional to variance, so the fitted mean is $(10+14/4)/(1+1/4)=10.8$, compared with the unweighted mean 12. The known variance of this weighted estimate is $1/(1+1/4)=0.8$."
          }
        </MathText>
      </p>
      <p>
        Feasible GLS estimates the covariance structure rather than assuming it
        known; that adds uncertainty. Heteroscedasticity consistent or serial
        dependence robust standard errors are another approach to inference, but
        they do not repair a misspecified conditional mean or endogeneity.
      </p>
    </section>
  );
}
