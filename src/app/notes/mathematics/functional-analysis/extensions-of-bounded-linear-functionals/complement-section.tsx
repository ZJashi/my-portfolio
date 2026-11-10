import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ComplementSection() {
  return (
    <section id="complement" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 13</span>
      <h2>A closed complement to every finite dimensional subspace</h2>
      <p>
        <MathText>
          {
            "Let $Y=\\operatorname{span}\\{x_1,\\ldots,x_n\\}$ with the vectors independent. Apply finite interpolation $n$ times to obtain $L_j\\in X'$ such that $L_j(x_k)=\\delta_{jk}$. Set"
          }
        </MathText>
      </p>
      <Equation>{"M_j=\\ker L_j,\\qquad M=\\bigcap_{j=1}^n M_j."}</Equation>
      <p>
        <MathText>
          {
            "Each kernel is a closed linear subspace; so is their intersection. For any $x\\in X$, define"
          }
        </MathText>
      </p>
      <Equation>{"P(x)=\\sum_{j=1}^nL_j(x)x_j,\\qquad m=x-P(x)."}</Equation>
      <p>
        <MathText>
          {
            "Then $P(x)\\in Y$ and $L_k(m)=L_k(x)-\\sum_jL_j(x)\\delta_{kj}=0$ for every $k$. Thus $m\\in M$, proving $X=Y+M$. If $z=\\sum_j\\beta_jx_j$ belongs to $Y\\cap M$, applying $L_k$ yields $\\beta_k=0$ for every $k$. Hence the intersection is $\\{0\\}$."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Closed complement">
        <p>
          <MathText>
            {
              "Every finite dimensional linear subspace $Y$ of a real normed space has a closed linear complement:"
            }
          </MathText>
        </p>
        <Equation>{"X=Y\\oplus M,\\qquad x=P(x)+(x-P(x))."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The construction also gives a bounded projection: $\\|P(x)\\|\\leq(\\sum_j\\|L_j\\|\\|x_j\\|)\\|x\\|$, and $P(y)=y$ on $Y$. This finite dimensional result does not assert that every closed subspace has a closed complement. For $Y=\\{0\\}$, take $M=X$."
          }
        </MathText>
      </p>
    </section>
  );
}
