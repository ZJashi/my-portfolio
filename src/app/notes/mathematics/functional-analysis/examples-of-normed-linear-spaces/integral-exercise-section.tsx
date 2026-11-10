import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function IntegralExerciseSection() {
  return (
    <section id="integral-exercise" className={styles.section}>
      <span className={styles.sectionNumber}>10 / LECTURE 6</span>
      <h2>An integral Cauchy sequence with a discontinuous limit</h2>
      <div className={styles.exercise}>
        <h3>3. Continuity can be lost in an integral limit</h3>
        <p>
          <MathText>
            {
              "Exhibit a Cauchy sequence in $C_c(\\mathbb R)$ under the integral p-norm with no limit in $C_c(\\mathbb R)$."
            }
          </MathText>
        </p>
        <details>
          <summary>Show solution</summary>
          <p>
            <MathText>
              {
                "Let $g=\\mathbf1_{[0,1]}$, and define $f_n$ to equal one on $[0,1]$, taper linearly to zero on $[-1/n,0]$ and $[1,1+1/n]$, and vanish outside $[-1/n,1+1/n]$. These functions are continuous and compactly supported. The difference from $g$ is bounded by one and is supported on two intervals of total length $2/n$, so"
              }
            </MathText>
          </p>
          <Equation>
            {"\\|f_n-g\\|_{L^p(\\mathbb R)}^p\\leq\\frac2n\\longrightarrow0."}
          </Equation>
          <p>
            <MathText>
              {
                "Minkowski inequality then shows $(f_n)$ is Cauchy. If it converged in this norm to a continuous function $h$, the triangle inequality would give $\\|h-g\\|_{L^p}=0$, so $h=g$ almost everywhere. Continuity forces $h=0$ on $(-\\infty,0)$ and $h=1$ on $(0,1)$, contradicting continuity at zero. Hence there is no continuous representative of the limit, and no limit in the original space."
              }
            </MathText>
          </p>
        </details>
      </div>
      <p>
        <MathText>
          {
            "The obstruction is not merely a changed value at a single point, which integral norms do not detect. A jump prevents any modification on a null set from producing a continuous representative."
          }
        </MathText>
      </p>
    </section>
  );
}
