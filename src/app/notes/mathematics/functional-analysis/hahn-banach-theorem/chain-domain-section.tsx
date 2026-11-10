import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function ChainDomainSection() {
  return (
    <section id="chain-domain" className={styles.section}>
      <span className={styles.sectionNumber}>09 / LECTURE 9</span>
      <h2>An upper bound for a chain of extensions</h2>
      <p>
        <MathText>
          {
            "Let $\\mathcal C=\\{(V_\\gamma,f_\\gamma):\\gamma\\in I\\}$ be a nonempty chain in $\\mathcal E$. Form"
          }
        </MathText>
      </p>
      <Equation>{"V=\\bigcup_{\\gamma\\in I}V_\\gamma."}</Equation>
      <h3>The union is a linear subspace</h3>
      <p>
        <MathText>
          {
            "If $u,v\\in V$, each lies in some chain domain. One of these two domains contains the other, so both vectors lie in the larger domain. That domain contains every real linear combination of $u$ and $v$, hence so does $V$. Each domain contains $Y$, so $V$ does too."
          }
        </MathText>
      </p>
      <h3>Define a functional on the union</h3>
      <Equation>
        {"f(v)=f_\\gamma(v)\\qquad\\text{whenever }v\\in V_\\gamma."}
      </Equation>
      <p>
        <MathText>
          {
            "If $v$ belongs to two domains, comparability puts one domain inside the other and the extension order says that the two functionals agree on the smaller one. Hence the value is independent of the chosen domain. The function $f$ is well defined."
          }
        </MathText>
      </p>
      <h3>Verify all the admissibility conditions</h3>
      <p>
        <MathText>
          {
            "To prove linearity, place any two selected vectors in one common chain domain, then compute with the linear functional on that domain. Agreement with $\\ell$ follows because every $f_\\gamma$ extends it. For domination, choose a domain containing $v$ and use $f(v)=f_\\gamma(v)\\leq p(v)$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Thus $(V,f)\\in\\mathcal E$. It extends every chain member by construction, so it is an upper bound in the same ordered set. The empty chain is bounded above by the original pair $(Y,\\ell)$. All of Zorn’s hypotheses are now verified."
          }
        </MathText>
      </p>
    </section>
  );
}
