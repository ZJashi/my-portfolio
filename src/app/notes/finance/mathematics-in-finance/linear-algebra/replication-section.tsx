import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ReplicationSection() {
  return (
    <section id="replication" className={styles.section}>
      <span className={styles.sectionNumber}>03 / A MARKET AS A MATRIX</span>
      <h2>Replication and rank</h2>
      <p>
        <MathText>
          {
            "Consider $m$ terminal states and $n$ assets. All states are possible. Let $A_{ij}$ be asset $j$’s terminal payoff in state $i$, and let $p$ be its current price vector. Assume unrestricted real holdings, no costs, and trading only at the initial and terminal dates."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Replication is a linear system">
        <Equation>
          {
            "A\\in\\mathbb R^{m\\times n},\\quad h\\in\\mathbb R^n,\\quad c\\in\\mathbb R^m,\\qquad Ah=c,\\qquad V_0=p^Th."
          }
        </Equation>
        <p>
          A claim is attainable when its payoff vector lies in the column space
          of A. The market is complete when rank A equals the number of states.
          A replicating position is unique when the null space of A is zero.
        </p>
      </NoteBox>
      <h3>Original example with two states</h3>
      <p>
        A bond costs £1 and pays £1.05 in either state. A stock costs £100 and
        pays £120 in the up state or £80 in the down state. A call with strike
        £100 pays £20 or zero.
      </p>
      <Equation>
        {
          "p=\\begin{pmatrix}1\\\\100\\end{pmatrix},\\quad A=\\begin{pmatrix}1.05&120\\\\1.05&80\\end{pmatrix},\\quad c=\\begin{pmatrix}20\\\\0\\end{pmatrix}."
        }
      </Equation>
      <p>
        Subtracting the down equation from the up equation eliminates the bond
        holding. Half a stock supplies the £20 payoff difference; borrowing
        finances the remaining offset.
      </p>
      <Equation>
        {
          "1.05h_B+120h_S=20,\\quad1.05h_B+80h_S=0\\quad\\Longrightarrow\\quad h_S=\\frac12,\\quad h_B=-\\frac{40}{1.05}."
        }
      </Equation>
      <Equation>
        {"C_0=p^Th=50-\\frac{40}{1.05}=\\frac{250}{21}\\approx\\pounds11.90."}
      </Equation>
      <p>
        <MathText>
          {
            "The determinant is $1.05(80-120)=-42\\ne0$, so every two state claim has a unique replicating position. In a larger market, $Ah=c$ may have no solution or many solutions. If one solution is $h_0$, every solution is $h_0+z$ with $Az=0$. Redundant assets can make holdings nonunique even in a complete market."
          }
        </MathText>
      </p>
    </section>
  );
}
