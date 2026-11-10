import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";

export const metadata = {
  title:
    "Scattering Phase Shifts & Time Delay | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="2.10"
      title="Scattering Phase Shifts & Time Delay"
      description="Follow the phase of a scattered packet, derive its peak shift, and separate transmission delays from parity-channel phase conventions."
      sections={[
        ["phase", "What probability leaves out"],
        ["packet", "Stationary-phase delay"],
        ["step", "Reflection at a step"],
        ["parity", "Parity channels"],
        ["limits", "Interpreting delays"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`Transmission and reflection probabilities specify how much of an incoming packet reaches each side. They do not specify its phase or when its peak arrives. Two scatterers can have the same transmission magnitude near one energy but different phase slopes, producing different packet shifts. We now make that statement quantitative and fix the reference used to define a delay.`}</P>
      <section id="phase" className={styles.section}>
        <h2>A scattering amplitude contains more than its magnitude.</h2>
        <NoteBox
          kind="definition"
          title="Transmission phase relative to free propagation"
        >
          <Equation>{String.raw`\phi(x)=\begin{cases}e^{ikx}+r(k)e^{-ikx},&x\text{ far left},\\t(k)e^{ikx},&x\text{ far right},\end{cases}\qquad t(k)=|t(k)|e^{i\theta(k)}.`}</Equation>
          <p>
            Here the exterior potential is zero on both sides and the same
            coordinate is used throughout. With no scatterer,{" "}
            <strong>t = 1</strong> and θ = 0. This choice includes the full
            free-propagation phase in e<sup>ikx</sup>.
          </p>
        </NoteBox>
        <P>{String.raw`Choose a continuous phase branch near the packet’s central momentum. A principal-value argument can jump by $2\pi$ even when the physical amplitude is smooth. Differentiating that artificial jump would create a false delay. At a zero of t, its phase is undefined and the narrow transmitted-peak approximation needs special care.`}</P>
      </section>
      <section id="packet" className={styles.section}>
        <h2>The derivative of phase shifts the packet peak.</h2>
        <P>{String.raw`Take a narrow incoming packet centered at positive $k_0$, with an envelope chosen to have no initial phase slope. Far to the right, its transmitted component is built from $a(k)|t(k)|e^{i[kx-\omega(k)t+\theta(k)]}$. For free exterior motion, $\omega=\hbar k^2/(2m)$.`}</P>
        <P>{String.raw`When the amplitude factors vary slowly across the occupied band, the main contribution lies near stationary phase. Differentiate the phase with respect to k:`}</P>
        <Equation>{String.raw`x-\frac{d\omega}{dk}t+\frac{d\theta}{dk}=0\quad\Rightarrow\quad t\approx\frac{x}{v_g}+\frac1{v_g}\frac{d\theta}{dk}.`}</Equation>
        <NoteBox
          kind="result"
          title="Transmission phase delay · Narrowband packet"
        >
          <Equation>{String.raw`\tau_t=\frac1{v_g}\frac{d\theta}{dk}=\hbar\frac{d\theta}{dE},\qquad v_g=\frac{\hbar k}{m}.`}</Equation>
          <p>
            Compare with the <strong>same free path</strong> and initial packet.
            The relation describes a transmitted peak shift when phase
            linearization and negligible amplitude filtering are justified.
          </p>
        </NoteBox>
        <div className={styles.workedExample}>
          <h3>Worked example · A measured phase slope</h3>
          <P>{String.raw`If the continuous transmission phase changes locally at $d\theta/dE=2.00\,\mathrm{eV^{-1}}$, then using $\hbar\approx0.6582\,\mathrm{eV\,fs}$ gives`}</P>
          <Equation>{String.raw`\tau_t\approx1.316\,\mathrm{fs}.`}</Equation>
          <p>
            A constant phase offset produces no delay. It is the energy
            dependence, not the phase value alone, that matters.
          </p>
        </div>
      </section>
      <section id="step" className={styles.section}>
        <h2>Total reflection can still have an energy-dependent phase.</h2>
        <P>{String.raw`Return to the upward step at x = 0 with $0<E<V_0$. Its reflection amplitude is $r=(k-i\kappa)/(k+i\kappa)$, where $k=\sqrt{2mE}/\hbar$ and $\kappa=\sqrt{2m(V_0-E)}/\hbar$. Its magnitude is one, but its phase varies with energy.`}</P>
        <Equation>{String.raw`\theta_r(E)=-2\arctan\!\left(\frac\kappa k\right)=-2\arccos\sqrt{\frac E{V_0}}.`}</Equation>
        <NoteBox kind="result" title="Subthreshold step reflection delay">
          <Equation>{String.raw`\tau_r=\hbar\frac{d\theta_r}{dE}=\frac{\hbar}{\sqrt{E(V_0-E)}}=\frac{2}{\kappa v},\qquad v=\frac{\hbar k}{m}.`}</Equation>
          <p>
            The reference is instantaneous reflection at x = 0 with an
            energy-independent reflection phase. The packet must be sufficiently
            narrow and remain below threshold.
          </p>
        </NoteBox>
        <P>{String.raw`At E = V₀/2, the delay is $2\hbar/V_0$. With $V_0=2.00\,\mathrm{eV}$ this is about $0.658\,\mathrm{fs}$. Writing it as $2/(\kappa v)$ resembles a round trip over a penetration length, but it is derived from a wave phase, not from a measured trajectory inside the forbidden region.`}</P>
        <p>
          The expression diverges near either endpoint of the subthreshold
          interval. A packet of fixed nonzero bandwidth then ceases to satisfy
          the narrowband assumptions; a divergent central-energy formula is not
          by itself a prediction of a well-defined infinitely late packet peak.
        </p>
      </section>
      <section id="parity" className={styles.section}>
        <h2>A symmetric potential has two independent phase channels.</h2>
        <P>{String.raw`For a real, short-range potential symmetric about zero, use even and odd scattering solutions. Outside the interaction on x > 0, write them as $\cos(kx+\delta_e)$ and $\sin(kx+\delta_o)$, up to real amplitudes. Our free reference has both phase shifts zero.`}</P>
        <NoteBox
          kind="result"
          title="Parity phase shifts and left-incidence amplitudes"
        >
          <Equation>{String.raw`S_e=e^{2i\delta_e},\qquad S_o=e^{2i\delta_o},\qquad t=\frac{S_e+S_o}{2},\qquad r=\frac{S_e-S_o}{2}.`}</Equation>
          <Equation>{String.raw`T=\cos^2(\delta_e-\delta_o),\qquad R=\sin^2(\delta_e-\delta_o).`}</Equation>
          <p>
            These are <strong>free-referenced parity eigenvalues</strong>; the
            odd-channel sign depends on how incoming and outgoing channel
            amplitudes are ordered. The equations above fix our convention.
          </p>
        </NoteBox>
        <P>{String.raw`The parity-channel phase delay uses the phase of S, not δ alone. Thus $\tau_e=2\hbar\,d\delta_e/dE$ and similarly for the odd channel. By contrast, transmission uses $\hbar\,d\arg t/dE$. The factor of two is a convention issue that disappears once the actual complex amplitude being differentiated is specified.`}</P>
      </section>
      <section id="limits" className={styles.section}>
        <h2>A peak delay is not a universal traversal time.</h2>
        <ul className={styles.takeaways}>
          <li>
            <strong>Reference matters:</strong> compare phases using the same
            reference planes and free travel distance.
          </li>
          <li>
            <strong>Bandwidth matters:</strong> rapid variation of the amplitude
            or phase can reshape and split a packet rather than simply
            translating it.
          </li>
          <li>
            <strong>Channel matters:</strong> transmitted, reflected, and
            parity-channel delays use different amplitudes.
          </li>
          <li>
            <strong>Negative values need interpretation:</strong> peak
            advancement can result from interference and filtering; it is not
            evidence of a superluminal signal.
          </li>
        </ul>
        <p>
          The Schrödinger model is nonrelativistic. A statement about the speed
          of information requires a physical signal model and cannot be inferred
          solely from a stationary-phase peak formula.
        </p>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Differentiate the right phase.</h2>
        <div className={styles.exercise}>
          <h3>1. A flat transmission phase</h3>
          <p>
            Suppose t has an energy-independent phase and slowly varying
            magnitude near a narrow packet’s energy. What phase delay is
            predicted?
          </p>
          <details>
            <summary>Show solution</summary>
            <p>
              Zero relative to the chosen free reference. This does not say the
              absolute arrival time is zero; the free propagation time is still
              present.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Eigenphase versus amplitude phase</h3>
          <P>{String.raw`If $S=e^{2i\delta}$ and $d\delta/dE=1.00\,\mathrm{eV^{-1}}$, find the eigenchannel phase delay.`}</P>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\tau=2\hbar\frac{d\delta}{dE}\approx1.316\,\mathrm{fs}.`}</Equation>
            <p>
              Differentiating δ without the factor of two would use the wrong
              phase for S.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Unwrap before differentiating</h3>
          <p>
            A plotted principal phase jumps from almost +π to almost −π. Must
            this represent an abrupt physical change in delay?
          </p>
          <details>
            <summary>Show reasoning</summary>
            <p>
              No. It may be the branch cut of the argument function. Follow a
              continuous phase locally before differentiating, and separately
              check whether the amplitude vanishes there.
            </p>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original explanations, calculations, and exercises developing the
          phase-delay and resonance topics of{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/lecture-notes/">
            Barton Zwiebach’s MIT 8.04 lecture-note sets 18–19
          </a>
          , Spring 2016. Numbering and the additional parity-channel examples
          are local to this notebook.
        </p>
      </div>
    </QuantumLesson>
  );
}
