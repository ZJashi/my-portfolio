"use client";
import { useState } from "react";
import { MathText } from "./Equation";
import styles from "@/app/notes/notes.styles";
const R = 8.314462618;
export function GasWorkLab() {
  const [ratio, setRatio] = useState(2);
  const [temperature, setTemperature] = useState(300);
  const work = -R * temperature * Math.log(ratio);
  const curve = Array.from({ length: 81 }, (_, i) => {
    const x = 1 + i / 20;
    return `${i ? "L" : "M"}${60 + (x - 1) * 95},${220 - 160 / x}`;
  }).join(" ");
  const area = Array.from({ length: 41 }, (_, i) => {
    const x = 1 + ((ratio - 1) * i) / 40;
    return `L${60 + (x - 1) * 95},${220 - 160 / x}`;
  }).join(" ");
  return (
    <div className={styles.energyLab}>
      <div className={styles.labHeading}>
        <span>EXPLORE / REVERSIBLE ISOTHERMAL EXPANSION</span>
        <button
          onClick={() => {
            setRatio(2);
            setTemperature(300);
          }}
        >
          Reset
        </button>
      </div>
      <p>
        One mole of ideal gas expands from 10 L while a reservoir holds its
        temperature fixed. The shaded area is work done by the gas; work added
        to the gas has the opposite sign.
      </p>
      <svg
        viewBox="0 0 520 275"
        role="img"
        aria-label={`Pressure-volume curve for isothermal expansion by a volume ratio ${ratio}. Work on the gas ${work.toFixed(0)} joules.`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M50 220H470M60 235V32" opacity=".4" />
        <path
          d={`M60 220${area}L${60 + (ratio - 1) * 95} 220Z`}
          fill="currentColor"
          fillOpacity=".12"
          stroke="none"
        />
        <path d={curve} strokeWidth="2" />
        <path
          d={`M${60 + (ratio - 1) * 95} 220V${220 - 160 / ratio}`}
          strokeDasharray="3 5"
        />
        <circle
          cx={60 + (ratio - 1) * 95}
          cy={220 - 160 / ratio}
          r="4"
          fill="currentColor"
        />
        <g fill="currentColor" stroke="none" fontFamily="Georgia" fontSize="16">
          <text x="30" y="31">
            P
          </text>
          <text x="474" y="241">
            V
          </text>
          <text x="53" y="246">
            Vᵢ
          </text>
          <text x={65 + (ratio - 1) * 95} y="241">
            V𝒻
          </text>
          <text x="245" y="61">
            PV = nRT
          </text>
          <text x="150" y="270">
            Pressure axis rescales with temperature.
          </text>
        </g>
      </svg>
      <div className={styles.labControls}>
        <label htmlFor="thermo-ratio">
          Final / initial volume <output>{ratio.toFixed(1)}</output>
          <input
            id="thermo-ratio"
            type="range"
            min="1"
            max="5"
            step=".1"
            value={ratio}
            onChange={(e) => setRatio(Number(e.target.value))}
          />
        </label>
        <label htmlFor="thermo-temperature">
          Temperature <output>{temperature} K</output>
          <input
            id="thermo-temperature"
            type="range"
            min="200"
            max="600"
            step="10"
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
          />
        </label>
      </div>
      <dl className={styles.labReadings}>
        <div>
          <dt>Work on gas</dt>
          <dd>{work.toFixed(0)} J</dd>
        </div>
        <div>
          <dt>Heat into gas</dt>
          <dd>{(-work).toFixed(0)} J</dd>
        </div>
        <div>
          <dt>Internal energy change</dt>
          <dd>0 J</dd>
        </div>
        <div>
          <dt>Final volume</dt>
          <dd>{(10 * ratio).toFixed(1)} L</dd>
        </div>
      </dl>
      <p className={styles.labNote}>
        <MathText>{String.raw`Exact ideal-gas model, $n=1\,\mathrm{mol}$. $W_{\mathrm{on}}=-nRT\ln(V_f/V_i)$ and $Q_{\mathrm{in}}=-W_{\mathrm{on}}$.`}</MathText>{" "}
        The process is reversible and isothermal, not free expansion. The graph
        is schematic and the vertical scale changes with temperature.
      </p>
    </div>
  );
}
