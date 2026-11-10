"use client";
import { useState } from "react";
import styles from "@/app/notes/notes.styles";

/** Equal exterior potentials and mass; e = E/Vs, d = L sqrt(2mVs)/hbar. */
export function slabTransmission(e: number, d: number, well: boolean) {
  const delta = well ? e + 1 : e - 1;
  const factor =
    Math.abs(delta) < 1e-8
      ? d
      : delta > 0
        ? Math.sin(d * Math.sqrt(delta)) / Math.sqrt(delta)
        : Math.sinh(d * Math.sqrt(-delta)) / Math.sqrt(-delta);
  return 1 / (1 + (factor * factor) / (4 * e));
}
export default function TransmissionLab() {
  const [energy, setEnergy] = useState(0.5);
  const [width, setWidth] = useState(2);
  const [well, setWell] = useState(false);
  const transmission = slabTransmission(energy, width, well);
  const curve = Array.from({ length: 581 }, (_, i) => {
    const e = 0.1 + (i * 2.9) / 580;
    return `${i ? "L" : "M"}${(40 + (520 * (e - 0.1)) / 2.9).toFixed(4)},${(215 - 170 * slabTransmission(e, width, well)).toFixed(4)}`;
  }).join(" ");
  return (
    <div
      className={styles.energyLab}
      aria-label="Barrier and well transmission lab"
    >
      <div className={styles.labHeading}>
        <span>EXPLORE / TRANSMISSION & RESONANCE</span>
        <button
          type="button"
          onClick={() => {
            setEnergy(0.5);
            setWidth(2);
            setWell(false);
          }}
        >
          Reset
        </button>
      </div>
      <p>
        Compare a positive rectangular barrier with a negative rectangular well.
        The potential is zero on both exterior sides. Vₛ is the positive
        magnitude of the slab potential.
      </p>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 600 265"
          role="img"
          aria-labelledby="transmission-title transmission-desc"
        >
          <title id="transmission-title">
            Transmission probability versus incident energy
          </title>
          <desc id="transmission-desc">
            {well ? "Attractive well" : "Repulsive barrier"}, dimensionless
            width {width.toFixed(2)}. At energy ratio {energy.toFixed(2)},
            transmission is {transmission.toFixed(4)}. The horizontal axis spans
            energy ratios 0.1 to 3; the vertical axis spans transmission zero to
            one.
          </desc>
          <path
            d="M40 35V215H560M40 45H560"
            fill="none"
            stroke="currentColor"
            opacity=".25"
          />
          {!well && (
            <path
              d={`M${40 + (520 * 0.9) / 2.9} 35V215`}
              fill="none"
              stroke="currentColor"
              strokeDasharray="4 5"
              opacity=".4"
            />
          )}
          <path d={curve} fill="none" stroke="currentColor" strokeWidth="2" />
          <circle
            cx={(40 + (520 * (energy - 0.1)) / 2.9).toFixed(4)}
            cy={(215 - 170 * transmission).toFixed(4)}
            r="5"
            fill="currentColor"
          />
          <g fill="currentColor" fontSize="14">
            <text x="15" y="50">
              1
            </text>
            <text x="15" y="219">
              0
            </text>
            <text x="35" y="245">
              0.1
            </text>
            <text x="548" y="245">
              3
            </text>
            <text x="245" y="258">
              Incident energy E / Vₛ
            </text>
            <text x="45" y="25">
              Transmission T
            </text>
          </g>
        </svg>
        <figcaption>
          Exact monochromatic transmission for a real rectangular potential. The
          dot marks the selected energy. For a barrier, the dashed vertical line
          marks E = Vₛ. The plotted curve samples energies; very narrow
          resonances may lie between samples.
        </figcaption>
      </figure>
      <div className={styles.labControls}>
        <label htmlFor="slab-kind">
          Potential
          <select
            id="slab-kind"
            value={well ? "well" : "barrier"}
            onChange={(e) => setWell(e.target.value === "well")}
          >
            <option value="barrier">Barrier · +Vₛ inside</option>
            <option value="well">Well · −Vₛ inside</option>
          </select>
        </label>
        <label htmlFor="slab-energy">
          Energy ratio E / Vₛ <output>{energy.toFixed(2)}</output>
          <input
            id="slab-energy"
            type="range"
            min="0.1"
            max="3"
            step="0.01"
            value={energy}
            onChange={(e) => setEnergy(Number(e.target.value))}
          />
        </label>
        <label htmlFor="slab-width">
          Scaled width d <output>{width.toFixed(2)}</output>
          <input
            id="slab-width"
            type="range"
            min="0"
            max="8"
            step="0.05"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </label>
      </div>
      <dl className={styles.labReadings}>
        <div>
          <dt>Transmission T</dt>
          <dd>{(100 * transmission).toFixed(2)}%</dd>
        </div>
        <div>
          <dt>Reflection R</dt>
          <dd>{(100 * (1 - transmission)).toFixed(2)}%</dd>
        </div>
      </dl>
      <p>
        These are current ratios for stationary waves at a single energy. A
        normalized incident wavepacket generally samples a range of energies, so
        its total transmission requires averaging over its incident momentum
        distribution.
      </p>
    </div>
  );
}
