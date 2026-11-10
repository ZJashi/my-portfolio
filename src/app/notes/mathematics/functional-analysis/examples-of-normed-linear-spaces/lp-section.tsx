import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function LpSection() {
  return (
    <section id="lp" className={styles.section}>
      <span className={styles.sectionNumber}>04 / LECTURE 6</span>
      <h2>Summable sequences</h2>
      <p>
        <MathText>
          {
            "For a finite exponent $1\\leq p<\\infty$, define the sequence space $\\ell^p$ and its candidate norm by"
          }
        </MathText>
      </p>
      <NoteBox
        kind="definition"
        title="The sequence space with summable pth powers"
      >
        <Equation>
          {
            "\\ell^p=\\left\\{a=(a_j):\\sum_{j=1}^{\\infty}|a_j|^p<\\infty\\right\\},\\qquad \\|a\\|_p=\\left(\\sum_{j=1}^{\\infty}|a_j|^p\\right)^{1/p}."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "For the main Hölder argument take $p>1$; the endpoint $p=1$ has a direct proof. Lowercase script $\\ell$ denotes sequences, while uppercase $L$ will denote functions with integral norms."
          }
        </MathText>
      </p>
      <h3>Closure under the vector space operations</h3>
      <p>
        <MathText>
          {
            "Scalar multiplication satisfies $\\sum_j|\\alpha a_j|^p=|\\alpha|^p\\sum_j|a_j|^p<\\infty$. For addition, a simple bound suffices:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\begin{aligned}|a_j+b_j|^p&\\leq(|a_j|+|b_j|)^p\\\\&\\leq2^p\\max\\{|a_j|^p,|b_j|^p\\}\\\\&\\leq2^p(|a_j|^p+|b_j|^p).\\end{aligned}"
        }
      </Equation>
      <p>
        <MathText>
          {
            "Summing shows $a+b\\in\\ell^p$. This estimate proves closure; its constant is not the sharp norm triangle inequality. Definiteness and absolute homogeneity of $\\|\\cdot\\|_p$ follow immediately from the nonnegative sum. The triangle inequality needs a stronger argument."
          }
        </MathText>
      </p>
    </section>
  );
}
