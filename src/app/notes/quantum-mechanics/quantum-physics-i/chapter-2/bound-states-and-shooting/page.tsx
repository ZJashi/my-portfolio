import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import ShootingLab from "@/components/notes/ShootingLab";
import { PracticeSection } from "./practice-section";

export const metadata = {
  title:
    "Bound States, Turning Points & Shooting | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="2.4"
      title="Bound States, Turning Points & Shooting"
      description="Read wavefunction curvature from a potential, understand the uniqueness of one-dimensional bound states, and tune trial energies numerically."
      sections={[
        ["curvature", "Curvature & turning points"],
        ["properties", "Bound-state properties"],
        ["slow", "Slowly varying potentials"],
        ["shooting", "Shooting method"],
        ["lab", "Trial-energy lab"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`Square wells can be solved by matching elementary functions. A smooth potential usually requires a different strategy. Before using a numerical solver, read what the differential equation says about curvature, decay, and boundary conditions. These qualitative checks tell us whether a computed curve could represent a bound state.`}</P>
      <section id="curvature" className={styles.section}>
        <h2>The sign of V − E determines the curvature.</h2>
        <NoteBox
          kind="result"
          title="Read the shape directly from Schrödinger’s equation"
        >
          <Equation>{String.raw`\phi''(x)=\frac{2m}{\hbar^2}[V(x)-E]\phi(x).`}</Equation>
          <p>
            For a <strong>real eigenfunction</strong>, compare the sign of the
            curvature to the sign of the amplitude. The rule applies locally
            where the potential is finite.
          </p>
        </NoteBox>
        <ul className={styles.takeaways}>
          <li>
            <strong>E &gt; V:</strong> curvature has the opposite sign to the
            amplitude, bending the curve toward its zero baseline. Oscillations
            are possible.
          </li>
          <li>
            <strong>E &lt; V:</strong> curvature has the same sign as the
            amplitude. Local solutions resemble growing and decaying
            exponentials.
          </li>
          <li>
            <strong>E = V:</strong> a classical turning point marks the boundary
            between the two types of region. For a finite smooth potential, the
            exact solution remains regular there.
          </li>
        </ul>
        <P>{String.raw`These curvature statements do not mean every classically allowed interval contains a complete oscillation. The length of the interval and the local wave number both matter. In a forbidden region, decay is selected by the global bound-state boundary condition; the differential equation itself also admits a growing solution.`}</P>
        <div className={styles.workedExample}>
          <h3>Worked example · Harmonic turning points</h3>
          <P>{String.raw`For $V(x)=m\omega^2x^2/2$, solving V = E gives`}</P>
          <Equation>{String.raw`x_\pm=\pm\sqrt{\frac{2E}{m\omega^2}}.`}</Equation>
          <P>{String.raw`The wavefunction is oscillatory in character between the turning points and decays in the outer regions for an acceptable bound state. At the ground-state energy $E=\hbar\omega/2$, the turning points are $\pm\sqrt{\hbar/(m\omega)}$. They are not hard walls: the wavefunction does not vanish there.`}</P>
        </div>
      </section>
      <section id="properties" className={styles.section}>
        <h2>A decaying solution is strongly constrained.</h2>
        <P>{String.raw`Consider two bound eigenfunctions u and v with the same energy for a regular one-dimensional real potential. Define their Wronskian $W=uv'-u'v$. Differentiate and use the identical differential equations to obtain`}</P>
        <Equation>{String.raw`W'=uv''-u''v=0.`}</Equation>
        <NoteBox
          kind="result"
          title="Nondegeneracy of ordinary one-dimensional bound states"
        >
          <p>
            For a connected line problem with the usual decaying boundary
            conditions and a regular potential, the bound eigenvalues are{" "}
            <strong>nondegenerate</strong>. The boundary behavior forces the
            constant Wronskian to zero, making equal-energy solutions linearly
            dependent.
          </p>
        </NoteBox>
        <P>{String.raw`This result does not apply to the periodic ring problem in the same way: there is no decaying endpoint at infinity forcing that Wronskian to vanish. The ±n ring degeneracy therefore remains consistent. Disconnected regions or other boundary conditions also need their own analysis.`}</P>
        <P>{String.raw`For a real potential, complex conjugation preserves the eigenvalue equation. Nondegeneracy then lets us choose each bound eigenfunction real up to a global phase. For a reflection-symmetric potential, reflection gives another eigenfunction with the same energy, so a nondegenerate bound state must have definite even or odd parity.`}</P>
      </section>
      <section id="slow" className={styles.section}>
        <h2>A slowly varying potential changes both phase and amplitude.</h2>
        <P>{String.raw`Where E exceeds V, define $k(x)=\sqrt{2m[E-V(x)]}/\hbar$. A constant potential gives a fixed wavelength. If k varies slowly across a local wavelength, a leading semiclassical approximation replaces kx by an accumulated phase and adds an amplitude factor.`}</P>
        <NoteBox
          kind="result"
          title="Local semiclassical form · Away from turning points"
        >
          <Equation>{String.raw`\phi(x)\approx\frac{C_+}{\sqrt{k(x)}}e^{i\int^x k(s)\,ds}+\frac{C_-}{\sqrt{k(x)}}e^{-i\int^x k(s)\,ds},\qquad |k'(x)|\ll k(x)^2.`}</Equation>
          <p>
            This is a leading slowly varying approximation, often called{" "}
            <strong>WKB</strong>. It fails near a turning point, where k tends
            to zero, and requires more care at abrupt interfaces.
          </p>
        </NoteBox>
        <P>{String.raw`One way to see the amplitude factor is to insert $\phi=A(x)e^{iS(x)}$ into $\phi''+k^2\phi=0$. At leading order set $S'=k$ and neglect $A''$ compared with $k^2A$. The imaginary part gives $2kA'+k'A=0$, or $(A^2k)'=0$. Thus $A\propto k^{-1/2}$. The increased amplitude in a slower region is consistent with a fixed traveling-wave probability flux.`}</P>
        <P>{String.raw`In a forbidden region the corresponding local forms are $\kappa(x)^{-1/2}\exp[\pm\int^x\kappa(s)ds]$, with $\kappa=\sqrt{2m[V-E]}/\hbar$. These expressions help estimate shape and decay; global eigenvalues still require matching and boundary conditions. We will not use the divergent turning-point approximation as an exact wavefunction.`}</P>
      </section>
      <section id="shooting" className={styles.section}>
        <h2>Adjust the energy until both boundary conditions agree.</h2>
        <NoteBox
          kind="definition"
          title="Shooting method · An eigenvalue search"
        >
          <p>
            Choose a trial energy, integrate the differential equation from
            boundary data fixed up to an overall scale, and test the far
            boundary. Adjust the energy until the solution satisfies the
            physical condition at both ends.
          </p>
        </NoteBox>
        <ol className={styles.cycleSteps}>
          <li>
            <strong>Choose symmetry or a starting boundary:</strong> for a
            symmetric potential, even states satisfy zero slope at the origin;
            odd states satisfy zero value there.
          </li>
          <li>
            <strong>Integrate at a trial energy:</strong> propagate both the
            wavefunction and its derivative.
          </li>
          <li>
            <strong>Compare with the outer behavior:</strong> a bound state must
            join the decaying branch, not merely stay small at a few interior
            points.
          </li>
          <li>
            <strong>Refine and verify:</strong> bracket a suitable mismatch
            root, reduce step size, enlarge the domain, and check normalization
            after convergence.
          </li>
        </ol>
        <P>{String.raw`Outward shooting is numerically delicate because a tiny growing component can eventually overwhelm the decaying solution. A more stable implementation can integrate inward from both tails and match near the interior using a Wronskian or logarithmic derivatives where defined. A finite-domain result must be checked as the domain changes; imposing zero at a finite cutoff is only an approximation to decay at infinity.`}</P>
      </section>
      <section id="lab" className={styles.section}>
        <h2>See why almost the right energy is not enough.</h2>
        <P>{String.raw`For the harmonic potential introduce $q=x/\ell$ with $\ell=\sqrt{\hbar/(m\omega)}$ and $\epsilon=E/(\hbar\omega)$. The equation becomes`}</P>
        <Equation>{String.raw`\frac{d^2\phi}{dq^2}=(q^2-2\epsilon)\phi.`}</Equation>
        <ShootingLab />
        <p>
          The even reference is the ground state; the odd reference is the first
          excited state. Other discrete energies of the same parity also exist.
          This lab illustrates trial solutions and their tails rather than
          automatically finding the entire spectrum.
        </p>
      </section>
      <PracticeSection />
      <div className={styles.lessonSources}>
        <p>
          Original explanations, derivations, calculations, and exercises. Topic
          sequence follows{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/lecture-notes/">
            Barton Zwiebach’s MIT 8.04 lecture notes, Spring 2016
          </a>
          , lecture-note sets 12–13. Numbering is local to this notebook.
        </p>
      </div>
    </QuantumLesson>
  );
}
