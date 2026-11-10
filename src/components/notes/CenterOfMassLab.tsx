"use client";
import { useState } from "react";
import styles from "@/app/notes/notes.styles";
export default function CenterOfMassLab() {
  const [mass, setMass] = useState(2);
  const [distance, setDistance] = useState(3);
  const center = (mass * distance) / (1 + mass);
  return (
    <div className={styles.energyLab}>
      <div className={styles.labHeading}>
        <span>EXPLORE / WHERE IS THE CENTER OF MASS?</span>
        <button
          onClick={() => {
            setMass(2);
            setDistance(3);
          }}
        >
          Reset
        </button>
      </div>
      <p>
        A 1 kg particle sits at x = 0. Change the second mass and its position.
        The balance point moves toward the heavier particle.
      </p>
      <svg
        viewBox="0 0 520 230"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        role="img"
        aria-label={`Masses of 1 and ${mass} kilograms at 0 and ${distance} meters. Center of mass at ${center.toFixed(2)} meters.`}
      >
        <path d="M50 140H475" opacity=".4" />
        <circle cx="60" cy="120" r="10" />
        <circle cx={60 + distance * 95} cy="120" r={8 + mass * 3} />
        <path d={`M${60 + center * 95} 147l-8 16h16Z`} fill="currentColor" />
        <path d={`M${60 + center * 95} 72v65`} strokeDasharray="3 5" />
        <g fill="currentColor" stroke="none" fontFamily="Georgia" fontSize="16">
          <text x="45" y="92">
            1 kg
          </text>
          <text x={45 + distance * 95} y="78">
            {mass} kg
          </text>
          <text x="49" y="184">
            0
          </text>
          <text x={52 + distance * 95} y="184">
            {distance} m
          </text>
          <text x={48 + center * 95} y="60">
            R
          </text>
        </g>
      </svg>
      <div className={styles.labControls}>
        <label htmlFor="system-mass">
          Second mass <output>{mass} kg</output>
          <input
            id="system-mass"
            type="range"
            min="1"
            max="5"
            step=".5"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
          />
        </label>
        <label htmlFor="system-distance">
          Second position <output>{distance} m</output>
          <input
            id="system-distance"
            type="range"
            min="1"
            max="4"
            step=".1"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </label>
      </div>
      <dl className={styles.labReadings}>
        <div>
          <dt>Total mass</dt>
          <dd>{1 + mass} kg</dd>
        </div>
        <div>
          <dt>Center of mass R</dt>
          <dd>{center.toFixed(3)} m</dd>
        </div>
      </dl>
      <p className={styles.labNote}>
        R = (m₁x₁ + m₂x₂)/(m₁ + m₂). Positions share one fixed axis. This is a
        geometric model, not a time simulation.
      </p>
    </div>
  );
}
