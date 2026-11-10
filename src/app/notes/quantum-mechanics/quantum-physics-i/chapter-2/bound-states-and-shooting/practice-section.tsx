import styles from "../../../../notes.styles";
export function PracticeSection() {
  return (
    <section id="practice" className={styles.section}>
      <h2>Test the shape before trusting the plot.</h2>
      <div className={styles.exercise}>
        <h3>1. Positive amplitude in a forbidden region</h3>
        <p>
          If a real eigenfunction is positive where V exceeds E, what is the
          sign of its second derivative? Must its slope be positive?
        </p>
        <details>
          <summary>Show reasoning</summary>
          <p>
            The curvature is positive. Its slope need not be: a positive
            decaying exponential has negative slope and positive curvature.
            Curvature and slope are different quantities.
          </p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>2. A double-well pair</h3>
        <p>
          A symmetric double well has two low-lying energies that are extremely
          close. Must they be exactly degenerate?
        </p>
        <details>
          <summary>Show reasoning</summary>
          <p>
            No. A connected regular one-dimensional problem has nondegenerate
            bound levels. Even and odd states can become very close when a high
            central barrier weakly couples the two sides. A strictly
            disconnected limit changes the assumptions.
          </p>
        </details>
      </div>
      <div className={styles.exercise}>
        <h3>3. A small numerical tail</h3>
        <p>
          A trial curve appears to decay up to the edge of a short plot. Is that
          sufficient to identify an eigenvalue?
        </p>
        <details>
          <summary>Show reasoning</summary>
          <p>
            No. Increase the interval, refine the integration, and check
            matching to the asymptotic decaying solution. A small growing
            component may only become visible farther out.
          </p>
        </details>
      </div>
    </section>
  );
}
