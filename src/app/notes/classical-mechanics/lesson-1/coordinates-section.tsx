import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import styles from "../../notes.styles";
export function CoordinatesSection() {
  return (
    <section id="coordinates" className={styles.section}>
      <span className={styles.sectionNumber}>
        03 / LET GEOMETRY DO THE WORK
      </span>
      <h2>Choose a generalized coordinate.</h2>
      <NoteBox kind="definition" title="Generalized coordinate">
        <p>
          An independent variable that specifies the{" "}
          <strong>configuration</strong> while respecting the constraints. For
          the planar pendulum, choose the angle θ. Predicting the motion also
          requires its initial <strong>angular velocity</strong>.
        </p>
      </NoteBox>
      <p>
        Measure the angle θ from the downward vertical, positive toward the
        right. Then write the bob’s position as
      </p>
      <Equation>{String.raw`x=\ell\sin\theta,\qquad y=-\ell\cos\theta.`}</Equation>
      <p>
        Substitute these expressions into the constraint. You get ℓ²(sin²θ +
        cos²θ) = ℓ², which is true for every θ. The constraint is now built into
        our description.
      </p>
      <p>
        The angle θ is a <strong>generalized coordinate</strong>: an independent
        variable used to specify the configuration. Such coordinates may be
        lengths, angles, or other convenient parameters. They do not have to be
        Cartesian components or even have units of length.
      </p>
      <h3>Position is not the whole state</h3>
      <p>
        The angle tells us where the bob is; its angular velocity tells us how
        it is moving. Two pendulums can pass through the same angle in opposite
        directions. To predict the future, we need both θ and its time
        derivative.
      </p>
      <p>
        Differentiating the coordinate expressions makes the speed especially
        simple:
      </p>
      <Equation>{String.raw`\dot x=\ell\cos\theta\,\dot\theta,\qquad \dot y=\ell\sin\theta\,\dot\theta`}</Equation>
      <Equation>{String.raw`v^2=\dot x^2+\dot y^2=\ell^2\dot\theta^2,\qquad v=\ell|\dot\theta|.`}</Equation>
      <p>
        That matches the geometric picture: along a circle, arc length is ℓ
        times angle in radians, so speed is ℓ times angular speed.
      </p>
    </section>
  );
}
