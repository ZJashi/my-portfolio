import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function EquivalenceSection() {
  return (
    <section id="equivalence" className={styles.section}>
      <span className={styles.sectionNumber}>01 / LECTURE 2</span>
      <h2>Equivalence modulo a subspace</h2>
      <p>
        <MathText>
          {
            "Let $X$ be a linear space over $\\mathbb K$, where $\\mathbb K=\\mathbb R$ or $\\mathbb C$, and let $Y\\subseteq X$ be a linear subspace. We want to regard two vectors as equivalent whenever their difference lies entirely in $Y$."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Equivalence modulo Y">
        <p>
          <MathText>{"For $x,u\\in X$, define the relation"}</MathText>
        </p>
        <Equation>
          {"x\\sim u\\quad\\Longleftrightarrow\\quad x-u\\in Y."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The subspace condition is what makes this an equivalence relation. First, $Y$ contains zero: choose $y\\in Y$; closure under scalar multiplication gives $-y\\in Y$, and closure under addition gives $y+(-y)=0\\in Y$."
          }
        </MathText>
      </p>
      <h3>Reflexivity</h3>
      <p>
        <MathText>
          {"Every vector is equivalent to itself, since $x-x=0\\in Y$."}
        </MathText>
      </p>
      <h3>Symmetry</h3>
      <p>
        <MathText>
          {
            "If $x\\sim u$, then $x-u\\in Y$. Multiplication by $-1$ keeps the difference in $Y$, so $u-x=-(x-u)\\in Y$. Thus $u\\sim x$."
          }
        </MathText>
      </p>
      <h3>Transitivity</h3>
      <p>
        <MathText>
          {
            "If $x\\sim u$ and $u\\sim v$, then both $x-u$ and $u-v$ belong to $Y$. Their sum is still in $Y$:"
          }
        </MathText>
      </p>
      <Equation>{"x-v=(x-u)+(u-v)\\in Y."}</Equation>
      <p>
        <MathText>
          {
            "Hence $x\\sim v$. Reflexivity, symmetry and transitivity together establish the equivalence relation."
          }
        </MathText>
      </p>
    </section>
  );
}
