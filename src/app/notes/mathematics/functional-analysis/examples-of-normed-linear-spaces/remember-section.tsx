import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>12 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Sequence spaces">
        <ul className={styles.takeaways}>
          <li>
            <strong>Boundedness.</strong>{" "}
            <MathText>
              {"Every Cauchy sequence in a normed space is bounded."}
            </MathText>
          </li>
          <li>
            <strong>Supremum norm.</strong>{" "}
            <MathText>
              {
                "$\\ell^\\infty$ consists of bounded scalar sequences and is a Banach space."
              }
            </MathText>
          </li>
          <li>
            <strong>Summability.</strong>{" "}
            <MathText>
              {
                "$\\ell^p$ consists of sequences with $\\sum_j|a_j|^p<\\infty$ and is Banach for $1\\leq p<\\infty$."
              }
            </MathText>
          </li>
          <li>
            <strong>Proof pattern.</strong>{" "}
            <MathText>
              {
                "Construct coordinate limits, verify membership, then use a uniform Cauchy estimate to prove norm convergence."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="Inequalities and limits">
        <ul className={styles.takeaways}>
          <li>
            <strong>Hölder.</strong>{" "}
            <MathText>
              {
                "Conjugate exponents satisfy $1/p+1/q=1$ and give $\\sum_j|a_jb_j|\\leq\\|a\\|_p\\|b\\|_q$."
              }
            </MathText>
          </li>
          <li>
            <strong>Minkowski.</strong>{" "}
            <MathText>
              {
                "Hölder gives the p-norm triangle inequality; the endpoint $p=1$ follows directly."
              }
            </MathText>
          </li>
          <li>
            <strong>Infinite sums.</strong>{" "}
            <MathText>
              {
                "Pass to limits in finite partial sums first, then let the cutoff tend to infinity."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="definition" title="Function spaces and completion">
        <ul className={styles.takeaways}>
          <li>
            <strong>Supremum norm.</strong>{" "}
            <MathText>
              {
                "$C_c(M)$ need not be complete: uniform limits may lose compact support. If $M$ is compact, $C(M)$ is complete."
              }
            </MathText>
          </li>
          <li>
            <strong>Integral norm.</strong>{" "}
            <MathText>
              {
                "$C_c(D)$ need not be complete in the integral p-norm: limits may have no continuous representative."
              }
            </MathText>
          </li>
          <li>
            <strong>Completion.</strong>{" "}
            <MathText>
              {
                "The integral-norm completion is $L^p(D)$, with equality almost everywhere understood; $C_c(D)$ is dense for finite $p$."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
