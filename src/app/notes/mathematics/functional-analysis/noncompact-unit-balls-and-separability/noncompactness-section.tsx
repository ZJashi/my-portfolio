import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function NoncompactnessSection() {
  return (
    <section id="noncompactness" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 7</span>
      <h2>Why no subsequence can converge</h2>
      <p>
        <MathText>
          {
            "Every vector $z_j$ belongs to the closed unit ball. Suppose a subsequence converged to some $x\\in X$. Any convergent sequence is Cauchy: the triangle inequality bounds the distance between two late terms by the sum of their distances to $x$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "But any two distinct terms of this subsequence remain more than $1/2$ apart. Taking a Cauchy tolerance of $1/4$ gives an immediate contradiction. Thus the sequence has no convergent subsequence, and the closed unit ball is not compact."
          }
        </MathText>
      </p>
      <NoteBox
        kind="result"
        title="Compact unit balls characterize finite dimension"
      >
        <p>
          <MathText>
            {
              "Combining this result with the finite dimensional compactness theorem gives"
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\overline B_X(0,1)\\text{ is norm compact}\\quad\\Longleftrightarrow\\quad\\dim X<\\infty."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Closedness and boundedness alone therefore do not guarantee compactness in an infinite dimensional normed space. This is a statement about the norm topology."
          }
        </MathText>
      </p>
    </section>
  );
}
