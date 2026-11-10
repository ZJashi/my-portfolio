import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function NormalSection() {
  return (
    <section id="normal" className={styles.section}>
      <span className={styles.sectionNumber}>04 / TWO USEFUL MODELS</span>
      <h2>Normal and lognormal models</h2>
      <p>
        <MathText>
          {
            "For $X\\sim N(\\mu,\\sigma^2)$ with $\\sigma>0$, standardise by $Z=(X-\\mu)/\\sigma$. Write $\\phi$ and $\\Phi$ for the standard normal density and CDF."
          }
        </MathText>
      </p>
      <Equation>
        {
          "f_X(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\left[-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right],\\qquad\\Pr(X\\le x)=\\Phi\\left(\\frac{x-\\mu}{\\sigma}\\right)."
        }
      </Equation>
      <p>
        <strong>Original example.</strong> A hypothetical return model has mean
        1% and standard deviation 2%. A loss below −3% is two standard
        deviations below its mean, giving probability about 2.28% under this
        normal assumption. This probability describes the chosen model.
      </p>
      <NoteBox title="A lognormal variable is an exponentiated normal">
        <p>
          <MathText>
            {
              "If $X\\sim N(\\mu,\\sigma^2)$ and $Y=e^X$, then $Y>0$ and $\\log Y=X$. The parameters $\\mu$ and $\\sigma$ describe the logarithm, not the level of Y."
            }
          </MathText>
        </p>
        <Equation>
          {
            "f_Y(y)=\\frac{f_X(\\log y)}{y}\\quad(y>0),\\qquad\\mathbb E[Y]=e^{\\mu+\\sigma^2/2},\\qquad\\operatorname{median}(Y)=e^\\mu."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "For the density, write $\\Pr(Y\\le y)=F_X(\\log y)$ and differentiate. The derivative $1/y$ is the change of variables factor. More generally, an invertible differentiable monotone transformation uses $f_Y(y)=f_X(g^{-1}(y))|(g^{-1})'(y)|$."
          }
        </MathText>
      </p>
      <p>
        <strong>Original price example.</strong>
        <MathText>
          {
            " Suppose $S_T=100e^X$ with $X\\sim N(0.02,0.2^2)$. The median price is $100e^{0.02}\\approx102.02$, while the mean is $100e^{0.04}\\approx104.08$. Exponentiation raises the mean above the median."
          }
        </MathText>
      </p>
      <h3>Moment generating functions</h3>
      <p>
        <MathText>
          {
            "For a normal X, completing the square in the density integral gives $M_X(t)=\\mathbb E[e^{tX}]=e^{\\mu t+\\sigma^2t^2/2}$. Substituting $t=k$ gives $\\mathbb E[Y^k]=e^{k\\mu+k^2\\sigma^2/2}$. Hence:"
          }
        </MathText>
      </p>
      <Equation>
        {"\\operatorname{Var}(Y)=e^{2\\mu+\\sigma^2}(e^{\\sigma^2}-1)."}
      </Equation>
      <p>
        Moment generating function uniqueness requires finiteness on an open
        interval around zero. A lognormal variable has all positive integer
        moments, yet its own MGF is infinite at positive arguments. Having
        moments alone does not justify an MGF power series.
      </p>
    </section>
  );
}
