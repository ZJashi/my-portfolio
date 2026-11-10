import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function SeparatedSequenceSection() {
  return (
    <section id="separated-sequence" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 7</span>
      <h2>Constructing separated unit vectors</h2>
      <p>
        <MathText>
          {
            "We construct vectors $z_1,z_2,\\ldots$ inductively, maintaining three properties: each has norm one, distinct vectors are separated by more than $1/2$, and every initial finite family is linearly independent."
          }
        </MathText>
      </p>
      <h3>Start with one unit vector</h3>
      <p>
        <MathText>
          {
            "Choose $w\\ne0$ and set $z_1=w/\\|w\\|$. The single vector has norm one and is linearly independent."
          }
        </MathText>
      </p>
      <h3>Apply the lemma to the previous span</h3>
      <p>
        <MathText>
          {
            "Suppose $z_1,\\ldots,z_n$ have been chosen. Their span $Y_n$ is a finite dimensional closed subspace. Since $X$ is infinite dimensional, $Y_n\\ne X$. Apply Riesz’s lemma with $\\varepsilon=1/2$ to obtain $z_{n+1}$ satisfying"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|z_{n+1}\\|=1,\\qquad \\operatorname{dist}(z_{n+1},Y_n)>\\frac12."}
      </Equation>
      <p>
        <MathText>
          {
            "Each earlier vector lies in $Y_n$, so $\\|z_{n+1}-z_j\\|>1/2$ for $1\\leq j\\leq n$. Also $z_{n+1}\\notin Y_n$."
          }
        </MathText>
      </p>
      <h3>Verify independence after the new choice</h3>
      <p>
        <MathText>{"Consider a relation"}</MathText>
      </p>
      <Equation>{"a z_{n+1}+\\sum_{j=1}^{n}a_jz_j=0."}</Equation>
      <p>
        <MathText>
          {
            "If $a\\ne0$, division by $a$ expresses $z_{n+1}$ as a linear combination of the previous vectors, contradicting $z_{n+1}\\notin Y_n$. Thus $a=0$, after which independence of $z_1,\\ldots,z_n$ forces every $a_j=0$. The enlarged family is independent, completing the induction."
          }
        </MathText>
      </p>
      <NoteBox
        kind="result"
        title="A uniformly separated sequence on the unit sphere"
      >
        <Equation>
          {"\\|z_j\\|=1,\\qquad \\|z_j-z_k\\|>\\frac12\\quad(j\\ne k)."}
        </Equation>
      </NoteBox>
    </section>
  );
}
