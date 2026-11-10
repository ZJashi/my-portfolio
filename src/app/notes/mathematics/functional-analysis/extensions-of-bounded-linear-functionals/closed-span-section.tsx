import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ClosedSpanSection() {
  return (
    <section id="closed-span" className={styles.section}>
      <span className={styles.sectionNumber}>08 / LECTURE 13</span>
      <h2>The closed linear span</h2>
      <NoteBox kind="definition" title="Closed linear span">
        <p>
          <MathText>
            {
              "For $S=\\{x_\\theta:\\theta\\in I\\}$, its closed linear span is the smallest closed linear subspace containing $S$. Equivalently,"
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\overline{\\operatorname{span}}S=\\bigcap_{\\substack{F\\text{ closed linear}\\\\S\\subseteq F}}F."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>{"It also has a concrete description:"}</MathText>
      </p>
      <Equation>
        {
          "\\overline{\\operatorname{span}}S=\\overline{\\left\\{\\sum_{j=1}^m\\alpha_jx_{\\theta_j}:m\\geq1,\\ \\alpha_j\\in\\mathbb R,\\ \\theta_j\\in I\\right\\}}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "To prove this, let $A$ be the smallest closed linear subspace containing $S$, and $B=\\overline{\\operatorname{span}S}$. Since $A$ contains the generators and is linear, it contains every finite combination; since it is closed, it also contains $B$. Conversely, $B$ contains $S$ and is closed. It is linear: if $u_n\\to u$ and $v_n\\to v$ with $u_n,v_n$ finite combinations, then $\\alpha u_n+\\beta v_n\\to\\alpha u+\\beta v$, and each term remains a finite combination. Hence $B$ is one of the subspaces defining $A$, giving $A\\subseteq B$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The index set $I$ may be uncountable. Each approximating vector still uses only finitely many generators, and a vector in the closure is a limit of a sequence of such finite combinations. The number of terms and the chosen generators may vary with the sequence index. For an empty generating set, the span and its closure are understood to be $\\{0\\}$."
          }
        </MathText>
      </p>
    </section>
  );
}
