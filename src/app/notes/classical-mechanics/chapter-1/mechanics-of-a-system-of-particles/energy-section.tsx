import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import styles from "../../../notes.styles";
export function EnergySection() {
  return (
    <section id="energy" className={styles.section}>
      <span className={styles.sectionNumber}>
        05 / ENERGY HAS TWO PARTS TOO
      </span>
      <h2>Internal forces can do work.</h2>
      <p>
        Sum the single-particle work–energy theorems. Each force must be paired
        with the displacement of the particle on which it acts.
      </p>
      <Equation>{String.raw`T=\frac12\sum_i m_i v_i^2,\qquad W_{\mathrm{ext}}+W_{\mathrm{int}}=T_2-T_1`}</Equation>
      <p>
        For one equal-and-opposite pair, the total work is proportional to the
        change in their relative position, rather than their common translation.
      </p>
      <Equation>{String.raw`dW_{ij}=\mathbf f_{ij}\cdot d\mathbf r_i+\mathbf f_{ji}\cdot d\mathbf r_j=\mathbf f_{ij}\cdot d(\mathbf r_i-\mathbf r_j)`}</Equation>
      <p>
        Two particles moving apart under a repulsive force can both gain kinetic
        energy while their net force sums to zero. The displacements differ, so
        the work does not cancel.
      </p>
      <p>Substituting the center-of-mass velocity split into T gives:</p>
      <Equation>{String.raw`T=\frac12 M V_{\mathrm{CM}}^2+\mathbf V_{\mathrm{CM}}\cdot\sum_i m_i\mathbf v'_i+\frac12\sum_i m_i(v'_i)^2`}</Equation>
      <p>
        The middle term vanishes. Thus kinetic energy separates into translation
        of the center of mass and motion relative to it.
      </p>
      <NoteBox
        kind="result"
        title="Kinetic energy · Translation plus relative motion"
      >
        <Equation>{String.raw`T=\frac12 M V_{\mathrm{CM}}^2+T_{\mathrm{CM}},\qquad T_{\mathrm{CM}}=\frac12\sum_i m_i(v'_i)^2`}</Equation>
      </NoteBox>
      <div className={styles.workedExample}>
        <span className={styles.sectionNumber}>
          WORKED EXAMPLE / CHECK BOTH DESCRIPTIONS
        </span>
        <p>
          Take masses 1 kg and 3 kg with velocities +4 m/s and 0. Their total
          momentum is 4 kg·m/s and the center-of-mass velocity is 1 m/s.
        </p>
        <Equation>{String.raw`T=8\ \mathrm J,\qquad T_{\mathrm{translation}}=\tfrac12(4)(1)^2=2\ \mathrm J`}</Equation>
        <Equation>{String.raw`T_{\mathrm{CM}}=\tfrac12(1)(3)^2+\tfrac12(3)(-1)^2=6\ \mathrm J`}</Equation>
        <p>
          The two parts add to 8 J. The relative motion is not captured by
          treating all the mass as a single moving point.
        </p>
      </div>
    </section>
  );
}
