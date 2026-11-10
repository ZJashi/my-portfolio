import styles from "@/app/notes/notes.styles";
export default function ParticleEnergyIntroduction({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <>
      <div className={styles.labHeading}>
        <span>EXPLORE / A PARTICLE ON A SPRING</span>
        <button onClick={onReset}>Reset</button>
      </div>
      <p>
        Drag through a cycle. At the turning points all the energy is potential;
        at equilibrium it is kinetic. Change the mass: the period changes, but
        the total energy at a fixed release amplitude does not.
      </p>
    </>
  );
}

export function EnergyLabNote() {
  return (
    <p className={styles.labNote}>
      Ideal one-dimensional spring, released from rest. Exact solution: x = A
      cos(ωt), ω = √(k/m). The cycle slider samples this solution; changing
      parameters keeps the same phase. This is a model, not measured data.
    </p>
  );
}
