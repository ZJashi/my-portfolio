"use client";
import { useState } from "react";
import styles from "@/app/notes/notes.module.css";
export type AngularState = "s" | "pz" | "plus" | "minus";

/** Normalized axial spherical-harmonic densities; theta in [0, pi]. */
export function angularProbability(state: AngularState, theta: number) {
  const c = Math.cos(theta), s = Math.sin(theta);
  const density = state === "s" ? 1 / (4 * Math.PI)
    : state === "pz" ? 3 * c * c / (4 * Math.PI) : 3 * s * s / (8 * Math.PI);
  const cap = state === "s" ? (1 - c) / 2
    : state === "pz" ? (1 - c * c * c) / 2 : .5 - .75 * c + .25 * c * c * c;
  return { density, band: 2 * Math.PI * density * s, cap, magnetic: state === "plus" ? 1 : state === "minus" ? -1 : 0 };
}
export default function AngularProbabilityLab() {
  const [state, setState] = useState<AngularState>("s");
  const [angle, setAngle] = useState(60);
  const theta = angle * Math.PI / 180;
  const selected = angularProbability(state, theta);
  const coordinate = (t: number) => `${(40 + 520 * t / Math.PI).toFixed(4)},${(215 - 220 * angularProbability(state, t).band).toFixed(4)}`;
  const path = Array.from({length: 241}, (_, i) => `${i ? "L" : "M"}${coordinate(i * Math.PI / 240)}`).join(" ");
  const capPath = `M40,215 ` + Array.from({length: 121}, (_, i) => `L${coordinate(theta * i / 120)}`).join(" ") + ` L${(40 + 520 * theta / Math.PI).toFixed(4)},215Z`;
  return <div className={styles.energyLab} aria-label="Angular probability lab">
    <div className={styles.labHeading}><span>EXPLORE / ANGULAR PROBABILITY</span><button type="button" onClick={() => { setState("s"); setAngle(60); }}>Reset</button></div>
    <p>The curve is probability per polar-angle interval after integrating over all azimuths: g(θ) = 2π |Y|² sin θ for these axial states. Shading covers the north polar cap from zero to the chosen angle. It is not a radial orbital shape.</p>
    <figure className={styles.lessonFigure}><svg viewBox="0 0 600 270" role="img" aria-labelledby="angular-title angular-desc">
      <title id="angular-title">Polar-angle probability density and cap probability</title><desc id="angular-desc">State {state}, cap angle {angle} degrees. Integrated cap probability {selected.cap.toFixed(4)}. The density curve includes the spherical area factor and is normalized over angles zero to pi.</desc>
      <path d="M40 35V215H560M40 39H560" fill="none" stroke="currentColor" opacity=".25" />
      <path d={capPath} fill="currentColor" opacity=".12" />
      <path d={path} fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d={`M${(40 + 520 * theta / Math.PI).toFixed(4)} 35V215`} fill="none" stroke="currentColor" strokeDasharray="4 5" opacity=".5" />
      <g fill="currentColor" fontSize="14"><text x="10" y="44">0.8</text><text x="18" y="219">0</text><text x="35" y="240">0</text><text x="285" y="240">π/2</text><text x="550" y="240">π</text><text x="225" y="263">Polar angle θ · radians</text><text x="45" y="25">g(θ) · probability per radian</text></g>
    </svg><figcaption>Each selected angular state has unit total probability on the sphere. The m = +1 and m = −1 states have the same density but opposite Lz eigenvalues; density alone does not specify the full state.</figcaption></figure>
    <div className={styles.labControls}>
      <label htmlFor="angular-state">Angular state<select id="angular-state" value={state} onChange={e => setState(e.target.value as AngularState)}><option value="s">Y₀₀ · isotropic s</option><option value="pz">Y₁₀ · pz</option><option value="plus">Y₁₁ · m = +1</option><option value="minus">Y₁,−1 · m = −1</option></select></label>
      <label htmlFor="angular-cap">North cap angle <output>{angle}°</output><input id="angular-cap" type="range" min="0" max="180" step="1" value={angle} onChange={e => setAngle(Number(e.target.value))} /></label>
    </div>
    <dl className={styles.labReadings}><div><dt>Probability in the cap</dt><dd>{(100 * selected.cap).toFixed(2)}%</dd></div><div><dt>Density |Y|² · per steradian</dt><dd>{selected.density.toFixed(4)}</dd></div><div><dt>Lz / ℏ · definite value</dt><dd>{selected.magnetic}</dd></div></dl>
    <p>An isotropic state is uniform per solid angle, but not per polar angle: equal θ intervals contain different spherical areas. This lab integrates out the radial coordinate of a normalized product state.</p>
  </div>;
}
