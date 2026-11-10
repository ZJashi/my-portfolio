import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function RingSection() {
  return (
    <section id="ring" className={styles.section}>
      <h2>Closing a line into a ring quantizes momentum.</h2>
      <P>{String.raw`Consider a free particle constrained to a ring of circumference L. Let x be distance measured around the ring, with zero and L representing the same point. We use an ideal one-dimensional model with no magnetic flux and the periodic domain $\phi(L)=\phi(0)$, $\phi'(L)=\phi'(0)$.`}</P>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 600 245"
          role="img"
          aria-labelledby="ring-title ring-desc"
        >
          <title id="ring-title">Periodic boundary condition on a ring</title>
          <desc id="ring-desc">
            A circular path of circumference L is cut at one point to give an
            interval from zero to L. The two endpoints are the same physical
            point, so the wavefunction and its derivative match.
          </desc>
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="145" cy="112" r="72" />
            <circle cx="217" cy="112" r="5" />
            <path d="M145 40Q215 40 217 105M207 93L217 105L225 92M285 112H550M285 102V122M550 102V122" />
            <path
              d="M300 100Q415 15 535 100"
              strokeDasharray="5 5"
              opacity=".5"
            />
          </g>
          <g fill="currentColor" textAnchor="middle" fontSize="16">
            <text x="145" y="105">
              Circumference
            </text>
            <text x="145" y="129">
              L
            </text>
            <text x="145" y="215">
              One closed path
            </text>
            <text x="285" y="148">
              0
            </text>
            <text x="550" y="148">
              L
            </text>
            <text x="420" y="35">
              Identify endpoints
            </text>
            <text x="420" y="215">
              φ(0) = φ(L)
            </text>
          </g>
        </svg>
        <figcaption>
          Schematic geometry. The endpoints of the cut interval are identified,
          rather than being hard walls. In this model there is no flux-dependent
          phase twist.
        </figcaption>
      </figure>
      <P>{String.raw`Try a traveling mode $\phi=Ae^{ikx}$. Returning to the same point must return the same amplitude, so $e^{ikL}=1$. The phase can advance by any integer number of full turns: $kL=2\pi n$. Normalize over one circumference to get $|A|^2L=1$.`}</P>
      <NoteBox
        kind="result"
        title="Free particle on a ring · Spectrum and eigenfunctions"
      >
        <Equation>{String.raw`\phi_n(x)=\frac1{\sqrt L}e^{i2\pi nx/L},\quad p_n=\frac{2\pi\hbar n}{L},\quad E_n=\frac{2\pi^2\hbar^2n^2}{mL^2},\qquad n\in\mathbb Z.`}</Equation>
        <p>
          The integer can be positive, negative, or zero. The constant mode{" "}
          <strong>n = 0</strong> is allowed and has zero kinetic energy. The
          ring spectrum differs from that of a hard-wall interval.
        </p>
      </NoteBox>
      <div className={styles.workedExample}>
        <h3>Worked example · A nanometre-scale ring</h3>
        <P>{String.raw`For an electron with $L=10.0\,\mathrm{nm}$, using the bare electron mass, the energy of the $n=\pm1$ modes is`}</P>
        <Equation>{String.raw`E_1=\frac{2\pi^2\hbar^2}{m_eL^2}\approx1.50\times10^{-2}\,\mathrm{eV},\qquad E_{\pm2}=4E_1\approx6.02\times10^{-2}\,\mathrm{eV}.`}</Equation>
        <p>
          This is an ideal ring calculation. A real solid-state ring may require
          an effective mass, electromagnetic flux, and additional interactions.
        </p>
      </div>
    </section>
  );
}
