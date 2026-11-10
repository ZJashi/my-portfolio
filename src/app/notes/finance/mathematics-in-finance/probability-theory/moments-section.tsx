import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function MomentsSection() {
  return (
    <section id="moments" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LOCATION AND SPREAD</span>
      <h2>Moments and tail risk</h2>
      <NoteBox kind="result" title="Mean and variance">
        <Equation>
          {
            "\\mu=\\mathbb E[X],\\qquad\\operatorname{Var}(X)=\\mathbb E[(X-\\mu)^2]=\\mathbb E[X^2]-\\mu^2,\\qquad\\sigma=\\sqrt{\\operatorname{Var}(X)}."
          }
        </Equation>
        <p>
          These quantities require the corresponding moments to be finite.
          Standard deviation has the same units as X; variance has squared
          units.
        </p>
      </NoteBox>
      <p>
        For the three outcome return above, the mean is 4%. Compute the second
        moment before subtracting the squared mean.
      </p>
      <Equation>
        {
          "\\mathbb E[R]=0.2(-0.1)+0.5(0)+0.3(0.2)=0.04,\\qquad\\mathbb E[R^2]=0.014."
        }
      </Equation>
      <Equation>
        {
          "\\operatorname{Var}(R)=0.014-0.04^2=0.0124,\\qquad\\sigma_R\\approx0.11136=11.14\\%."
        }
      </Equation>
      <p>
        An expected return of 4% does not describe any one of the possible
        outcomes in this model. It is the probability weighted average, rather
        than a promised payment.
      </p>
      <Equation>
        {
          "\\gamma=\\frac{\\mathbb E[(X-\\mu)^3]}{\\sigma^3},\\qquad\\kappa=\\frac{\\mathbb E[(X-\\mu)^4]}{\\sigma^4}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Skewness and kurtosis require $\\sigma>0$ and finite third and fourth moments respectively. A normal distribution has $\\gamma=0$ and $\\kappa=3$; excess kurtosis is $\\kappa-3$. Symmetry implies zero skewness when the moment exists, but zero skewness does not prove symmetry. Higher kurtosis alone does not order every tail probability."
          }
        </MathText>
      </p>
      <h3>Zero skewness without symmetry</h3>
      <p>
        <MathText>
          {
            "As an original counterexample, let $X$ take $-2,-1,1,3$ with probabilities $0.20,0.25,0.50,0.05$. Direct addition gives $\\mathbb E[X]=0$ and $\\mathbb E[X^3]=0$, but the masses at $-1$ and $1$ differ. Its variance is positive, so its skewness is zero despite asymmetry."
          }
        </MathText>
      </p>
    </section>
  );
}
