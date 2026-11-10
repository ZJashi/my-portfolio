import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function TestsSection() {
  return (
    <section id="tests" className={styles.section}>
      <span className={styles.sectionNumber}>
        03 / HYPOTHESES ABOUT COEFFICIENTS
      </span>
      <h2>t and F tests</h2>
      <NoteBox kind="result" title="A single coefficient test">
        <Equation>
          {
            "t_j=\\frac{\\widehat\\beta_j-\\beta_{j,0}}{s\\sqrt{C_{jj}}}\\sim t_{n-p}\\quad\\text{under the null and normal model}."
          }
        </Equation>
        <p>
          The denominator contains the square root of the covariance diagonal. A
          two sided confidence interval uses the corresponding Student quantile
          and the same residual degrees of freedom.
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "Testing slope zero in our example gives $t=0.6/0.11547\\approx5.196$ with 3 degrees of freedom. A 95% interval uses $t_{0.975,3}\\approx3.182$: $0.6\\pm3.182(0.11547)$, or approximately $(0.2325,0.9675)$."
          }
        </MathText>
      </p>
      <p>
        The assumptions, sample size and units qualify this interval. It
        describes coefficient uncertainty in the stated model, rather than a 95%
        probability statement about a fixed parameter after observing the
        interval.
      </p>
      <h3>Joint restrictions through nested models</h3>
      <p>
        <MathText>
          {
            "Fit a restricted model with k parameters and a full model with p parameters to exactly the same n observations, where the restricted column space lies inside the full one. Under the null and Gaussian equal variance errors:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "F=\\frac{(\\mathrm{RSS}_0-\\mathrm{RSS}_1)/(p-k)}{\\mathrm{RSS}_1/(n-p)}\\sim F_{p-k,n-p}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "For the intercept only restriction, $k=1$, $\\mathrm{RSS}_0=4$, $\\mathrm{RSS}_1=0.4$. Hence $F=3.6/(0.4/3)=27=t^2$. The denominator degrees of freedom belong to the full model: $n-p=3$, not $n-k$."
          }
        </MathText>
      </p>
      <p>
        A small p value is evidence against the specified restriction under the
        assumed error model. It does not establish a causal relationship,
        economic usefulness, or robustness to trying many models.
      </p>
    </section>
  );
}
