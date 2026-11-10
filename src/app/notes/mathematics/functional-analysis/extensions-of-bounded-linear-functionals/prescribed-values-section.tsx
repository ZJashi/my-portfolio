import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function PrescribedValuesSection() {
  return (
    <section id="prescribed-values" className={styles.section}>
      <span className={styles.sectionNumber}>02 / LECTURE 13</span>
      <h2>Prescribe values on independent vectors</h2>
      <NoteBox
        kind="result"
        title="Finite interpolation by a continuous functional"
      >
        <p>
          <MathText>
            {
              "If $x_1,\\ldots,x_n$ are linearly independent and $\\alpha_1,\\ldots,\\alpha_n\\in\\mathbb R$, there exists $L\\in X'$ with $L(x_j)=\\alpha_j$ for each $j$."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {"Let $Y=\\operatorname{span}\\{x_1,\\ldots,x_n\\}$ and define"}
        </MathText>
      </p>
      <Equation>
        {
          "\\ell\\!\\left(\\sum_{j=1}^n\\beta_jx_j\\right)=\\sum_{j=1}^n\\beta_j\\alpha_j."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Independence makes the coordinates unique, so this definition is well defined; it is linear. To prove boundedness, use the coordinate norm $\\|y\\|_0=\\sum_j|\\beta_j|$. With $C_1=\\max_j|\\alpha_j|$,"
          }
        </MathText>
      </p>
      <Equation>
        {
          "|\\ell(y)|\\leq C_1\\sum_{j=1}^n|\\beta_j|=C_1\\|y\\|_0\\leq C_1C_2\\|y\\|."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The last inequality is equivalence of norms on the finite dimensional space $Y$. Hahn–Banach now extends $\\ell$ to $X$. This argument explains why independence is necessary for arbitrary prescribed values: a relation between the vectors would impose the same relation between their images."
          }
        </MathText>
      </p>
    </section>
  );
}
