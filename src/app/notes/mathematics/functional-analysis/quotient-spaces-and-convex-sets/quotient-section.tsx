import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function QuotientSection() {
  return (
    <section id="quotient" className={styles.section}>
      <span className={styles.sectionNumber}>02 / LECTURE 2</span>
      <h2>Classes and the quotient space</h2>
      <p>
        <MathText>
          {
            "The equivalence class of $x$ is the set of all vectors equivalent to $x$. It can also be written as a translate of the subspace $Y$:"
          }
        </MathText>
      </p>
      <Equation>
        {"[x]=\\{u\\in X:u-x\\in Y\\}=x+Y=\\{x+y:y\\in Y\\}."}
      </Equation>
      <p>
        <MathText>
          {
            "Indeed, $u-x\\in Y$ means precisely that $u=x+y$ for some $y\\in Y$. A vector $x$ is a representative of its class. Different representatives may describe exactly the same class."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Quotient space">
        <p>
          <MathText>
            {"The quotient of $X$ by $Y$ is the set of equivalence classes"}
          </MathText>
        </p>
        <Equation>{"X/Y=\\{[x]:x\\in X\\}."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "An element of $X/Y$ is therefore a whole subset of $X$, rather than a selected vector of $X$. The equivalence classes partition $X$: two classes either coincide or have no common element."
          }
        </MathText>
      </p>
      <h3>Operations on classes</h3>
      <p>
        <MathText>
          {
            "To add two classes, add representatives and take the resulting class. To multiply a class by a scalar, multiply a representative and take its class:"
          }
        </MathText>
      </p>
      <Equation>{"[x]+[u]=[x+u],\\qquad \\alpha[x]=[\\alpha x]."}</Equation>
      <p>
        <MathText>
          {
            "These formulas define operations on classes only if changing representatives leaves the answer unchanged. This is the essential well-definedness check."
          }
        </MathText>
      </p>
    </section>
  );
}
