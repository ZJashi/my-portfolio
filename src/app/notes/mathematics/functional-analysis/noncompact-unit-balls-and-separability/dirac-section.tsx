import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function DiracSection() {
  return (
    <section id="dirac" className={styles.section}>
      <span className={styles.sectionNumber}>09 / LECTURE 7</span>
      <h2>An uncountable separated family of measures</h2>
      <p>
        <MathText>
          {
            "For every $x\\in\\Omega$, the Dirac measure $\\delta_x$ places unit mass at $x$. On a Borel set $A$,"
          }
        </MathText>
      </p>
      <Equation>
        {"\\delta_x(A)=\\begin{cases}1,&x\\in A,\\\\0,&x\\notin A.\\end{cases}"}
      </Equation>
      <p>
        <MathText>
          {
            "For distinct points $x\\ne y$, the signed measure $\\delta_x-\\delta_y$ has Jordan positive part $\\delta_x$ and negative part $\\delta_y$. Their supports are disjoint, so"
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Distance between distinct Dirac measures">
        <Equation>
          {
            "\\|\\delta_x-\\delta_y\\|_{\\mathrm{TV}}=\\delta_x(\\Omega)+\\delta_y(\\Omega)=2\\qquad(x\\ne y)."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The interval contains uncountably many points, so it supplies uncountably many measures, all separated by the same distance two. The topology here is total variation; this distance calculation does not assert anything about a weaker topology on measures."
          }
        </MathText>
      </p>
    </section>
  );
}
