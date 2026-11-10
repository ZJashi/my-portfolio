import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";

export const metadata = {
  title:
    "The Hydrogen Atom & Coulomb Energy Levels | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="3.3"
      title="The Hydrogen Atom & Coulomb Energy Levels"
      description="Separate the two-body motion, solve the Coulomb radial equation, and derive the principal quantum number and hydrogenic energy spectrum."
      sections={[
        ["model", "Two-body Coulomb model"],
        ["radial", "Radial equation"],
        ["quantization", "Energy quantization"],
        ["labels", "Quantum numbers & degeneracy"],
        ["ground", "Ground-state solution"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`A central-potential equation becomes a model of an atom when the potential is Coulomb attraction. The same separation into radial and angular motion now produces the principal quantum number n, a spectrum accumulating at the ionization threshold, and several different orbital states at each energy. We first separate the motion of the whole atom from the electron–nucleus separation.`}</P>
      <section id="model" className={styles.section}>
        <h2>The relative coordinate carries the internal spectrum.</h2>
        <NoteBox
          kind="definition"
          title="Hydrogenic model · One electron and a charge +Ze nucleus"
        >
          <Equation>{String.raw`\mu=\frac{m_eM}{m_e+M},\qquad V(r)=-\frac{C}{r},\qquad C=\frac{Ze^2}{4\pi\varepsilon_0}.`}</Equation>
          <p>
            M is the nuclear mass and μ the <strong>reduced mass</strong>. We
            use a nonrelativistic point-nucleus model, without spin-dependent
            terms, radiation corrections, or external fields. Z = 1 describes
            hydrogen; a many-electron atom is not this one-electron model.
          </p>
        </NoteBox>
        <P>{String.raw`For an isolated atom, the Hamiltonian separates into free center-of-mass kinetic energy plus the relative-coordinate Hamiltonian. The internal energies discussed here are measured after removing the center-of-mass contribution. A proton is much heavier than an electron, so μ is close to, but not exactly, $m_e$.`}</P>
        <NoteBox kind="result" title="Natural Coulomb length and binding scale">
          <Equation>{String.raw`a_Z=\frac{\hbar^2}{\mu C}=\frac{4\pi\varepsilon_0\hbar^2}{\mu Ze^2},\qquad E_C=\frac{\hbar^2}{2\mu a_Z^2}=\frac{\mu C^2}{2\hbar^2}.`}</Equation>
          <p>
            For hydrogen, aZ is approximately 0.0529 nm and EC approximately
            13.6 eV. At fixed reduced mass, aZ scales as 1/Z and EC as Z². The
            energy zero is an electron and nucleus infinitely separated and at
            rest relative to each other.
          </p>
        </NoteBox>
      </section>
      <section id="radial" className={styles.section}>
        <h2>The angular label enters as a centrifugal term.</h2>
        <P>{String.raw`Use $\psi=R(r)Y_\ell^m(\theta,\varphi)$ and $u=rR$. The reduced radial equation becomes`}</P>
        <Equation>{String.raw`-\frac{\hbar^2}{2\mu}u''+\left[\frac{\hbar^2\ell(\ell+1)}{2\mu r^2}-\frac Cr\right]u=Eu.`}</Equation>
        <P>{String.raw`Bound states have E < 0. Define $\kappa=\sqrt{-2\mu E}/\hbar$, $\rho=2\kappa r$, and $\nu=1/(\kappa a_Z)$. The equation is`}</P>
        <Equation>{String.raw`\frac{d^2u}{d\rho^2}+\left[-\frac14+\frac\nu\rho-\frac{\ell(\ell+1)}{\rho^2}\right]u=0.`}</Equation>
        <P>{String.raw`At large radius, decay suggests $e^{-\rho/2}$. Near zero, the usual regular Coulomb solution behaves as $\rho^{\ell+1}$. Factor out both known behaviors: $u=\rho^{\ell+1}e^{-\rho/2}F(\rho)$. This leaves`}</P>
        <Equation>{String.raw`\rho F''+(2\ell+2-\rho)F'+(\nu-\ell-1)F=0.`}</Equation>
        <p>
          The origin condition is part of the ordinary Coulomb Hamiltonian. We
          do not add a separate contact interaction at the nucleus or accept an
          arbitrary singular radial solution merely because a local integral
          converges.
        </p>
      </section>
      <section id="quantization" className={styles.section}>
        <h2>Normalizable radial solutions select integer n.</h2>
        <P>{String.raw`Insert $F=\sum_{j=0}^\infty c_j\rho^j$. Matching powers gives`}</P>
        <Equation>{String.raw`c_{j+1}=\frac{j+\ell+1-\nu}{(j+1)(j+2\ell+2)}c_j.`}</Equation>
        <P>{String.raw`For the regular-origin solution, a generic nonterminating series produces a growing component that defeats the exponential decay. Termination at degree $n_r$ requires $\nu=n_r+\ell+1$. Define the principal quantum number $n=n_r+\ell+1$. Then $\kappa=1/(na_Z)$ and`}</P>
        <NoteBox kind="law" title="Hydrogenic bound energies">
          <Equation>{String.raw`E_n=-\frac{E_C}{n^2}=-\frac{\mu Z^2e^4}{2(4\pi\varepsilon_0)^2\hbar^2n^2},\qquad n=1,2,3,\ldots`}</Equation>
          <p>
            The integer n follows from{" "}
            <strong>regularity and normalizability</strong>, rather than
            assuming a classical orbit fits around a nucleus. Bound levels
            approach zero from below as n increases.
          </p>
        </NoteBox>
        <div className={styles.workedExample}>
          <h3>Worked example · Excitation versus ionization</h3>
          <P>{String.raw`Using $E_C\approx13.6\,\mathrm{eV}$ for hydrogen gives $E_1\approx-13.6\,\mathrm{eV}$ and $E_2\approx-3.40\,\mathrm{eV}$. Exciting the ground state to n = 2 requires about 10.2 eV. Ionizing from n = 2 requires about 3.40 eV, not 13.6 eV. The required energy depends on the initial state.`}</P>
        </div>
      </section>
      <section id="labels" className={styles.section}>
        <h2>The same Coulomb energy can contain many orbital states.</h2>
        <NoteBox kind="definition" title="Hydrogenic quantum numbers">
          <Equation>{String.raw`n=1,2,\ldots,\qquad\ell=0,1,\ldots,n-1,\qquad m=-\ell,\ldots,\ell.`}</Equation>
          <ul>
            <li>
              <strong>n:</strong> sets the energy in the ideal Coulomb model.
            </li>
            <li>
              <strong>ℓ:</strong> sets L² = ℏ²ℓ(ℓ + 1) and the radial
              centrifugal term.
            </li>
            <li>
              <strong>m:</strong> sets Lz = ℏm and labels angular states.
            </li>
          </ul>
        </NoteBox>
        <P>{String.raw`At each ℓ there are 2ℓ + 1 orbital states. Summing them at fixed n gives`}</P>
        <Equation>{String.raw`g_n=\sum_{\ell=0}^{n-1}(2\ell+1)=n^2.`}</Equation>
        <p>
          This counts spatial states, ignoring spin. Adding two uncoupled
          electron spin states gives 2n², but a precise atomic Hamiltonian
          includes spin interactions and other corrections that can split
          levels. Rotational symmetry explains equal energies across m at fixed
          ℓ; the Coulomb equality across different ℓ is an additional special
          degeneracy.
        </p>
        <div className={styles.workedExample}>
          <h3>Worked example · The n = 3 shell</h3>
          <p>
            The labels are 3s, 3p, and 3d, meaning ℓ = 0, 1, and 2. They contain
            1 + 3 + 5 = 9 spatial states. All have energy −EC/9 in the ideal
            model, while their angular shapes and radial distributions differ.
          </p>
        </div>
      </section>
      <section id="ground" className={styles.section}>
        <h2>The ground state is a nodeless exponential.</h2>
        <NoteBox kind="result" title="Normalized 1s wavefunction">
          <Equation>{String.raw`R_{10}(r)=\frac2{a_Z^{3/2}}e^{-r/a_Z},\qquad\psi_{100}(\mathbf r)=\frac1{\sqrt{\pi a_Z^3}}e^{-r/a_Z}.`}</Equation>
          <p>
            The angular factor is Y₀⁰ = 1/√(4π). The density is isotropic and
            the state has ℓ = m = 0; this is an angular-momentum statement, not
            a classical orbit.
          </p>
        </NoteBox>
        <P>{String.raw`The normalization follows from $\int_0^\infty r^2e^{-2r/a_Z}dr=a_Z^3/4$. Its most probable radius is aZ and its mean radius is 3aZ/2. Those radial statements include the r² volume factor, even though the density per unit volume is largest at the origin.`}</P>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Track the reference energy and the allowed labels.</h2>
        <div className={styles.exercise}>
          <h3>1. A hydrogenic ion</h3>
          <p>
            At the same reduced mass, how do the ground-state radius scale and
            binding energy change from Z = 1 to Z = 2?
          </p>
          <details>
            <summary>Show solution</summary>
            <p>
              The natural length halves and the binding energy magnitude
              quadruples. A real nucleus also changes the reduced mass slightly.
              A one-electron Z = 2 ion is helium’s singly ionized state, not
              neutral helium.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. An impossible orbital label</h3>
          <p>
            Is 2d allowed in this spectrum? How many spatial states belong to n
            = 2?
          </p>
          <details>
            <summary>Show solution</summary>
            <p>
              2d would require n = 2 and ℓ = 2, but ℓ must be at most n − 1. The
              n = 2 shell contains 2s and three 2p magnetic states, for four
              spatial states.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Ionize an excited hydrogen state</h3>
          <p>Estimate the ionization energy from n = 3 using EC ≈ 13.6 eV.</p>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`E_{\mathrm{ion}}=0-E_3=\frac{13.6}{9}\,\mathrm{eV}\approx1.51\,\mathrm{eV}.`}</Equation>
            <p>
              The continuum begins at zero internal energy in this convention.
            </p>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original derivations, examples, and exercises organized around the
          hydrogen topics of{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes22/">
            Barton Zwiebach’s MIT 8.04 lecture-note set 22
          </a>
          , Spring 2016. The notebook’s division into lessons and radial lab are
          original. Numerical estimates use the nonrelativistic Coulomb model.
        </p>
      </div>
    </QuantumLesson>
  );
}
