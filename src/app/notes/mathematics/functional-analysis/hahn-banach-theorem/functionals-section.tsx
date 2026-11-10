import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function FunctionalsSection() {
  return (
    <section id="functionals" className={styles.section}>
      <span className={styles.sectionNumber}>01 / LECTURE 9</span>
      <h2>Real linear functionals</h2>
      <p>
        <MathText>
          {
            "Work over the real field. A linear functional on a real vector space $X$ is a linear map from $X$ to $\\mathbb R$. It preserves addition and real scalar multiplication:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\ell(x+u)=\\ell(x)+\\ell(u),\\qquad \\ell(a x)=a\\ell(x)\\quad(a\\in\\mathbb R)."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The extension problem starts with a functional defined only on a linear subspace $Y\\subseteq X$. We seek a functional on all of $X$ that agrees with the given one on $Y$, preserves linearity, and stays below a prescribed function. This is the real, sublinear-domination form of the Hahn–Banach theorem."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The argument is algebraic. A norm can supply the dominating function, but no topology, completeness or closedness assumption on $Y$ is required for this form of the theorem."
          }
        </MathText>
      </p>
    </section>
  );
}
