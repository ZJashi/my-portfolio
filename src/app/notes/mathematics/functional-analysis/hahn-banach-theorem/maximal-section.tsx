import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function MaximalSection() {
  return (
    <section id="maximal" className={styles.section}>
      <span className={styles.sectionNumber}>10 / LECTURE 9</span>
      <h2>The maximal extension has full domain</h2>
      <p>
        <MathText>
          {
            "By Zorn’s lemma, $\\mathcal E$ has a maximal element $(V_*,f_*)$. Suppose $V_*\\ne X$. Choose $z\\in X\\setminus V_*$. Apply the one-dimensional extension step with $V_*$ in place of $Y$ and $f_*$ in place of $\\ell$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "It produces a linear functional on $V_*+\\mathbb R z$, agreeing with $f_*$ and still dominated by $p$. This is another member of $\\mathcal E$, strictly larger than $(V_*,f_*)$ because its domain contains $z$. That contradicts maximality."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="The global extension">
        <p>
          <MathText>
            {
              "The maximal domain must equal $X$. Setting $L=f_*$ gives the required functional."
            }
          </MathText>
        </p>
        <Equation>
          {
            "L:X\\to\\mathbb R,\\qquad L\\text{ linear},\\qquad L|_Y=\\ell,\\qquad L\\leq p."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The two parts of the proof play different roles. Zorn’s lemma yields an extension with no strict enlargement in the admissible family. The one-dimensional construction shows that any proper domain would still permit such an enlargement. Together they force a full-domain extension."
          }
        </MathText>
      </p>
    </section>
  );
}
