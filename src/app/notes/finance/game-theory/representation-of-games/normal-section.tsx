import { Equation, MathParagraph } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import local from "./representation.module.css";

export function NormalSection() {
  return (
    <>
      <section id="normal" className={styles.section}>
        <h2>Normal form compares complete plans</h2>
        <p>
          The <strong>normal form</strong>, also called strategic form, lists
          each player’s strategies and the payoffs for every combination. For
          two players with finitely many strategies, we can display it as a
          table. Rows belong to the seller; columns belong to the rival.
        </p>
        <div className={local.tableScroll}>
          <table className={local.payoffs}>
            <caption>
              Observed-price game · payoffs ordered (seller, rival)
            </caption>
            <thead>
              <tr>
                <th scope="col">Seller / Rival</th>
                {["OO", "OE", "EO", "EE"].map((s) => (
                  <th scope="col" key={s}>
                    {s}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">H</th>
                <td>(80, 0)</td>
                <td>(80, 0)</td>
                <td>(0, 30)</td>
                <td>(0, 30)</td>
              </tr>
              <tr>
                <th scope="row">L</th>
                <td>(40, 0)</td>
                <td>(40, −10)</td>
                <td>(40, 0)</td>
                <td>(40, −10)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          To fill the H row, use the first letter of each rival plan. To fill
          the L row, use the second. For example, (L, OE) reaches L then Enter,
          so its cell contains (40, −10). The O in that plan describes an
          unreached response after H.
        </p>
        <NoteBox title="Identical outcomes do not mean identical strategies">
          <p>
            Against H, both OO and OE lead to Out and give (80, 0). They differ
            in what the rival would do after L. A single observed outcome
            therefore need not reveal the rival’s complete strategy.
          </p>
        </NoteBox>
        <p>
          To convert any finite tree to normal form, list each player’s complete
          plans, take one plan per player, trace the resulting path, and record
          the payoffs. Repeat for every strategy profile.
        </p>
        <MathParagraph>
          {
            "Formally, $S_i$ is player $i$’s strategy set, and $u_i(s_1,\\ldots,s_n)$ is that player’s utility when everyone uses the listed strategies. The subscript $i$ identifies whose payoff we are reading."
          }
        </MathParagraph>
        <p>
          A normal-form table need not describe simultaneous moves. This table
          represents an observed sequential game because its columns are
          conditional plans. Conversely, the table alone does not explicitly
          show the original timing and observation structure; different trees
          can yield the same strategic form.
        </p>
      </section>
      <section id="chance" className={styles.section}>
        <h2>Chance produces lotteries over outcomes</h2>
        <p>
          A tree can also include a <strong>chance node</strong>, often labelled
          Nature. Nature does not optimise a payoff. Its branches have specified
          probabilities, such as those of a coin toss.
        </p>
        <p>
          Without chance, fixing a pure strategy for every player fixes one
          terminal outcome. With chance, the same strategy profile can lead to
          several terminal outcomes. Its normal-form payoff is then the expected
          utility over those outcomes.
        </p>
        <p>
          For example, suppose a fixed pair of plans gives utilities (8, 2) in a
          strong market with probability one quarter and (0, 6) otherwise. The
          expected payoff pair is:
        </p>
        <Equation>{"\\tfrac14(8,2)+\\tfrac34(0,6)=(2,5)."}</Equation>
        <p>
          Compute each coordinate separately: player 1 gets expected utility 2
          and player 2 gets 5. Neither outcome has to deliver exactly that pair.
          If the terminal numbers were money and players were risk averse, first
          convert each monetary outcome to its utility before averaging.
        </p>
        <NoteBox title="A random event and a belief have different roles">
          <p>
            A chance branch specifies randomness built into the model. A belief
            about a rival describes uncertainty about a deliberate choice. Both
            can enter expected utility calculations, but a rival’s incentives
            still need to be analysed.
          </p>
        </NoteBox>
      </section>
    </>
  );
}
