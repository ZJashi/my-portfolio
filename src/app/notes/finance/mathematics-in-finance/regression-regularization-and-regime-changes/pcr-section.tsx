import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function PcrSection() {
  return (
    <section id="pcr" className={styles.section}>
      <span className={styles.sectionNumber}>03 / A HARD FACTOR CUTOFF</span>
      <h2>Principal components regression</h2>
      <p>
        <MathText>
          {
            "With $X=UDV^T$, retain K right singular vectors $V_K$ and regress y on $Z_K=XV_K$. For positive retained singular values:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\widehat\\beta_{\\mathrm{PCR}}=V_KD_K^{-1}U_K^Ty,\\qquad\\widehat y_{\\mathrm{PCR}}=U_KU_K^Ty."
        }
      </Equation>
      <p>
        PCR discards omitted directions completely. Ridge shrinks continuously.
        In the diagonal example, retaining only the first direction gives
        coefficients (1,0), compared with ridge’s approximately (0.9174,0.1).
      </p>
      <NoteBox title="Predictor variance is not response relevance">
        <p>
          PCA selects directions using X alone. A small variance predictor
          direction can still carry most of the information about y. Retaining a
          high share of X variance does not guarantee useful prediction.
        </p>
      </NoteBox>
      <p>
        <strong>Original counterexample.</strong> Keep the same singular values
        10 and 1, but let y equal the second left singular vector. Its
        projection onto the first direction is zero. A one component PCR
        predicts zero even though the second direction fits y exactly in this
        construction.
      </p>
      <p>
        Choose the retained rank by a validation procedure tied to the actual
        prediction objective. Near equal singular values may make individual
        retained directions unstable, particularly when the cutoff separates an
        almost tied group.
      </p>
    </section>
  );
}
