import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function ComplexSection() {
  return (
    <section id="complex" className={styles.section}>
      <span className={styles.sectionNumber}>02 / MAGNITUDE AND PHASE</span>
      <h2>A probability amplitude has a direction.</h2>
      <NoteBox
        kind="definition"
        title="Complex amplitude · Magnitude and phase"
      >
        <p>
          A <strong>complex amplitude</strong> can be described by a{" "}
          <strong>magnitude</strong> and a <strong>phase</strong>. Its modulus
          squared is real and nonnegative, so it can enter a probability rule.
        </p>
      </NoteBox>
      <Equation>{String.raw`z=re^{i\phi}=r(\cos\phi+i\sin\phi),\qquad |z|^2=z^*z=r^2`}</Equation>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 480 250"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          role="img"
          aria-label="A complex amplitude shown as a vector at angle phi in the complex plane."
        >
          <path d="M65 195H425M100 220V30" opacity=".4" />
          <path d="M100 195 320 65" strokeWidth="2.5" />
          <path d="M320 65v130M100 65h220" strokeDasharray="4 5" opacity=".4" />
          <path d="M148 195a48 48 0 0 0-7-25" />
          <g
            stroke="none"
            fill="currentColor"
            fontFamily="Georgia"
            fontStyle="italic"
            fontSize="18"
          >
            <text x="201" y="114">
              z = reⁱφ
            </text>
            <text x="155" y="181">
              φ
            </text>
            <text x="397" y="222">
              Re
            </text>
            <text x="66" y="34">
              Im
            </text>
          </g>
        </svg>
        <figcaption>
          Changing phase rotates an amplitude without changing its magnitude.
          Relative phase becomes observable when alternatives interfere.
        </figcaption>
      </figure>
      <p>
        Multiplying a whole state by one common phase changes no measurement
        probabilities. Multiplying only one component changes the{" "}
        <strong>relative phase</strong>, and can change the predictions in a
        different measurement basis.
      </p>
      <Equation>{String.raw`|\psi\rangle=\frac{|0\rangle+e^{i\phi}|1\rangle}{\sqrt2}`}</Equation>
      <p>
        Measuring in the 0/1 basis gives equal probabilities for every φ. But a
        device that recombines the components can distinguish φ = 0 from φ = π.
        The next lesson makes that difference visible.
      </p>
    </section>
  );
}
