import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function VariationSection() {
  return (
    <section id="variation" className={styles.section}>
      <span className={styles.sectionNumber}>08 / LECTURE 7</span>
      <h2>Finite signed measures and total variation</h2>
      <p>
        <MathText>
          {
            "Let $\\Omega=(-1,1)$ with its Borel sigma algebra. Work over the real field and let $\\mathcal M(\\Omega)$ be the vector space of finite signed Borel measures. Addition and multiplication by a real scalar are defined on each Borel set."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The Jordan decomposition writes a signed measure uniquely as $\\mu=\\mu^+-\\mu^-$, where $\\mu^+$ and $\\mu^-$ are nonnegative finite measures that are mutually singular. Mutual singularity means their masses can be concentrated on disjoint measurable sets."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Total variation norm">
        <Equation>
          {
            "\\|\\mu\\|_{\\mathrm{TV}}=\\mu^+(\\Omega)+\\mu^-(\\Omega)=|\\mu|(\\Omega)."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The Jordan condition matters: an arbitrary expression as a difference of two positive measures would not determine this sum uniquely. Finiteness matters too, since a norm must have finite values on its domain."
          }
        </MathText>
      </p>
      <h3>Verification that this is a norm</h3>
      <p>
        <MathText>
          {
            "An equivalent description uses finite Borel partitions $\\{A_1,\\ldots,A_r\\}$ of $\\Omega$:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|\\mu\\|_{\\mathrm{TV}}=\\sup_{\\{A_i\\}}\\sum_{i=1}^{r}|\\mu(A_i)|."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Each partition sum is at most $\\mu^+(\\Omega)+\\mu^-(\\Omega)$. A partition into a positive and a negative set for the Jordan decomposition attains that sum, proving equivalence."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The formula is nonnegative. If it is zero, applying it to the partition $\\{A,\\Omega\\setminus A\\}$ shows $\\mu(A)=0$ for every Borel $A$, so $\\mu=0$. Absolute homogeneity follows from $|a\\mu(A)|=|a|\\,|\\mu(A)|$. Finally, the scalar triangle inequality on each partition gives"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\sum_i|(\\mu+\\nu)(A_i)|\\leq\\sum_i|\\mu(A_i)|+\\sum_i|\\nu(A_i)|\\leq\\|\\mu\\|_{\\mathrm{TV}}+\\|\\nu\\|_{\\mathrm{TV}}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Taking the supremum proves $\\|\\mu+\\nu\\|_{\\mathrm{TV}}\\leq\\|\\mu\\|_{\\mathrm{TV}}+\\|\\nu\\|_{\\mathrm{TV}}$. Thus the signed measures form a normed real linear space."
          }
        </MathText>
      </p>
    </section>
  );
}
