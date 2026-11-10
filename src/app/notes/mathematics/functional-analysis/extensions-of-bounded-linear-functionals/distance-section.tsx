import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function DistanceSection() {
  return (
    <section id="distance" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 13</span>
      <h2>Distance to a subspace: the easy inequality</h2>
      <p>
        <MathText>
          {
            "For a linear subspace $Y$, define $d(x,Y)=\\inf_{y\\in Y}\\|x-y\\|$. Closedness is unnecessary for defining the distance; $d(x,Y)=0$ is equivalent to $x\\in\\overline Y$. Introduce the annihilator"
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Annihilator">
        <p>
          <MathText>
            {
              "It is the space of continuous linear functionals vanishing on the subspace, not a collection of vectors orthogonal in an inner product."
            }
          </MathText>
        </p>
        <Equation>
          {"Y^\\perp=\\{L\\in X':L(y)=0\\text{ for every }y\\in Y\\}."}
        </Equation>
      </NoteBox>
      <NoteBox kind="result" title="Dual formula for distance">
        <p>
          <MathText>
            {"For every linear subspace $Y$ and every $x\\in X$,"}
          </MathText>
        </p>
        <Equation>
          {
            "d(x,Y)=\\sup_{\\substack{L\\in Y^\\perp\\\\\\|L\\|\\leq1}}|L(x)|=\\sup_{\\substack{L\\in Y^\\perp\\\\\\|L\\|\\leq1}}L(x)."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>{"For any admissible $L$ and any $y\\in Y$,"}</MathText>
      </p>
      <Equation>{"|L(x)|=|L(x-y)|\\leq\\|x-y\\|."}</Equation>
      <p>
        <MathText>
          {
            "Take the infimum over $y$, then the supremum over $L$, to obtain the upper bound. Using the unit ball avoids an empty unit sphere when $Y$ is dense in $X$: then $Y^\\perp=\\{0\\}$ and both sides are zero."
          }
        </MathText>
      </p>
    </section>
  );
}
