import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ForwardsSection() {
  return (
    <section id="forwards" className={styles.section}>
      <span className={styles.sectionNumber}>02 / PRICES IMPLY RATES</span>
      <h2>Deposits and forwards</h2>
      <p>
        <MathText>
          {
            "Let $D(0,T)$ be today’s price of a certain unit paid at T. In a simple interest deposit model, $D(0,T)=1/(1+r\\alpha)$. In a frictionless single curve framework, compare investing to the end date directly with investing to the start date and locking the remaining rate."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="A forward from two discount factors">
        <Equation>
          {"F(0;T_1,T_2)=\\frac{D(0,T_1)/D(0,T_2)-1}{\\alpha_{12}}."}
        </Equation>
        <p>
          This is an annualised simple rate for the specified accrual period. A
          rate implied today is not a prediction of the rate that will be
          observed later.
        </p>
      </NoteBox>
      <p>
        <strong>Original example.</strong>
        <MathText>
          {
            " With $D(0,0.5)=0.98$, $D(0,1)=0.95$ and $\\alpha_{12}=0.5$, the forward rate is $(0.98/0.95-1)/0.5\\approx6.3158\\%$."
          }
        </MathText>
      </p>
      <p>
        A futures quote of 95.20 in a 100 minus percentage rate convention
        corresponds to 4.80%. Futures settlement and daily margining can produce
        a convexity adjustment relative to a forward; a futures rate is not
        automatically interchangeable with a forward rate.
      </p>
      <p>
        Discounting and projecting floating cash flows need compatible funding
        and collateral assumptions. When an index curve differs from the
        discount curve, retain separate projection and discount inputs rather
        than forcing all quantities into one discount factor ratio.
      </p>
    </section>
  );
}
