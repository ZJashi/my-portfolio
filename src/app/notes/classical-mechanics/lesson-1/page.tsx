import { NoteBox } from "@/components/notes/NoteBox";
import Link from "next/link";
import { Equation } from "@/components/notes/Equation";
import Pendulum from "@/components/notes/Pendulum";
import styles from "../../notes.module.css";

export const metadata = {
  title: "Newton’s Laws & Generalized Coordinates | Lesson 1 | Zura Jashi",
  description: "Learn constraints and generalized coordinates through a pendulum: intuitive explanations, a complete Newtonian derivation, an interactive simulation, and solved exercises.",
};

const sections = [
  ["motion", "Describe the motion"],
  ["constraints", "Understand constraints"],
  ["coordinates", "Choose a coordinate"],
  ["pendulum", "Derive the motion"],
  ["prediction", "Predict the period"],
  ["practice", "Check understanding"],
];

export default function LessonOne() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><Link href="/notes/physics">Physics</Link><span>/</span><Link href="/notes/classical-mechanics">Classical Mechanics</Link><span>/</span><span>Lesson 01</span></nav>
      <p className={styles.eyebrow}>Classical Mechanics / Lesson 01</p>
      <h1 className={styles.title}>From Newton’s Laws to Generalized Coordinates</h1>
      <p className={styles.intro}>How do we choose variables that make a mechanical problem simple? A pendulum gives us the whole story: forces, constraints, and a better way to describe motion.</p>
      <div className={styles.meta}><span>Prerequisites: derivatives & vectors</span><span>Reading companion to Goldstein, Ch. 1</span></div>
      <hr className={styles.rule} />
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          <div className={styles.callout}><strong>The idea to keep</strong><p>A coordinate describes a possible configuration. A constraint limits those possibilities. Choose independent coordinates that already respect the constraints, and the problem becomes smaller.</p></div>

          <section id="motion" className={styles.section}>
            <span className={styles.sectionNumber}>01 / THE STARTING POINT</span>
            <h2>Describe the motion.</h2>
            <p>Imagine filming a moving particle. Its position tells you where it is; velocity tells you how that position changes; acceleration tells you how the velocity changes. A dot over a quantity means one derivative with respect to time.</p>
            <Equation>{String.raw`\mathbf r(t)=(x(t),y(t),z(t)),\qquad \mathbf v=\dot{\mathbf r},\qquad \mathbf a=\ddot{\mathbf r}`}</Equation>
            <p>For a particle of constant mass, observed in an inertial frame, Newton’s second law connects the motion to the net applied force:</p>
            <NoteBox kind="law" title="Newton’s second law"><Equation>{String.raw`\sum \mathbf F = m\ddot{\mathbf r}`}</Equation><p>For <strong>constant mass</strong> in an <strong>inertial frame</strong>.</p></NoteBox>
            <p>An inertial frame is one in which a free particle moves at constant velocity. A laboratory attached to Earth is a useful approximation for our pendulum. Newton’s equation determines acceleration; to find a particular trajectory, we also need initial position and velocity.</p>
            <div className={styles.callout}><strong>A numerical feel</strong><p>A net force of 6 N on a 2 kg particle produces an acceleration of 3 m/s² in the force’s direction. If that force is constant and the particle starts from rest, after 2 s its speed is 6 m/s and its displacement is 6 m.</p></div>
            <p>In Cartesian coordinates, one vector equation becomes separate equations for x, y, and z. That is useful when all those coordinates can vary independently. A pendulum will show us why that is not always the best description.</p>
          </section>

          <section id="constraints" className={styles.section}>
            <span className={styles.sectionNumber}>02 / LESS FREEDOM THAN IT SEEMS</span>
            <h2>Understand constraints.</h2>
<NoteBox kind="definition" title="Constraints & degrees of freedom"><ul><li><strong>Constraint:</strong> a restriction on the allowed configurations or motions.</li><li><strong>Degrees of freedom:</strong> the number of independent coordinates needed to specify the configuration.</li><li><strong>Pendulum:</strong> two planar position coordinates and one independent fixed-length constraint leave one degree of freedom.</li></ul></NoteBox>
            <p>Our ideal pendulum is a point mass attached to a massless, rigid rod of fixed length ℓ, with a frictionless pivot. Its motion is restricted to a vertical plane. Gravity is uniform and air resistance is neglected.</p>
            <p>Put the pivot at the origin, with x pointing right and y pointing up. The bob has two position coordinates, but the fixed rod requires</p>
            <Equation>{String.raw`x^2+y^2=\ell^2.`}</Equation>
            <p>This is a <strong>constraint</strong>: the bob can only occupy points on a circle. Once you choose a point along that circle, its position is fully determined. You need one independent number, so the pendulum has <strong>one degree of freedom</strong>.</p>
            <Equation>{String.raw`\underbrace{2}_{\text{planar coordinates}}-\underbrace{1}_{\text{independent constraint}}=\underbrace{1}_{\text{degree of freedom}}`}</Equation>
            <p>Here the constraint is a relation among coordinates alone, often called a holonomic constraint. Counting coordinates minus independent constraints works for this kind of system. The independence matters: writing the same condition twice does not remove another degree of freedom.</p>
            <div className={styles.callout}><strong>Why constraints create work</strong><p>If we solve for x and y directly, we must also account for the force in the rod that enforces the circle. The geometry and the force calculation become intertwined.</p></div>
          </section>

          <section id="coordinates" className={styles.section}>
            <span className={styles.sectionNumber}>03 / LET GEOMETRY DO THE WORK</span>
            <h2>Choose a generalized coordinate.</h2>
<NoteBox kind="definition" title="Generalized coordinate"><p>An independent variable that specifies the <strong>configuration</strong> while respecting the constraints. For the planar pendulum, choose the angle θ. Predicting the motion also requires its initial <strong>angular velocity</strong>.</p></NoteBox>
            <p>Measure the angle θ from the downward vertical, positive toward the right. Then write the bob’s position as</p>
            <Equation>{String.raw`x=\ell\sin\theta,\qquad y=-\ell\cos\theta.`}</Equation>
            <p>Substitute these expressions into the constraint. You get ℓ²(sin²θ + cos²θ) = ℓ², which is true for every θ. The constraint is now built into our description.</p>
            <p>The angle θ is a <strong>generalized coordinate</strong>: an independent variable used to specify the configuration. Such coordinates may be lengths, angles, or other convenient parameters. They do not have to be Cartesian components or even have units of length.</p>
            <h3>Position is not the whole state</h3>
            <p>The angle tells us where the bob is; its angular velocity tells us how it is moving. Two pendulums can pass through the same angle in opposite directions. To predict the future, we need both θ and its time derivative.</p>
            <p>Differentiating the coordinate expressions makes the speed especially simple:</p>
            <Equation>{String.raw`\dot x=\ell\cos\theta\,\dot\theta,\qquad \dot y=\ell\sin\theta\,\dot\theta`}</Equation>
            <Equation>{String.raw`v^2=\dot x^2+\dot y^2=\ell^2\dot\theta^2,\qquad v=\ell|\dot\theta|.`}</Equation>
            <p>That matches the geometric picture: along a circle, arc length is ℓ times angle in radians, so speed is ℓ times angular speed.</p>
          </section>

          <section id="pendulum" className={styles.section}>
            <span className={styles.sectionNumber}>04 / THE EQUATION OF MOTION</span>
            <h2>Follow the tangent.</h2>
            <p>The bob experiences gravity downward and a force from the rod along its length. At each point, resolve Newton’s law into a radial direction, along the rod, and a tangential direction, along increasing θ.</p>
            <p>The unit tangent is (cos θ, sin θ). Project gravity, (0, −mg), onto it. The result is −mg sin θ. The rod’s force has zero tangential component because the rod is perpendicular to the tangent.</p>
            <Equation>{String.raw`F_{\mathrm{tangent}}=-mg\sin\theta,\qquad a_{\mathrm{tangent}}=\ell\ddot\theta.`}</Equation>
            <p>Applying Newton’s law along that direction gives</p>
            <NoteBox kind="result" title="Ideal pendulum · Equation of motion"><Equation>{String.raw`m\ell\ddot\theta=-mg\sin\theta\quad\Longrightarrow\quad \boxed{\ddot\theta+\frac{g}{\ell}\sin\theta=0}.`}</Equation><p>A point mass on a <strong>massless rigid rod of fixed length</strong>, with a fixed pivot, uniform gravity, planar motion, and no dissipation.</p></NoteBox>
            <p>The minus sign is physical: for a positive displacement, gravity accelerates the bob back toward the bottom. The factor g/ℓ has units of inverse seconds squared and sets the time scale of the motion.</p>
            <div className={styles.callout}><strong>Why the rod force disappears</strong><p>It still exists and changes the direction of the velocity. It drops out of the tangential equation because it has no component along the allowed motion. We can determine the angle without first solving for that force.</p></div>
            <p>For comparison, the radial equation gives the inward rod force R:</p>
            <Equation>{String.raw`R-mg\cos\theta=m\ell\dot\theta^2.`}</Equation>
            <p>It supplies the centripetal acceleration needed to keep the bob on the circle. At the bottom, a moving bob requires R greater than mg.</p>
            <h3>A concrete acceleration</h3>
            <p>Release a one-metre pendulum from rest at 30°. Its initial angular acceleration is −(9.81/1)sin 30° = −4.905 rad/s². The tangential acceleration is −4.905 m/s². The bob starts by speeding up toward the bottom.</p>
            <Pendulum />
          </section>

          <section id="prediction" className={styles.section}>
            <span className={styles.sectionNumber}>05 / FROM EQUATION TO MEASUREMENT</span>
            <h2>Predict the period.</h2>
            <p>The sine makes the pendulum equation nonlinear. For small angles measured in radians, sin θ ≈ θ. This turns the equation into the familiar harmonic oscillator:</p>
            <Equation>{String.raw`\ddot\theta+\omega_0^2\theta=0,\qquad \omega_0=\sqrt{\frac{g}{\ell}}.`}</Equation>
            <p>Released from rest at angle θ₀ at time zero, its approximate motion is</p>
            <Equation>{String.raw`\theta(t)=\theta_0\cos(\omega_0t).`}</Equation>
            <p>A cosine completes one cycle when its argument increases by 2π. The period, the time for a full return to the same position and direction, is therefore</p>
            <NoteBox kind="result" title="Small-angle pendulum period"><Equation>{String.raw`\boxed{T_0=\frac{2\pi}{\omega_0}=2\pi\sqrt{\frac{\ell}{g}}}.`}</Equation><p>Requires <strong>small angular amplitude in radians</strong>, so that sine may be approximated by its argument. The period increases at larger amplitudes.</p></NoteBox>
            <h3>One metre, about two seconds</h3>
            <Equation>{String.raw`\ell=1.00\,\mathrm m,\quad g=9.81\,\mathrm{m/s^2}\quad\Rightarrow\quad T_0\approx2.006\,\mathrm s.`}</Equation>
            <p>One trip from one side to the other takes half this time, about one second. A four-times-longer pendulum takes twice as long for a full oscillation: the period grows with the square root of length.</p>
            <h3>Why does mass cancel?</h3>
            <p>Doubling the mass doubles the gravitational force, but also doubles the inertia resisting acceleration. Those changes cancel in this model. The rod force changes with mass, while the angle’s motion does not.</p>
            <h3>How small is “small”?</h3>
            <p>The approximation comes from sin θ = θ − θ³/6 + …. At larger release angles, the restoring force is weaker than the linear model predicts, so the true period is longer. The first correction, for release amplitude θ₀ in radians, is</p>
            <Equation>{String.raw`T\approx T_0\left(1+\frac{\theta_0^2}{16}+\cdots\right).`}</Equation>
            <p>At 10°, the full period is about 0.19% longer than T₀. At 30°, it is about 1.74% longer; at 60°, about 7.32%. Use the sliders above to see the difference. The simulation retains sin θ, and its nonlinear period readout uses the full ideal-pendulum formula.</p>
            <div className={styles.callout}><strong>Check the dimensions</strong><p>Length divided by acceleration has units of seconds squared. Taking its square root gives seconds, exactly what a period needs. A formula proportional to ℓ/g without the square root would fail this check.</p></div>
          </section>

          <section id="practice" className={styles.section}>
            <span className={styles.sectionNumber}>06 / TRY IT YOURSELF</span>
            <h2>Check your understanding.</h2>
            <div className={styles.exercise}>
              <h3>01 — Build a faster pendulum</h3>
              <p>You want a small-angle period of 1.00 s on Earth. What rod length should you use? What happens to the period if you double the bob’s mass?</p>
              <details><summary>Reveal solution</summary><Equation>{String.raw`\ell=g\left(\frac{T_0}{2\pi}\right)^2=9.81\left(\frac{1.00}{2\pi}\right)^2\mathrm m\approx0.248\,\mathrm m.`}</Equation><p>Use a length of about 24.8 cm, measured from the pivot to the point mass. Doubling the mass leaves the period unchanged under our ideal assumptions.</p></details>
            </div>
            <div className={styles.exercise}>
              <h3>02 — Add another pendulum</h3>
              <p>Attach a second rigid rod and bob to the first bob, with both rods moving in the same vertical plane. How many degrees of freedom are there? Suggest coordinates. Does specifying those coordinates alone determine the future motion?</p>
              <details><summary>Reveal solution</summary><p>There are four Cartesian position coordinates for the two bobs and two independent fixed-length constraints, leaving two degrees of freedom. Use the angle of each rod relative to the downward vertical, θ₁ and θ₂. These specify the configuration. To predict the motion, you also need both angular velocities as initial data.</p></details>
            </div>
          </section>

          <section className={styles.section}>
            <span className={styles.sectionNumber}>TAKE WITH YOU</span>
            <h2>The essential picture.</h2>
            <ul className={styles.takeaways}>
              <li>Newton’s law connects net force to acceleration.</li>
              <li>Constraints reduce the number of independent configuration variables.</li>
              <li>Generalized coordinates can encode those constraints automatically.</li>
              <li>For the pendulum, projecting onto the tangent removes the unknown rod force from the equation for the angle.</li>
              <li>The small-angle approximation gives a testable period, with a clear range of accuracy.</li>
            </ul>
            <p>This sets up the next idea: can we obtain equations for independent coordinates directly, without projecting forces each time? Lagrangian mechanics provides that route, using kinetic and potential energy. For now, the important step is choosing the right variables.</p>
          </section>
          <p className={styles.reference}>Reading companion: Goldstein, Poole & Safko, <a href="https://www.pearson.com/en-us/subject-catalog/p/Goldstein-Classical-Mechanics-3rd-Edition/P200000006871?view=educator" target="_blank" rel="noopener noreferrer"><em>Classical Mechanics</em>, 3rd edition</a>, Chapter 1, “Survey of the Elementary Principles.” This lesson is an original introductory treatment of particle mechanics, constraints, and generalized coordinates; it is not a reproduction or complete summary of the chapter.</p>
          <Link href="/notes/classical-mechanics" className={styles.cardFoot}>← Back to Classical Mechanics</Link>
        </article>
        <nav className={styles.toc} aria-label="Lesson sections"><span className={styles.label}>In this lesson</span><ol>{sections.map(([id, title], i) => <li key={id}><a href={`#${id}`}>{String(i + 1).padStart(2, "0")} · {title}</a></li>)}</ol></nav>
      </div>
    </div>
  );
}
