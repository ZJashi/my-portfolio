import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function LinftyCompleteSection() {
  return (
    <section id="linfty-complete" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 6</span>
      <h2>Completeness of the bounded sequence space</h2>
      <p>
        <MathText>
          {
            "Let $(x^{(n)})_n$ be Cauchy in $\\ell^\\infty$, with $x^{(n)}=(x_j^{(n)})_{j\\geq1}$. The outer index $n$ selects a sequence; the inner index $j$ selects its coordinate. The proof constructs a coordinatewise candidate, checks that it belongs to the space, and then proves norm convergence."
          }
        </MathText>
      </p>
      <h3>Step 1 — Construct the coordinate limits</h3>
      <Equation>
        {"|x_j^{(n)}-x_j^{(m)}|\\leq\\|x^{(n)}-x^{(m)}\\|_\\infty."}
      </Equation>
      <p>
        <MathText>
          {
            "For each fixed $j$, the right side tends to zero as $n,m\\to\\infty$. Thus the scalar sequence $(x_j^{(n)})_n$ is Cauchy. Completeness of $\\mathbb K$ supplies a limit $x_j$. Set $x=(x_j)_{j\\geq1}$."
          }
        </MathText>
      </p>
      <h3>Step 2 — Check that the candidate is bounded</h3>
      <p>
        <MathText>
          {
            "Boundedness of Cauchy sequences gives a common constant $C$ with $\\|x^{(n)}\\|_\\infty\\leq C$ for every $n$. Fixing $j$ and passing to the scalar limit gives $|x_j|=\\lim_n|x_j^{(n)}|\\leq C$. Since the same bound works for every coordinate, $\\|x\\|_\\infty\\leq C$ and $x\\in\\ell^\\infty$."
          }
        </MathText>
      </p>
      <h3>Step 3 — Upgrade coordinate convergence to norm convergence</h3>
      <p>
        <MathText>
          {
            "Given $\\varepsilon>0$, choose $N$ such that $\\|x^{(n)}-x^{(m)}\\|_\\infty\\leq\\varepsilon$ for $n,m\\geq N$. For each fixed coordinate $j$ and fixed $n\\geq N$, let $m\\to\\infty$ in the coordinate inequality. This yields $|x_j^{(n)}-x_j|\\leq\\varepsilon$. The bound holds for every $j$ with the same $N$, so"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|x^{(n)}-x\\|_\\infty=\\sup_{j\\geq1}|x_j^{(n)}-x_j|\\leq\\varepsilon\\qquad(n\\geq N)."
        }
      </Equation>
      <NoteBox kind="result" title="Bounded sequences form a Banach space">
        <p>
          <MathText>
            {
              "Every Cauchy sequence in $\\ell^\\infty$ converges in the supremum norm to a bounded sequence."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "Coordinatewise convergence alone would not justify taking this conclusion. The uniform Cauchy estimate supplies one threshold that works simultaneously for all coordinates."
          }
        </MathText>
      </p>
    </section>
  );
}
