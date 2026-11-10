import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function PartialOrderSection() {
  return (
    <section id="partial-order" className={styles.section}>
      <span className={styles.sectionNumber}>01 / LECTURE 8</span>
      <h2>Partial orders</h2>
      <p>
        <MathText>
          {
            "A partial order describes how elements can be compared without requiring every pair to be comparable. Write $x\\preceq y$ for the relation, reserving the ordinary numerical order for scalars."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Partial order">
        <p>
          <MathText>
            {
              "A relation $\\preceq$ on a set $P$ is a partial order when it is reflexive, antisymmetric and transitive."
            }
          </MathText>
        </p>
      </NoteBox>
      <ul className={styles.takeaways}>
        <li>
          <strong>Reflexive.</strong>{" "}
          <MathText>{"$x\\preceq x$ for every $x\\in P$."}</MathText>
        </li>
        <li>
          <strong>Antisymmetric.</strong>{" "}
          <MathText>
            {"If $x\\preceq y$ and $y\\preceq x$, then $x=y$."}
          </MathText>
        </li>
        <li>
          <strong>Transitive.</strong>{" "}
          <MathText>
            {"If $x\\preceq y$ and $y\\preceq z$, then $x\\preceq z$."}
          </MathText>
        </li>
      </ul>
      <p>
        <MathText>
          {
            "Antisymmetry allows distinct elements to be incomparable. It only rules out two distinct elements that are each below the other."
          }
        </MathText>
      </p>
      <h3>Example — Inclusion of subsets</h3>
      <p>
        <MathText>
          {
            "For a fixed set $\\Omega$, order its subsets by $A\\preceq B$ when $A\\subseteq B$. Every set contains itself; mutual inclusion gives equality; and inclusion is transitive. Thus inclusion is a partial order. It is not generally a total order: $\\{1,2\\}$ and $\\{3,4\\}$ are incomparable as subsets of $\\{1,2,3,4\\}$."
          }
        </MathText>
      </p>
    </section>
  );
}
