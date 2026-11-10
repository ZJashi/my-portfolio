import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function EsSection() {
  return (
    <section id="es" className={styles.section}>
      <span className={styles.sectionNumber}>
        04 / A TAIL MEASURE AS AN OBJECTIVE
      </span>
      <h2>Optimising expected shortfall</h2>
      <NoteBox
        kind="result"
        title="Expected shortfall through a threshold variable"
      >
        <Equation>
          {
            "\\operatorname{ES}_\\alpha(L(x))=\\min_{\\eta\\in\\mathbb R}\\left[\\eta+\\frac{\\mathbb E[(L(x)-\\eta)^+]}{1-\\alpha}\\right]."
          }
        </Equation>
        <p>
          The threshold η is an optimisation variable. With discrete scenarios
          the objective is convex but can have kinks; differentiability is not
          required.
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "For affine scenario losses $\\ell_s(x)$ and probabilities $p_s$, introduce nonnegative excess variables $u_s$. The optimisation becomes:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\min_{x,\\eta,u}\\;\\eta+\\frac1{1-\\alpha}\\sum_s p_su_s,\\qquad u_s\\ge\\ell_s(x)-\\eta,\\quad u_s\\ge0."
        }
      </Equation>
      <p>
        With linear constraints on x this is a linear program. More generally,
        convex scenario loss functions preserve convexity with a convex feasible
        set. Transaction lots or discrete choices can turn it into a mixed
        integer problem.
      </p>
      <h3>Original two asset example</h3>
      <p>
        <MathText>
          {
            "Allocate fractions x and $1-x$, with $0\\le x\\le1$. In two equally likely scenarios, the loss is $10x$ or $10(1-x)$. At confidence 50%, ES is the larger of those losses. Minimise $\\max(10x,10(1-x))$ by equalising them: $x=1/2$, ES = 5. At either endpoint ES = 10."
          }
        </MathText>
      </p>
      <p>
        This demonstrates convex optimisation, not a universal diversification
        recommendation. The model’s scenarios, feasible allocations and loss
        definition determine the result.
      </p>
    </section>
  );
}
