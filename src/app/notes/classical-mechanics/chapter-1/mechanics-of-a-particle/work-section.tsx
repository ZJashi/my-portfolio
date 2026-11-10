import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import { ParticleFigure } from "@/components/notes/ParticleFigures";
import styles from "../../../notes.styles";
export function WorkSection() {
  return (
    <section id="work" className={styles.section}>
      <span className={styles.sectionNumber}>04 / THE DOT-PRODUCT VIEW</span>
      <h2>Work measures a change in kinetic energy.</h2>
      <p>
        For an infinitesimal displacement, work is the force dotted with that
        displacement. Add these contributions along the actual trajectory to
        obtain total work.
      </p>
      <Equation>{String.raw`dW=\mathbf F\cdot d\mathbf r,\qquad W_{1\to2}=\int_1^2\mathbf F\cdot d\mathbf r`}</Equation>
      <ParticleFigure kind="work" />
      <p>
        Using constant mass and Newton’s law, the instantaneous power delivered
        by the net force is a total time derivative:
      </p>
      <Equation>{String.raw`\mathbf F\cdot\mathbf v=m\dot{\mathbf v}\cdot\mathbf v=\frac{d}{dt}\!\left(\frac12 m\mathbf v\cdot\mathbf v\right)=\frac{dT}{dt},\qquad T=\frac12 mv^2`}</Equation>
      <p>
        Integrating over time yields the work–energy theorem. This result does
        not require conservative forces: friction can do negative work, reducing
        kinetic energy.
      </p>
      <NoteBox kind="result" title="Work–energy theorem">
        <Equation>{String.raw`W_{1\to2}=T_2-T_1`}</Equation>
        <p>
          <strong>Net work</strong> changes kinetic energy; the net force can
          include conservative and nonconservative forces.
        </p>
      </NoteBox>
      <p>
        Positive work raises speed, negative work lowers it, and a force always
        perpendicular to velocity does no work. For uniform circular motion, the
        radial force changes the direction of velocity while kinetic energy
        stays fixed.
      </p>
      <div className={styles.workedExample}>
        <span className={styles.sectionNumber}>
          WORKED EXAMPLE / A FORCE THAT GROWS
        </span>
        <p>
          A 1 kg particle moves from x = 1 m to x = 2 m under a net force Fₓ =
          ax, with a = 3 N/m, starting from rest.
        </p>
        <Equation>{String.raw`W=\int_{1\,\mathrm m}^{2\,\mathrm m} ax\,dx=4.5\ \mathrm J,\qquad \frac12 mv_f^2=4.5\ \mathrm J\Rightarrow v_f=3\ \mathrm{m/s}`}</Equation>
        <p>
          No time-dependent trajectory was needed. Energy gives the final speed
          directly, but does not by itself tell us how long the trip takes.
        </p>
      </div>
    </section>
  );
}
