import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function LpCompleteSection() {
  return (
    <section id="lp-complete" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 6</span>
      <h2>Completeness of summable sequence spaces</h2>
      <p>
        <MathText>
          {
            "Let $(x^{(n)})_n$ be Cauchy in $\\ell^p$. As before, each $x^{(n)}$ is itself a sequence. The construction follows the same pattern as for $\\ell^\\infty$, but finite partial sums replace the supremum."
          }
        </MathText>
      </p>
      <h3>Step 1 — Take scalar limits</h3>
      <Equation>
        {
          "|x_j^{(n)}-x_j^{(m)}|^p\\leq\\sum_{k=1}^{\\infty}|x_k^{(n)}-x_k^{(m)}|^p=\\|x^{(n)}-x^{(m)}\\|_p^p."
        }
      </Equation>
      <p>
        <MathText>
          {
            "For fixed $j$, this proves the scalar coordinate sequence is Cauchy. Let its limit be $x_j$, and set $x=(x_j)_j$."
          }
        </MathText>
      </p>
      <h3>Step 2 — Prove that the limit belongs to the space</h3>
      <p>
        <MathText>
          {
            "There is $C<\\infty$ with $\\|x^{(n)}\\|_p\\leq C$ for every $n$. Fix a finite integer $J$. Since the sum is finite, we may pass to the coordinate limits:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\sum_{j=1}^{J}|x_j|^p=\\lim_{n\\to\\infty}\\sum_{j=1}^{J}|x_j^{(n)}|^p\\leq C^p."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The bound does not depend on $J$. Letting $J\\to\\infty$ gives $\\sum_j|x_j|^p\\leq C^p$, so $x\\in\\ell^p$."
          }
        </MathText>
      </p>
      <h3>Step 3 — Prove convergence in norm</h3>
      <p>
        <MathText>
          {
            "Given $\\varepsilon>0$, choose $N$ such that $\\|x^{(n)}-x^{(m)}\\|_p\\leq\\varepsilon$ for $n,m\\geq N$. For any finite $J$,"
          }
        </MathText>
      </p>
      <Equation>
        {"\\sum_{j=1}^{J}|x_j^{(n)}-x_j^{(m)}|^p\\leq\\varepsilon^p."}
      </Equation>
      <p>
        <MathText>
          {
            "Keep $n\\geq N$ and $J$ fixed, and let $m\\to\\infty$. The finite sum converges to $\\sum_{j=1}^{J}|x_j^{(n)}-x_j|^p$, still bounded by $\\varepsilon^p$. Then let $J\\to\\infty$:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|x^{(n)}-x\\|_p^p=\\sum_{j=1}^{\\infty}|x_j^{(n)}-x_j|^p\\leq\\varepsilon^p."
        }
      </Equation>
      <NoteBox kind="result" title="Summable sequences form Banach spaces">
        <p>
          <MathText>
            {
              "For every $1\\leq p<\\infty$, the space $\\ell^p$ is complete in its p-norm."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "The order of operations matters: first pass to a limit in a finite sum, then let the cutoff increase. This avoids an unjustified interchange of a limit and an infinite series."
          }
        </MathText>
      </p>
    </section>
  );
}
