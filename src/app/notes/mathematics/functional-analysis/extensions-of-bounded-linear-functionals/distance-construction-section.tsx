import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function DistanceConstructionSection() {
  return (
    <section id="distance-construction" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 13</span>
      <h2>Construct a functional attaining the distance</h2>
      <p>
        <MathText>
          {
            "If $d=d(x,Y)=0$, the upper bound and the zero functional already prove equality. Suppose $d>0$. Then $x\\notin Y$ and every element of $Y_0=Y+\\operatorname{span}\\{x\\}$ has a unique expression $\\alpha x+y$: subtracting two such expressions would otherwise put $x$ in $Y$. Define"
          }
        </MathText>
      </p>
      <Equation>{"\\ell(\\alpha x+y)=\\alpha d."}</Equation>
      <p>
        <MathText>
          {
            "This is well defined and linear, vanishes on $Y$, and takes the value $d$ at $x$. If $\\alpha\\neq0$, then $-y/\\alpha\\in Y$, so"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|\\alpha x+y\\|=|\\alpha|\\left\\|x+\\frac y\\alpha\\right\\|\\geq|\\alpha|d=|\\ell(\\alpha x+y)|."
        }
      </Equation>
      <p>
        <MathText>
          {
            "For $\\alpha=0$, the same inequality is immediate. Hahn–Banach gives an extension $L\\in Y^\\perp$ with $\\|L\\|\\leq1$ and $L(x)=d$, completing the reverse bound. In fact its norm equals one: for every $y\\in Y$, $d=|L(x-y)|\\leq\\|L\\|\\|x-y\\|$; taking the infimum yields $d\\leq\\|L\\|d$. Since $d>0$, $\\|L\\|\\geq1$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Thus a positive distance is attained by a norm-one annihilating functional, even when no nearest vector in $Y$ exists. The lecture’s unit-sphere formulation applies when the annihilator has nonzero elements; the unit-ball form above also covers the dense-subspace case."
          }
        </MathText>
      </p>
    </section>
  );
}
