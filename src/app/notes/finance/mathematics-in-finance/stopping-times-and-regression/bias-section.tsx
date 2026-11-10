import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function BiasSection() {
  return (
    <section id="bias" className={styles.section}>
      <span className={styles.sectionNumber}>03 / A NONZERO DRIFT</span>
      <h2>Biased walks</h2>
      <p>
        <MathText>
          {
            "Now let the up probability be p, down probability $q=1-p$, with $0<p<1$ and $p\\ne q$. The walk itself has drift $p-q$. Put $r=q/p$ and observe $\\mathbb E[r^{X_k}]=pr+q/r=q+p=1$. Consequently $r^{S_n}$ is a martingale."
          }
        </MathText>
      </p>
      <Equation>{"1=\\mathbb E[r^{S_\\tau}]=u r^A+(1-u)r^{-B}."}</Equation>
      <NoteBox kind="result" title="Upper exit probability with bias">
        <Equation>
          {
            "u=\\frac{1-r^B}{1-r^{A+B}},\\qquad r=\\frac qp,\\qquad p\\ne\\frac12."
          }
        </Equation>
        <p>
          The stopped exponential is bounded on the finite interval, making the
          limit legitimate. The fair case is the limit B/(A+B), rather than
          direct substitution into a zero divided by zero expression.
        </p>
      </NoteBox>
      <p>
        <strong>Original example.</strong>
        <MathText>
          {
            " For $p=0.6$, $A=B=2$, $r=2/3$ and $u=(1-r^2)/(1-r^4)=9/13\\approx69.23\\%$. A symmetric pair of barriers does not give a 50% exit probability when the walk is biased."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "A companion calculation uses $S_n-(p-q)n$. Finite stopping gives $\\mathbb E[S_{n\\wedge\\tau}]=(p-q)\\mathbb E[n\\wedge\\tau]$. The bounded left side and monotone convergence give $\\mathbb E[\\tau]=[Au-B(1-u)]/(p-q)$. In this example it is $50/13\\approx3.846$ steps."
          }
        </MathText>
      </p>
    </section>
  );
}
