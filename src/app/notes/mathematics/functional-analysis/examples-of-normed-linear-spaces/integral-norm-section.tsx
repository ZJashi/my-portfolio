import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function IntegralNormSection() {
  return (
    <section id="integral-norm" className={styles.section}>
      <span className={styles.sectionNumber}>09 / LECTURE 6</span>
      <h2>Integral norms on compactly supported functions</h2>
      <p>
        <MathText>
          {
            "Let $D\\subseteq\\mathbb R^m$ be a nonempty open connected set, and take real-valued functions in $C_c(D)$. For a finite exponent $1\\leq p<\\infty$, use Lebesgue measure to define"
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Integral p-norm">
        <Equation>
          {"\\|f\\|_{L^p(D)}=\\left(\\int_D|f(x)|^p\\,dx\\right)^{1/p}."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The integral is finite because $f$ is bounded and supported on a compact subset of $D$, which has finite Lebesgue measure. Absolute values are essential in the formula."
          }
        </MathText>
      </p>
      <h3>Why this is a norm on continuous functions</h3>
      <p>
        <MathText>
          {
            "Absolute homogeneity is immediate. If $f(x_0)\\ne0$, continuity gives a small ball inside $D$ on which $|f|$ is bounded below by a positive number. That ball has positive measure, so the integral of $|f|^p$ is positive. Hence a continuous function with zero integral norm is identically zero."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "For $p>1$, integral Hölder inequality supplies Minkowski inequality by the same argument as for sequences, replacing sums by integrals. For $p=1$, integrate the pointwise triangle inequality. Thus this formula is a norm, but the normed space need not be complete."
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\int_D|fg|\\,dx\\leq\\|f\\|_{L^p(D)}\\|g\\|_{L^q(D)},\\qquad \\|f+g\\|_{L^p(D)}\\leq\\|f\\|_{L^p(D)}+\\|g\\|_{L^p(D)}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Here $p$ and $q$ are conjugate. An integral norm controls accumulated error rather than the largest pointwise error, so a Cauchy sequence can develop a discontinuity in its limit."
          }
        </MathText>
      </p>
    </section>
  );
}
