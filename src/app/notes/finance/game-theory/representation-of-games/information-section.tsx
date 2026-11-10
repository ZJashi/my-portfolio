import { NoteBox } from "@/components/notes/NoteBox";
import { TreeFigure } from "./tree-figure";
import styles from "@/app/notes/notes.styles";

export function InformationSection() {
  return (
    <section id="information" className={styles.section}>
      <h2>Information determines what a player can react to</h2>
      <p>
        Suppose the rival must commit to entering or staying out before seeing
        the seller’s price. We can keep the same branches and payoffs, but must
        change the information shown on the tree.
      </p>
      <TreeFigure hidden />
      <NoteBox title="An information set groups indistinguishable decision nodes">
        <p>
          The rival knows it is at one of the two connected nodes, but cannot
          tell which. It knows the price is H or L, without observing which one
          occurred. The available actions must be the same at both nodes.
        </p>
        <p>
          <strong>No observation means no conditional response:</strong> the
          rival cannot plan to enter only after H if it cannot recognise H when
          making its decision.
        </p>
      </NoteBox>
      <p>
        Drawing the rival below the seller does not automatically mean the rival
        observes the seller’s action. The information sets specify observation.
        This is also how a tree can represent simultaneous choices: draw one
        first for convenience, then prevent the other player from observing it.
      </p>
      <h3>Perfect information and complete information are different</h3>
      <p>
        <strong>Perfect information</strong> means a player knows the preceding
        history when choosing: each decision information set contains one node.
        The first tree has perfect information; the connected rival nodes in the
        second tree give imperfect information.
      </p>
      <p>
        <strong>Complete information</strong> concerns knowledge of players’
        payoff functions. Both versions here assume that the payoff structure is
        known to both players and is common knowledge. A hidden price choice
        creates imperfect information even when everyone knows all the payoffs.
      </p>
      <p>
        <strong>Common knowledge</strong> means everyone knows a fact, everyone
        knows that everyone knows it, and so on. Knowing the rules does not mean
        knowing which action another player will choose.
      </p>
    </section>
  );
}
