import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function MarkovSection() {
  return (
    <section id="markov" className={styles.section}>
      <span className={styles.sectionNumber}>06 / PROBABILITY DYNAMICS</span>
      <h2>Markov chains and stationary distributions</h2>
      <p>
        <MathText>
          {
            "Use column probability vectors and $P_{ij}=\\Pr(S_{t+1}=i\\mid S_t=j)$. Each column sums to one and entries are nonnegative. Thus $\\pi_{t+1}=P\\pi_t$ preserves total probability. A stationary distribution satisfies $P\\pi_*=\\pi_*$ and $\\mathbf1^T\\pi_*=1$."
          }
        </MathText>
      </p>
      <h3>Original two regime example</h3>
      <Equation>
        {
          "P=\\begin{pmatrix}0.9&0.2\\\\0.1&0.8\\end{pmatrix},\\qquad\\pi_0=\\begin{pmatrix}1\\\\0\\end{pmatrix},\\qquad\\pi_1=\\begin{pmatrix}0.9\\\\0.1\\end{pmatrix}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Writing $\\pi_*=(a,b)^T$, stationarity gives $0.1a=0.2b$ and $a+b=1$, so $\\pi_*=(2/3,1/3)^T$. The other eigenvalue is 0.7; the initial deviation decays geometrically:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\pi_t=\\begin{pmatrix}2/3\\\\1/3\\end{pmatrix}+\\frac{0.7^t}{3}\\begin{pmatrix}1\\\\-1\\end{pmatrix}."
        }
      </Equation>
      <NoteBox kind="result" title="When convergence follows">
        <p>
          <MathText>
            {
              "For a strictly positive square matrix, Perron–Frobenius gives a simple positive dominant eigenvalue and positive eigenvector, with all other eigenvalues strictly smaller in modulus. For a strictly positive stochastic matrix this eigenvalue is 1 and the normalised eigenvector is the unique limiting distribution."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "Nonnegative entries alone are insufficient for convergence. The transition matrix $\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$ has stationary distribution $(1/2,1/2)^T$, but an initial mass in one state alternates forever. More generally, a finite irreducible and aperiodic chain converges."
          }
        </MathText>
      </p>
    </section>
  );
}
