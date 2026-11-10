import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function LadderSection() {
  return (
    <section id="ladder" className={styles.section}>
      <h2>A commutator controls the step size.</h2>
      <P>{String.raw`Using $[AB,C]=A[B,C]+[A,C]B$, the canonical ladder commutator gives $[N,a]=-a$ and $[N,a^\dagger]=a^\dagger$. If a state is an N eigenstate with eigenvalue ν, then`}</P>
      <Equation>{String.raw`\hat N(\hat a|\nu\rangle)=(\nu-1)\hat a|\nu\rangle,\qquad\hat N(\hat a^\dagger|\nu\rangle)=(\nu+1)\hat a^\dagger|\nu\rangle.`}</Equation>
      <p>
        A lowered state is either an eigenstate one level lower or the zero
        vector. Raising produces a state one level higher. The energy step is
        always ℏω.
      </p>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 600 280"
          role="img"
          aria-labelledby="ladder-title ladder-desc"
        >
          <title id="ladder-title">
            Equally spaced oscillator energy levels
          </title>
          <desc id="ladder-desc">
            Four levels have energies one half, three halves, five halves, and
            seven halves hbar omega. Creation raises a level; annihilation
            lowers it. The ground state is annihilated.
          </desc>
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M160 225H420M160 165H420M160 105H420M160 45H420M450 158V112M442 124L450 112L458 124M130 112V158M122 146L130 158L138 146" />
          </g>
          <g fill="currentColor" fontSize="16">
            <text x="35" y="230">
              n = 0
            </text>
            <text x="35" y="170">
              n = 1
            </text>
            <text x="35" y="110">
              n = 2
            </text>
            <text x="35" y="50">
              n = 3
            </text>
            <text x="270" y="215">
              ℏω / 2
            </text>
            <text x="270" y="155">
              3ℏω / 2
            </text>
            <text x="270" y="95">
              5ℏω / 2
            </text>
            <text x="270" y="35">
              7ℏω / 2
            </text>
            <text x="470" y="142">
              a†
            </text>
            <text x="100" y="142">
              a
            </text>
            <text x="195" y="267">
              a |0⟩ = 0 · no lower state
            </text>
          </g>
        </svg>
        <figcaption>
          The energy spacing is constant. Ladder operators act on state vectors;
          the arrows do not represent a particle’s trajectory through space.
        </figcaption>
      </figure>
    </section>
  );
}
