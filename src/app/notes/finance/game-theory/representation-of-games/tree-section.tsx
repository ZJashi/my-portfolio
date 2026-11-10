import { NoteBox } from "@/components/notes/NoteBox";
import { TreeFigure } from "./tree-figure";
import styles from "@/app/notes/notes.styles";

export function TreeSection() {
  return (
    <>
      <section id="ingredients" className={styles.section}>
        <h2>Describe the situation before trying to solve it</h2>
        <p>
          Lecture 1 asked what one person should choose given a belief about
          someone else. Now we describe both sides of the interaction. A{" "}
          <strong>game</strong> specifies who chooses, what they can choose,
          what they know when choosing, and how they value the possible
          outcomes.
        </p>
        <NoteBox title="The ingredients of a game">
          <ul>
            <li>
              <strong>Players:</strong> the decision makers.
            </li>
            <li>
              <strong>Actions and timing:</strong> what each player can do, and
              when.
            </li>
            <li>
              <strong>Information:</strong> which earlier choices or chance
              events each player observes.
            </li>
            <li>
              <strong>Payoffs:</strong> each player’s utility at every possible
              end of the game.
            </li>
          </ul>
        </NoteBox>
        <p>
          Return to our seller and rival. The seller chooses a high price H or a
          low price L. The rival then chooses whether to enter the market. We
          now give the rival its own payoffs and specify whether it observes the
          price.
        </p>
        <p>
          In this illustrative model, the seller earns £80 if it chooses H and
          the rival stays out, but £0 if the rival enters. At L it earns £40
          either way. The rival earns £0 from staying out, £30 from entering
          after H, and loses £10 from entering after L. Assume both players are
          risk neutral, so these profits can serve as utility payoffs.
        </p>
        <p>
          These payoff assumptions describe incentives. They do not yet tell us
          which actions will actually be chosen.{" "}
          <strong>
            A representation is a model of the game; a solution is a prediction
            about play.
          </strong>
        </p>
      </section>
      <section id="tree" className={styles.section}>
        <h2>Extensive form shows the sequence of decisions</h2>
        <p>
          A game tree, or <strong>extensive form</strong>, draws the possible
          paths of play. Begin at the root, follow an action to the next
          decision, and continue until the game ends.
        </p>
        <TreeFigure />
        <ol>
          <li>
            <strong>Start at the seller’s node.</strong> The seller chooses one
            of the two outgoing branches, H or L.
          </li>
          <li>
            <strong>Move to the rival’s node.</strong> Only one of the two rival
            nodes is reached in a particular play. Here the rival sees which
            price was selected.
          </li>
          <li>
            <strong>Read the terminal payoffs.</strong> If the path is H then
            Enter, the seller receives 0 and the rival receives 30.
          </li>
        </ol>
        <NoteBox title="Read the player order consistently">
          <p>
            The pair (0, 30) means seller utility 0 and rival utility 30. It
            does not mean a probability or a combined payoff of 30. Each player
            compares its own coordinate across outcomes.
          </p>
        </NoteBox>
        <p>
          A <strong>decision node</strong> is a point where someone chooses an
          action. A <strong>terminal node</strong> is an endpoint where no
          choices remain. The path leading to a node records the actions that
          have already happened.
        </p>
      </section>
    </>
  );
}
