import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>09 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Bidual and reflexivity">
        <ul className={styles.takeaways}>
          <li>
            <strong>Canonical embedding.</strong>{" "}
            <MathText>
              {"$(Jx)(\\ell)=\\ell(x)$ and $\\|Jx\\|=\\|x\\|$."}
            </MathText>
          </li>
          <li>
            <strong>Reflexivity.</strong>{" "}
            <MathText>
              {
                "$J$ is onto: every element of $X''$ comes from a vector of $X$. Reflexive spaces are complete."
              }
            </MathText>
          </li>
          <li>
            <strong>Examples.</strong>{" "}
            <MathText>
              {
                "Finite dimensional spaces and $L^p$ for $1<p<\\infty$ are reflexive; the latter uses integral duality."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="Consequences and counterexamples">
        <ul className={styles.takeaways}>
          <li>
            <strong>Norm attainment.</strong>{" "}
            <MathText>
              {
                "In a real reflexive space every nonzero bounded functional attains its norm at a unit vector."
              }
            </MathText>
          </li>
          <li>
            <strong>Continuous functions.</strong>{" "}
            <MathText>
              {
                "$C([-1,1])$ is not reflexive: the signed integral example has norm two but never attains it."
              }
            </MathText>
          </li>
          <li>
            <strong>Separability.</strong>{" "}
            <MathText>
              {
                "$X'$ separable implies $X$ separable. The converse fails, as the evaluation functionals in $C([-1,1])'$ demonstrate."
              }
            </MathText>
          </li>
          <li>
            <strong>Closed subspaces.</strong>{" "}
            <MathText>
              {
                "A closed linear subspace of a reflexive space is reflexive. Use restriction, ambient reflexivity, separation, and Hahn–Banach extension."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
