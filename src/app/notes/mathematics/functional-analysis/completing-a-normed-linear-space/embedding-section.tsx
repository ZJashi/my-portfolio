import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function EmbeddingSection() {
  return (
    <section id="embedding" className={styles.section}>
      <span className={styles.sectionNumber}>10 / LECTURE 4</span>
      <h2>Embedding the original space isometrically</h2>
      <p>
        <MathText>
          {
            "Return to the constant-sequence map $c(x)=(x,x,\\ldots)$ and let $q:Z\\to Z/Y$ be the quotient map. Define"
          }
        </MathText>
      </p>
      <Equation>{"\\iota(x)=q(c(x))=[(x,x,x,\\ldots)]."}</Equation>
      <p>
        <MathText>
          {
            "The map is linear because constant sequences add and scale term by term. Its norm is exactly the original norm:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|\\iota(x)\\|_{\\widehat X}=\\lim_{j\\to\\infty}\\|x\\|_X=\\|x\\|_X."
        }
      </Equation>
      <p>
        <MathText>
          {
            "If $\\iota(x)=\\iota(u)$, then $\\|\\iota(x-u)\\|_{\\widehat X}=0$, so $\\|x-u\\|_X=0$ and $x=u$. Thus $\\iota$ is injective. It also preserves every distance:"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|\\iota(x)-\\iota(u)\\|_{\\widehat X}=\\|x-u\\|_X."}
      </Equation>
      <p>
        <MathText>
          {
            "Consequently the original norm and its topology are unchanged on the embedded copy. More precisely, that copy is $q(X_0)=\\iota(X)$ inside $Z/Y$. We use this image notation because $Y$ is not generally a subspace of $X_0$, so writing $X_0/Y$ as an ordinary quotient would be inappropriate."
          }
        </MathText>
      </p>
    </section>
  );
}
