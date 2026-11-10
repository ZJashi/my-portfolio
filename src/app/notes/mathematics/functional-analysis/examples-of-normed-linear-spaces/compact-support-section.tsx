import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function CompactSupportSection() {
  return (
    <section id="compact-support" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 6</span>
      <h2>Continuous functions with compact support</h2>
      <p>
        <MathText>
          {
            "Let $(M,d)$ be a metric space. The support of a continuous function is the closure, within $M$, of the set on which it is nonzero:"
          }
        </MathText>
      </p>
      <Equation>
        {"\\operatorname{supp}f=\\overline{\\{x\\in M:f(x)\\ne0\\}}^{\\,M}."}
      </Equation>
      <NoteBox
        kind="definition"
        title="Compactly supported continuous functions"
      >
        <Equation>
          {
            "C_c(M;\\mathbb K)=\\{f:M\\to\\mathbb K:f\\text{ is continuous and }\\operatorname{supp}f\\text{ is compact}\\}."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "We use $C_c$ to mean compact support. The notation $C_0$ is often reserved for continuous functions vanishing at infinity, which is a different condition on noncompact spaces."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Pointwise sums and scalar multiples are continuous. The support of $f+g$ is contained in the finite union $\\operatorname{supp}f\\cup\\operatorname{supp}g$, and is closed; hence it is compact. Scalar multiplication also preserves compact support. Thus $C_c(M;\\mathbb K)$ is a linear space."
          }
        </MathText>
      </p>
      <Equation>{"\\|f\\|_\\infty=\\sup_{x\\in M}|f(x)|."}</Equation>
      <p>
        <MathText>
          {
            "This supremum is finite: $f$ is bounded on its compact support and is zero outside it. Nonnegativity, definiteness, absolute homogeneity and the triangle inequality follow pointwise, exactly as for bounded sequences."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "This normed space is not complete in general. Uniform limits preserve continuity, but compact support can be lost. If $M$ is compact, that obstruction disappears: every continuous function on $M$ has compact support, and the supremum-norm space is complete."
          }
        </MathText>
      </p>
    </section>
  );
}
