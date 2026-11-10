import { Equation, MathParagraph } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";

export function StrategySection() {
  return (
    <section id="strategy" className={styles.section}>
      <h2>Let another person affect the outcome</h2>
      <p>
        So far, uncertainty could have come from a coin toss. In a game it can
        come from someone else’s action. We can still evaluate our choices by
        expected utility, but now the probabilities express beliefs about what
        another person will do.
      </p>
      <p>
        Suppose a seller must quote a high price H or a low price L. At the high
        price, profit is £80 if a rival stays out of the market and £0 if it
        enters. At the low price, profit is £40 in either case. These are
        assumed profits, not prices that we need to calculate.
      </p>
      <NoteBox title="Actions, outcomes and beliefs">
        <p>
          <strong>H and L are actions:</strong> the seller controls its price.{" "}
          <strong>Entry and staying out are rival actions:</strong> the seller
          does not control them. The resulting profit depends on both choices.
        </p>
        <p>
          <strong>A belief assigns probabilities:</strong> p is the seller’s
          estimate of the chance that the rival stays out, not a fact we have
          established about the rival.
        </p>
      </NoteBox>
      <MathParagraph>
        {
          "Assume the seller is risk neutral, so we can use profit itself as utility. Let $p$ be the probability the seller assigns to the rival staying out. Then $1-p$ is the probability of entry."
        }
      </MathParagraph>
      <p>
        For H, multiply £80 by the probability of staying out and £0 by the
        probability of entry. For L, both possible profits are £40, so their
        weighted average is always £40.
      </p>
      <Equation>{"EU(H)=p\\cdot80+(1-p)\\cdot0=80p."}</Equation>
      <Equation>{"EU(L)=p\\cdot40+(1-p)\\cdot40=40."}</Equation>
      <p>
        The high price is attractive when staying out is sufficiently likely. To
        find the cutoff, set the two expected profits equal.
      </p>
      <NoteBox
        kind="result"
        title="The belief that makes the seller indifferent"
      >
        <Equation>{"80p=40\\quad\\Longrightarrow\\quad p=\\tfrac12."}</Equation>
        <p>
          At a 50% chance of no entry, the risky high price and the safe low
          price have the same expected profit. Above that probability, H wins;
          below it, L wins.
        </p>
      </NoteBox>
      <MathParagraph>
        {
          "For $p>1/2$, choose H; for $p<1/2$, choose L. At $p=1/2$, both give expected profit £40, so either is optimal. For example, $p=0.4$ gives £32 from H and £40 from L, so the low price is better."
        }
      </MathParagraph>
      <NoteBox title="Best response versus equilibrium">
        <p>
          This is a <strong>best response</strong>: the best choice given a
          belief about the rival. It is not yet an <strong>equilibrium</strong>,
          because we have not explained what the rival wants or why it would
          enter or stay out. A game model must describe both players’ choices
          and incentives. Equilibrium analysis then checks whether their choices
          and beliefs fit together.
        </p>
        <p>
          The seller’s calculation asks “What should I choose if my belief is
          p?” Equilibrium analysis also asks “Would the rival actually choose in
          a way that supports that belief?” We cannot answer the second question
          without the rival’s payoffs.
        </p>
      </NoteBox>
    </section>
  );
}
