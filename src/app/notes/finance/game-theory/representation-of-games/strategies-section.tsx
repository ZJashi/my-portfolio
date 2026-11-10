import { Equation, MathParagraph } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";

export function StrategiesSection() {
  return (
    <section id="strategies" className={styles.section}>
      <h2>A strategy is a complete plan</h2>
      <p>
        An <strong>action</strong> is one choice at one decision. A{" "}
        <strong>pure strategy</strong> specifies which action a player would
        choose at every information set where it might have to move. “Pure”
        means the plan selects an action, rather than randomising.
      </p>
      <NoteBox title="Include decisions that will not actually occur">
        <p>
          A strategy answers every relevant “what if?” before we know the path
          of play. It includes choices at information sets that the other
          players’ strategies, or the player’s own earlier choices, may leave
          unreached.
        </p>
      </NoteBox>
      <p>
        In the observed-price tree, the seller has one decision and two
        strategies: H and L. The rival has two separate information sets, one
        after each price. Its plan must say what to do at both.
      </p>
      <MathParagraph>
        {
          "Write O for Out and E for Enter. In a rival strategy, the first letter is the action after H and the second is the action after L:"
        }
      </MathParagraph>
      <ul>
        <li>
          <strong>OO:</strong> stay out after either price.
        </li>
        <li>
          <strong>OE:</strong> stay out after H; enter after L.
        </li>
        <li>
          <strong>EO:</strong> enter after H; stay out after L.
        </li>
        <li>
          <strong>EE:</strong> enter after either price.
        </li>
      </ul>
      <Equation>
        {
          "S_{\\mathrm{seller}}=\\{H,L\\},\\qquad S_{\\mathrm{rival}}=\\{OO,OE,EO,EE\\}."
        }
      </Equation>
      <p>
        There are four rival strategies because there are two possible choices
        at each of two information sets: two times two. The rival acts only once
        during a particular play, but a complete plan covers both possible
        situations.
      </p>
      <p>
        In the unobserved-price version, the rival has only one information set.
        It therefore has just two pure strategies, O and E. It cannot choose
        different actions at nodes that it cannot distinguish.
      </p>
      <NoteBox title="A strategy profile chooses a plan for every player">
        <p>
          The profile (H, EO) means the seller selects H and the rival plans
          Enter after H, Out after L. The realised path is H then Enter, giving
          (0, 30). The rival’s response after L remains part of its strategy
          even though that branch is not reached.
        </p>
      </NoteBox>
    </section>
  );
}
