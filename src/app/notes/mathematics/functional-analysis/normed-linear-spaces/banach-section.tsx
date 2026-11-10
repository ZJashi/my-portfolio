import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function BanachSection() {
  return (
    <section id="banach" className={styles.section}>
      <span className={styles.sectionNumber}>12 / LECTURE 3</span>
      <h2>Cauchy sequences, completeness and Banach spaces</h2>
      <NoteBox kind="definition" title="Cauchy sequence">
        <p>
          <MathText>
            {
              "A sequence $(x_k)$ in $X$ is Cauchy if its terms eventually become arbitrarily close to one another."
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\forall\\varepsilon>0\\ \\exists N\\ \\forall j,k\\geq N:\\quad\\|x_j-x_k\\|<\\varepsilon."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The definition compares pairs of late terms; it does not name a limit. Using a non-strict bound $\\leq\\varepsilon$ gives the same definition, since the condition is required for every positive tolerance."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Completeness">
        <p>
          <MathText>
            {
              "A normed space is complete if every Cauchy sequence converges to a point of that same space."
            }
          </MathText>
        </p>
        <Equation>
          {
            "(x_k)\\text{ Cauchy}\\quad\\Longrightarrow\\quad\\exists x\\in X:\\ \\|x_k-x\\|\\longrightarrow0."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The phrase “in $X$” matters. A sequence may approach a point in a larger ambient space while having no limit within the space under consideration. Completeness requires the limit to remain inside the space."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Banach space">
        <p>
          <MathText>
            {
              "A Banach space is a complete normed linear space. The norm supplies the metric, and completeness is understood with respect to that metric."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "Being a normed space and being a Banach space are different assertions. The constructions above establish norms on subspaces, products, closures and closed-subspace quotients; completeness requires its own justification."
          }
        </MathText>
      </p>
    </section>
  );
}
