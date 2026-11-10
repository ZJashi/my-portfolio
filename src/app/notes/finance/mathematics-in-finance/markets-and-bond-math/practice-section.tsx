import { MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function PracticeSection() {
  return (
    <section id="practice" className={styles.section}>
      <span className={styles.sectionNumber}>
        07 / CHECK YOUR UNDERSTANDING
      </span>
      <h2>Practice</h2>
      <p>
        These questions and worked examples are original study aids, separate
        from MIT’s assignments.
      </p>
      <ol>
        <li>
          What is the present value of £1,000 paid in four years at 3% effective
          annual interest?
        </li>
        <li>
          Price a two year £1,000 bond with annual £60 coupons at a 5% yield.
          Explain whether it trades above or below face value.
        </li>
        <li>
          Why can two bonds with the same maturity have different durations?
        </li>
      </ol>
      <details>
        <summary>Compare your answers</summary>
        <p>
          <MathText>{"1. $1000/(1.03)^4\\approx\\pounds888.49$."}</MathText>
        </p>
        <p>
          <MathText>
            {
              "2. $60/1.05+1060/1.05^2\\approx\\pounds1018.59$. Its coupon rate exceeds the yield, so its price exceeds face value."
            }
          </MathText>
        </p>
        <p>
          3. Duration depends on the distribution of present value across
          payment dates. Larger intermediate coupons move more weight to earlier
          dates, reducing Macaulay duration relative to a zero coupon bond of
          the same maturity.
        </p>
      </details>
    </section>
  );
}
