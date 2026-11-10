import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function ValidationSection() {
  return (
    <section id="validation" className={styles.section}>
      <span className={styles.sectionNumber}>
        05 / FREEZE THE ESTIMATED DIRECTIONS
      </span>
      <h2>Out of sample risk</h2>
      <p>
        <MathText>
          {
            "Let $Q_K$ come from a training window and $S_{\\mathrm{new}}$ be a later covariance. The fraction of later variance captured by those frozen directions is:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\mathrm{EVR}_{\\mathrm{new}}=\\frac{\\operatorname{tr}(Q_K^TS_{\\mathrm{new}}Q_K)}{\\operatorname{tr}(S_{\\mathrm{new}})}."
        }
      </Equation>
      <p>
        <strong>Original regime example.</strong> Training covariance diag(9,1)
        makes the first coordinate explain 90%. Later covariance diag(1,9) gives
        that same frozen direction only 10%. Recomputing the best direction on
        the later data and reporting its 90% would measure a refitted model, not
        validate the earlier one.
      </p>
      <p>
        Old scores can become correlated out of sample because the new
        covariance need not be diagonal in the old basis. Changing lookback
        length or weighting changes the estimator. Align eigenvector signs when
        comparing rolling loadings; for nearly tied eigenvalues, compare
        subspaces as well as individual vectors.
      </p>
      <p>
        <MathText>
          {
            "A compact measure of variance concentration is $D_{\\mathrm{eff}}=(\\sum_i\\lambda_i)^2/\\sum_i\\lambda_i^2$, when total variance is positive. For eigenvalues 9, 4, 1 it is $196/98=2$. This is an effective dimension of the covariance spectrum, not a literal count of independent assets or economic causes."
          }
        </MathText>
      </p>
    </section>
  );
}
