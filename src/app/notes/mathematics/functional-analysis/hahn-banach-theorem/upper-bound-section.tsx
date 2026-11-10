import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function UpperBoundSection() {
  return (
    <section id="upper-bound" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 9</span>
      <h2>The restriction from positive coefficients</h2>
      <p>
        <MathText>
          {
            "We need $\\ell(y)+t a\\leq p(y+t z)$ for all $y\\in Y$ and $t\\in\\mathbb R$. The case $t=0$ is already covered by $\\ell\\leq p$ on $Y$. For $t>0$, divide by $t$ and use positive homogeneity of $p$ and linearity of $\\ell$:"
          }
        </MathText>
      </p>
      <Equation>{"\\ell(y/t)+a\\leq p(y/t+z)."}</Equation>
      <p>
        <MathText>
          {
            "As $y$ ranges over $Y$, so does $v=y/t$. Thus domination for all positive $t$ is equivalent to"
          }
        </MathText>
      </p>
      <Equation>{"a\\leq p(v+z)-\\ell(v)\\qquad(v\\in Y)."}</Equation>
      <p>
        <MathText>
          {
            "The constant $a$ must satisfy all these upper bounds at once. Therefore"
          }
        </MathText>
      </p>
      <Equation>
        {"a\\leq B,\\qquad B:=\\inf_{v\\in Y}\\bigl(p(v+z)-\\ell(v)\\bigr)."}
      </Equation>
    </section>
  );
}
