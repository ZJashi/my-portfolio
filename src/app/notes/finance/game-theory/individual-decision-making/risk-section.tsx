import { Equation, MathParagraph } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import { UtilityModel } from "./utility-model";
import { CertaintySection } from "./certainty-section";
import { StrategySection } from "./strategy-section";
import styles from "@/app/notes/notes.styles";

export function RiskSection() {
  return (
    <>
      <section id="uncertainty" className={styles.section}>
        <h2>Compare uncertain outcomes</h2>
        <p>
          A <strong>lottery</strong> is any option with uncertain outcomes and
          specified probabilities. It need not be a lottery ticket: a project
          that succeeds or fails is also a lottery in this mathematical sense.
        </p>
        <MathParagraph>
          {
            "Label the possible outcomes $x_1,x_2,\\ldots$ and their probabilities $p_1,p_2,\\ldots$. Each probability is nonnegative, and they sum to 1 because one of the listed outcomes must occur. The symbol $\\sum_i$ means ‘add over all the possible outcomes’."
          }
        </MathParagraph>
        <NoteBox
          kind="result"
          title="Expected utility is a probability weighted average"
        >
          <Equation>{"EU(L)=\\sum_i p_i u(x_i)."}</Equation>
          <p>
            For lottery L, calculate the utility of each possible outcome,
            multiply it by its probability, and add the results. Choose the
            available lottery with the greatest expected utility.
          </p>
        </NoteBox>
        <p>
          An <strong>expected value</strong> is a probability weighted average,
          not a promise about what you will receive. A lottery paying £196 or
          £16 with equal probabilities has expected wealth £106, even though
          £106 is not one of its possible outcomes.
        </p>
        <h3>A safe option and a risky option</h3>
        <p>
          Compare a certain final wealth of £100 with an equal chance of final
          wealth £196 or £16. These amounts are total wealth after the decision,
          including any background wealth. Let W denote final wealth.
        </p>
        <ol>
          <li>
            <strong>Average the money.</strong> The risky option has expected
            wealth £106, which exceeds the safe option’s £100.
          </li>
          <li>
            <strong>Specify preferences.</strong> Suppose this person’s utility
            of wealth is its square root. Then utility rises as wealth rises,
            but each additional pound adds less utility than the previous one.
          </li>
          <li>
            <strong>Average the utilities.</strong> Compare the utility of the
            safe outcome with the probability weighted utilities of the risky
            outcomes.
          </li>
        </ol>
        <Equation>
          {"E[W]=\\tfrac12(196)+\\tfrac12(16)=106,\\qquad u(W)=\\sqrt W."}
        </Equation>
        <Equation>
          {
            "EU(L)=\\tfrac12\\sqrt{196}+\\tfrac12\\sqrt{16}=\\tfrac12(14)+\\tfrac12(4)=9."
          }
        </Equation>
        <MathParagraph>
          {
            "The certain option gives $u(100)=10$. Since $10>9$, this person prefers the safe £100. Expected utility is measured in utility units; 9 is not a monetary payoff of £9."
          }
        </MathParagraph>
        <p>
          The important distinction is between <strong>averaging wealth</strong>{" "}
          and <strong>averaging the utility of wealth</strong>. Taking the
          square root of £106 would evaluate receiving £106 for certain. It
          would not evaluate the lottery.
        </p>
        <UtilityModel />
      </section>
      <CertaintySection />
      <StrategySection />
    </>
  );
}
