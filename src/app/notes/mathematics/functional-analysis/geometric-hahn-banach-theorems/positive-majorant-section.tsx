import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function PositiveMajorantSection() {
  return (
    <section id="positive-majorant" className={styles.section}>
      <span className={styles.sectionNumber}>09 / LECTURE 11</span>
      <h2>Construct the sublinear majorant</h2>
      <p>
        <MathText>{"For every $f\\in B(\\Omega)$, define"}</MathText>
      </p>
      <Equation>{"p(f)=\\inf\\{\\ell(y):y\\in Y,\\ f\\leq y\\}."}</Equation>
      <h3>Finiteness above and below</h3>
      <p>
        <MathText>
          {
            "Let $M=\\|f\\|_\\infty=\\sup_\\omega|f(\\omega)|$. Since $u\\geq1$, we have $-Mu\\leq f\\leq Mu$. The upper function $Mu$ belongs to $Y$, so the admissible family is nonempty and $p(f)\\leq M\\ell(u)$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "If $y\\in Y$ is admissible, then $y\\geq f\\geq-Mu$. Both $y$ and $-Mu$ lie in the domain of $\\ell$, so monotonicity gives $\\ell(y)\\geq-M\\ell(u)$. Taking the infimum proves"
          }
        </MathText>
      </p>
      <Equation>{"-M\\ell(u)\\leq p(f)\\leq M\\ell(u)."}</Equation>
      <p>
        <MathText>
          {
            "Thus $p(f)$ is a finite real number for every bounded $f$. It need not be nonnegative; this construction uses the general sublinear form of Hahn–Banach, not the special nonnegative gauge form."
          }
        </MathText>
      </p>
      <h3>Agreement on the original subspace</h3>
      <p>
        <MathText>
          {
            "For $f\\in Y$, choosing $y=f$ gives $p(f)\\leq\\ell(f)$. Conversely, every admissible $y\\in Y$ has $f\\leq y$, so $\\ell(f)\\leq\\ell(y)$. Therefore"
          }
        </MathText>
      </p>
      <Equation>{"p(f)=\\ell(f)\\qquad(f\\in Y)."}</Equation>
      <h3>A sign property</h3>
      <p>
        <MathText>
          {
            "If $f\\leq0$, the zero function is admissible, yielding $p(f)\\leq\\ell(0)=0$. This is the property that will make the extension positive."
          }
        </MathText>
      </p>
    </section>
  );
}
