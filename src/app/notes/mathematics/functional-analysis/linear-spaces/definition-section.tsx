import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function DefinitionSection() {
  return (
    <section id="definition" className={styles.section}>
      <span className={styles.sectionNumber}>01 / LECTURE 1</span>
      <h2>Definition of a linear space</h2>
      <NoteBox kind="definition" title="Linear space">
        <p>
          {"A "}
          <strong>{"linear space"}</strong>
          {", also called a "}
          <strong>{"vector space"}</strong>
          <MathText>
            {
              ", consists of a set $X$ and two operations: addition of elements of $X$, and multiplication of an element of $X$ by a scalar. The scalar field $\\mathbb K$ is either the real numbers or the complex numbers."
            }
          </MathText>
        </p>
      </NoteBox>
      <Equation>
        {
          "\\mathbb K\\in\\{\\mathbb R,\\mathbb C\\},\\qquad +:X\\times X\\to X,\\qquad \\mathbb K\\times X\\to X."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The operations must satisfy the following axioms for every $x$, $y$, $z$ in $X$ and every pair of scalars $\\alpha$, $\\beta$ in $\\mathbb K$."
          }
        </MathText>
      </p>
      <p>
        <strong>{"Addition is commutative and associative."}</strong>
        {
          " Changing the order of two terms or the grouping of three terms leaves their sum unchanged."
        }
      </p>
      <Equation>{"x+y=y+x,\\qquad x+(y+z)=(x+y)+z."}</Equation>
      <p>
        <strong>{"Addition has a neutral element and inverses."}</strong>
        <MathText>
          {
            " There is a zero vector, denoted 0, and each $x$ has an additive inverse, denoted $-x$."
          }
        </MathText>
      </p>
      <Equation>{"0+x=x,\\qquad (-x)+x=0."}</Equation>
      <p>
        <MathText>{"Thus $X$ is an abelian group under addition."}</MathText>
      </p>
      <p>
        <strong>
          {
            "Scalar multiplication is compatible with multiplication in the field."
          }
        </strong>
        {
          " Multiplying the scalars first has the same effect as applying them successively."
        }
      </p>
      <Equation>{"(\\alpha\\beta)x=\\alpha(\\beta x)."}</Equation>
      <p>
        <strong>
          {"Scalar multiplication distributes over both kinds of addition."}
        </strong>
      </p>
      <Equation>
        {
          "(\\alpha+\\beta)x=\\alpha x+\\beta x,\\qquad \\alpha(x+y)=\\alpha x+\\alpha y."
        }
      </Equation>
      <p>
        <strong>{"The scalar identity acts as the identity."}</strong>
      </p>
      <Equation>{"1x=x."}</Equation>
      <p>
        <MathText>
          {
            "The notation $\\alpha x$ denotes scalar multiplication. Vectors need not be arrows or finite lists of numbers; functions and infinite sequences will also be vectors in the examples below."
          }
        </MathText>
      </p>
    </section>
  );
}
