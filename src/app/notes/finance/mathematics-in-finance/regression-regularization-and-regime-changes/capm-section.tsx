import { Equation } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function CapmSection() {
  return (
    <section id="capm" className={styles.section}>
      <span className={styles.sectionNumber}>
        07 / APPLY THE TEST TO AN ECONOMIC QUESTION
      </span>
      <h2>CAPM and empirical interpretation</h2>
      <Equation>
        {
          "R_{i,t}-R_{f,t}=\\alpha_i+\\beta_i(R_{M,t}-R_{f,t})+\\varepsilon_{i,t}."
        }
      </Equation>
      <p>
        Keep response, market return and risk free return on the same period and
        return convention. A zero intercept restriction, a beta of one
        restriction and stability of both coefficients are different hypotheses.
        The supporting course notes illustrate these distinctions with GE
        returns.
      </p>
      <p>
        For sector ETF regressions, closely related predictors can make
        individual exposures unstable while their combined fitted return is
        stable. Ridge or PCR can help a prediction objective, but the resulting
        slopes are not automatically unbiased structural parameters.
      </p>
      <ol>
        <li>
          Define whether the aim is return replication, future prediction or an
          asset pricing restriction.
        </li>
        <li>
          Inspect residual dependence, tail behaviour, changing variance and
          influential periods.
        </li>
        <li>
          Choose the test or validation procedure before interpreting a
          coefficient table.
        </li>
        <li>
          Report uncertainty, sample period, response units and the model
          changes being tested.
        </li>
      </ol>
      <p>
        A stable fit over one historical window need not persist. Rolling
        estimates can reveal instability, but repeated testing also creates
        selection effects. Distinguish a detected change in a statistical
        relationship from an established explanation of its cause.
      </p>
    </section>
  );
}
