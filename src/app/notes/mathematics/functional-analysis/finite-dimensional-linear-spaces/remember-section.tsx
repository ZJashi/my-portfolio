import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>10 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Bases and dimension">
        <ul className={styles.takeaways}>
          <li>
            <strong>Coordinates.</strong>{" "}
            <MathText>
              {
                "Independence gives uniqueness; spanning gives existence. A basis supplies both."
              }
            </MathText>
          </li>
          <li>
            <strong>Dimension.</strong>{" "}
            <MathText>
              {
                "All finite bases have the same size. Comparing two bases gives $AB=I_m$ and $BA=I_n$, hence $m=n$."
              }
            </MathText>
          </li>
          <li>
            <strong>Coordinate maps.</strong>{" "}
            <MathText>{"Each $\\alpha_j:X\\to\\mathbb K$ is linear."}</MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="The estimate behind the proofs">
        <ul className={styles.takeaways}>
          <li>
            <strong>Uniform coordinate bound.</strong>{" "}
            <MathText>
              {
                "$\\sum_j|\\alpha_j(x)|\\leq C\\|x\\|$. Normalizing a hypothetical counterexample produces a contradiction with independence."
              }
            </MathText>
          </li>
          <li>
            <strong>Coordinate norm.</strong>{" "}
            <MathText>
              {
                "$\\|x\\|_0=\\sum_j|\\alpha_j(x)|$ is equivalent to every norm on $X$."
              }
            </MathText>
          </li>
          <li>
            <strong>Finite extraction.</strong>{" "}
            <MathText>
              {
                "Finitely many bounded scalar coordinates admit one common convergent subsequence."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="definition" title="Consequences of finite dimension">
        <ul className={styles.takeaways}>
          <li>
            <strong>Compactness.</strong>{" "}
            <MathText>
              {
                "The closed unit ball is compact; subsequential limits stay inside it."
              }
            </MathText>
          </li>
          <li>
            <strong>Norm equivalence.</strong>{" "}
            <MathText>
              {
                "All norms on the same finite dimensional vector space induce the same topology."
              }
            </MathText>
          </li>
          <li>
            <strong>Completeness.</strong>{" "}
            <MathText>
              {
                "Every Cauchy sequence has a limit in $X$. Every finite dimensional normed space is Banach."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
