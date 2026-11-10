import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function Section9Section() {
  return (
    <section id="section-9" className={styles.section}>
      <span className={styles.sectionNumber}>10 / LECTURE 1</span>
      <h2>The span consists of finite linear combinations</h2>
      <p>
        <strong>{"Theorem."}</strong>
        <MathText>
          {
            " The span of $S$ consists precisely of all finite linear combinations of elements of $S$."
          }
        </MathText>
      </p>
      <Equation>
        {
          "L(S)=\\left\\{\\sum_{j=1}^{n}\\alpha_jx_j:\n n\\geq0,\\ \\alpha_j\\in\\mathbb K,\\ x_j\\in S\\right\\}."
        }
      </Equation>
      <p>
        <strong>{"Important condition."}</strong>
        <MathText>
          {
            " Allowing $n=0$ includes the empty sum, defined as zero. This handles $S$ empty, for which $L(S)=\\{0\\}$. For nonempty $S$, allowing positive n already includes zero by choosing a zero coefficient."
          }
        </MathText>
      </p>
      <p>
        <strong>{"Proof."}</strong>
        <MathText>
          {
            " Call the set on the right $Z$. To establish equality, first show that $Z$ is a subspace containing $S$, then show that every subspace containing $S$ must contain $Z$."
          }
        </MathText>
      </p>
      <p>
        <strong>
          <MathText>{"Step 1: $Z$ is a subspace."}</MathText>
        </strong>
        <MathText>
          {
            " Take two vectors in $Z$ and a scalar $\\alpha$. Write each vector as a finite linear combination of elements of $S$."
          }
        </MathText>
      </p>
      <Equation>
        {"z_1=\\sum_{j=1}^{n_1}a_jx_j,\\qquad\nz_2=\\sum_{j=1}^{n_2}b_jy_j."}
      </Equation>
      <p>
        {
          "Distribute the scalar through the first sum and then add the second sum."
        }
      </p>
      <Equation>
        {
          "\\alpha z_1+z_2=\n\\sum_{j=1}^{n_1}(\\alpha a_j)x_j+\n\\sum_{j=1}^{n_2}b_jy_j."
        }
      </Equation>
      <p>
        <MathText>
          {
            "This is a finite linear combination with at most $n_1+n_2$ terms, all from $S$. It therefore belongs to $Z$. Since zero belongs to $Z$, this proves that $Z$ is a subspace."
          }
        </MathText>
      </p>

      <p>
        <strong>
          <MathText>{"Step 2: $Z$ contains $S$."}</MathText>
        </strong>
        <MathText>
          {
            " Any $x$ in $S$ is a one-term linear combination with coefficient 1."
          }
        </MathText>
      </p>
      <Equation>{"x=1x\\in Z."}</Equation>
      <p>
        <MathText>
          {
            "Since $Z$ is a subspace containing $S$, the smallest subspace property yields the first inclusion."
          }
        </MathText>
      </p>
      <Equation>{"L(S)\\subseteq Z."}</Equation>
      <p>
        <strong>
          <MathText>
            {"Step 3: Every subspace containing $S$ contains $Z$."}
          </MathText>
        </strong>
        <MathText>
          {
            " Let $Y$ be such a subspace and take any $z$ in $Z$. Express $z$ as a finite linear combination of elements of $S$. Each term's vector belongs to $Y$ because $S$ is contained in $Y$. Scalar multiplication keeps each term in $Y$, and finite addition keeps their sum in $Y$. Thus $z$ belongs to $Y$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "This holds for every subspace containing $S$, so $Z$ is contained in their intersection:"
          }
        </MathText>
      </p>
      <Equation>{"Z\\subseteq L(S)."}</Equation>
      <p>{"The two inclusions establish the theorem."}</p>
      <NoteBox kind="result" title="The span is all finite linear combinations">
        <Equation>{"Z=L(S)."}</Equation>
      </NoteBox>
      <p>
        {
          "The definition by intersection now has an explicit description. To belong to the span is exactly to be expressible as a finite linear combination of the original elements."
        }
      </p>
    </section>
  );
}
