import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function VectorsSection() {
  return (
    <section id="vectors" className={styles.section}>
      <span className={styles.sectionNumber}>01 / HOLDINGS AND VALUE</span>
      <h2>Vectors and portfolios</h2>
      <NoteBox title="A portfolio is a vector of quantities">
        <p>
          <MathText>
            {
              "Write $p\\in\\mathbb R^n$ for prices and $h\\in\\mathbb R^n$ for holdings. A negative holding is a short position. Their dot product gives portfolio value; holdings are quantities, not percentages."
            }
          </MathText>
        </p>
        <Equation>{"V=p^Th=\\sum_{j=1}^n p_jh_j."}</Equation>
      </NoteBox>
      <p>
        <strong>Original example.</strong> Suppose two assets cost £20 and £50.
        Holding three units of the first and shorting one unit of the second
        costs £10. If their prices become £22 and £47, the position is worth
        £19. Its gain is £9 before costs or distributions.
      </p>
      <Equation>
        {
          "p_0=\\begin{pmatrix}20\\\\50\\end{pmatrix},\\quad h=\\begin{pmatrix}3\\\\-1\\end{pmatrix},\\quad p_1=\\begin{pmatrix}22\\\\47\\end{pmatrix},\\qquad h^T(p_1-p_0)=3(2)-1(-3)=9."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Include a cash account to record funding. A rebalance $\\Delta h$ is self financing at current prices if $p^T\\Delta h=0$: purchases are funded by sales or cash already in the portfolio. This statement assumes frictionless trading; transaction costs require additional cash."
          }
        </MathText>
      </p>
      <p>
        One profitable outcome does not establish arbitrage. The same initial
        position must avoid losses across every possible terminal state.
      </p>
    </section>
  );
}
