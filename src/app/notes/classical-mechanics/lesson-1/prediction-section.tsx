import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import styles from "../../notes.styles";
export function PredictionSection() {
  return (
    <section id="prediction" className={styles.section}>
      <span className={styles.sectionNumber}>
        05 / FROM EQUATION TO MEASUREMENT
      </span>
      <h2>Predict the period.</h2>
      <p>
        The sine makes the pendulum equation nonlinear. For small angles
        measured in radians, sin θ ≈ θ. This turns the equation into the
        familiar harmonic oscillator:
      </p>
      <Equation>{String.raw`\ddot\theta+\omega_0^2\theta=0,\qquad \omega_0=\sqrt{\frac{g}{\ell}}.`}</Equation>
      <p>
        Released from rest at angle θ₀ at time zero, its approximate motion is
      </p>
      <Equation>{String.raw`\theta(t)=\theta_0\cos(\omega_0t).`}</Equation>
      <p>
        A cosine completes one cycle when its argument increases by 2π. The
        period, the time for a full return to the same position and direction,
        is therefore
      </p>
      <NoteBox kind="result" title="Small-angle pendulum period">
        <Equation>{String.raw`\boxed{T_0=\frac{2\pi}{\omega_0}=2\pi\sqrt{\frac{\ell}{g}}}.`}</Equation>
        <p>
          Requires <strong>small angular amplitude in radians</strong>, so that
          sine may be approximated by its argument. The period increases at
          larger amplitudes.
        </p>
      </NoteBox>
      <h3>One metre, about two seconds</h3>
      <Equation>{String.raw`\ell=1.00\,\mathrm m,\quad g=9.81\,\mathrm{m/s^2}\quad\Rightarrow\quad T_0\approx2.006\,\mathrm s.`}</Equation>
      <p>
        One trip from one side to the other takes half this time, about one
        second. A four-times-longer pendulum takes twice as long for a full
        oscillation: the period grows with the square root of length.
      </p>
      <h3>Why does mass cancel?</h3>
      <p>
        Doubling the mass doubles the gravitational force, but also doubles the
        inertia resisting acceleration. Those changes cancel in this model. The
        rod force changes with mass, while the angle’s motion does not.
      </p>
      <h3>How small is “small”?</h3>
      <p>
        The approximation comes from sin θ = θ − θ³/6 + …. At larger release
        angles, the restoring force is weaker than the linear model predicts, so
        the true period is longer. The first correction, for release amplitude
        θ₀ in radians, is
      </p>
      <Equation>{String.raw`T\approx T_0\left(1+\frac{\theta_0^2}{16}+\cdots\right).`}</Equation>
      <p>
        At 10°, the full period is about 0.19% longer than T₀. At 30°, it is
        about 1.74% longer; at 60°, about 7.32%. Use the sliders above to see
        the difference. The simulation retains sin θ, and its nonlinear period
        readout uses the full ideal-pendulum formula.
      </p>
      <div className={styles.callout}>
        <strong>Check the dimensions</strong>
        <p>
          Length divided by acceleration has units of seconds squared. Taking
          its square root gives seconds, exactly what a period needs. A formula
          proportional to ℓ/g without the square root would fail this check.
        </p>
      </div>
    </section>
  );
}
