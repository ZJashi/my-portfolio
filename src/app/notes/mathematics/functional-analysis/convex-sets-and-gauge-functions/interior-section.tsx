import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function InteriorSection() {
  return (
    <section id="interior" className={styles.section}>
      <span className={styles.sectionNumber}>01 / LECTURE 10</span>
      <h2>Algebraic interior points</h2>
      <p>
        <MathText>
          {
            "Work in a real vector space $X$. No norm or topology is assumed. The relevant notion of interior measures how far one can move in each individual direction while remaining in a set."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Algebraic interior">
        <p>
          <MathText>
            {
              "A point $a\\in S\\subseteq X$ is an algebraic interior point of $S$ if, for every direction $v\\in X$, there exists $\\varepsilon_v>0$ such that"
            }
          </MathText>
        </p>
        <Equation>
          {"a+t v\\in S\\qquad\\text{whenever }|t|\\leq\\varepsilon_v."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The set of these points is called the algebraic interior or core, written $\\operatorname{core}S$. The positive number may depend on the direction. Replacing the non-strict parameter bound by a strict one gives the same definition after shrinking the parameter."
          }
        </MathText>
      </p>
      <NoteBox
        kind="definition"
        title="Directional interior is not a ball condition"
      >
        <p>
          <MathText>
            {
              "There need not be one common radius that works in every direction. Algebraic interior does not by itself assert that a norm ball is contained in the set. For convex sets in finite dimensional spaces it agrees with ordinary interior; in infinite dimensions the distinction matters."
            }
          </MathText>
        </p>
      </NoteBox>
    </section>
  );
}
