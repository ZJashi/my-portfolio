import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function SubspacesSection() {
  return (
    <section id="subspaces" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 3</span>
      <h2>Subspaces and product spaces</h2>
      <h3>Restricting a norm to a subspace</h3>
      <p>
        <MathText>
          {
            "If $Y\\subseteq X$ is a linear subspace, the same function $\\|\\cdot\\|$, restricted to $Y$, satisfies all three norm axioms. Thus $(Y,\\|\\cdot\\|)$ is a normed linear space. Closedness is not required for this construction."
          }
        </MathText>
      </p>
      <h3>The product of two normed spaces</h3>
      <p>
        <MathText>
          {
            "Let $X_1$ and $X_2$ be normed linear spaces over the same field, with norms $N_1$ and $N_2$. Their product consists of ordered pairs $v=(x_1,x_2)$. Addition and scalar multiplication act coordinate by coordinate."
          }
        </MathText>
      </p>
      <Equation>
        {
          "(x_1,x_2)+(u_1,u_2)=(x_1+u_1,x_2+u_2),\\qquad \\alpha(x_1,x_2)=(\\alpha x_1,\\alpha x_2)."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Three natural norms on the product are the sum norm, maximum norm and Euclidean combination norm:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\begin{aligned}P_1(x_1,x_2)&=N_1(x_1)+N_2(x_2),\\\\P_\\infty(x_1,x_2)&=\\max\\{N_1(x_1),N_2(x_2)\\},\\\\P_2(x_1,x_2)&=\\sqrt{N_1(x_1)^2+N_2(x_2)^2}.\\end{aligned}"
        }
      </Equation>
      <p>
        <MathText>
          {
            "The names distinguish the three product norms from the norms on their component spaces. Each is a norm, and all three are equivalent. The following exercises verify these assertions."
          }
        </MathText>
      </p>
    </section>
  );
}
