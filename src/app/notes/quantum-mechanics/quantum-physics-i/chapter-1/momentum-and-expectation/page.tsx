import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.module.css";

export const metadata = {
  title: "Momentum Space & Expectation Values | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="1.8"
      title="Momentum Space & Expectation Values"
      description="Transform a wavefunction into momentum space, calculate observable averages, and derive the motion of a packet’s center."
      sections={[
        ["fourier", "Momentum amplitudes"],
        ["operators", "Operators & means"],
        ["variance", "Variances & energy"],
        ["ehrenfest", "Ehrenfest’s theorem"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`The position wavefunction is one representation of a quantum state. Its Fourier transform describes the same preparation in momentum space. Switching representations lets us ask different measurement questions without inventing a second state. We will use that connection to calculate means, spreads, and the motion of expectation values.`}</P>
      <section id="fourier" className={styles.section}>
        <h2>Momentum amplitudes are Fourier coefficients.</h2>
        <NoteBox
          kind="definition"
          title="Position and momentum representations"
        >
          <Equation>{String.raw`\widetilde\psi(p)=\frac1{\sqrt{2\pi\hbar}}\int_{-\infty}^{\infty}e^{-ipx/\hbar}\psi(x)\,dx,\qquad \psi(x)=\frac1{\sqrt{2\pi\hbar}}\int_{-\infty}^{\infty}e^{ipx/\hbar}\widetilde\psi(p)\,dp.`}</Equation>
          <p>
            The factors define our <strong>Fourier convention</strong>. Both
            functions describe the same state at the same instant; time
            dependence is suppressed here.
          </p>
        </NoteBox>
        <P>{String.raw`In the earlier wave-number integral, the coefficient was a(k) with $p=\hbar k$. Changing variables gives $\widetilde\psi(p)=a(p/\hbar)/\sqrt\hbar$. This factor matters: amplitudes are densities with respect to different integration variables.`}</P>
        <NoteBox kind="result" title="Born rule in momentum space">
          <Equation>{String.raw`P(p_1\le p\le p_2)=\int_{p_1}^{p_2}|\widetilde\psi(p)|^2\,dp,\qquad \int|\widetilde\psi|^2\,dp=\int|\psi|^2\,dx=1.`}</Equation>
          <p>
            The momentum amplitude has units of inverse square root of momentum.
            Fourier transformation preserves normalization; it does not mean
            position and momentum outcomes are jointly assigned by these two
            distributions.
          </p>
        </NoteBox>
        <div className={styles.workedExample}>
          <h3>Worked example · Fourier transform of the Gaussian</h3>
          <P>{String.raw`For the Gaussian in lesson 1.7, the transform at time zero is`}</P>
          <Equation>{String.raw`\widetilde\psi(p,0)=\left(\frac{2\sigma_0^2}{\pi\hbar^2}\right)^{1/4}\exp\!\left[-\frac{\sigma_0^2(p-p_0)^2}{\hbar^2}-\frac{i(p-p_0)x_0}{\hbar}\right].`}</Equation>
          <P>{String.raw`The density is a Gaussian centered at $p_0$ with standard deviation $\hbar/(2\sigma_0)$. Shifting $x_0$ changes the momentum-space phase but not its density. In free evolution each momentum component gains $e^{-ip^2t/(2m\hbar)}$, so the momentum density remains fixed even when the position density spreads.`}</P>
        </div>
      </section>
      <section id="operators" className={styles.section}>
        <h2>The same mean can be computed in either representation.</h2>
        <P>{String.raw`In momentum space, the mean momentum is the familiar probability-weighted integral. Insert the Fourier representation into the position-space expression below and use that $-i\hbar\partial_x$ acting on $e^{ipx/\hbar}$ produces p times that wave. This identifies the momentum operator in the position representation.`}</P>
        <NoteBox kind="definition" title="Position and momentum operators">
          <Equation>{String.raw`\hat x\psi=x\psi,\qquad \hat p\psi=-i\hbar\frac{\partial\psi}{\partial x}.`}</Equation>
          <Equation>{String.raw`\langle p\rangle=\int p|\widetilde\psi(p)|^2\,dp=\int\psi^*(-i\hbar\partial_x)\psi\,dx.`}</Equation>
          <p>
            The differential expression comes with a{" "}
            <strong>domain and boundary conditions</strong>. Assuming those make
            the momentum operator self-adjoint, its expectation value is real.
          </p>
        </NoteBox>
        <NoteBox kind="result" title="Expectation value of an observable">
          <Equation>{String.raw`\langle A\rangle=\langle\psi|\hat A\psi\rangle=\int\psi^*(x)(\hat A\psi)(x)\,dx.`}</Equation>
          <p>
            The state is normalized and lies in the necessary operator domain.
            An expectation is an <strong>ensemble mean</strong>; a single
            measurement need not return that number.
          </p>
        </NoteBox>
        <P>{String.raw`For example, a momentum distribution symmetric about zero has zero mean momentum even if every typical result has a substantial magnitude. This is why a mean is not a substitute for the complete probability distribution. Operators encode a measurement’s possible values and how its probabilities depend on the state.`}</P>
      </section>
      <section id="variance" className={styles.section}>
        <h2>Zero mean momentum does not mean zero kinetic energy.</h2>
        <NoteBox
          kind="result"
          title="Variance separates mean motion from spread"
        >
          <Equation>{String.raw`(\Delta p)^2=\langle p^2\rangle-\langle p\rangle^2,\qquad \langle T\rangle=\frac{\langle p^2\rangle}{2m}=\frac{\langle p\rangle^2+(\Delta p)^2}{2m}.`}</Equation>
          <p>
            These relations require finite second moments. Replacing the mean of
            momentum squared by the square of mean momentum discards the energy
            associated with momentum spread.
          </p>
        </NoteBox>
        <P>{String.raw`In position space, $\hat p^2=-\hbar^2\partial_x^2$. With sufficient smoothness and vanishing boundary terms, integration by parts gives a manifestly nonnegative kinetic-energy expectation:`}</P>
        <Equation>{String.raw`\langle T\rangle=-\frac{\hbar^2}{2m}\int\psi^*\psi''\,dx=\frac{\hbar^2}{2m}\int|\psi'|^2\,dx\ge0.`}</Equation>
        <div className={styles.workedExample}>
          <h3>Worked example · Energy of localization</h3>
          <P>{String.raw`For the unchirped Gaussian, $\langle p\rangle=p_0$ and $\Delta p=\hbar/(2\sigma_0)$. Thus`}</P>
          <Equation>{String.raw`\langle T\rangle=\frac{p_0^2}{2m}+\frac{\hbar^2}{8m\sigma_0^2}.`}</Equation>
          <P>{String.raw`For an electron with $p_0=0$ and $\sigma_0=1.00\,\mathrm{nm}$, the mean kinetic energy is about $9.53\times10^{-3}\,\mathrm{eV}$. During free spreading it stays constant: the evolving position distribution does not require an external energy supply.`}</P>
        </div>
      </section>
      <section id="ehrenfest" className={styles.section}>
        <h2>Average motion follows an operator balance.</h2>
        <P>{String.raw`Differentiate $\langle\psi|\hat A\psi\rangle$ using the product rule, allowing the operator itself to depend on time. Substitute Schrödinger evolution for the ket and its conjugate for the bra. The Hamiltonian terms combine into a commutator.`}</P>
        <NoteBox kind="law" title="Time evolution of expectation values">
          <Equation>{String.raw`\frac{d\langle A\rangle}{dt}=\frac{i}{\hbar}\langle[\hat H,\hat A]\rangle+\left\langle\frac{\partial\hat A}{\partial t}\right\rangle.`}</Equation>
          <p>
            Assumes the state and operators have the regularity and common
            domains needed for differentiating the expectation and evaluating
            the commutator.
          </p>
        </NoteBox>
        <P>{String.raw`For $\hat H=\hat p^2/(2m)+V(\hat x)$ with a sufficiently regular real potential, use $[\hat x,\hat p]=i\hbar$. The commutators are $[\hat H,\hat x]=-i\hbar\hat p/m$ and $[\hat H,\hat p]=i\hbar V'(\hat x)$.`}</P>
        <NoteBox
          kind="result"
          title="Ehrenfest’s theorem · Position and momentum"
        >
          <Equation>{String.raw`\frac{d\langle x\rangle}{dt}=\frac{\langle p\rangle}{m},\qquad \frac{d\langle p\rangle}{dt}=-\langle V'(x)\rangle.`}</Equation>
          <p>
            The second equation contains the <strong>mean force</strong>, which
            need not equal the force evaluated at the mean position.
          </p>
        </NoteBox>
        <ul className={styles.takeaways}>
          <li>
            <strong>Free particle:</strong> mean momentum is constant and the
            mean position moves uniformly, even while the packet spreads.
          </li>
          <li>
            <strong>Harmonic potential:</strong> the force is linear, so the
            mean position obeys the classical oscillator equation exactly.
          </li>
          <li>
            <strong>Nonlinear force:</strong> the mean acceleration generally
            depends on the distribution’s width and higher moments.
          </li>
        </ul>
        <P>{String.raw`For example, $V(x)=\lambda x^4$ gives mean force $-4\lambda\langle x^3\rangle$, not generally $-4\lambda\langle x\rangle^3$. A narrow packet in a slowly varying force field can justify a classical approximation, but Ehrenfest’s theorem alone does not guarantee that every packet behaves like one classical point.`}</P>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Calculate the mean and the spread separately.</h2>
        <div className={styles.exercise}>
          <h3>1. Two opposite momentum outcomes</h3>
          <p>
            An idealized measurement distribution gives +q and −q with equal
            probabilities. Find mean momentum, momentum standard deviation, and
            mean kinetic energy.
          </p>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\langle p\rangle=0,\qquad\Delta p=|q|,\qquad\langle T\rangle=\frac{q^2}{2m}.`}</Equation>
            <p>
              This is a discrete measurement-distribution example. Exact
              momentum eigenstates on the infinite line are idealizations;
              narrow separated momentum packets approximate these statistics.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. A uniform force</h3>
          <P>{String.raw`For $V(x)=-Fx$ with F constant, find the time evolution of $\langle p\rangle$ and $\langle x\rangle$.`}</P>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\langle p\rangle_t=\langle p\rangle_0+Ft,\qquad\langle x\rangle_t=\langle x\rangle_0+\frac{\langle p\rangle_0}{m}t+\frac{F}{2m}t^2.`}</Equation>
            <p>
              These exact mean equations do not specify the packet’s width or
              imply a sharply defined trajectory.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Position shift in momentum space</h3>
          <P>{String.raw`If $\psi_a(x)=\psi(x-a)$, how does the momentum wavefunction change?`}</P>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`Substitute $y=x-a$ into the Fourier integral to obtain $\widetilde\psi_a(p)=e^{-ipa/\hbar}\widetilde\psi(p)$. The phase changes, while the momentum probability density remains the same.`}</P>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original explanations, calculations, and exercises. Topic sequence
          follows{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/lecture-notes/">
            Barton Zwiebach’s MIT 8.04 lecture notes, Spring 2016
          </a>
          , lecture-note sets 7–8. Lesson numbering is local to this notebook.
        </p>
      </div>
    </QuantumLesson>
  );
}
