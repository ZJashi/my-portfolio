import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function GaugeProofSection() {
  return (
    <section id="gauge-proof" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 11</span>
      <h2>Proof of point separation by a gauge</h2>
      <h3>Translate an interior point to zero</h3>
      <p>
        <MathText>
          {
            "Choose $a\\in K$ and set $U=K-a$, $v=b-a$. Then $0\\in\\operatorname{core}U$, every point of $U$ is a core point, and $v\\notin U$. Let $p$ be the gauge of $U$ based at zero. From Lecture 10,"
          }
        </MathText>
      </p>
      <Equation>{"p(u)<1\\quad(u\\in U),\\qquad p(v)\\geq1."}</Equation>
      <p>
        <MathText>
          {
            "The second inequality follows because $p(v)<1$ would put $v$ in $\\operatorname{core}U\\subseteq U$. The gauge is finite, nonnegative and sublinear."
          }
        </MathText>
      </p>
      <h3>Define a functional on one line</h3>
      <p>
        <MathText>
          {
            "On the subspace $\\mathbb Rv$, define $\\ell(tv)=t\\,p(v)$. This is well defined and linear because $v\\ne0$. Check domination for every real scalar:"
          }
        </MathText>
      </p>
      <ul className={styles.takeaways}>
        <li>
          <strong>If t is positive.</strong>{" "}
          <MathText>
            {"$\\ell(tv)=t p(v)=p(tv)$ by positive homogeneity."}
          </MathText>
        </li>
        <li>
          <strong>If t is zero.</strong>{" "}
          <MathText>{"Both sides vanish."}</MathText>
        </li>
        <li>
          <strong>If t is negative.</strong>{" "}
          <MathText>
            {
              "$\\ell(tv)=t p(v)<0$, while $p(tv)\\geq0$, so $\\ell(tv)\\leq p(tv)$."
            }
          </MathText>
        </li>
      </ul>
      <h3>Extend and compare the values</h3>
      <p>
        <MathText>
          {
            "Hahn–Banach extends $\\ell$ to a linear functional $L:X\\to\\mathbb R$ with $L\\leq p$. Also $L(v)=p(v)\\geq1$, so $L$ is nonzero. For each $u\\in U$,"
          }
        </MathText>
      </p>
      <Equation>{"L(u)\\leq p(u)<1\\leq p(v)=L(v)."}</Equation>
      <p>
        <MathText>
          {
            "Return to the original points. For $k\\in K$, substitute $u=k-a$ and $v=b-a$; linearity gives $L(k)-L(a)<L(b)-L(a)$, hence $L(k)<L(b)$. Thus the translated construction produces a linear functional on the original vector space, with threshold $c=L(b)$."
          }
        </MathText>
      </p>
    </section>
  );
}
