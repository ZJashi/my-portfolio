import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function DataSection() {
  return (
    <section id="data" className={styles.section}>
      <span className={styles.sectionNumber}>
        01 / THE INPUT DEFINES THE QUESTION
      </span>
      <h2>Choose the data</h2>
      <p>
        <MathText>
          {
            "Let observations be rows of $X\\in\\mathbb R^{T\\times m}$, with dates in rows and assets or maturities in columns. For positive prices, log returns are $r_{t,j}=\\log P_{t,j}-\\log P_{t-1,j}$. For yields, changes $\\Delta y_{t,j}=y_{t,j}-y_{t-1,j}$ often better represent local price risk than yield levels."
          }
        </MathText>
      </p>
      <p>
        A price level model, a yield level model and a change model answer
        different questions. Align observation times, currency treatment,
        holidays and missing values before calculating covariance. A shared
        calendar does not guarantee that every closing price reflects
        information at the same instant.
      </p>
      <NoteBox title="Centre and choose a scaling convention">
        <Equation>
          {"X_c=X-\\mathbf1\\bar x^T,\\qquad S=\\frac{X_c^TX_c}{T-1}."}
        </Equation>
        <p>
          Covariance PCA preserves the original relative variances. Dividing
          each column by its training standard deviation gives correlation PCA,
          which changes the metric and the meaning of the loadings.
        </p>
      </NoteBox>
      <p>
        <strong>Original scale example.</strong> Two independent variables have
        variances 100 and 1. Covariance PCA assigns 100/101 ≈ 99.01% of total
        variance to the first coordinate. After standardisation both eigenvalues
        are 1: there is no uniquely preferred first direction. Scaling has
        changed the objective, rather than uncovered the same answer in
        different notation.
      </p>
      <p>
        PCA itself needs finite covariance, not normal observations. Normality
        is a separate modelling assumption; a coordinate rotation does not
        remove heavy tails or nonlinear dependence.
      </p>
    </section>
  );
}
