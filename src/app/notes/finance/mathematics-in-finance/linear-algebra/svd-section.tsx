import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function SvdSection() {
  return (
    <section id="svd" className={styles.section}>
      <span className={styles.sectionNumber}>07 / MATRIX STRETCH</span>
      <h2>Singular value decomposition</h2>
      <NoteBox kind="result" title="SVD works for rectangular matrices">
        <Equation>
          {
            "A=U\\Sigma V^T,\\quad U^TU=I_m,\\quad V^TV=I_n,\\quad\\sigma_1\\ge\\sigma_2\\ge\\cdots\\ge0."
          }
        </Equation>
        <p>
          <MathText>
            {
              "Here $U$ is $m\\times m$, $\\Sigma$ is $m\\times n$ and $V$ is $n\\times n$. The positive singular values are square roots of the positive eigenvalues of $A^TA$. Their number is the rank."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "Choose orthonormal eigenvectors $v_i$ of $A^TA$. For $\\sigma_i>0$, define $u_i=Av_i/\\sigma_i$. Then $u_i^Tu_j=v_i^TA^TAv_j/(\\sigma_i\\sigma_j)=\\delta_{ij}$. Complete the $u_i$ to an orthonormal basis to obtain the decomposition. It expresses A as a sum of rank one maps:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "A=\\sum_{i=1}^{r}\\sigma_i u_iv_i^T,\\qquad\\max_{\\|x\\|_2=1}\\|Ax\\|_2=\\sigma_1."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Indeed, writing $x=Vz$ preserves length and gives $\\|Ax\\|_2^2=\\sum_i\\sigma_i^2z_i^2\\le\\sigma_1^2$, with equality at $x=v_1$. For symmetric A this maximum is $\\max_i|\\lambda_i|$; that equality fails for general matrices."
          }
        </MathText>
      </p>
      <h3>A counterexample to confusing eigenvalues with stretch</h3>
      <Equation>
        {
          "A=\\begin{pmatrix}0&2\\\\0&0\\end{pmatrix},\\qquad\\lambda_1=\\lambda_2=0,\\qquad A\\begin{pmatrix}0\\\\1\\end{pmatrix}=\\begin{pmatrix}2\\\\0\\end{pmatrix}."
        }
      </Equation>
      <p>
        The largest stretch is 2 despite both eigenvalues being zero. This is
        why general sensitivity calculations use singular values. In a data
        matrix, retaining large singular modes gives a route toward dimension
        reduction; later lectures connect related ideas to principal components.
      </p>
    </section>
  );
}
