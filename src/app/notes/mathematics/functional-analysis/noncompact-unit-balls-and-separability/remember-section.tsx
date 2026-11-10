import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>11 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Separation from a closed subspace">
        <ul className={styles.takeaways}>
          <li>
            <strong>Riesz’s lemma.</strong>{" "}
            <MathText>
              {
                "For proper closed $Y\\subset X$ and $0<\\varepsilon<1$, a unit vector can be chosen at distance greater than $1-\\varepsilon$ from $Y$."
              }
            </MathText>
          </li>
          <li>
            <strong>Positive distance.</strong>{" "}
            <MathText>
              {
                "If $w\\notin Y$ and $Y$ is closed, then $\\operatorname{dist}(w,Y)>0$."
              }
            </MathText>
          </li>
          <li>
            <strong>No nearest point needed.</strong>{" "}
            <MathText>
              {
                "An approximate minimizer and normalization give the bound; the infimum need not be attained."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="The compactness divide">
        <ul className={styles.takeaways}>
          <li>
            <strong>Closed finite spans.</strong>{" "}
            <MathText>
              {"Every finite dimensional subspace of a normed space is closed."}
            </MathText>
          </li>
          <li>
            <strong>Separated unit vectors.</strong>{" "}
            <MathText>
              {
                "In infinite dimensions, construct $\\|z_j\\|=1$ with $\\|z_j-z_k\\|>1/2$ for distinct indices."
              }
            </MathText>
          </li>
          <li>
            <strong>No compact unit ball.</strong>{" "}
            <MathText>
              {
                "This sequence has no convergent subsequence. The closed unit ball is norm compact exactly in finite dimensions."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="definition" title="Separability and total variation">
        <ul className={styles.takeaways}>
          <li>
            <strong>Separable.</strong>{" "}
            <MathText>{"A space has a countable dense subset."}</MathText>
          </li>
          <li>
            <strong>Measure norm.</strong>{" "}
            <MathText>
              {
                "For finite signed measures, use the Jordan decomposition and $\\|\\mu\\|_{\\mathrm{TV}}=\\mu^+(\\Omega)+\\mu^-(\\Omega)$."
              }
            </MathText>
          </li>
          <li>
            <strong>Dirac separation.</strong>{" "}
            <MathText>
              {
                "Distinct Dirac measures are distance two apart. Their uncountable family prevents a countable dense subset in total variation."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
