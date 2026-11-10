import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function LimitSection() {
  return (
    <section id="limit" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 12</span>
      <h2>Completeness: construct a limit functional</h2>
      <NoteBox kind="result" title="The dual is Banach">
        <p>
          <MathText>
            {
              "The continuous dual $X'$ is complete for every normed linear space $X$. The original space need not be complete."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {"Take a Cauchy sequence $(L_n)$ in dual norm. For each fixed $x$,"}
        </MathText>
      </p>
      <Equation>{"|L_n(x)-L_m(x)|\\leq\\|L_n-L_m\\|\\|x\\|."}</Equation>
      <p>
        <MathText>
          {
            "The scalar sequence is Cauchy. Completeness of $\\mathbb K$ lets us define $L(x)=\\lim_nL_n(x)$. Scalar limits preserve the linear identities:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "L(\\alpha x+\\beta y)=\\lim_n\\big(\\alpha L_n(x)+\\beta L_n(y)\\big)=\\alpha L(x)+\\beta L(y)."
        }
      </Equation>
      <p>
        <MathText>
          {
            "A Cauchy sequence is bounded: a sufficiently late tail lies within distance one of a fixed term, and the remaining finitely many norms have a finite maximum. Hence $\\|L_n\\|\\leq C$ for one $C<\\infty$. Passing to the scalar limit in $|L_n(x)|\\leq C\\|x\\|$ gives $|L(x)|\\leq C\\|x\\|$. Thus $L\\in X'$."
          }
        </MathText>
      </p>
    </section>
  );
}
