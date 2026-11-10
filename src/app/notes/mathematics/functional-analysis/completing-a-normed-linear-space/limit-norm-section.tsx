import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function LimitNormSection() {
  return (
    <section id="limit-norm" className={styles.section}>
      <span className={styles.sectionNumber}>04 / LECTURE 4</span>
      <h2>Defining the norm by a limit</h2>
      <NoteBox kind="definition" title="Norm on the completion">
        <Equation>
          {
            "\\bigl\\|[(x_j)]\\bigr\\|_{\\widehat X}=\\lim_{j\\to\\infty}\\|x_j\\|_X."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Two facts must be established before this formula is usable: the real limit must exist, and it must be independent of the representative sequence."
          }
        </MathText>
      </p>
      <h3>Existence of the limit</h3>
      <p>
        <MathText>
          {
            "For a Cauchy sequence $(x_j)$, the reverse triangle inequality gives"
          }
        </MathText>
      </p>
      <Equation>
        {"\\bigl|\\|x_j\\|_X-\\|x_k\\|_X\\bigr|\\leq\\|x_j-x_k\\|_X."}
      </Equation>
      <p>
        <MathText>
          {
            "The right side is arbitrarily small for sufficiently large $j,k$. Hence $(\\|x_j\\|_X)$ is a Cauchy sequence of real numbers. Completeness of $\\mathbb R$ guarantees a finite limit. This does not require $X$ to be complete."
          }
        </MathText>
      </p>
      <h3>Independence of representatives</h3>
      <p>
        <MathText>{"If $(x_j)\\sim(u_j)$, the same inequality gives"}</MathText>
      </p>
      <Equation>
        {
          "\\bigl|\\|x_j\\|_X-\\|u_j\\|_X\\bigr|\\leq\\|x_j-u_j\\|_X\\longrightarrow0."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Both real limits exist and their difference is zero, so they coincide. The proposed norm therefore depends only on the equivalence class."
          }
        </MathText>
      </p>
    </section>
  );
}
