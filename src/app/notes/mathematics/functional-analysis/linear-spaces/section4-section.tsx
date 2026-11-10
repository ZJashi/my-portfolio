import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function Section4Section() {
  return (
    <section id="section-4" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 1</span>
      <h2>The zero subspace and sums of subspaces</h2>
      <p>
        <strong>{"The zero subspace."}</strong>
        <MathText>
          {
            " The singleton set containing only the zero vector is a subspace, since every expression $\\alpha 0+0$ equals 0."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="The zero subspace">
        <Equation>{"\\{0\\}\\subseteq X."}</Equation>
      </NoteBox>
      <p>
        <strong>{"Sum of two subspaces."}</strong>
        <MathText>
          {
            " Given subspaces $Y_1$ and $Y_2$, their sum consists of every vector that can be expressed as one vector from each subspace added together."
          }
        </MathText>
      </p>
      <Equation>{"Y_1+Y_2=\\{x_1+x_2:x_1\\in Y_1,\\ x_2\\in Y_2\\}."}</Equation>
      <p>
        <strong>{"Claim."}</strong>
        <MathText>{" This sum is a subspace of $X$."}</MathText>
      </p>
      <p>
        <strong>{"Proof."}</strong>
        <MathText>
          {
            " Let $x$ and $y$ belong to the sum and let $\\alpha$ be a scalar. By the definition of the sum, choose decompositions:"
          }
        </MathText>
      </p>
      <Equation>
        {"x=x_1+x_2,\\qquad y=y_1+y_2,\\qquad x_i,y_i\\in Y_i."}
      </Equation>
      <p>{"Regroup using distributivity, associativity and commutativity."}</p>
      <Equation>{"\\alpha x+y=(\\alpha x_1+y_1)+(\\alpha x_2+y_2)."}</Equation>
      <p>
        <MathText>
          {
            "The first parenthesis belongs to $Y_1$ and the second belongs to $Y_2$, because each is a subspace. Their sum therefore belongs to $Y_1+Y_2$. The sum also contains zero, so it is nonempty. This proves the claim."
          }
        </MathText>
      </p>
    </section>
  );
}
