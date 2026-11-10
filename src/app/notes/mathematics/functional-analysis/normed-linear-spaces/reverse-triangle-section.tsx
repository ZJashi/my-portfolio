import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ReverseTriangleSection() {
  return (
    <section id="reverse-triangle" className={styles.section}>
      <span className={styles.sectionNumber}>02 / LECTURE 3</span>
      <h2>Symmetry and the reverse triangle inequality</h2>
      <h3>A vector and its negative have the same norm</h3>
      <p>
        <MathText>{"Absolute homogeneity with the scalar $-1$ gives"}</MathText>
      </p>
      <Equation>{"\\|-x\\|=\\|(-1)x\\|=|-1|\\,\\|x\\|=\\|x\\|."}</Equation>
      <p>
        <MathText>
          {
            "In particular, $\\|u-x\\|=\\|x-u\\|$. This identity lets us exchange the order of a difference without changing its norm."
          }
        </MathText>
      </p>
      <h3>The difference of sizes is bounded by the size of the difference</h3>
      <p>
        <MathText>
          {"Write $x=(x-u)+u$ and apply the triangle inequality:"}
        </MathText>
      </p>
      <Equation>
        {"\\|x\\|\\leq\\|x-u\\|+\\|u\\|,\\qquad \\|x\\|-\\|u\\|\\leq\\|x-u\\|."}
      </Equation>
      <p>
        <MathText>
          {
            "Exchange $x$ and $u$ to obtain $\\|u\\|-\\|x\\|\\leq\\|u-x\\|=\\|x-u\\|$. Both signs of the difference are therefore bounded by the same quantity."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Reverse triangle inequality">
        <Equation>{"\\bigl|\\|x\\|-\\|u\\|\\bigr|\\leq\\|x-u\\|."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The expression on the left is the absolute value of a real number; the expression on the right is the norm of a vector. Consequently, convergence in norm implies convergence of the corresponding real-valued norms."
          }
        </MathText>
      </p>
    </section>
  );
}
