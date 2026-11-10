import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function LassoSection() {
  return (
    <section id="lasso" className={styles.section}>
      <span className={styles.sectionNumber}>04 / SPARSE COEFFICIENTS</span>
      <h2>Lasso and model selection</h2>
      <Equation>
        {
          "\\widehat\\beta_{\\mathrm{lasso}}=\\arg\\min_b\\left\\{\\|y-Xb\\|^2+\\lambda\\sum_j|b_j|\\right\\}."
        }
      </Equation>
      <p>
        The L1 penalty can set coefficients exactly to zero. The criterion is
        convex but not differentiable at zero; optimality uses subgradients.
        Coefficients can be nonunique with dependent predictors, even when
        fitted values are unique.
      </p>
      <h3>Original orthonormal calculation</h3>
      <p>
        <MathText>
          {
            "If $X^TX=I$, write $c=X^Ty$. Each coefficient minimises $(b_j-c_j)^2+\\lambda|b_j|$, giving soft thresholding:"
          }
        </MathText>
      </p>
      <Equation>
        {"\\widehat b_j=\\operatorname{sign}(c_j)\\max(|c_j|-\\lambda/2,0)."}
      </Equation>
      <p>
        For c = (2,0.3,−1) and λ = 1, the answer is (1.5,0,−0.5). The λ/2
        threshold follows from the exact objective written here; software that
        divides squared error by 2n uses a different penalty scale.
      </p>
      <p>
        Do not apply ordinary OLS t tests directly to selected lasso
        coefficients as if the model had been fixed in advance. Tuning and
        variable selection use the same data and affect inference. Correlated
        predictors can also lead to unstable choices of which variable is
        retained.
      </p>
    </section>
  );
}
