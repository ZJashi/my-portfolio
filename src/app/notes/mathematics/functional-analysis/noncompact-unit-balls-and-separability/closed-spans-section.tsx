import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function ClosedSpansSection() {
  return (
    <section id="closed-spans" className={styles.section}>
      <span className={styles.sectionNumber}>04 / LECTURE 7</span>
      <h2>Finite dimensional subspaces are closed</h2>
      <p>
        <MathText>
          {
            "To apply the lemma repeatedly, we need to know that the span of finitely many selected vectors is closed in the ambient space. Let $z_1,\\ldots,z_n$ be linearly independent and set"
          }
        </MathText>
      </p>
      <Equation>{"Y_n=\\operatorname{span}\\{z_1,\\ldots,z_n\\}."}</Equation>
      <p>
        <MathText>
          {
            "Suppose $x_k\\in Y_n$ converges in $X$ to $x$. Express each term in the basis of $Y_n$:"
          }
        </MathText>
      </p>
      <Equation>{"x_k=\\sum_{j=1}^{n}\\alpha_j(x_k)z_j."}</Equation>
      <p>
        <MathText>
          {
            "The convergent sequence is bounded. The finite dimensional coordinate estimate from Lecture 5 gives"
          }
        </MathText>
      </p>
      <Equation>{"\\sum_{j=1}^{n}|\\alpha_j(x_k)|\\leq C\\|x_k\\|."}</Equation>
      <p>
        <MathText>
          {
            "Hence each scalar coordinate sequence is bounded. Extract a common subsequence $k_\\ell$ for which all coordinates converge, say $\\alpha_j(x_{k_\\ell})\\to a_j$. Then"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\left\\|x_{k_\\ell}-\\sum_{j=1}^{n}a_jz_j\\right\\|\\leq\\sum_{j=1}^{n}|\\alpha_j(x_{k_\\ell})-a_j|\\,\\|z_j\\|\\longrightarrow0."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The same subsequence also converges to $x$. Uniqueness of limits implies $x=\\sum_j a_jz_j\\in Y_n$. Thus $Y_n$ contains all its limits in $X$, so it is closed. No completeness assumption on the ambient space was needed."
          }
        </MathText>
      </p>
    </section>
  );
}
