import { Equation, MathParagraph } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";

export function CertaintySection() {
  return (
    <section id="risk" className={styles.section}>
      <h2>Understand the value of certainty</h2>
      <p>
        With square root utility, more wealth is always better, but each extra
        pound contributes less utility as wealth grows. This is{" "}
        <strong>diminishing marginal utility</strong>. A curve with this
        property is concave: it rises while becoming flatter.
      </p>
      <p>
        For equal £25 increases, moving from £0 to £25 adds 5 utility units,
        while moving from £100 to £125 adds only about 1.18. The same extra
        money matters more when starting with less wealth. This helps explain
        why a possible loss can outweigh the appeal of a possible gain.
      </p>
      <NoteBox title="Risk aversion compares a lottery with its own average">
        <p>
          A <strong>risk averse</strong> person weakly prefers a guaranteed
          amount equal to a lottery’s expected wealth to the lottery itself.
          “Weakly” allows indifference. In expected utility theory, concave
          utility expresses this preference.
        </p>
        <Equation>
          {
            "\\underbrace{u(E[W])}_{\\text{utility of certain average wealth}}\\;\\ge\\;\\underbrace{E[u(W)]}_{\\text{average utility of risky wealth}}."
          }
        </Equation>
        <p>
          The placement of the expectation matters: on the left, average the
          money first and then evaluate it; on the right, evaluate each possible
          outcome first and then average.
        </p>
      </NoteBox>
      <p>
        For our equal chance of £196 or £16, expected wealth is £106 and
        expected utility is 9. Receiving £106 for certain gives utility
        approximately 10.30. Thus the comparison defining risk aversion is
        certain £106 versus the lottery. The earlier certain £100 is a separate
        alternative, which also beats this lottery because its utility is 10.
      </p>
      <NoteBox title="Three attitudes to risk">
        <ul>
          <li>
            <strong>Risk aversion:</strong> concave utility makes certain
            average wealth at least as attractive as the lottery. Strict
            concavity gives a strict preference for certainty for a nonconstant
            lottery.
          </li>
          <li>
            <strong>Risk neutrality:</strong> increasing linear utility makes
            the two equally attractive. Only expected wealth matters.
          </li>
          <li>
            <strong>Risk seeking:</strong> increasing convex utility makes the
            lottery at least as attractive as certain average wealth; strict
            convexity makes it strictly preferable for a nonconstant lottery.
          </li>
        </ul>
      </NoteBox>
      <h3>Convert utility back into a money amount</h3>
      <NoteBox title="Certainty equivalent">
        <p>
          The <strong>certainty equivalent</strong> is the guaranteed wealth you
          consider exactly as good as taking the lottery. It is a personal
          valuation of the risk, expressed in pounds rather than utility units.
        </p>
        <Equation>{"u(CE)=EU(L)."}</Equation>
        <p>
          We look for the money amount CE whose utility equals the lottery’s
          expected utility. With strictly increasing utility it is unique when
          it exists.
        </p>
      </NoteBox>
      <p>
        Our lottery has expected utility 9. Using square root utility, find the
        wealth whose square root is 9. Square both sides to return from utility
        units to pounds:
      </p>
      <Equation>
        {"\\sqrt{CE}=9\\quad\\Longrightarrow\\quad CE=9^2=81."}
      </Equation>
      <p>
        <strong>
          The lottery and a guaranteed £81 are equally attractive.
        </strong>{" "}
        A guaranteed amount above £81 is preferred to the lottery; an amount
        below £81 is less attractive. This is why guaranteed £100 wins, even
        though the lottery’s average wealth is £106.
      </p>
      <NoteBox kind="result" title="Risk premium is the cost of bearing risk">
        <Equation>{"\\text{Risk premium}=E[W]-CE=106-81=\\pounds25."}</Equation>
        <p>
          The risk reduces this person’s valuation from the £106 average wealth
          to a guaranteed equivalent of £81. That £25 gap is the risk premium.
          It is nonnegative for a risk averse person with increasing utility.
        </p>
      </NoteBox>
      <p>
        Equivalently, starting with a guaranteed £106, this person would give up
        £25 of that guaranteed wealth and still be as satisfied as with the
        lottery. This does not mean paying £25 out of the lottery itself:
        deducting money from every risky outcome is a different calculation.
      </p>
      <MathParagraph>
        {
          "Keep the three quantities separate: $E[W]=106$ averages money, $EU=9$ averages utility, and $CE=81$ converts that utility back into a guaranteed money amount. A positive affine change of utility scale changes the value 9, but leaves the £81 certainty equivalent and £25 risk premium unchanged."
        }
      </MathParagraph>
    </section>
  );
}
