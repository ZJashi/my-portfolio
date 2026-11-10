import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function StoppingSection() {
  return (
    <section id="stopping" className={styles.section}>
      <span className={styles.sectionNumber}>
        01 / USING PRESENT INFORMATION
      </span>
      <h2>Stopping a martingale</h2>
      <p>
        <MathText>
          {
            "Let $M_n$ be an integrable martingale adapted to $\\mathcal F_n$. A stopping time $\\tau$ satisfies $\\{\\tau\\le n\\}\\in\\mathcal F_n$. By step n we can tell whether stopping has occurred, without observing later steps."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="The stopped process remains a martingale">
        <Equation>
          {
            "M_{n\\wedge\\tau}=M_0+\\sum_{k=1}^{n}\\mathbf1_{\\{\\tau\\ge k\\}}(M_k-M_{k-1}),\\qquad\\mathbb E[M_{n\\wedge\\tau}]=\\mathbb E[M_0]."
          }
        </Equation>
        <p>
          The indicator is known at step k−1 because it says that stopping has
          not occurred by then. Its product with the next martingale increment
          has conditional mean zero.
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "For each finite n this needs no assumption that $\\tau$ is bounded. To replace $n\\wedge\\tau$ by $\\tau$, however, we need a justified passage to the limit. Uniform integrability is one sufficient condition; a common integrable bound also works through dominated convergence."
          }
        </MathText>
      </p>
      <h3>Why almost sure stopping is not enough</h3>
      <p>
        <MathText>
          {
            "As a supporting example, let a symmetric unit walk start at zero and stop when it first reaches +1. This time is almost surely finite, yet $S_\\tau=1$ while $\\mathbb E[S_0]=0$. The expectation identity at finite horizons cannot be passed to this limit. The expected hitting time is infinite."
          }
        </MathText>
      </p>
    </section>
  );
}
