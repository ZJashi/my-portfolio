import { Equation } from "@/components/notes/Equation";
import styles from "../../../notes.styles";
export function PracticeSection() {
  return (
    <section id="practice" className={styles.section}>
      <span className={styles.sectionNumber}>07 / PRACTICE</span>
      <h2>Check what cancels.</h2>
      <div className={styles.exercise}>
        <h3>1. Locate the center</h3>
        <p>Masses 2 kg and 6 kg sit at x = −1 m and x = 3 m. Find R.</p>
        <details>
          <summary>Show solution</summary>
          <Equation>{String.raw`R=\frac{2(-1)+6(3)}8=2\ \mathrm m`}</Equation>
          <p>It lies closer to the heavier particle.</p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>2. Can internal forces accelerate the center?</h3>
        <p>
          Two isolated particles interact through a central spring. Can their
          center accelerate while they oscillate?
        </p>
        <details>
          <summary>Show reasoning</summary>
          <p>
            No. The spring forces cancel in the total force, so the center has
            constant velocity. Each particle can accelerate relative to it.
          </p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>3. Count the pairs</h3>
        <p>
          How many distinct pair potentials occur for five particles? Why does
          an ordered sum need a factor of ½?
        </p>
        <details>
          <summary>Show solution</summary>
          <Equation>{String.raw`N_{\mathrm{pairs}}=\frac{5(5-1)}2=10`}</Equation>
          <p>
            The ordered sum contains 20 entries; each physical pair occurs
            twice.
          </p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>4. Momentum is conserved; is kinetic energy?</h3>
        <p>
          Two equal masses approach each other at speeds u and stick together.
          Ignore external impulse. What happens to total momentum and kinetic
          energy?
        </p>
        <details>
          <summary>Show reasoning</summary>
          <p>
            Total momentum is initially zero and remains zero. The joined object
            is at rest, so translational kinetic energy falls from mu² to zero.
            Energy is transferred into deformation, heat, and other internal
            forms. Momentum conservation alone never guaranteed kinetic-energy
            conservation.
          </p>
        </details>
      </div>
      <ul className={styles.takeaways}>
        <li>
          Equal-and-opposite internal forces cancel in the momentum balance.
        </li>
        <li>
          Central internal pairs also cancel in the angular-momentum balance.
        </li>
        <li>Internal work need not vanish: relative motion matters.</li>
        <li>
          Angular momentum and kinetic energy each split into center motion and
          motion about the center.
        </li>
      </ul>
    </section>
  );
}
