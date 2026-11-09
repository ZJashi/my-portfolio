"use client";
import { useState } from "react";
import styles from "@/app/notes/notes.module.css";

/** Exact free Gaussian density, in units with hbar = m = 1 and p0 = x0 = 0. */
export default function WavepacketLab() {
  const [width, setWidth] = useState(1);
  const [time, setTime] = useState(0);
  const sigma = Math.sqrt(width * width + time * time / (4 * width * width));
  const curve = (s: number) => Array.from({ length: 201 }, (_, i) => {
    const x = -12 + 24 * i / 200;
    const y = Math.exp(-x * x / (2 * s * s)) / (Math.sqrt(2 * Math.PI) * s);
    return `${i ? "L" : "M"}${(30 + (x + 12) * 22.5).toFixed(2)},${(225 - y * 240).toFixed(2)}`;
  }).join(" ");
  return <div className={styles.energyLab} aria-label="Free Gaussian spreading lab">
    <div className={styles.labHeading}><span>EXPLORE / FREE GAUSSIAN SPREADING</span><button type="button" onClick={() => { setWidth(1); setTime(0); }}>Reset</button></div>
    <p>Compare the initial density (dashed) with the evolved density (solid). A narrower initial packet has a larger momentum spread and spreads faster.</p>
    <figure className={styles.lessonFigure}>
      <svg viewBox="0 0 600 275" role="img" aria-labelledby="gaussian-title gaussian-desc">
        <title id="gaussian-title">Free Gaussian probability densities</title>
        <desc id="gaussian-desc">Initial standard deviation {width.toFixed(2)}. At time {time.toFixed(1)}, standard deviation {sigma.toFixed(2)}. The center stays at zero and total probability remains one. Plot shows positions minus twelve to twelve.</desc>
        <path d="M30 225H570M300 225V20" fill="none" stroke="currentColor" opacity=".25" />
        <path d={curve(width)} fill="none" stroke="currentColor" strokeDasharray="5 5" opacity=".5" />
        <path d={curve(sigma)} fill="none" stroke="currentColor" strokeWidth="2.5" />
        <g fill="currentColor" fontSize="14"><text x="30" y="255">−12</text><text x="295" y="255">0</text><text x="550" y="255">12</text><text x="35" y="25">Probability density</text></g>
      </svg>
      <figcaption>Exact Gaussian density in scaled units with ℏ = m = 1 and mean momentum zero. Curves have unit area on the whole line; tails outside this finite plot are omitted.</figcaption>
    </figure>
    <div className={styles.labControls}>
      <label htmlFor="gaussian-width">Initial width σ₀ <output>{width.toFixed(2)}</output><input id="gaussian-width" type="range" min="0.5" max="2" step="0.1" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
      <label htmlFor="gaussian-time">Time t <output>{time.toFixed(1)}</output><input id="gaussian-time" type="range" min="0" max="6" step="0.1" value={time} onChange={e => setTime(Number(e.target.value))} /></label>
    </div>
    <dl className={styles.labReadings}><div><dt>Position spread σ(t)</dt><dd>{sigma.toFixed(3)}</dd></div><div><dt>Momentum spread Δp</dt><dd>{(1 / (2 * width)).toFixed(3)}</dd></div><div><dt>Uncertainty product Δx Δp</dt><dd>{(sigma / (2 * width)).toFixed(3)}</dd></div></dl>
    <p>The initial packet saturates Δx Δp = 1/2 in these units. Free evolution keeps the momentum spread fixed while increasing position spread; it is not a measurement disturbance.</p>
  </div>;
}
