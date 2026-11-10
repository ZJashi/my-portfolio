import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import { ParticleFigure } from "@/components/notes/ParticleFigures";
import styles from "../../../notes.styles";
export function AngularSection() {
  return (
    <section id="angular" className={styles.section}>
      <span className={styles.sectionNumber}>03 / TURNING ABOUT AN ORIGIN</span>
      <h2>Torque changes angular momentum.</h2>
      <p>
        About a fixed origin O in an inertial frame, define angular momentum and
        torque using cross products. Here we use τ for torque.
      </p>
      <NoteBox kind="definition" title="Angular momentum & torque">
        <Equation>{String.raw`\mathbf L=\mathbf r\times\mathbf p,\qquad \boldsymbol\tau=\mathbf r\times\mathbf F`}</Equation>
        <p>
          Both quantities are defined about the{" "}
          <strong>same chosen origin</strong>.
        </p>
      </NoteBox>
      <p>
        The cross product measures the perpendicular part and assigns a
        direction by the right-hand rule. Reversing the factors reverses the
        sign. A force directed along the position vector produces no torque
        about the origin, even though the force itself may be large.
      </p>
      <ParticleFigure kind="torque" />
      <p>
        Differentiate angular momentum with the product rule. The first term
        vanishes because velocity and momentum are parallel.
      </p>
      <Equation>{String.raw`\frac{d\mathbf L}{dt}=\dot{\mathbf r}\times\mathbf p+\mathbf r\times\dot{\mathbf p}=\underbrace{\mathbf v\times m\mathbf v}_{\mathbf 0}+\mathbf r\times\mathbf F=\boldsymbol\tau`}</Equation>
      <div className={styles.callout}>
        <strong>Zero torque is the condition.</strong>
        <p>
          When the net torque about O is zero, angular momentum about O is
          conserved. Both quantities depend on O: always state the origin. The
          simple derivation above assumes that origin is fixed in the inertial
          frame.
        </p>
      </div>
      <h3>A central force can bend a path without changing L.</h3>
      <p>
        A force pointing toward or away from a fixed center has zero torque
        about that center. Consequently, the position and velocity remain in a
        fixed plane perpendicular to a nonzero angular momentum vector. This is
        a first clue to why central-force motion becomes simpler in polar
        coordinates.
      </p>
      <div className={styles.workedExample}>
        <span className={styles.sectionNumber}>
          WORKED EXAMPLE / STRAIGHT-LINE MOTION
        </span>
        <p>
          A free particle of mass m travels at speed v along the line y = b, in
          the positive x-direction. Its angular momentum about the origin is not
          generally zero.
        </p>
        <Equation>{String.raw`\mathbf r=(vt,b,0),\quad\mathbf p=(mv,0,0),\quad\mathbf L=(0,0,-bmv)`}</Equation>
        <p>
          L is constant even though r changes. Zero force implies zero torque,
          but it does not imply zero angular momentum.
        </p>
      </div>
    </section>
  );
}
