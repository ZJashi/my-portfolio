import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function UniformExercisesSection() {
  return (
    <section id="uniform-exercises" className={styles.section}>
      <span className={styles.sectionNumber}>08 / LECTURE 6</span>
      <h2>Exercises on the supremum norm</h2>
      <div className={styles.exercise}>
        <h3>1. Compact support can be lost in a uniform limit</h3>
        <p>
          <MathText>
            {
              "Construct a Cauchy sequence in $C_c(\\mathbb R)$ with no limit in $C_c(\\mathbb R)$ under the supremum norm."
            }
          </MathText>
        </p>
        <details>
          <summary>Show solution</summary>
          <p>
            <MathText>
              {
                "Let $f(t)=e^{-|t|}$. Choose continuous cutoffs $\\chi_n$ equal to one on $[-n,n]$, decreasing linearly to zero for $n<|t|<n+1$, and zero for $|t|\\geq n+1$. Set $f_n=\\chi_n f$. Each $f_n$ is continuous and compactly supported, while"
              }
            </MathText>
          </p>
          <Equation>
            {"\\|f_n-f\\|_\\infty\\leq e^{-n}\\longrightarrow0."}
          </Equation>
          <p>
            <MathText>
              {
                "Thus $(f_n)$ is uniformly Cauchy. Its uniform limit is $f$, whose support is all of $\\mathbb R$. It cannot have a different limit in the same norm, so it has no limit in $C_c(\\mathbb R)$."
              }
            </MathText>
          </p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>2. Completeness when the domain is compact</h3>
        <p>
          <MathText>
            {
              "If $M$ is compact, prove that $C(M;\\mathbb K)$ with the supremum norm is a Banach space."
            }
          </MathText>
        </p>
        <details>
          <summary>Show solution</summary>
          <p>
            <MathText>
              {
                "For a uniformly Cauchy sequence $(f_n)$, each scalar sequence $(f_n(x))_n$ is Cauchy. Define $f(x)=\\lim_n f_n(x)$. Pass to the pointwise limit in $|f_n(x)-f_m(x)|\\leq\\varepsilon$, using one common threshold for every $x$, to get $\\|f_n-f\\|_\\infty\\leq\\varepsilon$."
              }
            </MathText>
          </p>
          <p>
            <MathText>
              {
                "To prove continuity at $x$, choose $n$ with $\\|f-f_n\\|_\\infty<\\varepsilon/3$, then use continuity of $f_n$ to make $|f_n(y)-f_n(x)|<\\varepsilon/3$ for $y$ sufficiently close to $x$. The three-term triangle inequality gives $|f(y)-f(x)|<\\varepsilon$. Thus $f$ is continuous. Since $M$ is compact, its support is compact, and $f$ belongs to the original space."
              }
            </MathText>
          </p>
        </details>
      </div>
    </section>
  );
}
