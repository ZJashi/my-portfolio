import { NoteBox } from "@/components/notes/NoteBox";
import { StatisticalLesson } from "@/components/notes/StatisticalLesson";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import { CarnotLab } from "@/components/notes/ThermodynamicsLabs";
import styles from "../../../../notes.styles";
import { CarnotSection } from "./carnot-section";

export const metadata = {
  title:
    "The Second Law, Carnot Engines & Entropy | Statistical Mechanics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <StatisticalLesson
      number="1.2"
      title="The Second Law, Carnot Engines & Entropy"
      description="Energy conservation tells us the balance. The second law tells us which transformations are possible—and leads to a new state function."
      sections={[
        ["law", "The second law"],
        ["carnot", "Carnot engines"],
        ["lab", "Engine lab"],
        ["entropy", "Entropy"],
        ["examples", "Entropy examples"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`In the previous lesson, an ideal gas expanded at constant temperature, absorbed heat, and delivered an equal amount of work. Nothing in the first law prevented all that heat from becoming work during the expansion. Could we repeat the process indefinitely and build an engine that converts heat entirely into useful work? The difficulty appears when we try to restore the gas to its initial state. Following that return journey will lead us from an engineering question to the definition of entropy.`}</P>
      <section id="law" className={styles.section}>
        <h2>Why returning to the starting state matters</h2>
        <NoteBox kind="law" title="Second law · Two equivalent statements">
          <ul>
            <li>
              <strong>Kelvin–Planck:</strong> no cyclic engine can convert heat
              from a single reservoir entirely into work as its sole effect.
            </li>
            <li>
              <strong>Clausius:</strong> heat cannot be transferred from cold to
              hot as the sole effect of a device.
            </li>
          </ul>
        </NoteBox>
        <P>{String.raw`A useful cyclic engine must return its working substance to the same state after each cycle. Otherwise it is consuming a finite change in that substance rather than repeating an operation. Since internal energy is a state function, a full cycle has $\Delta E=0$.`}</P>
        <P>{String.raw`Suppose the engine absorbs heat of magnitude $Q_H$ from a hot reservoir and rejects heat of magnitude $Q_C$ to a cold one. We now use positive magnitudes for these transfers and for the delivered work $W_{\mathrm{out}}$. In the sign convention of lesson 1, net heat into the engine is $Q_H-Q_C$ and work on it is $-W_{\mathrm{out}}$. Therefore`}</P>
        <Equation>{String.raw`0=Q_H-Q_C-W_{\mathrm{out}}.`}</Equation>
        <P>{String.raw`Solving for the work and dividing by the heat drawn from the hot reservoir gives the efficiency:`}</P>
        <Equation>{String.raw`W_{\mathrm{out}}=Q_H-Q_C,\qquad\eta=1-\frac{Q_C}{Q_H}.`}</Equation>
        <P>{String.raw`Energy conservation alone would allow $Q_C=0$. The Kelvin–Planck statement of the second law rules out a cyclic device whose sole effect is to take heat from one reservoir and convert it completely into work. The isothermal expansion from lesson 1 does not violate this statement: its volume changes, so the gas has not completed a cycle.`}</P>
        <P>{String.raw`The Clausius statement expresses the same restriction differently: no device can have the sole effect of transferring heat from cold to hot. A refrigerator is permitted because it also consumes work. To connect the statements, imagine a work-free refrigerator returning an ordinary engine’s rejected heat to the hot reservoir. The combined device would produce work while exchanging net heat with only one bath. Conversely, a perfect one-bath engine could power a refrigerator, leaving a net cold-to-hot transfer without work from outside. Either hypothetical violation would imply the other.`}</P>
        <P>{String.raw`These statements tell us that some heat must be rejected. To determine how much, we need an engine that can serve as a reversible benchmark.`}</P>
      </section>
      <CarnotSection />
      <section id="lab" className={styles.section}>
        <h2>Reading the efficiency as an energy balance</h2>
        <P>{String.raw`Use the model below to compare the heat input, heat rejected, and work delivered. Start with reservoirs at $600\,\mathrm K$ and $300\,\mathrm K$. The maximum efficiency is $1/2$: for every $1000\,\mathrm J$ taken from the hot bath, a reversible engine delivers $500\,\mathrm J$ and rejects the other $500\,\mathrm J$. Increasing the heat input scales these amounts without changing the efficiency.`}</P>
        <CarnotLab />
        <P>{String.raw`Running the reversible engine backward produces a refrigerator. Its useful output is now heat extracted from the cold bath, so we define a coefficient of performance rather than reuse the engine efficiency. The required work is $W_{\mathrm{in}}=Q_H-Q_C$. Substituting the reversible heat ratio gives`}</P>
        <Equation>{String.raw`\mathrm{COP}_{\mathrm{rev}}=\frac{Q_C}{Q_H-Q_C}=\frac{T_C}{T_H-T_C}.`}</Equation>
        <P>{String.raw`This ratio can exceed one because work is used to move heat, not create it. The two-reservoir engine bound constrains efficiency; it does not tell us the power of an engine or guarantee that a reversible idealization can be realized at a finite operating rate.`}</P>
      </section>
      <section id="entropy" className={styles.section}>
        <h2>From a reversible cycle to a state function</h2>
        <P>{String.raw`The heat ratio contains a stronger clue. For a reversible Carnot cycle, heat enters at the hot temperature and leaves at the cold one, so`}</P>
        <Equation>{String.raw`\frac{Q_H}{T_H}-\frac{Q_C}{T_C}=0.`}</Equation>
        <P>{String.raw`Generalizing this cycle argument leads to the Clausius inequality. With heat positive into the system, the cyclic sum or integral obeys`}</P>
        <Equation>{String.raw`\oint\frac{\delta Q}{T_b}\le0.`}</Equation>
        <P>{String.raw`Here $T_b$ is the temperature of the reservoir or boundary at which each increment is transferred. For an irreversible process, the working substance need not possess a single uniform equilibrium temperature throughout. In a reversible process, the system and the exchanging reservoir differ only infinitesimally in temperature, so we can use the equilibrium temperature $T$ along the path.`}</P>
        <P>{String.raw`For a reversible cycle the integral must be zero: reversing the cycle reverses its sign, and both directions must satisfy the inequality. Now connect equilibrium states $A$ and $B$ by two different reversible paths. Going forward on the first and backward on the second makes a reversible cycle. Its zero integral means`}</P>
        <Equation>{String.raw`\int_A^B\frac{\delta Q_{\mathrm{rev}}^{(1)}}{T}=\int_A^B\frac{\delta Q_{\mathrm{rev}}^{(2)}}{T}.`}</Equation>
        <P>{String.raw`We have found a quantity whose endpoint difference is independent of path. That is precisely the property needed to define a state function. We call it entropy:`}</P>
        <NoteBox kind="definition" title="Entropy · A state function">
          <Equation>{String.raw`S(B)-S(A)=\int_A^B\frac{\delta Q_{\mathrm{rev}}}{T}.`}</Equation>
        </NoteBox>
        <P>{String.raw`Entropy has units of energy divided by temperature. Although heat itself is path dependent, multiplying a reversible heat increment by the integrating factor $1/T$ gives the exact differential $dS$.`}</P>
        <P>{String.raw`What if the actual journey from $A$ to $B$ is irreversible? Close it into a cycle using a reversible return path. Apply the Clausius inequality to the whole cycle and replace the return integral by $S(A)-S(B)$. Rearranging gives`}</P>
        <NoteBox kind="law" title="Second law · Entropy balance">
          <Equation>{String.raw`\Delta S\ge\int_A^B\frac{\delta Q}{T_b}.`}</Equation>
        </NoteBox>
        <P>{String.raw`The difference is entropy production, denoted $S_{\mathrm{gen}}\ge0$. In a closed isolated system the integral vanishes, so entropy cannot decrease. A subsystem can lose entropy by exporting it through heat transfer; that does not imply negative entropy production.`}</P>
        <P>{String.raw`Finally combine $\delta Q_{\mathrm{rev}}=T\,dS$ with reversible pressure–volume work and the first law. For a simple compressible system at fixed amount of matter,`}</P>
        <Equation>{String.raw`dE=T\,dS-P\,dV.`}</Equation>
        <P>{String.raw`This identity relates neighboring equilibrium states. It does not assert that the heat in an arbitrary irreversible process equals $T\,dS$. The reversible path helped us derive the identity, while the state functions make it useful beyond that particular path.`}</P>
      </section>
      <section id="examples" className={styles.section}>
        <h2>Computing entropy without reproducing the real process</h2>
        <P>{String.raw`The distinction between an actual process and a reference path becomes concrete in free expansion. First derive a general entropy difference for an ideal gas. Since $dE=C_V\,dT$ at fixed amount, substituting the ideal-gas pressure into the thermodynamic identity gives`}</P>
        <Equation>{String.raw`dS=\frac{C_V}{T}\,dT+nR\frac{dV}{V}.`}</Equation>
        <P>{String.raw`For constant $C_V$, integrate from the initial equilibrium state to the final one:`}</P>
        <Equation>{String.raw`\Delta S=C_V\ln\frac{T_f}{T_i}+nR\ln\frac{V_f}{V_i}.`}</Equation>
        <P>{String.raw`Now let one mole freely expand into twice its volume inside an insulated enclosure. From lesson 1, the actual process transfers neither heat nor work. Its energy and, for an ideal gas, its final temperature are unchanged. The temperature term therefore vanishes, leaving`}</P>
        <Equation>{String.raw`\Delta S=R\ln2\approx5.76\,\mathrm{J/K}.`}</Equation>
        <P>{String.raw`There is no contradiction between zero heat and positive entropy change. We evaluated the state difference using an equilibrium relation, which is equivalent to choosing a reversible reference path between the endpoints. The actual free expansion produces entropy internally. Treating its zero heat as $T\,dS$ would incorrectly assume reversibility.`}</P>
        <P>{String.raw`For a second example, transfer $100\,\mathrm J$ from a large $400\,\mathrm K$ reservoir to a large $300\,\mathrm K$ reservoir. The reservoirs remain at fixed temperatures. The hot reservoir loses entropy while the cold one gains more:`}</P>
        <Equation>{String.raw`\Delta S_{\mathrm{total}}=-\frac{100}{400}+\frac{100}{300}\approx0.0833\,\mathrm{J/K}.`}</Equation>
        <P>{String.raw`The energy lost by one reservoir equals that gained by the other, yet total entropy increases. Energy conservation fixes the balance; entropy identifies the allowed direction. This is the missing condition we were looking for at the end of lesson 1.`}</P>
      </section>
      <section id="practice" className={styles.section}>
        <span className={styles.sectionNumber}>06 / PRACTICE</span>
        <h2>Check the bound and the balance.</h2>
        <div className={styles.exercise}>
          <h3>1. An impossible engine?</h3>
          <P>{String.raw`An engine between 500 K and 300 K claims 60% efficiency. Is this possible?`}</P>
          <details>
            <summary>Show solution</summary>
            <Equation>{String.raw`\eta_{\max}=1-\frac{300}{500}=0.40`}</Equation>
            <P>{String.raw`No. Its claimed 60% exceeds the 40% reversible bound for these two reservoirs.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. A reversible cycle</h3>
          <P>{String.raw`For $T_H$ = 800 K, $T_C$ = 400 K and $Q_H$ = 1600 J, find work output and total reservoir entropy change.`}</P>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`Efficiency is 50%, work is 800 J, and heat rejected is 800 J. The hot reservoir loses 2 J/K and the cold reservoir gains 2 J/K, for zero total change.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Adiabatic or isentropic?</h3>
          <P>{String.raw`Does an adiabatic transformation necessarily conserve entropy?`}</P>
          <details>
            <summary>Show reasoning</summary>
            <P>{String.raw`No. Adiabatic means no heat transfer. Entropy can still be produced internally. A reversible adiabatic transformation is isentropic; free expansion is an adiabatic counterexample to the unrestricted statement.`}</P>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original explanations, examples, and model organized around{" "}
          <a href="https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/resources/lecture-2/">
            Mehran Kardar’s MIT 8.333 Lecture Note 2
          </a>{" "}
          and{" "}
          <a href="https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/resources/lecture-2-thermodynamics-part-2/">
            Thermodynamics Part 2
          </a>
          . Lesson organization is local to this notebook.
        </p>
      </div>
    </StatisticalLesson>
  );
}
