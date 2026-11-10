"use client";
import { useState } from "react";
import { MathText } from "./Equation";
import styles from "@/app/notes/notes.styles";
export function CarnotLab() {
  const [hot, setHot] = useState(600);
  const [cold, setCold] = useState(300);
  const [heat, setHeat] = useState(1000);
  const efficiency = 1 - cold / hot;
  const rejected = (heat * cold) / hot;
  const work = heat - rejected;
  return (
    <div className={styles.energyLab}>
      <div className={styles.labHeading}>
        <span>EXPLORE / THE CARNOT LIMIT</span>
        <button
          onClick={() => {
            setHot(600);
            setCold(300);
            setHeat(1000);
          }}
        >
          Reset
        </button>
      </div>
      <p>
        Change the two reservoir temperatures and the heat input per cycle. Even
        an ideal reversible engine must reject heat to the cold reservoir.
      </p>
      <svg
        viewBox="0 0 520 290"
        role="img"
        aria-label={`Reversible engine between ${hot} and ${cold} kelvin. Heat input ${heat} joules, work output ${work.toFixed(0)} joules, heat rejected ${rejected.toFixed(0)} joules.`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <rect x="125" y="15" width="200" height="42" rx="3" />
        <rect x="163" y="107" width="124" height="60" rx="3" />
        <rect x="125" y="225" width="200" height="42" rx="3" />
        <path d="M225 57v50m-5-8 5 8 5-8M225 167v58m-5-8 5 8 5-8M287 137h144m-8-5 8 5-8 5" />
        <g fill="currentColor" stroke="none" fontSize="16" fontFamily="Georgia">
          <text x="157" y="42">
            Hot · {hot} K
          </text>
          <text x="193" y="143">
            Engine
          </text>
          <text x="150" y="252">
            Cold · {cold} K
          </text>
          <text x="242" y="85">
            Qₕ
          </text>
          <text x="242" y="202">
            Q꜀
          </text>
          <text x="350" y="122">
            W out
          </text>
        </g>
      </svg>
      <div className={styles.labControls}>
        <label htmlFor="carnot-hot">
          Hot reservoir <output>{hot} K</output>
          <input
            id="carnot-hot"
            type="range"
            min="400"
            max="1000"
            step="10"
            value={hot}
            onChange={(e) => {
              const next = Number(e.target.value);
              setHot(next);
              setCold((v) => Math.min(v, next - 50));
            }}
          />
        </label>
        <label htmlFor="carnot-cold">
          Cold reservoir <output>{cold} K</output>
          <input
            id="carnot-cold"
            type="range"
            min="200"
            max={hot - 50}
            step="10"
            value={cold}
            onChange={(e) => setCold(Number(e.target.value))}
          />
        </label>
        <label htmlFor="carnot-heat">
          Heat input per cycle <output>{heat} J</output>
          <input
            id="carnot-heat"
            type="range"
            min="500"
            max="2000"
            step="100"
            value={heat}
            onChange={(e) => setHeat(Number(e.target.value))}
          />
        </label>
      </div>
      <dl className={styles.labReadings}>
        <div>
          <dt>Maximum efficiency</dt>
          <dd>{(100 * efficiency).toFixed(1)}%</dd>
        </div>
        <div>
          <dt>Work delivered</dt>
          <dd>{work.toFixed(1)} J</dd>
        </div>
        <div>
          <dt>Heat rejected</dt>
          <dd>{rejected.toFixed(1)} J</dd>
        </div>
        <div>
          <dt>Total entropy change</dt>
          <dd>0 J/K</dd>
        </div>
      </dl>
      <p className={styles.labNote}>
        <MathText>{String.raw`Ideal reversible two-reservoir engine. $\eta=1-T_C/T_H$ and $Q_C/T_C=Q_H/T_H$. $Q_H$, $Q_C$, and $W_{\mathrm{out}}$ are positive magnitudes.`}</MathText>{" "}
        Real engines operating between these reservoirs have no greater
        efficiency.
      </p>
    </div>
  );
}
