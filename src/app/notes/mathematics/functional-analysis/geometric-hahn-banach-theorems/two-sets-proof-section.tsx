import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function TwoSetsProofSection() {
  return (
    <section id="two-sets-proof" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 11</span>
      <h2>Choose a separating level</h2>
      <p>
        <MathText>
          {
            "Apply the weak point-separation theorem to $K$ and the exterior point zero. It produces a nonzero linear functional $L$ with $L(z)\\leq L(0)=0$ for all $z\\in K$. Hence"
          }
        </MathText>
      </p>
      <Equation>
        {"L(x-y)\\leq0,\\qquad L(x)\\leq L(y)\\qquad(x\\in K_1,\\ y\\in K_2)."}
      </Equation>
      <p>
        <MathText>
          {
            "Define $c=\\sup_{x\\in K_1}L(x)$. This is finite: fixing $y_0\\in K_2$ gives an upper bound $L(y_0)$ for every value on $K_1$, while fixing one $x_0\\in K_1$ gives a finite lower bound for the supremum. For every $y\\in K_2$, the inequality $L(x)\\leq L(y)$ holds for all $x\\in K_1$, so it also holds after taking the supremum in $x$. Therefore"
          }
        </MathText>
      </p>
      <Equation>{"L(x)\\leq c\\leq L(y)."}</Equation>
      <p>
        <MathText>
          {
            "This proves the theorem. The supremum need not be attained at any point of $K_1$; attainment is unnecessary for choosing the separating level."
          }
        </MathText>
      </p>
    </section>
  );
}
