import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function HullSection() {
  return (
    <section id="hull" className={styles.section}>
      <span className={styles.sectionNumber}>10 / LECTURE 2</span>
      <h2>The convex hull</h2>
      <p>
        <MathText>
          {
            "Let $S\\subseteq X$ be any subset of a real linear space. To construct the smallest convex set containing $S$, intersect every convex set that contains it."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Convex hull">
        <Equation>
          {
            "\\operatorname{co}(S)=\\bigcap\\{C\\subseteq X:C\\text{ is convex and }S\\subseteq C\\}."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The family being intersected is nonempty because $X$ itself is convex and contains $S$. Three properties characterize the result:"
          }
        </MathText>
      </p>
      <ul className={styles.takeaways}>
        <li>
          <strong>Convexity.</strong>{" "}
          <MathText>
            {
              "An intersection of convex sets is convex, so $\\operatorname{co}(S)$ is convex."
            }
          </MathText>
        </li>
        <li>
          <strong>Containment.</strong>{" "}
          <MathText>
            {
              "Every set in the defining family contains $S$, hence their intersection contains $S$."
            }
          </MathText>
        </li>
        <li>
          <strong>Minimality.</strong>{" "}
          <MathText>
            {
              "If $C$ is convex and $S\\subseteq C$, then $C$ is one of the sets being intersected, so $\\operatorname{co}(S)\\subseteq C$."
            }
          </MathText>
        </li>
      </ul>
      <p>
        <MathText>
          {
            "Thus “smallest” means contained in every convex set containing $S$. This is the convex analogue of the smallest-subspace description of the linear span."
          }
        </MathText>
      </p>
    </section>
  );
}
