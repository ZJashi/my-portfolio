import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function StepFunctionsSection() {
  return (
    <section id="step-functions" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 14A</span>
      <h2>Approximate continuous functions by step functions</h2>
      <p>
        <MathText>{"For a partition $\\pi$, define"}</MathText>
      </p>
      <Equation>
        {
          "h_\\pi=f(a)\\mathbf1_{\\{a\\}}+\\sum_{j=0}^{n-1}f(t_j)\\mathbf1_{(t_j,t_{j+1}]}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "On the first interval this simply has value $f(a)$, including at $a$; later intervals use the value at their left endpoint. Let $|\\pi|=\\max_j(t_{j+1}-t_j)$. Uniform continuity gives $\\|h_\\pi-f\\|_\\infty\\leq\\omega_f(|\\pi|)\\to0$, where $\\omega_f$ is the modulus of continuity. Therefore"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\ell(f)=\\Lambda(f)=\\lim_{|\\pi|\\to0}\\left[f(a)r(a)+\\sum_{j=0}^{n-1}f(t_j)\\big(r(t_{j+1})-r(t_j)\\big)\\right]."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The sums are Stieltjes sums. For a continuous integrand and a BV integrator their limit exists, and changing the tags changes the sum by at most $\\omega_f(|\\pi|)\\operatorname{Var}r$. This identifies the functional with integration against the BV data, including the mass at the first endpoint."
          }
        </MathText>
      </p>
    </section>
  );
}
