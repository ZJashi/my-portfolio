import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function OlsSection() {
  return (
    <section id="ols" className={styles.section}>
      <span className={styles.sectionNumber}>
        01 / ESTIMATION AS PROJECTION
      </span>
      <h2>Least squares and projection</h2>
      <p>
        <MathText>
          {
            "Let $y=X\\beta+\\varepsilon$ with $X\\in\\mathbb R^{n\\times p}$ of full column rank and $n>p$. Include an intercept among the p columns when needed. Ordinary least squares minimises $Q(b)=(y-Xb)^T(y-Xb)$. Expanding and differentiating yields:"
          }
        </MathText>
      </p>
      <Equation>
        {"Q(b)=y^Ty-2b^TX^Ty+b^TX^TXb,\\qquad\\nabla Q(b)=-2X^T(y-Xb)."}
      </Equation>
      <NoteBox kind="result" title="OLS and the hat matrix">
        <Equation>
          {
            "\\widehat\\beta=(X^TX)^{-1}X^Ty,\\qquad H=X(X^TX)^{-1}X^T,\\qquad\\widehat y=Hy,\\quad e=(I-H)y."
          }
        </Equation>
        <p>
          Full column rank makes the coefficients unique. In computation, solve
          by QR or SVD rather than explicitly forming the inverse.
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "The matrix H satisfies $H^T=H$ and $H^2=H$, so it is an orthogonal projection onto the column space of X. Also $X^Te=0$. For any alternative b, the decomposition $y-Xb=e+X(\\widehat\\beta-b)$ has perpendicular terms, proving:"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|y-Xb\\|^2=\\|e\\|^2+\\|X(\\widehat\\beta-b)\\|^2\\ge\\|e\\|^2."}
      </Equation>
      <p>
        These are algebraic properties of the fitted data. They do not require
        Gaussian errors. With an intercept, residuals sum to zero and the usual
        centred total sum of squares splits into explained and residual sums.
      </p>
      <h3>Original example revisited</h3>
      <Equation>
        {
          "x=(-2,-1,0,1,2)^T,\\quad y=(0,0,1,2,2)^T,\\quad X^TX=\\begin{pmatrix}5&0\\\\0&10\\end{pmatrix},\\quad\\widehat\\beta=\\begin{pmatrix}1\\\\0.6\\end{pmatrix}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The residual vector is $(0.2,-0.4,0,0.4,-0.2)^T$, so $\\mathrm{RSS}=0.4$. Since $\\sum_i(y_i-1)^2=4$, the in sample $R^2=1-0.4/4=0.9$. A high in sample fit is not an out of sample accuracy guarantee."
          }
        </MathText>
      </p>
    </section>
  );
}
