import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function Section10Section() {
  return (
    <section id="section-10" className={styles.section}>
      <span className={styles.sectionNumber}>11 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="The structure of a linear space">
        <ul className={styles.takeaways}>
          <li>
            <strong>Two operations:</strong> addition makes{" "}
            <MathText>
              {
                "$X$ an abelian group; scalar multiplication by $\\mathbb K$ is associative, distributive and satisfies $1x=x$."
              }
            </MathText>
          </li>
          <li>
            <strong>Zero and inverses:</strong>{" "}
            <MathText>{"$0_{\\mathbb K}x=0_X$ and $(-1)x=-x$."}</MathText>
          </li>
          <li>
            <strong>Examples:</strong> polynomials, continuous functions,
            sequences and <MathText>{"$L^p$ spaces."}</MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="definition" title="How subspaces combine">
        <ul className={styles.takeaways}>
          <li>
            <strong>Subspace test:</strong>{" "}
            <MathText>
              {
                "$Y$ must be nonempty and satisfy $\\alpha x+y\\in Y$ for every $x,y\\in Y$ and $\\alpha\\in\\mathbb K$."
              }
            </MathText>
          </li>
          <li>
            <strong>Sums and intersections:</strong> the sum of two subspaces
            and any intersection of subspaces are subspaces.
          </li>
          <li>
            <strong>Unions need a condition:</strong> the union of a nonempty
            chain is a subspace; an arbitrary union can fail to be closed under
            addition.
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="Two equivalent descriptions of the span">
        <ul className={styles.takeaways}>
          <li>
            <strong>By containment:</strong>{" "}
            <MathText>
              {"$L(S)$ is the smallest subspace containing $S$."}
            </MathText>
          </li>
          <li>
            <strong>By construction:</strong> its elements are exactly the{" "}
            <strong>finite linear combinations</strong> of elements of{" "}
            <MathText>{"$S$."}</MathText>
          </li>
          <li>
            <strong>Empty set:</strong>{" "}
            <MathText>
              {"$L(\\varnothing)=\\{0\\}$, using the empty sum."}
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
