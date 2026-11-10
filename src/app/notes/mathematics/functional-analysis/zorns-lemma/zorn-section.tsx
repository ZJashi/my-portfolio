import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ZornSection() {
  return (
    <section id="zorn" className={styles.section}>
      <span className={styles.sectionNumber}>04 / LECTURE 8</span>
      <h2>Zorn’s lemma</h2>
      <NoteBox kind="result" title="Zorn’s lemma">
        <p>
          <MathText>
            {
              "Let $P$ be a nonempty partially ordered set. If every chain in $P$ has an upper bound that belongs to $P$, then $P$ has a maximal element."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "The upper bound need not lie in the chain itself. It must lie in the ambient ordered set $P$. The hypothesis concerns all chains, including uncountable ones; checking only increasing sequences is insufficient in general."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Zorn’s lemma is used here as a set-theoretic existence principle. In the usual set-theoretic framework it is equivalent to the axiom of choice. The applications below verify its hypotheses rather than prove the principle itself."
          }
        </MathText>
      </p>
      <h3>Why the upper-bound hypothesis matters</h3>
      <p>
        <MathText>
          {
            "In all of $\\mathbb R^2$ with coordinatewise order, the chain $\\{(t,t):t\\in\\mathbb R\\}$ has no upper bound in $\\mathbb R^2$. Zorn’s hypothesis fails, and indeed there is no maximal point: adding $(1,1)$ always produces a larger one."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "On the closed triangle from the preceding example, every chain has an upper bound in the triangle. For a nonempty chain, take the suprema $s_*$ and $t_*$ of its coordinates. Given points approaching each supremum, comparability lets us put both below one chain member, implying $s_*+t_*\\leq1$. Hence $(s_*,t_*)$ is an upper bound in the triangle. This agrees with the existence of its maximal boundary points."
          }
        </MathText>
      </p>
    </section>
  );
}
