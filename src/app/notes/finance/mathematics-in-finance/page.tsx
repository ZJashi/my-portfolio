import { SubjectHeader } from "@/components/notes/SubjectHeader";
import Link from "next/link";
import { CourseContents } from "@/components/notes/CourseContents";
import styles from "@/app/notes/notes.styles";

export const metadata = {
  title: "Mathematics in Finance | MIT 18.642 | Zura Jashi",
  description:
    "A growing notebook for MIT 18.642, Fall 2024. Start with markets, discounting and bond mathematics.",
};
const course =
  "https://ocw.mit.edu/courses/18-642-topics-in-mathematics-with-applications-in-finance-fall-2024/";

export default function FinanceCourse() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/finance">Finance</Link>
        <span>/</span>
        <span>Mathematics in Finance</span>
      </nav>
      <SubjectHeader
        title="Mathematics in Finance"
        description="Mathematical foundations for prices, uncertainty, portfolios, and financial decisions."
        credit={
          <>
            {" "}
            <a href={course}>MIT 18.642</a> · Fall 2024{" "}
          </>
        }
      />
      <div>
        <CourseContents
          groups={[
            {
              title: "Markets and mathematical foundations",
              range: "Lectures 1–5",
              entries: [
                {
                  href: "/notes/finance/mathematics-in-finance/markets-and-bond-math",
                  number: "01",
                  title: "Markets and bond mathematics",
                  description:
                    "Financial vocabulary, compound interest, present value, coupon bonds, yields, duration, convexity and forward rates. Includes original worked examples and practice questions.",
                },
                {
                  href: "/notes/finance/mathematics-in-finance/linear-algebra",
                  number: "02",
                  title: "Linear algebra",
                  description:
                    "Portfolio vectors, replication and rank, state prices, eigenvalues, Markov chains and singular value decomposition. Includes worked examples and practice questions.",
                },
                {
                  number: "03",
                  title: "Quantitative equity investing",
                  description:
                    "Jeff Shen · Guest recording unavailable on MIT OpenCourseWare.",
                },
                {
                  href: "/notes/finance/mathematics-in-finance/probability-theory",
                  number: "04",
                  title: "Probability theory",
                  description:
                    "Linear algebra review, distributions, moments, normal and lognormal models, expected payoffs, covariance and PCA. Includes worked examples, exercises and a companion reading guide.",
                },
                {
                  href: "/notes/finance/mathematics-in-finance/stochastic-processes-i",
                  number: "05",
                  title: "Probability and stochastic processes",
                  description:
                    "PCA, probability limits, utility pricing, information and martingales. Includes worked proofs, examples, exercises and a stopping time reading guide.",
                },
              ],
            },
            {
              title: "Stochastic processes, rates and regression",
              range: "Lectures 6–8",
              entries: [
                {
                  href: "/notes/finance/mathematics-in-finance/stopping-times-and-regression",
                  number: "06",
                  title: "Stopping times and regression",
                  description:
                    "Stopped martingales, fair and biased exit problems, Markov chains and regression foundations. Includes an original fitted line continued in Lecture 8.",
                },
                {
                  href: "/notes/finance/mathematics-in-finance/linear-rates-products-and-models",
                  number: "07",
                  title: "Linear rates, products and models",
                  description:
                    "Rate conventions, forwards, swaps, yield curve calibration, PV01 hedging, PnL and bond spreads, with worked cash flow examples.",
                },
                {
                  href: "/notes/finance/mathematics-in-finance/regression-inference-and-diagnostics",
                  number: "08",
                  title: "Regression inference and diagnostics",
                  description:
                    "OLS geometry, coefficient uncertainty, t and F tests, prediction intervals, influence and GLS. Follow the complete worked fit from Lecture 6.",
                },
              ],
            },
            {
              title: "Factors, counterparty risk and model stability",
              range: "Lectures 9–11",
              entries: [
                {
                  href: "/notes/finance/mathematics-in-finance/pca-in-finance",
                  number: "09",
                  title: "PCA in finance",
                  description:
                    "Financial data preparation, yield curve factors, factor neutral portfolios and out of sample validation, with original numerical examples.",
                },
                {
                  href: "/notes/finance/mathematics-in-finance/counterparty-risk-optimization",
                  number: "10",
                  title: "Counterparty risk optimisation",
                  description:
                    "VaR, expected shortfall, collateral, scenario optimisation and risk preserving network trades. Includes discrete loss and network examples.",
                },
                {
                  href: "/notes/finance/mathematics-in-finance/regression-regularization-and-regime-changes",
                  number: "11",
                  title: "Regression, regularisation and regime changes",
                  description:
                    "Ridge, PCR, lasso, coefficient restrictions, period stability tests and empirical CAPM interpretation, with a complete two period example.",
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
