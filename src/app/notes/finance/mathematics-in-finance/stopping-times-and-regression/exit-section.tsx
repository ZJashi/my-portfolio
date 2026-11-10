import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ExitSection() {
  return (
    <section id="exit" className={styles.section}>
      <span className={styles.sectionNumber}>02 / TWO ABSORBING BARRIERS</span>
      <h2>Exit probabilities and times</h2>
      <p>
        <MathText>
          {
            "Take independent symmetric steps $X_k\\in\\{-1,1\\}$ and $S_n=\\sum_{k=1}^nX_k$, starting at zero. For positive integer barriers A and B, set $\\tau=\\inf\\{n:S_n=A\\text{ or }S_n=-B\\}$. No overshoot occurs with unit steps and integer barriers."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Exit is almost sure: a block of $A+B$ upward steps forces exit from any interior location and has positive probability $2^{-(A+B)}$. Independence bounds survival across successive blocks by a geometrically decaying probability. Also $|S_{n\\wedge\\tau}|\\le\\max(A,B)$."
          }
        </MathText>
      </p>
      <Equation>
        {
          "0=\\lim_{n\\to\\infty}\\mathbb E[S_{n\\wedge\\tau}]=\\mathbb E[S_\\tau]=Au-B(1-u)."
        }
      </Equation>
      <NoteBox kind="result" title="The fair walk exit formulas">
        <Equation>
          {"u=\\Pr(S_\\tau=A)=\\frac{B}{A+B},\\qquad\\mathbb E[\\tau]=AB."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "For the duration formula, $S_n^2-n$ is a martingale. Finite stopping gives $\\mathbb E[n\\wedge\\tau]=\\mathbb E[S_{n\\wedge\\tau}^2]$. Monotone convergence on the left and bounded convergence on the right yield $\\mathbb E[\\tau]=A^2u+B^2(1-u)=AB$. This also establishes integrability of the exit time."
          }
        </MathText>
      </p>
      <h3>Original example</h3>
      <p>
        With upper barrier +5 and lower barrier −3, the upper exit probability
        is 3/8 and the expected exit time is 15 steps. The closer lower barrier
        is hit more often. The terminal mean still balances: 5(3/8) − 3(5/8) =
        0.
      </p>
    </section>
  );
}
