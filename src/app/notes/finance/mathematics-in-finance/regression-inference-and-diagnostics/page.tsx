import { FinanceLesson } from "@/components/notes/FinanceLesson";
import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
import { course, sections } from "./lesson-data";
import { DiagnosticsSection } from "./diagnostics-section";
import { OlsSection } from "./ols-section";
import { TestsSection } from "./tests-section";
import { SamplingSection } from "./sampling-section";
import { GlsSection } from "./gls-section";

export const metadata = {
  title:
    "Regression Inference and Diagnostics | MIT 18.642 Lecture 8 | Zura Jashi",
  description:
    "Least squares geometry, normal theory, t and F tests, prediction, leverage, influence, Gauss–Markov and GLS, with a complete worked fit.",
};

export default function LectureEight() {
  return (
    <FinanceLesson
      number={8}
      title="Regression inference and diagnostics"
      description="Derive the least squares estimator, quantify its uncertainty, and use residuals and influence to check whether the model deserves confidence."
      instructor="Peter Kempthorne"
      topics="Regression Analysis continued · Estimation and inference"
      sections={sections}
      previous={{
        slug: "linear-rates-products-and-models",
        title: "Linear rates, products and models",
      }}
      next={{ slug: "pca-in-finance", title: "PCA in finance" }}
      sources={
        <p>
          Sources:{" "}
          <a href={`${course}resources/18642-lecture-8-version-2_mp4/`}>
            Lecture 8 recording
          </a>
          , <a href={`${course}pages/week-5/`}>Week 5 materials</a>, and the
          shared{" "}
          <a href={`${course}mit18_642_f24_lec06_1.pdf`}>
            Regression Analysis slides
          </a>
          . These notes supply independent derivations and an original five
          observation example. The shared deck extends beyond the core lecture;
          regularisation below is marked as a further reading guide. Exact test
          formulas here use n−p residual degrees of freedom.
        </p>
      }
    >
      <div className={styles.lessonOverview}>
        <p>
          Lecture 8 continues regression after the rates guest lecture. Its
          central connection is between orthogonal projection, the sampling
          distribution of fitted coefficients, and diagnostics. The worked
          example continues the line fitted in Lecture 6; all calculations refer
          to a fixed design matrix.
        </p>
      </div>
      <OlsSection />
      <SamplingSection />
      <TestsSection />
      <section id="prediction" className={styles.section}>
        <span className={styles.sectionNumber}>
          04 / A MEAN VERSUS A NEW OBSERVATION
        </span>
        <h2>Prediction intervals</h2>
        <p>
          <MathText>
            {
              "For a new predictor vector $x_0$, the fitted conditional mean is $\\widehat m_0=x_0^T\\widehat\\beta$. Its estimated variance is $s^2x_0^TCx_0$. A new independent response also has its own error variance, adding the extra 1:"
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\mathrm{SE}(\\widehat m_0)=s\\sqrt{x_0^TCx_0},\\qquad\\mathrm{SE}_{\\mathrm{pred}}=s\\sqrt{1+x_0^TCx_0}."
          }
        </Equation>
        <p>
          <MathText>
            {
              "At $x=0$ in our example, $x_0=(1,0)^T$ and the fitted mean is 1. The 95% mean interval is $1\\pm3.182\\sqrt{(2/15)(1/5)}\\approx1\\pm0.520$. The individual prediction interval is $1\\pm3.182\\sqrt{(2/15)(1+1/5)}\\approx1\\pm1.273$."
            }
          </MathText>
        </p>
        <p>
          The wider interval recognises new observation noise. These formulas
          assume the same valid model and an independent new error. Predictions
          far outside the observed predictor range may be sensitive to model
          misspecification even if an interval can be calculated.
        </p>
      </section>
      <DiagnosticsSection />
      <GlsSection />
      <section id="extensions" className={styles.section}>
        <span className={styles.sectionNumber}>
          07 / FURTHER READING IN THE SHARED DECK
        </span>
        <h2>Further regression methods</h2>
        <p>
          The shared regression deck also covers maximum likelihood, robust and
          quantile criteria, ridge, principal components regression and lasso.
          These form a reading guide rather than a claim that all extensions
          were completed in Lecture 8.
        </p>
        <Equation>
          {
            "\\widehat\\beta_{\\mathrm{ridge}}=\\arg\\min_b\\{\\|y-Xb\\|^2+\\lambda\\|b\\|_2^2\\}=(X^TX+\\lambda I)^{-1}X^Ty."
          }
        </Equation>
        <p>
          <MathText>
            {
              "For centred and appropriately scaled predictors, ridge shrinks coefficients continuously. With $X=UDV^T$, fitted components are multiplied by $d_j^2/(d_j^2+\\lambda)$. Principal components regression retains selected singular directions outright; lasso uses an L1 penalty and can set coefficients to zero. Intercepts are normally handled separately and left unpenalised."
            }
          </MathText>
        </p>
        <p>
          Select tuning parameters with validation that respects the prediction
          setting. Scaling and feature selection must be fitted on training
          data. For a time series, a random split can leak future information
          into an earlier prediction task.
        </p>
      </section>
      <section id="practice" className={styles.section}>
        <span className={styles.sectionNumber}>08 / PRACTICE</span>
        <h2>Check your understanding</h2>
        <p>Original exercises, separate from MIT’s assignments.</p>
        <ol>
          <li>
            If n = 30 and X has five independent columns including the
            intercept, what are the residual degrees of freedom?
          </li>
          <li>
            For a nested two parameter restriction in that full model, give both
            F degrees of freedom.
          </li>
          <li>
            Why is an individual prediction interval wider than an interval for
            the conditional mean?
          </li>
          <li>
            Does Gauss–Markov say OLS is best among all possible biased and
            nonlinear estimators?
          </li>
        </ol>
        <details>
          <summary>Compare your answers</summary>
          <p>
            1. 25. The intercept has already been counted among the five
            parameters.
          </p>
          <p>2. Numerator 2, denominator 25.</p>
          <p>
            3. A new individual outcome adds its own error variance to
            uncertainty about the mean.
          </p>
          <p>
            4. No. The comparison is restricted to linear unbiased estimators
            under the stated model and covariance assumptions.
          </p>
        </details>
      </section>
    </FinanceLesson>
  );
}
