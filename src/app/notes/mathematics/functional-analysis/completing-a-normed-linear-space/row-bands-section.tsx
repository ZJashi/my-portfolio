import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RowBandsSection() {
  return (
    <section id="row-bands" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 4</span>
      <h2>Choosing rows and uniform tail bounds</h2>
      <h3>Step 1 — Choose increasingly late rows</h3>
      <p>
        <MathText>
          {
            "For each integer $p\\geq1$, put $\\delta_p=2^{-p}$. Since $(\\xi_n)$ is Cauchy, choose a strictly increasing sequence of integers $n_p$ such that"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|\\xi_n-\\xi_m\\|_{\\widehat X}\\leq\\frac{\\delta_p}{2}\\qquad(n,m\\geq n_p)."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Strict increase is possible because increasing a valid threshold preserves the estimate. In particular, for every $m\\geq n_p$,"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\lim_{j\\to\\infty}\\|x_j^{(n_p)}-x_j^{(m)}\\|_X\\leq\\frac{\\delta_p}{2}."
        }
      </Equation>
      <h3>Step 2 — Control entries in the same column</h3>
      <p>
        <MathText>
          {
            "Restrict attention to the finite band $n_p\\leq m\\leq n_{p+1}$. For each row $m$ in this band, the preceding limit lets us choose a column threshold $r_{p,m}$ such that"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|x_j^{(n_p)}-x_j^{(m)}\\|_X\\leq\\delta_p\\qquad(j\\geq r_{p,m})."}
      </Equation>
      <p>
        <MathText>
          {
            "There is room between the limiting bound $\\delta_p/2$ and the target bound $\\delta_p$. Since there are only finitely many rows in the band, their thresholds have a finite maximum $r_p=\\max_{n_p\\leq m\\leq n_{p+1}}r_{p,m}$. The estimate then holds for all these rows whenever $j\\geq r_p$."
          }
        </MathText>
      </p>
      <h3>Step 3 — Control entries in the same row</h3>
      <p>
        <MathText>
          {
            "Each row is Cauchy in $X$. For every $m$ in the same finite band, choose $s_{p,m}$ so that"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|x_j^{(m)}-x_k^{(m)}\\|_X\\leq\\delta_p\\qquad(j,k\\geq s_{p,m})."}
      </Equation>
      <p>
        <MathText>
          {
            "Take $s_p$ to be the maximum of these finitely many thresholds. Choose strictly increasing integers $t_p$ with $t_p\\geq\\max\\{r_p,s_p\\}$."
          }
        </MathText>
      </p>
      <h3>Step 4 — Compare any two entries in a band tail</h3>
      <p>
        <MathText>
          {
            "For $n_p\\leq m,n\\leq n_{p+1}$ and $j,k\\geq t_p$, first move within row $m$, then compare rows in column $k$ through the reference row $n_p$:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\begin{aligned}\\|x_j^{(m)}-x_k^{(n)}\\|_X&\\leq\\|x_j^{(m)}-x_k^{(m)}\\|_X\\\\&\\quad+\\|x_k^{(m)}-x_k^{(n_p)}\\|_X\\\\&\\quad+\\|x_k^{(n_p)}-x_k^{(n)}\\|_X\\\\&\\leq3\\delta_p\\leq4\\delta_p.\\end{aligned}"
        }
      </Equation>
      <NoteBox kind="result" title="Uniform band estimate">
        <p>
          <MathText>
            {
              "The same estimate controls different rows and different columns, provided both rows lie in the chosen band and both columns lie sufficiently far to the right."
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\|x_j^{(m)}-x_k^{(n)}\\|_X\\leq4\\,2^{-p}\\quad\\begin{gathered}n_p\\leq m,n\\leq n_{p+1},\\\\j,k\\geq t_p.\\end{gathered}"
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The finite band is essential: it permits a single maximum of the row thresholds. No uniform threshold over infinitely many rows has been assumed."
          }
        </MathText>
      </p>
    </section>
  );
}
