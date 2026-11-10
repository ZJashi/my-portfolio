import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ApproximationSection() {
  return (
    <section id="approximation" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 7</span>
      <h2>The proof without a nearest point</h2>
      <p>
        <MathText>
          {
            "To avoid assuming attainment, choose a small multiplicative error. For the prescribed $\\varepsilon$, put"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\delta=\\frac{\\varepsilon}{1-\\varepsilon}>0,\\qquad \\frac1{1+\\delta}=1-\\varepsilon."
        }
      </Equation>
      <p>
        <MathText>
          {"Because $d>0$ is the infimum, there exists $y_0\\in Y$ with"}
        </MathText>
      </p>
      <Equation>{"d\\leq r:=\\|w-y_0\\|<(1+\\delta)d."}</Equation>
      <p>
        <MathText>
          {"Define $z=(w-y_0)/r$, so $\\|z\\|=1$. For any $y\\in Y$,"}
        </MathText>
      </p>
      <Equation>
        {
          "\\begin{aligned}\\|z-y\\|&=\\frac1r\\|w-y_0-ry\\|\\\\&=\\frac1r\\|w-(y_0+ry)\\|\\\\&\\geq\\frac d r\\\\&>\\frac1{1+\\delta}=1-\\varepsilon.\\end{aligned}"
        }
      </Equation>
      <p>
        <MathText>
          {
            "The lower bound $d/r$ is independent of $y$, so taking the infimum over $Y$ preserves a bound strictly larger than $1-\\varepsilon$. This proves Riesz’s lemma."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Approximate minimizers are enough">
        <p>
          <MathText>
            {
              "The proof uses $y_0$ whose distance is arbitrarily close to the infimum. It does not require a closest point, an inner product or an orthogonal projection. The parameter $\\varepsilon$ accounts for the possible failure of attainment."
            }
          </MathText>
        </p>
      </NoteBox>
    </section>
  );
}
