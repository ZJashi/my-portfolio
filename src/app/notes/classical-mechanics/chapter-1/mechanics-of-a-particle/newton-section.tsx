import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import styles from "../../../notes.styles";
export function NewtonSection() {
  return (
    <section id="newton" className={styles.section}>
      <span className={styles.sectionNumber}>02 / FORCE & MOMENTUM</span>
      <h2>Force changes momentum.</h2>
      <NoteBox kind="law" title="Newton’s first law · Inertial motion">
        <p>
          A particle subject to <strong>zero net force</strong> moves with
          constant velocity in an inertial frame. Rest is the special case of
          zero velocity.
        </p>
      </NoteBox>
      <p>
        In Newtonian mechanics, linear momentum is mass times velocity. The
        total force is the vector sum of all forces on the particle, and
        Newton’s law relates it to the rate of change of momentum.
      </p>
      <NoteBox kind="law" title="Newton’s second law · Force and momentum">
        <Equation>{String.raw`\mathbf p=m\mathbf v,\qquad \mathbf F_{\mathrm{net}}=\frac{d\mathbf p}{dt}`}</Equation>
        <p>
          In an <strong>inertial frame</strong>; for constant mass this becomes
          net force equals mass times acceleration.
        </p>
      </NoteBox>
      <p>
        For a particle of constant mass, this becomes the familiar second-order
        equation. To predict a trajectory, supply a force law and an initial
        position and velocity.
      </p>
      <Equation>{String.raw`m\ddot{\mathbf r}=\mathbf F(\mathbf r,\mathbf v,t)`}</Equation>
      <p>
        If the net force vanishes, momentum is constant. With constant mass,
        velocity is constant too. A component can be conserved even when the
        full vector is not: zero force along x means constant x-momentum.
      </p>
      <Equation>{String.raw`\mathbf F=\mathbf 0\Rightarrow\mathbf p=\text{constant},\qquad F_x=0\Rightarrow p_x=\text{constant}`}</Equation>
      <p>
        Integrating over time gives another useful form: the impulse equals the
        momentum change.
      </p>
      <Equation>{String.raw`\Delta\mathbf p=\int_{t_1}^{t_2}\mathbf F\,dt`}</Equation>
      <div className={styles.workedExample}>
        <span className={styles.sectionNumber}>
          WORKED EXAMPLE / A SHORT PUSH
        </span>
        <h3>How much does the speed change?</h3>
        <p>
          A 2 kg particle starts with x-velocity 1 m/s. A net force of 3 N acts
          in the positive x-direction for 4 s.
        </p>
        <Equation>{String.raw`\Delta p_x=(3)(4)=12\ \mathrm{kg\,m/s},\qquad v_{x,f}=1+\frac{12}{2}=7\ \mathrm{m/s}`}</Equation>
        <p>
          The force changes momentum by a fixed amount. Doubling the mass would
          halve the velocity change for the same impulse.
        </p>
      </div>
      <p className={styles.reference}>
        Assumption: we follow the same constant-mass particle. A rocket that
        ejects fuel is an open system; its momentum balance must include the
        momentum carried by that fuel.
      </p>
    </section>
  );
}
