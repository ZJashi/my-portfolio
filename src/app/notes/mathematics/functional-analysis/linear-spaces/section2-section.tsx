import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function Section2Section() {
  return (
    <section id="section-2" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 1</span>
      <h2>Examples of linear spaces</h2>
      <p>
        <strong>{"Polynomials."}</strong>
        <MathText>
          {
            " Take $X$ to be all polynomials in one real variable with real coefficients, with the usual addition and multiplication by real numbers."
          }
        </MathText>
      </p>
      <Equation>
        {"p(t)=\\sum_{j=0}^{n}a_jt^j,\\qquad a_j\\in\\mathbb R."}
      </Equation>
      <p>
        <MathText>
          {
            "Adding two polynomials gives a polynomial; multiplying a polynomial by a real scalar gives a polynomial. The usual operations satisfy all the vector space axioms. The same construction gives a vector space of polynomials in finitely many variables, $t_1,\\ldots,t_n$."
          }
        </MathText>
      </p>
      <p>
        <strong>{"Continuous functions."}</strong>
        {
          " Continuous real-valued or complex-valued functions on the domain under consideration form a linear space over the corresponding scalar field. Addition and scalar multiplication act pointwise."
        }
      </p>
      <Equation>
        {"(f+g)(t)=f(t)+g(t),\\qquad (\\alpha f)(t)=\\alpha f(t)."}
      </Equation>
      <p>
        <MathText>
          {
            "A sum of continuous functions is continuous, and a scalar multiple of a continuous function is continuous. The zero vector is the function that is zero at every point. For a fixed topological domain $D$, write this space as $C(D;\\mathbb K)$."
          }
        </MathText>
      </p>
      <p>
        <strong>{"Sequences."}</strong>
        {
          " The collection of all real sequences is a real linear space, and the collection of all complex sequences is a complex linear space. Operations act on each coordinate."
        }
      </p>
      <Equation>
        {
          "(a_j)_{j\\geq1}+(b_j)_{j\\geq1}=(a_j+b_j)_{j\\geq1},\\qquad\n\\alpha(a_j)_{j\\geq1}=(\\alpha a_j)_{j\\geq1}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The zero vector is the sequence $(0,0,\\ldots)$. No convergence or boundedness condition is imposed in this example."
          }
        </MathText>
      </p>
      <p>
        <strong>
          <MathText>{"Integrable functions of order $p$."}</MathText>
        </strong>
        <MathText>
          {
            " Start with a measure space consisting of a set $\\Omega$, a sigma algebra $\\mathcal F$ and a measure $\\mu$. Consider measurable real-valued functions for which the pth power of the absolute value is integrable."
          }
        </MathText>
      </p>
      <Equation>{"\\int_\\Omega |f|^p\\,d\\mu<\\infty."}</Equation>
      <p>
        {
          "These functions are closed under pointwise addition and scalar multiplication, so they form a linear space."
        }
      </p>
      <p>
        <strong>{"Equality almost everywhere."}</strong>
        <MathText>
          {
            " For the customary range $1\\leq p<\\infty$, $L^p(\\Omega,\\mathcal F,\\mu)$ identifies functions that agree almost everywhere. Before making that identification, the actual functions form a vector space too. Absolute values are required in the integrability condition. Closure under addition follows from the inequality below; scalar multiplication follows by taking out the factor $|\\alpha|^p$."
          }
        </MathText>
      </p>
      <Equation>
        {
          "|f+g|^p\\leq2^{p-1}(|f|^p+|g|^p),\\qquad\n\\int_\\Omega|\\alpha f|^p\\,d\\mu=|\\alpha|^p\\int_\\Omega|f|^p\\,d\\mu."
        }
      </Equation>
    </section>
  );
}
