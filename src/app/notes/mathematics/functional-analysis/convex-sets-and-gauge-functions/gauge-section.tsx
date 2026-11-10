import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function GaugeSection() {
  return (
    <section id="gauge" className={styles.section}>
      <span className={styles.sectionNumber}>02 / LECTURE 10</span>
      <h2>The gauge based at an interior point</h2>
      <p>
        <MathText>
          {
            "Let $K\\subseteq X$ be convex and choose $a\\in\\operatorname{core}K$. Define the gauge associated with the set and this base point by"
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Gauge or Minkowski functional">
        <Equation>
          {"p_{K,a}(v)=\\inf\\{\\lambda>0:a+\\lambda^{-1}v\\in K\\}."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Write $p(v)$ when $K$ and $a$ are fixed. Equivalently, it is the gauge of the translated convex set $K-a$, which contains zero as an algebraic interior point."
          }
        </MathText>
      </p>
      <h3>The gauge is finite</h3>
      <p>
        <MathText>
          {
            "For any fixed $v$, the core condition supplies $\\varepsilon>0$ with $a+\\varepsilon v\\in K$. Thus $\\lambda=1/\\varepsilon$ is admissible and $0\\leq p(v)\\leq1/\\varepsilon<\\infty$. Also $p(0)=0$, because every positive $\\lambda$ is admissible for the zero vector."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The gauge measures the scale required to fit a vector into the translated set. It is not automatically a norm: symmetry and definiteness have not been assumed."
          }
        </MathText>
      </p>
    </section>
  );
}
