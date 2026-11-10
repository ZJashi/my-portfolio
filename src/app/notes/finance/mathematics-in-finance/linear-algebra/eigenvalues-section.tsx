import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function EigenvaluesSection() {
  return (
    <section id="eigenvalues" className={styles.section}>
      <span className={styles.sectionNumber}>
        05 / REPEATED TRANSFORMATIONS
      </span>
      <h2>Eigenvalues and dynamics</h2>
      <NoteBox title="An eigenvector keeps its direction">
        <Equation>
          {"Mv=\\lambda v,\\qquad v\\ne0,\\qquad\\det(M-\\lambda I)=0."}
        </Equation>
        <p>
          If a square matrix has a full basis of eigenvectors, collect them as
          columns of S. Then powers act by raising each eigenvalue to the same
          power.
        </p>
        <Equation>
          {"M=S\\Lambda S^{-1},\\qquad M^t=S\\Lambda^tS^{-1}."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "For the deterministic state equation $x_{t+1}=Mx_t$, this gives $x_t=M^tx_0$. A mode decays when $|\\lambda|<1$, persists at $\\lambda=1$, alternates for a negative real eigenvalue, and grows when $|\\lambda|>1$. Diagonalisation requires independent eigenvectors; it is not automatic."
          }
        </MathText>
      </p>
      <p>
        <strong>Original example.</strong>
        <MathText>
          {
            " Take $M=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$. The unit vectors $v_+=(1,1)^T/\\sqrt2$ and $v_-=(1,-1)^T/\\sqrt2$ have eigenvalues 3 and 1. Since $(1,0)^T=(v_++v_-)/\\sqrt2$, repeated multiplication gives:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "M^t\\begin{pmatrix}1\\\\0\\end{pmatrix}=\\frac12\\begin{pmatrix}3^t+1\\\\3^t-1\\end{pmatrix}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "For any real symmetric matrix, eigenvalues are real and an orthonormal eigenbasis exists: $M=S\\Lambda S^T$. To see why distinct modes are orthogonal, compute $v_i^TMv_j$ in two ways: $(\\lambda_j-\\lambda_i)v_i^Tv_j=0$."
          }
        </MathText>
      </p>
    </section>
  );
}
