import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function PositiveSection() {
  return (
    <section id="positive" className={styles.section}>
      <span className={styles.sectionNumber}>08 / LECTURE 11</span>
      <h2>Positive functionals on bounded functions</h2>
      <p>
        <MathText>
          {
            "Let $\\Omega$ be a nonempty set and let $B(\\Omega)$ be the real vector space of all bounded real-valued functions on it. The pointwise order is"
          }
        </MathText>
      </p>
      <Equation>
        {
          "f\\leq g\\quad\\Longleftrightarrow\\quad f(\\omega)\\leq g(\\omega)\\quad\\text{for every }\\omega\\in\\Omega."
        }
      </Equation>
      <NoteBox kind="definition" title="Positive linear functional">
        <p>
          <MathText>
            {
              "For a linear subspace $Y\\subseteq B(\\Omega)$, a linear functional $\\ell:Y\\to\\mathbb R$ is positive if $\\ell(y)\\geq0$ whenever $y\\in Y$ is pointwise nonnegative."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "A positive linear functional is monotone on its domain. If $y_1,y_2\\in Y$ and $y_1\\leq y_2$, then $y_2-y_1\\in Y$ is nonnegative. Thus $\\ell(y_2)-\\ell(y_1)=\\ell(y_2-y_1)\\geq0$."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Positive extension theorem">
        <p>
          <MathText>
            {
              "Suppose $\\ell:Y\\to\\mathbb R$ is positive and linear, and $Y$ contains a function $u$ with $u(\\omega)\\geq c_0>0$ for all $\\omega$. Then $\\ell$ extends to a positive linear functional on all of $B(\\Omega)$."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "Rescale $u$ by $c_0$ to assume $u\\geq1$. The hypothesis is uniform positivity, not merely $u(\\omega)>0$ at each individual point. It supplies a member of $Y$ large enough, after scaling, to dominate any bounded function."
          }
        </MathText>
      </p>
    </section>
  );
}
