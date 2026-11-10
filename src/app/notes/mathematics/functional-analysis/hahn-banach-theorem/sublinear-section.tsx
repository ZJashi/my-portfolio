import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function SublinearSection() {
  return (
    <section id="sublinear" className={styles.section}>
      <span className={styles.sectionNumber}>02 / LECTURE 9</span>
      <h2>The dominating sublinear function</h2>
      <NoteBox kind="definition" title="Sublinear function">
        <p>
          <MathText>
            {
              "A real-valued function $p:X\\to\\mathbb R$ is sublinear when it is positively homogeneous and subadditive."
            }
          </MathText>
        </p>
        <Equation>
          {"p(t x)=t\\,p(x)\\quad(t\\geq0),\\qquad p(x+u)\\leq p(x)+p(u)."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Positive homogeneity only applies to nonnegative scalars. It does not assert $p(-x)=-p(x)$, nor does it assert $p(-x)=p(x)$. The function need not be nonnegative. In particular, a real linear functional is itself sublinear."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "We have $p(0)=0$. Subadditivity also gives $0=p(x+(-x))\\leq p(x)+p(-x)$. These elementary facts are compatible with a function that is not symmetric."
          }
        </MathText>
      </p>
      <h3>A norm is a sublinear example</h3>
      <p>
        <MathText>
          {
            "If $X$ has a norm, then $p(x)=\\|x\\|$ satisfies positive homogeneity and subadditivity. More generally, a nonnegative multiple of a norm is sublinear. This makes domination useful for controlling the size of linear functionals."
          }
        </MathText>
      </p>
    </section>
  );
}
