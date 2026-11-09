"use client";

import { useState } from "react";
import styles from "@/app/notes/notes.module.css";

export default function ParticleEnergyLab() {
  const [mass, setMass] = useState(1);
  const [stiffness, setStiffness] = useState(4);
  const [amplitude, setAmplitude] = useState(.5);
  const [cycle, setCycle] = useState(0);
  const phase = 2 * Math.PI * cycle;
  const omega = Math.sqrt(stiffness / mass);
  const position = amplitude * Math.cos(phase);
  const velocity = -amplitude * omega * Math.sin(phase);
  const potential = .5 * stiffness * position ** 2;
  const kinetic = .5 * mass * velocity ** 2;
  const total = .5 * stiffness * amplitude ** 2;
  const period = 2 * Math.PI / omega;
  const bob = 260 + position * 180;
  const coil = Array.from({ length: 19 }, (_, i) => `${58 + i * (bob - 82) / 18},${i === 0 || i === 18 ? 95 : i % 2 ? 81 : 109}`).join(" ");
  const parabola = Array.from({ length: 61 }, (_, i) => {
    const q = -1 + i / 30;
    return `${i === 0 ? "M" : "L"}${260 + q * 180},${190 - 145 * q * q}`;
  }).join(" ");
  const energyY = 190 - 145 * amplitude ** 2;
  return <div id="particle-energy-lab" className={styles.energyLab}>
    <div className={styles.labHeading}><span>EXPLORE / A PARTICLE ON A SPRING</span><button onClick={() => { setMass(1); setStiffness(4); setAmplitude(.5); setCycle(0); }}>Reset</button></div>
    <p>Drag through a cycle. At the turning points all the energy is potential; at equilibrium it is kinetic. Change the mass: the period changes, but the total energy at a fixed release amplitude does not.</p>
    <div className={styles.labPlots}>
      <figure><svg viewBox="0 0 520 240" role="img" aria-label={`Spring particle at x = ${position.toFixed(2)} meters, with velocity ${velocity.toFixed(2)} meters per second.`} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M40 55v80m0-70-10 10m10 5-10 10m10 5-10 10m10 5-10 10M40 95h18" />
        <polyline points={coil} />
        <rect x={bob - 24} y="73" width="48" height="44" rx="3" fill="var(--bg-main)" />
        <path d="M43 119h436M260 131v44" opacity=".35" />
        <path d="M80 162H440" opacity=".3" />
        <circle cx={bob} cy="162" r="4" fill="currentColor" />
        <g fill="currentColor" stroke="none" fontSize="14" fontFamily="Georgia"><text x={bob - 6} y="101">m</text><text x="254" y="194">0</text><text x="75" y="194">−1 m</text><text x="424" y="194">1 m</text><text x="45" y="225">F = −kx · No friction</text></g>
      </svg><figcaption>The spring force always points toward x = 0.</figcaption></figure>
      <figure><svg viewBox="0 0 520 240" role="img" aria-label={`Potential energy curve with the particle's current position and a horizontal total energy line. Potential energy ${potential.toFixed(3)} joules, kinetic energy ${kinetic.toFixed(3)} joules.`} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M55 190H468M260 205V28" opacity=".3" />
        <path d={parabola} strokeWidth="2" />
        <path d={`M65 ${energyY}H460`} strokeDasharray="5 5" />
        <path d={`M${bob} ${energyY}V${190 - 145 * position ** 2}`} strokeWidth="4" opacity=".35" />
        <circle cx={bob} cy={190 - 145 * position ** 2} r="5" fill="var(--notes-accent)" />
        <g fill="currentColor" stroke="none" fontSize="14" fontFamily="Georgia"><text x="352" y="32">V = ½kx²</text><text x="65" y={energyY - 8}>E</text><text x="473" y="195">x</text><text x="80" y="225">Energy scale follows k; x scale is fixed.</text></g>
      </svg><figcaption>The gap from the curve to E is kinetic energy.</figcaption></figure>
    </div>
    <div className={styles.labControls}>
      <label htmlFor="particle-phase">Position in cycle <output>{Math.round(cycle * 100)}% · t = {(cycle * period).toFixed(2)} s</output><input id="particle-phase" type="range" min="0" max="1" step=".005" value={cycle} onChange={e => setCycle(Number(e.target.value))} /></label>
      <label htmlFor="particle-mass">Mass <output>{mass.toFixed(1)} kg</output><input id="particle-mass" type="range" min=".5" max="3" step=".1" value={mass} onChange={e => setMass(Number(e.target.value))} /></label>
      <label htmlFor="particle-stiffness">Spring constant <output>{stiffness.toFixed(1)} N/m</output><input id="particle-stiffness" type="range" min="1" max="10" step=".5" value={stiffness} onChange={e => setStiffness(Number(e.target.value))} /></label>
      <label htmlFor="particle-amplitude">Release amplitude <output>{amplitude.toFixed(2)} m</output><input id="particle-amplitude" type="range" min=".1" max=".9" step=".05" value={amplitude} onChange={e => setAmplitude(Number(e.target.value))} /></label>
    </div>
    <dl className={styles.labReadings}>
      <div><dt>Kinetic T</dt><dd>{kinetic.toFixed(3)} J</dd></div><div><dt>Potential V</dt><dd>{potential.toFixed(3)} J</dd></div><div><dt>Total E</dt><dd>{total.toFixed(3)} J</dd></div><div><dt>Period</dt><dd>{period.toFixed(3)} s</dd></div>
    </dl>
    <p className={styles.labNote}>Ideal one-dimensional spring, released from rest. Exact solution: x = A cos(ωt), ω = √(k/m). The cycle slider samples this solution; changing parameters keeps the same phase. This is a model, not measured data.</p>
  </div>;
}
