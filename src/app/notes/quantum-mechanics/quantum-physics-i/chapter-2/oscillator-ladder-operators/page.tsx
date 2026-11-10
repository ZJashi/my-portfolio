import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import { LadderSection } from "./ladder-section";

export const metadata = {
  title:
    "The Oscillator Through Ladder Operators | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="2.6"
      title="The Oscillator Through Ladder Operators"
      description="Factor the oscillator Hamiltonian, derive the energy spectrum algebraically, and construct normalized excited states."
      sections={[
        ["factor", "Factor the Hamiltonian"],
        ["ladder", "Raise & lower energy"],
        ["spectrum", "Derive the spectrum"],
        ["wavefunctions", "Build wavefunctions"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`The Gaussian and Hermite-polynomial solutions already revealed the oscillator spectrum. There is another route that exposes why the levels are equally spaced. Combine position and momentum into dimensionless operators that lower or raise energy by exactly one quantum. Their algebra replaces a long differential-equation calculation with a short argument about norms.`}</P>
      <section id="factor" className={styles.section}>
        <h2>Combine position and momentum into one operator.</h2>
        <P>{String.raw`Take the one-dimensional oscillator with positive mass m and frequency $\omega$, canonical commutator $[\hat x,\hat p]=i\hbar$, and $\ell=\sqrt{\hbar/(m\omega)}$. Define`}</P>
        <NoteBox kind="definition" title="Annihilation and creation operators">
          <Equation>{String.raw`\hat a=\frac1{\sqrt2}\left(\frac{\hat x}{\ell}+i\frac{\ell\hat p}{\hbar}\right),\qquad\hat a^\dagger=\frac1{\sqrt2}\left(\frac{\hat x}{\ell}-i\frac{\ell\hat p}{\hbar}\right).`}</Equation>
          <p>
            Both operators are dimensionless. The dagger denotes the adjoint,
            not an independent observable; neither ladder operator is
            self-adjoint.
          </p>
        </NoteBox>
        <P>{String.raw`Expand their product without interchanging x and p. The cross terms are a commutator, so they contribute a constant rather than cancelling:`}</P>
        <Equation>{String.raw`\hat a^\dagger\hat a=\frac12\left(\frac{\hat x^2}{\ell^2}+\frac{\ell^2\hat p^2}{\hbar^2}+\frac{i}{\hbar}[\hat x,\hat p]\right)=\frac{\hat H}{\hbar\omega}-\frac12.`}</Equation>
        <NoteBox
          kind="result"
          title="Number operator and oscillator Hamiltonian"
        >
          <Equation>{String.raw`[\hat a,\hat a^\dagger]=1,\qquad\hat N=\hat a^\dagger\hat a,\qquad\hat H=\hbar\omega\left(\hat N+\frac12\right).`}</Equation>
          <p>
            The number operator counts{" "}
            <strong>oscillator excitation quanta</strong>. For a single particle
            in a harmonic potential, it does not count how many particles are
            present.
          </p>
        </NoteBox>
        <P>{String.raw`For a normalized state in the required operator domains, $\langle N\rangle=\|a\psi\|^2\ge0$. Hence the oscillator energy cannot fall below $\hbar\omega/2$. This lower bound follows directly from positivity, before finding a wavefunction.`}</P>
      </section>
      <LadderSection />
      <section id="spectrum" className={styles.section}>
        <h2>Positivity forces the ladder to end at zero.</h2>
        <P>{String.raw`If ν were positive but noninteger, repeated lowering would eventually produce a nonzero state with negative number eigenvalue. That contradicts $N=a^\dagger a\ge0$. The descent must stop at a state annihilated by a, whose number eigenvalue is zero. The allowed labels are therefore the nonnegative integers.`}</P>
        <NoteBox
          kind="law"
          title="Oscillator spectrum and normalized ladder actions"
        >
          <Equation>{String.raw`E_n=\hbar\omega\left(n+\frac12\right),\qquad\hat a|n\rangle=\sqrt n\,|n-1\rangle,\qquad\hat a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle.`}</Equation>
          <Equation>{String.raw`|n\rangle=\frac{(\hat a^\dagger)^n}{\sqrt{n!}}|0\rangle,\qquad n=0,1,2,\ldots`}</Equation>
          <p>
            State phases are chosen so the ladder coefficients are positive. The
            ground state satisfies a|0⟩ = 0. These statements use the usual
            oscillator Hilbert space and common domains for the operator
            manipulations.
          </p>
        </NoteBox>
        <P>{String.raw`The square roots follow from norms: $\|a|n\rangle\|^2=\langle n|N|n\rangle=n$, while $\|a^\dagger|n\rangle\|^2=n+1$. Without those factors, repeated creation would not preserve normalization.`}</P>
        <div className={styles.workedExample}>
          <h3>Worked example · Order changes the result</h3>
          <Equation>{String.raw`\hat a\hat a^\dagger|2\rangle=3|2\rangle,\qquad\hat a^\dagger\hat a|2\rangle=2|2\rangle.`}</Equation>
          <p>
            The difference is precisely the action of the identity. Reordering
            operators as ordinary numbers would erase the quantum correction
            that produces the zero-point term.
          </p>
        </div>
      </section>
      <section id="wavefunctions" className={styles.section}>
        <h2>Recover the Gaussian and build its excitations.</h2>
        <P>{String.raw`In the position representation, $\hat p=-i\hbar\partial_x$, so $a=(x/\ell+\ell\partial_x)/\sqrt2$. The equation $a\phi_0=0$ becomes a first-order equation:`}</P>
        <Equation>{String.raw`\phi_0'=-\frac{x}{\ell^2}\phi_0\quad\Rightarrow\quad\phi_0(x)=\frac1{\pi^{1/4}\sqrt\ell}e^{-x^2/(2\ell^2)}.`}</Equation>
        <P>{String.raw`The creation operator has the opposite derivative sign. Apply it once to the normalized Gaussian to obtain $\phi_1=\sqrt2(x/\ell)\phi_0$. Apply it again and divide by $\sqrt2$ to obtain`}</P>
        <Equation>{String.raw`\phi_2(x)=\frac1{\sqrt2}\left(2\frac{x^2}{\ell^2}-1\right)\phi_0(x).`}</Equation>
        <p>
          The polynomial degree and the number of internal nodes increase
          together. Creation alternates parity, producing even, odd, even states
          in sequence. This recovers the earlier differential-equation results
          while fixing the normalization at each step.
        </p>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Keep the order and the square roots.</h2>
        <div className={styles.exercise}>
          <h3>1. Lower twice</h3>
          <p>Evaluate a²|3⟩. Is the resulting vector normalized?</p>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\hat a^2|3\rangle=\sqrt3\sqrt2\,|1\rangle=\sqrt6\,|1\rangle.`}</Equation>
            <p>
              Its squared norm is six. Divide by √6 to obtain a normalized
              state.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Raise the ground state twice</h3>
          <p>Why is (a†)²|0⟩ not already |2⟩?</p>
          <details>
            <summary>Show reasoning</summary>
            <P>{String.raw`The first step contributes $\sqrt1$ and the second $\sqrt2$. Thus $(a^\dagger)^2|0\rangle=\sqrt2|2\rangle$. The factorial normalization compensates for the product of these coefficients.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Mean energy in a superposition</h3>
          <P>{String.raw`For $|\psi\rangle=(|0\rangle+\sqrt3|2\rangle)/2$, find $\langle N\rangle$ and $\langle H\rangle$.`}</P>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\langle N\rangle=\frac14(0)+\frac34(2)=\frac32,\qquad\langle H\rangle=2\hbar\omega.`}</Equation>
            <p>
              The mean energy lies between two allowed energies; it need not
              itself be an eigenvalue.
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
