import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function NonseparableSection() {
  return (
    <section id="nonseparable" className={styles.section}>
      <span className={styles.sectionNumber}>10 / LECTURE 7</span>
      <h2>Why the signed measure space is not separable</h2>
      <p>
        <MathText>
          {
            "Assume for contradiction that $D\\subseteq\\mathcal M(\\Omega)$ is countable and dense. Enumerate $D=\\{\\mu_1,\\mu_2,\\ldots\\}$. For each $x\\in\\Omega$, density provides an element within distance $1/2$ of $\\delta_x$. Choose the first such element in the enumeration and call it $F(x)$. This defines a map $F:\\Omega\\to D$."
          }
        </MathText>
      </p>
      <Equation>{"\\|\\delta_x-F(x)\\|_{\\mathrm{TV}}<\\frac12."}</Equation>
      <h3>The approximating measure determines the point</h3>
      <p>
        <MathText>
          {"Suppose $F(x)=F(y)$. By the triangle inequality,"}
        </MathText>
      </p>
      <Equation>
        {
          "\\begin{aligned}\\|\\delta_x-\\delta_y\\|_{\\mathrm{TV}}&\\leq\\|\\delta_x-F(x)\\|_{\\mathrm{TV}}\\\\&\\quad+\\|F(x)-F(y)\\|_{\\mathrm{TV}}\\\\&\\quad+\\|F(y)-\\delta_y\\|_{\\mathrm{TV}}\\\\&<\\frac12+0+\\frac12=1.\\end{aligned}"
        }
      </Equation>
      <p>
        <MathText>
          {
            "If $x\\ne y$, the left side equals two. Therefore $x=y$, proving that $F$ is injective. This is impossible: an uncountable interval cannot inject into a countable set. Equivalently, $F$ would give a bijection from the interval onto the countable subset $F(\\Omega)\\subseteq D$."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Nonseparability in total variation">
        <p>
          <MathText>
            {
              "The space of finite signed Borel measures on $(-1,1)$ has no countable dense subset under the total variation norm."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "The mechanism is general: if a metric space contains an uncountable family whose pairwise distances are bounded below by a fixed positive constant, sufficiently small balls around those points are disjoint. A dense set must supply distinct approximating points for all of them, so it cannot be countable."
          }
        </MathText>
      </p>
    </section>
  );
}
