import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function HyperplanesSection() {
  return (
    <section id="hyperplanes" className={styles.section}>
      <span className={styles.sectionNumber}>01 / LECTURE 11</span>
      <h2>Hyperplanes and half-spaces</h2>
      <p>
        <MathText>
          {
            "Work in a real vector space $X$. A linear functional $L:X\\to\\mathbb R$ is nonzero when it is not identically zero; it may still vanish on many vectors, including zero."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Hyperplane">
        <p>
          <MathText>
            {
              "For a nonzero linear functional $L$ and $c\\in\\mathbb R$, the associated affine hyperplane is"
            }
          </MathText>
        </p>
        <Equation>{"H=\\{x\\in X:L(x)=c\\}."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The associated strict half-spaces are $\\{L<c\\}$ and $\\{L>c\\}$, and the non-strict half-spaces are $\\{L\\leq c\\}$ and $\\{L\\geq c\\}$. The latter include the hyperplane."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Algebraic geometry and topology">
        <p>
          <MathText>
            {
              "Interior in these separation results means algebraic interior, or core, as defined in Lecture 10. No topology or continuity of the separating functional is assumed. A non-strict half-space is not thereby asserted to be topologically closed; that conclusion requires a continuous functional in a specified topology."
            }
          </MathText>
        </p>
      </NoteBox>
    </section>
  );
}
