import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function Section6Section() {
  return (
    <section id="section-6" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 1</span>
      <h2>Totally ordered families and their unions</h2>
      <p>
        {"A family is "}
        <strong>{"totally ordered by inclusion"}</strong>
        {" if any two members are comparable: one is contained in the other."}
      </p>
      <Equation>
        {
          "\\forall\\theta_1,\\theta_2\\in I,\\qquad\nY_{\\theta_1}\\subseteq Y_{\\theta_2}\\quad\\text{or}\\quad\nY_{\\theta_2}\\subseteq Y_{\\theta_1}."
        }
      </Equation>
      <p>{"Such a family is also called a chain."}</p>
      <p>
        <strong>{"Claim."}</strong>
        {
          " The union of a nonempty chain of linear subspaces is a linear subspace."
        }
      </p>
      <Equation>{"Y=\\bigcup_{\\theta\\in I}Y_\\theta."}</Equation>
      <p>
        <strong>{"Proof."}</strong>
        <MathText>
          {
            " Take $x$, $y$ in the union and a scalar $\\alpha$. There are indices $\\theta_1$ and $\\theta_2$ with $x$ in $Y_{\\theta_1}$ and $y$ in $Y_{\\theta_2}$. Because the family is totally ordered, assume, after interchanging the indices if necessary, that $Y_{\\theta_1}$ is contained in $Y_{\\theta_2}$. Both $x$ and $y$ then belong to the larger subspace. Hence:"
          }
        </MathText>
      </p>
      <Equation>{"\\alpha x+y\\in Y_{\\theta_2}\\subseteq Y."}</Equation>
      <p>
        {
          "The union contains zero because the family is nonempty. Therefore it is a subspace."
        }
      </p>
      <p>
        {
          "The essential step is placing both selected vectors in one member of the family. In an arbitrary union, this need not be possible."
        }
      </p>
      <p>
        <strong>{"Why arbitrary unions fail."}</strong>
        <MathText>
          {
            " The two coordinate axes in the plane are subspaces, but their union is not: $(1,0)$ and $(0,1)$ belong to that union, while their sum $(1,1)$ does not. The chain assumption ensures that both selected vectors lie in a common subspace, where closure applies."
          }
        </MathText>
      </p>
    </section>
  );
}
