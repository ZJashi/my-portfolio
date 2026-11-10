import { NoteBox } from "@/components/notes/NoteBox";
import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { Equation } from "@/components/notes/Equation";
import InterferometerLab from "@/components/notes/InterferometerLab";
import styles from "../../../../notes.styles";
import { InterferenceSection } from "./interference-section";
import { PracticeSection } from "./practice-section";

export const metadata = {
  title: "Experiments with Photons | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="1.2"
      title="Experiments with Photons"
      description="Follow one photon through two possible paths. Use amplitudes to predict interference, and see what changes when a path can be detected."
      sections={[
        ["splitter", "A beam splitter"],
        ["interference", "Recombine the paths"],
        ["lab", "Interferometer lab"],
        ["information", "Path information"],
        ["detection", "Interaction-free detection"],
        ["practice", "Practice"],
      ]}
    >
      <div className={styles.lessonOverview}>
        <p>
          The apparatus has two beam splitters, two arms, and two detectors. The
          calculation is a sequence of operations on a two-component state. No
          assumption about a hidden classical route is needed.
        </p>
      </div>
      <section id="splitter" className={styles.section}>
        <span className={styles.sectionNumber}>
          01 / CHOOSE A CONSISTENT CONVENTION
        </span>
        <h2>A splitter acts on amplitudes.</h2>
        <p>
          Let |u⟩ and |l⟩ denote orthogonal upper and lower path states. An
          ideal balanced beam splitter maps one input to equal-magnitude path
          amplitudes. To keep the algebra transparent, use the matrix H below,
          with fixed optical phases absorbed into our definitions of the modes.
        </p>
        <NoteBox
          kind="result"
          title="Balanced beam splitter · Chosen phase convention"
        >
          <Equation>{String.raw`H=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad H\begin{pmatrix}1\\0\end{pmatrix}=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix}`}</Equation>
          <p>
            The <strong>unitary</strong> matrix preserves total probability.
            Optical phase conventions must be used consistently throughout the
            apparatus.
          </p>
        </NoteBox>
        <p>
          This is a unitary transformation: it preserves the norm and therefore
          the total probability. Other optical conventions use factors of i for
          reflection; detector names and phase offsets can change, but
          measurable predictions agree when the full apparatus is treated
          consistently.
        </p>
        <div className={styles.callout}>
          <strong>Half the amplitude is not half the probability.</strong>
          <p>
            Each amplitude has magnitude 1/√2. Its squared magnitude is 1/2.
            Splitting a single-photon state does not produce two photons with
            half the energy each.
          </p>
        </div>
      </section>
      <InterferenceSection />
      <section id="lab" className={styles.section}>
        <span className={styles.sectionNumber}>03 / CHANGE THE EXPERIMENT</span>
        <h2>Turn phase into a detector probability.</h2>
        <InterferometerLab />
      </section>
      <section id="information" className={styles.section}>
        <span className={styles.sectionNumber}>
          04 / DISTINGUISHABLE ALTERNATIVES
        </span>
        <h2>Which-path information removes the cross term.</h2>
        <NoteBox kind="definition" title="Distinguishable paths">
          <p>
            A <strong>which-path record</strong> correlates each photon path
            with a distinguishable state of another system. Perfectly
            distinguishable records remove interference when that record is
            ignored.
          </p>
        </NoteBox>
        <p>
          If an environment records different paths in distinguishable states,
          the photon becomes correlated with that record. When we ignore the
          record, interference is reduced. For perfectly distinguishable
          records, the cross term vanishes.
        </p>
        <Equation>{String.raw`|\Psi\rangle=\frac{e^{i\phi}|u\rangle|E_u\rangle+|l\rangle|E_l\rangle}{\sqrt2},\qquad\langle E_u|E_l\rangle=0`}</Equation>
        <p>
          A nondestructive perfect path record gives equal output probabilities
          at the second balanced splitter. An absorbing obstacle is different:
          it can remove the photon. Conditioned on the photon surviving an
          absorber in the upper arm, it arrives along the lower arm and the
          second splitter sends it to either detector with equal probability.
        </p>
        <p>
          Per incident photon, that means 1/2 absorbed, 1/4 at D₀, and 1/4 at
          D₁. Among surviving detections, D₀ and D₁ are each 1/2. Always state
          which population defines the probability.
        </p>
      </section>
      <section id="detection" className={styles.section}>
        <span className={styles.sectionNumber}>
          05 / A DARK PORT CAN REVEAL AN OBSTACLE
        </span>
        <h2>Learn about an object without absorbing that photon.</h2>
        <p>
          Set φ = 0 and align the empty interferometer so D₁ is dark. Place an
          ideal perfectly absorbing object in the upper arm. A D₁ click is now
          possible. In this ideal setup it rules out the empty, aligned
          apparatus, even though the detected photon was not absorbed by the
          object.
        </p>
        <NoteBox
          kind="result"
          title="Interaction-free detection · Outcomes per incident photon"
        >
          <Equation>{String.raw`P(\mathrm{absorbed})=\frac12,\quad P(D_0)=\frac14,\quad P(D_1)=\frac14`}</Equation>
          <p>
            At <strong>zero relative phase</strong> with an ideal upper-arm
            absorber. A D₁ click is conclusive in this calibrated ideal model; a
            D₀ click is inconclusive.
          </p>
        </NoteBox>
        <p>
          This is the basic Elitzur–Vaidman interaction-free detection idea. The
          D₁ result is conclusive in the ideal model; a D₀ result is
          inconclusive because it could also occur without the object.
          “Interaction-free” refers to the successful detected event, not to a
          guarantee that every trial avoids absorption.
        </p>
        <div className={styles.callout}>
          <strong>Keep the idealization visible.</strong>
          <p>
            A phase drift, imperfect splitter, or detector background can also
            populate a nominally dark port. Real experiments need calibration
            and noise analysis before treating one click as evidence for an
            object.
          </p>
        </div>
      </section>
      <PracticeSection />
      <div className={styles.lessonSources}>
        <p>
          Original calculations, examples, diagrams, and model following the
          topics of Barton Zwiebach’s MIT 8.04, Spring 2016:{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes2/">
            Lecture Note 2
          </a>
          ,{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/interferometer-and-interference/">
            interferometer and interference
          </a>
          , and{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/elitzur-vaidman-bombs/">
            interaction-free measurements
          </a>
          . The matrix convention here is chosen for this notebook.
        </p>
      </div>
    </QuantumLesson>
  );
}
