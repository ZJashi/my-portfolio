import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import styles from "../../notes.styles";
export function MotionSection() {
  return (
    <section id="motion" className={styles.section}>
      <span className={styles.sectionNumber}>01 / THE STARTING POINT</span>
      <h2>Describe the motion.</h2>
      <p>
        Imagine filming a moving particle. Its position tells you where it is;
        velocity tells you how that position changes; acceleration tells you how
        the velocity changes. A dot over a quantity means one derivative with
        respect to time.
      </p>
      <Equation>{String.raw`\mathbf r(t)=(x(t),y(t),z(t)),\qquad \mathbf v=\dot{\mathbf r},\qquad \mathbf a=\ddot{\mathbf r}`}</Equation>
      <p>
        For a particle of constant mass, observed in an inertial frame, Newton’s
        second law connects the motion to the net applied force:
      </p>
      <NoteBox kind="law" title="Newton’s second law">
        <Equation>{String.raw`\sum \mathbf F = m\ddot{\mathbf r}`}</Equation>
        <p>
          For <strong>constant mass</strong> in an{" "}
          <strong>inertial frame</strong>.
        </p>
      </NoteBox>
      <p>
        An inertial frame is one in which a free particle moves at constant
        velocity. A laboratory attached to Earth is a useful approximation for
        our pendulum. Newton’s equation determines acceleration; to find a
        particular trajectory, we also need initial position and velocity.
      </p>
      <div className={styles.callout}>
        <strong>A numerical feel</strong>
        <p>
          A net force of 6 N on a 2 kg particle produces an acceleration of 3
          m/s² in the force’s direction. If that force is constant and the
          particle starts from rest, after 2 s its speed is 6 m/s and its
          displacement is 6 m.
        </p>
      </div>
      <p>
        In Cartesian coordinates, one vector equation becomes separate equations
        for x, y, and z. That is useful when all those coordinates can vary
        independently. A pendulum will show us why that is not always the best
        description.
      </p>
    </section>
  );
}
