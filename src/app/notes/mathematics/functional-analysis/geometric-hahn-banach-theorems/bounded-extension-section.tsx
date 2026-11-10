import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function BoundedExtensionSection() {
  return (
    <section id="bounded-extension" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 11</span>
      <h2>Application to bounded linear functionals</h2>
      <NoteBox kind="result" title="Extension with the same bound">
        <p>
          <MathText>
            {
              "Let $X$ be a real normed space and $Y$ a linear subspace. If $\\ell:Y\\to\\mathbb R$ is linear and $|\\ell(y)|\\leq C\\|y\\|$ for a constant $C\\geq0$, then it extends to a linear $L:X\\to\\mathbb R$ with"
            }
          </MathText>
        </p>
        <Equation>
          {"L|_Y=\\ell,\\qquad |L(x)|\\leq C\\|x\\|\\quad(x\\in X)."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Set $p(x)=C\\|x\\|$. This is sublinear, and $\\ell(y)\\leq p(y)$ on $Y$. Hahn–Banach gives an extension with $L(x)\\leq C\\|x\\|$. Applying that inequality to $-x$ gives $-L(x)\\leq C\\|x\\|$, proving the absolute-value bound."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Neither $X$ nor $Y$ needs to be complete, and $Y$ need not be closed. The same constant is retained."
          }
        </MathText>
      </p>
      <h3>Extensions need not be unique</h3>
      <p>
        <MathText>
          {
            "The one-direction extension interval can contain more than one value. For example, on $\\mathbb R^2$ with norm $|(s,t)|_1=|s|+|t|$, define $\\ell(s,0)=s$ on the horizontal axis. Each $L_a(s,t)=s+a t$ with $|a|\\leq1$ is an extension satisfying $|L_a(s,t)|\\leq|s|+|t|$. The theorem guarantees existence, not a unique choice."
          }
        </MathText>
      </p>
    </section>
  );
}
