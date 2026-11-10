import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RiskSection() {
  return (
    <section id="risk" className={styles.section}>
      <span className={styles.sectionNumber}>02 / FIX A LOSS CONVENTION</span>
      <h2>VaR and expected shortfall</h2>
      <p>
        <MathText>
          {
            "Let L be loss over a stated horizon, with larger positive values worse. Use confidence $\\alpha\\in(0,1)$ and define the lower quantile and tail average:"
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Quantile versus worst tail average">
        <Equation>
          {
            "\\operatorname{VaR}_\\alpha(L)=\\inf\\{\\ell:\\Pr(L\\le\\ell)\\ge\\alpha\\},\\qquad\\operatorname{ES}_\\alpha(L)=\\frac1{1-\\alpha}\\int_\\alpha^1\\operatorname{VaR}_u(L)\\,du."
          }
        </Equation>
        <p>
          Expected shortfall assumes an integrable loss here. For a continuous
          distribution it matches the average loss in the worst 1−α fraction.
          The quantile integral also handles atoms correctly.
        </p>
      </NoteBox>
      <p>
        VaR does not bound the worst possible loss. Neither is it the mean of
        losses. With atoms, conditioning simply on L greater than or equal to
        VaR can average the wrong amount of probability mass.
      </p>
      <h3>Original discrete counterexample to VaR diversification</h3>
      <p>
        Each of two independent portfolios loses 100 with probability 3%,
        otherwise zero. At 95% confidence each has VaR 0 and ES 60: its 3% mass
        at 100 is averaged with 2% zero losses to form the worst 5%.
      </p>
      <Equation>
        {
          "\\Pr(L_A+L_B=0)=0.97^2=0.9409,\\quad\\Pr(L_A+L_B=100)=0.0582,\\quad\\Pr(L_A+L_B=200)=0.0009."
        }
      </Equation>
      <p>
        The combined VaR is 100, greater than the sum of the separate VaRs,
        which is zero. Its ES is 101.8, below the sum of the separate ES values,
        120.
      </p>
      <Equation>
        {
          "\\operatorname{ES}_{0.95}(L_A+L_B)=\\frac{0.0009(200)+0.0491(100)}{0.05}=101.8."
        }
      </Equation>
      <p>
        <MathText>
          {
            "For losses, coherence includes monotonicity, positive homogeneity, cash translation $\\rho(L+c)=\\rho(L)+c$ and subadditivity $\\rho(L_1+L_2)\\le\\rho(L_1)+\\rho(L_2)$. ES has these properties on the appropriate integrable domain; VaR can violate subadditivity, as this example shows."
          }
        </MathText>
      </p>
    </section>
  );
}
