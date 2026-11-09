"use client";
import { useState } from "react";
import styles from "@/app/notes/notes.module.css";
export default function InterferometerLab() {
  const [phase, setPhase] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const p0 = blocked ? 0.25 : Math.cos((phase * Math.PI) / 360) ** 2;
  const p1 = blocked ? 0.25 : Math.sin((phase * Math.PI) / 360) ** 2;
  return (
    <div className={styles.energyLab}>
      <div className={styles.labHeading}>
        <span>EXPLORE / TWO PATHS, ONE PHOTON</span>
        <button
          onClick={() => {
            setPhase(0);
            setBlocked(false);
          }}
        >
          Reset
        </button>
      </div>
      <p>
        Both splitters are ideal 50:50 devices. The relative phase controls
        which detector clicks. An absorber in the upper arm removes interference
        and absorbs half the incident photons.
      </p>
      <svg
        viewBox="0 0 560 290"
        role="img"
        aria-label={`Two-path interferometer. Upper arm ${blocked ? "blocked" : "open"}. Detector D0 probability ${(100 * p0).toFixed(1)} percent; D1 ${(100 * p1).toFixed(1)} percent.`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M25 150H120L260 40 400 150H525M120 150 260 250 400 150 490 230"
          opacity=".6"
        />
        <path d="m108 168 24-36m256 36 24-36" strokeWidth="5" />
        <circle cx="25" cy="150" r="5" fill="currentColor" />
        <rect
          x="235"
          y="26"
          width="50"
          height="28"
          rx="3"
          fill="var(--bg-main)"
        />
        {blocked && <path d="m170 90 20 25m-20 0 20-25" strokeWidth="4" />}
        <g fill="currentColor" stroke="none" fontSize="16" fontFamily="Georgia">
          <text x="19" y="183">
            in
          </text>
          <text x="82" y="119">
            BS₁
          </text>
          <text x="404" y="126">
            BS₂
          </text>
          <text x="246" y="46">
            φ
          </text>
          <text x="489" y="137">
            D₀
          </text>
          <text x="493" y="251">
            D₁
          </text>
          <text x="225" y="278">
            lower arm
          </text>
        </g>
      </svg>
      <div className={styles.labControls}>
        <label htmlFor="quantum-phase">
          Relative phase <output>{phase}°</output>
          <input
            id="quantum-phase"
            type="range"
            min="0"
            max="360"
            step="1"
            value={phase}
            disabled={blocked}
            onChange={(e) => setPhase(Number(e.target.value))}
          />
        </label>
        <label htmlFor="quantum-block">
          <span>Which-path interaction</span>
          <span>
            <input
              id="quantum-block"
              type="checkbox"
              checked={blocked}
              onChange={(e) => setBlocked(e.target.checked)}
            />{" "}
            Absorber in upper arm
          </span>
        </label>
      </div>
      <dl className={styles.labReadings}>
        <div>
          <dt>D₀ / incident photon</dt>
          <dd>{(100 * p0).toFixed(1)}%</dd>
        </div>
        <div>
          <dt>D₁ / incident photon</dt>
          <dd>{(100 * p1).toFixed(1)}%</dd>
        </div>
        <div>
          <dt>Absorbed</dt>
          <dd>{blocked ? "50.0" : "0.0"}%</dd>
        </div>
        <div>
          <dt>Total probability</dt>
          <dd>100%</dd>
        </div>
      </dl>
      <p className={styles.labNote}>
        Exact ideal-model probabilities, not random detections. Convention:
        splitter matrix H = (1/√2)[[1,1],[1,−1]]. Fixed optical phases are
        absorbed into the path definitions. With an absorber, probabilities are
        per incident photon, not conditioned on survival.
      </p>
    </div>
  );
}
