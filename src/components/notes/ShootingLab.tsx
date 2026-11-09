"use client";
import { useState } from "react";
import styles from "@/app/notes/notes.module.css";

/** RK4 for phi'' = (q^2 - 2 epsilon) phi on the positive half-line. */
export function shootOscillator(energy: number, odd: boolean, steps = 800) {
  const h = 4 / steps;
  let value = odd ? 0 : 1;
  let slope = odd ? 1 : 0;
  const points = [{ q: 0, value, slope }];
  for (let i = 0; i < steps; i++) {
    const q = i * h;
    const acceleration = (x: number, y: number) => (x * x - 2 * energy) * y;
    const a1 = slope, b1 = acceleration(q, value);
    const a2 = slope + h * b1 / 2, b2 = acceleration(q + h / 2, value + h * a1 / 2);
    const a3 = slope + h * b2 / 2, b3 = acceleration(q + h / 2, value + h * a2 / 2);
    const a4 = slope + h * b3, b4 = acceleration(q + h, value + h * a3);
    value += h * (a1 + 2 * a2 + 2 * a3 + a4) / 6;
    slope += h * (b1 + 2 * b2 + 2 * b3 + b4) / 6;
    points.push({ q: (i + 1) * h, value, slope });
  }
  return points;
}

export default function ShootingLab() {
  const [energy, setEnergy] = useState(0.5);
  const [odd, setOdd] = useState(false);
  const points = shootOscillator(energy, odd);
  const scale = Math.max(...points.map(p => Math.abs(p.value)));
  const path = points.map((p, i) => `${i ? "L" : "M"}${(30 + p.q * 135).toFixed(4)},${(130 - p.value * 90 / scale).toFixed(4)}`).join(" ");
  const referenceScale = odd ? Math.exp(-0.5) : 1;
  const reference = points.map((p, i) => `${i ? "L" : "M"}${(30 + p.q * 135).toFixed(4)},${(130 - (odd ? p.q : 1) * Math.exp(-p.q * p.q / 2) * 90 / referenceScale).toFixed(4)}`).join(" ");
  return <div className={styles.energyLab} aria-label="Oscillator shooting lab">
    <div className={styles.labHeading}><span>EXPLORE / TRIAL-ENERGY SHOOTING</span><button type="button" onClick={() => { setOdd(false); setEnergy(0.5); }}>Reset</button></div>
    <p>Integrate from q = 0 to 4 at a trial energy ε. The solid curve is the numerical solution; the dashed curve is the lowest exact oscillator state of the selected parity. Each curve is separately rescaled to unit maximum magnitude for display, not probability normalization.</p>
    <figure className={styles.lessonFigure}><svg viewBox="0 0 600 260" role="img" aria-labelledby="shoot-title shoot-desc">
      <title id="shoot-title">Trial and exact oscillator wavefunction shapes</title><desc id="shoot-desc">{odd ? "Odd" : "Even"} initial conditions, trial energy {energy.toFixed(2)}. The endpoint amplitude before display rescaling is {points[points.length - 1].value.toExponential(3)}. A growing tail indicates that the trial state fails the bound-state condition.</desc>
      <path d="M30 130H570M30 20V230" fill="none" stroke="currentColor" opacity=".25" />
      <path d={reference} fill="none" stroke="currentColor" strokeDasharray="5 5" opacity=".5" />
      <path d={path} fill="none" stroke="currentColor" strokeWidth="2" />
      <g fill="currentColor" fontSize="14"><text x="35" y="23">Scaled real amplitude</text><text x="25" y="250">0</text><text x="560" y="250">4 · q</text></g>
    </svg><figcaption>Fourth-order Runge–Kutta integration with 800 steps. q = x/√(ℏ/mω), ε = E/(ℏω). A finite plot cannot establish square-integrability at infinity; the analytic reference supplies the comparison.</figcaption></figure>
    <div className={styles.labControls}>
      <label htmlFor="shoot-parity">Parity<select id="shoot-parity" value={odd ? "odd" : "even"} onChange={e => { const nextOdd = e.target.value === "odd"; setOdd(nextOdd); setEnergy(nextOdd ? 1.5 : 0.5); }}><option value="even">Even · φ(0) = 1, φ′(0) = 0</option><option value="odd">Odd · φ(0) = 0, φ′(0) = 1</option></select></label>
      <label htmlFor="shoot-energy">Trial energy ε <output>{energy.toFixed(2)}</output><input id="shoot-energy" type="range" min="0.2" max="3.5" step="0.05" value={energy} onChange={e => setEnergy(Number(e.target.value))} /></label>
    </div>
    <dl className={styles.labReadings}><div><dt>Unscaled trial φ(4)</dt><dd>{points[points.length - 1].value.toExponential(3)}</dd></div><div><dt>Reference energy ε</dt><dd>{odd ? "1.50" : "0.50"}</dd></div></dl>
    <p>A generic trial energy introduces a growing solution in the outer region. Even at an exact energy, roundoff eventually contaminates outward integration; the finite grid and interval are part of the numerical approximation.</p>
  </div>;
}
