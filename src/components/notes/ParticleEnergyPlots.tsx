import styles from "@/app/notes/notes.styles";
export function ParticleEnergyPlots({
  bob,
  coil,
  parabola,
  energyY,
  position,
  velocity,
  potential,
  kinetic,
}: {
  bob: number;
  coil: string;
  parabola: string;
  energyY: number;
  position: number;
  velocity: number;
  potential: number;
  kinetic: number;
}) {
  return (
    <div className={styles.labPlots}>
      <figure>
        <svg
          viewBox="0 0 520 240"
          role="img"
          aria-label={`Spring particle at x = ${position.toFixed(2)} meters, with velocity ${velocity.toFixed(2)} meters per second.`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M40 55v80m0-70-10 10m10 5-10 10m10 5-10 10m10 5-10 10M40 95h18" />
          <polyline points={coil} />
          <rect
            x={bob - 24}
            y="73"
            width="48"
            height="44"
            rx="3"
            fill="var(--bg-main)"
          />
          <path d="M43 119h436M260 131v44" opacity=".35" />
          <path d="M80 162H440" opacity=".3" />
          <circle cx={bob} cy="162" r="4" fill="currentColor" />
          <g
            fill="currentColor"
            stroke="none"
            fontSize="14"
            fontFamily="Georgia"
          >
            <text x={bob - 6} y="101">
              m
            </text>
            <text x="254" y="194">
              0
            </text>
            <text x="75" y="194">
              −1 m
            </text>
            <text x="424" y="194">
              1 m
            </text>
            <text x="45" y="225">
              F = −kx · No friction
            </text>
          </g>
        </svg>
        <figcaption>The spring force always points toward x = 0.</figcaption>
      </figure>
      <figure>
        <svg
          viewBox="0 0 520 240"
          role="img"
          aria-label={`Potential energy curve with the particle's current position and a horizontal total energy line. Potential energy ${potential.toFixed(3)} joules, kinetic energy ${kinetic.toFixed(3)} joules.`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M55 190H468M260 205V28" opacity=".3" />
          <path d={parabola} strokeWidth="2" />
          <path d={`M65 ${energyY}H460`} strokeDasharray="5 5" />
          <path
            d={`M${bob} ${energyY}V${190 - 145 * position ** 2}`}
            strokeWidth="4"
            opacity=".35"
          />
          <circle
            cx={bob}
            cy={190 - 145 * position ** 2}
            r="5"
            fill="var(--notes-accent)"
          />
          <g
            fill="currentColor"
            stroke="none"
            fontSize="14"
            fontFamily="Georgia"
          >
            <text x="352" y="32">
              V = ½kx²
            </text>
            <text x="65" y={energyY - 8}>
              E
            </text>
            <text x="473" y="195">
              x
            </text>
            <text x="80" y="225">
              Energy scale follows k; x scale is fixed.
            </text>
          </g>
        </svg>
        <figcaption>The gap from the curve to E is kinetic energy.</figcaption>
      </figure>
    </div>
  );
}
