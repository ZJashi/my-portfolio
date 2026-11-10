import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function DimensionSection() {
  return (
    <section id="dimension" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 5</span>
      <h2>Why all finite bases have the same size</h2>
      <p>
        <MathText>
          {
            "Suppose $z_1,\\ldots,z_n$ and $w_1,\\ldots,w_m$ are two bases of the same space. Since each spans $X$, write"
          }
        </MathText>
      </p>
      <Equation>
        {
          "w_k=\\sum_{j=1}^{n}a_{kj}z_j,\\qquad z_j=\\sum_{\\ell=1}^{m}b_{j\\ell}w_\\ell."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The coefficient matrices have sizes $A\\in\\mathbb K^{m\\times n}$ and $B\\in\\mathbb K^{n\\times m}$. Substituting the second expansion into the first gives"
          }
        </MathText>
      </p>
      <Equation>
        {
          "w_k=\\sum_{\\ell=1}^{m}\\left(\\sum_{j=1}^{n}a_{kj}b_{j\\ell}\\right)w_\\ell."
        }
      </Equation>
      <p>
        <MathText>
          {
            "By uniqueness of the coefficients in the $w$ basis, $\\sum_j a_{kj}b_{j\\ell}=\\delta_{k\\ell}$. Here $\\delta_{k\\ell}$ is one when $k=\\ell$ and zero otherwise. Hence $AB=I_m$. Reversing the substitution and using independence of the $z$ vectors gives $BA=I_n$."
          }
        </MathText>
      </p>
      <h3>The matrix dimension argument</h3>
      <Equation>
        {
          "m=\\operatorname{rank}(AB)\\leq n,\\qquad n=\\operatorname{rank}(BA)\\leq m."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The two inequalities imply $m=n$. Both identities matter: $AB=I_m$ by itself gives only $m\\leq n$, not equality. This proves that the size of a finite basis depends only on the space."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Dimension">
        <p>
          <MathText>
            {
              "The dimension of $X$ is the number of vectors in any finite basis. If there are arbitrarily large finite linearly independent families, the space is infinite dimensional."
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\dim X=n\\quad\\text{when }X\\text{ has a basis of }n\\text{ vectors}."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The zero space has dimension zero and an empty basis. For the arguments below, take $n\\geq1$; their conclusions are immediate for the zero space. Dimension here is algebraic dimension over the specified field."
          }
        </MathText>
      </p>
    </section>
  );
}
