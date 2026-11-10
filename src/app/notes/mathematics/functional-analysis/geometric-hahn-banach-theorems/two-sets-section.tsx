import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function TwoSetsSection() {
  return (
    <section id="two-sets" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 11</span>
      <h2>Separating two disjoint convex sets</h2>
      <NoteBox kind="result" title="Geometric Hahn–Banach separation">
        <p>
          <MathText>
            {
              "Let $K_1,K_2\\subseteq X$ be nonempty disjoint convex sets. Suppose $K_1$ has an algebraic interior point. Then there are a nonzero linear functional $L$ and a real number $c$ such that"
            }
          </MathText>
        </p>
        <Equation>
          {"L(x)\\leq c\\leq L(y)\\qquad(x\\in K_1,\\ y\\in K_2)."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Thus the hyperplane $\\{L=c\\}$ places the two sets in opposite non-strict half-spaces. It need not give strict separation or a positive gap."
          }
        </MathText>
      </p>
      <h3>Form the difference set</h3>
      <Equation>{"K=K_1-K_2=\\{x-y:x\\in K_1,\\ y\\in K_2\\}."}</Equation>
      <p>
        <MathText>{"It is convex: if $z_i=x_i-y_i$, then"}</MathText>
      </p>
      <Equation>
        {
          "\\theta z_1+(1-\\theta)z_2=\\bigl(\\theta x_1+(1-\\theta)x_2\\bigr)-\\bigl(\\theta y_1+(1-\\theta)y_2\\bigr)\\in K."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Here each bracket belongs to its respective convex set. Take $a\\in\\operatorname{core}K_1$ and any $b\\in K_2$. The point $a-b$ is a core point of $K$: for each direction $w$, the points $a+t w$ stay in $K_1$ for sufficiently small $|t|$, so $(a-b)+t w=(a+t w)-b$ stays in $K$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Finally, $0\\notin K$. Otherwise $0=x-y$ with $x\\in K_1$ and $y\\in K_2$ would yield a common point of the disjoint sets."
          }
        </MathText>
      </p>
    </section>
  );
}
