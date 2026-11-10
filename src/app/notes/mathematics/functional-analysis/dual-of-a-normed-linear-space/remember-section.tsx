import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>08 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Definitions and estimates">
        <ul className={styles.takeaways}>
          <li>
            <strong>Dual.</strong>{" "}
            <MathText>
              {
                "$X'$ consists of continuous, equivalently bounded, linear functionals."
              }
            </MathText>
          </li>
          <li>
            <strong>Norm.</strong>{" "}
            <MathText>
              {
                "$\\|L\\|=\\sup_{\\|x\\|\\leq1}|L(x)|$ is the best constant in $|L(x)|\\leq\\|L\\|\\|x\\|$."
              }
            </MathText>
          </li>
          <li>
            <strong>Continuity.</strong>{" "}
            <MathText>
              {
                "For linear functionals it suffices to check continuity at zero."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="Structure and completeness">
        <ul className={styles.takeaways}>
          <li>
            <strong>Kernel.</strong>{" "}
            <MathText>
              {"$\\ker L$ is closed and has codimension one when $L\\neq0$."}
            </MathText>
          </li>
          <li>
            <strong>Banach dual.</strong>{" "}
            <MathText>{"$X'$ is complete even if $X$ is incomplete."}</MathText>
          </li>
          <li>
            <strong>Proof strategy.</strong>{" "}
            <MathText>
              {
                "Construct a scalar pointwise limit, verify boundedness and linearity, then pass the uniform Cauchy estimate to the limit."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
