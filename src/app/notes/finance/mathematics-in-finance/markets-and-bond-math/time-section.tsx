import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function TimeSection() {
  return (
    <section id="time" className={styles.section}>
      <span className={styles.sectionNumber}>02 / COMPOUNDING</span>
      <h2>The value of time</h2>
      <p>
        <MathText>
          {
            "For the calculations below, time is in years and rates are annual decimals. Begin with a constant rate $r$ and initial wealth $W_0$. Annual reinvestment multiplies wealth by $1+r$ each year; repeated multiplication gives the growth factor."
          }
        </MathText>
      </p>
      <Equation>
        {"W_n=W_0(1+r)^n,\\qquad W_t=W_0\\left(1+\\frac r m\\right)^{mt}."}
      </Equation>
      <p>
        <MathText>
          {
            "In the second expression, $r$ is a nominal annual rate compounded $m$ times per year, with $mt$ an integer. Taking the limit as $m$ increases gives continuous compounding, $W_t=W_0e^{rt}$. The same numeric nominal rate produces different effective annual growth under different conventions."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Discount factor">
        <p>
          <MathText>
            {
              "A discount factor $D(0,T)$ is the time zero value of one unit paid at time $T$. Under a constant rate, discounting reverses the corresponding growth factor."
            }
          </MathText>
        </p>
        <Equation>
          {
            "D(0,T)=(1+r)^{-T}\\quad\\text{(annual)},\\qquad D(0,T)=e^{-rT}\\quad\\text{(continuous)}."
          }
        </Equation>
      </NoteBox>
      <p>
        <strong>Original worked example.</strong> At 5% effective annual
        interest, £1,000 grows to £1,102.50 after two years. Conversely, £1,000
        due in two years has present value £907.03. The calculations use the
        same growth factor in opposite directions.
      </p>
      <Equation>
        {"1000(1.05)^2=1102.50,\\qquad \\frac{1000}{(1.05)^2}\\approx907.03."}
      </Equation>
    </section>
  );
}
