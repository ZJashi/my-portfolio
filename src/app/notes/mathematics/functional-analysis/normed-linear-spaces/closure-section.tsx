import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function ClosureSection() {
  return (
    <section id="closure" className={styles.section}>
      <span className={styles.sectionNumber}>08 / LECTURE 3</span>
      <h2>The closure of a linear subspace</h2>
      <p>
        <MathText>
          {
            "The closure of a subset $Y$ consists of the points of the ambient space that can be approximated by sequences from $Y$:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\overline Y=\\{x\\in X:\\text{there is }(y_n)\\subseteq Y\\text{ with }\\|y_n-x\\|\\to0\\}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "If $Y$ is a linear subspace, its closure is also a linear subspace. This gives another normed linear space by restricting the norm of $X$ to $\\overline Y$."
          }
        </MathText>
      </p>
      <div className={styles.exercise}>
        <h3>4. Show that the closure is a subspace</h3>
        <p>
          <MathText>
            {
              "For $x,u\\in\\overline Y$ and $\\alpha\\in\\mathbb K$, prove that $\\alpha x+u\\in\\overline Y$."
            }
          </MathText>
        </p>
        <details>
          <summary>Show solution</summary>
          <p>
            <MathText>
              {
                "Choose sequences $y_n,v_n\\in Y$ with $y_n\\to x$ and $v_n\\to u$. Each $\\alpha y_n+v_n$ belongs to $Y$, and"
              }
            </MathText>
          </p>
          <Equation>
            {
              "\\|(\\alpha y_n+v_n)-(\\alpha x+u)\\|\\leq|\\alpha|\\,\\|y_n-x\\|+\\|v_n-u\\|\\longrightarrow0."
            }
          </Equation>
          <p>
            <MathText>
              {
                "Thus $\\alpha x+u$ is a limit of points of $Y$ and belongs to $\\overline Y$. The closure is nonempty because it contains $Y$, establishing the subspace test."
              }
            </MathText>
          </p>
        </details>
      </div>
      <p>
        <MathText>
          {
            "The closure is taken inside $X$: only limits that belong to the ambient space enter $\\overline Y$. This construction alone does not assert that $X$ or $\\overline Y$ is complete."
          }
        </MathText>
      </p>
    </section>
  );
}
