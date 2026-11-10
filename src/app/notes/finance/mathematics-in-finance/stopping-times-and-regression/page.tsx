import Link from "next/link";
import { FinanceLesson } from "@/components/notes/FinanceLesson";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
import { course, sections } from "./lesson-data";
import { ExitSection } from "./exit-section";
import { StoppingSection } from "./stopping-section";
import { MarkovSection } from "./markov-section";
import { BiasSection } from "./bias-section";

export const metadata = {
  title: "Stopping Times and Regression | MIT 18.642 Lecture 6 | Zura Jashi",
  description:
    "Stopped martingales, fair and biased exit problems, Markov transitions and the introduction of linear regression.",
};

export default function LectureSix() {
  return (
    <FinanceLesson
      number={6}
      title="Stopping times and regression"
      description="Use martingales to solve exit problems, describe transitions with a Markov chain, and build a linear regression model from observations."
      instructor="Peter Kempthorne"
      topics="Stochastic Processes I continued · Regression foundations"
      sections={sections}
      previous={{
        slug: "stochastic-processes-i",
        title: "Probability and stochastic processes",
      }}
      next={{
        slug: "linear-rates-products-and-models",
        title: "Linear rates, products and models",
      }}
      sources={
        <p>
          Course references:{" "}
          <a href={`${course}resources/18642-lecture-6-version-3_mp4/`}>
            Lecture 6 recording
          </a>
          ,{" "}
          <a href={`${course}mit18_642_f24_lec05.pdf`}>
            Stochastic Processes I slides
          </a>{" "}
          and{" "}
          <a href={`${course}mit18_642_f24_lec06_1.pdf`}>
            Regression Analysis slides
          </a>
          . <a href={`${course}pages/week-4/`}>Week 4</a> also provides high
          yield spread fits and an ETF case study. These independent notes use
          original calculations and proofs; regression inference continues in
          Lecture 8.
        </p>
      }
    >
      <div className={styles.lessonOverview}>
        <p>
          Lecture 6 turns the martingale definitions from Lecture 5 into tools
          for stopping and hitting problems. It then develops Markov transitions
          and introduces regression. The proofs below make the limiting steps
          explicit: stopping at a finite horizon is different from taking an
          expectation at an unbounded random time.
        </p>
      </div>
      <StoppingSection />
      <ExitSection />
      <BiasSection />
      <MarkovSection />
      <section id="regression" className={styles.section}>
        <span className={styles.sectionNumber}>
          05 / EXPLAINING AN OBSERVED RESPONSE
        </span>
        <h2>From processes to regression</h2>
        <NoteBox title="Linear means linear in the coefficients">
          <Equation>
            {
              "y=X\\beta+\\varepsilon,\\qquad X\\in\\mathbb R^{n\\times p},\\quad\\beta\\in\\mathbb R^p,\\quad y,\\varepsilon\\in\\mathbb R^n."
            }
          </Equation>
          <p>
            Rows are observations, columns are explanatory variables. Count an
            intercept column of ones among the p parameters. The error is the
            unobserved difference from the model mean; a fitted residual is
            computed after estimation.
          </p>
        </NoteBox>
        <p>
          <MathText>
            {
              "A model $y_i=\\beta_0+\\beta_1t_i+\\beta_2t_i^2+\\varepsilon_i$ is still linear regression. So is a fixed frequency Fourier basis or an autoregression on observed lags. The response need not be linear in time; it must be linear in the unknown coefficients."
            }
          </MathText>
        </p>
        <p>
          The model building cycle is to specify the response and predictors,
          choose an estimation criterion, fit, inspect residuals, and revise
          when the assumptions fail. Least squares is one criterion. It does not
          by itself establish causality or validate error assumptions.
        </p>
        <p>
          <MathText>
            {
              "For inference conditional on X, $\\mathbb E[\\varepsilon\\mid X]=0$ is an exogeneity assumption. Serially dependent outcomes, changing variance and nonstationary regressors need particular care in finance. For prediction, any lagged feature must have been observable at the forecast date."
            }
          </MathText>
        </p>
      </section>
      <section id="fit" className={styles.section}>
        <span className={styles.sectionNumber}>06 / FITTING A LINE</span>
        <h2>An original least squares fit</h2>
        <p>
          <MathText>
            {
              "Take $x=(-2,-1,0,1,2)^T$ and $y=(0,0,1,2,2)^T$. Fit $y_i=a+bx_i+e_i$. The means are $\\bar x=0$ and $\\bar y=1$. Differentiating the sum of squared residuals with respect to a and b yields:"
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\widehat b=\\frac{\\sum_i(x_i-\\bar x)(y_i-\\bar y)}{\\sum_i(x_i-\\bar x)^2}=\\frac6{10}=0.6,\\qquad\\widehat a=\\bar y-\\widehat b\\bar x=1."
          }
        </Equation>
        <Equation>
          {
            "\\widehat y=(-0.2,0.4,1,1.6,2.2)^T,\\quad e=(0.2,-0.4,0,0.4,-0.2)^T,\\quad\\mathrm{RSS}=0.4."
          }
        </Equation>
        <p>
          <MathText>
            {
              "Both $\\sum_i e_i=0$ and $\\sum_i x_ie_i=0$: the residual is orthogonal to the intercept and predictor columns. This is the geometric property of least squares, regardless of whether the errors are Gaussian. Lecture 8 uses this same example to calculate uncertainty and diagnostics."
            }
          </MathText>
        </p>
        <p>
          <Link href="/notes/finance/mathematics-in-finance/regression-inference-and-diagnostics">
            Continue the worked fit in Lecture 8
          </Link>
          .
        </p>
      </section>
      <section id="practice" className={styles.section}>
        <span className={styles.sectionNumber}>07 / PRACTICE</span>
        <h2>Check your understanding</h2>
        <p>Original exercises, separate from MIT’s assignments.</p>
        <ol>
          <li>
            For a fair walk stopped at +2 or −4, find the upper exit probability
            and expected duration.
          </li>
          <li>
            In the credit example, what is the two step probability of being
            weak when starting good?
          </li>
          <li>
            Is a polynomial in x necessarily a nonlinear regression model?
          </li>
        </ol>
        <details>
          <summary>Compare your answers</summary>
          <p>1. Probability 4/6 = 2/3; expected duration 8 steps.</p>
          <p>2. 0.9(0.08) + 0.08(0.8) + 0.02(0) = 0.136.</p>
          <p>
            3. No. Fixed polynomial terms can be columns of a linear design
            matrix. Nonlinearity in unknown parameters is the relevant
            distinction.
          </p>
        </details>
      </section>
    </FinanceLesson>
  );
}
