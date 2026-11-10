import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function NormLimitSection() {
  return (
    <section id="norm-limit" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 12</span>
      <h2>From pointwise to norm convergence</h2>
      <p>
        <MathText>
          {
            "Pointwise convergence does not by itself establish completeness in dual norm. Given $\\varepsilon>0$, choose $N$ such that $\\|L_n-L_m\\|\\leq\\varepsilon$ for all $n,m\\geq N$. Consequently"
          }
        </MathText>
      </p>
      <Equation>
        {
          "|L_n(x)-L_m(x)|\\leq\\varepsilon\\|x\\|\\qquad(x\\in X,\\ n,m\\geq N)."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Fix $n\\geq N$ and let $m\\to\\infty$. The choice of $N$ is independent of $x$, so"
          }
        </MathText>
      </p>
      <Equation>
        {
          "|(L_n-L)(x)|\\leq\\varepsilon\\|x\\|\\quad(x\\in X),\\qquad \\|L_n-L\\|\\leq\\varepsilon."
        }
      </Equation>
      <p>
        <MathText>
          {
            "This proves convergence in dual norm. The proof uses scalar completeness and uniform control on the unit ball; it never needs a Cauchy sequence of vectors in $X$ to converge."
          }
        </MathText>
      </p>
    </section>
  );
}
