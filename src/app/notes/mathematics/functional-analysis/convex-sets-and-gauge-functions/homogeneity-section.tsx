import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function HomogeneitySection() {
  return (
    <section id="homogeneity" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 10</span>
      <h2>Positive homogeneity of the gauge</h2>
      <p>
        <MathText>
          {
            "For $t>0$, change variables $\\lambda=t\\mu$ in the set of admissible scales:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\begin{aligned}p(t v)&=\\inf\\{\\lambda>0:a+t v/\\lambda\\in K\\}\\\\&=\\inf\\{t\\mu:\\mu>0,\\ a+v/\\mu\\in K\\}\\\\&=t\\,p(v).\\end{aligned}"
        }
      </Equation>
      <p>
        <MathText>
          {
            "For $t=0$, both sides are zero because $p(0)=0$. Thus the gauge is positively homogeneous."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="A finite nonnegative sublinear function">
        <Equation>
          {"p(t v)=t\\,p(v)\\quad(t\\geq0),\\qquad p(u+v)\\leq p(u)+p(v)."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "These are exactly the properties needed to dominate a real linear functional in the Hahn–Banach theorem. Negative scalars require evaluating $p(-v)$; no symmetry between $p(v)$ and $p(-v)$ is guaranteed."
          }
        </MathText>
      </p>
    </section>
  );
}
