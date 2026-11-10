import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import { VolumeSection } from "./volume-section";

export const metadata = {
  title:
    "Quantum Mechanics in 3D & Central Potentials | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="3.1"
      title="Quantum Mechanics in 3D & Central Potentials"
      description="Normalize wavefunctions in volume, separate radial and angular motion, and reduce a central-potential problem to a radial equation."
      sections={[
        ["volume", "Probability in volume"],
        ["cartesian", "Cartesian separation"],
        ["central", "Central potentials"],
        ["radial", "Reduced radial equation"],
        ["shells", "Radial probabilities"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`A line requires one coordinate; a three-dimensional position measurement requires three. The evolution rule keeps the same structure, but normalization now uses volume and rotational symmetry becomes useful. For a potential depending only on distance from a center, angular momentum lets us separate direction from radius and recover a one-dimensional equation on the positive half-line.`}</P>
      <VolumeSection />
      <section id="cartesian" className={styles.section}>
        <h2>Some 3D systems separate into three line problems.</h2>
        <P>{String.raw`If $V=V_x(x)+V_y(y)+V_z(z)$, try $\phi=X(x)Y(y)Z(z)$. Dividing the stationary equation by XYZ separates it into three independent terms. Each term equals a constant, with $E=E_x+E_y+E_z$. This is a condition on the Hamiltonian, not a claim that every possible state factorizes.`}</P>
        <div className={styles.workedExample}>
          <h3>Worked example · Isotropic 3D oscillator</h3>
          <P>{String.raw`For $V=\mu\omega^2(x^2+y^2+z^2)/2$, take one oscillator eigenfunction along each axis. The energies are`}</P>
          <Equation>{String.raw`E_{n_xn_yn_z}=\hbar\omega\left(n_x+n_y+n_z+\frac32\right).`}</Equation>
          <P>{String.raw`The ground energy is $3\hbar\omega/2$. At total excitation N = 1, the triples (1,0,0), (0,1,0), and (0,0,1) give three independent equal-energy states, ignoring spin. For general N, the degeneracy is $(N+1)(N+2)/2$. Unlike an ordinary connected one-dimensional bound problem, this 3D problem can have degenerate bound energies.`}</P>
        </div>
      </section>
      <section id="central" className={styles.section}>
        <h2>A central potential makes angular momentum a good label.</h2>
        <NoteBox
          kind="definition"
          title="Central potential · Rotational symmetry"
        >
          <P>{String.raw`A central potential has $V(\mathbf r)=V(r)$ with $r=|\mathbf r|$. It is unchanged under spatial rotations about the chosen center. The orbital angular momentum is $\hat{\mathbf L}=\mathbf r\times(-i\hbar\nabla)$.`}</P>
        </NoteBox>
        <P>{String.raw`The spherical Laplacian separates a radial derivative from the angular-momentum operator. The Hamiltonian can therefore be written`}</P>
        <Equation>{String.raw`\hat H=-\frac{\hbar^2}{2\mu r^2}\frac\partial{\partial r}\left(r^2\frac\partial{\partial r}\right)+\frac{\hat L^2}{2\mu r^2}+V(r).`}</Equation>
        <P>{String.raw`For a scalar central potential, H commutes with $L^2$ and $L_z$. We may choose simultaneous eigenstates. The angular eigenfunctions are spherical harmonics $Y_\ell^m(\theta,\varphi)$, whose detailed construction is the next lesson. Here we use their eigenvalue relation and angular normalization:`}</P>
        <Equation>{String.raw`\hat L^2Y_\ell^m=\hbar^2\ell(\ell+1)Y_\ell^m,\qquad\int|Y_\ell^m|^2\,d\Omega=1,\qquad d\Omega=\sin\theta\,d\theta\,d\varphi.`}</Equation>
        <p>
          We use the conventional letter ℓ for orbital angular-momentum label
          and m for its magnetic label; neither denotes the mass μ. In a product
          eigenstate, the wavefunction is R(r)Y(θ,φ), separating radial
          structure from directional structure.
        </p>
      </section>
      <section id="radial" className={styles.section}>
        <h2>Absorb the spherical volume factor into a reduced wavefunction.</h2>
        <P>{String.raw`Insert $\phi=R(r)Y_\ell^m$ into the stationary equation. The angular operator contributes its eigenvalue. Define $u(r)=rR(r)$; differentiating $R=u/r$ cancels the first-derivative term in the radial kinetic energy.`}</P>
        <NoteBox kind="result" title="Reduced radial Schrödinger equation">
          <Equation>{String.raw`-\frac{\hbar^2}{2\mu}\frac{d^2u}{dr^2}+V_{\mathrm{eff}}(r)u=Eu,\qquad V_{\mathrm{eff}}(r)=V(r)+\frac{\hbar^2\ell(\ell+1)}{2\mu r^2}.`}</Equation>
          <Equation>{String.raw`\int_0^\infty|u(r)|^2\,dr=1.`}</Equation>
          <p>
            This is a <strong>half-line</strong> problem. For the ordinary
            regular-origin problem without an additional point interaction, u(0)
            = 0. A bound state must also decay appropriately at infinity.
          </p>
        </NoteBox>
        <P>{String.raw`The positive inverse-square term is the centrifugal contribution. It vanishes for ℓ = 0 and makes small radii energetically costly for higher ℓ. For a nonsingular potential at the origin, the regular radial behavior is $u\propto r^{\ell+1}$, or $R\propto r^\ell$. Singular potentials and modified origin interactions require their own domain analysis.`}</P>
        <p>
          Although the radial equation resembles a line equation, r cannot be
          negative. Do not independently add negative-r states or apply
          full-line parity arguments to u.
        </p>
      </section>
      <section id="shells" className={styles.section}>
        <h2>A shell probability includes all directions.</h2>
        <NoteBox
          kind="result"
          title="Radial probability density for a normalized angular factor"
        >
          <Equation>{String.raw`P(r\text{ to }r+dr)=r^2|R(r)|^2dr=|u(r)|^2dr.`}</Equation>
          <p>
            The angular integral is already one. For a general state that does
            not factorize, first integrate r²|ψ|² over all directions to obtain
            its radial density.
          </p>
        </NoteBox>
        <div className={styles.workedExample}>
          <h3>Worked example · An isotropic exponential state</h3>
          <P>{String.raw`Take $R(r)=2a^{-3/2}e^{-r/a}$ with $a>0$ and $Y_0^0=1/\sqrt{4\pi}$. This normalized spatial state has radial density`}</P>
          <Equation>{String.raw`P_r(r)=\frac{4r^2}{a^3}e^{-2r/a},\qquad\int_0^\infty P_r(r)\,dr=1.`}</Equation>
          <P>{String.raw`The density per unit volume is largest at r = 0, but the radial density vanishes there and reaches its maximum at r = a. Integration gives $P(r\le a)=1-5e^{-2}\approx0.3233$ and $\langle r\rangle=3a/2$. This example specifies a normalized state; identifying it as an energy eigenstate also requires specifying the potential.`}</P>
        </div>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Keep geometry separate from amplitude.</h2>
        <div className={styles.exercise}>
          <h3>1. Radial units</h3>
          <p>
            If the angular factor is dimensionless, what are the units of R and
            u?
          </p>
          <details>
            <summary>Show solution</summary>
            <p>
              R has units of length⁻³ᐟ², while u = rR has units of length⁻¹ᐟ².
              Thus |u|²dr is dimensionless, just as a one-dimensional
              probability element should be.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Centrifugal contribution</h3>
          <p>
            Compare the centrifugal term at the same radius for ℓ = 1 and ℓ = 2.
          </p>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`The factors ℓ(ℓ + 1) are 2 and 6, respectively. The ℓ = 2 term is three times larger. This compares effective-potential terms, not total energies of unspecified states.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Second oscillator excitation</h3>
          <p>
            List the Cartesian triples for total excitation N = 2 and determine
            the degeneracy.
          </p>
          <details>
            <summary>Show solution</summary>
            <p>
              There are six: (2,0,0), (0,2,0), (0,0,2), (1,1,0), (1,0,1), and
              (0,1,1). They share energy 7ℏω/2 in the isotropic oscillator,
              ignoring spin.
            </p>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original explanations, examples, and exercises organized around the
          topics of{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes20_21/">
            Barton Zwiebach’s MIT 8.04 lecture-note sets 20–21
          </a>
          , Spring 2016. Chapter organization and the angular-probability lab
          are local to this notebook.
        </p>
      </div>
    </QuantumLesson>
  );
}
