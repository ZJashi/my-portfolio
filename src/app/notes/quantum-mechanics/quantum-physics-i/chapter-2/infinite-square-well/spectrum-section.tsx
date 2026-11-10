import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function SpectrumSection() {
  return (
    <section id="spectrum" className={styles.section}>
      <h2>Only whole numbers of half-wavelengths fit.</h2>
      <NoteBox
        kind="result"
        title="Normalized eigenstates and allowed energies"
      >
        <Equation>{String.raw`\phi_n(x)=\sqrt{\frac2L}\sin\!\left(\frac{n\pi x}{L}\right),\qquad E_n=\frac{n^2\pi^2\hbar^2}{2mL^2},\qquad n=1,2,3,\ldots`}</Equation>
        <p>
          The wavefunction is zero outside the well. Each energy is{" "}
          <strong>nondegenerate</strong> for this one-dimensional spinless
          model. The ground state has positive energy E₁.
        </p>
      </NoteBox>
      <P>{String.raw`Normalization follows from $\int_0^L\sin^2(n\pi x/L)dx=L/2$. Different n give orthogonal functions. The n-th state has n − 1 internal nodes, and its energy grows as $n^2$. Positive and negative n do not create a new pair of states here: changing the sine’s sign only adds a global phase.`}</P>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 600 270"
          role="img"
          aria-labelledby="box-modes-title box-modes-desc"
        >
          <title id="box-modes-title">
            First three hard-wall eigenfunctions
          </title>
          <desc id="box-modes-desc">
            Three sine waves between zero and L show zero, one, and two internal
            nodes. Each row has its own zero baseline and the same arbitrary
            display amplitude.
          </desc>
          <g fill="none" stroke="currentColor">
            <path d="M90 25V240M530 25V240" strokeWidth="2" />
            {[1, 2, 3].map((n) => (
              <g key={n}>
                <path d={`M90 ${n * 70}H530`} opacity=".25" />
                <path
                  d={Array.from(
                    { length: 161 },
                    (_, i) =>
                      `${i ? "L" : "M"}${90 + (440 * i) / 160},${n * 70 - 24 * Math.sin((n * Math.PI * i) / 160)}`,
                  ).join(" ")}
                  strokeWidth="2"
                />
                <text
                  x="30"
                  y={n * 70 + 5}
                  fill="currentColor"
                  stroke="none"
                  fontSize="16"
                >
                  n={n}
                </text>
              </g>
            ))}
          </g>
          <g fill="currentColor" fontSize="16">
            <text x="85" y="263">
              0
            </text>
            <text x="525" y="263">
              L
            </text>
          </g>
        </svg>
        <figcaption>
          Real eigenfunction amplitudes, vertically offset for clarity. These
          rows are not an energy-level diagram: the energies are in the ratio 1
          : 4 : 9.
        </figcaption>
      </figure>
      <div className={styles.workedExample}>
        <h3>Worked example · An electron in a 1 nm box</h3>
        <P>{String.raw`With $L=1.00\,\mathrm{nm}$ and the bare electron mass,`}</P>
        <Equation>{String.raw`E_1\approx0.376\,\mathrm{eV},\qquad E_2\approx1.504\,\mathrm{eV},\qquad E_2-E_1\approx1.128\,\mathrm{eV}.`}</Equation>
        <p>
          Doubling the width divides every energy by four. These are ideal
          confinement energies, not a complete description of an electron in a
          real material.
        </p>
      </div>
    </section>
  );
}
