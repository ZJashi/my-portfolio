import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function SetupSection() {
  return (
    <section id="setup" className={styles.section}>
      <h2>Specify where the wave comes from.</h2>
      <NoteBox kind="definition" title="Upward potential step · Left incidence">
        <Equation>{String.raw`V(x)=\begin{cases}0,&x<0,\\V_0,&x\ge0,\end{cases}\qquad V_0>0,\qquad E>0.`}</Equation>
        <p>
          We use a real static potential and the{" "}
          <strong>same mass on both sides</strong>. The incoming channel is on
          the left; there is no independent incoming wave from the right.
        </p>
      </NoteBox>
      <P>{String.raw`Factor out the common time dependence $e^{-iEt/\hbar}$. On the left, write $\phi=e^{ikx}+re^{-ikx}$, where $k=\sqrt{2mE}/\hbar$. The coefficient of the incident wave is set to one as a relative-amplitude convention. It is not a claim of unit total probability over the infinite line.`}</P>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 600 245"
          role="img"
          aria-labelledby="step-title step-desc"
        >
          <title id="step-title">
            Scattering from an upward potential step
          </title>
          <desc id="step-desc">
            The potential rises from zero on the left to V zero on the right.
            Above the step, an incident wave travels right, a reflected wave
            travels left, and a transmitted wave travels right.
          </desc>
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M35 180H300V105H565M35 55H565" />
            <path d="M70 90H220M207 82L220 90L207 98M220 132H70M83 124L70 132L83 140M370 82H530M517 74L530 82L517 90" />
          </g>
          <g fill="currentColor" fontSize="16">
            <text x="40" y="39">
              E &gt; V₀
            </text>
            <text x="90" y="80">
              Incident · k
            </text>
            <text x="95" y="160">
              Reflected · −k
            </text>
            <text x="365" y="69">
              Transmitted · q
            </text>
            <text x="310" y="131">
              V₀
            </text>
            <text x="290" y="215">
              x = 0
            </text>
          </g>
        </svg>
        <figcaption>
          Schematic potential and channel directions for E &gt; V₀. The arrows
          identify propagation directions; their lengths do not encode
          probabilities.
        </figcaption>
      </figure>
    </section>
  );
}
