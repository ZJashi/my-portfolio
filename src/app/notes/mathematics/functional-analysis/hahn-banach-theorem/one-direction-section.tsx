import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function OneDirectionSection() {
  return (
    <section id="one-direction" className={styles.section}>
      <span className={styles.sectionNumber}>04 / LECTURE 9</span>
      <h2>Extending across one new direction</h2>
      <p>
        <MathText>
          {
            "Assume $Y\\ne X$ and choose $z\\in X\\setminus Y$. Form the larger subspace"
          }
        </MathText>
      </p>
      <Equation>
        {"Y_z=Y+\\mathbb R z=\\{y+t z:y\\in Y,\\ t\\in\\mathbb R\\}."}
      </Equation>
      <h3>The decomposition is unique</h3>
      <p>
        <MathText>
          {
            "If $y_1+t_1z=y_2+t_2z$, then $(t_1-t_2)z=y_2-y_1\\in Y$. If $t_1\\ne t_2$, division would put $z$ in $Y$, a contradiction. Therefore $t_1=t_2$ and $y_1=y_2$."
          }
        </MathText>
      </p>
      <h3>Only one new value needs to be chosen</h3>
      <p>
        <MathText>{"Any linear extension must have the form"}</MathText>
      </p>
      <Equation>{"L_a(y+t z)=\\ell(y)+t a,\\qquad a=L_a(z)."}</Equation>
      <p>
        <MathText>
          {
            "Conversely, every real choice of $a$ gives a well-defined linear map by this formula, because the decomposition is unique. It agrees with $\\ell$ when $t=0$. The remaining question is which values of $a$ preserve domination."
          }
        </MathText>
      </p>
    </section>
  );
}
