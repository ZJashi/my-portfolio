import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ConvexOperationsSection() {
  return (
    <section id="convex-operations" className={styles.section}>
      <span className={styles.sectionNumber}>08 / LECTURE 2</span>
      <h2>Subspaces, sums, intersections and unions</h2>
      <h3>Every linear subspace is convex</h3>
      <p>
        <MathText>
          {
            "If $Y$ is a linear subspace and $x,u\\in Y$, both $tx$ and $(1-t)u$ lie in $Y$, so their sum lies in $Y$. Thus the convexity condition holds. The converse fails: a filled disk is convex but is not a linear subspace."
          }
        </MathText>
      </p>
      <h3>The sum of two convex sets is convex</h3>
      <p>
        <MathText>
          {
            "Let $A,B\\subseteq X$ be convex. Their sum is $A+B=\\{a+b:a\\in A,\\ b\\in B\\}$. Take $z_1,z_2\\in A+B$ and write $z_i=a_i+b_i$, where $a_i\\in A$ and $b_i\\in B$. For $0\\leq t\\leq1$,"
          }
        </MathText>
      </p>
      <Equation>
        {
          "tz_1+(1-t)z_2=\\bigl(ta_1+(1-t)a_2\\bigr)+\\bigl(tb_1+(1-t)b_2\\bigr)."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The first bracket belongs to $A$ and the second to $B$. Their sum belongs to $A+B$, proving convexity. If either set is empty, the sum is empty and is still convex."
          }
        </MathText>
      </p>
      <h3>Any intersection of convex sets is convex</h3>
      <p>
        <MathText>
          {
            "Let $C=\\bigcap_{\\theta\\in I}C_\\theta$, where each $C_\\theta$ is convex and the index set $I$ is arbitrary. If $x,u\\in C$, then both points belong to every $C_\\theta$. Hence $tx+(1-t)u$ belongs to every $C_\\theta$, and so belongs to their intersection."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The intersection may be empty, which causes no problem for convexity. With the ambient-space convention, an intersection over an empty index set equals $X$ and is also convex."
          }
        </MathText>
      </p>
      <h3>The union of a chain of convex sets is convex</h3>
      <p>
        <MathText>
          {
            "Assume the family is totally ordered by inclusion: for any two indices, one of the corresponding sets is contained in the other. Let $C=\\bigcup_{\\theta\\in I}C_\\theta$ and choose $x,u\\in C$. There are indices $\\theta_1,\\theta_2$ with $x\\in C_{\\theta_1}$ and $u\\in C_{\\theta_2}$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "After interchanging indices if necessary, assume $C_{\\theta_1}\\subseteq C_{\\theta_2}$. Both points then lie in the convex set $C_{\\theta_2}$, so their whole segment lies in $C_{\\theta_2}\\subseteq C$. Thus $C$ is convex."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="The chain condition is essential">
        <p>
          <MathText>
            {
              "The proof works because any two selected points can be placed in one common member of the family. An arbitrary union of convex sets need not be convex."
            }
          </MathText>
        </p>
      </NoteBox>
    </section>
  );
}
