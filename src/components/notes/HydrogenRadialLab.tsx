"use client";
import { useState } from "react";
import styles from "@/app/notes/notes.module.css";

function factorial(n: number) { let value = 1; for (let i = 2; i <= n; i++) value *= i; return value; }
function laguerre(degree: number, alpha: number, x: number) {
  if (degree === 0) return 1;
  let previous = 1, current = 1 + alpha - x;
  for (let j = 1; j < degree; j++) {
    const next = ((2 * j + 1 + alpha - x) * current - (j + alpha) * previous) / (j + 1);
    previous = current; current = next;
  }
  return current;
}
/** x = r/aZ; returns aZ^(3/2) R and the normalized density in x. */
export function hydrogenRadial(n: number, ell: number, x: number) {
  const rho = 2 * x / n;
  const normalization = (2 / n) ** 1.5 * Math.sqrt(factorial(n - ell - 1) / (2 * n * factorial(n + ell)));
  const amplitude = normalization * Math.exp(-rho / 2) * rho ** ell * laguerre(n - ell - 1, 2 * ell + 1, rho);
  return { amplitude, density: x * x * amplitude * amplitude };
}
export function hydrogenRadialProbability(n: number, ell: number, radius: number) {
  const steps = 800, h = radius / steps;
  let sum = hydrogenRadial(n, ell, 0).density + hydrogenRadial(n, ell, radius).density;
  for (let i = 1; i < steps; i++) sum += (i % 2 ? 4 : 2) * hydrogenRadial(n, ell, i * h).density;
  return sum * h / 3;
}
export default function HydrogenRadialLab() {
  const [n, setN] = useState(1);
  const [ell, setEll] = useState(0);
  const [radius, setRadius] = useState(1);
  const maximumRadius = 6 * n * n;
  const values = Array.from({ length: 481 }, (_, i) => hydrogenRadial(n, ell, maximumRadius * i / 480).density);
  const maximumDensity = Math.max(...values) * 1.1;
  const coordinate = (x: number) => `${(40 + 520 * x / maximumRadius).toFixed(4)},${(215 - 180 * hydrogenRadial(n, ell, x).density / maximumDensity).toFixed(4)}`;
  const curve = values.map((_, i) => `${i ? "L" : "M"}${coordinate(maximumRadius * i / 480)}`).join(" ");
  const shaded = `M40,215 ` + Array.from({ length: 241 }, (_, i) => `L${coordinate(radius * i / 240)}`).join(" ") + ` L${(40 + 520 * radius / maximumRadius).toFixed(4)},215Z`;
  const probability = hydrogenRadialProbability(n, ell, radius);
  return <div className={styles.energyLab} aria-label="Hydrogen radial probability lab">
    <div className={styles.labHeading}><span>EXPLORE / HYDROGENIC RADIAL STATES</span><button type="button" onClick={() => { setN(1); setEll(0); setRadius(1); }}>Reset</button></div>
    <p>Select n and ℓ, then choose a sphere radius. The curve is radial probability per unit x, where x = r/aZ. Shading counts all directions inside the sphere; it does not show the angular density.</p>
    <figure className={styles.lessonFigure}><svg viewBox="0 0 600 270" role="img" aria-labelledby="hydrogen-radial-title hydrogen-radial-desc">
      <title id="hydrogen-radial-title">Hydrogenic radial probability density</title><desc id="hydrogen-radial-desc">n equals {n}, ell equals {ell}. There are {n - ell - 1} internal radial nodes. Probability inside radius {radius.toFixed(2)} aZ is {probability.toFixed(4)}. The full radial distribution is normalized on the positive half-line.</desc>
      <path d="M40 30V215H560M40 35H560" fill="none" stroke="currentColor" opacity=".25" />
      <path d={shaded} fill="currentColor" opacity=".12" />
      <path d={curve} fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d={`M${(40 + 520 * radius / maximumRadius).toFixed(4)} 30V215`} fill="none" stroke="currentColor" strokeDasharray="4 5" opacity=".5" />
      <g fill="currentColor" fontSize="14"><text x="2" y="39">{maximumDensity.toFixed(2)}</text><text x="18" y="219">0</text><text x="35" y="241">0</text><text x="540" y="241">{maximumRadius}</text><text x="230" y="263">Radius x = r / aZ</text><text x="45" y="23">Pₓ(x) · probability per unit x</text></g>
    </svg><figcaption>Exact Coulomb bound-state functions, with numerical integration for the shaded probability. The horizontal range is 0 to 6n²; tails beyond the plot are omitted. The vertical scale adjusts to the selected state.</figcaption></figure>
    <div className={styles.labControls}>
      <label htmlFor="hydrogen-n">Principal number n<select id="hydrogen-n" value={n} onChange={e => { const next = Number(e.target.value); setN(next); setEll(Math.min(ell, next - 1)); setRadius(next * next); }}>{[1,2,3,4].map(value => <option key={value} value={value}>{value}</option>)}</select></label>
      <label htmlFor="hydrogen-ell">Orbital number ℓ<select id="hydrogen-ell" value={ell} onChange={e => setEll(Number(e.target.value))}>{Array.from({ length: n }, (_, value) => <option key={value} value={value}>{value} · {["s","p","d","f"][value]}</option>)}</select></label>
      <label htmlFor="hydrogen-radius">Sphere radius / aZ <output>{radius.toFixed(1)}</output><input id="hydrogen-radius" type="range" min="0" max={maximumRadius} step="0.1" value={radius} onChange={e => setRadius(Number(e.target.value))} /></label>
    </div>
    <dl className={styles.labReadings}><div><dt>Probability inside sphere</dt><dd>{(100 * probability).toFixed(2)}%</dd></div><div><dt>Internal radial nodes</dt><dd>{n - ell - 1}</dd></div><div><dt>Mean radius / aZ</dt><dd>{((3 * n * n - ell * (ell + 1)) / 2).toFixed(2)}</dd></div><div><dt>Energy / Coulomb binding scale</dt><dd>{(-1 / (n * n)).toFixed(4)}</dd></div></dl>
    <p>The natural length aZ includes nuclear charge and reduced mass. States with the same n share an energy in this ideal model but can have different radial probability distributions.</p>
  </div>;
}
