import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function Section3Section() {
  return (
    <section id="section-3" className={styles.section}>
      <span className={styles.sectionNumber}>04 / LECTURE 1</span>
      <h2>Linear subspaces</h2>
      <p>
        <MathText>{"Fix a linear space $X$ over $\\mathbb K$. A "}</MathText>
        <strong>{"linear subspace"}</strong>
        <MathText>
          {
            " $Y$ is a nonempty subset of $X$ closed under the following operation: for any two elements $x$, $y$ of $Y$ and any scalar $\\alpha$, the vector $\\alpha x+y$ belongs to $Y$."
          }
        </MathText>
      </p>
      <Equation>
        {
          "x,y\\in Y,\\ \\alpha\\in\\mathbb K\\quad\\Longrightarrow\\quad\\alpha x+y\\in Y."
        }
      </Equation>
      <p>
        <strong>{"Important condition."}</strong>
        <MathText>
          {
            " Nonemptiness is needed: the closure condition alone would also hold vacuously for the empty set, which is not a vector space. For nonempty $Y$, the condition guarantees that $Y$ contains zero and additive inverses and is closed under addition and scalar multiplication."
          }
        </MathText>
      </p>
      <Equation>
        {
          "0=(-1)x+x\\in Y,\\qquad\n\\alpha x=\\alpha x+0\\in Y,\\qquad\nx+y=1x+y\\in Y."
        }
      </Equation>
      <p>
        <MathText>
          {"All remaining vector space identities are inherited from $X$."}
        </MathText>
      </p>
    </section>
  );
}
