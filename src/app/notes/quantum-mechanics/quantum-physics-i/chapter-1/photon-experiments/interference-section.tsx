import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function InterferenceSection() {
  return (
    <section id="interference" className={styles.section}>
      <span className={styles.sectionNumber}>02 / KEEP THE PHASE</span>
      <h2>The second splitter can undo the first.</h2>
      <ol className={styles.cycleSteps}>
        <li>
          <strong>Prepare:</strong> apply the first splitter to the input state.
        </li>
        <li>
          <strong>Shift the phase:</strong> multiply the upper-arm amplitude by
          the relative phase factor.
        </li>
        <li>
          <strong>Recombine:</strong> apply the second splitter and add
          contributions to each output amplitude.
        </li>
        <li>
          <strong>Predict:</strong> take each output amplitude’s squared
          magnitude.
        </li>
      </ol>
      <p>
        With equal arm phases and our chosen convention, H² = I. A photon
        entering input 0 therefore leaves through detector D₀ with certainty
        after both splitters. Detector D₁ is dark.
      </p>
      <p>
        Introduce a relative phase φ in the upper arm. Immediately before the
        second splitter, the state is:
      </p>
      <Equation>{String.raw`|\psi_{\mathrm{arms}}\rangle=\frac{e^{i\phi}|u\rangle+|l\rangle}{\sqrt2}`}</Equation>
      <p>
        Apply H once more. Each output amplitude contains contributions from
        both arms.
      </p>
      <Equation>{String.raw`\begin{pmatrix}a_0\\a_1\end{pmatrix}=\frac12\begin{pmatrix}e^{i\phi}+1\\e^{i\phi}-1\end{pmatrix}`}</Equation>
      <NoteBox kind="result" title="Interferometer output probabilities">
        <Equation>{String.raw`P(D_0)=\cos^2\!\frac\phi2,\qquad P(D_1)=\sin^2\!\frac\phi2`}</Equation>
        <p>
          For the <strong>ideal coherent apparatus</strong> and phase convention
          used here. The probabilities sum to one.
        </p>
      </NoteBox>
      <p>
        At φ = 0 the D₁ contributions cancel. At φ = π, D₀ is dark instead. At φ
        = π/2 both detectors have probability 1/2. These are probabilities
        across repeated preparations, not fractions of a single detection.
      </p>
      <div className={styles.workedExample}>
        <span className={styles.sectionNumber}>
          WORKED EXAMPLE / A 120° PHASE SHIFT
        </span>
        <Equation>{String.raw`\phi=\frac{2\pi}{3}\quad\Rightarrow\quad P(D_0)=\cos^2(\pi/3)=\frac14,\quad P(D_1)=\frac34`}</Equation>
        <p>
          In a large set of trials, expect approximately 25% and 75% of
          detections at the respective outputs, with statistical fluctuations.
        </p>
      </div>
    </section>
  );
}
