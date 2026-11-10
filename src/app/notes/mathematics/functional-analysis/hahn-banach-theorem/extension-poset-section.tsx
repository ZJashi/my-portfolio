import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function ExtensionPosetSection() {
  return (
    <section id="extension-poset" className={styles.section}>
      <span className={styles.sectionNumber}>08 / LECTURE 9</span>
      <h2>Order all dominated extensions</h2>
      <p>
        <MathText>
          {
            "To extend to the whole space, consider the set $\\mathcal E$ of pairs $(V,f)$ where $V$ is a linear subspace with $Y\\subseteq V\\subseteq X$, and $f:V\\to\\mathbb R$ satisfies"
          }
        </MathText>
      </p>
      <ul className={styles.takeaways}>
        <li>
          <strong>Linearity.</strong>{" "}
          <MathText>{"$f$ is real linear."}</MathText>
        </li>
        <li>
          <strong>Agreement.</strong> <MathText>{"$f|_Y=\\ell$."}</MathText>
        </li>
        <li>
          <strong>Domination.</strong>{" "}
          <MathText>{"$f(v)\\leq p(v)$ for all $v\\in V$."}</MathText>
        </li>
      </ul>
      <p>
        <MathText>
          {
            "This set is nonempty because $(Y,\\ell)\\in\\mathcal E$. Order it by extension:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "(V_1,f_1)\\preceq(V_2,f_2)\\quad\\Longleftrightarrow\\quad V_1\\subseteq V_2\\text{ and }f_2|_{V_1}=f_1."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The agreement condition is as important as domain inclusion. A larger domain with inconsistent values is not an extension."
          }
        </MathText>
      </p>
      <h3>Verification of the partial order</h3>
      <p>
        <MathText>
          {
            "Every pair extends itself. If each pair extends the other, their domains coincide and the functions agree, so the pairs are equal. If a third pair extends the second and the second extends the first, restriction shows that the third extends the first. Thus the relation is reflexive, antisymmetric and transitive."
          }
        </MathText>
      </p>
    </section>
  );
}
