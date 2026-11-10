import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function EmbeddingSection() {
  return (
    <section id="embedding" className={styles.section}>
      <span className={styles.sectionNumber}>02 / LECTURE 14</span>
      <h2>Evaluation embeds X into its bidual</h2>
      <p>
        <MathText>
          {
            "Fix $x\\in X$ and define $Jx$ by evaluating each functional at that vector:"
          }
        </MathText>
      </p>
      <Equation>{"(Jx)(\\ell)=\\ell(x)\\qquad(\\ell\\in X')."}</Equation>
      <p>
        <MathText>
          {
            "This is linear in $\\ell$, because $(Jx)(\\alpha\\ell+\\beta m)=\\alpha\\ell(x)+\\beta m(x)$. It is bounded since $|\\ell(x)|\\leq\\|\\ell\\|\\|x\\|$, giving $\\|Jx\\|\\leq\\|x\\|$. The reverse inequality is exactly the dual formula for the vector norm from Lecture 13:"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|Jx\\|=\\sup_{\\|\\ell\\|\\leq1}|\\ell(x)|=\\|x\\|."}
      </Equation>
      <NoteBox kind="result" title="Canonical isometric embedding">
        <p>
          <MathText>
            {
              "The map $J:X\\to X''$ is linear, injective and preserves all distances."
            }
          </MathText>
        </p>
        <Equation>
          {
            "J(\\alpha x+\\beta y)=\\alpha Jx+\\beta Jy,\\qquad \\|Jx-Jy\\|=\\|x-y\\|."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Linearity in $x$ follows by testing against every $\\ell$. Injectivity follows from $\\|Jx\\|=\\|x\\|$. Thus $X$ can always be identified with the particular subspace $J(X)$ of $X''$. This identification is canonical: it involves no choice of basis."
          }
        </MathText>
      </p>
    </section>
  );
}
