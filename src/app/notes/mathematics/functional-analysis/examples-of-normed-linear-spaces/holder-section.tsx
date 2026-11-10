import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function HolderSection() {
  return (
    <section id="holder" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 6</span>
      <h2>Hölder inequality and conjugate exponents</h2>
      <p>
        <MathText>
          {
            "For $p>1$, the conjugate exponent is $q=p/(p-1)$, so $q>1$ and $1/p+1/q=1$. Hölder inequality controls the product of a sequence in $\\ell^p$ with one in $\\ell^q$."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Hölder inequality">
        <p>
          <MathText>
            {
              "If $a\\in\\ell^p$ and $b\\in\\ell^q$ for conjugate exponents, their coordinatewise product is absolutely summable and"
            }
          </MathText>
        </p>
        <Equation>
          {"\\sum_{j=1}^{\\infty}|a_jb_j|\\leq\\|a\\|_p\\,\\|b\\|_q."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Absolute summability means $(a_jb_j)_j\\in\\ell^1$. In particular, the scalar series $\\sum_j a_jb_j$ converges absolutely. Hölder inequality is used here as the standard inequality supplying the norm triangle inequality."
          }
        </MathText>
      </p>
      <h3>The endpoint p equals one</h3>
      <p>
        <MathText>
          {
            "The conjugate of $p=1$ is $q=\\infty$, with the convention $1/\\infty=0$. In this case the inequality is immediate:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\sum_{j=1}^{\\infty}|a_jb_j|\\leq\\left(\\sup_j|b_j|\\right)\\sum_{j=1}^{\\infty}|a_j|=\\|a\\|_1\\|b\\|_\\infty."
        }
      </Equation>
      <div className={styles.exercise}>
        <h3>Derive the triangle inequality from Hölder</h3>
        <p>
          <MathText>
            {
              "Show that $\\|a+b\\|_p\\leq\\|a\\|_p+\\|b\\|_p$ for $a,b\\in\\ell^p$."
            }
          </MathText>
        </p>
        <details>
          <summary>Show solution</summary>
          <p>
            <MathText>
              {
                "For $p=1$, sum the scalar triangle inequalities. For $p>1$, fix a finite cutoff $J$ and write $S_J=\\sum_{j=1}^{J}|a_j+b_j|^p$. Applying the scalar triangle inequality followed by finite-sum Hölder gives"
              }
            </MathText>
          </p>
          <Equation>
            {
              "\\begin{aligned}S_J&\\leq\\sum_{j=1}^{J}|a_j|\\,|a_j+b_j|^{p-1}+\\sum_{j=1}^{J}|b_j|\\,|a_j+b_j|^{p-1}\\\\&\\leq(\\|a\\|_p+\\|b\\|_p)S_J^{1/q}.\\end{aligned}"
            }
          </Equation>
          <p>
            <MathText>
              {
                "Here $(p-1)q=p$. If $S_J=0$, the required finite-sum bound is immediate. Otherwise divide by $S_J^{1/q}$ to get $S_J^{1/p}\\leq\\|a\\|_p+\\|b\\|_p$. Let $J\\to\\infty$ to obtain the triangle inequality, also called Minkowski inequality."
              }
            </MathText>
          </p>
        </details>
      </div>
    </section>
  );
}
