import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function MaximalSpansSection() {
  return (
    <section id="maximal-spans" className={styles.section}>
      <span className={styles.sectionNumber}>08 / LECTURE 8</span>
      <h2>Maximal independence forces spanning</h2>
      <p>
        <MathText>
          {
            "Suppose the maximal independent set $B$ failed to span $X$. Choose $y\\in X\\setminus\\operatorname{span}B$. We show that $B\\cup\\{y\\}$ is still independent."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Consider any finite relation involving the new vector and distinct vectors $b_1,\\ldots,b_n\\in B$:"
          }
        </MathText>
      </p>
      <Equation>{"a y+\\sum_{j=1}^{n}a_jb_j=0."}</Equation>
      <p>
        <MathText>
          {
            "If $a\\ne0$, then $y=-\\sum_j(a_j/a)b_j$ belongs to $\\operatorname{span}B$, a contradiction. Therefore $a=0$. Independence of the finite family in $B$ then gives $a_j=0$ for every $j$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Consequently $B\\cup\\{y\\}\\in\\mathcal I$ and properly contains $B$, contradicting maximality. Hence $\\operatorname{span}B=X$. The set $B$ satisfies both basis conditions, proving the theorem."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="The maximality argument">
        <p>
          <MathText>
            {
              "Build a partially ordered set of admissible objects, show that unions of chains remain admissible, obtain a maximal object, and prove that any remaining deficiency would allow a strict enlargement."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "The next application uses the same pattern for linear functionals: compatible partial extensions will be ordered by extension, and a one-dimensional construction will rule out a maximal extension whose domain is too small."
          }
        </MathText>
      </p>
    </section>
  );
}
