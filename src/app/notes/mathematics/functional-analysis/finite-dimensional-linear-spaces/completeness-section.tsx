import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function CompletenessSection() {
  return (
    <section id="completeness" className={styles.section}>
      <span className={styles.sectionNumber}>09 / LECTURE 5</span>
      <h2>Finite dimensional normed spaces are complete</h2>
      <p>
        <MathText>
          {
            "Let $(x_p)$ be Cauchy in the original norm. Since $\\|x\\|_0\\leq C\\|x\\|$, it is also Cauchy in the coordinate norm:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|x_p-x_q\\|_0=\\sum_{j=1}^{n}|\\alpha_j(x_p)-\\alpha_j(x_q)|\\leq C\\|x_p-x_q\\|."
        }
      </Equation>
      <p>
        <MathText>
          {
            "For each fixed $j$, its coordinate difference is no larger than this sum. Therefore $(\\alpha_j(x_p))_p$ is a Cauchy sequence in $\\mathbb K$. Completeness of $\\mathbb R$ and $\\mathbb C$ gives a limit $a_j$ for every coordinate. These are limits of the whole coordinate sequences, not merely subsequential limits."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Define $x=\\sum_j a_jz_j$, which belongs to $X$. The sum has only finitely many terms, so"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|x_p-x\\|_0=\\sum_{j=1}^{n}|\\alpha_j(x_p)-a_j|\\longrightarrow0."}
      </Equation>
      <p>
        <MathText>
          {
            "Return to the original norm using $\\|x_p-x\\|\\leq M\\|x_p-x\\|_0\\to0$. Every Cauchy sequence converges to a point of $X$."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Finite dimensional spaces are Banach">
        <p>
          <MathText>
            {
              "Every finite dimensional normed linear space over $\\mathbb R$ or $\\mathbb C$ is complete, and hence is a Banach space."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "The key mechanism is finite coordinate control: finitely many complete scalar sequences determine a vector limit. Together with uniform norm comparison, this transfers scalar completeness to the entire space."
          }
        </MathText>
      </p>
    </section>
  );
}
