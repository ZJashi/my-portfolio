import { QuantumLesson } from "@/components/notes/QuantumLesson";
import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import WavepacketLab from "@/components/notes/WavepacketLab";
export const metadata = {
  title:
    "Wavepackets, Spreading & Uncertainty | Quantum Physics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <QuantumLesson
      number="1.7"
      title="Wavepackets, Spreading & Uncertainty"
      description="Quantify localization, follow a free Gaussian packet, and distinguish intrinsic quantum spreads from measurement error."
      sections={[
        ["spread", "Defining spread"],
        ["gaussian", "Gaussian evolution"],
        ["lab", "Spreading lab"],
        ["uncertainty", "Uncertainty relation"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`A localized state needs many wave numbers. That qualitative statement now becomes quantitative: how wide is a particle’s position distribution, how broad is its momentum distribution, and how do these widths evolve? We will use standard deviations, then solve a free Gaussian packet exactly.`}</P>
      <section id="spread" className={styles.section}>
        <h2>Describe a distribution with a mean and a width.</h2>
        <P>{String.raw`For a normalized position density $\rho=|\psi|^2$, the mean position is the probability-weighted average. A distribution can have mean zero while remaining very broad, so the mean alone does not measure localization. We measure width by the root-mean-square deviation from the mean.`}</P>
        <NoteBox kind="definition" title="Expectation and standard deviation">
          <Equation>{String.raw`\langle x\rangle=\int x|\psi|^2\,dx,\qquad (\Delta x)^2=\langle(x-\langle x\rangle)^2\rangle=\langle x^2\rangle-\langle x\rangle^2.`}</Equation>
          <p>
            The integrals run over the whole line. These expressions assume the
            required moments exist. <strong>Standard deviation</strong> is a
            statistical width, not the diameter of a particle or a bound
            containing every detection.
          </p>
        </NoteBox>
        <P>{String.raw`Momentum has its own distribution and standard deviation $\Delta p$. Repeated measurements on identically prepared systems determine these spreads. A single run does not reveal the whole distribution, and detector resolution is a separate experimental property.`}</P>
      </section>
      <section id="gaussian" className={styles.section}>
        <h2>A Gaussian moves and spreads.</h2>
        <P>{String.raw`Start with the normalized state from the previous lesson, now writing its initial position spread as $\sigma_0$. The mean position is $x_0$ and mean momentum is $p_0$.`}</P>
        <Equation>{String.raw`\psi(x,0)=\frac{1}{(2\pi\sigma_0^2)^{1/4}}\exp\!\left[-\frac{(x-x_0)^2}{4\sigma_0^2}+\frac{ip_0x}{\hbar}\right].`}</Equation>
        <P>{String.raw`For free motion, each Fourier component keeps its amplitude and gains a phase $e^{-i\hbar k^2t/(2m)}$. Evaluating the resulting Gaussian integral produces a packet with a moving center and a widening density. Define the dimensionless time $\tau=\hbar t/(2m\sigma_0^2)$.`}</P>
        <Equation>{String.raw`\psi(x,t)=\frac{(2\pi\sigma_0^2)^{-1/4}}{\sqrt{1+i\tau}}\exp\!\left[-\frac{(x-x_0-p_0t/m)^2}{4\sigma_0^2(1+i\tau)}+\frac{i}{\hbar}\left(p_0x-\frac{p_0^2t}{2m}\right)\right].`}</Equation>
        <P>{String.raw`Take the squared modulus. The prefactor contributes $1/\sqrt{1+\tau^2}$ and the real part of $1/(1+i\tau)$ is $1/(1+\tau^2)$. Together they give a normalized Gaussian density with width $\sigma(t)$.`}</P>
        <NoteBox kind="result" title="Exact free Gaussian spreading">
          <Equation>{String.raw`\langle x\rangle_t=x_0+\frac{p_0}{m}t,\qquad \Delta x(t)=\sigma(t)=\sigma_0\sqrt{1+\left(\frac{\hbar t}{2m\sigma_0^2}\right)^2}.`}</Equation>
          <Equation>{String.raw`\rho(x,t)=\frac{1}{\sqrt{2\pi}\sigma(t)}\exp\!\left[-\frac{(x-\langle x\rangle_t)^2}{2\sigma(t)^2}\right].`}</Equation>
          <p>
            Assumptions: <strong>free, nonrelativistic evolution</strong> on the
            line and the unchirped Gaussian initial state shown above. A general
            packet need not have this shape or width law.
          </p>
        </NoteBox>
        <div className={styles.workedExample}>
          <h3>Worked example · When does the width double?</h3>
          <P>{String.raw`Set $\sigma(t)=2\sigma_0$. Squaring the width ratio gives $1+\tau^2=4$, so`}</P>
          <Equation>{String.raw`t_{\mathrm{double}}=\frac{2\sqrt3\,m\sigma_0^2}{\hbar}.`}</Equation>
          <P>{String.raw`For an electron with $\sigma_0=1.00\,\mathrm{nm}$, this is approximately $2.99\times10^{-14}\,\mathrm s$. A smaller initial width leads to faster spreading because it requires a broader range of momenta.`}</P>
        </div>
      </section>
      <section id="lab" className={styles.section}>
        <h2>Separate translation from spreading.</h2>
        <WavepacketLab />
        <p>
          The lab fixes the mean momentum at zero, so all visible change comes
          from spreading. Nonzero mean momentum would move the center while
          leaving this width law unchanged.
        </p>
      </section>
      <section id="uncertainty" className={styles.section}>
        <h2>Localization has a momentum cost.</h2>
        <NoteBox kind="law" title="Position–momentum uncertainty relation">
          <Equation>{String.raw`\Delta x\,\Delta p\ge\frac{\hbar}{2}.`}</Equation>
          <p>
            This concerns{" "}
            <strong>standard deviations in the same preparation</strong>, with
            finite variances and suitable operator domains. It is not a claim
            that an imperfect measuring device causes every quantum spread.
          </p>
        </NoteBox>
        <P>{String.raw`A useful proof starts by subtracting the means: $X=\hat x-\langle x\rangle$ and $P=\hat p-\langle p\rangle$. Cauchy–Schwarz bounds the product of their squared norms. The modulus of their inner product is at least the magnitude of its imaginary part, which is fixed by the commutator.`}</P>
        <Equation>{String.raw`(\Delta x)^2(\Delta p)^2\ge|\langle X\psi|P\psi\rangle|^2\ge\left|\frac{\langle[\hat x,\hat p]\rangle}{2i}\right|^2=\frac{\hbar^2}{4}.`}</Equation>
        <P>{String.raw`Here $[\hat x,\hat p]=i\hbar$ on an appropriate common domain. For the initial Gaussian above, Fourier transformation gives $\Delta p=\hbar/(2\sigma_0)$, so it saturates the bound at time zero. During free evolution the momentum distribution stays fixed, while position spread increases.`}</P>
        <Equation>{String.raw`\Delta x(t)\Delta p=\frac{\hbar}{2}\sqrt{1+\tau^2}.`}</Equation>
        <p>
          Equality in the simple product bound is not preserved for this
          expanding packet. Its position and momentum become correlated. Other
          preparations, including packets with an initial spatially varying
          phase, can initially contract; spreading is not a universal monotonic
          rule for every free state.
        </p>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Check which width is being quoted.</h2>
        <div className={styles.exercise}>
          <h3>1. Localization bound</h3>
          <P>{String.raw`If $\Delta x=0.50\,\mathrm{nm}$, what is the smallest allowed momentum standard deviation?`}</P>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\Delta p_{\min}=\frac{\hbar}{2\Delta x}\approx1.05\times10^{-25}\,\mathrm{kg\,m/s}.`}</Equation>
            <p>
              A minimum-uncertainty Gaussian can attain this bound; arbitrary
              states can have larger momentum spreads.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Halve the initial width</h3>
          <p>
            For the same mass, how does halving the Gaussian’s initial width
            change its width-doubling time?
          </p>
          <details>
            <summary>Show reasoning</summary>
            <p>
              The doubling time is proportional to the initial variance, so it
              becomes one quarter as long. The initial momentum standard
              deviation doubles.
            </p>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. A packet with zero mean momentum</h3>
          <p>Must a free state with zero mean momentum stay the same shape?</p>
          <details>
            <summary>Show reasoning</summary>
            <p>
              No. Zero mean momentum fixes the center’s average velocity.
              Components with different momenta still accumulate different
              phases, allowing the density to spread or otherwise change shape.
            </p>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original explanations, calculations, and exercises. Topic sequence
          follows{" "}
          <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/lecture-notes/">
            Barton Zwiebach’s MIT 8.04 lecture notes, Spring 2016
          </a>
          , lecture-note sets 7–8. Lesson numbering is local to this notebook.
        </p>
      </div>
    </QuantumLesson>
  );
}
