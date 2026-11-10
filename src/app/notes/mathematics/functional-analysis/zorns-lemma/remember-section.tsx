import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>09 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Order vocabulary">
        <ul className={styles.takeaways}>
          <li>
            <strong>Partial order.</strong>{" "}
            <MathText>
              {
                "Reflexivity, antisymmetry and transitivity; some pairs may be incomparable."
              }
            </MathText>
          </li>
          <li>
            <strong>Chain.</strong>{" "}
            <MathText>{"A subset in which every pair is comparable."}</MathText>
          </li>
          <li>
            <strong>Upper bound.</strong>{" "}
            <MathText>
              {
                "A point of the ambient ordered set lying above every element of the subset."
              }
            </MathText>
          </li>
          <li>
            <strong>Maximal versus greatest.</strong>{" "}
            <MathText>
              {
                "A maximal element has no strict enlargement; a greatest element lies above every element."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="Zorn’s lemma and its application">
        <ul className={styles.takeaways}>
          <li>
            <strong>Hypothesis.</strong>{" "}
            <MathText>
              {
                "The ordered set is nonempty, and every chain has an upper bound in that same ordered set."
              }
            </MathText>
          </li>
          <li>
            <strong>Conclusion.</strong>{" "}
            <MathText>
              {
                "There is a maximal element, not necessarily a unique or greatest one."
              }
            </MathText>
          </li>
          <li>
            <strong>Basis construction.</strong>{" "}
            <MathText>
              {
                "Order independent subsets by inclusion. The union of a chain stays independent because each finite selection lies in one chain member."
              }
            </MathText>
          </li>
          <li>
            <strong>Spanning.</strong>{" "}
            <MathText>
              {
                "A vector outside the maximal independent set’s span could be adjoined, contradicting maximality."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
