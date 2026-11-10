import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import { SetupSection } from "./setup-section";

export const metadata = {
  title:
    "Scattering States & the Potential Step | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="2.8"
      title="Scattering States & the Potential Step"
      description="Match incident, reflected, and transmitted amplitudes; convert them into current ratios; and distinguish penetration from transmitted flow."
      sections={[
        ["setup", "Scattering boundary conditions"],
        ["above", "Above the step"],
        ["flux", "Current & probabilities"],
        ["below", "Below the step"],
        ["packets", "Wavepacket interpretation"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`Bound states decay at infinity and have discrete energies. Scattering states instead describe an incoming wave and the outgoing waves it generates. They are generally not square-normalizable on the line at a single energy, but they are building blocks for normalizable packets. Our first example is a step extending indefinitely to the right.`}</P>
      <SetupSection />
      <section id="above" className={styles.section}>
        <h2>Continuity determines both scattering amplitudes.</h2>
        <P>{String.raw`For $E>V_0$, the right wave number is $q=\sqrt{2m(E-V_0)}/\hbar$. Left incidence and the outgoing condition select $\phi=te^{iqx}$ on the right. Continuity of value and derivative at the finite step gives`}</P>
        <Equation>{String.raw`1+r=t,\qquad k(1-r)=qt.`}</Equation>
        <NoteBox kind="result" title="Step amplitudes · E above V₀">
          <Equation>{String.raw`r=\frac{k-q}{k+q},\qquad t=\frac{2k}{k+q}.`}</Equation>
          <p>
            These amplitudes use the coordinate origin at the step. A change of
            phase convention can alter their phases, while leaving flux ratios
            unchanged.
          </p>
        </NoteBox>
        <P>{String.raw`Reflection persists even though the incident energy exceeds the potential height. The abrupt change in wave number creates reflected amplitude. A classical point particle would slow down without reflecting in this case; the wave boundary conditions give a different prediction.`}</P>
      </section>
      <section id="flux" className={styles.section}>
        <h2>
          Probability coefficients are flux ratios, not bare amplitude squares.
        </h2>
        <P>{String.raw`A traveling wave $Ae^{ikx}$ has current $j=(\hbar k/m)|A|^2$. For the incident and reflected waves the speeds have equal magnitude, but the transmitted speed differs. Consequently`}</P>
        <NoteBox kind="law" title="Reflection and transmission at an open step">
          <Equation>{String.raw`R=\frac{|j_{\mathrm{ref}}|}{j_{\mathrm{in}}}=|r|^2,\qquad T=\frac{j_{\mathrm{trans}}}{j_{\mathrm{in}}}=\frac{q}{k}|t|^2.`}</Equation>
          <Equation>{String.raw`R=\left(\frac{k-q}{k+q}\right)^2,\qquad T=\frac{4kq}{(k+q)^2},\qquad R+T=1.`}</Equation>
          <p>
            The velocity factor is essential. A transmitted amplitude greater
            than one is compatible with a transmission probability at most one.
          </p>
        </NoteBox>
        <div className={styles.workedExample}>
          <h3>Worked example · E = 4V₀/3</h3>
          <P>{String.raw`Here $q/k=\sqrt{1-V_0/E}=1/2$. Substitution gives`}</P>
          <Equation>{String.raw`r=\frac13,\quad t=\frac43,\quad R=\frac19,\quad T=\frac12\frac{16}{9}=\frac89.`}</Equation>
          <p>
            The transmitted density is larger than the incident traveling-wave
            density, but its group velocity is lower. The outgoing currents
            still add to the incoming current.
          </p>
        </div>
        <P>{String.raw`For the left superposition, interference changes the local density, but the stationary net current is $\hbar k(1-|r|^2)/m$. The interference contribution cancels from that current. Treating total local density as incident density would incorrectly mix incoming and outgoing channels.`}</P>
      </section>
      <section id="below" className={styles.section}>
        <h2>
          A semi-infinite forbidden region has a tail but no outgoing flux.
        </h2>
        <P>{String.raw`For $0<E<V_0$, set $\kappa=\sqrt{2m(V_0-E)}/\hbar$. On the right, discard the growing exponential and keep $\phi=te^{-\kappa x}$. Matching yields`}</P>
        <NoteBox
          kind="result"
          title="Subthreshold step · Total reflection with penetration"
        >
          <Equation>{String.raw`r=\frac{k-i\kappa}{k+i\kappa},\qquad t=\frac{2k}{k+i\kappa},\qquad R=1,\qquad T=0.`}</Equation>
          <p>
            The reflection amplitude has unit modulus and a phase shift. The
            right-side exponential has nonzero density but{" "}
            <strong>zero stationary probability current</strong>.
          </p>
        </NoteBox>
        <P>{String.raw`The amplitude falls over length $1/\kappa$, while the density falls over $1/(2\kappa)$. This is penetration into the barrier, not transmitted escape through it: the raised potential continues forever, so there is no second interface leading to a propagating channel. A finite barrier will change that conclusion.`}</P>
        <P>{String.raw`At the threshold E = V₀ the right equation has linear solutions rather than traveling waves with nonzero q. The outgoing solution obtained by the open-channel limit has zero transmitted current. Use the appropriate threshold limit rather than dividing by a vanishing wave number.`}</P>
      </section>
      <section id="packets" className={styles.section}>
        <h2>
          A packet turns stationary channel ratios into event probabilities.
        </h2>
        <P>{String.raw`Prepare a normalized packet far to the left with positive momenta aimed at the step. After scattering and sufficient spatial separation, its reflected and transmitted pieces can be integrated to obtain probabilities. For a narrow incident momentum distribution, the stationary R and T at the central momentum give an approximation to those probabilities.`}</P>
        <Equation>{String.raw`P_{\mathrm{trans}}=\int_0^\infty |\widetilde\psi_{\mathrm{in}}(p)|^2\,T\!\left(\frac{p^2}{2m}\right)dp.`}</Equation>
        <p>
          This asymptotic expression assumes a normalized incoming scattering
          packet in the left channel. If its energy distribution straddles the
          threshold, only its above-threshold components can propagate to the
          far right. Do not replace the integral by one central-energy value
          when T changes rapidly across the packet.
        </p>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Track the open channels and their velocities.</h2>
        <div className={styles.exercise}>
          <h3>1. A smaller wave-number mismatch</h3>
          <p>For an open step with q/k = 0.8, find R and T.</p>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`R=\left(\frac{0.2}{1.8}\right)^2=\frac1{81},\qquad T=\frac{80}{81}\approx0.9877.`}</Equation>
            <p>
              The transmitted amplitude is 10/9; squaring it without the 0.8
              velocity factor would give an unphysical result.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Nonzero tail, zero transmission</h3>
          <p>
            Does a nonzero wavefunction beyond a subthreshold upward step imply
            T &gt; 0?
          </p>
          <details>
            <summary>Show reasoning</summary>
            <p>
              No. A single decaying exponential has zero current. There is no
              far-right propagating channel for a monochromatic state below the
              semi-infinite step.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Large incident energy</h3>
          <p>What happens to reflection as E becomes much larger than V₀?</p>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`Since $q/k=\sqrt{1-V_0/E}\approx1-V_0/(2E)$, the amplitude is $r\approx V_0/(4E)$ and $R\approx V_0^2/(16E^2)$. Reflection tends to zero.`}</P>
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
