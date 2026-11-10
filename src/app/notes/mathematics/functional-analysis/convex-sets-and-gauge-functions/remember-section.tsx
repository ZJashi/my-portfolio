import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>09 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Interior and admissible scales">
        <ul className={styles.takeaways}>
          <li>
            <strong>Core.</strong>{" "}
            <MathText>
              {
                "At an algebraic interior point, every direction admits a short segment in the set. The segment length may depend on the direction."
              }
            </MathText>
          </li>
          <li>
            <strong>Gauge.</strong>{" "}
            <MathText>
              {
                "$p_{K,a}(v)=\\inf\\{\\lambda>0:a+v/\\lambda\\in K\\}$ is finite and nonnegative when $a\\in\\operatorname{core}K$."
              }
            </MathText>
          </li>
          <li>
            <strong>Scale interval.</strong>{" "}
            <MathText>
              {
                "Admissible scales are upward closed. Every scale strictly above the infimum is admissible; the endpoint need not be."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox
        kind="result"
        title="The link between convexity and sublinearity"
      >
        <ul className={styles.takeaways}>
          <li>
            <strong>Sublinear gauge.</strong>{" "}
            <MathText>
              {
                "Positive homogeneity follows by rescaling. Subadditivity follows from convex weights built from approximate admissible scales."
              }
            </MathText>
          </li>
          <li>
            <strong>Core threshold.</strong>{" "}
            <MathText>
              {
                "$a+v\\in\\operatorname{core}K$ exactly when $p(v)<1$; membership in $K$ only guarantees $p(v)\\leq1$."
              }
            </MathText>
          </li>
          <li>
            <strong>Converse.</strong>{" "}
            <MathText>
              {
                "Finite nonnegative sublinear functions have convex unit sublevels, and zero is a core point of the strict sublevel."
              }
            </MathText>
          </li>
          <li>
            <strong>Not necessarily a norm.</strong>{" "}
            <MathText>
              {"A gauge can be asymmetric and can vanish at nonzero vectors."}
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
