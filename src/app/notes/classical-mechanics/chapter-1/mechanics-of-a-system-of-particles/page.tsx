import { NoteBox } from "@/components/notes/NoteBox";
import Link from "next/link";
import { Equation } from "@/components/notes/Equation";
import { SystemFigure } from "@/components/notes/SystemFigures";
import styles from "../../../notes.styles";
import { base, sections } from "./lesson-data";
import { PracticeSection } from "./practice-section";
import { CenterSection } from "./center-section";
import { ForcesSection } from "./forces-section";
import { PairsSection } from "./pairs-section";
import { EnergySection } from "./energy-section";

export const metadata = {
  title: "Mechanics of a System of Particles | Lesson 1.2 | Zura Jashi",
  description:
    "Illustrated notes on center of mass, internal forces, angular momentum, and energy for many-particle systems.",
};

export default function SystemLesson() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/physics">Physics</Link>
        <span>/</span>
        <Link href="/notes/classical-mechanics">Classical Mechanics</Link>
        <span>/</span>
        <Link href={base}>Chapter 1</Link>
        <span>/</span>
        <span>1.2</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>
          <span>1.2</span> SURVEY OF THE ELEMENTARY PRINCIPLES
        </p>
        <h1 className={styles.subjectTitle}>
          Mechanics of
          <br />
          <em>a System of Particles</em>
        </h1>
        <p className={styles.subjectDescription}>
          Many particles, one collective motion. Separate what the system does
          as a whole from what happens inside it.
        </p>
        <div className={styles.readingMeta}>
          <span>Builds on lesson 1.1</span>
        </div>
      </header>
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          <div className={styles.lessonOverview}>
            <p className={styles.label}>THE CENTRAL IDEA</p>
            <p>
              Internal forces can rearrange a system without accelerating its
              center of mass. Yet those same forces can change its kinetic
              energy. Force cancellation and work cancellation are different
              statements.
            </p>
          </div>
          <ForcesSection />
          <CenterSection />
          <section id="torque" className={styles.section}>
            <span className={styles.sectionNumber}>
              03 / A STRONGER CONDITION
            </span>
            <h2>Canceling forces may still leave a torque.</h2>
            <p>
              About a fixed origin O in the inertial frame, sum the particles’
              angular momenta. The total torque contains external terms and
              internal pair terms.
            </p>
            <Equation>{String.raw`\mathbf L_O=\sum_i\mathbf r_i\times m_i\mathbf v_i`}</Equation>
            <Equation>{String.raw`\dot{\mathbf L}_O=\boldsymbol\tau_O^{\mathrm{ext}}+\sum_{i<j}(\mathbf r_i-\mathbf r_j)\times\mathbf f_{ij}`}</Equation>
            <p>
              Equal and opposite forces remove net force, but their lines of
              action can differ. For the internal torque to cancel pair by pair,
              the forces must also be central: parallel to the vector joining
              the particles. This extra requirement is the{" "}
              <strong>strong form of action and reaction</strong>.
            </p>
            <SystemFigure pair />
            <NoteBox
              kind="law"
              title="Angular-momentum balance · Central internal forces"
            >
              <Equation>{String.raw`\mathbf f_{ij}\parallel(\mathbf r_i-\mathbf r_j)\quad\Rightarrow\quad\dot{\mathbf L}_O=\boldsymbol\tau_O^{\mathrm{ext}}`}</Equation>
              <p>
                In addition to equal-and-opposite pairs, internal forces must be{" "}
                <strong>central</strong> for pairwise torque cancellation. Use a
                fixed origin in an inertial frame.
              </p>
            </NoteBox>
            <p>
              With zero external torque, angular momentum is conserved. If only
              the z-component of external torque vanishes, only L_z is
              guaranteed constant.
            </p>
            <div className={styles.workedExample}>
              <span className={styles.sectionNumber}>
                COUNTEREXAMPLE / AN INTERNAL COUPLE
              </span>
              <p>
                Place two particles at (−a, 0, 0) and (+a, 0, 0). Give the first
                force (0, F, 0) and the second (0, −F, 0). The net force is
                zero, while the total torque is (0, 0, −2aF). Equal and opposite
                alone does not establish conservation of particle angular
                momentum.
              </p>
            </div>
          </section>
          <section id="split" className={styles.section}>
            <span className={styles.sectionNumber}>
              04 / CHANGE THE DESCRIPTION
            </span>
            <h2>Translation of the center, motion around it.</h2>
            <p>
              Let r′ᵢ be the displacement from the center of mass to particle i.
              Use axes parallel to the original inertial axes, so this is a
              translating coordinate system without an additional rotation.
            </p>
            <Equation>{String.raw`\mathbf r_i=\mathbf R+\mathbf r'_i,\qquad\mathbf v_i=\mathbf V_{\mathrm{CM}}+\mathbf v'_i,\qquad\mathbf V_{\mathrm{CM}}=\dot{\mathbf R}`}</Equation>
            <SystemFigure />
            <p>
              The defining property of the center of mass supplies two
              cancellations. The second follows by differentiating the first
              with constant masses.
            </p>
            <Equation>{String.raw`\sum_i m_i\mathbf r'_i=\mathbf0,\qquad\sum_i m_i\mathbf v'_i=\mathbf0`}</Equation>
            <p>
              Expand each angular momentum using the split positions and
              velocities. The two mixed sums vanish, leaving an orbital part and
              an intrinsic part.
            </p>
            <Equation>{String.raw`\mathbf L_O=\underbrace{\mathbf R\times\mathbf P}_{\text{motion of the center}}+\underbrace{\sum_i\mathbf r'_i\times m_i\mathbf v'_i}_{\mathbf L_{\mathrm{CM}}}`}</Equation>
            <p>
              The first term depends on the chosen origin. The second describes
              angular momentum relative to the center of mass: the particles can
              circulate around their center while the whole system translates.
              Here “intrinsic” describes this collective classical motion, not
              quantum spin.
            </p>
            <p>
              Changing the fixed origin by displacement a changes the angular
              momentum to L′ = L − a × P. If total momentum is zero, the angular
              momentum is independent of that shift.
            </p>
          </section>
          <EnergySection />
          <PairsSection />
          <PracticeSection />
          <div className={styles.lessonSources}>
            <p className={styles.label}>READING & NOTATION</p>
            <p>
              Original study notes based on the supplied pages of Goldstein,
              Poole & Safko, <em>Classical Mechanics</em>, Chapter 1, §1.2 (pp.
              5–12). Illustrations, examples, and exercises are original. We use
              τ for torque, V for potential energy, and fᵢⱼ for the force on i
              due to j.
            </p>
          </div>
          <nav className={styles.lessonEnd} aria-label="Lesson navigation">
            <Link href={`${base}/mechanics-of-a-particle`}>
              Previous: 1.1 · Mechanics of a Particle
            </Link>
            <Link href={base}>Chapter contents</Link>
            <span>
              Next: 1.3 · Constraints<small>Coming soon</small>
            </span>
          </nav>
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lesson</p>
            <ol>
              {sections.map(([id, title], i) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    {String(i + 1).padStart(2, "0")} / {title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      </div>
    </div>
  );
}
