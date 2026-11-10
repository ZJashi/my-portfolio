import { Equation, MathParagraph } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";

export function UtilityModel() {
  return (
    <>
      <h3>When expected utility is an appropriate model</h3>
      <p>
        A consistent ranking tells us which options someone prefers. It does
        not, by itself, tell us that they compare uncertain options by averaging
        utilities. That extra structure comes from two assumptions about
        preferences over lotteries.
      </p>
      <NoteBox title="Continuity and independence">
        <p>
          <strong>Continuity:</strong> an intermediate option can be matched by
          some mixture of a better and a worse option. If you prefer a certain
          £100 to £50, and £50 to £0, there is a probability of winning £100,
          with £0 otherwise, that makes you indifferent to the certain £50. The
          probability need not be 50%: it depends on your attitude to risk.
        </p>
        <p>
          <strong>Independence:</strong> a shared extra possibility does not
          change which of two lotteries you prefer. If you prefer L to M, you
          also prefer a 50% chance of L and a 50% chance of £0 to a 50% chance
          of M and a 50% chance of £0. The £0 branch and its probability are
          identical, so the comparison still turns on L versus M.
        </p>
      </NoteBox>
      <p>
        Together with completeness and transitivity, these assumptions yield an
        expected utility representation in the finite outcome setting used here.
        They describe a model of preferences; actual choices can violate them.
      </p>
      <h3>Affine transformations change the scale of utility</h3>
      <p>
        Utility numbers are a way of representing preferences, so we can ask:
        which changes to the numbers leave every choice unchanged? Under
        certainty, we only need to preserve their order. With lotteries, the
        distances between utility numbers matter too, because we average them.
      </p>
      <NoteBox kind="result" title="Positive affine transformation">
        <Equation>{"v(x)=a\\,u(x)+b,\\qquad a>0."}</Equation>
        <p>
          <strong>
            Multiply by the same positive number, then add the same constant.
          </strong>{" "}
          Here u is the old utility scale and v is the new one. The factor a
          changes the size of a utility unit; b shifts the zero point. Neither
          changes the person’s preferences.
        </p>
        <p>
          “Affine” means a straight line transformation with an optional shift.
          “Positive” means that a is greater than zero, so higher old utility
          still means higher new utility. Setting a to zero would erase all
          comparisons; a negative a would reverse them.
        </p>
      </NoteBox>
      <p>
        For example, use the new scale “twice the old utility, plus 5”. Our safe
        £100 had utility 10, while the lottery had expected utility 9. On the
        new scale:
      </p>
      <Equation>{"v(100)=2(10)+5=25,\\qquad E[v(W)]=2(9)+5=23."}</Equation>
      <p>
        The safe option still wins. Every lottery’s expected utility is
        multiplied by the same positive factor and shifted by the same amount,
        so their ordering cannot change.
      </p>
      <MathParagraph>
        {
          "The shift is added only once to the average because the probabilities sum to 1:"
        }
      </MathParagraph>
      <Equation>
        {
          "\\sum_i p_i[au(x_i)+b]=a\\sum_i p_i u(x_i)+b\\underbrace{\\sum_i p_i}_{=1}=aEU+b."
        }
      </Equation>
      <p>
        <strong>
          This changes utility labels, not wealth or probabilities.
        </strong>{" "}
        Under the new scale, the lottery still pays £196 or £16, and its
        certainty equivalent is still £81. Its expected utility is now 23 rather
        than 9, but the money amount considered equally good is unchanged.
      </p>
      <h3>Why an increasing nonlinear transformation can fail</h3>
      <p>
        Suppose a certain outcome has utility 2. A lottery gives utility 0 or
        utility 3, each with probability one half. The original comparison
        favours certainty:
      </p>
      <Equation>{"2>\\tfrac12(0)+\\tfrac12(3)=1.5."}</Equation>
      <p>
        Now cube every outcome’s utility before averaging. Cubing preserves the
        order of the individual values, but stretches the gap between 2 and 3
        much more than the gap between 0 and 2:
      </p>
      <Equation>{"2^3=8<\\tfrac12(0^3)+\\tfrac12(3^3)=13.5."}</Equation>
      <p>
        The lottery now wins. This is a different model of risk preferences,
        rather than another scale for the same expected utility preferences.
        Notice the order of operations: we cube each outcome’s utility and then
        average; we do not cube the old average of 1.5.
      </p>
    </>
  );
}
