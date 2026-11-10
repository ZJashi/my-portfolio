import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function CombinationsSection() {
  return (
    <section id="combinations" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 2</span>
      <h2>Finite convex combinations</h2>
      <NoteBox kind="definition" title="Convex combination">
        <p>
          <MathText>
            {
              "A convex combination is a finite linear combination whose coefficients are nonnegative real numbers and sum to one."
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\sum_{j=1}^{n}\\alpha_jx_j,\\qquad \\alpha_j\\geq0,\\qquad \\sum_{j=1}^{n}\\alpha_j=1,\\qquad n\\geq1."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Each coefficient automatically lies in $[0,1]$. If $C$ is convex and all $x_j$ belong to $C$, every such convex combination belongs to $C$. The two-point definition is enough to guarantee this for any finite number of points."
          }
        </MathText>
      </p>
      <h3>Proof by induction</h3>
      <p>
        <MathText>
          {
            "For one point the conclusion is immediate. For two points, $\\alpha_2=1-\\alpha_1$, so the conclusion is exactly the definition of convexity. Assume it holds for combinations of $n$ points and consider $n+1$ points."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "If $\\alpha_1=1$, all the remaining coefficients vanish and the combination is simply $x_1\\in C$. If $\\alpha_1<1$, define"
          }
        </MathText>
      </p>
      <Equation>
        {"u=\\sum_{j=2}^{n+1}\\frac{\\alpha_j}{1-\\alpha_1}x_j."}
      </Equation>
      <p>
        <MathText>
          {
            "These new coefficients are nonnegative and sum to one, since $\\sum_{j=2}^{n+1}\\alpha_j=1-\\alpha_1$. The induction hypothesis therefore gives $u\\in C$. Now rewrite the original combination as"
          }
        </MathText>
      </p>
      <Equation>
        {"\\sum_{j=1}^{n+1}\\alpha_jx_j=\\alpha_1x_1+(1-\\alpha_1)u\\in C."}
      </Equation>
      <p>
        <MathText>
          {
            "This is a convex combination of two points in $C$, completing the induction. The separate case $\\alpha_1=1$ is necessary to avoid division by zero."
          }
        </MathText>
      </p>
    </section>
  );
}
