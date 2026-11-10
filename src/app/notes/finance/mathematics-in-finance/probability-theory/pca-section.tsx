import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function PcaSection() {
  return (
    <section id="pca" className={styles.section}>
      <span className={styles.sectionNumber}>
        07 / ROTATING THE RISK COORDINATES
      </span>
      <h2>Principal components</h2>
      <p>
        <MathText>
          {
            "Because covariance is symmetric positive semidefinite, write $\\Sigma=Q\\Lambda Q^T$, where Q is orthogonal and eigenvalues are nonnegative. Centre before projecting: $Z=Q^T(R-\\mu)$. Then:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\mathbb E[Z]=0,\\qquad\\operatorname{Cov}(Z)=Q^T\\Sigma Q=\\Lambda,\\qquad R=\\mu+QZ."
        }
      </Equation>
      <p>
        Principal components are uncorrelated. They are independent if the
        original vector is jointly Gaussian; uncorrelatedness alone is not
        enough.
      </p>
      <h3>Original example with common and opposing moves</h3>
      <Equation>
        {
          "\\Sigma=\\begin{pmatrix}0.04&0.03\\\\0.03&0.04\\end{pmatrix},\\quad q_1=\\frac1{\\sqrt2}\\begin{pmatrix}1\\\\1\\end{pmatrix},\\quad q_2=\\frac1{\\sqrt2}\\begin{pmatrix}1\\\\-1\\end{pmatrix},\\quad\\lambda_1=0.07,\\quad\\lambda_2=0.01."
        }
      </Equation>
      <p>
        The first component measures a common move; the second measures a
        spread. Total variance is 0.08, so the common component explains 87.5%.
        Keeping it alone discards expected squared reconstruction error 0.01.
        PCA chooses maximum variance directions under a unit length constraint,
        not maximum expected return portfolios.
      </p>
      <p>
        <MathText>
          {
            "For data with assets in rows and observations in columns, centre each row to get $X_c\\in\\mathbb R^{m\\times T}$. Using divisor T, $\\widehat\\Sigma=X_cX_c^T/T$. If $X_c=UDV^T$, then covariance eigenvectors are columns of U and eigenvalues are $d_i^2/T$. Divisor $T-1$ is another common convention and changes eigenvalues accordingly. Scaling variables before PCA changes the problem."
          }
        </MathText>
      </p>
    </section>
  );
}
