import { Equation } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function PracticeSection() {
  return (
    <section id="practice" className={styles.section}>
      <span className={styles.sectionNumber}>06 / PRACTICE</span>
      <h2>Track amplitudes before probabilities.</h2>
      <div className={styles.exercise}>
        <h3>1. Reverse the bright output</h3>
        <p>
          What phase makes every photon reach D₁ in the open, ideal apparatus?
        </p>
        <details>
          <summary>Show solution</summary>
          <p>φ = π modulo 2π. Then cos²(φ/2) = 0 and sin²(φ/2) = 1.</p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>2. Condition on survival</h3>
        <p>
          An upper-arm absorber is present. In 400 incident trials, what counts
          do you expect at each outcome? Of the surviving photons, what fraction
          reaches D₁?
        </p>
        <details>
          <summary>Show solution</summary>
          <p>
            Expected counts are 200 absorbed, 100 at D₀, and 100 at D₁. Of the
            expected 200 survivors, half reach D₁. Individual data fluctuate
            around these expectations.
          </p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>3. Why not add path probabilities first?</h3>
        <p>
          What does a 50:50 classical path mixture predict for the open
          apparatus?
        </p>
        <details>
          <summary>Show reasoning</summary>
          <p>
            Each path separately gives equal output probabilities, so the
            mixture predicts 1/2 at each detector regardless of φ. It misses the
            coherent cross term that gives a dark port.
          </p>
          <Equation>{String.raw`|a+b|^2=|a|^2+|b|^2+2\operatorname{Re}(a^*b)`}</Equation>
        </details>
      </div>
    </section>
  );
}
