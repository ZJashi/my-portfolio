import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function DensityExampleSection() {
  return (
    <section id="density-example" className={styles.section}>
      <span className={styles.sectionNumber}>10 / LECTURE 14A</span>
      <h2>Example: an integrable density</h2>
      <p>
        <MathText>
          {
            "Let $h\\in L^1([a,b])$ and define $\\ell_h(f)=\\int_a^b f(t)h(t)\\,dt$. This is bounded because $|\\ell_h(f)|\\leq\\|f\\|_\\infty\\|h\\|_1$. Its representing measure is $\\nu(E)=\\int_Eh(t)\\,dt$, and its cumulative function is"
          }
        </MathText>
      </p>
      <Equation>{"F(t)=\\int_a^t h(s)\\,ds."}</Equation>
      <p>
        <MathText>
          {
            "Here $F(a)=0$ and $F$ is absolutely continuous. Its variation is $\\int_a^b|h(t)|\\,dt$; equivalently $|\\nu|(E)=\\int_E|h(t)|\\,dt$. The representation norm identity therefore gives"
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="The norm of an integral functional">
        <p>
          <MathText>
            {
              "An integrable density defines a bounded functional on continuous functions with exactly its integral norm."
            }
          </MathText>
        </p>
        <Equation>{"\\|\\ell_h\\|=\\int_a^b|h(t)|\\,dt=\\|h\\|_1."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "This is a supremum over continuous functions bounded by one; the sign of $h$ need not itself be continuous, so equality of norms does not assert that a maximizing continuous function exists. Measures with atoms, such as $\\delta_t$, also give bounded functionals and need not have an integrable density."
          }
        </MathText>
      </p>
    </section>
  );
}
