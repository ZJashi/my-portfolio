import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export const metadata = {
  title:
    "Oscillator Observables & Coherent States | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="2.7"
      title="Oscillator Observables & Coherent States"
      description="Use ladder operators to compute matrix elements, selection rules, quantum spreads, and the classical-looking motion of a coherent packet."
      sections={[
        ["matrix", "Matrix elements"],
        ["spread", "Energy-state spreads"],
        ["time", "Time evolution"],
        ["coherent", "Coherent states"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`The ladder algebra provides more than an energy spectrum. It turns position and momentum into sparse matrices, makes expectation values quick to calculate, and explains why some transitions are forbidden for a chosen perturbation. It also identifies a special family of Gaussian packets whose centers follow classical harmonic motion.`}</P>
      <section id="matrix" className={styles.section}>
        <h2>Position and momentum connect neighboring levels.</h2>
        <P>{String.raw`Add and subtract the definitions of a and its adjoint to recover the observable operators:`}</P>
        <NoteBox kind="result" title="Position and momentum in ladder form">
          <Equation>{String.raw`\hat x=\frac\ell{\sqrt2}(\hat a+\hat a^\dagger),\qquad\hat p=\frac{i\hbar}{\sqrt2\ell}(\hat a^\dagger-\hat a).`}</Equation>
          <p>
            Here ℓ = √(ℏ/mω). The factors give position units of length and
            momentum units of momentum; the ladder operators themselves are
            dimensionless.
          </p>
        </NoteBox>
        <P>{String.raw`Act on |n⟩ and take its overlap with |m⟩. Orthogonality removes every term except the neighboring levels.`}</P>
        <NoteBox kind="result" title="Position matrix elements">
          <Equation>{String.raw`\langle m|\hat x|n\rangle=\frac\ell{\sqrt2}\left(\sqrt n\,\delta_{m,n-1}+\sqrt{n+1}\,\delta_{m,n+1}\right).`}</Equation>
          <p>
            A perturbation <strong>linear in position</strong> has a first-order
            transition matrix element only when Δn = ±1. This is a selection
            rule for that operator, not for every possible interaction.
          </p>
        </NoteBox>
        <div className={styles.workedExample}>
          <h3>Worked example · Linear versus quadratic coupling</h3>
          <Equation>{String.raw`\langle1|x|0\rangle=\frac\ell{\sqrt2},\qquad\langle2|x|0\rangle=0,\qquad\langle2|x^2|0\rangle=\frac{\ell^2}{\sqrt2}.`}</Equation>
          <P>{String.raw`For $x^2$, the terms $a^2$, $(a^\dagger)^2$, $aa^\dagger$, and $a^\dagger a$ allow Δn = 0 or ±2. A coupling forbidden for one operator can be permitted for another. Actual transition probabilities also require the perturbation’s strength and time dependence.`}</P>
        </div>
      </section>
      <section id="spread" className={styles.section}>
        <h2>Energy eigenstates have zero mean position but nonzero width.</h2>
        <P>{String.raw`In |n⟩, neither a nor its adjoint returns a component in the original state, so $\langle x\rangle=\langle p\rangle=0$. On squaring the operators, terms that change n by two vanish in diagonal expectations. The remaining products give n and n + 1.`}</P>
        <NoteBox
          kind="result"
          title="Position and momentum spreads in an energy eigenstate"
        >
          <Equation>{String.raw`(\Delta x)^2=\ell^2\left(n+\frac12\right),\qquad(\Delta p)^2=\frac{\hbar^2}{\ell^2}\left(n+\frac12\right).`}</Equation>
          <Equation>{String.raw`\Delta x\,\Delta p=\hbar\left(n+\frac12\right),\qquad\langle T\rangle=\langle V\rangle=\frac12E_n.`}</Equation>
          <p>
            Only the ground energy eigenstate saturates the simple
            position–momentum uncertainty bound. Higher energy eigenstates are
            stationary, but they have larger quantum spreads.
          </p>
        </NoteBox>
        <p>
          The positive mean kinetic energy arises from momentum variance, even
          when mean momentum is zero. A stationary probability distribution does
          not imply that both observables are sharp.
        </p>
      </section>
      <section id="time" className={styles.section}>
        <h2>Adjacent-level coherence produces oscillating averages.</h2>
        <P>{String.raw`Prepare $(|0\rangle+|1\rangle)/\sqrt2$ at time zero. Its two energy phases separate at angular frequency ω. The only nonzero contribution to $\langle a\rangle$ comes from lowering the |1⟩ component into |0⟩, giving $\langle a\rangle_t=e^{-i\omega t}/2$.`}</P>
        <Equation>{String.raw`\langle x\rangle_t=\frac\ell{\sqrt2}\cos\omega t,\qquad\langle p\rangle_t=-\frac{\hbar}{\sqrt2\ell}\sin\omega t.`}</Equation>
        <P>{String.raw`These satisfy $d\langle x\rangle/dt=\langle p\rangle/m$ and $d\langle p\rangle/dt=-m\omega^2\langle x\rangle$, exactly as Ehrenfest’s theorem predicts. But the wavefunction is not a point moving on that mean trajectory. Its full density and higher moments contain information that the two means leave out.`}</P>
        <div className={styles.workedExample}>
          <h3>Worked example · A mean that stays at zero</h3>
          <P>{String.raw`An equal superposition of |0⟩ and |2⟩ has no adjacent-level coherence. Its mean position and momentum are zero for all time, yet its density generally changes because its energy components acquire different phases. A zero mean alone cannot diagnose a stationary state.`}</P>
        </div>
      </section>
      <section id="coherent" className={styles.section}>
        <h2>
          A coherent state keeps the ground-state width while its center moves.
        </h2>
        <NoteBox
          kind="definition"
          title="Coherent state · An annihilation-operator eigenstate"
        >
          <Equation>{String.raw`\hat a|\alpha\rangle=\alpha|\alpha\rangle,\qquad\alpha\in\mathbb C.`}</Equation>
          <p>
            This is an eigenstate of a non-self-adjoint operator. The complex
            label α specifies mean position and momentum; it is not an outcome
            of a projective measurement of a.
          </p>
        </NoteBox>
        <P>{String.raw`Expand $|\alpha\rangle=\sum_n c_n|n\rangle$ and apply a. Matching coefficients gives $c_{n+1}\sqrt{n+1}=\alpha c_n$. Thus $c_n=\alpha^nc_0/\sqrt{n!}$. The exponential series fixes the normalization:`}</P>
        <NoteBox
          kind="result"
          title="Number amplitudes and Poisson probabilities"
        >
          <Equation>{String.raw`|\alpha\rangle=e^{-|\alpha|^2/2}\sum_{n=0}^\infty\frac{\alpha^n}{\sqrt{n!}}|n\rangle,\qquad P(n)=e^{-|\alpha|^2}\frac{|\alpha|^{2n}}{n!}.`}</Equation>
          <Equation>{String.raw`\langle N\rangle=|\alpha|^2,\qquad(\Delta N)^2=|\alpha|^2,\qquad\langle H\rangle=\hbar\omega\left(|\alpha|^2+\frac12\right).`}</Equation>
          <p>
            The occupation probabilities are Poisson distributed. Except at α =
            0, a coherent state contains multiple energy levels and does not
            have a sharp energy.
          </p>
        </NoteBox>
        <P>{String.raw`Free oscillator evolution rotates the label: $\alpha(t)=\alpha e^{-i\omega t}$, apart from a common phase $e^{-i\omega t/2}$. Using the ladder expressions yields`}</P>
        <NoteBox
          kind="result"
          title="Coherent-state motion and fixed quantum widths"
        >
          <Equation>{String.raw`\langle x\rangle_t=\sqrt2\ell\,\operatorname{Re}(\alpha e^{-i\omega t}),\qquad\langle p\rangle_t=\frac{\sqrt2\hbar}{\ell}\operatorname{Im}(\alpha e^{-i\omega t}).`}</Equation>
          <Equation>{String.raw`\Delta x=\frac\ell{\sqrt2},\qquad\Delta p=\frac{\hbar}{\sqrt2\ell},\qquad\Delta x\Delta p=\frac\hbar2.`}</Equation>
          <p>
            The position density is a Gaussian centered at the moving mean, with
            constant width. This fixed-width motion is special to the harmonic
            potential and this family of states; a free Gaussian packet instead
            spreads.
          </p>
        </NoteBox>
        <div className={styles.workedExample}>
          <h3>Worked example · A real coherent label α = 2</h3>
          <P>{String.raw`At time zero, $\langle x\rangle=2\sqrt2\ell$ and $\langle p\rangle=0$. The mean excitation number is four, the mean energy is $4.5\hbar\omega$, and $P(0)=e^{-4}\approx0.0183$. The state has a nonzero chance of a ground-state energy outcome even though its mean position is displaced.`}</P>
        </div>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Distinguish a state’s motion from its energy distribution.</h2>
        <div className={styles.exercise}>
          <h3>1. An adjacent matrix element</h3>
          <p>Find ⟨3|x|2⟩ and ⟨4|x|2⟩.</p>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\langle3|x|2\rangle=\ell\sqrt{\frac32},\qquad\langle4|x|2\rangle=0.`}</Equation>
            <p>
              Position changes the number label by one step; it cannot connect
              levels separated by two in a single matrix element.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Third energy eigenstate</h3>
          <p>
            For n = 2, find the uncertainty product and mean kinetic energy.
          </p>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\Delta x\Delta p=\frac52\hbar,\qquad\langle T\rangle=\frac54\hbar\omega.`}</Equation>
            <p>
              The state is stationary but does not saturate the uncertainty
              bound.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. A purely imaginary coherent label</h3>
          <P>{String.raw`Take $\alpha=i$. What are the initial position and momentum means, and what is the mean energy?`}</P>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\langle x\rangle_0=0,\qquad\langle p\rangle_0=\frac{\sqrt2\hbar}{\ell},\qquad\langle H\rangle=\frac32\hbar\omega.`}</Equation>
            <p>
              The packet starts at the potential minimum with positive mean
              momentum. Its energy statistics remain Poisson distributed as the
              center oscillates.
            </p>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original derivations, explanations, and exercises. The oscillator
          algebra develops the topics of{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/lecture-notes/">
            Barton Zwiebach’s MIT 8.04 lecture-note sets 14–15
          </a>
          , Spring 2016. The coherent-state application is an additional
          notebook extension. Lesson numbering is local.
        </p>
      </div>
    </QuantumLesson>
  );
}
