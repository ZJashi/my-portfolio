import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function VolumeSection() {
  return (
    <section id="volume" className={styles.section}>
      <h2>Probability density is measured per unit volume.</h2>
      <NoteBox kind="law" title="Three-dimensional Schrödinger equation">
        <Equation>{String.raw`i\hbar\,\partial_t\psi(\mathbf r,t)=\left[-\frac{\hbar^2}{2\mu}\nabla^2+V(\mathbf r,t)\right]\psi(\mathbf r,t).`}</Equation>
        <p>
          The positive mass parameter μ is the particle mass for a fixed-center
          problem, or the reduced mass after separating a two-body center of
          mass. We omit spin and magnetic vector potentials here.
        </p>
      </NoteBox>
      <NoteBox
        kind="definition"
        title="Normalization and probability in a spatial region"
      >
        <Equation>{String.raw`\rho(\mathbf r,t)=|\psi(\mathbf r,t)|^2,\qquad\int_{\mathbb R^3}|\psi|^2\,d^3r=1,\qquad P(\Omega)=\int_\Omega|\psi|^2\,d^3r.`}</Equation>
        <p>
          The wavefunction has units of length to the power −3/2. Probability
          depends on the density <strong>and the volume element</strong>, which
          changes form when coordinates change.
        </p>
      </NoteBox>
      <P>{String.raw`In Cartesian coordinates, $d^3r=dx\,dy\,dz$ and $\nabla^2=\partial_x^2+\partial_y^2+\partial_z^2$. In spherical coordinates, use r ≥ 0, polar angle θ measured from +z, and azimuth φ about the z axis:`}</P>
      <Equation>{String.raw`x=r\sin\theta\cos\varphi,\quad y=r\sin\theta\sin\varphi,\quad z=r\cos\theta,\quad d^3r=r^2\sin\theta\,dr\,d\theta\,d\varphi.`}</Equation>
      <p>
        A small radial thickness at a large radius contains more volume than the
        same thickness near the origin. A point of large density therefore need
        not be the most probable distance from the center.
      </p>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 600 245"
          role="img"
          aria-labelledby="shell-title shell-desc"
        >
          <title id="shell-title">
            A spherical shell and its volume factor
          </title>
          <desc id="shell-desc">
            A cross-section through two concentric spheres shows a thin shell
            between radii r and r plus dr. The full shell volume is
            approximately four pi r squared dr.
          </desc>
          <g fill="none" stroke="currentColor">
            <circle cx="165" cy="120" r="77" strokeWidth="15" opacity=".12" />
            <circle cx="165" cy="120" r="69" />
            <circle cx="165" cy="120" r="85" />
            <path d="M165 120H234M165 120L165 35" strokeWidth="1.5" />
          </g>
          <g fill="currentColor" fontSize="17">
            <circle cx="165" cy="120" r="3" />
            <text x="193" y="110">
              r
            </text>
            <text x="176" y="55">
              r + dr
            </text>
            <text x="315" y="95">
              Full shell: dV ≈ 4πr² dr
            </text>
            <text x="315" y="133">
              A small radial interval
            </text>
            <text x="315" y="160">
              contains more volume at larger r.
            </text>
            <text x="60" y="232">
              Cross-section of a spherical shell
            </text>
          </g>
        </svg>
        <figcaption>
          The drawing is a cross-section, not a two-dimensional probability
          problem. In 3D, integrate over the shell’s full solid angle to obtain
          its volume.
        </figcaption>
      </figure>
    </section>
  );
}
