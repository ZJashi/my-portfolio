import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ContinuitySection() {
  return (
    <section id="continuity" className={styles.section}>
      <span className={styles.sectionNumber}>02 / LECTURE 12</span>
      <h2>Bounded if and only if continuous</h2>
      <p>
        <MathText>{"If $L$ is bounded and $x_n\\to x$, then"}</MathText>
      </p>
      <Equation>
        {"|L(x_n)-L(x)|=|L(x_n-x)|\\leq C\\|x_n-x\\|\\longrightarrow0."}
      </Equation>
      <p>
        <MathText>
          {
            "For the converse, suppose no finite bound exists. For each positive integer $n$, choose $x_n\\neq0$ with $|L(x_n)|>n\\|x_n\\|$, and set"
          }
        </MathText>
      </p>
      <Equation>
        {
          "y_n=\\frac{x_n}{\\sqrt n\\,\\|x_n\\|},\\qquad \\|y_n\\|=\\frac1{\\sqrt n},\\qquad |L(y_n)|>\\sqrt n."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Then $y_n\\to0$ while $L(y_n)$ does not converge to zero. Hence $L$ is not continuous at zero. This contrapositive proves the converse."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Continuity is determined at the origin">
        <p>
          <MathText>
            {
              "For a linear functional, boundedness, continuity at zero and continuity everywhere are equivalent. Linearity transfers an estimate for differences to every point."
            }
          </MathText>
        </p>
      </NoteBox>
    </section>
  );
}
