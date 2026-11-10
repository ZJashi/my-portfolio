import { Equation, MathParagraph } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";

export function ChoiceSection() {
  return (
    <>
      <section id="choice" className={styles.section}>
        <h2>Start with one person making a choice</h2>
        <p>
          Imagine choosing between three funding packages. You know the cost and
          conditions of each package, and you must choose one. To describe the
          decision, we need three things: the options you can actually choose,
          what each option gives you, and which consequences you prefer.
        </p>
        <p>
          An <strong>action</strong> is what you do; an <strong>outcome</strong>{" "}
          is what happens as a result. Under certainty, each action leads to a
          known outcome. Under uncertainty, the same action can lead to several
          possible outcomes.
        </p>
        <p>
          Game theory adds another ingredient: other people make choices too. In
          an auction, for example, whether your bid wins depends on the other
          bids. Before studying that interaction, we need to understand how a
          single person compares options.
        </p>
        <NoteBox title="Reading the preference symbols">
          <MathParagraph>
            {
              "The expression $x\\succeq y$ means ‘I consider outcome $x$ at least as good as outcome $y$’. It includes a tie. Write $x\\succ y$ for a strict preference and $x\\sim y$ for indifference: either outcome would suit me equally well."
            }
          </MathParagraph>
        </NoteBox>
        <p>
          The model imposes two consistency conditions on these comparisons.
        </p>
        <ul>
          <li>
            <strong>Completeness:</strong> for any two outcomes, you can say
            that the first is at least as good as the second, or the second is
            at least as good as the first, or both. You are allowed to be
            indifferent.
          </li>
          <li>
            <strong>Transitivity:</strong> if A is at least as good as B, and B
            is at least as good as C, then A must be at least as good as C.
          </li>
        </ul>
        <p>
          Suppose you strictly prefer flexible funding A to cheaper funding B,
          and B to longer term funding C. Transitivity requires you to prefer A
          to C as well. If you instead strictly prefer C to A, your comparisons
          form a cycle rather than a consistent ranking.
        </p>
        <p>
          <strong>Rationality</strong> here means choosing consistently with
          your preferences. Your preferences can include safety, flexibility or
          someone else’s wellbeing. Choosing rationally does not necessarily
          mean choosing the largest monetary payoff.
        </p>
      </section>
      <section id="utility" className={styles.section}>
        <h2>Turn the ranking into numbers</h2>
        <p>
          A <strong>utility function</strong> assigns a number to each outcome
          so that better outcomes receive larger numbers. For a finite
          collection of outcomes, this is possible whenever preferences are
          complete and transitive.
        </p>
        <MathParagraph>
          {
            "For example, $u(A)=9$, $u(B)=4$ and $u(C)=1$ encode the ranking A above B above C. The symbol $u(A)$ simply means ‘the utility number assigned to A’."
          }
        </MathParagraph>
        <NoteBox kind="result" title="Higher utility means a preferred outcome">
          <Equation>
            {"x\\succeq y\\quad\\Longleftrightarrow\\quad u(x)\\ge u(y)."}
          </Equation>
          <p>
            The double arrow means ‘if and only if’: the numerical comparison
            and the preference comparison express the same ranking.
          </p>
        </NoteBox>
        <p>
          These numbers are initially just ranking labels. Replacing 9, 4 and 1
          with 81, 16 and 1 keeps the same order. We cannot infer that A gives
          more than twice the satisfaction of B. This use of utility is called{" "}
          <strong>ordinal utility</strong>.
        </p>
        <p>
          To choose, evaluate the outcome of every feasible action and select an
          action whose outcome has the highest utility. If two actions tie for
          the highest value, both are optimal.
        </p>
        <MathParagraph>
          {
            "In compact notation, let $\\mathcal A$ be the set of available actions and $x(a)$ the outcome produced by action $a$. Then:"
          }
        </MathParagraph>
        <Equation>
          {"a^*\\in\\operatorname*{arg\\,max}_{a\\in\\mathcal A}u(x(a))."}
        </Equation>
        <p>
          Read this as: “the chosen action is one of the actions giving the
          greatest utility”. The expression arg max returns the best actions,
          rather than the utility value itself. A finite, nonempty set of
          actions always has at least one maximiser; an infinite set requires
          further conditions.
        </p>
        <p>
          So far, the outcome of each action is known. Next we ask how to
          compare an option that is safe with one whose outcome is uncertain.
        </p>
      </section>
    </>
  );
}
