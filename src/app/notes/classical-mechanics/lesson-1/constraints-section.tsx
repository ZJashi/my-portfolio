import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import styles from "../../notes.styles";
export function ConstraintsSection() {
  return (
    <section id="constraints" className={styles.section}>
      <span className={styles.sectionNumber}>
        02 / LESS FREEDOM THAN IT SEEMS
      </span>
      <h2>Understand constraints.</h2>
      <NoteBox kind="definition" title="Constraints & degrees of freedom">
        <ul>
          <li>
            <strong>Constraint:</strong> a restriction on the allowed
            configurations or motions.
          </li>
          <li>
            <strong>Degrees of freedom:</strong> the number of independent
            coordinates needed to specify the configuration.
          </li>
          <li>
            <strong>Pendulum:</strong> two planar position coordinates and one
            independent fixed-length constraint leave one degree of freedom.
          </li>
        </ul>
      </NoteBox>
      <p>
        Our ideal pendulum is a point mass attached to a massless, rigid rod of
        fixed length ℓ, with a frictionless pivot. Its motion is restricted to a
        vertical plane. Gravity is uniform and air resistance is neglected.
      </p>
      <p>
        Put the pivot at the origin, with x pointing right and y pointing up.
        The bob has two position coordinates, but the fixed rod requires
      </p>
      <Equation>{String.raw`x^2+y^2=\ell^2.`}</Equation>
      <p>
        This is a <strong>constraint</strong>: the bob can only occupy points on
        a circle. Once you choose a point along that circle, its position is
        fully determined. You need one independent number, so the pendulum has{" "}
        <strong>one degree of freedom</strong>.
      </p>
      <Equation>{String.raw`\underbrace{2}_{\text{planar coordinates}}-\underbrace{1}_{\text{independent constraint}}=\underbrace{1}_{\text{degree of freedom}}`}</Equation>
      <p>
        Here the constraint is a relation among coordinates alone, often called
        a holonomic constraint. Counting coordinates minus independent
        constraints works for this kind of system. The independence matters:
        writing the same condition twice does not remove another degree of
        freedom.
      </p>
      <div className={styles.callout}>
        <strong>Why constraints create work</strong>
        <p>
          If we solve for x and y directly, we must also account for the force
          in the rod that enforces the circle. The geometry and the force
          calculation become intertwined.
        </p>
      </div>
    </section>
  );
}
