import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import { ComptonSection } from "./compton-section";

export const metadata = {
  title:
    "Particle Nature of Light & Matter Waves | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="1.3"
      title="Particle Nature of Light & Matter Waves"
      description="Use energy and momentum to understand electron emission, photon scattering, and diffraction by matter."
      sections={[
        ["photons", "Photon energy"],
        ["photoelectric", "Photoelectric effect"],
        ["compton", "Compton scattering"],
        ["matter", "Matter waves"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`Interference taught us to add amplitudes. Detection taught us that a single photon produces a discrete event. We now ask a different question: how much energy and momentum does that event transfer? Three experiments connect wave quantities—frequency and wavelength—to particle quantities—energy and momentum.`}</P>
      <section id="photons" className={styles.section}>
        <h2>A wave frequency sets a photon’s energy.</h2>
        <NoteBox
          kind="definition"
          title="Photon · A quantum of electromagnetic radiation"
        >
          <p>
            A photon carries energy and momentum associated with the frequency
            and wavelength of the radiation. It has{" "}
            <strong>zero rest mass</strong>; its energy–momentum relation is
            relativistic.
          </p>
        </NoteBox>
        <NoteBox kind="result" title="Photon energy and momentum">
          <Equation>{String.raw`E=h\nu=\hbar\omega=\frac{hc}{\lambda},\qquad p=\frac{E}{c}=\frac{h}{\lambda}.`}</Equation>
          <P>{String.raw`Here $h$ is Planck’s constant, $\hbar=h/(2\pi)$, $\omega=2\pi\nu$, and $\lambda$ is the vacuum wavelength. The frequency $\nu$ is not a velocity.`}</P>
        </NoteBox>
        <P>{String.raw`At a fixed frequency, increasing the intensity of an ordinary beam increases its photon flux, rather than the energy of each photon. This distinction lets an electron-emission experiment separate the amount of radiation from the energy available in an individual absorption event.`}</P>
      </section>
      <section id="photoelectric" className={styles.section}>
        <h2>Why brighter light cannot always eject electrons.</h2>
        <P>{String.raw`An electron inside a metal needs energy to escape. In the simplest surface model, the minimum required energy is the work function $\Phi$. An absorbed photon supplies $h\nu$. Some of that energy liberates the electron; the remainder can appear as kinetic energy. Electrons that lose energy before reaching the surface emerge more slowly, so the clean relation concerns the maximum kinetic energy.`}</P>
        <NoteBox kind="law" title="Einstein’s photoelectric equation">
          <Equation>{String.raw`K_{\max}=h\nu-\Phi,\qquad \nu_0=\frac{\Phi}{h},\qquad eV_s=K_{\max}.`}</Equation>
          <p>
            This is the <strong>single-photon model</strong>, with emission only
            above threshold. Here e is the positive elementary-charge magnitude
            and V<sub>s</sub> is the magnitude of the stopping potential.
          </p>
        </NoteBox>
        <ul className={styles.takeaways}>
          <li>
            <strong>Below threshold:</strong> a photon lacks the escape energy,
            however large the photon flux in this model.
          </li>
          <li>
            <strong>Above threshold:</strong> raising frequency increases the
            maximum electron kinetic energy.
          </li>
          <li>
            <strong>At fixed frequency:</strong> raising intensity generally
            raises emission rate, provided material and collection conditions
            remain comparable.
          </li>
        </ul>
        <div className={styles.workedExample}>
          <h3>Worked example · A 400 nm photon</h3>
          <P>{String.raw`Let $\Phi=2.00\,\mathrm{eV}$ and $\lambda=400\,\mathrm{nm}$. Use $hc\approx1240\,\mathrm{eV\,nm}$.`}</P>
          <Equation>{String.raw`E_\gamma=\frac{1240}{400}\,\mathrm{eV}=3.10\,\mathrm{eV},\quad K_{\max}=1.10\,\mathrm{eV},\quad V_s=1.10\,\mathrm V.`}</Equation>
          <p>
            The electron volt is a unit of <strong>energy</strong>; the stopping
            potential is measured in <strong>volts</strong>. Strong-field
            multiphoton emission lies outside this introductory model.
          </p>
        </div>
      </section>
      <ComptonSection />
      <section id="matter" className={styles.section}>
        <h2>Particles also produce diffraction.</h2>
        <P>{String.raw`The energy–frequency and momentum–wavelength connections suggest assigning a wavelength to matter. Electron diffraction confirms that particle detection and wave interference can belong to the same experiment. The wavelength refers to the phase structure of a quantum amplitude; it does not describe the diameter of an electron.`}</P>
        <NoteBox kind="result" title="de Broglie wavelength">
          <Equation>{String.raw`\lambda=\frac{h}{p},\qquad p=\hbar k.`}</Equation>
          <p>
            Use the appropriate momentum relation: <strong>p = mv</strong> is
            the nonrelativistic approximation; the wavelength relation itself is
            more general.
          </p>
        </NoteBox>
        <P>{String.raw`An electron accelerated from rest through a potential difference of magnitude $U$ gains kinetic energy $eU$. If $eU\ll m_ec^2$, then $p=\sqrt{2m_e eU}$. Thus the voltage controls its diffraction wavelength.`}</P>
        <div className={styles.workedExample}>
          <h3>Worked example · A 150 V electron</h3>
          <Equation>{String.raw`\lambda=\frac{h}{\sqrt{2m_e eU}}\approx\frac{1.227\,\mathrm{nm}}{\sqrt{U/(1\,\mathrm V)}}\approx0.100\,\mathrm{nm}.`}</Equation>
          <p>
            This is comparable to atomic spacing, making diffraction by crystals
            measurable. A macroscopic object’s much larger momentum usually
            gives a far smaller wavelength.
          </p>
        </div>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Choose the balance before substituting.</h2>
        <div className={styles.exercise}>
          <h3>1. Find the emission threshold</h3>
          <p>
            A surface has a work function of 2.50 eV. What is its threshold
            wavelength?
          </p>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\lambda_0=\frac{hc}{\Phi}=\frac{1240}{2.50}\,\mathrm{nm}=496\,\mathrm{nm}.`}</Equation>
            <p>
              Shorter wavelengths permit emission in the single-photon model;
              longer ones do not. At the ideal threshold the maximum kinetic
              energy is zero.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Largest Compton shift</h3>
          <p>
            At what scattering angle is the shift largest, and what is its
            magnitude?
          </p>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`At $180^\circ$, $1-\cos\theta=2$, so $\Delta\lambda\approx4.852\,\mathrm{pm}$. This is a wavelength shift, not the final wavelength.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Double the accelerating voltage</h3>
          <p>
            How does a nonrelativistic electron’s wavelength change when the
            accelerating voltage doubles?
          </p>
          <details>
            <summary>Show reasoning</summary>
            <P>{String.raw`Momentum grows as $\sqrt U$, so wavelength falls by a factor $1/\sqrt2$. This scaling assumes negligible initial kinetic energy and nonrelativistic motion.`}</P>
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
