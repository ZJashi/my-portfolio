import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function HedgeSection() {
  return (
    <section id="hedge" className={styles.section}>
      <span className={styles.sectionNumber}>
        04 / LOADINGS BECOME RISK EXPOSURES
      </span>
      <h2>Factor neutral portfolios</h2>
      <NoteBox
        kind="definition"
        title="Use signed price sensitivity, not raw notional"
      >
        <p>
          <MathText>
            {
              "Let $d_j$ be portfolio PnL for a +1 bp yield change at maturity j, in currency per bp. For a small yield move measured in bp, $\\Delta V\\approx d^T\\Delta y$. Under the factor decomposition, exposure to factor i is $d^Tq_i$."
            }
          </MathText>
        </p>
        <Equation>
          {"d^Tq_i=0\\quad\\text{means local neutrality to factor i}."}
        </Equation>
      </NoteBox>
      <p>
        A long conventional bond normally has negative signed sensitivity to an
        upward yield change. Some desks quote positive DV01 as a loss magnitude.
        State the convention before converting loadings into positions.
      </p>
      <h3>Original butterfly hedge</h3>
      <p>
        <MathText>
          {
            "To retain a belly exposure of $d_2=-2$ currency/bp while eliminating level and slope in the synthetic example, solve $d_1+d_2+d_3=0$ and $-d_1+d_3=0$. The answer is $d=(1,-2,1)^T$."
          }
        </MathText>
      </p>
      <Equation>
        {
          "d^Tq_L=0,\\qquad d^Tq_S=0,\\qquad d^Tq_C=\\sqrt6,\\qquad\\operatorname{Var}(\\Delta V)=d^TSd=6."
        }
      </Equation>
      <p>
        If the signed sensitivities per unit notional are −0.02, −0.05 and −0.08
        currency/bp, the required notionals are −50, +40 and −12.5. Equal factor
        risk weights are generally not equal notionals.
      </p>
      <p>
        Neutrality applies to the fitted directions and the local linear
        approximation. Curve model changes, convexity, financing, liquidity and
        changing loadings remain. A quiet residual portfolio can require large
        notionals for a given target volatility.
      </p>
    </section>
  );
}
