import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function SignsSection() {
  return (
    <section id="signs" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 14A</span>
      <h2>The sign-function estimate</h2>
      <p>
        <MathText>
          {
            "Take a partition $\\pi$. Choose $s_{-1}=\\operatorname{sgn}r(a)$ and $s_j=\\operatorname{sgn}(r(t_{j+1})-r(t_j))$, taking either sign at zero. The bounded step function"
          }
        </MathText>
      </p>
      <Equation>
        {
          "u=s_{-1}\\mathbf1_{\\{a\\}}+\\sum_{j=0}^{n-1}s_j\\mathbf1_{(t_j,t_{j+1}]}"
        }
      </Equation>
      <p>
        <MathText>
          {
            "has $\\|u\\|_\\infty\\leq1$, since its cells are disjoint. By linearity and the choice of signs,"
          }
        </MathText>
      </p>
      <Equation>
        {"|r(a)|+\\sum_{j=0}^{n-1}|r(t_{j+1})-r(t_j)|=\\Lambda(u)\\leq C."}
      </Equation>
      <NoteBox kind="result" title="Uniform BV estimate">
        <p>
          <MathText>
            {
              "The bound does not depend on the partition. Taking the supremum gives"
            }
          </MathText>
        </p>
        <Equation>
          {"|r(a)|+\\operatorname{Var}_{[a,b]}r\\leq\\|\\ell\\|."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The core trick is to turn a sum of absolute values into one application of a bounded linear functional by multiplying each increment by its sign. Including the singleton term strengthens the variation estimate to the full norm needed for endpoint masses."
          }
        </MathText>
      </p>
    </section>
  );
}
