import styles from "@/app/notes/notes.styles";
export function ParticleEnergyReadings({
  kinetic,
  potential,
  total,
  period,
}: {
  kinetic: number;
  potential: number;
  total: number;
  period: number;
}) {
  return (
    <dl className={styles.labReadings}>
      <div>
        <dt>Kinetic T</dt>
        <dd>{kinetic.toFixed(3)} J</dd>
      </div>
      <div>
        <dt>Potential V</dt>
        <dd>{potential.toFixed(3)} J</dd>
      </div>
      <div>
        <dt>Total E</dt>
        <dd>{total.toFixed(3)} J</dd>
      </div>
      <div>
        <dt>Period</dt>
        <dd>{period.toFixed(3)} s</dd>
      </div>
    </dl>
  );
}
