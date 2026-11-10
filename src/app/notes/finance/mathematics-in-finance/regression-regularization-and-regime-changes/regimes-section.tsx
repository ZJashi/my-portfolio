import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function RegimesSection() {
  return (
    <section id="regimes" className={styles.section}>
      <span className={styles.sectionNumber}>
        06 / DOES ONE MODEL FIT BOTH PERIODS?
      </span>
      <h2>Testing a change between periods</h2>
      <p>
        <MathText>
          {
            "Partition a time ordered dataset into periods A and B, each with a full rank p column design. The pooled null uses the same $\\beta$ in both periods. The alternative fits $\\beta_A$ and $\\beta_B$ separately, using 2p parameters."
          }
        </MathText>
      </p>
      <Equation>
        {
          "F=\\frac{[\\mathrm{RSS}_{\\mathrm{pooled}}-(\\mathrm{RSS}_A+\\mathrm{RSS}_B)]/p}{(\\mathrm{RSS}_A+\\mathrm{RSS}_B)/(n_A+n_B-2p)}\\sim F_{p,n_A+n_B-2p}."
        }
      </Equation>
      <p>
        The exact reference distribution assumes a prespecified split and
        independent normal errors with the same variance in both periods.
        Scanning many break dates changes the testing problem. Heteroscedastic
        or serially dependent errors need an appropriate alternative inference
        method.
      </p>
      <h3>Original two period dataset</h3>
      <p>
        <MathText>
          {
            "In each period use $x=(-2,-1,0,1,2)^T$ and $e=(0.2,-0.4,0,0.4,-0.2)^T$. Construct $y_A=1+0.6x+e$ and $y_B=2+1.2x+e$. The residuals are orthogonal to both design columns, so the separate fits recover their stated coefficients and each has RSS = 0.4."
          }
        </MathText>
      </p>
      <p>
        The pooled fit has intercept 1.5 and slope 0.9, with RSS = 5.1. The
        unrestricted fit has four coefficients, ten observations and six
        residual degrees of freedom.
      </p>
      <Equation>
        {"F=\\frac{(5.1-0.8)/2}{0.8/6}=16.125,\\qquad(df_1,df_2)=(2,6)."}
      </Equation>
      <p>
        These are arithmetic results for constructed data. Interpreting them as
        a formal statistical test would additionally require the error model;
        the construction alone does not supply that sampling model.
      </p>
      <h3>The equivalent interaction formulation</h3>
      <Equation>
        {"y_i=a+bx_i+D_i(\\delta_a+\\delta_bx_i)+\\varepsilon_i."}
      </Equation>
      <p>
        Let D = 0 in A and 1 in B. No change means δa = δb = 0. Here the fitted
        changes are δa = 1 and δb = 0.6. This parameterisation permits separate
        or joint questions about intercept and slope changes without changing
        observations.
      </p>
    </section>
  );
}
