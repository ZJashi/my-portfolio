import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function SubadditivitySection() {
  return (
    <section id="subadditivity" className={styles.section}>
      <span className={styles.sectionNumber}>04 / LECTURE 10</span>
      <h2>Subadditivity of the gauge</h2>
      <p>
        <MathText>
          {
            "Fix $u,v\\in X$ and $\\varepsilon>0$. Choose admissible positive scales $r,s$ approaching their respective infima:"
          }
        </MathText>
      </p>
      <Equation>
        {"p(u)\\leq r<p(u)+\\varepsilon,\\qquad p(v)\\leq s<p(v)+\\varepsilon."}
      </Equation>
      <p>
        <MathText>
          {
            "Thus $a+u/r$ and $a+v/s$ belong to $K$. To get a multiple of $u+v$, choose the convex weights $r/(r+s)$ and $s/(r+s)$. Then"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\frac r{r+s}\\left(a+\\frac ur\\right)+\\frac s{r+s}\\left(a+\\frac vs\\right)=a+\\frac{u+v}{r+s}\\in K."
        }
      </Equation>
      <p>
        <MathText>{"The scale $r+s$ is admissible for $u+v$, so"}</MathText>
      </p>
      <Equation>{"p(u+v)\\leq r+s<p(u)+p(v)+2\\varepsilon."}</Equation>
      <p>
        <MathText>
          {
            "Letting $\\varepsilon\\downarrow0$ proves $p(u+v)\\leq p(u)+p(v)$. The proof uses approximate admissible scales, not a claim that the infimum is attained."
          }
        </MathText>
      </p>
    </section>
  );
}
