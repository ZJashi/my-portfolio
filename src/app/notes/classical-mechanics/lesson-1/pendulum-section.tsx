import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import Pendulum from "@/components/notes/Pendulum";
import styles from "../../notes.styles";
export function PendulumSection() {
  return (
    <section id="pendulum" className={styles.section}>
      <span className={styles.sectionNumber}>04 / THE EQUATION OF MOTION</span>
      <h2>Follow the tangent.</h2>
      <p>
        The bob experiences gravity downward and a force from the rod along its
        length. At each point, resolve Newton’s law into a radial direction,
        along the rod, and a tangential direction, along increasing θ.
      </p>
      <p>
        The unit tangent is (cos θ, sin θ). Project gravity, (0, −mg), onto it.
        The result is −mg sin θ. The rod’s force has zero tangential component
        because the rod is perpendicular to the tangent.
      </p>
      <Equation>{String.raw`F_{\mathrm{tangent}}=-mg\sin\theta,\qquad a_{\mathrm{tangent}}=\ell\ddot\theta.`}</Equation>
      <p>Applying Newton’s law along that direction gives</p>
      <NoteBox kind="result" title="Ideal pendulum · Equation of motion">
        <Equation>{String.raw`m\ell\ddot\theta=-mg\sin\theta\quad\Longrightarrow\quad \boxed{\ddot\theta+\frac{g}{\ell}\sin\theta=0}.`}</Equation>
        <p>
          A point mass on a <strong>massless rigid rod of fixed length</strong>,
          with a fixed pivot, uniform gravity, planar motion, and no
          dissipation.
        </p>
      </NoteBox>
      <p>
        The minus sign is physical: for a positive displacement, gravity
        accelerates the bob back toward the bottom. The factor g/ℓ has units of
        inverse seconds squared and sets the time scale of the motion.
      </p>
      <div className={styles.callout}>
        <strong>Why the rod force disappears</strong>
        <p>
          It still exists and changes the direction of the velocity. It drops
          out of the tangential equation because it has no component along the
          allowed motion. We can determine the angle without first solving for
          that force.
        </p>
      </div>
      <p>For comparison, the radial equation gives the inward rod force R:</p>
      <Equation>{String.raw`R-mg\cos\theta=m\ell\dot\theta^2.`}</Equation>
      <p>
        It supplies the centripetal acceleration needed to keep the bob on the
        circle. At the bottom, a moving bob requires R greater than mg.
      </p>
      <h3>A concrete acceleration</h3>
      <p>
        Release a one-metre pendulum from rest at 30°. Its initial angular
        acceleration is −(9.81/1)sin 30° = −4.905 rad/s². The tangential
        acceleration is −4.905 m/s². The bob starts by speeding up toward the
        bottom.
      </p>
      <Pendulum />
    </section>
  );
}
