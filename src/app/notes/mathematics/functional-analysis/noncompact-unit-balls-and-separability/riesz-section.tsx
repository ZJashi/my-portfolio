import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RieszSection() {
  return (
    <section id="riesz" className={styles.section}>
      <span className={styles.sectionNumber}>02 / LECTURE 7</span>
      <h2>Riesz’s lemma</h2>
      <NoteBox kind="result" title="A unit vector separated from a subspace">
        <p>
          <MathText>
            {
              "Let $Y$ be a proper closed linear subspace of a normed space $X$. For every $0<\\varepsilon<1$, there is a vector $z\\in X$ such that"
            }
          </MathText>
        </p>
        <Equation>
          {"\\|z\\|=1,\\qquad \\inf_{y\\in Y}\\|z-y\\|>1-\\varepsilon."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Proper means $Y\\ne X$. Closedness prevents a vector outside $Y$ from having distance zero to $Y$. The conclusion is separation from the whole subspace, not merely from a chosen finite collection of its points."
          }
        </MathText>
      </p>
      <h3>Distance from an exterior point is positive</h3>
      <p>
        <MathText>{"Choose $w\\in X\\setminus Y$ and define"}</MathText>
      </p>
      <Equation>
        {"d=\\operatorname{dist}(w,Y)=\\inf_{y\\in Y}\\|w-y\\|."}
      </Equation>
      <p>
        <MathText>
          {
            "This infimum is finite because $0\\in Y$. If $d=0$, we could choose $y_n\\in Y$ with $\\|w-y_n\\|\\to0$. Then $y_n\\to w$, and closedness would imply $w\\in Y$, a contradiction. Thus $d>0$."
          }
        </MathText>
      </p>
      <h3>First consider an attained infimum</h3>
      <p>
        <MathText>
          {
            "If a point $y_0\\in Y$ happened to satisfy $\\|w-y_0\\|=d$, normalize the displacement by setting $z=(w-y_0)/d$. For every $y\\in Y$,"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|z-y\\|=\\frac{\\|w-(y_0+dy)\\|}{d}\\geq\\frac d d=1."}
      </Equation>
      <p>
        <MathText>
          {
            "The inequality holds because $y_0+dy\\in Y$ and $d$ is the infimum of the distances from $w$ to all points of $Y$. This explains the normalization, but such a minimizing point need not exist."
          }
        </MathText>
      </p>
    </section>
  );
}
