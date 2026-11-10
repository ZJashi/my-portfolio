import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function QuotientNormSection() {
  return (
    <section id="quotient-norm" className={styles.section}>
      <span className={styles.sectionNumber}>09 / LECTURE 3</span>
      <h2>A norm on a quotient by a closed subspace</h2>
      <p>
        <MathText>
          {
            "Now let $Y$ be a closed linear subspace of the normed space $X$. Recall that the points of $X/Y$ are equivalence classes $[x]=x+Y$, and that $[0]=Y$ is the zero class."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Quotient norm">
        <p>
          <MathText>
            {
              "Measure a class by the infimum of the norms of all its representatives."
            }
          </MathText>
        </p>
        <Equation>
          {"\\|[x]\\|_{X/Y}=\\inf_{z\\in[x]}\\|z\\|=\\inf_{y\\in Y}\\|x-y\\|."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The second expression follows from $[x]=x+Y$ and $Y=-Y$. It is the distance from the vector $x$ to the subspace $Y$. The value depends on the class, not on the representative: equal classes are the same set over which the infimum is taken."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The value is finite because $x\\in[x]$, giving $0\\leq\\|[x]\\|_{X/Y}\\leq\\|x\\|$. There is no assumption that a representative of minimum norm exists. An infimum can be approached without being attained."
          }
        </MathText>
      </p>
      <h3>Definiteness and the role of closedness</h3>
      <p>
        <MathText>
          {
            "The infimum is nonnegative. Since $0\\in Y=[0]$, the zero class has norm zero. Conversely, suppose $\\|[x]\\|_{X/Y}=0$. Choose representatives $z_j\\in[x]$ with $\\|z_j\\|\\to0$. Every $z_j-x$ belongs to $Y$, and"
          }
        </MathText>
      </p>
      <Equation>{"\\|(z_j-x)-(-x)\\|=\\|z_j\\|\\longrightarrow0."}</Equation>
      <p>
        <MathText>
          {
            "Thus $z_j-x\\to-x$. Because $Y$ is closed, $-x\\in Y$; because it is a subspace, $x\\in Y$. Hence $[x]=Y=[0]$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "To see the equality of classes directly, if $z\\in[x]$ then $z-x\\in Y$ and $x\\in Y$, so $z=(z-x)+x\\in Y$. Conversely, if $z\\in Y$, then $z-x\\in Y$, so $z\\in[x]$. Both inclusions give $[x]=Y$."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Closedness is essential">
        <p>
          <MathText>
            {
              "Without closedness, the same formula can assign zero to a nonzero class. If $x\\in\\overline Y\\setminus Y$, there are points of $Y$ arbitrarily close to $x$, so $\\|[x]\\|_{X/Y}=0$ even though $[x]\\ne[0]$. The formula then defines a seminorm rather than a norm."
            }
          </MathText>
        </p>
      </NoteBox>
    </section>
  );
}
