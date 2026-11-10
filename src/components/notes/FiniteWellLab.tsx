"use client";
import { useState } from "react";
import styles from "@/app/notes/notes.styles";

/** Even ground-state root for a symmetric finite well, with z0 > 0. */
export function finiteWellGroundState(z0: number) {
  let low = 0;
  let high = Math.min(z0, Math.PI / 2);
  for (let i = 0; i < 70; i++) {
    const z = (low + high) / 2;
    const w = Math.sqrt(Math.max(0, z0 * z0 - z * z));
    if (z * Math.tan(z) > w) high = z;
    else low = z;
  }
  const z = (low + high) / 2;
  const w = Math.sqrt(Math.max(0, z0 * z0 - z * z));
  const norm = 1 + Math.sin(2 * z) / (2 * z) + Math.cos(z) ** 2 / w;
  return {
    z,
    w,
    norm,
    energy: (z * z) / (z0 * z0),
    outside: Math.cos(z) ** 2 / (w * norm),
  };
}

export default function FiniteWellLab() {
  const [depth, setDepth] = useState(2);
  const state = finiteWellGroundState(depth);
  const energyY = 145 - 100 * state.energy;
  const curve = Array.from({ length: 321 }, (_, i) => {
    const y = -4 + i / 40;
    const amplitude =
      (Math.abs(y) <= 1
        ? Math.cos(state.z * y)
        : Math.cos(state.z) * Math.exp(-state.w * (Math.abs(y) - 1))) /
      Math.sqrt(state.norm);
    return `${i ? "L" : "M"}${(30 + (y + 4) * 67.5).toFixed(2)},${(180 - 140 * amplitude).toFixed(2)}`;
  }).join(" ");
  return (
    <div className={styles.energyLab} aria-label="Finite well ground-state lab">
      <div className={styles.labHeading}>
        <span>EXPLORE / FINITE-WELL GROUND STATE</span>
        <button type="button" onClick={() => setDepth(2)}>
          Reset
        </button>
      </div>
      <p>
        Change the dimensionless depth z₀. The lab solves the even ground-state
        matching condition numerically, keeping the half-width a fixed. It does
        not display excited states.
      </p>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 600 195"
          role="img"
          aria-labelledby="finite-potential-title finite-potential-desc"
        >
          <title id="finite-potential-title">
            Finite well potential and ground-state energy
          </title>
          <desc id="finite-potential-desc">
            The potential is zero inside minus a to a and V zero outside.
            Ground-state energy divided by barrier height is{" "}
            {state.energy.toFixed(3)}.
          </desc>
          <path
            d="M30 45H232.5V145H367.5V45H570"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d={`M232.5 ${energyY}H367.5`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
          <g fill="currentColor" fontSize="14">
            <text x="35" y="30">
              V / V₀ = 1 outside
            </text>
            <text x="248" y="173">
              0 inside
            </text>
            <text x="383" y={energyY + 5}>
              E / V₀ = {state.energy.toFixed(3)}
            </text>
          </g>
        </svg>
        <svg
          viewBox="0 0 600 220"
          role="img"
          aria-labelledby="finite-wave-title finite-wave-desc"
        >
          <title id="finite-wave-title">
            Normalized even ground-state amplitude
          </title>
          <desc id="finite-wave-desc">
            A cosine inside the well joins smoothly to decaying exponential
            tails outside. The plotted horizontal variable is x divided by a.
          </desc>
          <path
            d="M30 180H570M232.5 30V185M367.5 30V185"
            fill="none"
            stroke="currentColor"
            strokeDasharray="4 5"
            opacity=".3"
          />
          <path d={curve} fill="none" stroke="currentColor" strokeWidth="2.5" />
          <g fill="currentColor" fontSize="14">
            <text x="35" y="24">
              √a φ(x) · real amplitude
            </text>
            <text x="25" y="208">
              −4
            </text>
            <text x="223" y="208">
              −1
            </text>
            <text x="295" y="208">
              0
            </text>
            <text x="365" y="208">
              1
            </text>
            <text x="555" y="208">
              4
            </text>
          </g>
        </svg>
        <figcaption>
          Dashed vertical lines mark x/a = ±1. The wavefunction is normalized
          over the entire line; tails outside the plotted region are omitted.
          The potential and amplitude use separate vertical scales.
        </figcaption>
      </figure>
      <label className={styles.wellDepthControl} htmlFor="finite-well-depth">
        Dimensionless depth z₀: <output>{depth.toFixed(1)}</output>
        <input
          id="finite-well-depth"
          type="range"
          min="0.4"
          max="6"
          step="0.1"
          value={depth}
          onChange={(e) => setDepth(Number(e.target.value))}
        />
      </label>
      <dl className={styles.labReadings}>
        <div>
          <dt>Energy / barrier height</dt>
          <dd>{state.energy.toFixed(3)}</dd>
        </div>
        <div>
          <dt>Probability outside the well</dt>
          <dd>{(100 * state.outside).toFixed(1)}%</dd>
        </div>
        <div>
          <dt>Amplitude decay length / a</dt>
          <dd>{(1 / state.w).toFixed(3)}</dd>
        </div>
      </dl>
      <p>
        These are stationary bound states with zero current. Nonzero tails
        indicate barrier penetration, not a continuing escape of probability
        from the well.
      </p>
    </div>
  );
}
