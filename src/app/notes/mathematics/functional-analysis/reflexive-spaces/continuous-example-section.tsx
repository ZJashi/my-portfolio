import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ContinuousExampleSection() {
  return (
    <section id="continuous-example" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 14</span>
      <h2>A functional on C([-1,1]) that never attains its norm</h2>
      <p>
        <MathText>
          {"Let $C=C([-1,1];\\mathbb R)$ with the supremum norm, and define"}
        </MathText>
      </p>
      <Equation>
        {"\\ell(g)=\\int_{-1}^{0}g(t)\\,dt-\\int_0^1g(t)\\,dt."}
      </Equation>
      <p>
        <MathText>
          {
            "It is linear, and $|\\ell(g)|\\leq2\\|g\\|_\\infty$, so $\\|\\ell\\|\\leq2$. To obtain the matching lower bound, for $0<\\varepsilon<1$ use the continuous function"
          }
        </MathText>
      </p>
      <Equation>
        {
          "g_\\varepsilon(t)=\\begin{cases}1,&-1\\leq t\\leq-\\varepsilon,\\\\-t/\\varepsilon,&|t|\\leq\\varepsilon,\\\\-1,&\\varepsilon\\leq t\\leq1.\\end{cases}"
        }
      </Equation>
      <p>
        <MathText>
          {
            "It has supremum norm one. The outer intervals alone give $\\ell(g_\\varepsilon)\\geq2(1-\\varepsilon)$; evaluating the two triangular pieces more precisely gives $\\ell(g_\\varepsilon)=2-\\varepsilon$. Letting $\\varepsilon\\downarrow0$ proves $\\|\\ell\\|=2$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {"Now suppose $\\|g\\|_\\infty\\leq1$ and $\\ell(g)=2$. Then"}
        </MathText>
      </p>
      <Equation>
        {"0=2-\\ell(g)=\\int_{-1}^{0}(1-g(t))\\,dt+\\int_0^1(1+g(t))\\,dt."}
      </Equation>
      <p>
        <MathText>
          {
            "Both integrands are nonnegative and continuous. Zero integral forces $g=1$ throughout $[-1,0]$ and $g=-1$ throughout $[0,1]$, giving contradictory values at zero. Thus the positive value $2$ is never attained. Replacing $g$ by $-g$ rules out $-2$ as well."
          }
        </MathText>
      </p>
      <NoteBox
        kind="result"
        title="The continuous-function space is not reflexive"
      >
        <p>
          <MathText>
            {
              "The functional has norm two but $|\\ell(g)|<2$ for every unit vector $g$. Therefore $C([-1,1])$ is not reflexive."
            }
          </MathText>
        </p>
      </NoteBox>
    </section>
  );
}
