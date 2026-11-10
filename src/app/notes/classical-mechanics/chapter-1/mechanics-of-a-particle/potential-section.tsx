import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import styles from "../../../notes.styles";
export function PotentialSection() {
  return (
    <section id="potential" className={styles.section}>
      <span className={styles.sectionNumber}>05 / PATH INDEPENDENCE</span>
      <h2>When work depends only on the endpoints.</h2>
      <p>
        Consider a time-independent force field. It is conservative when the
        work between two points is the same for every allowed path connecting
        them. Equivalently, its work around every closed loop vanishes.
      </p>
      <Equation>{String.raw`\oint\mathbf F\cdot d\mathbf r=0`}</Equation>
      <p>
        We can then assign a scalar potential energy V to each position,
        defining its differences by the negative of the work. The gradient
        expresses the same relation locally.
      </p>
      <NoteBox kind="definition" title="Conservative force & potential energy">
        <Equation>{String.raw`V(\mathbf r_2)-V(\mathbf r_1)=-\int_1^2\mathbf F\cdot d\mathbf r,\qquad\mathbf F=-\nabla V`}</Equation>
        <p>
          Work is <strong>path independent</strong> within the domain where this
          potential is defined.
        </p>
      </NoteBox>
      <p>
        In one dimension, Fₓ = −dV/dx: the force points downhill on the
        potential graph. A steeper slope gives a larger force. Adding a constant
        to V changes no force or prediction; only potential differences matter.
      </p>
      <div className={styles.callout}>
        <strong>A useful test—with a domain condition.</strong>
        <p>
          A smooth conservative field has zero curl. Conversely, zero curl
          implies a globally defined potential on a simply connected region. If
          the allowed region has holes, check loop integrals rather than
          assuming the local condition is sufficient.
        </p>
      </div>
      <h3>Contrast gravity with sliding friction.</h3>
      <p>
        Near Earth’s surface, with y upward, a uniform gravitational force has V
        = mgy. Raising a particle by height h increases V by mgh, whatever path
        was taken. Sliding friction on a stationary rough surface behaves
        differently: on an out-and-back trip its work is negative on both legs.
        The work depends on the distance traveled, not merely the endpoints.
      </p>
      <p>
        Mechanical energy lost to sliding friction becomes other forms of
        energy, such as thermal energy. The failure to conserve T + V does not
        mean total energy has disappeared.
      </p>
    </section>
  );
}
