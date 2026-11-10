import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import TransmissionLab from "@/components/notes/TransmissionLab";
export const metadata = {
  title:
    "Finite Barriers, Tunneling & Resonant Transmission | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="2.9"
      title="Finite Barriers, Tunneling & Resonant Transmission"
      description="Match a finite scattering region, derive barrier transmission, and compare tunneling with interference resonances in barriers and wells."
      sections={[
        ["slab", "Finite scattering region"],
        ["tunneling", "Below-barrier transmission"],
        ["above", "Above-barrier interference"],
        ["well", "Attractive-well resonances"],
        ["lab", "Transmission lab"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`A semi-infinite step has no transmitted propagating channel below its height. A finite barrier has a second interface and an open region on the far side. Its two boundaries couple incident and outgoing waves even when the interior is classically forbidden. The same matching method also explains perfect transmission through an attractive well at selected energies.`}</P>
      <section id="slab" className={styles.section}>
        <h2>Two interfaces require both interior solutions.</h2>
        <NoteBox
          kind="definition"
          title="Rectangular barrier · Equal exterior potentials"
        >
          <Equation>{String.raw`V(x)=\begin{cases}V_0,&0<x<L,\\0,&x<0\ \text{or}\ x>L,\end{cases}\qquad V_0>0,\ E>0.`}</Equation>
          <p>
            Use one constant mass and left incidence. The exterior wave number
            is k = √(2mE)/ℏ on both sides, so the transmission coefficient is
            simply |t|² in this equal-velocity case.
          </p>
        </NoteBox>
        <P>{String.raw`Write the left wave as $e^{ikx}+re^{-ikx}$ and the right wave as $te^{ikx}$. For E below V₀, retain both $Ae^{\kappa x}$ and $Be^{-\kappa x}$ inside the finite interval. A growing exponential is not forbidden on a finite interval; excluding it prematurely would remove a necessary degree of freedom for matching.`}</P>
        <Equation>{String.raw`\begin{aligned}1+r&=A+B,&ik(1-r)&=\kappa(A-B),\\Ae^{\kappa L}+Be^{-\kappa L}&=te^{ikL},&\kappa(Ae^{\kappa L}-Be^{-\kappa L})&=ikte^{ikL}.\end{aligned}`}</Equation>
        <p>
          These four linear conditions determine four amplitudes. Their complex
          phases matter because reflected contributions from both interfaces
          interfere.
        </p>
      </section>
      <section id="tunneling" className={styles.section}>
        <h2>A finite forbidden interval can carry transmitted flux.</h2>
        <P>{String.raw`Eliminating the interior coefficients from the matching equations gives a useful transmission amplitude. Here $\kappa=\sqrt{2m(V_0-E)}/\hbar$.`}</P>
        <Equation>{String.raw`t=\frac{e^{-ikL}}{\cosh(\kappa L)+i\frac{\kappa^2-k^2}{2k\kappa}\sinh(\kappa L)}.`}</Equation>
        <P>{String.raw`Take the modulus squared and use $\cosh^2u=1+\sinh^2u$. The coefficient combines into $(k^2+\kappa^2)^2/(4k^2\kappa^2)$, which can be expressed in energy variables.`}</P>
        <NoteBox
          kind="result"
          title="Exact tunneling probability · 0 &lt; E &lt; V₀"
        >
          <Equation>{String.raw`T=\left[1+\frac{V_0^2\sinh^2(\kappa L)}{4E(V_0-E)}\right]^{-1},\qquad R=1-T.`}</Equation>
          <p>
            The potential is real and static, so energy is conserved. A
            transmitted particle emerges in the equal exterior potential with
            the same energy; tunneling does not consume its kinetic energy.
          </p>
        </NoteBox>
        <P>{String.raw`For an opaque barrier, $\kappa L\gg1$, the exponential dominates:`}</P>
        <Equation>{String.raw`T\approx\frac{16E(V_0-E)}{V_0^2}e^{-2\kappa L}.`}</Equation>
        <p>
          The prefactor matters outside a purely logarithmic estimate. Inside
          the finite barrier, interference between the two exponentials can
          carry nonzero current. This differs from the isolated decaying
          exponential of the semi-infinite step.
        </p>
        <div className={styles.workedExample}>
          <h3>Worked example · Half-height incidence</h3>
          <P>{String.raw`Let $E=V_0/2$ and $\kappa L=\sqrt2$. The prefactor inside the exact denominator becomes one, so`}</P>
          <Equation>{String.raw`T=\frac1{1+\sinh^2\sqrt2}=\operatorname{sech}^2\sqrt2\approx0.211,\qquad R\approx0.789.`}</Equation>
          <p>
            This is a sizable transmitted probability despite energy below the
            barrier. A finite wavepacket requires averaging this
            energy-dependent coefficient over its incident distribution.
          </p>
        </div>
      </section>
      <section id="above" className={styles.section}>
        <h2>Above the barrier, internal reflections can cancel.</h2>
        <P>{String.raw`For E greater than V₀, the interior solutions oscillate with $q=\sqrt{2m(E-V_0)}/\hbar$. Continue the matching calculation with $\kappa=iq$ to obtain`}</P>
        <NoteBox
          kind="result"
          title="Above-barrier transmission and resonances"
        >
          <Equation>{String.raw`T=\left[1+\frac{V_0^2\sin^2(qL)}{4E(E-V_0)}\right]^{-1}.`}</Equation>
          <Equation>{String.raw`qL=n\pi\quad\Rightarrow\quad T=1,\qquad n=1,2,3,\ldots`}</Equation>
          <p>
            Perfect transmission comes from coherent cancellation of reflected
            amplitudes. It does not mean each individual interface is
            reflectionless.
          </p>
        </NoteBox>
        <P>{String.raw`At E = V₀ the formula appears singular, but $\sin(qL)/q\to L$. The exact limit is finite:`}</P>
        <Equation>{String.raw`T(E=V_0)=\left[1+\frac{mV_0L^2}{2\hbar^2}\right]^{-1}.`}</Equation>
        <p>
          The value q = 0 is therefore not an extra perfect-transmission
          resonance for a nonzero barrier width. The same limit follows by
          matching a linear interior wavefunction directly.
        </p>
      </section>
      <section id="well" className={styles.section}>
        <h2>An attractive well can also reflect an incoming particle.</h2>
        <P>{String.raw`Replace the interior potential by $-U_0$ with $U_0>0$. For scattering energy E greater than zero, all three regions support oscillating waves, but the interior wave number is larger: $q=\sqrt{2m(E+U_0)}/\hbar$. The exact coefficient is`}</P>
        <NoteBox kind="result" title="Attractive rectangular-well transmission">
          <Equation>{String.raw`T=\left[1+\frac{U_0^2\sin^2(qL)}{4E(E+U_0)}\right]^{-1}.`}</Equation>
          <Equation>{String.raw`E_n^{\mathrm{res}}=\frac{n^2\pi^2\hbar^2}{2mL^2}-U_0,\qquad E_n^{\mathrm{res}}>0.`}</Equation>
          <p>
            These are positive-energy <strong>transmission resonances</strong>,
            not the negative-energy bound states of the well. Only values above
            the exterior scattering threshold belong to this formula’s incoming
            channel.
          </p>
        </NoteBox>
        <P>{String.raw`At $qL=n\pi$, the interior accumulates an integer number of half-wavelengths and T reaches one. Away from those conditions, an attractive well can reflect particles even though classical mechanics has no turning point. Interference, rather than an energy shortfall, controls this reflection.`}</P>
        <div className={styles.workedExample}>
          <h3>Worked example · A resonance at E = U₀/2</h3>
          <P>{String.raw`Define $d=L\sqrt{2mU_0}/\hbar$. For $E/U_0=1/2$, the condition $qL=\pi$ requires $d=\pi/\sqrt{3/2}\approx2.565$. At that width, the ideal monochromatic transmission is exactly one. A packet with a broad energy spread generally has total transmission below one because nearby energies do not all meet the resonance condition.`}</P>
        </div>
      </section>
      <section id="lab" className={styles.section}>
        <h2>Compare tunneling and resonance on the same scales.</h2>
        <P>{String.raw`The lab uses the positive potential magnitude $V_s$ and defines $e=E/V_s$ and $d=L\sqrt{2mV_s}/\hbar$. For a barrier, the subthreshold decay exponent is $\kappa L=d\sqrt{1-e}$. For a well, the internal phase is $qL=d\sqrt{e+1}$.`}</P>
        <TransmissionLab />
        <p>
          Below a barrier, increasing width suppresses transmission
          exponentially once the barrier is opaque. In an oscillating interior
          region, changing width instead moves the system through interference
          peaks and valleys. The calculation assumes coherence, a real static
          potential, and equal exterior masses and potentials.
        </p>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Distinguish thresholds, resonances, and bound states.</h2>
        <div className={styles.exercise}>
          <h3>1. Shrink the scattering region</h3>
          <p>
            At fixed potential height and incident energy, what happens as L
            tends to zero?
          </p>
          <details>
            <summary>Show solution</summary>
            <p>
              T tends to one. The integrated strength tends to zero, so the
              scattering region disappears. This differs from a delta-potential
              limit, where height scales inversely with width to keep integrated
              strength fixed.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Exactly at the barrier height</h3>
          <p>Use scaled width d = 2 and energy ratio e = 1 to find T.</p>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`T=\frac1{1+d^2/4}=\frac12.`}</Equation>
            <p>
              The threshold does not give perfect transmission, despite the
              vanishing interior wave number.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. A resonance below zero?</h3>
          <p>
            The well-resonance energy expression produces a negative value for a
            chosen integer. Does it predict a perfect-transmission experiment at
            that energy?
          </p>
          <details>
            <summary>Show reasoning</summary>
            <p>
              No. With exterior potential zero, a negative energy has no
              propagating incoming channel. Bound states must instead satisfy
              decaying exterior conditions and the bound-state matching
              equations.
            </p>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original explanations, calculations, diagrams, and exercises. The
          sequence develops the scattering and square-well resonance topics of{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/lecture-notes/">
            Barton Zwiebach’s MIT 8.04 lecture-note sets 16–17
          </a>
          , Spring 2016, with a rectangular-barrier extension. Numbering is
          local to this notebook.
        </p>
      </div>
    </QuantumLesson>
  );
}
