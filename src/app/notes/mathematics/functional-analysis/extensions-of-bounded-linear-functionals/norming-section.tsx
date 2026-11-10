import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function NormingSection() {
  return (
    <section id="norming" className={styles.section}>
      <span className={styles.sectionNumber}>04 / LECTURE 13</span>
      <h2>Recover a vector norm from the dual</h2>
      <NoteBox kind="result" title="Dual formula for the norm">
        <p>
          <MathText>{"For every $x\\in X$,"}</MathText>
        </p>
        <Equation>
          {
            "\\|x\\|=\\sup_{\\substack{L\\in X'\\\\\\|L\\|\\leq1}}|L(x)|=\\sup_{\\substack{L\\in X'\\\\\\|L\\|\\leq1}}L(x)."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The upper bound follows from $|L(x)|\\leq\\|L\\|\\|x\\|$. For $x\\neq0$, define a functional on the line $Y=\\operatorname{span}\\{x\\}$ by"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\ell(\\alpha x)=\\alpha\\|x\\|,\\qquad |\\ell(\\alpha x)|=\\|\\alpha x\\|."
        }
      </Equation>
      <p>
        <MathText>
          {
            "This functional has norm one. Its norm-preserving extension $L$ satisfies $\\|L\\|=1$ and $L(x)=\\|x\\|$, proving the reverse inequality and attainment. For $x=0$, both suprema over the unit ball are zero. If $X\\neq\\{0\\}$, the unit ball may be replaced by the unit sphere $\\|L\\|=1$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Such an $L$ is a norming functional for the chosen $x$. The statement is that each vector has a functional attaining its norm; it does not say that every functional attains its norm on a vector. In particular, continuous linear functionals separate distinct points: apply the construction to $x-y\\neq0$."
          }
        </MathText>
      </p>
    </section>
  );
}
