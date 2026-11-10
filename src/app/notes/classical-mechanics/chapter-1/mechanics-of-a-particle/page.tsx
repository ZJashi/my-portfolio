import { NoteBox } from "@/components/notes/NoteBox";
import Link from "next/link";
import { Equation } from "@/components/notes/Equation";
import ParticleEnergyLab from "@/components/notes/ParticleEnergyLab";
import styles from "../../../notes.styles";
import { sections } from "./lesson-data";
import { PracticeSection } from "./practice-section";
import { NewtonSection } from "./newton-section";
import { AngularSection } from "./angular-section";
import { PotentialSection } from "./potential-section";
import { WorkSection } from "./work-section";
import { TimeSection } from "./time-section";
import { DescriptionSection } from "./description-section";

export const metadata = {
  title: "Mechanics of a Particle | Lesson 1.1 | Zura Jashi",
  description:
    "Illustrated notes on particle mechanics: Newton’s laws, momentum, torque, work, conservative forces, and energy, with an interactive spring model and solved exercises.",
};

export default function ParticleLesson() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/physics">Physics</Link>
        <span>/</span>
        <Link href="/notes/classical-mechanics">Classical Mechanics</Link>
        <span>/</span>
        <Link href="/notes/classical-mechanics/chapter-1">Chapter 1</Link>
        <span>/</span>
        <span>1.1</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>
          <span>1.1</span> SURVEY OF THE ELEMENTARY PRINCIPLES
        </p>
        <h1 className={styles.subjectTitle}>
          Mechanics of
          <br />
          <em>a Particle</em>
        </h1>
        <p className={styles.subjectDescription}>
          One moving point is enough to connect force, momentum, and energy. The
          goal is to recognize which description makes a problem easiest to
          solve.
        </p>
        <div className={styles.readingMeta}>
          <span>Vectors · Derivatives · Integrals</span>
        </div>
      </header>
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          <div className={styles.lessonOverview}>
            <p className={styles.label}>THE ROUTE THROUGH THIS LESSON</p>
            <p>
              Begin with Newton’s equation. Take a cross product to reach
              angular momentum; take a dot product with velocity to reach
              energy. Three views of the same motion.
            </p>
            <Equation>{String.raw`\mathbf F=\dot{\mathbf p}\quad\longrightarrow\quad\boldsymbol\tau=\dot{\mathbf L}\quad\text{and}\quad\mathbf F\cdot\mathbf v=\dot T`}</Equation>
          </div>

          <DescriptionSection />

          <NewtonSection />

          <AngularSection />

          <WorkSection />

          <PotentialSection />

          <section id="energy" className={styles.section}>
            <span className={styles.sectionNumber}>
              06 / PUTTING THE TWO VIEWS TOGETHER
            </span>
            <h2>Energy trades between motion and position.</h2>
            <p>
              For a time-independent conservative force, work is both the gain
              in kinetic energy and the loss in potential energy. Therefore
              their sum stays constant.
            </p>
            <NoteBox kind="law" title="Conservation of mechanical energy">
              <Equation>{String.raw`T_2-T_1=V_1-V_2\quad\Rightarrow\quad E=T+V=\text{constant}`}</Equation>
              <p>
                Requires a <strong>time-independent potential</strong> and no
                additional net nonconservative work.
              </p>
            </NoteBox>
            <p>
              For a one-dimensional spring, Fₓ = −kx and V = ½kx², taking V = 0
              at equilibrium. Release the particle from rest at x = A.
              Conservation gives its speed at any allowed position.
            </p>
            <Equation>{String.raw`\frac12 m\dot x^2+\frac12 kx^2=\frac12 kA^2,\qquad |\dot x|=\sqrt{\frac{k}{m}(A^2-x^2)}`}</Equation>
            <p>
              The endpoints x = ±A are turning points: the speed vanishes there.
              At x = 0, the speed is greatest. Energy fixes the speed at a
              position, but the particle can pass that position moving in either
              direction.
            </p>
            <ParticleEnergyLab />
            <h3>Read a potential graph before solving the motion.</h3>
            <p>
              Allowed positions satisfy V ≤ E because kinetic energy cannot be
              negative. Equilibrium occurs where the slope of V is zero. A local
              minimum is stable against sufficiently small disturbances; a local
              maximum is unstable. For the ideal spring, the minimum at x = 0 is
              stable.
            </p>
          </section>

          <TimeSection />

          <PracticeSection />
          <div className={styles.lessonSources}>
            <p className={styles.label}>READING & NOTATION</p>
            <p>
              Original study notes based on the supplied pages of Goldstein,
              Poole & Safko, <em>Classical Mechanics</em>, Chapter 1, §1.1 (pp.
              1–5). Explanations, examples, exercises, and diagrams are written
              for this notebook. We use τ for torque and V for potential energy.
            </p>
            <p>
              For another treatment, see{" "}
              <a
                href="https://web.physics.ucsb.edu/~phys205/fall2013/Lecture_Notes_files/Lect1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                David Berenstein’s UCSB notes on single-particle dynamics
              </a>
              . Additional practice and background:{" "}
              <a
                href="https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/online-textbook/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT OpenCourseWare’s mechanics textbook
              </a>
              .
            </p>
          </div>
          <nav className={styles.lessonEnd} aria-label="Lesson navigation">
            <Link href="/notes/classical-mechanics/chapter-1">
              Back to chapter contents
            </Link>
            <Link href="/notes/classical-mechanics/chapter-1/mechanics-of-a-system-of-particles">
              Next: 1.2 · Mechanics of a System of Particles
            </Link>
          </nav>
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lesson</p>
            <ol>
              {sections.map(([id, label], i) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    {String(i + 1).padStart(2, "0")} / {label}
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
