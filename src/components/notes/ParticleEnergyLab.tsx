"use client";

import { ParticleEnergyPlots } from "./ParticleEnergyPlots";
import Introduction, { EnergyLabNote } from "./ParticleEnergyIntroduction";

import { ParticleEnergyReadings } from "./ParticleEnergyReadings";
import { useState } from "react";
import styles from "@/app/notes/notes.styles";

export default function ParticleEnergyLab() {
  const [mass, setMass] = useState(1);
  const [stiffness, setStiffness] = useState(4);
  const [amplitude, setAmplitude] = useState(0.5);
  const [cycle, setCycle] = useState(0);
  const phase = 2 * Math.PI * cycle;
  const omega = Math.sqrt(stiffness / mass);
  const position = amplitude * Math.cos(phase);
  const velocity = -amplitude * omega * Math.sin(phase);
  const potential = 0.5 * stiffness * position ** 2;
  const kinetic = 0.5 * mass * velocity ** 2;
  const total = 0.5 * stiffness * amplitude ** 2;
  const period = (2 * Math.PI) / omega;
  const bob = 260 + position * 180;
  const coil = Array.from(
    { length: 19 },
    (_, i) =>
      `${58 + (i * (bob - 82)) / 18},${i === 0 || i === 18 ? 95 : i % 2 ? 81 : 109}`,
  ).join(" ");
  const parabola = Array.from({ length: 61 }, (_, i) => {
    const q = -1 + i / 30;
    return `${i === 0 ? "M" : "L"}${260 + q * 180},${190 - 145 * q * q}`;
  }).join(" ");
  const energyY = 190 - 145 * amplitude ** 2;
  return (
    <div id="particle-energy-lab" className={styles.energyLab}>
      <Introduction
        onReset={() => {
          setMass(1);
          setStiffness(4);
          setAmplitude(0.5);
          setCycle(0);
        }}
      />
      <ParticleEnergyPlots
        bob={bob}
        coil={coil}
        parabola={parabola}
        energyY={energyY}
        position={position}
        velocity={velocity}
        potential={potential}
        kinetic={kinetic}
      />
      <div className={styles.labControls}>
        <label htmlFor="particle-phase">
          Position in cycle{" "}
          <output>
            {Math.round(cycle * 100)}% · t = {(cycle * period).toFixed(2)} s
          </output>
          <input
            id="particle-phase"
            type="range"
            min="0"
            max="1"
            step=".005"
            value={cycle}
            onChange={(e) => setCycle(Number(e.target.value))}
          />
        </label>
        <label htmlFor="particle-mass">
          Mass <output>{mass.toFixed(1)} kg</output>
          <input
            id="particle-mass"
            type="range"
            min=".5"
            max="3"
            step=".1"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
          />
        </label>
        <label htmlFor="particle-stiffness">
          Spring constant <output>{stiffness.toFixed(1)} N/m</output>
          <input
            id="particle-stiffness"
            type="range"
            min="1"
            max="10"
            step=".5"
            value={stiffness}
            onChange={(e) => setStiffness(Number(e.target.value))}
          />
        </label>
        <label htmlFor="particle-amplitude">
          Release amplitude <output>{amplitude.toFixed(2)} m</output>
          <input
            id="particle-amplitude"
            type="range"
            min=".1"
            max=".9"
            step=".05"
            value={amplitude}
            onChange={(e) => setAmplitude(Number(e.target.value))}
          />
        </label>
      </div>
      <ParticleEnergyReadings
        kinetic={kinetic}
        potential={potential}
        total={total}
        period={period}
      />
      <EnergyLabNote />
    </div>
  );
}
