import { Equation } from "@/components/notes/Equation";
import styles from "../../../notes.styles";
export function PracticeSection() {
  return (
    <section id="practice" className={styles.section}>
      <span className={styles.sectionNumber}>08 / TRY IT YOURSELF</span>
      <h2>Check the condition, then calculate.</h2>
      <div className={styles.exercise}>
        <h3>1. A force without torque</h3>
        <p>
          A particle moves under a central attractive force about a fixed
          origin. Must its linear momentum be conserved? What about angular
          momentum?
        </p>
        <details>
          <summary>Show reasoning</summary>
          <p>
            Linear momentum generally changes because the net force is nonzero.
            Angular momentum about the force center is conserved because r × F =
            0. The two conservation laws require different conditions.
          </p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>2. Spring speed</h3>
        <p>
          Use m = 2 kg, k = 8 N/m, and A = 0.5 m. Find the total energy and the
          speed at x = 0.3 m.
        </p>
        <details>
          <summary>Show solution</summary>
          <Equation>{String.raw`E=\frac12(8)(0.5)^2=1\ \mathrm J,\quad V=\frac12(8)(0.3)^2=0.36\ \mathrm J`}</Equation>
          <Equation>{String.raw`T=0.64\ \mathrm J,\qquad |v|=\sqrt{\frac{2T}{m}}=0.8\ \mathrm{m/s}`}</Equation>
          <p>
            The speed is the same on the outward and return passes; the
            velocities have opposite signs.
          </p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>3. Does a potential exist?</h3>
        <p>
          In the whole xy-plane, consider F = a(y, −x, 0), where a is a nonzero
          constant with units N/m. Is it conservative?
        </p>
        <details>
          <summary>Show solution</summary>
          <Equation>{String.raw`(\nabla\times\mathbf F)_z=\frac{\partial F_y}{\partial x}-\frac{\partial F_x}{\partial y}=-a-a=-2a\ne0`}</Equation>
          <p>
            No. As a direct check, around a counterclockwise circle of radius R,
            F points opposite the tangent for positive a and the loop work is
            −2πaR².
          </p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>4. A changing spring</h3>
        <p>
          At an instant when x = 0.2 m, the spring stiffness increases at 3
          N/(m·s). With no friction, what is dE/dt?
        </p>
        <details>
          <summary>Show solution</summary>
          <Equation>{String.raw`\dot E=\frac12\dot k\,x^2=\frac12(3)(0.2)^2=0.06\ \mathrm W`}</Equation>
          <p>
            The controller supplies mechanical energy at this instant. This is
            an instantaneous rate, not the energy added over a whole cycle.
          </p>
        </details>
      </div>
      <h3>The three conservation questions</h3>
      <ul className={styles.takeaways}>
        <li>
          <strong>Momentum:</strong> is the net force zero, or is a particular
          component zero?
        </li>
        <li>
          <strong>Angular momentum:</strong> is the net torque zero about the
          chosen fixed origin?
        </li>
        <li>
          <strong>Mechanical energy:</strong> is the potential time independent,
          with no additional net nonconservative power?
        </li>
      </ul>
    </section>
  );
}
