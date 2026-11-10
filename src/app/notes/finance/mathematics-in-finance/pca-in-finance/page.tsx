import { FinanceLesson } from "@/components/notes/FinanceLesson";
import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
import { course, sections } from "./lesson-data";
import { HedgeSection } from "./hedge-section";
import { DataSection } from "./data-section";
import { ValidationSection } from "./validation-section";

export const metadata = {
  title: "PCA in Finance | MIT 18.642 Lecture 9 | Zura Jashi",
  description:
    "Preparing financial data for PCA, yield curve factors, factor neutral portfolios and out of sample validation.",
};

export default function LectureNine() {
  return (
    <FinanceLesson
      number={9}
      title="PCA in finance"
      description="Turn correlated financial observations into a few risk factors, then test whether those factors remain useful beyond the estimation window."
      instructor="Stefan Andreev"
      topics="Guest lecture · Two Sigma Investments · Fall 2024"
      sections={sections}
      previous={{
        slug: "regression-inference-and-diagnostics",
        title: "Regression inference and diagnostics",
      }}
      next={{
        slug: "counterparty-risk-optimization",
        title: "Counterparty risk optimisation",
      }}
      sources={
        <p>
          Sources:{" "}
          <a href={`${course}resources/18642-lecture-9-version-2_mp4/`}>
            Lecture 9 recording
          </a>
          ,{" "}
          <a href={`${course}mit18_642_f24_lec09.pdf`}>
            PCA Applications in Finance slides
          </a>
          , and the{" "}
          <a href={`${course}pages/week-5/`}>
            accompanying Fed data notebook and CSV
          </a>
          . These notes use original synthetic examples; numerical factor
          results below are not estimates from the course dataset. The lecture
          also illustrates equity index applications.
        </p>
      }
    >
      <div className={styles.lessonOverview}>
        <p>
          The guest lecture applies PCA to bond markets and equity indices,
          including factor portfolios, residuals and estimation stability. The
          main practical connection is between the coordinates of the data and
          the risk units of a tradable portfolio. A large in sample explained
          variance does not by itself establish a useful hedge or trading
          strategy.
        </p>
      </div>
      <DataSection />
      <section id="pca" className={styles.section}>
        <span className={styles.sectionNumber}>
          02 / SCORES AND RECONSTRUCTION
        </span>
        <h2>Estimate the factor model</h2>
        <p>
          <MathText>
            {
              "Diagonalise the sample covariance as $S=Q\\Lambda Q^T$, with orthonormal columns $q_i$ and descending eigenvalues $\\lambda_i$. Scores are $Z=X_cQ$, and the rank K reconstruction is $\\widehat X_K=\\mathbf1\\bar x^T+Z_KQ_K^T$."
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\operatorname{Cov}_{\\mathrm{sample}}(Z)=\\Lambda,\\qquad\\mathrm{EVR}_K=\\frac{\\sum_{i=1}^K\\lambda_i}{\\sum_{i=1}^m\\lambda_i}."
          }
        </Equation>
        <p>
          <MathText>
            {
              "For reduced SVD $X_c=UDV^T$, the loading directions are columns of V and $\\lambda_i=d_i^2/(T-1)$. The squared reconstruction error is $\\|X_c-X_cQ_KQ_K^T\\|_F^2=(T-1)\\sum_{i>K}\\lambda_i$."
            }
          </MathText>
        </p>
        <p>
          Ordinary least squares chooses a response and minimises its prediction
          residuals. PCA approximates the joint cloud in a chosen metric.
          Neither procedure, by itself, establishes causality. A low variance
          component may be economically important even when a variance
          compression objective discards it.
        </p>
      </section>
      <section id="curve" className={styles.section}>
        <span className={styles.sectionNumber}>
          03 / A THREE MATURITY MODEL
        </span>
        <h2>Yield curve factors</h2>
        <p>
          Yield change loadings often admit descriptions such as level, slope
          and curvature. These are empirical interpretations, not fixed
          definitions of the first three principal components. Signs are
          arbitrary: changing the sign of both a loading and its score leaves
          the reconstruction unchanged.
        </p>
        <h3>Original orthonormal example</h3>
        <Equation>
          {
            "q_L=\\frac1{\\sqrt3}\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix},\\quad q_S=\\frac1{\\sqrt2}\\begin{pmatrix}-1\\\\0\\\\1\\end{pmatrix},\\quad q_C=\\frac1{\\sqrt6}\\begin{pmatrix}1\\\\-2\\\\1\\end{pmatrix}."
          }
        </Equation>
        <p>
          <MathText>
            {
              "Assign variances $\\lambda_L=9$, $\\lambda_S=4$, $\\lambda_C=1$, in squared basis point units. The covariance is $S=9q_Lq_L^T+4q_Sq_S^T+q_Cq_C^T$. Its total variance is 14; the first two directions explain 13/14 ≈ 92.86%."
            }
          </MathText>
        </p>
        <p>
          <MathText>
            {
              "A centred move $\\Delta y=(2,1,0)^T$ bp has scores $z_L=\\sqrt3$, $z_S=-\\sqrt2$, $z_C=0$. Thus a sloping move can lie entirely inside the level and slope plane. A pure belly move is different: it contains curvature."
            }
          </MathText>
        </p>
        <p>
          The data determines whether these idealised directions resemble
          estimated factors. When eigenvalues are close, individual eigenvectors
          can rotate substantially while their combined subspace remains stable.
        </p>
      </section>
      <HedgeSection />
      <ValidationSection />
      <section id="research" className={styles.section}>
        <span className={styles.sectionNumber}>
          06 / AN ACTIONABLE EXPERIMENT
        </span>
        <h2>Research workflow</h2>
        <ol>
          <li>
            Choose returns or changes with consistent units and observation
            times.
          </li>
          <li>
            Estimate means, scales and loadings on a training window only.
          </li>
          <li>
            Translate factor exposures into instrument sensitivities, then
            notionals.
          </li>
          <li>
            Freeze those quantities for the next evaluation period; record later
            risk and reconstruction errors.
          </li>
          <li>
            Include transaction costs, funding, constraints and rebalancing when
            evaluating a strategy.
          </li>
        </ol>
        <p>
          A residual is a component outside the retained factor space. It is not
          automatically a mispricing, a stationary process or a profitable mean
          reversion signal. Any lagged signal must be available before the
          position it determines; a cumulative chart alone does not establish
          predictive power.
        </p>
      </section>
      <section id="practice" className={styles.section}>
        <span className={styles.sectionNumber}>07 / PRACTICE</span>
        <h2>Check your understanding</h2>
        <p>Original exercises, separate from MIT’s assignments.</p>
        <ol>
          <li>
            What share of variance does the synthetic level factor explain?
          </li>
          <li>
            Is the portfolio (1,0,−1) neutral to the synthetic level and slope
            factors?
          </li>
          <li>
            Why should training scales remain fixed during an out of sample
            test?
          </li>
        </ol>
        <details>
          <summary>Compare your answers</summary>
          <p>1. 9/14 ≈ 64.29%.</p>
          <p>2. It is level neutral but has slope exposure −√2.</p>
          <p>
            3. Using later observations to choose preprocessing leaks future
            information and changes the model being evaluated.
          </p>
        </details>
      </section>
    </FinanceLesson>
  );
}
