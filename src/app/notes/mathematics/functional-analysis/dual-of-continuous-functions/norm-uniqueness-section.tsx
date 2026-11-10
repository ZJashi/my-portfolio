import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function NormUniquenessSection() {
  return (
    <section id="norm-uniqueness" className={styles.section}>
      <span className={styles.sectionNumber}>09 / LECTURE 14A</span>
      <h2>Equality of norms, uniqueness and the converse</h2>
      <p>
        <MathText>
          {"For any finite signed measure $\\nu$, integration satisfies"}
        </MathText>
      </p>
      <Equation>
        {
          "\\left|\\int f\\,d\\nu\\right|\\leq\\int|f|\\,d|\\nu|\\leq\\|f\\|_\\infty\\|\\nu\\|_{\\mathrm{TV}}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Applied to the representing measure constructed above, this gives $\\|\\ell\\|\\leq\\|\\nu_F\\|_{\\mathrm{TV}}$. Together with the reverse bound from the construction, it proves equality."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "To verify uniqueness, suppose two finite signed Borel measures give the same integrals for every continuous function, and subtract them to obtain $\\mu$. For each $t<b$, choose continuous functions equal to one on $[a,t]$, decreasing linearly to zero just to the right of $t$, and zero thereafter. These are bounded by one and converge pointwise to $\\mathbf1_{[a,t]}$. Dominated convergence with respect to $|\\mu|$ gives $\\mu([a,t])=0$. The constant function gives $\\mu([a,b])=0$. Differences determine all half-open interval masses, and uniqueness of finite measures on the generated Borel sigma-algebra gives $\\mu=0$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Conversely, define $\\ell_\\nu(f)=\\int f\\,d\\nu$ for a prescribed finite signed measure. It is linear and bounded by the preceding estimate. Apply the construction to $\\ell_\\nu$: it produces a measure with norm $\\|\\ell_\\nu\\|$. Uniqueness forces that measure to be $\\nu$, proving the reverse inequality and hence"
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Isometric identification">
        <p>
          <MathText>
            {
              "Finite signed measures, normalized BV functions and bounded functionals carry the same norm."
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\|\\ell_\\nu\\|=\\|\\nu\\|_{\\mathrm{TV}}=|F(a)|+\\operatorname{Var}F,\\qquad F(t)=\\nu([a,t])."
          }
        </Equation>
      </NoteBox>
    </section>
  );
}
