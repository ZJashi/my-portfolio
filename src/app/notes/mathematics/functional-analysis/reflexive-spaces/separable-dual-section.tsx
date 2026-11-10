import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function SeparableDualSection() {
  return (
    <section id="separable-dual" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 14</span>
      <h2>A separable dual forces the original space to be separable</h2>
      <NoteBox kind="result" title="Separability theorem">
        <p>
          <MathText>
            {
              "If the continuous dual $X'$ of a real normed space is separable in its norm, then $X$ is separable in its norm. Completeness is unnecessary."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "The zero-space case is immediate, so assume $X\\neq\\{0\\}$. Choose a countable norm-dense family $(\\ell_n)$ in $X'$. For each nonzero $\\ell_n$, choose $z_n\\in X$ with $\\|z_n\\|=1$ and $\\ell_n(z_n)\\geq\\frac12\\|\\ell_n\\|$. Such a vector exists by the definition of the supremum, with its sign reversed if necessary. For $\\ell_n=0$, choose any unit vector."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Let $Y=\\overline{\\operatorname{span}}\\{z_n:n\\geq1\\}$. Suppose $Y\\neq X$. Separation from a proper closed subspace gives a functional $\\ell\\in X'$ that vanishes on $Y$ and has norm one. Choose $n$ such that $\\|\\ell_n-\\ell\\|<\\varepsilon$. The triangle inequality gives the lower bound $\\|\\ell_n\\|>1-\\varepsilon$. On the other hand, $\\ell(z_n)=0$, so"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|\\ell_n\\|\\leq2\\ell_n(z_n)=2(\\ell_n-\\ell)(z_n)\\leq2\\|\\ell_n-\\ell\\|<2\\varepsilon."
        }
      </Equation>
      <p>
        <MathText>
          {
            "These inequalities contradict each other when $\\varepsilon<1/3$. Therefore $Y=X$. It remains to turn the countable generators into a countable dense set: take all finite rational linear combinations"
          }
        </MathText>
      </p>
      <Equation>
        {
          "D=\\left\\{\\sum_{j=1}^m q_jz_{n_j}:m\\geq1,\\ q_j\\in\\mathbb Q,\\ n_j\\in\\mathbb N\\right\\}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "This is countable, since it is a countable union of sets indexed by finite tuples from countable sets. Approximate each coefficient in a finite real linear combination by rationals; the error is at most the sum of coefficient errors because $\\|z_n\\|=1$. Thus $\\overline D=Y=X$."
          }
        </MathText>
      </p>
    </section>
  );
}
