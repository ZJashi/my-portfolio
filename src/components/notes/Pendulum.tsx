"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Pendulum.module.css";

const G = 9.81;

// T = 4 sqrt(l/g) K(sin(theta0/2)), evaluated with the arithmetic-geometric mean.
function nonlinearPeriod(length: number, degrees: number) {
  let a = 1;
  let b = Math.cos(degrees * Math.PI / 360);
  for (let i = 0; i < 12; i++) {
    [a, b] = [(a + b) / 2, Math.sqrt(a * b)];
  }
  return 2 * Math.PI * Math.sqrt(length / G) / a;
}

export default function Pendulum() {
  const [length, setLength] = useState(1);
  const [amplitude, setAmplitude] = useState(15);
  const [running, setRunning] = useState(false);
  const [angle, setAngle] = useState(15 * Math.PI / 180);
  const motion = useRef({ theta: 15 * Math.PI / 180, omega: 0 });

  useEffect(() => {
    if (!running) return;
    let frame: number;
    let previous: number | undefined;
    const animate = (now: number) => {
      const elapsed = previous === undefined ? 0 : Math.min((now - previous) / 1000, .05);
      previous = now;
      const steps = Math.max(1, Math.ceil(elapsed / .004));
      const dt = elapsed / steps;
      // Fourth-order Runge–Kutta for theta'' = -(g/l) sin(theta).
      let { theta, omega } = motion.current;
      const acceleration = (q: number) => -G / length * Math.sin(q);
      for (let i = 0; i < steps; i++) {
        const k1q = omega, k1v = acceleration(theta);
        const k2q = omega + dt * k1v / 2, k2v = acceleration(theta + dt * k1q / 2);
        const k3q = omega + dt * k2v / 2, k3v = acceleration(theta + dt * k2q / 2);
        const k4q = omega + dt * k3v, k4v = acceleration(theta + dt * k3q);
        theta += dt / 6 * (k1q + 2 * k2q + 2 * k3q + k4q);
        omega += dt / 6 * (k1v + 2 * k2v + 2 * k3v + k4v);
      }
      motion.current = { theta, omega };
      setAngle(theta);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [running, length]);

  function reset(degrees: number) {
    setRunning(false);
    const theta = degrees * Math.PI / 180;
    motion.current = { theta, omega: 0 };
    setAngle(theta);
  }

  const radius = 95 + length * 40;
  const x = 260 + radius * Math.sin(angle);
  const y = 40 + radius * Math.cos(angle);
  const maxAngle = amplitude * Math.PI / 180;
  const smallPeriod = 2 * Math.PI * Math.sqrt(length / G);
  const fullPeriod = nonlinearPeriod(length, amplitude);

  return (
    <div className={styles.lab}>
      <div className={styles.header}><span>Explore / The simple pendulum</span><button onClick={() => setRunning(!running)} aria-pressed={running}>{running ? "Pause" : "Play"}</button></div>
      <svg viewBox="0 0 520 300" role="img" aria-label="Pendulum diagram: angle measured from the downward vertical, with the bob constrained to a circular arc." className={styles.diagram}>
        <line x1="210" y1="40" x2="310" y2="40" stroke="currentColor" strokeWidth="2" />
        <line x1="260" y1="40" x2="260" y2="270" stroke="currentColor" strokeDasharray="3 6" opacity=".2" />
        <path d={`M ${260 - radius * Math.sin(maxAngle)} ${40 + radius * Math.cos(maxAngle)} A ${radius} ${radius} 0 0 0 ${260 + radius * Math.sin(maxAngle)} ${40 + radius * Math.cos(maxAngle)}`} fill="none" stroke="currentColor" strokeDasharray="3 5" opacity=".3" />
        <path d={`M 260 82 A 42 42 0 0 ${angle >= 0 ? 0 : 1} ${260 + 42 * Math.sin(angle)} ${40 + 42 * Math.cos(angle)}`} fill="none" stroke="#659980" strokeWidth="2" />
        <line x1="260" y1="40" x2={x} y2={y} stroke="currentColor" strokeWidth="2" />
        <circle cx="260" cy="40" r="4" fill="currentColor" />
        <circle cx={x} cy={y} r="13" fill="#659980" stroke="currentColor" strokeWidth="1" />
        <text x={260 + 60 * Math.sin(angle / 2) + 9} y="100">θ</text>
        <text x={(260 + x) / 2 + 12} y={(40 + y) / 2}>ℓ</text>
        <text x="24" y="278">One coordinate. One degree of freedom.</text>
      </svg>
      <div className={styles.controls}>
        <div className={styles.control}><label htmlFor="pendulum-length">Length ℓ <output>{length.toFixed(2)} m</output></label><input id="pendulum-length" type="range" min="0.25" max="2" step="0.05" value={length} onChange={e => { setLength(Number(e.target.value)); reset(amplitude); }} /></div>
        <div className={styles.control}><label htmlFor="pendulum-amplitude">Release angle <output>{amplitude}°</output></label><input id="pendulum-amplitude" type="range" min="5" max="60" step="1" value={amplitude} onChange={e => { const value = Number(e.target.value); setAmplitude(value); reset(value); }} /></div>
      </div>
      <div className={styles.results}><div><span>Small-angle period</span><strong>{smallPeriod.toFixed(3)} s</strong></div><div><span>Full nonlinear period</span><strong>{fullPeriod.toFixed(3)} s</strong></div></div>
      <div className={styles.caption}>Released from rest, without friction; g = 9.81 m/s². Animation integrates the full sine equation. At {amplitude}°, the full period is {((fullPeriod / smallPeriod - 1) * 100).toFixed(1)}% longer than the small-angle estimate. Changing a slider resets the release. The diagram rescales length to fit.</div>
    </div>
  );
}
