import { NoteBox } from "@/components/notes/NoteBox";
import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { Equation } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import { ComplexSection } from "./complex-section";
import { SuperpositionSection } from "./superposition-section";

export const metadata = {
  title: "Key Features of Quantum Mechanics | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="1.1"
      title="Key Features of Quantum Mechanics"
      description="Replace trajectories with states. Learn why complex amplitudes, linear evolution, and superposition belong together."
      sections={[
        ["linearity", "Linearity"],
        ["complex", "Complex amplitudes"],
        ["measurement", "Measurement"],
        ["superposition", "Superposition & entanglement"],
        ["practice", "Practice"],
      ]}
    >
      <div className={styles.lessonOverview}>
        <p>
          A quantum state is a tool for predicting measurement probabilities. We
          begin with a two-state system rather than a full wavefunction, so the
          essential ideas fit into two-component vectors.
        </p>
      </div>
      <section id="linearity" className={styles.section}>
        <span className={styles.sectionNumber}>
          01 / THE EQUATION ACTS ON A STATE
        </span>
        <h2>Linearity lets solutions combine.</h2>
        <p>
          An operator is linear if it distributes over addition and scalar
          multiplication. For a fixed Hamiltonian, Schrödinger evolution has
          this property.
        </p>
        <NoteBox kind="law" title="Linearity & Schrödinger evolution">
          <Equation>{String.raw`L(a\psi+b\chi)=aL\psi+bL\chi,\qquad i\hbar\frac{\partial\psi}{\partial t}=\hat H\psi`}</Equation>
          <p>
            For a <strong>fixed Hamiltonian</strong>, solutions combine
            linearly. Normalize the resulting state before computing
            probabilities.
          </p>
        </NoteBox>
        <p>
          If two states solve the same evolution equation, their linear
          combination does too. The resulting state must be normalized before
          probabilities are read from it. This is a statement about amplitudes,
          not a rule saying that probabilities add.
        </p>
        <p>
          Classical systems may also have linear equations. A spring with force
          −kx is an example; a force proportional to −x³ generally is not. What
          is new in quantum mechanics is the physical interpretation of the
          state and its superpositions.
        </p>
        <div className={styles.workedExample}>
          <span className={styles.sectionNumber}>CHECK THE ALGEBRA</span>
          <p>
            For L = d/dt, differentiating aψ + bχ with constant a and b gives aψ̇
            + bχ̇. For N(ψ) = ψ², however, squaring a sum introduces a cross
            term. N is not linear.
          </p>
          <Equation>{String.raw`(\psi+\chi)^2=\psi^2+2\psi\chi+\chi^2`}</Equation>
        </div>
      </section>
      <ComplexSection />
      <section id="measurement" className={styles.section}>
        <span className={styles.sectionNumber}>03 / WHAT A STATE PREDICTS</span>
        <h2>Deterministic evolution, probabilistic outcomes.</h2>
        <p>
          For two orthogonal, normalized basis states, the squared magnitudes of
          the coefficients give their measurement probabilities.
        </p>
        <Equation>{String.raw`|\psi\rangle=\alpha|0\rangle+\beta|1\rangle,\quad |\alpha|^2+|\beta|^2=1`}</Equation>
        <NoteBox kind="law" title="Born rule · Measurement probabilities">
          <Equation>{String.raw`P(0)=|\alpha|^2,\qquad P(1)=|\beta|^2`}</Equation>
          <p>
            Use a <strong>normalized state</strong> and the stated{" "}
            <strong>orthonormal measurement basis</strong>.
          </p>
        </NoteBox>
        <p>
          Preparing the same state repeatedly predicts outcome frequencies, but
          generally does not specify which outcome occurs on an individual
          trial. Between measurements, a specified Hamiltonian determines the
          state’s evolution.
        </p>
        <div className={styles.workedExample}>
          <span className={styles.sectionNumber}>
            WORKED EXAMPLE / NORMALIZE FIRST
          </span>
          <p>
            A preparation produces a vector proportional to 2|0⟩ + i|1⟩. Its
            squared norm is 5.
          </p>
          <Equation>{String.raw`|\psi\rangle=\frac{2|0\rangle+i|1\rangle}{\sqrt5},\qquad P(0)=\frac45,\quad P(1)=\frac15`}</Equation>
          <p>
            The imaginary coefficient is not an imaginary probability. Its
            modulus squared is 1.
          </p>
        </div>
        <p>
          A polarization example uses horizontal and vertical photon states. A
          photon polarized at angle θ to an ideal horizontal polarizer transmits
          with probability cos²θ. After transmission it is horizontally
          polarized.
        </p>
      </section>
      <SuperpositionSection />
      <section id="practice" className={styles.section}>
        <span className={styles.sectionNumber}>05 / PRACTICE</span>
        <h2>Calculate before interpreting.</h2>
        <div className={styles.exercise}>
          <h3>1. A global phase</h3>
          <p>Does multiplying the normalized state by i change P(0) or P(1)?</p>
          <details>
            <summary>Show solution</summary>
            <p>
              No. Both coefficients gain a common phase with modulus one, so
              their squared magnitudes and all other measurement predictions
              stay unchanged.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. A relative minus sign</h3>
          <p>
            What is the probability of a + result when the prepared state is
            |−⟩?
          </p>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\langle+|-\rangle=\frac{1-1}{2}=0\quad\Rightarrow\quad P(+)=0`}</Equation>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original explanations and examples following the topics of Barton
          Zwiebach’s MIT 8.04, Spring 2016. Read{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes1/">
            Lecture Note 1
          </a>{" "}
          and the accompanying{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/video-lectures/part-1/">
            opening lectures
          </a>
          . These are independent study notes, not a transcript.
        </p>
      </div>
    </QuantumLesson>
  );
}
