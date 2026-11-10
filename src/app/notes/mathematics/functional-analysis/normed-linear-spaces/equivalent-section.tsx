import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function EquivalentSection() {
  return (
    <section id="equivalent" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 3</span>
      <h2>Equivalent norms</h2>
      <p>
        <MathText>
          {
            "Two different norms on the same vector space may give the same notion of convergence. A quantitative comparison guarantees this."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Equivalent norms">
        <p>
          <MathText>
            {
              "Norms $\\|\\cdot\\|_1$ and $\\|\\cdot\\|_2$ are equivalent if there is a constant $0<c<\\infty$, independent of $x$, such that"
            }
          </MathText>
        </p>
        <Equation>
          {"c\\|x\\|_1\\leq\\|x\\|_2\\leq c^{-1}\\|x\\|_1\\qquad(x\\in X)."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "One may take $0<c\\leq1$. Equivalently, there are constants $a,b>0$ with $a\\|x\\|_1\\leq\\|x\\|_2\\leq b\\|x\\|_1$. The bounds must hold uniformly for every vector; choosing a different constant for each vector does not establish equivalence."
          }
        </MathText>
      </p>
      <h3>Equivalent norms have the same convergent sequences</h3>
      <p>
        <MathText>
          {
            "If $\\|x_n-x\\|_1\\to0$, then $\\|x_n-x\\|_2\\leq c^{-1}\\|x_n-x\\|_1\\to0$. Conversely, the lower bound gives $\\|x_n-x\\|_1\\leq c^{-1}\\|x_n-x\\|_2\\to0$."
          }
        </MathText>
      </p>
      <h3>Equivalent norms have the same topology</h3>
      <p>
        <MathText>
          {
            "The inequalities compare their balls as well. Writing $B_i$ for balls in the $i$th norm,"
          }
        </MathText>
      </p>
      <Equation>
        {"B_1(x,cr)\\subseteq B_2(x,r),\\qquad B_2(x,cr)\\subseteq B_1(x,r)."}
      </Equation>
      <p>
        <MathText>
          {
            "Every neighbourhood in one norm therefore contains a neighbourhood in the other. Both norms give exactly the same open sets and closed sets. They need not assign the same numerical length to a vector."
          }
        </MathText>
      </p>
    </section>
  );
}
