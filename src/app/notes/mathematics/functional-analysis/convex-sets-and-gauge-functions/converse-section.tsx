import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function ConverseSection() {
  return (
    <section id="converse" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 10</span>
      <h2>Convex sets from sublinear functions</h2>
      <p>
        <MathText>
          {
            "Conversely, let $p:X\\to[0,\\infty)$ be a finite-valued, positively homogeneous, subadditive function. Define"
          }
        </MathText>
      </p>
      <Equation>{"A=\\{x:p(x)\\leq1\\},\\qquad B=\\{x:p(x)<1\\}."}</Equation>
      <h3>Both sublevel sets are convex</h3>
      <p>
        <MathText>
          {
            "For $0\\leq\\theta\\leq1$, subadditivity and positive homogeneity give"
          }
        </MathText>
      </p>
      <Equation>
        {"p(\\theta x+(1-\\theta)y)\\leq\\theta p(x)+(1-\\theta)p(y)."}
      </Equation>
      <p>
        <MathText>
          {
            "If $x,y\\in A$, the right side is at most one. If $x,y\\in B$, it is strictly less than one, including the endpoint weights. Thus both $A$ and $B$ are convex."
          }
        </MathText>
      </p>
      <h3>Zero is an algebraic interior point of the strict sublevel</h3>
      <p>
        <MathText>
          {
            "We have $p(0)=0<1$. For a fixed direction $v$, both $p(v)$ and $p(-v)$ are finite. Choose"
          }
        </MathText>
      </p>
      <Equation>{"\\varepsilon_v=\\frac1{2(1+p(v)+p(-v))}>0."}</Equation>
      <p>
        <MathText>
          {
            "For $0\\leq t\\leq\\varepsilon_v$, positive homogeneity gives $p(tv)=t p(v)<1$. For $-\\varepsilon_v\\leq t<0$, write $tv=(-t)(-v)$ to get $p(tv)=(-t)p(-v)<1$. Hence $tv\\in B$ for every $|t|\\leq\\varepsilon_v$, proving $0\\in\\operatorname{core}B$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "This choice of parameter also covers directions in which $p(v)$ or $p(-v)$ is zero; it avoids dividing by either value separately."
          }
        </MathText>
      </p>
    </section>
  );
}
