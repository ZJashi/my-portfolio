import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function BasisSection() {
  return (
    <section id="basis" className={styles.section}>
      <span className={styles.sectionNumber}>02 / LECTURE 5</span>
      <h2>Bases and maximal independent families</h2>
      <NoteBox kind="definition" title="Basis">
        <p>
          <MathText>
            {
              "A basis is a linearly independent family that spans $X$. For a finite basis $z_1,\\ldots,z_n$, every $x\\in X$ has a unique expansion"
            }
          </MathText>
        </p>
        <Equation>{"x=\\sum_{j=1}^{n}\\alpha_j(x)z_j."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Such a family is maximal among linearly independent families: no additional vector can be added while preserving independence. Conversely, a maximal linearly independent family must span the space. If $x$ were outside its span, a relation $a x+\\sum_j b_jz_j=0$ would force $a=0$; otherwise it would express $x$ in the span. Independence would then force all $b_j=0$, so adjoining $x$ would give a larger independent family."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Uniqueness also shows that each coordinate map is linear. Expand $x$ and $u$ in the basis and combine their expansions:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\alpha_j(ax+bu)=a\\alpha_j(x)+b\\alpha_j(u),\\qquad a,b\\in\\mathbb K."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Existence comes from spanning; uniqueness comes from independence. Both are needed to make these coordinate maps well defined."
          }
        </MathText>
      </p>
    </section>
  );
}
