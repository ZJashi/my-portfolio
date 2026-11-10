import styles from "@/app/notes/notes.styles";
export function PracticeSection() {
  return (
    <section id="practice" className={styles.section}>
      <span className={styles.sectionNumber}>
        09 / CHECK YOUR UNDERSTANDING
      </span>
      <h2>Practice</h2>
      <p>Original exercises, separate from MIT’s assignments.</p>
      <ol>
        <li>
          For the three outcome return model, find the mean and variance of the
          gain on £1,000.
        </li>
        <li>
          For the diversification example, recompute portfolio standard
          deviation with zero correlation.
        </li>
        <li>
          In the PCA example, what fraction of total variance belongs to the
          spread component?
        </li>
        <li>
          Does zero correlation establish independence? Give the counterexample
          from these notes.
        </li>
      </ol>
      <details>
        <summary>Compare your answers</summary>
        <p>
          1. Mean gain is £40. Variance is 12,400 pounds squared and standard
          deviation is about £111.36. Multiplying a variable by 1,000 multiplies
          its variance by one million.
        </p>
        <p>2. Variance is 0.0125, so standard deviation is about 11.18%.</p>
        <p>3. The spread component accounts for 0.01/0.08 = 12.5%.</p>
        <p>
          4. No. For X uniform on −1, 0, 1 and Y = X squared, covariance is zero
          but Y is determined by X.
        </p>
      </details>
    </section>
  );
}
