import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function MarkovSection() {
  return (
    <section id="markov" className={styles.section}>
      <span className={styles.sectionNumber}>04 / TRANSITION MODELS</span>
      <h2>Markov chains</h2>
      <NoteBox title="The current state determines the conditional transition law">
        <Equation>
          {"\\Pr(X_{n+1}=j\\mid X_0,\\ldots,X_n)=\\Pr(X_{n+1}=j\\mid X_n)."}
        </Equation>
        <p>
          This does not say successive states are independent. A martingale
          condition concerns a conditional mean; the Markov condition concerns
          the whole conditional distribution.
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "Use row transitions $P_{ij}=\\Pr(X_{n+1}=j\\mid X_n=i)$ and row probability vectors. Then $\\pi_{n+1}=\\pi_nP$ and $\\Pr(X_{n+k}=j\\mid X_n=i)=(P^k)_{ij}$. This transposes the column convention in Lecture 2. A time homogeneous matrix is constant over time; a stationary distribution additionally satisfies $\\pi P=\\pi$."
          }
        </MathText>
      </p>
      <h3>Original credit state example</h3>
      <Equation>
        {
          "P=\\begin{pmatrix}0.9&0.08&0.02\\\\0.1&0.8&0.1\\\\0&0&1\\end{pmatrix}\\quad\\text{for states good, weak, default}."
        }
      </Equation>
      <p>
        The probability of default by two steps, starting good, is 0.046: remain
        good then default, weaken then default, or default immediately and stay
        there. Default is absorbing.
      </p>
      <Equation>{"(P^2)_{1,3}=0.9(0.02)+0.08(0.1)+0.02(1)=0.046."}</Equation>
      <p>
        <MathText>
          {
            "A specific path probability is $\\Pr(X_0=i_0)\\prod_{k=1}^nP_{i_{k-1},i_k}$. Summing over intermediate states gives matrix multiplication and the Chapman–Kolmogorov relation. Credit transitions here are hypothetical; a fitted transition model needs a stated sampling horizon and treatment of defaults."
          }
        </MathText>
      </p>
    </section>
  );
}
