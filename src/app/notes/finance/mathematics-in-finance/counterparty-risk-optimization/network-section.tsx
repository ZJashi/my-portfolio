import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function NetworkSection() {
  return (
    <section id="network" className={styles.section}>
      <span className={styles.sectionNumber}>
        05 / KEEP NET RISK, CHANGE ITS DISTRIBUTION
      </span>
      <h2>Network margin optimisation</h2>
      <p>
        The lecture considers trades that reduce aggregate initial margin while
        preserving agreed participant exposures. A trade seen from one party has
        the opposite sign from the other. Preserving each party’s aggregate risk
        still allows exposures to be redistributed among counterparties.
      </p>
      <Equation>
        {
          "x_{ab}=-x_{ba},\\qquad\\sum_b x_{ab}=0,\\qquad d_{ab}=d^0_{ab}+B_{ab}x_{ab}."
        }
      </Equation>
      <p>
        <MathText>
          {
            "A simplified objective is $\\min_x\\sum_{a,b}\\mathrm{IM}_{ab}(d_{ab})$, with the summation convention stated to avoid counting the same collateral obligation twice. Add risk tolerances, counterparty limits, eligibility and no worse off constraints as needed. A nonlinear margin model does not automatically make the problem convex."
          }
        </MathText>
      </p>
      <h3>Original three party circulation</h3>
      <p>
        Measure one synthetic exposure on oriented edges A→B, B→C and C→A as 8,
        5 and 2. Subtracting the same t from every edge preserves each node’s
        outgoing minus incoming net. The illustrative gross exposure objective
        is:
      </p>
      <Equation>{"g(t)=|8-t|+|5-t|+|2-t|."}</Equation>
      <p>
        The median t = 5 minimises this objective. Edges become 3, 0 and −3,
        reducing gross exposure from 15 to 6. Net exposures remain A: +6, B: −3,
        C: −3. The negative last edge represents the reversed direction.
      </p>
      <p>
        Absolute exposure is only a toy margin proxy. Actual netting sets, risk
        buckets, concentration terms and collateral rules can change both the
        objective and feasibility. Reduced collateral requirements do not by
        themselves mean that all economic or systemic risk has fallen.
      </p>
    </section>
  );
}
