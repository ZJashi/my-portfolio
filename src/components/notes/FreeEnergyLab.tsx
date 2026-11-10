"use client";
import { useState } from "react";
import { MathText } from "./Equation";
import styles from "@/app/notes/notes.styles";
export default function FreeEnergyLab() {
  const [pressure, setPressure] = useState(1);
  const [volume, setVolume] = useState(1);
  const value = (v: number) => -Math.log(v) + pressure * v;
  const eq = 1 / pressure,
    minimum = value(eq),
    gap = value(volume) - minimum;
  const y = (f: number) => 220 - Math.min(f - minimum, 5) * 35;
  const curve = Array.from({ length: 121 }, (_, i) => {
    const v = 0.15 + (i * 2.85) / 120;
    return `${i ? "L" : "M"}${(60 + v * 140).toFixed(3)},${y(value(v)).toFixed(3)}`;
  }).join(" ");
  return (
    <div className={styles.energyLab}>
      <div className={styles.labHeading}>
        <span>EXPLORE / A GAS UNDER EXTERNAL PRESSURE</span>
        <button
          onClick={() => {
            setPressure(1);
            setVolume(1);
          }}
        >
          Reset
        </button>
      </div>
      <p>
        Keep temperature and particle number fixed. Change the external
        pressure, then move the trial piston volume to find the minimum of the
        gas-plus-reservoir potential.
      </p>
      <svg
        viewBox="0 0 520 285"
        role="img"
        aria-label={`Constrained potential has its minimum at dimensionless volume ${eq.toFixed(2)}. Trial volume ${volume.toFixed(2)} has excess potential ${gap.toFixed(3)}.`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M60 230H492M60 240V25" opacity=".4" />
        <path d={curve} strokeWidth="2" />
        <path d={`M${60 + eq * 140} 220v20`} strokeDasharray="3 4" />
        <circle cx={60 + eq * 140} cy="220" r="5" fill="currentColor" />
        <circle
          cx={60 + volume * 140}
          cy={y(value(volume))}
          r="6"
          fill="var(--bg-main)"
        />
        <g fill="currentColor" stroke="none" fontFamily="Georgia" fontSize="15">
          <text x="70" y="30">
            potential above minimum
          </text>
          <text x="447" y="257">
            volume
          </text>
          <text x={60 + eq * 140} y="275" textAnchor="middle">
            equilibrium
          </text>
        </g>
      </svg>
      <div className={styles.labControls}>
        <label htmlFor="potential-pressure">
          External pressure p <output>{pressure.toFixed(1)}</output>
          <input
            id="potential-pressure"
            type="range"
            min="1"
            max="4"
            step=".1"
            value={pressure}
            onChange={(e) => setPressure(Number(e.target.value))}
          />
        </label>
        <label htmlFor="potential-volume">
          Trial volume v <output>{volume.toFixed(2)}</output>
          <input
            id="potential-volume"
            type="range"
            min=".15"
            max="3"
            step=".01"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </label>
      </div>
      <dl className={styles.labReadings}>
        <div>
          <dt>Equilibrium volume</dt>
          <dd>{eq.toFixed(3)}</dd>
        </div>
        <div>
          <dt>Excess potential / NkᵦT</dt>
          <dd>{gap.toFixed(3)}</dd>
        </div>
      </dl>
      <p className={styles.labNote}>
        <MathText>{String.raw`Dimensionless ideal-gas model: $v=V/V_0$, $p=P_0V_0/(Nk_BT)$, and $\Phi/(Nk_BT)=-\ln v+pv+\mathrm{constant}$. The equilibrium is $v=1/p$. The vertical zero follows the minimum; this is a trial-state plot, not a dynamical simulation.`}</MathText>
      </p>
    </div>
  );
}
