import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function StoppingSection() {
  return (
    <section id="stopping" className={styles.section}>
      <span className={styles.sectionNumber}>07 / COMPANION SLIDE GUIDE</span>
      <h2>Stopping times and bounded exits</h2>
      <p>
        The later Stochastic Processes I slides develop stopping rules, exit
        problems and Markov chains. The following worked extension prepares for
        the continuation in Lecture 6.
      </p>
      <NoteBox title="A stopping time uses information available now">
        <Equation>
          {
            "\\{\\tau\\le n\\}\\in\\mathcal F_n\\quad\\text{for every }n,\\qquad M_n^\\tau=M_{n\\wedge\\tau}."
          }
        </Equation>
        <p>
          A first observed threshold crossing is a stopping time. The last
          maximum before a future deadline generally is not, because recognising
          it requires future observations.
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "The stopped process remains a martingale: its kth increment is $\\mathbf1_{\\{\\tau\\ge k\\}}\\Delta M_k$, and the indicator is known at time $k-1$. Thus $\\mathbb E[M_{n\\wedge\\tau}]=\\mathbb E[M_0]$ for each finite n. Passing to an unbounded stopping time needs extra conditions, such as uniform integrability; almost sure convergence alone is insufficient."
          }
        </MathText>
      </p>
      <h3>Original exit calculation</h3>
      <p>
        <MathText>
          {
            "A symmetric unit walk starts at zero and stops at $+3$ or $-2$. Exit occurs almost surely: from any interior point, five consecutive upward steps force exit and have probability $2^{-5}$. Independence bounds survival after k such blocks by $(1-2^{-5})^k$. The stopped walk is bounded, so dominated convergence gives:"
          }
        </MathText>
      </p>
      <Equation>
        {"0=\\mathbb E[S_\\tau]=3p-2(1-p),\\qquad p=\\Pr(S_\\tau=3)=\\frac25."}
      </Equation>
      <p>
        <MathText>
          {
            "For duration, apply the stopped squared martingale at finite n: $\\mathbb E[n\\wedge\\tau]=\\mathbb E[S_{n\\wedge\\tau}^2]$. Monotone convergence on the left and bounded convergence on the right give $\\mathbb E[\\tau]=9(2/5)+4(3/5)=6$. No unjustified exchange of an unbounded limit is needed."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "In general, for positive integer barriers $+A,-B$, these arguments give $\\Pr(S_\\tau=A)=B/(A+B)$ and $\\mathbb E[\\tau]=AB$. For biased steps with up probability p, down probability q and $p\\ne q$, the exponential martingale with $r=q/p$ gives upper exit probability $(1-r^B)/(1-r^{A+B})$."
          }
        </MathText>
      </p>
      <h3>Markov is a different property</h3>
      <p>
        A Markov process uses the current state to determine the conditional law
        of the future. A martingale constrains a conditional mean. A biased
        random walk is Markov but not a martingale. Neither definition
        substitutes for the other.
      </p>
      <p>
        <MathText>
          {
            "The later slides use row transition probabilities $P_{ij}=\\Pr(X_{n+1}=j\\mid X_n=i)$, so row distributions evolve as $\\pi_{n+1}=\\pi_nP$. This transposes the column convention used in Lecture 2. Time homogeneous transitions do not by themselves mean the process starts in a stationary distribution."
          }
        </MathText>
      </p>
    </section>
  );
}
