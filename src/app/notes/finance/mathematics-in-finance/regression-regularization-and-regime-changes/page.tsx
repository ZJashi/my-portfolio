import { FinanceLesson } from "@/components/notes/FinanceLesson";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { course, sections } from "./lesson-data";
import { RegimesSection } from "./regimes-section";
import { CapmSection } from "./capm-section";
import { RidgeSection } from "./ridge-section";
import { PcrSection } from "./pcr-section";
import { LassoSection } from "./lasso-section";

export const metadata = {
  title:
    "Regression Regularisation and Regime Changes | MIT 18.642 Lecture 11 | Zura Jashi",
  description:
    "Ridge, principal components regression, lasso, linear restrictions, CAPM regressions and tests of coefficient stability.",
};

export default function LectureEleven() {
  return (
    <FinanceLesson
      number={11}
      title="Regression, regularisation and regime changes"
      description="Stabilise a regression with correlated predictors, test explicit coefficient restrictions, and ask whether one fitted relationship survives across periods."
      instructor="Peter Kempthorne"
      topics="Regression Analysis continued · Empirical finance"
      sections={sections}
      previous={{
        slug: "counterparty-risk-optimization",
        title: "Counterparty risk optimisation",
      }}
      sources={
        <p>
          Sources:{" "}
          <a href={`${course}resources/18642-lecture-11-version-2_1_mp4/`}>
            Lecture 11 recording
          </a>
          , the shared{" "}
          <a href={`${course}mit18_642_f24_lec06_1.pdf`}>
            Regression Analysis slides
          </a>
          , and{" "}
          <a href={`${course}mit18_642_f24_lec08.pdf`}>
            Hypothesis Testing in Regression Analysis notes
          </a>{" "}
          linked from <a href={`${course}pages/week-6/`}>Week 6</a>. The
          hypothesis notes carry an October 2023 date and are supporting
          material for the Fall 2024 course. Worked data and numerical examples
          here are original synthetic illustrations, not reported GE or ETF
          estimates.
        </p>
      }
    >
      <div className={styles.lessonOverview}>
        <p>
          Lecture 11 continues the regression material with shrinkage methods
          and empirical finance applications. These notes connect the shared
          deck to the accompanying hypothesis testing notes. Prediction,
          parameter inference and model stability are separate tasks: improving
          one does not automatically establish the others.
        </p>
      </div>
      <section id="purpose" className={styles.section}>
        <span className={styles.sectionNumber}>01 / DEFINE THE OBJECTIVE</span>
        <h2>What the regression is for</h2>
        <p>
          <MathText>
            {
              "In $y=X\\beta+\\varepsilon$, OLS minimises observed squared residuals. Under the assumptions stated in Lecture 8 it is unbiased and has a known covariance. But highly correlated columns make some directions of $X^TX$ weakly identified, increasing coefficient variance and sensitivity to small data changes."
            }
          </MathText>
        </p>
        <p>
          For ETF return replication, predictors may be sector returns and the
          response a target ETF return. Fit quality measures co-movement
          conditional on the chosen sample and regressors; it does not establish
          that the fitted coefficients are implementable portfolio weights.
        </p>
        <p>
          A portfolio interpretation may require a budget constraint, limits on
          leverage and shorting, trading costs, financing and timing. An
          unconstrained regression intercept is not a cash position, and slopes
          need not sum to one.
        </p>
        <NoteBox title="Keep the information set honest">
          <p>
            For future prediction, estimate preprocessing, feature choices and
            tuning parameters using only information available before that
            prediction. For contemporaneous replication, same date factors may
            be legitimate explanatory inputs, but they are not forecasts
            available earlier.
          </p>
        </NoteBox>
      </section>
      <RidgeSection />
      <PcrSection />
      <LassoSection />
      <section id="tests" className={styles.section}>
        <span className={styles.sectionNumber}>
          05 / STATE THE NULL EXPLICITLY
        </span>
        <h2>Testing linear restrictions</h2>
        <p>
          <MathText>
            {
              "Return to an unpenalised full rank regression with $n>p$ and normal errors of common variance, conditional on X. Suppose the null is $R\\beta=r$, where R has q independent rows. Put $C=(X^TX)^{-1}$ and $s^2=\\mathrm{RSS}/(n-p)$."
            }
          </MathText>
        </p>
        <NoteBox kind="result" title="Joint coefficient restriction test">
          <Equation>
            {
              "F=\\frac{(R\\widehat\\beta-r)^T(RCR^T)^{-1}(R\\widehat\\beta-r)}{q s^2}\\sim F_{q,n-p}\\quad\\text{under }H_0."
            }
          </Equation>
          <p>
            For q = 1 this equals the square of the corresponding t statistic.
            Equivalently, compare restricted and unrestricted residual sums of
            squares using the same observations.
          </p>
        </NoteBox>
        <p>
          <MathText>
            {
              "A slope estimate 1.2 with standard error 0.1 gives t = 12 against slope zero, but t = 2 against slope one. A regression coefficient table normally reports the first test; answering the second question requires changing the null value. Degrees of freedom and assumptions are still needed to turn either statistic into a p value."
            }
          </MathText>
        </p>
        <p>
          A p value is a probability of data at least as extreme under the null
          model, not the probability that the null is true. Failing to reject an
          intercept of zero does not prove efficient pricing or confirm CAPM.
        </p>
      </section>
      <RegimesSection />
      <CapmSection />
      <section id="practice" className={styles.section}>
        <span className={styles.sectionNumber}>08 / PRACTICE</span>
        <h2>Check your understanding</h2>
        <p>Original exercises, separate from MIT’s assignments.</p>
        <ol>
          <li>
            In the ridge example, what happens to each fitted direction as λ
            tends to infinity?
          </li>
          <li>
            With 80 observations and three coefficients per period, what are the
            degrees of freedom for a full two period coefficient stability test?
          </li>
          <li>Does a significant market beta imply a significant alpha?</li>
        </ol>
        <details>
          <summary>Compare your answers</summary>
          <p>
            1. Its multiplier tends to zero; an independently fitted unpenalised
            intercept remains.
          </p>
          <p>
            2. Numerator 3, denominator 80 − 6 = 74, provided both period
            designs have full rank.
          </p>
          <p>3. No. They are separate parameters and hypotheses.</p>
        </details>
      </section>
    </FinanceLesson>
  );
}
