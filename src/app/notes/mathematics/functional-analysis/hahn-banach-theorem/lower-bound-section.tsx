import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function LowerBoundSection() {
  return (
    <section id="lower-bound" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 9</span>
      <h2>The restriction from negative coefficients</h2>
      <p>
        <MathText>
          {
            "For $t<0$, write $t=-s$ with $s>0$. The required inequality is $\\ell(y)-s a\\leq p(y-s z)$. Divide by the positive scalar $s$ and write $v=y/s$:"
          }
        </MathText>
      </p>
      <Equation>{"\\ell(v)-a\\leq p(v-z)."}</Equation>
      <p>
        <MathText>
          {"Equivalently, $a\\geq\\ell(v)-p(v-z)$ for every $v\\in Y$. Hence"}
        </MathText>
      </p>
      <Equation>
        {"A\\leq a,\\qquad A:=\\sup_{v\\in Y}\\bigl(\\ell(v)-p(v-z)\\bigr)."}
      </Equation>
      <NoteBox kind="result" title="The admissible extension interval">
        <p>
          <MathText>
            {
              "Domination on the new subspace is possible precisely when the new value can be chosen between the two bounds."
            }
          </MathText>
        </p>
        <Equation>{"A\\leq a\\leq B."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The positive and negative cases must be treated separately: the function $p$ is homogeneous for positive scalars, so pulling an arbitrary negative scalar through it would be invalid."
          }
        </MathText>
      </p>
    </section>
  );
}
