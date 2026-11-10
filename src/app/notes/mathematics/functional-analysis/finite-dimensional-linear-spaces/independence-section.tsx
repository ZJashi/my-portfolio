import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function IndependenceSection() {
  return (
    <section id="independence" className={styles.section}>
      <span className={styles.sectionNumber}>01 / LECTURE 5</span>
      <h2>Linear independence and unique coordinates</h2>
      <p>
        <MathText>
          {
            "Let $X$ be a normed linear space over $\\mathbb K=\\mathbb R$ or $\\mathbb C$. The first definitions concern its algebraic structure and do not depend on the choice of norm."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Linear independence">
        <p>
          <MathText>
            {
              "Vectors $z_1,\\ldots,z_n$ are linearly independent if the zero vector has only the trivial representation as their linear combination."
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\sum_{j=1}^{n}\\alpha_jz_j=0\\quad\\Longrightarrow\\quad\\alpha_1=\\cdots=\\alpha_n=0."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Suppose a vector has two representations in terms of these vectors:"
          }
        </MathText>
      </p>
      <Equation>
        {"x=\\sum_{j=1}^{n}\\alpha_jz_j=\\sum_{j=1}^{n}\\beta_jz_j."}
      </Equation>
      <p>
        <MathText>
          {
            "Subtracting gives $\\sum_{j=1}^{n}(\\alpha_j-\\beta_j)z_j=0$. Linear independence forces $\\alpha_j=\\beta_j$ for every $j$. Thus the coefficients are unique whenever the representation exists. Write them as $\\alpha_j(x)$ to indicate their dependence on $x$."
          }
        </MathText>
      </p>
    </section>
  );
}
