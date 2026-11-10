import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function CarnotSection() {
  return (
    <section id="carnot" className={styles.section}>
      <h2>Constructing a reversible cycle</h2>
      <figure className={styles.carnotDiagram}>
        <svg
          viewBox="0 0 600 290"
          role="img"
          aria-labelledby="carnot-title carnot-desc"
        >
          <title id="carnot-title">Energy flow through a Carnot engine</title>
          <desc id="carnot-desc">
            Heat Q H enters from the hot reservoir. The engine delivers work W
            out and rejects heat Q C to the cold reservoir.
          </desc>
          <defs>
            <marker
              id="carnot-arrow"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0 0L8 4L0 8Z" fill="currentColor" />
            </marker>
          </defs>
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="115" y="12" width="270" height="48" rx="8" />
            <rect x="160" y="115" width="180" height="60" rx="30" />
            <rect x="115" y="232" width="270" height="48" rx="8" />
            <path
              d="M250 62V112M250 177V229M342 145H510"
              markerEnd="url(#carnot-arrow)"
            />
          </g>
          <g fill="currentColor" textAnchor="middle" fontSize="16">
            <text x="250" y="42">
              Hot reservoir · T_H
            </text>
            <text x="250" y="151">
              Carnot engine
            </text>
            <text x="250" y="262">
              Cold reservoir · T_C
            </text>
            <text x="286" y="92">
              Q_H
            </text>
            <text x="286" y="210">
              Q_C
            </text>
            <text x="435" y="130">
              W_out = Q_H − Q_C
            </text>
          </g>
        </svg>
        <figcaption>
          <strong>One complete cycle:</strong> the working substance returns to
          its initial state, so ΔE = 0. Arrow labels Q_H and Q_C denote positive
          heat magnitudes.
        </figcaption>
      </figure>
      <ol className={styles.cycleSteps}>
        <li>
          <strong>A → B · Hot isotherm:</strong> expand at T<sub>H</sub> and
          absorb heat.
        </li>
        <li>
          <strong>B → C · Reversible adiabat:</strong> expand without heat
          transfer and cool.
        </li>
        <li>
          <strong>C → D · Cold isotherm:</strong> compress at T<sub>C</sub> and
          reject heat.
        </li>
        <li>
          <strong>D → A · Reversible adiabat:</strong> compress without heat
          transfer and warm.
        </li>
      </ol>
      <P>{String.raw`Consider the gas and frictionless piston again. First let the gas expand reversibly in contact with a hot reservoir at temperature $T_H$. Next insulate it and allow further reversible expansion until it cools to $T_C$. Compress it isothermally in contact with the cold reservoir, then insulate and compress it back to the starting state. The four steps form a Carnot cycle.`}</P>
      <P>{String.raw`The insulated stages require a little derivation. For an ideal gas with constant total heat capacity $C_V$, the first law along a reversible adiabat gives`}</P>
      <Equation>{String.raw`0=\delta Q=C_V\,dT+P\,dV.`}</Equation>
      <P>{String.raw`Substitute $P=nRT/V$, then divide by $C_VT$. Using $C_P-C_V=nR$ and defining $\gamma=C_P/C_V$, we obtain`}</P>
      <Equation>{String.raw`\frac{dT}{T}+(\gamma-1)\frac{dV}{V}=0.`}</Equation>
      <P>{String.raw`Integrating between any two states on that adiabat gives`}</P>
      <Equation>{String.raw`\ln\frac{T_2}{T_1}+(\gamma-1)\ln\frac{V_2}{V_1}=0.`}</Equation>
      <P>{String.raw`Exponentiating shows that $TV^{\gamma-1}$ is constant. Combining this with the equation of state gives the equivalent relation $PV^\gamma=\mathrm{constant}$. For a classical monatomic ideal gas, $\gamma=5/3$. These adiabatic curves differ from the isotherms, which satisfy $PV=\mathrm{constant}$.`}</P>
      <P>{String.raw`Label the cycle’s states $A,B,C,D$ in order, with hot expansion from $A$ to $B$ and cold compression from $C$ to $D$. Applying the adiabatic relation on the two insulated legs gives`}</P>
      <Equation>{String.raw`\begin{aligned}T_HV_B^{\gamma-1}&=T_CV_C^{\gamma-1},\\T_HV_A^{\gamma-1}&=T_CV_D^{\gamma-1}.\end{aligned}`}</Equation>
      <P>{String.raw`Dividing these equations cancels the temperatures, leaving $V_B/V_A=V_C/V_D$. This is the step that connects the volume changes during the two isotherms. We can now use the work calculation from lesson 1 to write the absorbed and rejected heat magnitudes:`}</P>
      <Equation>{String.raw`\begin{aligned}Q_H&=nRT_H\ln\frac{V_B}{V_A},\\Q_C&=nRT_C\ln\frac{V_C}{V_D}.\end{aligned}`}</Equation>
      <P>{String.raw`Because the volume ratios are equal, the logarithms cancel when we divide the heats. Consequently,`}</P>
      <NoteBox kind="result" title="Carnot efficiency · Reversible limit">
        <Equation>{String.raw`\frac{Q_C}{Q_H}=\frac{T_C}{T_H},\qquad\eta_{\mathrm{rev}}=1-\frac{T_C}{T_H}.`}</Equation>
        <p>
          Use <strong>kelvin</strong>, with two reservoirs at constant
          temperatures and{" "}
          <strong>
            0 &lt; T<sub>C</sub> &lt; T<sub>H</sub>
          </strong>
          . Every engine between these baths obeys η ≤ η<sub>rev</sub>.
        </p>
      </NoteBox>
      <div className={styles.workedExample}>
        <h3>Worked calculation · From temperatures to work</h3>
        <P>{String.raw`A reversible engine operates between $T_H=600\,\mathrm K$ and $T_C=300\,\mathrm K$, absorbing $Q_H=1200\,\mathrm J$ per cycle.`}</P>
        <ol>
          <li>
            <strong>Find the efficiency.</strong>
            <Equation>{String.raw`\eta_{\mathrm{rev}}=1-\frac{300}{600}=0.50=50\%.`}</Equation>
          </li>
          <li>
            <strong>Calculate the delivered work.</strong>
            <Equation>{String.raw`W_{\mathrm{out}}=\eta Q_H=0.50(1200\,\mathrm J)=600\,\mathrm J.`}</Equation>
          </li>
          <li>
            <strong>Check the rejected heat.</strong>
            <Equation>{String.raw`Q_C=Q_H-W_{\mathrm{out}}=600\,\mathrm J.`}</Equation>
          </li>
        </ol>
        <p>
          <strong>Interpretation:</strong> a reversible engine reaches this
          efficiency; an irreversible engine between the same reservoirs has
          lower efficiency.
        </p>
      </div>
      <P>{String.raw`We derived this result for one ideal-gas realization, but reversibility makes it universal. If another engine between the same two baths were more efficient, we could scale it to provide exactly the work needed to run our reversible engine backward. The combined device would transfer heat from cold to hot without external work. The second law forbids that result. Applying the comparison in both directions to two reversible engines shows that they have the same efficiency, regardless of working substance.`}</P>
      <P>{String.raw`This universal heat ratio provides a way to define thermodynamic temperature without choosing a particular thermometer material. On the kelvin scale it agrees with the ideal-gas temperature used above. Our ordinary engine model assumes $T_H>T_C>0$.`}</P>
    </section>
  );
}
