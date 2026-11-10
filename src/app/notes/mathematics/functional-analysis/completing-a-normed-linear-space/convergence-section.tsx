import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ConvergenceSection() {
  return (
    <section id="convergence" className={styles.section}>
      <span className={styles.sectionNumber}>09 / LECTURE 4</span>
      <h2>Proving convergence to the candidate</h2>
      <p>
        <MathText>
          {
            "It remains to show $\\|\\xi_k-\\eta\\|_{\\widehat X}\\to0$ as $k\\to\\infty$. For sufficiently large $k$, choose the unique band index $p$ satisfying $n_p\\leq k<n_{p+1}$. By definition,"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|\\xi_k-\\eta\\|_{\\widehat X}=\\lim_{j\\to\\infty}\\|x_j^{(k)}-a_j\\|_X."
        }
      </Equation>
      <p>
        <MathText>
          {
            "For $j\\geq\\max\\{t_p,p\\}$, insert the selected point $a_p=x_{t_p}^{(n_p)}$:"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|x_j^{(k)}-a_j\\|_X\\leq\\|x_j^{(k)}-a_p\\|_X+\\|a_p-a_j\\|_X."}
      </Equation>
      <p>
        <MathText>
          {
            "The first term compares two entries in the same band tail, so it is at most $4\\,2^{-p}$. The telescoping estimate bounds the second term by $8\\,2^{-p}$. Taking the limit in $j$ gives"
          }
        </MathText>
      </p>
      <Equation>{"\\|\\xi_k-\\eta\\|_{\\widehat X}\\leq12\\,2^{-p}."}</Equation>
      <p>
        <MathText>
          {
            "As $k\\to\\infty$, the band index $p$ also tends to infinity, so this bound tends to zero. Every Cauchy sequence in $\\widehat X$ therefore converges to a point of $\\widehat X$."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="The constructed space is complete">
        <p>
          <MathText>
            {
              "The quotient $\\widehat X=Z/Y$, equipped with the limit norm, is a Banach space. The original space $X$ was not assumed complete."
            }
          </MathText>
        </p>
      </NoteBox>
    </section>
  );
}
