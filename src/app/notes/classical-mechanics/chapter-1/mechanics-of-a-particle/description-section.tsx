import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import { ParticleFigure } from "@/components/notes/ParticleFigures";
import styles from "../../../notes.styles";
export function DescriptionSection() {
  return (
    <section id="description" className={styles.section}>
      <span className={styles.sectionNumber}>01 / THE MODEL</span>
      <h2>Replace the object with a moving point.</h2>
      <NoteBox
        kind="definition"
        title="Particle · A model chosen for the question"
      >
        <p>
          A particle is a model of an object whose size, shape, and rotation do
          not matter for the question at hand. A ball can be treated as a
          particle when predicting its flight, but not when explaining its spin.
          The model keeps a mass and a position while leaving internal structure
          out.
        </p>
      </NoteBox>
      <p>
        Choose an origin and fixed axes. The position vector locates the
        particle; its first and second time derivatives give velocity and
        acceleration. A dot means a derivative with respect to time.
      </p>
      <Equation>{String.raw`\mathbf r(t)=x(t)\hat{\mathbf x}+y(t)\hat{\mathbf y}+z(t)\hat{\mathbf z},\qquad \mathbf v=\dot{\mathbf r},\qquad \mathbf a=\ddot{\mathbf r}`}</Equation>
      <ParticleFigure kind="motion" />
      <p>
        Velocity is tangent to the path. Acceleration describes a change in the{" "}
        <em>vector</em> velocity: its magnitude, direction, or both. A particle
        moving around a circle at constant speed still accelerates.
      </p>
      <div className={styles.callout}>
        <strong>The frame is part of the setup.</strong>
        <p>
          We work in an <strong>inertial frame</strong>: one in which a free
          particle moves with constant velocity. A frame moving at constant
          velocity relative to it is also inertial. An accelerating or rotating
          frame generally needs additional inertial forces. A laboratory on
          Earth is often a useful approximation, but the required accuracy
          matters.
        </p>
      </div>
    </section>
  );
}
