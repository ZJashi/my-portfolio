import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function PositiveSublinearSection() {
  return (
    <section id="positive-sublinear" className={styles.section}>
      <span className={styles.sectionNumber}>10 / LECTURE 11</span>
      <h2>Verify positive homogeneity and subadditivity</h2>
      <h3>Positive homogeneity</h3>
      <p>
        <MathText>
          {
            "For $a>0$, the substitution $y=a z$ gives a bijection between $y\\in Y$ with $af\\leq y$ and $z\\in Y$ with $f\\leq z$. Linearity of $\\ell$ therefore gives"
          }
        </MathText>
      </p>
      <Equation>
        {
          "p(af)=\\inf_{\\substack{z\\in Y\\\\f\\leq z}}\\ell(a z)=a\\inf_{\\substack{z\\in Y\\\\f\\leq z}}\\ell(z)=a p(f)."
        }
      </Equation>
      <p>
        <MathText>
          {
            "For $a=0$, agreement on $Y$ gives $p(0)=\\ell(0)=0$, so the identity also holds."
          }
        </MathText>
      </p>
      <h3>Subadditivity</h3>
      <p>
        <MathText>
          {
            "For $\\varepsilon>0$, choose $y_1,y_2\\in Y$ with $f_i\\leq y_i$ and $\\ell(y_i)<p(f_i)+\\varepsilon$. Their sum lies in $Y$ and dominates $f_1+f_2$. Hence"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\begin{aligned}p(f_1+f_2)&\\leq\\ell(y_1+y_2)\\\\&=\\ell(y_1)+\\ell(y_2)\\\\&<p(f_1)+p(f_2)+2\\varepsilon.\\end{aligned}"
        }
      </Equation>
      <p>
        <MathText>
          {
            "Letting $\\varepsilon\\downarrow0$ proves subadditivity. Approximate minimizers are sufficient; the defining infimum need not be attained."
          }
        </MathText>
      </p>
    </section>
  );
}
