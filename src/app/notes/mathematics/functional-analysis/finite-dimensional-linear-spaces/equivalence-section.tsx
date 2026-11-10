import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function EquivalenceSection() {
  return (
    <section id="equivalence" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 5</span>
      <h2>Every norm is equivalent to the coordinate norm</h2>
      <h3>Bound the original norm by the coordinate norm</h3>
      <p>
        <MathText>
          {
            "Expand $x$ in the basis, apply the triangle inequality and use absolute homogeneity:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\begin{aligned}\\|x\\|&=\\left\\|\\sum_{j=1}^{n}\\alpha_j(x)z_j\\right\\|\\\\&\\leq\\sum_{j=1}^{n}|\\alpha_j(x)|\\,\\|z_j\\|\\\\&\\leq M\\|x\\|_0,\\qquad M=\\max_{1\\leq j\\leq n}\\|z_j\\|.\\end{aligned}"
        }
      </Equation>
      <p>
        <MathText>
          {
            "The maximum is finite because there are finitely many basis vectors."
          }
        </MathText>
      </p>
      <h3>Bound the coordinate norm by the original norm</h3>
      <p>
        <MathText>
          {
            "The coordinate estimate gives the reverse inequality $\\|x\\|_0\\leq C\\|x\\|$. Its normalized contradiction argument can be restated directly in norm notation: if the bound failed, choose $x_p$ with $\\|x_p\\|_0>p\\|x_p\\|$ and set $y_p=x_p/\\|x_p\\|_0$. Then $\\|y_p\\|_0=1$ but $\\|y_p\\|<1/p$. A common convergent coordinate subsequence would produce a nonzero coordinate limit whose vector is zero, contradicting independence."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Two-sided comparison">
        <Equation>
          {"C^{-1}\\|x\\|_0\\leq\\|x\\|\\leq M\\|x\\|_0\\qquad(x\\in X)."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The constants depend on the basis and the norm, but do not depend on the individual vector. This uniform comparison is exactly norm equivalence."
          }
        </MathText>
      </p>
    </section>
  );
}
