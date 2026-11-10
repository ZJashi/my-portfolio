import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function UnitBallSection() {
  return (
    <section id="unit-ball" className={styles.section}>
      <span className={styles.sectionNumber}>01 / LECTURE 7</span>
      <h2>The closed unit ball in infinite dimensions</h2>
      <p>
        <MathText>
          {
            "Let $X$ be an infinite dimensional normed linear space over $\\mathbb R$ or $\\mathbb C$. In finite dimensions, the closed unit ball is compact. Infinite dimension changes this conclusion even when the space is complete."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Noncompactness of the unit ball">
        <p>
          <MathText>
            {
              "If $X$ is infinite dimensional, its closed unit ball is not compact in the norm topology."
            }
          </MathText>
        </p>
        <Equation>
          {"\\overline B_X(0,1)=\\{x\\in X:\\|x\\|\\leq1\\}."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "We will construct a sequence of unit vectors with pairwise distances bounded below by a fixed positive constant. No subsequence can then be Cauchy, and hence no subsequence can converge. Since compact metric spaces have convergent subsequences for all sequences, the ball cannot be compact."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The proof does not assume that $X$ is Banach. It relies on a separation statement for proper closed subspaces, often called Riesz’s lemma."
          }
        </MathText>
      </p>
    </section>
  );
}
