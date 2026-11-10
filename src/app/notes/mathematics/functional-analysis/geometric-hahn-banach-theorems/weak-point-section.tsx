import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function WeakPointSection() {
  return (
    <section id="weak-point" className={styles.section}>
      <span className={styles.sectionNumber}>04 / LECTURE 11</span>
      <h2>A convex set with one core point</h2>
      <NoteBox kind="result" title="Point separation with a weak inequality">
        <p>
          <MathText>
            {
              "Let $K$ be convex with a nonempty core, and let $b\\notin K$. Then a nonzero linear functional $L$ satisfies"
            }
          </MathText>
        </p>
        <Equation>{"L(k)\\leq L(b)\\qquad(k\\in K)."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Choose a core point $a$ and again use $U=K-a$, $v=b-a$ and the gauge $p$. This time points of $K$ need not all be core points. The membership implication gives only $p(u)\\leq1$ for $u\\in U$. We still have $p(v)\\geq1$ and can construct the same dominated extension."
          }
        </MathText>
      </p>
      <Equation>{"L(u)\\leq p(u)\\leq1\\leq p(v)=L(v)."}</Equation>
      <p>
        <MathText>
          {
            "Translating back yields the claimed non-strict inequality. The difference between the two theorems is exactly the difference between the gauge conditions $p(u)<1$ for core points and $p(u)\\leq1$ for arbitrary members."
          }
        </MathText>
      </p>
    </section>
  );
}
