import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export const metadata = {
  title:
    "Matter Waves, Phase & Group Velocity | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="1.4"
      title="Matter Waves, Phase & Group Velocity"
      description="Build a free-particle wave from energy and momentum, distinguish moving crests from a moving envelope, and understand why localization needs many wavelengths."
      sections={[
        ["plane", "Plane waves"],
        ["dispersion", "Dispersion"],
        ["packet", "Wavepackets"],
        ["frames", "Changing frames"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`The relation $\lambda=h/p$ assigns a wavelength to a particle with definite momentum. It does not yet describe a particle concentrated near one place. To understand the difference, begin with a single sinusoidal wave and then combine nearby wavelengths. We will use a free, nonrelativistic particle in one spatial dimension.`}</P>
      <section id="plane" className={styles.section}>
        <h2>Put energy and momentum into the phase.</h2>
        <NoteBox kind="definition" title="Plane wave · A definite wave number">
          <Equation>{String.raw`\psi(x,t)=A e^{i(kx-\omega t)},\qquad p=\hbar k,\qquad E=\hbar\omega.`}</Equation>
          <P>{String.raw`The wave number $k$ has units of inverse length; angular frequency $\omega$ has units of inverse time. A negative $k$ corresponds to negative momentum. We use $E=p^2/(2m)$, with zero potential energy for the free particle.`}</P>
        </NoteBox>
        <P>{String.raw`The modulus of the exponential is one, so $|\psi|^2=|A|^2$ is constant over space. A plane wave has no preferred position. On an infinite line its norm diverges for every nonzero constant A: it is an idealized momentum state, not a normalized localized particle. A finite wavepacket will resolve that issue.`}</P>
        <P>{String.raw`Differentiating the exponential shows how spatial and temporal changes encode momentum and energy. These identities motivate the operators we will develop in later lessons.`}</P>
        <Equation>{String.raw`-i\hbar\frac{\partial\psi}{\partial x}=p\psi,\qquad i\hbar\frac{\partial\psi}{\partial t}=E\psi.`}</Equation>
      </section>
      <section id="dispersion" className={styles.section}>
        <h2>Moving phase is different from moving a packet.</h2>
        <P>{String.raw`A crest keeps $kx-\omega t$ constant. Differentiating that condition gives its velocity $\omega/k$. To find how a superposition moves, however, we must know how frequency depends on wave number. This dependence is the dispersion relation. Substitute the de Broglie relations into the nonrelativistic kinetic energy.`}</P>
        <NoteBox kind="result" title="Free-particle dispersion relation">
          <Equation>{String.raw`\hbar\omega=\frac{\hbar^2k^2}{2m}\quad\Rightarrow\quad\omega(k)=\frac{\hbar k^2}{2m}.`}</Equation>
          <p>
            Assumes a <strong>free, nonrelativistic particle</strong> and the
            kinetic-energy zero convention stated above.
          </p>
        </NoteBox>
        <NoteBox kind="definition" title="Phase velocity and group velocity">
          <Equation>{String.raw`v_{\mathrm{ph}}=\frac{\omega}{k}=\frac{\hbar k}{2m}=\frac{p}{2m},\qquad v_g=\frac{d\omega}{dk}=\frac{\hbar k}{m}=\frac{p}{m}.`}</Equation>
          <p>
            Phase velocity follows a fixed phase. Group velocity follows the
            envelope of a <strong>narrow band of wave numbers</strong> near the
            chosen k. Here the group velocity agrees with the classical particle
            velocity.
          </p>
        </NoteBox>
        <P>{String.raw`The factor of two does not mean the electron has two different speeds. The phase crests and the envelope are different features of a wave. Adding a constant to the energy changes the common time-dependent phase and hence the phase velocity, while leaving $d\omega/dk$ unchanged. A phase crest alone is not the location of a particle.`}</P>
        <div className={styles.workedExample}>
          <h3>Worked example · Compare the two velocities</h3>
          <P>{String.raw`For an electron with $k=1.00\times10^{10}\,\mathrm{m^{-1}}$, use $\hbar\approx1.055\times10^{-34}\,\mathrm{J\,s}$ and $m_e\approx9.109\times10^{-31}\,\mathrm{kg}$.`}</P>
          <Equation>{String.raw`v_g\approx1.16\times10^6\,\mathrm{m/s},\qquad v_{\mathrm{ph}}\approx5.79\times10^5\,\mathrm{m/s}.`}</Equation>
          <p>
            The group speed is much smaller than the speed of light, consistent
            with using nonrelativistic kinetic energy.
          </p>
        </div>
      </section>
      <section id="packet" className={styles.section}>
        <h2>Combine wavelengths to make an envelope.</h2>
        <P>{String.raw`Take two waves of equal amplitude, with wave numbers $k_0\pm\Delta k/2$ and frequencies $\omega_0\pm\Delta\omega/2$, where the central values are the averages of the two component values. Adding the exponentials gives a rapidly varying carrier multiplied by a slowly varying modulation:`}</P>
        <Equation>{String.raw`\psi_++\psi_-=2A e^{i(k_0x-\omega_0t)}\cos\!\left(\frac{\Delta k\,x-\Delta\omega\,t}{2}\right).`}</Equation>
        <P>{String.raw`A fixed point of the cosine modulation moves at $\Delta\omega/\Delta k$. For nearby wave numbers this approaches $d\omega/dk$. Two waves create a repeating beat pattern, not an isolated particle; a localized packet requires a continuous range or sufficiently many discrete components.`}</P>
        <figure className={styles.lessonFigure}>
          <svg
            viewBox="0 0 600 220"
            role="img"
            aria-labelledby="packet-title packet-desc"
          >
            <title id="packet-title">A localized wavepacket</title>
            <desc id="packet-desc">
              An oscillating real part of a wave is bounded by a smooth envelope
              concentrated around a central position.
            </desc>
            <path
              d="M30 110H570"
              fill="none"
              stroke="currentColor"
              opacity=".3"
            />
            <path
              d="M30 109C150 109 160 35 300 25S450 109 570 109M30 111C150 111 160 185 300 195S450 111 570 111"
              fill="none"
              stroke="currentColor"
              strokeDasharray="5 5"
              opacity=".5"
            />
            <path
              d="M30 110L70 110L90 107L110 116L130 99L150 128L170 80L190 153L210 53L230 181L250 30L270 194L290 25L310 195L330 29L350 182L370 51L390 154L410 80L430 128L450 100L470 116L490 107L510 110L570 110"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <g fill="currentColor" fontSize="15">
              <text x="35" y="28">
                Re ψ · schematic
              </text>
              <text x="390" y="30">
                Envelope
              </text>
              <text x="565" y="137">
                x
              </text>
            </g>
          </svg>
          <figcaption>
            The oscillating curve represents the real part of an amplitude, not
            the probability density. The envelope indicates localization;
            probability is obtained from the squared modulus of the full complex
            wavefunction.
          </figcaption>
        </figure>
        <NoteBox
          kind="result"
          title="A localized state uses a range of momenta"
        >
          <Equation>{String.raw`\psi(x,t)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{\infty}a(k)e^{i[kx-\omega(k)t]}\,dk.`}</Equation>
          <P>{String.raw`The complex function $a(k)$ weights the wave-number components. With this Fourier convention, a normalized packet obeys $\int|\psi|^2dx=\int|a(k)|^2dk=1$. Momentum values are related by $p=\hbar k$.`}</P>
        </NoteBox>
        <P>{String.raw`Near a central wave number, expand $\omega(k)$ in powers of $k-k_0$. The linear term translates the envelope at group velocity. The quadratic term changes relative phases within it and can cause spreading. For a free massive particle this curvature is nonzero, so a typical localized packet changes shape. We will quantify that evolution after introducing normalization and probability current.`}</P>
      </section>
      <section id="frames" className={styles.section}>
        <h2>A moving observer assigns a different momentum.</h2>
        <P>{String.raw`Let the primed inertial frame move at constant velocity u relative to the original one: $x'=x-ut$, $t'=t$. Classical nonrelativistic momentum becomes $p'=p-mu$. A mere substitution of coordinates in the wavefunction would change the temporal frequency but leave the spatial wave number unchanged, so it cannot by itself give this momentum shift.`}</P>
        <NoteBox kind="result" title="Galilean boost · A mass-dependent phase">
          <Equation>{String.raw`\psi'(x',t)=\exp\!\left[-\frac{i}{\hbar}\left(mu x'+\frac12mu^2t\right)\right]\psi(x'+ut,t).`}</Equation>
          <p>
            This convention maps an unprimed free-particle solution into the
            frame moving at velocity u. The phase has unit modulus, so
            corresponding observers agree on position probabilities after
            relabeling coordinates.
          </p>
        </NoteBox>
        <P>{String.raw`For a plane wave, collect the coefficients of $x'$ and t in the exponent. The result is exactly the transformed kinetic energy and momentum:`}</P>
        <Equation>{String.raw`p'=p-mu,\qquad E'=E-up+\frac12mu^2=\frac{(p-mu)^2}{2m}.`}</Equation>
        <P>{String.raw`This is a nonrelativistic transformation. It does not apply to photons or replace a Lorentz transformation when velocities approach c. The extra phase is essential to keeping the free-particle wave equation consistent across Galilean frames.`}</P>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Track the phase, then interpret it.</h2>
        <div className={styles.exercise}>
          <h3>1. Read a plane wave</h3>
          <P>{String.raw`For $\psi=Ae^{i(kx-\omega t)}$ with $k<0$, what is the momentum direction? Is its position density localized?`}</P>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`Since $p=\hbar k$, momentum points in the negative x direction. The density $|A|^2$ is spatially constant, so the plane wave is not localized or square-normalizable on the infinite line.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Change the wave number</h3>
          <p>
            For a free nonrelativistic particle of fixed mass, double a positive
            central wave number. How do energy and group velocity change?
          </p>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`Energy is proportional to $k^2$, so it quadruples. Group velocity is proportional to k, so it doubles. These statements require the larger momentum to remain nonrelativistic.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Move with the particle</h3>
          <p>
            Choose a boosted frame whose velocity equals p/m for a
            definite-momentum free state. What momentum and kinetic energy does
            that frame assign?
          </p>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`With $u=p/m$, the transformed momentum is $p'=0$ and the kinetic energy is $E'=0$. This does not turn a plane wave into a localized packet: its density remains uniform.`}</P>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original explanations, diagrams, calculations, and exercises. Topic
          sequence follows{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/lecture-notes/">
            Barton Zwiebach’s MIT 8.04 lecture notes, Spring 2016
          </a>
          . Lesson numbering is local to this notebook.
        </p>
      </div>
    </QuantumLesson>
  );
}
