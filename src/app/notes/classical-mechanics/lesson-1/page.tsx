import Link from "next/link";
import { Equation } from "@/components/notes/Equation";
import styles from "../../notes.styles";
import { sections } from "./lesson-data";
import { PredictionSection } from "./prediction-section";
import { PendulumSection } from "./pendulum-section";
import { ConstraintsSection } from "./constraints-section";
import { CoordinatesSection } from "./coordinates-section";
import { MotionSection } from "./motion-section";

export const metadata = {
  title: "Newton’s Laws & Generalized Coordinates | Lesson 1 | Zura Jashi",
  description:
    "Learn constraints and generalized coordinates through a pendulum: intuitive explanations, a complete Newtonian derivation, an interactive simulation, and solved exercises.",
};

export default function LessonOne() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/physics">Physics</Link>
        <span>/</span>
        <Link href="/notes/classical-mechanics">Classical Mechanics</Link>
        <span>/</span>
        <span>Lesson 01</span>
      </nav>
      <p className={styles.eyebrow}>Classical Mechanics / Lesson 01</p>
      <h1 className={styles.title}>
        From Newton’s Laws to Generalized Coordinates
      </h1>
      <p className={styles.intro}>
        How do we choose variables that make a mechanical problem simple? A
        pendulum gives us the whole story: forces, constraints, and a better way
        to describe motion.
      </p>
      <div className={styles.meta}>
        <span>Prerequisites: derivatives & vectors</span>
        <span>Reading companion to Goldstein, Ch. 1</span>
      </div>
      <hr className={styles.rule} />
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          <div className={styles.callout}>
            <strong>The idea to keep</strong>
            <p>
              A coordinate describes a possible configuration. A constraint
              limits those possibilities. Choose independent coordinates that
              already respect the constraints, and the problem becomes smaller.
            </p>
          </div>

          <MotionSection />

          <ConstraintsSection />

          <CoordinatesSection />

          <PendulumSection />

          <PredictionSection />

          <section id="practice" className={styles.section}>
            <span className={styles.sectionNumber}>06 / TRY IT YOURSELF</span>
            <h2>Check your understanding.</h2>
            <div className={styles.exercise}>
              <h3>01 — Build a faster pendulum</h3>
              <p>
                You want a small-angle period of 1.00 s on Earth. What rod
                length should you use? What happens to the period if you double
                the bob’s mass?
              </p>
              <details>
                <summary>Reveal solution</summary>
                <Equation>{String.raw`\ell=g\left(\frac{T_0}{2\pi}\right)^2=9.81\left(\frac{1.00}{2\pi}\right)^2\mathrm m\approx0.248\,\mathrm m.`}</Equation>
                <p>
                  Use a length of about 24.8 cm, measured from the pivot to the
                  point mass. Doubling the mass leaves the period unchanged
                  under our ideal assumptions.
                </p>
              </details>
            </div>
            <div className={styles.exercise}>
              <h3>02 — Add another pendulum</h3>
              <p>
                Attach a second rigid rod and bob to the first bob, with both
                rods moving in the same vertical plane. How many degrees of
                freedom are there? Suggest coordinates. Does specifying those
                coordinates alone determine the future motion?
              </p>
              <details>
                <summary>Reveal solution</summary>
                <p>
                  There are four Cartesian position coordinates for the two bobs
                  and two independent fixed-length constraints, leaving two
                  degrees of freedom. Use the angle of each rod relative to the
                  downward vertical, θ₁ and θ₂. These specify the configuration.
                  To predict the motion, you also need both angular velocities
                  as initial data.
                </p>
              </details>
            </div>
          </section>

          <section className={styles.section}>
            <span className={styles.sectionNumber}>TAKE WITH YOU</span>
            <h2>The essential picture.</h2>
            <ul className={styles.takeaways}>
              <li>Newton’s law connects net force to acceleration.</li>
              <li>
                Constraints reduce the number of independent configuration
                variables.
              </li>
              <li>
                Generalized coordinates can encode those constraints
                automatically.
              </li>
              <li>
                For the pendulum, projecting onto the tangent removes the
                unknown rod force from the equation for the angle.
              </li>
              <li>
                The small-angle approximation gives a testable period, with a
                clear range of accuracy.
              </li>
            </ul>
            <p>
              This sets up the next idea: can we obtain equations for
              independent coordinates directly, without projecting forces each
              time? Lagrangian mechanics provides that route, using kinetic and
              potential energy. For now, the important step is choosing the
              right variables.
            </p>
          </section>
          <p className={styles.reference}>
            Reading companion: Goldstein, Poole & Safko,{" "}
            <a
              href="https://www.pearson.com/en-us/subject-catalog/p/Goldstein-Classical-Mechanics-3rd-Edition/P200000006871?view=educator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Classical Mechanics</em>, 3rd edition
            </a>
            , Chapter 1, “Survey of the Elementary Principles.” This lesson is
            an original introductory treatment of particle mechanics,
            constraints, and generalized coordinates; it is not a reproduction
            or complete summary of the chapter.
          </p>
          <Link href="/notes/classical-mechanics" className={styles.cardFoot}>
            ← Back to Classical Mechanics
          </Link>
        </article>
        <nav className={styles.toc} aria-label="Lesson sections">
          <span className={styles.label}>In this lesson</span>
          <ol>
            {sections.map(([id, title], i) => (
              <li key={id}>
                <a href={`#${id}`}>
                  {String(i + 1).padStart(2, "0")} · {title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
