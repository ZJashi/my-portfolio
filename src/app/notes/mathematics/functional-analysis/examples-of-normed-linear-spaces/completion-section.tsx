import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function CompletionSection() {
  return (
    <section id="completion" className={styles.section}>
      <span className={styles.sectionNumber}>11 / LECTURE 6</span>
      <h2>Completing the function space to obtain Lp</h2>
      <p>
        <MathText>
          {
            "Apply the completion construction to $C_c(D)$ with its integral p-norm. This produces a Banach space containing an isometric dense copy of the original functions. For Lebesgue measure on an open subset of Euclidean space, the completion is identified with the usual $L^p(D)$ space."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="The function space Lp">
        <p>
          <MathText>
            {
              "Elements of $L^p(D)$ are measurable functions with finite integral of $|f|^p$, with functions that agree almost everywhere identified."
            }
          </MathText>
        </p>
        <Equation>
          {
            "L^p(D)=\\left\\{f:\\int_D|f|^p\\,dx<\\infty\\right\\}\\big/\\text{equality almost everywhere}."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The identification is needed for definiteness: two measurable functions can differ on a set of measure zero while having integral norm difference zero. On continuous functions over an open domain, the earlier positivity argument made this identification unnecessary."
          }
        </MathText>
      </p>
      <NoteBox
        kind="result"
        title="Density of compactly supported continuous functions"
      >
        <p>
          <MathText>
            {
              "For every $f\\in L^p(D)$ and every $\\varepsilon>0$, there is $\\varphi\\in C_c(D)$ whose integral p-norm distance from $f$ is less than $\\varepsilon$."
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\overline{C_c(D)}^{\\,\\|\\cdot\\|_{L^p}}=L^p(D),\\qquad 1\\leq p<\\infty."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Density in the abstract completion follows from the completion construction. Interpreting that completion as measurable functions gives the familiar approximation statement above. This is the practical reason for completing the space: limits exist in $L^p$, while compactly supported continuous functions remain available as approximations."
          }
        </MathText>
      </p>
    </section>
  );
}
