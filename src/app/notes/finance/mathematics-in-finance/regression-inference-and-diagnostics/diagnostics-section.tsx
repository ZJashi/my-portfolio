import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function DiagnosticsSection() {
  return (
    <section id="diagnostics" className={styles.section}>
      <span className={styles.sectionNumber}>
        05 / TEST THE MODEL AGAINST ITS RESIDUALS
      </span>
      <h2>Residuals and influence</h2>
      <p>
        <MathText>
          {
            "The leverage of observation i is $h_{ii}=x_i^TCx_i$. Since $\\operatorname{Var}(e_i\\mid X)=\\sigma^2(1-h_{ii})$, raw residual magnitudes are not directly comparable. Also $\\sum_i h_{ii}=p$, so average leverage is $p/n$."
          }
        </MathText>
      </p>
      <Equation>
        {
          "r_i=\\frac{e_i}{s\\sqrt{1-h_{ii}}},\\qquad D_i=\\frac{e_i^2}{p s^2}\\frac{h_{ii}}{(1-h_{ii})^2}."
        }
      </Equation>
      <p>
        The first quantity is an internally standardised residual. Cook’s
        distance D combines residual size and leverage to measure sensitivity of
        fitted values to deleting a case. Externally studentised residuals
        instead use a variance estimate obtained after deleting that
        observation.
      </p>
      <h3>Original diagnostic calculation</h3>
      <p>
        <MathText>
          {
            "For the endpoint $x=2$, $h_{ii}=1/5+4/10=0.6$ and $e_i=-0.2$. The standardised residual is $-0.2/\\sqrt{(2/15)(0.4)}\\approx-0.8660$, while Cook’s distance is $0.5625$. The endpoint has more leverage than the central point, whose leverage is 0.2."
          }
        </MathText>
      </p>
      <p>
        A point can have high leverage without a large residual, and a large
        residual without high leverage. Neither property alone proves a data
        error. Inspect the observation and compare fits before deciding whether
        it should be excluded.
      </p>
      <ol>
        <li>
          <strong>Residuals versus fitted values:</strong> look for curvature,
          omitted structure or changing spread.
        </li>
        <li>
          <strong>Residuals over time:</strong> look for persistence, breaks or
          calendar patterns.
        </li>
        <li>
          <strong>Normal quantile comparison:</strong> assess the Gaussian
          assumption used for exact small sample tests.
        </li>
        <li>
          <strong>Leverage and influence:</strong> examine whether a few
          observations drive the coefficient estimates.
        </li>
        <li>
          <strong>Future period validation:</strong> check prediction using only
          information available at each forecast origin.
        </li>
      </ol>
      <p>
        Even a reassuring residual plot cannot prove all assumptions. In
        financial data, volatility changes and dependence can invalidate
        classical standard errors while leaving the least squares fit
        algebraically unchanged.
      </p>
    </section>
  );
}
