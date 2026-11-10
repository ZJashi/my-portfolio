import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function NormAxiomsSection() {
  return (
    <section id="norm-axioms" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 4</span>
      <h2>Verifying the norm axioms</h2>
      <h3>Nonnegativity and definiteness</h3>
      <p>
        <MathText>
          {
            "Every term $\\|x_j\\|_X$ is nonnegative, so its limit is nonnegative. The norm of $[(x_j)]$ is zero exactly when $\\|x_j\\|_X\\to0$, which means $(x_j)\\in Y$. In the quotient, this is exactly the zero class. Conversely, every representative of the zero class is a null sequence and has norm zero."
          }
        </MathText>
      </p>
      <h3>Absolute homogeneity</h3>
      <Equation>
        {
          "\\begin{aligned}\\bigl\\|\\alpha[(x_j)]\\bigr\\|_{\\widehat X}&=\\lim_j\\|\\alpha x_j\\|_X\\\\&=|\\alpha|\\lim_j\\|x_j\\|_X\\\\&=|\\alpha|\\,\\bigl\\|[(x_j)]\\bigr\\|_{\\widehat X}.\\end{aligned}"
        }
      </Equation>
      <p>
        <MathText>
          {"This includes $\\alpha=0$; no division by the scalar is needed."}
        </MathText>
      </p>
      <h3>Triangle inequality</h3>
      <Equation>
        {
          "\\begin{aligned}\\bigl\\|[(x_j)]+[(u_j)]\\bigr\\|_{\\widehat X}&=\\lim_j\\|x_j+u_j\\|_X\\\\&\\leq\\lim_j\\bigl(\\|x_j\\|_X+\\|u_j\\|_X\\bigr)\\\\&=\\bigl\\|[(x_j)]\\bigr\\|_{\\widehat X}+\\bigl\\|[(u_j)]\\bigr\\|_{\\widehat X}.\\end{aligned}"
        }
      </Equation>
      <p>
        <MathText>
          {"All three axioms hold, so $\\widehat X$ is a normed linear space."}
        </MathText>
      </p>
      <NoteBox kind="definition" title="Why the quotient is necessary">
        <p>
          <MathText>
            {
              "On $Z$ itself, $(x_j)\\mapsto\\lim_j\\|x_j\\|_X$ is only a seminorm: a nonzero sequence can converge to zero. For example, $(x/j)$ has limiting norm zero even when $x\\ne0$. Passing to $Z/Y$ identifies all such null sequences with zero and restores definiteness."
            }
          </MathText>
        </p>
      </NoteBox>
    </section>
  );
}
