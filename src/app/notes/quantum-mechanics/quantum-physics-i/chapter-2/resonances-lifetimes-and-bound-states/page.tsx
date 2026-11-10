import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import ResonanceLab from "@/components/notes/ResonanceLab";
export const metadata = {
  title:
    "Resonances, Lifetimes & Bound-State Counting | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="2.11"
      title="Resonances, Lifetimes & Bound-State Counting"
      description="Relate a resonance’s phase and width to packet delay and decay, distinguish scattering poles from bound states, and introduce parity-resolved Levinson counting."
      sections={[
        ["resonance", "Isolated resonances"],
        ["lifetime", "Width & lifetime"],
        ["lab", "Resonance lab"],
        ["poles", "Bound and resonance poles"],
        ["levinson", "Counting bound states"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`A transmission peak is a statement about real incident energies. A quasibound resonance also has a dynamical interpretation: probability can build up in a region and leak out over time. We will use an explicit isolated-resonance model to connect line shape, phase delay, and decay, then distinguish these metastable states from genuine bound states.`}</P>
      <section id="resonance" className={styles.section}>
        <h2>A simple pole produces a Lorentzian transmission peak.</h2>
        <NoteBox
          kind="definition"
          title="Isolated symmetric transmission resonance"
        >
          <Equation>{String.raw`t(E)\approx\frac{i\Gamma/2}{E-E_r+i\Gamma/2},\qquad\Gamma>0.`}</Equation>
          <p>
            This local model has a <strong>unit transmission peak</strong>, a
            symmetric coupling to the two exterior channels, and no additional
            background phase. It is not a universal amplitude for every
            potential or overlapping resonance.
          </p>
        </NoteBox>
        <P>{String.raw`Set $\Delta=E-E_r$ and $\gamma=\Gamma/2$. Squaring the amplitude gives $T=\gamma^2/(\Delta^2+\gamma^2)$. The peak is one at Δ = 0, and the half-maximum points occur at $\Delta=\pm\Gamma/2$. Thus Γ is the full width at half maximum in energy.`}</P>
        <NoteBox kind="result" title="Resonance phase and transmission delay">
          <Equation>{String.raw`T(E)=\frac{(\Gamma/2)^2}{(E-E_r)^2+(\Gamma/2)^2},\qquad\theta(E)=\arctan\!\left(\frac{E-E_r}{\Gamma/2}\right).`}</Equation>
          <Equation>{String.raw`\tau_t(E)=\hbar\frac{\Gamma/2}{(E-E_r)^2+(\Gamma/2)^2},\qquad\tau_t(E_r)=\frac{2\hbar}{\Gamma}.`}</Equation>
          <p>
            The phase shown is continuous through the resonance. A background
            phase adds its own derivative. Narrow-packet interpretation requires
            incident bandwidth small compared with the scale over which the
            amplitude changes.
          </p>
        </NoteBox>
      </section>
      <section id="lifetime" className={styles.section}>
        <h2>Complex energy describes an intermediate exponential decay.</h2>
        <P>{String.raw`The amplitude model has a pole at $E_p=E_r-i\Gamma/2$. Its associated time factor separates into oscillation and decay:`}</P>
        <Equation>{String.raw`e^{-iE_pt/\hbar}=e^{-iE_rt/\hbar}e^{-\Gamma t/(2\hbar)}.`}</Equation>
        <NoteBox kind="result" title="Probability decay lifetime">
          <Equation>{String.raw`P_{\mathrm{surv}}(t)\propto e^{-\Gamma t/\hbar},\qquad\tau_{\mathrm{life}}=\frac\hbar\Gamma.`}</Equation>
          <p>
            The amplitude decays twice as slowly in its exponent as the
            probability. The resonant transmission phase delay equals{" "}
            <strong>twice this lifetime in the specified model</strong>; the two
            quantities should not be equated in general.
          </p>
        </NoteBox>
        <P>{String.raw`For a narrow resonance, exponential decay often describes an intermediate-time regime. A true self-adjoint Hamiltonian still has real spectral energies. The complex pole belongs to an analytic continuation and outgoing-wave description, not a normalizable eigenstate with a complex energy in the ordinary Hilbert space. Very early and late survival behavior can depart from a single exponential.`}</P>
        <div className={styles.workedExample}>
          <h3>Worked example · A 0.020 eV width</h3>
          <Equation>{String.raw`\Gamma=0.020\,\mathrm{eV}\quad\Rightarrow\quad\tau_{\mathrm{life}}\approx32.9\,\mathrm{fs},\qquad\tau_t(E_r)\approx65.8\,\mathrm{fs}.`}</Equation>
          <p>
            Halving the width doubles both times in this isolated model. It also
            narrows the incident energy range for which a simple undistorted
            peak-delay approximation is accurate.
          </p>
        </div>
      </section>
      <section id="lab" className={styles.section}>
        <h2>Compare phase slope with the energy width.</h2>
        <ResonanceLab />
        <p>
          A narrow peak has a steep phase slope and a large delay near its
          center. At fixed nonzero detuning, narrowing the peak can instead
          reduce the transmission and delay. Always specify the energy at which
          the comparison is made.
        </p>
      </section>
      <section id="poles" className={styles.section}>
        <h2>Bound states decay in space; resonances leak outward.</h2>
        <P>{String.raw`For free exterior regions, $E=\hbar^2k^2/(2m)$. A bound-state pole occurs at $k=i\kappa$ with positive κ, giving negative real energy and decaying exterior wavefunctions. A resonance pole typically lies below the real k axis on the outgoing continuation, producing a complex energy with negative imaginary part.`}</P>
        <NoteBox
          kind="definition"
          title="Bound versus metastable resonance states"
        >
          <ul>
            <li>
              <strong>Bound state:</strong> square-normalizable spatial state,
              real energy below the exterior threshold, and no outgoing decay
              flux.
            </li>
            <li>
              <strong>Resonance:</strong> outgoing-wave pole describing
              temporary trapping and leakage; its spatial pole solution is not
              an ordinary normalizable bound state.
            </li>
            <li>
              <strong>Real-energy peak:</strong> an experimentally accessible
              scattering feature; not every peak alone establishes a long-lived
              isolated resonance.
            </li>
          </ul>
        </NoteBox>
        <div className={styles.workedExample}>
          <h3>Worked example · The attractive delta pole</h3>
          <P>{String.raw`For $V(x)=-g\delta(x)$ with $g>0$, write $\alpha=mg/\hbar^2$. Matching gives`}</P>
          <Equation>{String.raw`t(k)=\frac{k}{k-i\alpha}.`}</Equation>
          <P>{String.raw`The pole at $k=i\alpha$ reproduces the bound energy $E=-\hbar^2\alpha^2/(2m)$. This is a true bound-state pole, not a positive-energy decaying resonance. For the repulsive sign, the pole moves to $k=-i\alpha$; it is a virtual-state pole rather than a normalizable bound state.`}</P>
        </div>
      </section>
      <section id="levinson" className={styles.section}>
        <h2>Low-energy phases retain information about bound states.</h2>
        <P>{String.raw`For real, reflection-symmetric, sufficiently short-range regular potentials on the full line, use the previous lesson’s even cosine and odd sine phase conventions. Unwrap the phases continuously and fix their high-energy limits to zero. In the generic case with no zero-energy half-bound state, the one-dimensional parity form is`}</P>
        <NoteBox
          kind="law"
          title="Levinson counting · Generic full-line parity channels"
        >
          <Equation>{String.raw`\delta_e(0)-\delta_e(\infty)=\left(N_e-\frac12\right)\pi,\qquad\delta_o(0)-\delta_o(\infty)=N_o\pi.`}</Equation>
          <p>
            N<sub>e</sub> and N<sub>o</sub> count square-normalizable even and
            odd bound states. The half-unit offset in the even channel is part
            of the <strong>one-dimensional convention</strong>; a
            three-dimensional formula cannot simply be copied here.
          </p>
        </NoteBox>
        <P>{String.raw`A zero-energy half-bound state is a bounded threshold solution that fails square-normalizability. It changes the threshold correction in its parity channel, so the generic formula above must not be used there. The free constant even solution is one familiar exceptional threshold case.`}</P>
        <p>
          This statement concerns an unwrapped phase excursion, not the
          principal value of a phase at one energy. Short-range hypotheses and
          threshold qualifications matter. A derivation and the critical-case
          corrections are given in{" "}
          <a href="https://arxiv.org/abs/quant-ph/9903016">
            Dong and Ma’s one-dimensional Levinson theorem analysis
          </a>
          .
        </p>
        <div className={styles.workedExample}>
          <h3>Worked example · Read a generic phase excursion</h3>
          <P>{String.raw`If $\delta_e(0)=3\pi/2$, $\delta_o(0)=\pi$, and both high-energy phases tend to zero, the generic formulas give $N_e=2$ and $N_o=1$. There are three bound states in total. Reducing $3\pi/2$ modulo π would erase the information required for this count.`}</P>
        </div>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Keep phase delay, lifetime, and bound-state count distinct.</h2>
        <div className={styles.exercise}>
          <h3>1. Width from a lifetime</h3>
          <P>{String.raw`A narrow resonance has probability decay lifetime $10.0\,\mathrm{fs}$. Estimate Γ.`}</P>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\Gamma=\frac\hbar{\tau}\approx\frac{0.6582\,\mathrm{eV\,fs}}{10.0\,\mathrm{fs}}=0.0658\,\mathrm{eV}.`}</Equation>
            <p>
              For the local unit-peak model, its on-resonance transmission phase
              delay is 20.0 fs.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Half maximum</h3>
          <p>
            At detuning E − Eᵣ = Γ/2, what are T and the transmission phase
            delay relative to their on-resonance values?
          </p>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`Both have fallen to half their peak values: $T=1/2$ and $\tau_t=\hbar/\Gamma$. This equality to the decay lifetime at this detuning is a feature of the specified model.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Count generic parity states</h3>
          <P>{String.raw`For a regular symmetric short-range potential without threshold half-bound states, take $\delta_e(0)=\pi/2$ and $\delta_o(0)=0$, with high-energy phases zero. How many bound states are indicated?`}</P>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`The even formula gives $N_e=1$ and the odd formula gives $N_o=0$. There is one bound state. The conclusion depends on the stated absence of a threshold exception and on the unwrapped phase convention.`}</P>
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
