import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function AlgebraicBasisSection() {
  return (
    <section id="algebraic-basis" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 8</span>
      <h2>Algebraic bases in arbitrary dimensions</h2>
      <p>
        <MathText>
          {
            "Let $X$ be a vector space over a field $\\mathbb K$. A potentially infinite family is linearly independent when every finite subfamily of distinct vectors is independent."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Algebraic basis">
        <p>
          <MathText>
            {
              "A set $B\\subseteq X$ is an algebraic basis, also called a Hamel basis, if every finite subset of $B$ is linearly independent and $\\operatorname{span}B=X$."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "Every vector is then a finite linear combination of basis vectors, with unique coefficients after combining repeated terms. The index set may be countable or uncountable. No infinite sums or topological limits enter this definition; an algebraic basis is different from a basis defined through convergence of series."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Existence of a basis">
        <p>
          <MathText>
            {"Every vector space has an algebraic basis, using Zorn’s lemma."}
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "We will obtain a maximal independent set and then show that maximality forces it to span the whole space."
          }
        </MathText>
      </p>
    </section>
  );
}
