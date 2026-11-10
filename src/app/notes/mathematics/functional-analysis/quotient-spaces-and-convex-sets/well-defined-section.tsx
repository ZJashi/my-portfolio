import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function WellDefinedSection() {
  return (
    <section id="well-defined" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 2</span>
      <h2>Why the quotient operations are well defined</h2>
      <h3>Addition</h3>
      <p>
        <MathText>
          {
            "Suppose $x_1\\sim x_2$ and $u_1\\sim u_2$. The differences $x_2-x_1$ and $u_2-u_1$ lie in $Y$. Adding them gives"
          }
        </MathText>
      </p>
      <Equation>{"(x_2+u_2)-(x_1+u_1)=(x_2-x_1)+(u_2-u_1)\\in Y."}</Equation>
      <p>
        <MathText>
          {
            "Thus $x_1+u_1\\sim x_2+u_2$, so the resulting equivalence class is independent of both representatives."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The same argument can be expressed directly as equality of sets. If $z\\in[x_1+u_1]$, then $z-(x_1+u_1)\\in Y$. Subtract the two known differences:"
          }
        </MathText>
      </p>
      <Equation>
        {"z-(x_2+u_2)=\\bigl(z-(x_1+u_1)\\bigr)-(x_2-x_1)-(u_2-u_1)\\in Y."}
      </Equation>
      <p>
        <MathText>
          {
            "Therefore $z\\in[x_2+u_2]$. Interchanging the pairs of representatives proves the reverse inclusion. Hence the classes are equal."
          }
        </MathText>
      </p>
      <h3>Scalar multiplication</h3>
      <p>
        <MathText>
          {
            "If $x_1\\sim x_2$, then $x_1-x_2\\in Y$. Closure under scalar multiplication gives"
          }
        </MathText>
      </p>
      <Equation>{"\\alpha x_1-\\alpha x_2=\\alpha(x_1-x_2)\\in Y."}</Equation>
      <p>
        <MathText>
          {
            "It follows that $[\\alpha x_1]=[\\alpha x_2]$. Scalar multiplication is also well defined."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="The quotient is a linear space">
        <p>
          <MathText>
            {
              "With these operations, $X/Y$ is a linear space over the same field $\\mathbb K$. Its zero vector is the class $[0]=Y$, and the additive inverse of $[x]$ is $[-x]$."
            }
          </MathText>
        </p>
        <Equation>{"[x]+[0]=[x],\\qquad [x]+[-x]=[0]."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The other axioms follow from those in $X$. For example, $([x]+[u])+[v]=[(x+u)+v]=[x+(u+v)]=[x]+([u]+[v])$. Distributivity and compatibility of scalar multiplication pass to classes in exactly the same way."
          }
        </MathText>
      </p>
    </section>
  );
}
