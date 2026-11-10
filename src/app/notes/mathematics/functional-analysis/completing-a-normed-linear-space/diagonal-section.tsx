import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function DiagonalSection() {
  return (
    <section id="diagonal" className={styles.section}>
      <span className={styles.sectionNumber}>08 / LECTURE 4</span>
      <h2>Constructing the candidate limit</h2>
      <p>
        <MathText>{"Select the entry in row $n_p$ and column $t_p$:"}</MathText>
      </p>
      <Equation>{"a_p=x_{t_p}^{(n_p)}."}</Equation>
      <p>
        <MathText>
          {
            "The adjacent selections $a_p$ and $a_{p+1}$ use rows at the two endpoints of the $p$th band. Their columns are both at least $t_p$, since $(t_p)$ is increasing. The uniform band estimate therefore gives"
          }
        </MathText>
      </p>
      <Equation>{"\\|a_{p+1}-a_p\\|_X\\leq4\\,2^{-p}."}</Equation>
      <p>
        <MathText>
          {
            "For $q>p$, telescope through the intermediate selected points and apply the triangle inequality:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|a_q-a_p\\|_X\\leq\\sum_{\\ell=p}^{q-1}\\|a_{\\ell+1}-a_\\ell\\|_X\\leq4\\sum_{\\ell=p}^{q-1}2^{-\\ell}\\leq8\\,2^{-p}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The final bound tends to zero as $p\\to\\infty$. Thus $(a_p)$ is Cauchy in $X$ and defines a valid point $\\eta=[(a_p)]$ of $\\widehat X$. We have constructed a class without needing the selected points to converge in $X$."
          }
        </MathText>
      </p>
    </section>
  );
}
