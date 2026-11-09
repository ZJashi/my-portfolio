import { NoteBox } from "@/components/notes/NoteBox";
import Link from "next/link";
import { Equation } from "@/components/notes/Equation";
import { ParticleFigure } from "@/components/notes/ParticleFigures";
import ParticleEnergyLab from "@/components/notes/ParticleEnergyLab";
import styles from "../../../notes.module.css";

export const metadata = {
  title: "Mechanics of a Particle | Lesson 1.1 | Zura Jashi",
  description: "Illustrated notes on particle mechanics: Newton’s laws, momentum, torque, work, conservative forces, and energy, with an interactive spring model and solved exercises.",
};

const sections = [
  ["description", "Describe the particle"],
  ["newton", "Force & momentum"],
  ["angular", "Torque & angular momentum"],
  ["work", "Work & kinetic energy"],
  ["potential", "Conservative forces"],
  ["energy", "Energy & the spring lab"],
  ["time", "When the potential changes"],
  ["practice", "Try it yourself"],
];

export default function ParticleLesson() {
  return <div className={styles.page}>
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <Link href="/notes">Notes</Link><span>/</span><Link href="/notes/physics">Physics</Link><span>/</span><Link href="/notes/classical-mechanics">Classical Mechanics</Link><span>/</span><Link href="/notes/classical-mechanics/chapter-1">Chapter 1</Link><span>/</span><span>1.1</span>
    </nav>
    <header className={styles.readingHeader}>
      <p className={styles.subjectKicker}><span>1.1</span> SURVEY OF THE ELEMENTARY PRINCIPLES</p>
      <h1 className={styles.subjectTitle}>Mechanics of<br /><em>a Particle</em></h1>
      <p className={styles.subjectDescription}>One moving point is enough to connect force, momentum, and energy. The goal is to recognize which description makes a problem easiest to solve.</p>
      <div className={styles.readingMeta}><span>25–35 min + exercises</span><span>Vectors · Derivatives · Integrals</span></div>
    </header>
    <div className={styles.lessonLayout}>
      <article className={styles.article}>
        <div className={styles.lessonOverview}>
          <p className={styles.label}>THE ROUTE THROUGH THIS LESSON</p>
          <p>Begin with Newton’s equation. Take a cross product to reach angular momentum; take a dot product with velocity to reach energy. Three views of the same motion.</p>
          <Equation>{String.raw`\mathbf F=\dot{\mathbf p}\quad\longrightarrow\quad\boldsymbol\tau=\dot{\mathbf L}\quad\text{and}\quad\mathbf F\cdot\mathbf v=\dot T`}</Equation>
        </div>

        <section id="description" className={styles.section}>
          <span className={styles.sectionNumber}>01 / THE MODEL</span>
          <h2>Replace the object with a moving point.</h2>
          <NoteBox kind="definition" title="Particle · A model chosen for the question"><p>A particle is a model of an object whose size, shape, and rotation do not matter for the question at hand. A ball can be treated as a particle when predicting its flight, but not when explaining its spin. The model keeps a mass and a position while leaving internal structure out.</p></NoteBox>
          <p>Choose an origin and fixed axes. The position vector locates the particle; its first and second time derivatives give velocity and acceleration. A dot means a derivative with respect to time.</p>
          <Equation>{String.raw`\mathbf r(t)=x(t)\hat{\mathbf x}+y(t)\hat{\mathbf y}+z(t)\hat{\mathbf z},\qquad \mathbf v=\dot{\mathbf r},\qquad \mathbf a=\ddot{\mathbf r}`}</Equation>
          <ParticleFigure kind="motion" />
          <p>Velocity is tangent to the path. Acceleration describes a change in the <em>vector</em> velocity: its magnitude, direction, or both. A particle moving around a circle at constant speed still accelerates.</p>
          <div className={styles.callout}><strong>The frame is part of the setup.</strong><p>We work in an <strong>inertial frame</strong>: one in which a free particle moves with constant velocity. A frame moving at constant velocity relative to it is also inertial. An accelerating or rotating frame generally needs additional inertial forces. A laboratory on Earth is often a useful approximation, but the required accuracy matters.</p></div>
        </section>

        <section id="newton" className={styles.section}>
          <span className={styles.sectionNumber}>02 / FORCE & MOMENTUM</span>
          <h2>Force changes momentum.</h2>
<NoteBox kind="law" title="Newton’s first law · Inertial motion"><p>A particle subject to <strong>zero net force</strong> moves with constant velocity in an inertial frame. Rest is the special case of zero velocity.</p></NoteBox>
          <p>In Newtonian mechanics, linear momentum is mass times velocity. The total force is the vector sum of all forces on the particle, and Newton’s law relates it to the rate of change of momentum.</p>
          <NoteBox kind="law" title="Newton’s second law · Force and momentum"><Equation>{String.raw`\mathbf p=m\mathbf v,\qquad \mathbf F_{\mathrm{net}}=\frac{d\mathbf p}{dt}`}</Equation><p>In an <strong>inertial frame</strong>; for constant mass this becomes net force equals mass times acceleration.</p></NoteBox>
          <p>For a particle of constant mass, this becomes the familiar second-order equation. To predict a trajectory, supply a force law and an initial position and velocity.</p>
          <Equation>{String.raw`m\ddot{\mathbf r}=\mathbf F(\mathbf r,\mathbf v,t)`}</Equation>
          <p>If the net force vanishes, momentum is constant. With constant mass, velocity is constant too. A component can be conserved even when the full vector is not: zero force along x means constant x-momentum.</p>
          <Equation>{String.raw`\mathbf F=\mathbf 0\Rightarrow\mathbf p=\text{constant},\qquad F_x=0\Rightarrow p_x=\text{constant}`}</Equation>
          <p>Integrating over time gives another useful form: the impulse equals the momentum change.</p>
          <Equation>{String.raw`\Delta\mathbf p=\int_{t_1}^{t_2}\mathbf F\,dt`}</Equation>
          <div className={styles.workedExample}><span className={styles.sectionNumber}>WORKED EXAMPLE / A SHORT PUSH</span><h3>How much does the speed change?</h3><p>A 2 kg particle starts with x-velocity 1 m/s. A net force of 3 N acts in the positive x-direction for 4 s.</p><Equation>{String.raw`\Delta p_x=(3)(4)=12\ \mathrm{kg\,m/s},\qquad v_{x,f}=1+\frac{12}{2}=7\ \mathrm{m/s}`}</Equation><p>The force changes momentum by a fixed amount. Doubling the mass would halve the velocity change for the same impulse.</p></div>
          <p className={styles.reference}>Assumption: we follow the same constant-mass particle. A rocket that ejects fuel is an open system; its momentum balance must include the momentum carried by that fuel.</p>
        </section>

        <section id="angular" className={styles.section}>
          <span className={styles.sectionNumber}>03 / TURNING ABOUT AN ORIGIN</span>
          <h2>Torque changes angular momentum.</h2>
          <p>About a fixed origin O in an inertial frame, define angular momentum and torque using cross products. Here we use τ for torque.</p>
          <NoteBox kind="definition" title="Angular momentum & torque"><Equation>{String.raw`\mathbf L=\mathbf r\times\mathbf p,\qquad \boldsymbol\tau=\mathbf r\times\mathbf F`}</Equation><p>Both quantities are defined about the <strong>same chosen origin</strong>.</p></NoteBox>
          <p>The cross product measures the perpendicular part and assigns a direction by the right-hand rule. Reversing the factors reverses the sign. A force directed along the position vector produces no torque about the origin, even though the force itself may be large.</p>
          <ParticleFigure kind="torque" />
          <p>Differentiate angular momentum with the product rule. The first term vanishes because velocity and momentum are parallel.</p>
          <Equation>{String.raw`\frac{d\mathbf L}{dt}=\dot{\mathbf r}\times\mathbf p+\mathbf r\times\dot{\mathbf p}=\underbrace{\mathbf v\times m\mathbf v}_{\mathbf 0}+\mathbf r\times\mathbf F=\boldsymbol\tau`}</Equation>
          <div className={styles.callout}><strong>Zero torque is the condition.</strong><p>When the net torque about O is zero, angular momentum about O is conserved. Both quantities depend on O: always state the origin. The simple derivation above assumes that origin is fixed in the inertial frame.</p></div>
          <h3>A central force can bend a path without changing L.</h3>
          <p>A force pointing toward or away from a fixed center has zero torque about that center. Consequently, the position and velocity remain in a fixed plane perpendicular to a nonzero angular momentum vector. This is a first clue to why central-force motion becomes simpler in polar coordinates.</p>
          <div className={styles.workedExample}><span className={styles.sectionNumber}>WORKED EXAMPLE / STRAIGHT-LINE MOTION</span><p>A free particle of mass m travels at speed v along the line y = b, in the positive x-direction. Its angular momentum about the origin is not generally zero.</p><Equation>{String.raw`\mathbf r=(vt,b,0),\quad\mathbf p=(mv,0,0),\quad\mathbf L=(0,0,-bmv)`}</Equation><p>L is constant even though r changes. Zero force implies zero torque, but it does not imply zero angular momentum.</p></div>
        </section>

        <section id="work" className={styles.section}>
          <span className={styles.sectionNumber}>04 / THE DOT-PRODUCT VIEW</span>
          <h2>Work measures a change in kinetic energy.</h2>
          <p>For an infinitesimal displacement, work is the force dotted with that displacement. Add these contributions along the actual trajectory to obtain total work.</p>
          <Equation>{String.raw`dW=\mathbf F\cdot d\mathbf r,\qquad W_{1\to2}=\int_1^2\mathbf F\cdot d\mathbf r`}</Equation>
          <ParticleFigure kind="work" />
          <p>Using constant mass and Newton’s law, the instantaneous power delivered by the net force is a total time derivative:</p>
          <Equation>{String.raw`\mathbf F\cdot\mathbf v=m\dot{\mathbf v}\cdot\mathbf v=\frac{d}{dt}\!\left(\frac12 m\mathbf v\cdot\mathbf v\right)=\frac{dT}{dt},\qquad T=\frac12 mv^2`}</Equation>
          <p>Integrating over time yields the work–energy theorem. This result does not require conservative forces: friction can do negative work, reducing kinetic energy.</p>
          <NoteBox kind="result" title="Work–energy theorem"><Equation>{String.raw`W_{1\to2}=T_2-T_1`}</Equation><p><strong>Net work</strong> changes kinetic energy; the net force can include conservative and nonconservative forces.</p></NoteBox>
          <p>Positive work raises speed, negative work lowers it, and a force always perpendicular to velocity does no work. For uniform circular motion, the radial force changes the direction of velocity while kinetic energy stays fixed.</p>
          <div className={styles.workedExample}><span className={styles.sectionNumber}>WORKED EXAMPLE / A FORCE THAT GROWS</span><p>A 1 kg particle moves from x = 1 m to x = 2 m under a net force Fₓ = ax, with a = 3 N/m, starting from rest.</p><Equation>{String.raw`W=\int_{1\,\mathrm m}^{2\,\mathrm m} ax\,dx=4.5\ \mathrm J,\qquad \frac12 mv_f^2=4.5\ \mathrm J\Rightarrow v_f=3\ \mathrm{m/s}`}</Equation><p>No time-dependent trajectory was needed. Energy gives the final speed directly, but does not by itself tell us how long the trip takes.</p></div>
        </section>

        <section id="potential" className={styles.section}>
          <span className={styles.sectionNumber}>05 / PATH INDEPENDENCE</span>
          <h2>When work depends only on the endpoints.</h2>
          <p>Consider a time-independent force field. It is conservative when the work between two points is the same for every allowed path connecting them. Equivalently, its work around every closed loop vanishes.</p>
          <Equation>{String.raw`\oint\mathbf F\cdot d\mathbf r=0`}</Equation>
          <p>We can then assign a scalar potential energy V to each position, defining its differences by the negative of the work. The gradient expresses the same relation locally.</p>
          <NoteBox kind="definition" title="Conservative force & potential energy"><Equation>{String.raw`V(\mathbf r_2)-V(\mathbf r_1)=-\int_1^2\mathbf F\cdot d\mathbf r,\qquad\mathbf F=-\nabla V`}</Equation><p>Work is <strong>path independent</strong> within the domain where this potential is defined.</p></NoteBox>
          <p>In one dimension, Fₓ = −dV/dx: the force points downhill on the potential graph. A steeper slope gives a larger force. Adding a constant to V changes no force or prediction; only potential differences matter.</p>
          <div className={styles.callout}><strong>A useful test—with a domain condition.</strong><p>A smooth conservative field has zero curl. Conversely, zero curl implies a globally defined potential on a simply connected region. If the allowed region has holes, check loop integrals rather than assuming the local condition is sufficient.</p></div>
          <h3>Contrast gravity with sliding friction.</h3>
          <p>Near Earth’s surface, with y upward, a uniform gravitational force has V = mgy. Raising a particle by height h increases V by mgh, whatever path was taken. Sliding friction on a stationary rough surface behaves differently: on an out-and-back trip its work is negative on both legs. The work depends on the distance traveled, not merely the endpoints.</p>
          <p>Mechanical energy lost to sliding friction becomes other forms of energy, such as thermal energy. The failure to conserve T + V does not mean total energy has disappeared.</p>
        </section>

        <section id="energy" className={styles.section}>
          <span className={styles.sectionNumber}>06 / PUTTING THE TWO VIEWS TOGETHER</span>
          <h2>Energy trades between motion and position.</h2>
          <p>For a time-independent conservative force, work is both the gain in kinetic energy and the loss in potential energy. Therefore their sum stays constant.</p>
          <NoteBox kind="law" title="Conservation of mechanical energy"><Equation>{String.raw`T_2-T_1=V_1-V_2\quad\Rightarrow\quad E=T+V=\text{constant}`}</Equation><p>Requires a <strong>time-independent potential</strong> and no additional net nonconservative work.</p></NoteBox>
          <p>For a one-dimensional spring, Fₓ = −kx and V = ½kx², taking V = 0 at equilibrium. Release the particle from rest at x = A. Conservation gives its speed at any allowed position.</p>
          <Equation>{String.raw`\frac12 m\dot x^2+\frac12 kx^2=\frac12 kA^2,\qquad |\dot x|=\sqrt{\frac{k}{m}(A^2-x^2)}`}</Equation>
          <p>The endpoints x = ±A are turning points: the speed vanishes there. At x = 0, the speed is greatest. Energy fixes the speed at a position, but the particle can pass that position moving in either direction.</p>
          <ParticleEnergyLab />
          <h3>Read a potential graph before solving the motion.</h3>
          <p>Allowed positions satisfy V ≤ E because kinetic energy cannot be negative. Equilibrium occurs where the slope of V is zero. A local minimum is stable against sufficiently small disturbances; a local maximum is unstable. For the ideal spring, the minimum at x = 0 is stable.</p>
        </section>

        <section id="time" className={styles.section}>
          <span className={styles.sectionNumber}>07 / AN IMPORTANT EXCEPTION</span>
          <h2>A potential can depend explicitly on time.</h2>
          <p>A force may still have the form −∇V when V depends on both position and time. But the total change of V now has two parts: motion through space and a change of the potential landscape itself.</p>
          <Equation>{String.raw`\frac{dV}{dt}=\nabla V\cdot\mathbf v+\frac{\partial V}{\partial t}`}</Equation>
          <p>Combining this with the power equation cancels the spatial terms. If no additional forces act, the remaining term is the rate of change of mechanical energy.</p>
          <NoteBox kind="result" title="Energy balance · Explicit time dependence"><Equation>{String.raw`\frac{d}{dt}(T+V)=\frac{\partial V}{\partial t}`}</Equation><p>For forces generated by the potential alone. An externally changing potential can supply or remove mechanical energy.</p></NoteBox>
          <p>For example, imagine an externally controlled spring stiffness k(t), with V = ½k(t)x². The controller can transfer energy into or out of the particle–spring system.</p>
          <Equation>{String.raw`\frac{dE}{dt}=\frac12\dot k(t)x^2`}</Equation>
          <p>A useful accounting convention fixes the zero of V without an arbitrary time-dependent offset. Changing that convention would change the numerical definition of E and its time derivative, without changing the motion.</p>
          <div className={styles.callout}><strong>Keep the assumptions attached to the theorem.</strong><p>With extra nonconservative forces, the general balance becomes:</p><Equation>{String.raw`\frac{dE}{dt}=\frac{\partial V}{\partial t}+\mathbf F_{\mathrm{nc}}\cdot\mathbf v`}</Equation><p>The two terms describe explicit driving and power from forces outside the potential description.</p></div>
        </section>

        <section id="practice" className={styles.section}>
          <span className={styles.sectionNumber}>08 / TRY IT YOURSELF</span>
          <h2>Check the condition, then calculate.</h2>
          <div className={styles.exercise}><h3>1. A force without torque</h3><p>A particle moves under a central attractive force about a fixed origin. Must its linear momentum be conserved? What about angular momentum?</p><details><summary>Show reasoning</summary><p>Linear momentum generally changes because the net force is nonzero. Angular momentum about the force center is conserved because r × F = 0. The two conservation laws require different conditions.</p></details></div>
          <div className={styles.exercise}><h3>2. Spring speed</h3><p>Use m = 2 kg, k = 8 N/m, and A = 0.5 m. Find the total energy and the speed at x = 0.3 m.</p><details><summary>Show solution</summary><Equation>{String.raw`E=\frac12(8)(0.5)^2=1\ \mathrm J,\quad V=\frac12(8)(0.3)^2=0.36\ \mathrm J`}</Equation><Equation>{String.raw`T=0.64\ \mathrm J,\qquad |v|=\sqrt{\frac{2T}{m}}=0.8\ \mathrm{m/s}`}</Equation><p>The speed is the same on the outward and return passes; the velocities have opposite signs.</p></details></div>
          <div className={styles.exercise}><h3>3. Does a potential exist?</h3><p>In the whole xy-plane, consider F = a(y, −x, 0), where a is a nonzero constant with units N/m. Is it conservative?</p><details><summary>Show solution</summary><Equation>{String.raw`(\nabla\times\mathbf F)_z=\frac{\partial F_y}{\partial x}-\frac{\partial F_x}{\partial y}=-a-a=-2a\ne0`}</Equation><p>No. As a direct check, around a counterclockwise circle of radius R, F points opposite the tangent for positive a and the loop work is −2πaR².</p></details></div>
          <div className={styles.exercise}><h3>4. A changing spring</h3><p>At an instant when x = 0.2 m, the spring stiffness increases at 3 N/(m·s). With no friction, what is dE/dt?</p><details><summary>Show solution</summary><Equation>{String.raw`\dot E=\frac12\dot k\,x^2=\frac12(3)(0.2)^2=0.06\ \mathrm W`}</Equation><p>The controller supplies mechanical energy at this instant. This is an instantaneous rate, not the energy added over a whole cycle.</p></details></div>
          <h3>The three conservation questions</h3>
          <ul className={styles.takeaways}><li><strong>Momentum:</strong> is the net force zero, or is a particular component zero?</li><li><strong>Angular momentum:</strong> is the net torque zero about the chosen fixed origin?</li><li><strong>Mechanical energy:</strong> is the potential time independent, with no additional net nonconservative power?</li></ul>
        </section>
        <div className={styles.lessonSources}><p className={styles.label}>READING & NOTATION</p><p>Original study notes based on the supplied pages of Goldstein, Poole & Safko, <em>Classical Mechanics</em>, Chapter 1, §1.1 (pp. 1–5). Explanations, examples, exercises, and diagrams are written for this notebook. We use τ for torque and V for potential energy.</p><p>For another treatment, see <a href="https://web.physics.ucsb.edu/~phys205/fall2013/Lecture_Notes_files/Lect1.pdf" target="_blank" rel="noopener noreferrer">David Berenstein’s UCSB notes on single-particle dynamics</a>. Additional practice and background: <a href="https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/online-textbook/" target="_blank" rel="noopener noreferrer">MIT OpenCourseWare’s mechanics textbook</a>.</p></div>
        <nav className={styles.lessonEnd} aria-label="Lesson navigation"><Link href="/notes/classical-mechanics/chapter-1">Back to chapter contents</Link><Link href="/notes/classical-mechanics/chapter-1/mechanics-of-a-system-of-particles">Next: 1.2 · Mechanics of a System of Particles</Link></nav>
      </article>
      <aside className={styles.toc}><nav aria-label="On this page"><p className={styles.label}>In this lesson</p><ol>{sections.map(([id, label], i) => <li key={id}><a href={`#${id}`}>{String(i + 1).padStart(2, "0")} / {label}</a></li>)}</ol></nav></aside>
    </div>
  </div>;
}
