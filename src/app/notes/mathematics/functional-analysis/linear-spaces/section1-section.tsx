import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function Section1Section() {
  return (
    <section id="section-1" className={styles.section}>
      <span className={styles.sectionNumber}>02 / LECTURE 1</span>
      <h2>Two consequences of the axioms</h2>
      <p>
        <strong>
          {
            "First consequence: multiplying any vector by the scalar zero gives the zero vector."
          }
        </strong>
        <MathText>
          {
            " To distinguish the two kinds of zero temporarily, write $0_{\\mathbb K}$ for the scalar zero and $0_X$ for the zero vector."
          }
        </MathText>
      </p>
      <Equation>
        {
          "0_{\\mathbb K}x=(0_{\\mathbb K}+0_{\\mathbb K})x=0_{\\mathbb K}x+0_{\\mathbb K}x."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Add the additive inverse of $0_{\\mathbb K}x$ to both sides. One copy cancels, leaving the desired identity."
          }
        </MathText>
      </p>
      <Equation>{"0_{\\mathbb K}x=0_X."}</Equation>
      <p>
        {
          "The same symbol 0 usually denotes both objects; its meaning follows from context."
        }
      </p>
      <p>
        <strong>
          <MathText>
            {
              "Second consequence: multiplying by $-1$ gives the additive inverse."
            }
          </MathText>
        </strong>
        {" Use the first consequence, distributivity and the identity axiom."}
      </p>
      <Equation>{"0_X=0_{\\mathbb K}x=(1+(-1))x=1x+(-1)x=x+(-1)x."}</Equation>
      <p>
        <MathText>{"Adding $-x$ to both sides gives:"}</MathText>
      </p>
      <Equation>{"(-1)x=-x."}</Equation>
      <p>
        <MathText>
          {
            "This establishes that the inverse supplied by the additive group structure agrees with scalar multiplication by $-1$."
          }
        </MathText>
      </p>
    </section>
  );
}
