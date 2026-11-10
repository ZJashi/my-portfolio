import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function BoundedSection() {
  return (
    <section id="bounded" className={styles.section}>
      <span className={styles.sectionNumber}>01 / LECTURE 6</span>
      <h2>Every Cauchy sequence is bounded</h2>
      <p>
        <MathText>
          {
            "Throughout, $X$ is a normed linear space over $\\mathbb K=\\mathbb R$ or $\\mathbb C$. A fact used repeatedly in completeness proofs is that a Cauchy sequence has a uniform bound on its norms."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Boundedness of Cauchy sequences">
        <p>
          <MathText>
            {
              "If $(x_n)$ is Cauchy in $X$, there is a finite constant $C$ such that"
            }
          </MathText>
        </p>
        <Equation>{"\\|x_n\\|\\leq C\\qquad(n\\geq1)."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Choose the Cauchy tolerance to be one. There is $N$ such that $\\|x_n-x_m\\|\\leq1$ whenever $n,m\\geq N$. Fix $m=N$. For $n\\geq N$, the triangle inequality gives"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|x_n\\|\\leq\\|x_n-x_N\\|+\\|x_N\\|\\leq1+\\|x_N\\|."}
      </Equation>
      <p>
        <MathText>
          {
            "The finitely many earlier terms are also bounded. For example, $C=1+\\max_{1\\leq k\\leq N}\\|x_k\\|$ bounds the whole sequence. The converse is false: boundedness alone does not make a sequence Cauchy."
          }
        </MathText>
      </p>
    </section>
  );
}
