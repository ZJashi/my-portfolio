"use client";
import { useState } from "react";
import styles from "@/app/notes/notes.styles";

/** Isolated symmetric transmission resonance; all energies in units Vs. */
export function resonanceProfile(detuning: number, width: number) {
  const half = width / 2;
  return {
    transmission: (half * half) / (detuning * detuning + half * half),
    phase: Math.atan2(detuning, half),
    delay: half / (detuning * detuning + half * half),
    lifetime: 1 / width,
  };
}
export default function ResonanceLab() {
  const [width, setWidth] = useState(1);
  const [detuning, setDetuning] = useState(0);
  const selected = resonanceProfile(detuning, width);
  const curve = (phase: boolean) =>
    Array.from({ length: 401 }, (_, i) => {
      const d = -3 + (6 * i) / 400;
      const result = resonanceProfile(d, width);
      const y = phase
        ? 125 - 60 * result.phase
        : 215 - 170 * result.transmission;
      return `${i ? "L" : "M"}${(40 + i * 1.3).toFixed(4)},${y.toFixed(4)}`;
    }).join(" ");
  return (
    <div className={styles.energyLab} aria-label="Isolated resonance lab">
      <div className={styles.labHeading}>
        <span>EXPLORE / RESONANCE WIDTH & PHASE</span>
        <button
          type="button"
          onClick={() => {
            setWidth(1);
            setDetuning(0);
          }}
        >
          Reset
        </button>
      </div>
      <p>
        Vary the resonance width Γ and the selected detuning E − Eᵣ. Solid:
        transmission, on the left scale. Dashed: continuous transmission phase,
        on the right scale. This is a local isolated-resonance model with a unit
        peak and no additional background phase.
      </p>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 600 265"
          role="img"
          aria-labelledby="resonance-title resonance-desc"
        >
          <title id="resonance-title">
            Lorentzian transmission and its phase
          </title>
          <desc id="resonance-desc">
            Width {width.toFixed(2)}. At detuning {detuning.toFixed(2)},
            transmission {selected.transmission.toFixed(3)}, phase{" "}
            {selected.phase.toFixed(3)} radians. A narrower resonance changes
            phase more rapidly near its center.
          </desc>
          <path
            d="M40 35V215H560M40 45H560M300 35V215M560 35V215"
            fill="none"
            stroke="currentColor"
            opacity=".25"
          />
          <path
            d={curve(false)}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d={curve(true)}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
          <circle
            cx={(300 + (detuning * 520) / 6).toFixed(4)}
            cy={(215 - selected.transmission * 170).toFixed(4)}
            r="5"
            fill="currentColor"
          />
          <g fill="currentColor" fontSize="13">
            <text x="18" y="49">
              1
            </text>
            <text x="18" y="219">
              0
            </text>
            <text x="562" y="39">
              +π/2
            </text>
            <text x="565" y="129">
              0
            </text>
            <text x="562" y="224">
              −π/2
            </text>
            <text x="35" y="241">
              −3
            </text>
            <text x="295" y="241">
              0
            </text>
            <text x="548" y="241">
              3
            </text>
            <text x="200" y="260">
              Detuning (E − Eᵣ) / Vₛ
            </text>
            <text x="40" y="23">
              T · solid
            </text>
            <text x="438" y="23">
              Phase · dashed
            </text>
          </g>
        </svg>
        <figcaption>
          Energy is measured in Vₛ and time in ℏ/Vₛ. The phase is a continuous
          branch. The curve is not a simulation of packet propagation or a full
          scattering solution far from resonance.
        </figcaption>
      </figure>
      <div className={styles.labControls}>
        <label htmlFor="res-width">
          Width Γ / Vₛ <output>{width.toFixed(2)}</output>
          <input
            id="res-width"
            type="range"
            min="0.2"
            max="2"
            step="0.05"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </label>
        <label htmlFor="res-detuning">
          Detuning / Vₛ <output>{detuning.toFixed(2)}</output>
          <input
            id="res-detuning"
            type="range"
            min="-3"
            max="3"
            step="0.05"
            value={detuning}
            onChange={(e) => setDetuning(Number(e.target.value))}
          />
        </label>
      </div>
      <dl className={styles.labReadings}>
        <div>
          <dt>Transmission</dt>
          <dd>{(100 * selected.transmission).toFixed(2)}%</dd>
        </div>
        <div>
          <dt>Phase θ · radians</dt>
          <dd>{selected.phase.toFixed(3)}</dd>
        </div>
        <div>
          <dt>Transmission phase delay · ℏ/Vₛ</dt>
          <dd>{selected.delay.toFixed(3)}</dd>
        </div>
        <div>
          <dt>Decay lifetime · ℏ/Vₛ</dt>
          <dd>{selected.lifetime.toFixed(3)}</dd>
        </div>
      </dl>
      <p>
        At resonance, the transmission phase delay is twice the exponential
        decay lifetime in this model. They are different quantities; an S-matrix
        eigenchannel uses its own phase convention and delay definition.
      </p>
    </div>
  );
}
