import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import HydrogenRadialLab from "@/components/notes/HydrogenRadialLab";
import { SpectrumSection } from "./spectrum-section";

export const metadata = {
  title:
    "Hydrogen Orbitals & the Atomic Spectrum | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="3.4"
      title="Hydrogen Orbitals & the Atomic Spectrum"
      description="Construct normalized radial states, count radial nodes, connect level differences to spectral lines, and distinguish allowed dipole transitions from energy differences alone."
      sections={[
        ["radial", "Radial eigenfunctions"],
        ["lab", "Radial probability lab"],
        ["spectrum", "Spectral lines"],
        ["transitions", "Transition rules"],
        ["review", "Course review"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`The energy formula labels shells, but an energy does not fully specify an orbital. Different ℓ and m values at the same n produce different radial and angular distributions. We will put those pieces together, then use energy differences to predict the gross atomic spectrum. The final distinction is crucial: an available energy difference does not guarantee a strong one-photon transition.`}</P>
      <section id="radial" className={styles.section}>
        <h2>A polynomial adds the internal radial nodes.</h2>
        <NoteBox kind="result" title="Normalized hydrogenic radial functions">
          <Equation>{String.raw`R_{n\ell}(r)=\left(\frac2{na_Z}\right)^{3/2}\sqrt{\frac{(n-\ell-1)!}{2n(n+\ell)!}}\,e^{-\rho/2}\rho^\ell L_{n-\ell-1}^{2\ell+1}(\rho),\qquad\rho=\frac{2r}{na_Z}.`}</Equation>
          <Equation>{String.raw`\int_0^\infty r^2|R_{n\ell}(r)|^2dr=1,\qquad\psi_{n\ell m}=R_{n\ell}Y_\ell^m.`}</Equation>
          <p>
            The associated Laguerre polynomial has degree n − ℓ − 1. The bound
            state has <strong>n − ℓ − 1 internal radial nodes</strong>; neither
            the origin nor infinity is counted as an internal radial node.
          </p>
        </NoteBox>
        <P>{String.raw`For n = 2, the two radial functions illustrate how equal energy can coexist with different spatial structure:`}</P>
        <Equation>{String.raw`R_{20}=\frac1{2\sqrt2\,a_Z^{3/2}}\left(2-\frac r{a_Z}\right)e^{-r/(2a_Z)},\qquad R_{21}=\frac1{2\sqrt6\,a_Z^{3/2}}\frac r{a_Z}e^{-r/(2a_Z)}.`}</Equation>
        <p>
          The 2s radial function changes sign at r = 2aZ, creating a spherical
          radial node. The 2p radial function has no internal radial node. Its
          zero at the origin is not counted as one. Angular nodes come from the
          spherical harmonic and must be distinguished from these radial zeros.
        </p>
        <NoteBox kind="result" title="Mean radius in a Coulomb eigenstate">
          <Equation>{String.raw`\langle r\rangle_{n\ell}=\frac{a_Z}{2}\left[3n^2-\ell(\ell+1)\right].`}</Equation>
          <p>
            The mean radius depends on ℓ as well as n. For n = 2 it is 6aZ for
            2s and 5aZ for 2p, although their energies agree in the ideal model.
          </p>
        </NoteBox>
      </section>
      <section id="lab" className={styles.section}>
        <h2>Compare a shell probability with an orbital label.</h2>
        <HydrogenRadialLab />
        <p>
          Changing m at fixed n and ℓ would change angular structure but not
          this radial distribution. Combine this lab with the previous
          angular-probability lab to separate the two parts of the state.
        </p>
      </section>
      <SpectrumSection />
      <section id="transitions" className={styles.section}>
        <h2>
          An energy gap is necessary, but a coupling matrix element also
          matters.
        </h2>
        <P>{String.raw`In the electric-dipole approximation, light couples through an operator proportional to the electron’s position. A transition amplitude contains $\langle n_f\ell_fm_f|\mathbf r|n_i\ell_im_i\rangle$. The angular part imposes selection rules; the radial part determines an overlap, and the light’s polarization selects the relevant component.`}</P>
        <NoteBox kind="result" title="Electric-dipole angular selection rules">
          <Equation>{String.raw`\Delta\ell=\pm1,\qquad\Delta m=0,\pm1.`}</Equation>
          <p>
            These are necessary angular conditions for the nonrelativistic
            orbital electric-dipole model, not a guarantee of a nonzero radial
            overlap or a transition rate. Polarization and photon energy must
            also be appropriate.
          </p>
        </NoteBox>
        <div className={styles.workedExample}>
          <h3>Worked example · 2p and 2s do not decay identically</h3>
          <p>
            2p → 1s satisfies the dipole angular rule; 2s → 1s does not, despite
            the same ideal energy gap. The 2s state can decay through a
            two-photon process and other effects outside the simple one-photon
            electric-dipole rule. “Dipole forbidden” does not mean absolutely
            impossible by every physical mechanism.
          </p>
        </div>
        <p>
          The same distinction appeared for oscillator selection rules:
          specifying the coupling operator is part of predicting a transition.
          Energy levels alone do not determine line intensities or lifetimes.
        </p>
      </section>
      <section id="review" className={styles.section}>
        <h2>Connect the three chapters into one calculation.</h2>
        <ol className={styles.cycleSteps}>
          <li>
            <strong>Specify the state and dynamics:</strong> choose the Hilbert
            space, Hamiltonian, approximation, and boundary conditions.
          </li>
          <li>
            <strong>Use symmetry:</strong> select a useful representation and
            commuting labels; for a central potential, separate radius and
            angle.
          </li>
          <li>
            <strong>Normalize with the correct measure:</strong> distinguish
            point density, shell probability, and angular probability.
          </li>
          <li>
            <strong>Predict an observable:</strong> use amplitudes for
            interference, spectral projectors for measurements, and matrix
            elements for couplings.
          </li>
          <li>
            <strong>Check the result:</strong> units, signs, probability
            conservation, limiting cases, and the assumptions that could fail.
          </li>
        </ol>
        <p>
          This completes the notebook’s introductory Quantum Physics I topic
          sequence through hydrogen. The lessons are an independent study
          companion rather than a replacement for the full MIT course, its
          assignments, or exams. Quantum Physics II and III remain separate
          notebooks in preparation.
        </p>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Keep orbitals, energies, and spectral lines distinct.</h2>
        <div className={styles.exercise}>
          <h3>1. A 4d radial state</h3>
          <p>
            How many internal radial nodes does 4d have, and what is its mean
            radius?
          </p>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`With n = 4 and ℓ = 2, the radial-node count is $4-2-1=1$. The mean radius is $a_Z[3(16)-6]/2=21a_Z$. There are five possible magnetic states at the same radial labels.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. A Balmer series limit</h3>
          <p>
            Why does the Balmer series stop at a finite short wavelength even
            though there are infinitely many upper levels?
          </p>
          <details>
            <summary>Show reasoning</summary>
            <P>{String.raw`As the upper level approaches zero energy, the largest gap to n = 2 tends to $E_C/4$. Thus the photon energy has a finite upper limit within the series and $\lambda_{\mathrm{lim}}=4hc/E_C\approx365\,\mathrm{nm}$.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Is 3d → 1s an electric-dipole line?</h3>
          <p>
            It has a positive energy gap. Does it satisfy the one-photon
            electric-dipole angular rule?
          </p>
          <details>
            <summary>Show solution</summary>
            <p>
              No. It changes ℓ from 2 to 0, so Δℓ = −2. A cascade such as 3d →
              2p → 1s can instead satisfy the dipole rules at each step. Other
              higher-order mechanisms require a different coupling analysis.
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
