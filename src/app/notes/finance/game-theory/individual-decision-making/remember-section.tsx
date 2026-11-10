import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";

export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>06 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Preferences and choice">
        <ul className={styles.takeaways}>
          <li>
            <strong>Consistency.</strong> Completeness allows every pair of
            outcomes to be compared. Transitivity rules out preference cycles.
          </li>
          <li>
            <strong>Ordinal utility.</strong> Utility represents a ranking of
            certain outcomes. Any strictly increasing transformation preserves
            that ranking, but utility ratios do not measure relative happiness.
          </li>
          <li>
            <strong>Rational choice.</strong> Choose a feasible action with
            maximal utility. Rationality means consistency with preferences; it
            need not mean maximising money.
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="Uncertainty and risk">
        <ul className={styles.takeaways}>
          <li>
            <strong>Expected utility.</strong>{" "}
            <MathText>
              {
                "Under the expected utility axioms, evaluate a lottery using $EU=\\sum_i p_i u(x_i)$. Average utilities, rather than applying utility to average wealth."
              }
            </MathText>
          </li>
          <li>
            <strong>Utility scale.</strong>{" "}
            <MathText>
              {
                "A positive affine transformation $v=au+b$, $a>0$, changes utility units and the zero point. It preserves lottery choices, certainty equivalents and risk premiums. A nonlinear transformation can change risk preferences."
              }
            </MathText>
          </li>
          <li>
            <strong>Risk aversion.</strong>{" "}
            <MathText>
              {
                "Concave utility gives $u(E[W])\\ge E[u(W)]$: receiving the average wealth for certain is at least as good as facing the risk. Average money and average utility are different calculations."
              }
            </MathText>
          </li>
          <li>
            <strong>Certainty equivalent.</strong>{" "}
            <MathText>
              {
                "The certainty equivalent is guaranteed wealth considered equally good as the lottery: $u(CE)=E[u(W)]$. It is unique for strictly increasing utility when it exists. The risk premium $E[W]-CE$ measures the gap between average wealth and this guaranteed equivalent."
              }
            </MathText>
          </li>
          <li>
            <strong>Worked benchmark.</strong>{" "}
            <MathText>
              {
                "With $u(W)=\\sqrt W$, equal chances of £196 and £16 give $E[W]=106$, $EU=9$, $CE=81$ and a £25 risk premium. A certain £100 is preferred."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="definition" title="From choice to strategy">
        <ul className={styles.takeaways}>
          <li>
            <strong>Beliefs matter.</strong> An action’s expected utility can
            depend on beliefs about other people’s actions.
          </li>
          <li>
            <strong>Best response.</strong>{" "}
            <MathText>
              {
                "In the pricing example, $EU(H)=80p$ and $EU(L)=40$. High pricing is optimal for $p\\ge1/2$, with indifference at equality."
              }
            </MathText>
          </li>
          <li>
            <strong>Equilibrium requires more.</strong> A best response takes a
            belief as given. An equilibrium also requires analysing the other
            players’ incentives and the consistency of those beliefs with their
            behaviour.
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
