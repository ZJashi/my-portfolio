import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import CenterOfMassLab from "@/components/notes/CenterOfMassLab";
import styles from "../../../notes.styles";
export function CenterSection() {
  return (
    <section id="center" className={styles.section}>
      <span className={styles.sectionNumber}>
        02 / THE COLLECTIVE COORDINATE
      </span>
      <h2>The center of mass follows the external force.</h2>
      <p>
        Define the total mass M and the mass-weighted average position R. This
        is a geometric point; it need not coincide with a particle or lie inside
        the material of an object.
      </p>
      <NoteBox
        kind="definition"
        title="Center of mass · Mass-weighted position"
      >
        <Equation>{String.raw`M=\sum_i m_i,\qquad \mathbf R=\frac1M\sum_i m_i\mathbf r_i`}</Equation>
      </NoteBox>
      <p>
        Differentiate twice and use the summed equations of motion. Internal
        forces disappear under the equal-and-opposite assumption.
      </p>
      <NoteBox kind="result" title="Center-of-mass equation of motion">
        <Equation>{String.raw`M\ddot{\mathbf R}=\sum_i\mathbf F_i^{\mathrm{ext}}=\mathbf F^{\mathrm{ext}}`}</Equation>
        <p>
          Assumes <strong>fixed masses</strong>, an{" "}
          <strong>inertial frame</strong>, and equal-and-opposite internal
          forces.
        </p>
      </NoteBox>
      <p>
        The center of mass accelerates as if the entire mass were concentrated
        there and acted on by the net external force. This does not replace the
        individual equations when you want the shape, rotation, or relative
        motion.
      </p>
      <Equation>{String.raw`\mathbf P=\sum_i m_i\dot{\mathbf r}_i=M\dot{\mathbf R},\qquad \dot{\mathbf P}=\mathbf F^{\mathrm{ext}}`}</Equation>
      <p>
        Zero external force means constant total momentum, not necessarily zero
        momentum. A component is conserved when the corresponding external force
        component vanishes.
      </p>
      <CenterOfMassLab />
      <div className={styles.workedExample}>
        <span className={styles.sectionNumber}>
          WORKED EXAMPLE / TWO SEPARATING PIECES
        </span>
        <p>
          Two pieces of masses 1 kg and 3 kg separate from a body initially at
          rest. During the brief separation, external impulse is negligible. If
          the lighter piece moves at +6 m/s, what is the heavier piece’s
          velocity?
        </p>
        <Equation>{String.raw`0=(1)(6)+(3)v_2\quad\Rightarrow\quad v_2=-2\ \mathrm{m/s}`}</Equation>
        <p>
          Neither piece stays still, but their center of mass does. Their
          kinetic energy increases by 24 J, supplied by stored internal energy.
        </p>
      </div>
      <p>
        A fragmented projectile in a uniform gravitational field has a center of
        mass following the same ballistic trajectory as before breakup, provided
        all fragments are included and air resistance is negligible. Its
        individual fragments need not follow that trajectory.
      </p>
    </section>
  );
}
