import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function Section7Section() {
  return (
    <section id="section-7" className={styles.section}>
      <span className={styles.sectionNumber}>08 / LECTURE 1</span>
      <h2>Definition of the linear span</h2>
      <p>
        <MathText>
          {
            "Let $S$ be any subset of $X$; $S$ itself need not be a subspace. Its "
          }
        </MathText>
        <strong>{"linear span"}</strong>
        <MathText>
          {
            ", denoted $L(S)$, is the intersection of all subspaces of $X$ that contain $S$."
          }
        </MathText>
      </p>
      <Equation>
        {
          "L(S)=\\bigcap\\{Y\\subseteq X:Y\\text{ is a linear subspace and }S\\subseteq Y\\}."
        }
      </Equation>
      <p>
        <MathText>
          {"There is at least one subspace in this family: $X$ itself."}
        </MathText>
      </p>
      <p>
        <strong>{"The defining family is nonempty."}</strong>
        <MathText>
          {
            " Every subspace in the family contains zero and all of $S$. Their intersection therefore contains zero and all of $S$ as well."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "By the intersection theorem, $L(S)$ is a subspace. It contains $S$ because every subspace in the defining family contains $S$."
          }
        </MathText>
      </p>
      <p>
        <strong>{"Smallest subspace property."}</strong>
        <MathText>
          {
            " If $Y$ is any subspace containing $S$, then $Y$ is one of the sets in the intersection. Therefore:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "S\\subseteq Y\\ \\text{and }Y\\text{ a subspace}\n\\quad\\Longrightarrow\\quad L(S)\\subseteq Y."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Thus $L(S)$ is the smallest linear subspace containing $S$. Here “smallest” means contained in every subspace that contains $S$."
          }
        </MathText>
      </p>
    </section>
  );
}
