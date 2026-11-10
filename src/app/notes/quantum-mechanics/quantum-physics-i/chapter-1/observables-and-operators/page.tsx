import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export const metadata = {
  title: "Observables & Hermitian Operators | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="1.9"
      title="Observables & Hermitian Operators"
      description="Connect measurement outcomes to eigenvalues, understand why observable averages are real, and derive the general uncertainty bound."
      sections={[
        ["observable", "Observables & spectra"],
        ["hermitian", "Hermitian operators"],
        ["measurement", "Measurement probabilities"],
        ["commutators", "Commutators & uncertainty"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`We have computed averages with position and momentum operators. We now ask what makes an operator an observable, how its eigenvalues determine measurement outcomes, and why the same state can be sharp for one observable but uncertain for another. A two-state example will make these rules concrete before we apply them to energy eigenfunctions.`}</P>
      <section id="observable" className={styles.section}>
        <h2>An observable has outcomes and probabilities.</h2>
        <NoteBox kind="definition" title="Observable · A self-adjoint operator">
          <P>{String.raw`A quantum observable is represented by a self-adjoint operator $\hat A$. An eigenstate obeys $\hat A|a\rangle=a|a\rangle$: acting with the operator scales that state by its eigenvalue a. The spectral values specify possible ideal measurement results.`}</P>
        </NoteBox>
        <P>{String.raw`For a finite-dimensional system, self-adjoint means that the matrix equals its conjugate transpose, also called its Hermitian adjoint. In position space, differential operators also require a domain: the allowed functions and their boundary conditions are part of the specification. A formally Hermitian differential expression alone is not enough to settle self-adjointness.`}</P>
        <NoteBox kind="result" title="Discrete spectral decomposition">
          <Equation>{String.raw`\hat A=\sum_a a\,\hat\Pi_a,\qquad \hat\Pi_a\hat\Pi_b=\delta_{ab}\hat\Pi_a,\qquad\sum_a\hat\Pi_a=\hat I.`}</Equation>
          <P>{String.raw`For a complete discrete spectrum, $\hat\Pi_a$ projects onto the eigenspace with eigenvalue a. One eigenspace can contain several independent states: this is degeneracy. Continuous spectra require spectral integrals rather than only discrete sums.`}</P>
        </NoteBox>
        <P>{String.raw`The average $\langle A\rangle$ need not itself be a possible outcome. If a measurement returns only +1 or −1 with equal probability, the average is zero, although no individual trial returns zero. Eigenvalues describe outcomes; expectation values summarize their probability distribution.`}</P>
      </section>
      <section id="hermitian" className={styles.section}>
        <h2>Hermiticity makes the spectrum real.</h2>
        <NoteBox kind="definition" title="Hermitian inner-product relation">
          <Equation>{String.raw`\langle\phi|\hat A\psi\rangle=\langle\hat A\phi|\psi\rangle.`}</Equation>
          <p>
            For a self-adjoint operator this holds on its domain, which agrees
            with the adjoint’s domain. In a finite-dimensional orthonormal basis
            it is equivalent to <strong>A† = A</strong>.
          </p>
        </NoteBox>
        <P>{String.raw`For a normalized eigenvector, the relation implies $a=\langle a|\hat A a\rangle=\langle\hat A a|a\rangle=a^*$. Thus its eigenvalue is real. Now choose eigenvectors with distinct eigenvalues a and b. Moving the operator across the inner product gives`}</P>
        <Equation>{String.raw`b\langle a|b\rangle=\langle a|\hat A b\rangle=\langle\hat A a|b\rangle=a\langle a|b\rangle.`}</Equation>
        <P>{String.raw`If $a\ne b$, their overlap vanishes. Eigenvectors with distinct eigenvalues are orthogonal. Within a degenerate eigenspace, choose an orthonormal basis; orthogonality does not follow merely from assigning the same eigenvalue.`}</P>
        <div className={styles.workedExample}>
          <h3>Worked example · Momentum needs boundary conditions</h3>
          <P>{String.raw`For $\hat p=-i\hbar\partial_x$ on an interval $[0,L]$, integration by parts gives`}</P>
          <Equation>{String.raw`\langle\phi|\hat p\psi\rangle-\langle\hat p\phi|\psi\rangle=-i\hbar\,[\phi^*(x)\psi(x)]_0^L.`}</Equation>
          <P>{String.raw`Periodic functions make this boundary term vanish. A suitable periodic domain gives a self-adjoint momentum operator on a circle. Requiring both endpoint values to vanish also cancels this term, but does not by itself give the same self-adjoint momentum operator. Boundary terms and domains both matter.`}</P>
        </div>
      </section>
      <section id="measurement" className={styles.section}>
        <h2>Project onto the measured eigenspaces.</h2>
        <NoteBox
          kind="law"
          title="Born probabilities & ideal projective measurement"
        >
          <Equation>{String.raw`P(a)=\langle\psi|\hat\Pi_a|\psi\rangle,\qquad |\psi_a\rangle=\frac{\hat\Pi_a|\psi\rangle}{\sqrt{P(a)}}.`}</Equation>
          <p>
            The input state is normalized. The second expression describes the{" "}
            <strong>Lüders ideal measurement update</strong> conditioned on a
            result with nonzero probability. Other measurement procedures can
            have different state updates.
          </p>
        </NoteBox>
        <P>{String.raw`For a nondegenerate orthonormal basis, write $|\psi\rangle=\sum_a c_a|a\rangle$. Then $P(a)=|c_a|^2$ and $\langle A\rangle=\sum_a a|c_a|^2$. An immediate repetition of the same ideal measurement gives the same eigenvalue, provided no intervening evolution or disturbance changes the state.`}</P>
        <div className={styles.workedExample}>
          <h3>Worked example · Change the measurement basis</h3>
          <Equation>{String.raw`\hat Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad\hat X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad |\psi\rangle=\frac{\sqrt3}{2}|0\rangle+\frac12|1\rangle.`}</Equation>
          <P>{String.raw`Both matrices are Hermitian and have eigenvalues ±1. Measuring Z gives $P(+1)=3/4$, $P(-1)=1/4$, and $\langle Z\rangle=1/2$. For X, the eigenvectors are $|\pm\rangle=(|0\rangle\pm|1\rangle)/\sqrt2$. Taking their overlaps yields`}</P>
          <Equation>{String.raw`P_X(\pm1)=\left|\frac{\sqrt3\pm1}{2\sqrt2}\right|^2=\frac{2\pm\sqrt3}{4},\qquad\langle X\rangle=\frac{\sqrt3}{2}.`}</Equation>
          <p>
            The state is the same in both calculations. The observable selects
            the basis used to calculate its outcome probabilities.
          </p>
        </div>
      </section>
      <section id="commutators" className={styles.section}>
        <h2>Noncommuting observables constrain simultaneous sharpness.</h2>
        <NoteBox kind="definition" title="Commutator · Order matters">
          <Equation>{String.raw`[\hat A,\hat B]=\hat A\hat B-\hat B\hat A.`}</Equation>
          <p>
            In finite dimensions, commuting Hermitian matrices admit a common
            orthonormal eigenbasis. In infinite dimensions, domain and
            spectral-commutation conditions require care beyond a formal
            differential calculation.
          </p>
        </NoteBox>
        <P>{String.raw`Define centered operators $\delta A=\hat A-\langle A\rangle$ and $\delta B=\hat B-\langle B\rangle$. Cauchy–Schwarz gives $(\Delta A)^2(\Delta B)^2\ge|\langle\delta A\psi|\delta B\psi\rangle|^2$. Separate that inner product into real and imaginary parts. The imaginary part is $\langle[\hat A,\hat B]\rangle/(2i)$. Dropping the nonnegative square of the real part gives`}</P>
        <NoteBox kind="law" title="Robertson uncertainty relation">
          <Equation>{String.raw`\Delta A\,\Delta B\ge\frac12\left|\langle[\hat A,\hat B]\rangle\right|.`}</Equation>
          <p>
            Assumes finite variances and a state in the domains needed for the
            products. The bound is <strong>state dependent</strong>; it can be
            zero even if the operators do not commute.
          </p>
        </NoteBox>
        <P>{String.raw`For position and momentum the commutator is $i\hbar$, recovering $\Delta x\Delta p\ge\hbar/2$. For the two-state matrices, $[X,Z]=-2iY$, with $Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$. A real-coefficient state can have $\langle Y\rangle=0$, so this particular bound need not detect all uncertainty present in X and Z.`}</P>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Separate eigenvalues from averages.</h2>
        <div className={styles.exercise}>
          <h3>1. Test a matrix</h3>
          <P>{String.raw`Is $A=\begin{pmatrix}2&i\\-i&3\end{pmatrix}$ Hermitian? Must it have real eigenvalues?`}</P>
          <details>
            <summary>Show solution</summary>
            <p>
              Yes. The diagonal entries are real, and the off-diagonal entries
              are complex conjugates. In finite dimensions it is self-adjoint
              and has real eigenvalues. Complex entries do not make an
              observable non-Hermitian.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. A sharp Z state</h3>
          <P>{String.raw`Prepare $|0\rangle$. Find $\Delta Z$ and $\Delta X$ for the matrices above.`}</P>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`Z is certainly +1, so $\Delta Z=0$. X returns ±1 equally, giving $\langle X\rangle=0$, $\langle X^2\rangle=1$, and $\Delta X=1$. The Robertson right-hand side is zero in this state, consistent with the product being zero.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. A degenerate outcome</h3>
          <P>{String.raw`An observable is $A=\operatorname{diag}(1,1,2)$ and the normalized input vector is $(1,1,1)/\sqrt3$. What is the probability of outcome 1 and the conditioned Lüders state?`}</P>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`P(1)=\frac23,\qquad|\psi_1\rangle=\frac1{\sqrt2}(1,1,0)^T.`}</Equation>
            <p>
              The measurement resolves the eigenspace, not necessarily an
              individual basis vector within it.
            </p>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original explanations, derivations, and exercises. Topic sequence
          follows{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/lecture-notes/">
            Barton Zwiebach’s MIT 8.04 lecture notes, Spring 2016
          </a>
          , lecture-note sets 9–10. Chapter and lesson numbering are local to
          this notebook.
        </p>
      </div>
    </QuantumLesson>
  );
}
