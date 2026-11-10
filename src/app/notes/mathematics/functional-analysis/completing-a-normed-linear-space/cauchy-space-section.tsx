import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function CauchySpaceSection() {
  return (
    <section id="cauchy-space" className={styles.section}>
      <span className={styles.sectionNumber}>02 / LECTURE 4</span>
      <h2>The vector space of Cauchy sequences</h2>
      <p>
        <MathText>
          {
            "Fix a normed linear space $X$ over $\\mathbb K=\\mathbb R$ or $\\mathbb C$. Form a new space $Z$ whose elements are Cauchy sequences in $X$:"
          }
        </MathText>
      </p>
      <Equation>
        {"Z=\\{(x_j)_{j\\geq1}:x_j\\in X,\\ (x_j)\\text{ is Cauchy in }X\\}."}
      </Equation>
      <p>
        <MathText>
          {
            "Addition and scalar multiplication act term by term. To verify closure, take $(x_j),(u_j)\\in Z$ and $\\alpha\\in\\mathbb K$. For large $j,k$,"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|(\\alpha x_j+u_j)-(\\alpha x_k+u_k)\\|\\leq|\\alpha|\\,\\|x_j-x_k\\|+\\|u_j-u_k\\|."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Both terms on the right tend to zero as $j,k\\to\\infty$. Thus $(\\alpha x_j+u_j)$ is Cauchy, so $Z$ is a linear space."
          }
        </MathText>
      </p>
      <h3>Constant sequences represent the original vectors</h3>
      <p>
        <MathText>
          {
            "Associate $x\\in X$ with the constant sequence $c(x)=(x,x,x,\\ldots)$. Constant sequences are Cauchy and form a subspace $X_0\\subseteq Z$. The map $c:X\\to X_0$ is a linear bijection. This is the first step toward embedding $X$ into its completion."
          }
        </MathText>
      </p>
    </section>
  );
}
