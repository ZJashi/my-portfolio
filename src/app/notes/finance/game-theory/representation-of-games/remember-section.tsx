import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";

export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>07 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox title="Model choices and information">
        <ul className={styles.takeaways}>
          <li>
            <strong>Game:</strong> specify players, actions, timing, information
            and payoffs before predicting behaviour.
          </li>
          <li>
            <strong>Extensive form:</strong> a tree makes the sequence of
            decisions and the information available at each decision explicit.
          </li>
          <li>
            <strong>Information set:</strong> nodes the moving player cannot
            distinguish. A strategy cannot prescribe different actions within
            the same set.
          </li>
          <li>
            <strong>Perfect versus complete:</strong> perfect information
            concerns observed history; complete information concerns knowledge
            of payoff functions.
          </li>
        </ul>
      </NoteBox>
      <NoteBox title="Separate actions, plans and outcomes">
        <ul className={styles.takeaways}>
          <li>
            <strong>Action:</strong> a choice at a particular decision.
          </li>
          <li>
            <strong>Pure strategy:</strong> a complete plan specifying an action
            at every information set of that player, including unreached ones.
          </li>
          <li>
            <strong>Strategy profile:</strong> one strategy for each player.
            Without chance, a pure profile determines a single path and outcome.
          </li>
          <li>
            <strong>Example:</strong> the observed-price rival has four plans,
            OO, OE, EO and EE. Without observing the price, it has only O or E.
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="Read payoffs and compare representations">
        <ul className={styles.takeaways}>
          <li>
            <strong>Payoff order:</strong> keep the player order fixed. In (0,
            30), the seller gets 0 and the rival gets 30.
          </li>
          <li>
            <strong>Normal form:</strong> list complete strategies, trace each
            profile through the tree and record its payoffs. A table can
            represent a sequential game.
          </li>
          <li>
            <strong>Chance:</strong> a profile can induce a lottery over
            endpoints. Average utility separately for each player to obtain
            normal-form payoffs.
          </li>
          <li>
            <strong>Representation versus solution:</strong> the tree or table
            specifies the game. It does not by itself establish how rational
            players will play.
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
