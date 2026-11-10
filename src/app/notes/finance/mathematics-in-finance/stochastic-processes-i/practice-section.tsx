import { MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function PracticeSection() {
  return (
    <section id="practice" className={styles.section}>
      <span className={styles.sectionNumber}>
        08 / CHECK YOUR UNDERSTANDING
      </span>
      <h2>Practice</h2>
      <p>Original exercises, separate from MIT’s assignments.</p>
      <ol>
        <li>
          A unit walk steps up with probability 0.6. Construct a martingale by
          subtracting its predictable drift.
        </li>
        <li>
          For symmetric unit steps, find the two possible values of the next
          squared martingale when the current step number is 4 and the walk is
          at 2.
        </li>
        <li>
          For a fair walk stopped at +4 or −1, compute the upper exit
          probability and expected exit time.
        </li>
        <li>Why can a martingale have a constant mean and growing variance?</li>
      </ol>
      <details>
        <summary>Compare your answers</summary>
        <p>
          <MathText>
            {
              "1. Each step has mean $0.6-0.4=0.2$, so $S_n-0.2n$ is a martingale for the natural filtration."
            }
          </MathText>
        </p>
        <p>
          <MathText>
            {
              "2. Now $S_4^2-4=0$. Next, $3^2-5=4$ or $1^2-5=-4$, each with probability one half. Their conditional mean is zero."
            }
          </MathText>
        </p>
        <p>
          <MathText>
            {
              "3. Upper exit probability is $1/5$; expected time is $4\\times1=4$ steps."
            }
          </MathText>
        </p>
        <p>
          4. The martingale condition fixes a conditional mean, not the size of
          fluctuations. Independent centred increments can add positive variance
          each step.
        </p>
      </details>
    </section>
  );
}
