import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function ChainUnionSection() {
  return (
    <section id="chain-union" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 8</span>
      <h2>The union of a chain is independent</h2>
      <p>
        <MathText>
          {
            "Let $\\mathcal C\\subseteq\\mathcal I$ be a chain. Define its union"
          }
        </MathText>
      </p>
      <Equation>{"U=\\bigcup_{A\\in\\mathcal C}A."}</Equation>
      <h3>Check that the union is an admissible element</h3>
      <p>
        <MathText>
          {
            "Take finitely many distinct vectors $u_1,\\ldots,u_n\\in U$. Each belongs to some member $A_i$ of the chain. Among finitely many chain members there is a largest one under inclusion: compare the first two, keep the larger, and repeat."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "That largest member contains all $u_i$. It is independent, so the finite set $\\{u_1,\\ldots,u_n\\}$ is independent. Since this works for every finite choice, $U\\in\\mathcal I$. For an empty chain, the union is empty and is still independent."
          }
        </MathText>
      </p>
      <h3>Check that it is an upper bound</h3>
      <p>
        <MathText>
          {
            "Every $A\\in\\mathcal C$ is contained in $U$ by definition. Thus $U$ is an upper bound in the ordered set $\\mathcal I$. Zorn’s hypothesis is satisfied, so there is a maximal element $B\\in\\mathcal I$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The finite-subset step is the core of the argument: a union of arbitrary independent sets can be dependent, but the chain property places each finite selection inside a single independent member."
          }
        </MathText>
      </p>
    </section>
  );
}
