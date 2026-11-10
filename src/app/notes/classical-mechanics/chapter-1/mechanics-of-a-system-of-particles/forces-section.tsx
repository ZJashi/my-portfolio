import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import styles from "../../../notes.styles";
export function ForcesSection() {
  return (
    <section id="forces" className={styles.section}>
      <span className={styles.sectionNumber}>
        01 / DRAW THE SYSTEM BOUNDARY
      </span>
      <h2>Separate forces by their source.</h2>
      <NoteBox kind="definition" title="Internal and external forces">
        <ul>
          <li>
            <strong>Internal force:</strong> an interaction between members of
            the chosen system.
          </li>
          <li>
            <strong>External force:</strong> an interaction with something
            outside the system.
          </li>
          <li>
            <strong>Index convention:</strong> fᵢⱼ is the force on particle i
            due to particle j.
          </li>
        </ul>
      </NoteBox>
      <p>
        Choose which particles belong to the system. An external force comes
        from outside that set; an internal force is an interaction between two
        members. This distinction depends on the boundary: the spring force is
        external to one attached particle, but internal to a system containing
        both particles and their ideal connecting spring.
      </p>
      <p>
        Assume fixed particle masses and an inertial frame. Write fᵢⱼ for the
        force on particle i due to particle j. This index convention puts the
        receiving particle first.
      </p>
      <Equation>{String.raw`m_i\ddot{\mathbf r}_i=\mathbf F_i^{\mathrm{ext}}+\sum_{j\ne i}\mathbf f_{ij}`}</Equation>
      <p>
        If each internal pair is equal and opposite, summing all particle
        equations cancels the internal force sum pair by pair. This is the{" "}
        <strong>weak form of action and reaction</strong>.
      </p>
      <NoteBox kind="law" title="Newton’s third law · Equal and opposite pairs">
        <Equation>{String.raw`\mathbf f_{ij}=-\mathbf f_{ji},\qquad \sum_i\sum_{j\ne i}\mathbf f_{ij}=\sum_{i<j}(\mathbf f_{ij}+\mathbf f_{ji})=\mathbf0`}</Equation>
        <p>
          These forces act on <strong>different particles</strong>. They cancel
          in the force sum for the combined system.
        </p>
      </NoteBox>
      <div className={styles.callout}>
        <strong>Check what is included.</strong>
        <p>
          These particle-only balances assume the stated force laws. In
          electromagnetic systems, the fields can carry momentum and angular
          momentum too; ignoring that contribution can make a particle-only
          conservation statement fail.
        </p>
      </div>
    </section>
  );
}
