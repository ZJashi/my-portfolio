import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function CompletionSection() {
  return (
    <section id="completion" className={styles.section}>
      <span className={styles.sectionNumber}>01 / LECTURE 4</span>
      <h2>What it means to complete a space</h2>
      <p>
        <MathText>
          {
            "A normed linear space need not be complete: a sequence can be Cauchy without converging to a point of the space. A completion adds the missing limits while preserving the original linear structure and norm."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Completion theorem">
        <p>
          <MathText>
            {
              "Every normed linear space $X$ has a Banach space $\\widehat X$ and a linear isometric embedding $\\iota:X\\to\\widehat X$ whose image is dense."
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\|\\iota(x)\\|_{\\widehat X}=\\|x\\|_X,\\qquad \\overline{\\iota(X)}^{\\,\\widehat X}=\\widehat X."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "An isometric embedding preserves distances and is injective. Density means every point of $\\widehat X$ can be approximated by points from the embedded copy of $X$. We use $\\widehat X$ for the completion, reserving a bar for closure."
          }
        </MathText>
      </p>
      <h3>Why additional points may be needed</h3>
      <p>
        <MathText>
          {
            "For example, continuous functions can fail to form a complete space under an integral norm. On $C([0,1])$, take $\\|f\\|_1=\\int_0^1|f(t)|\\,dt$. Continuous ramps can approximate the step function that is zero below $1/2$ and one above $1/2$. Their transition intervals shrink, so the integral of the difference between sufficiently late ramps is arbitrarily small."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The ramps are Cauchy in this norm, but no continuous function is their limit. Any such limit would equal zero almost everywhere below $1/2$ and one almost everywhere above it; continuity forces these values throughout each open half-interval, making continuity at $1/2$ impossible. The completion construction works without already knowing what the missing functions or points should be."
          }
        </MathText>
      </p>
    </section>
  );
}
