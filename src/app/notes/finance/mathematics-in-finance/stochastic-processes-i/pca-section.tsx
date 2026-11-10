import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function PcaSection() {
  return (
    <section id="pca" className={styles.section}>
      <span className={styles.sectionNumber}>01 / PROBABILITY CONTINUED</span>
      <h2>PCA as a variance problem</h2>
      <p>
        <MathText>
          {
            "Let $R\\in\\mathbb R^m$ have mean $\\mu$ and finite covariance $\\Sigma$. A unit vector w defines the centred component $Z=w^T(R-\\mu)$ with variance $w^T\\Sigma w$. The unit length constraint prevents arbitrarily increasing variance just by multiplying w."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="The direction of greatest variance">
        <Equation>
          {
            "\\max_{w^Tw=1}w^T\\Sigma w=\\lambda_1,\\qquad\\Sigma q_1=\\lambda_1q_1,\\qquad\\lambda_1\\ge\\lambda_2\\ge\\cdots\\ge0."
          }
        </Equation>
        <p>
          The second direction maximises variance subject to unit length and
          orthogonality to the first. Continue in the orthogonal complement to
          obtain all components.
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "To prove the maximum, use the orthonormal eigenbasis $\\Sigma=Q\\Lambda Q^T$ and write $w=Qa$. Then $a^Ta=1$ and $w^T\\Sigma w=\\sum_i\\lambda_i a_i^2\\le\\lambda_1$. Equality holds at the leading eigenvector. If eigenvalues repeat, the basis inside their eigenspace need not be unique."
          }
        </MathText>
      </p>
      <h3>Original three factor example</h3>
      <p>
        Suppose covariance eigenvalues are 9, 4 and 1 in squared percentage
        point units. Total variance is 14. One component retains 64.29%; two
        retain 92.86%. The expected squared reconstruction error after retaining
        two components is 1.
      </p>
      <Equation>
        {
          "\\widehat R_K=\\mu+\\sum_{i=1}^Kq_iZ_i,\\qquad\\mathbb E\\|R-\\widehat R_K\\|_2^2=\\sum_{i>K}\\lambda_i."
        }
      </Equation>
      <p>
        <MathText>
          {
            "For centred data $X_c\\in\\mathbb R^{m\\times T}$ and reduced SVD $X_c=UDV^T$, the covariance $X_cX_c^T/T=UD^2U^T/T$. Its eigenvalues are $d_i^2/T$. PCA captures variability, rather than selecting a portfolio with a budget constraint or maximising expected return."
          }
        </MathText>
      </p>
    </section>
  );
}
