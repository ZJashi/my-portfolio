import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function MembershipSection() {
  return (
    <section id="membership" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 10</span>
      <h2>Membership and the gauge threshold</h2>
      <p>
        <MathText>
          {
            "If $a+v\\in K$, the scale $\\lambda=1$ is admissible, so $p(v)\\leq1$. A stronger equivalence describes the algebraic interior:"
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="The strict sublevel describes the core">
        <Equation>
          {
            "a+v\\in\\operatorname{core}K\\quad\\Longleftrightarrow\\quad p(v)<1."
          }
        </Equation>
      </NoteBox>
      <h3>Interior implies a gauge value below one</h3>
      <p>
        <MathText>
          {
            "Suppose $a+v$ is a core point. Apply the core condition there in the direction $v$: for some $\\delta>0$, the point $a+v+\\delta v=a+(1+\\delta)v$ belongs to $K$. The scale $1/(1+\\delta)$ is therefore admissible, giving"
          }
        </MathText>
      </p>
      <Equation>{"p(v)\\leq\\frac1{1+\\delta}<1."}</Equation>
      <h3>A gauge value below one implies interior</h3>
      <p>
        <MathText>
          {
            "Suppose $p(v)<1$. Choose an admissible scale $r<1$ and put $b=1/r>1$, so $a+bv\\in K$. Fix an arbitrary direction $w$. Since $a$ is a core point, there is $\\delta>0$ with $a+t w\\in K$ whenever $|t|\\leq\\delta$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {"Combine these two points with weights $1/b$ and $1-1/b$:"}
        </MathText>
      </p>
      <Equation>
        {
          "\\left(1-\\frac1b\\right)(a+t w)+\\frac1b(a+bv)=a+v+\\frac{b-1}{b}t w\\in K."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Consequently, for every $|s|\\leq\\varepsilon_w:=((b-1)/b)\\delta$, choose $t=(b/(b-1))s$. This satisfies $|t|\\leq\\delta$ and proves $a+v+s w\\in K$. As the direction $w$ was arbitrary, $a+v\\in\\operatorname{core}K$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Thus $\\{v:p(v)<1\\}\\subseteq K-a\\subseteq\\{v:p(v)\\leq1\\}$. At gauge value exactly one, membership can depend on whether a boundary point is included. No equality between $K-a$ and the non-strict sublevel set is asserted."
          }
        </MathText>
      </p>
    </section>
  );
}
