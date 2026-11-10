import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function DualSection() {
  return (
    <section id="dual" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 12</span>
      <h2>The dual space and its norm</h2>
      <NoteBox kind="definition" title="Continuous dual">
        <p>
          <MathText>
            {
              "The dual is the vector space of bounded linear functionals, with pointwise addition and scalar multiplication."
            }
          </MathText>
        </p>
        <Equation>
          {"X'=\\{L:X\\to\\mathbb K:\\ L\\text{ is linear and continuous}\\}."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "If $L,M\\in X'$ have bounds $C_L,C_M$, then $|(\\alpha L+\\beta M)(x)|\\leq(|\\alpha|C_L+|\\beta|C_M)\\|x\\|$. Thus linear combinations stay in $X'$. The continuous dual differs from the algebraic dual, which includes every linear functional."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Dual norm">
        <p>
          <MathText>
            {"The norm measures the largest output magnitude on the unit ball."}
          </MathText>
        </p>
        <Equation>
          {
            "\\|L\\|=\\sup_{\\|x\\|\\leq1}|L(x)|=\\sup_{x\\neq0}\\frac{|L(x)|}{\\|x\\|}."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The ratio formula applies when $X\\neq\\{0\\}$; normalizing each nonzero input also gives $\\|L\\|=\\sup_{\\|x\\|=1}|L(x)|$. The ball formula covers the zero space as well. A supremum need not be attained."
          }
        </MathText>
      </p>
      <Equation>{"|L(x)|\\leq\\|L\\|\\|x\\|\\qquad(x\\in X)."}</Equation>
      <p>
        <MathText>
          {
            "Every constant bounding $|L(x)|/\\|x\\|$ is at least $\\|L\\|$, and the displayed inequality shows that $\\|L\\|$ itself is admissible. It is therefore the optimal bound."
          }
        </MathText>
      </p>
    </section>
  );
}
