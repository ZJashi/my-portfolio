import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function ProductExercisesSection() {
  return (
    <section id="product-exercises" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 3</span>
      <h2>Exercises on the product norms</h2>
      <div className={styles.exercise}>
        <h3>1. Verify the sum and maximum norms</h3>
        <p>
          <MathText>
            {
              "Check definiteness, absolute homogeneity and the triangle inequality for $P_1$ and $P_\\infty$."
            }
          </MathText>
        </p>
        <details>
          <summary>Show solution</summary>
          <p>
            <MathText>
              {
                "Both expressions are nonnegative and vanish only when both component norms vanish, which means $x_1=x_2=0$. Absolute homogeneity follows by factoring out $|\\alpha|$ in each component."
              }
            </MathText>
          </p>
          <p>
            <MathText>
              {
                "For the sum norm, apply the component triangle inequalities and collect terms:"
              }
            </MathText>
          </p>
          <Equation>
            {"P_1(v+w)\\leq N_1(x_1)+N_1(u_1)+N_2(x_2)+N_2(u_2)=P_1(v)+P_1(w)."}
          </Equation>
          <p>
            <MathText>
              {
                "For the maximum norm, each component is at most the sum of the corresponding component norms, which is at most $P_\\infty(v)+P_\\infty(w)$. Taking the maximum preserves the bound."
              }
            </MathText>
          </p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>2. Verify the Euclidean combination norm</h3>
        <p>
          <MathText>{"Show that $P_2$ satisfies the norm axioms."}</MathText>
        </p>
        <details>
          <summary>Show solution</summary>
          <p>
            <MathText>
              {
                "Definiteness and absolute homogeneity follow directly from those of $N_1$ and $N_2$. For the triangle inequality, put $a_i=N_i(x_i)$ and $b_i=N_i(u_i)$. The component inequalities give"
              }
            </MathText>
          </p>
          <Equation>{"P_2(v+w)\\leq\\sqrt{(a_1+b_1)^2+(a_2+b_2)^2}."}</Equation>
          <p>
            <MathText>
              {
                "The ordinary Euclidean triangle inequality in $\\mathbb R^2$ bounds this by $\\sqrt{a_1^2+a_2^2}+\\sqrt{b_1^2+b_2^2}=P_2(v)+P_2(w)$. It follows, for example, by expanding the square and using $a_1b_1+a_2b_2\\leq\\sqrt{a_1^2+a_2^2}\\sqrt{b_1^2+b_2^2}$."
              }
            </MathText>
          </p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>3. Prove that the three norms are equivalent</h3>
        <p>
          <MathText>
            {
              "Find constants comparing $P_1$, $P_2$ and $P_\\infty$ for all vectors in the product."
            }
          </MathText>
        </p>
        <details>
          <summary>Show solution</summary>
          <Equation>
            {
              "P_\\infty(v)\\leq P_2(v)\\leq P_1(v)\\leq\\sqrt2\\,P_2(v)\\leq2P_\\infty(v)."
            }
          </Equation>
          <p>
            <MathText>
              {
                "For nonnegative $a,b$, the first two comparisons follow from $\\max\\{a,b\\}\\leq\\sqrt{a^2+b^2}\\leq a+b$. The bound $a+b\\leq\\sqrt2\\sqrt{a^2+b^2}$ follows by squaring and using $2ab\\leq a^2+b^2$. These constants do not depend on the vector, so every pair of norms is equivalent."
              }
            </MathText>
          </p>
        </details>
      </div>
    </section>
  );
}
