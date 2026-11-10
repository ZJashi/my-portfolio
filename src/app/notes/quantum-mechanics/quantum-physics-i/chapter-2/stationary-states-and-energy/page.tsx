import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import { RingSection } from "./ring-section";

export const metadata = {
  title:
    "Stationary States & Energy Eigenvalues | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="2.1"
      title="Stationary States & Energy Eigenvalues"
      description="Solve the time-independent Schrödinger equation, see how boundary conditions select energies, and construct free-particle states on a ring."
      sections={[
        ["separation", "Separating time"],
        ["boundary", "Boundary conditions"],
        ["ring", "Particle on a ring"],
        ["current", "Degeneracy & current"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`The basic-concepts chapter described states, probabilities, and operators. We now use those tools to solve a physical system. For a time-independent Hamiltonian, energy eigenfunctions provide building blocks for the full evolution. Their allowed energies depend on the potential and on the space and boundary conditions in which the particle moves.`}</P>
      <section id="separation" className={styles.section}>
        <h2>Find the energy modes before evolving a general state.</h2>
        <P>{String.raw`Start with a nonrelativistic particle in a real, time-independent scalar potential V(x). Insert $\psi(x,t)=\phi(x)f(t)$ into Schrödinger’s equation and divide by the product where nonzero. The time side and position side must equal a constant E. The time equation integrates directly, while the position equation becomes an eigenvalue problem.`}</P>
        <NoteBox kind="law" title="Time-independent Schrödinger equation">
          <Equation>{String.raw`-\frac{\hbar^2}{2m}\frac{d^2\phi}{dx^2}+V(x)\phi=E\phi,\qquad\psi_E(x,t)=\phi_E(x)e^{-iEt/\hbar}.`}</Equation>
          <p>
            Use the <strong>specified domain and boundary conditions</strong>.
            For a self-adjoint Hamiltonian, energies are real. The equation
            applies to each energy mode, not to every arbitrary state as a
            single eigenfunction.
          </p>
        </NoteBox>
        <NoteBox
          kind="definition"
          title="Stationary state · Time-independent density"
        >
          <P>{String.raw`An energy eigenstate acquires only a global time phase under a static Hamiltonian, so $|\psi_E(x,t)|^2=|\phi_E(x)|^2$. A superposition within one degenerate energy eigenspace is stationary too. “Stationary” does not require zero probability current.`}</P>
        </NoteBox>
        <P>{String.raw`With a complete discrete orthonormal energy basis, expand the initial state and evolve each coefficient with its own energy phase:`}</P>
        <Equation>{String.raw`\psi(x,0)=\sum_n c_n\phi_n(x),\quad c_n=\int\phi_n^*(x)\psi(x,0)\,dx,\quad\psi(x,t)=\sum_n c_n\phi_n(x)e^{-iE_nt/\hbar}.`}</Equation>
        <P>{String.raw`Then $\sum_n|c_n|^2=1$ and an energy measurement yields $E_n$ with the corresponding eigenspace probability. If the spectrum includes a continuum, the expansion must also include integrals. A superposition of distinct energies generally has a changing position density because relative phases evolve.`}</P>
      </section>
      <section id="boundary" className={styles.section}>
        <h2>Solving the differential equation is only part of the problem.</h2>
        <P>{String.raw`In a region of constant potential $V_0$, rearrange the eigenvalue equation. The sign of $E-V_0$ determines whether local solutions oscillate or vary exponentially.`}</P>
        <NoteBox kind="result" title="Local solutions in a constant potential">
          <Equation>{String.raw`\begin{array}{ll}E>V_0:&\phi=Ae^{ikx}+Be^{-ikx},\quad k=\sqrt{2m(E-V_0)}/\hbar,\\E<V_0:&\phi=Ce^{\kappa x}+De^{-\kappa x},\quad\kappa=\sqrt{2m(V_0-E)}/\hbar,\\E=V_0:&\phi=A+Bx.\end{array}`}</Equation>
          <p>
            These are <strong>local solution forms</strong>. Normalizability,
            matching conditions, and physical boundaries select which
            combinations are allowed globally.
          </p>
        </NoteBox>
        <ol className={styles.cycleSteps}>
          <li>
            <strong>Specify the problem:</strong> potential, spatial region, and
            boundary conditions.
          </li>
          <li>
            <strong>Solve in each region:</strong> retain all locally allowed
            independent solutions.
          </li>
          <li>
            <strong>Match and constrain:</strong> enforce the relevant boundary
            and interface conditions.
          </li>
          <li>
            <strong>Normalize and interpret:</strong> find allowed energies,
            normalized eigenfunctions, and measurement probabilities.
          </li>
        </ol>
        <P>{String.raw`For finite nonsingular potential steps with the same mass on each side, the wavefunction and its first derivative are continuous. Delta-function potentials instead produce a derivative jump, and ideal infinite walls impose their own limiting boundary condition. Do not apply one interface rule to every kind of potential.`}</P>
      </section>
      <RingSection />
      <section id="current" className={styles.section}>
        <h2>The same energy can support opposite flows.</h2>
        <P>{String.raw`Since energy depends on $n^2$, the +n and −n states have the same energy for nonzero n. They are distinct orthogonal momentum states. Their densities are both $1/L$, but substituting each into the probability-current expression gives opposite signs.`}</P>
        <NoteBox
          kind="result"
          title="Stationary traveling states carry probability current"
        >
          <Equation>{String.raw`\rho_n=\frac1L,\qquad j_n=\frac{\hbar}{m}\operatorname{Im}(\phi_n^*\phi_n')=\frac{2\pi\hbar n}{mL^2}.`}</Equation>
          <p>
            The constant current has equal inflow and outflow through every
            segment, so the density is stationary. Current has units of inverse
            time in this one-dimensional model.
          </p>
        </NoteBox>
        <P>{String.raw`Combine the degenerate traveling modes with equal coefficients. The phases join into a cosine, creating a stationary standing state with a nonuniform density and zero current:`}</P>
        <Equation>{String.raw`\phi_c=\frac{\phi_n+\phi_{-n}}{\sqrt2}=\sqrt{\frac2L}\cos\!\left(\frac{2\pi nx}{L}\right),\qquad n\ne0.`}</Equation>
        <P>{String.raw`It has definite energy $E_n$ but not definite momentum: a momentum measurement yields $p_n$ or $-p_n$ with equal probability. Thus knowing the energy does not fully specify a state inside a degenerate eigenspace.`}</P>
        <div className={styles.workedExample}>
          <h3>Worked example · Two different energies</h3>
          <P>{String.raw`Prepare $(\phi_0+\phi_1)/\sqrt2$. With $k_1=2\pi/L$ and $\omega_1=E_1/\hbar$, time evolution gives`}</P>
          <Equation>{String.raw`\psi(x,t)=\frac{1+e^{i(k_1x-\omega_1t)}}{\sqrt{2L}},\qquad\rho(x,t)=\frac1L\left[1+\cos(k_1x-\omega_1t)\right].`}</Equation>
          <p>
            The density moves around the ring, while energy probabilities remain
            one half at zero and one half at E₁. A time-independent Hamiltonian
            conserves energy statistics without making every position density
            stationary.
          </p>
        </div>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Let the boundary conditions select the spectrum.</h2>
        <div className={styles.exercise}>
          <h3>1. Double the circumference</h3>
          <p>
            For a fixed nonzero mode number, how do momentum and energy change
            if the ring circumference doubles?
          </p>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`Momentum halves because $p_n\propto L^{-1}$. Energy falls by a factor of four because $E_n\propto L^{-2}$. The integer mode label is held fixed.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Count the energy degeneracy</h3>
          <p>
            Ignoring spin, how many independent ring eigenstates have energy E₀
            and E₃?
          </p>
          <details>
            <summary>Show solution</summary>
            <p>
              E₀ has one state, the constant mode. E₃ has two independent
              traveling modes, n = +3 and n = −3. Cosine and sine modes are a
              different basis for that same two-dimensional eigenspace.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Stationary but uncertain momentum</h3>
          <P>{String.raw`For the cosine state with $n\ne0$, find $\langle p\rangle$, $\Delta p$, and $\Delta E$.`}</P>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\langle p\rangle=0,\qquad\Delta p=\frac{2\pi\hbar|n|}{L},\qquad\Delta E=0.`}</Equation>
            <p>
              The state is an energy eigenstate containing equal and opposite
              momentum components. The position–momentum uncertainty relation
              for the infinite line must not be imported to the ring without
              treating its coordinate and operator domains carefully.
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
