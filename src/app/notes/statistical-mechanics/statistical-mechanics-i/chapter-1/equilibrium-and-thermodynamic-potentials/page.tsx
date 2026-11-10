import { NoteBox } from "@/components/notes/NoteBox";
import { StatisticalLesson } from "@/components/notes/StatisticalLesson";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import FreeEnergyLab from "@/components/notes/FreeEnergyLab";
export const metadata = {
  title:
    "Equilibrium & Thermodynamic Potentials | Statistical Mechanics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <StatisticalLesson
      number="1.3"
      title={"Equilibrium & Thermodynamic Potentials"}
      description={
        "Choose the potential that matches the experiment, then derive equilibrium and response relations from it."
      }
      sections={[
        ["equilibrium", "Entropy & equilibrium"],
        ["helmholtz", "Helmholtz free energy"],
        ["potentials", "Changing constraints"],
        ["piston", "A piston model"],
        ["relations", "Maxwell & Gibbs\u2013Duhem"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`At the end of lesson 2 we found a rule for an isolated system: entropy cannot decrease. Most experiments, however, do not isolate the sample. A gas may exchange heat with a thermostat, push against a constant load, or exchange particles with a reservoir. We still want to predict equilibrium, but the sample’s entropy alone is no longer the quantity to maximize. The way forward is to include the surroundings in the entropy balance, then express their contribution using quantities we control.`}</P>
      <section id="equilibrium" className={styles.section}>
        <h2>Start with the system and its surroundings</h2>
        <P>{String.raw`First consider two subsystems inside one isolated enclosure. They can exchange energy but not volume or particles. Let $E_A$ be the energy of the first; the other has $E_B=E_{\mathrm{tot}}-E_A$. Their combined entropy is`}</P>
        <Equation>{String.raw`S_{\mathrm{tot}}(E_A)=S_A(E_A)+S_B(E_{\mathrm{tot}}-E_A).`}</Equation>
        <P>{String.raw`To locate equilibrium, vary the division of energy while keeping the total fixed. From the thermodynamic identity, $(\partial S/\partial E)_{V,N}=1/T$. Differentiating the total entropy therefore gives`}</P>
        <Equation>{String.raw`\frac{dS_{\mathrm{tot}}}{dE_A}=\frac1{T_A}-\frac1{T_B}.`}</Equation>
        <P>{String.raw`At an interior maximum the derivative vanishes, so the temperatures agree. This calculation also predicts the direction of exchange: if $T_A<T_B$, giving a little energy to A increases total entropy. The second law therefore favors transfer from the hotter part to the colder part.`}</P>
        <P>{String.raw`The same method works when the parts exchange volume or particles. Including a chemical term, the equilibrium identity for a simple fluid is`}</P>
        <NoteBox kind="result" title="Fundamental thermodynamic identity">
          <Equation>{String.raw`dE=T\,dS-P\,dV+\mu\,dN.`}</Equation>
        </NoteBox>
        <P>{String.raw`Here $\mu$ is the chemical potential per particle. Solving for $dS$ shows that stationarity of total entropy under volume transfer requires equal pressures, while particle transfer requires equal $\mu$ once the temperatures agree. Equilibrium conditions follow from what is allowed to move across the boundary.`}</P>
      </section>
      <section id="helmholtz" className={styles.section}>
        <h2>Why fixed temperature selects Helmholtz free energy</h2>
        <P>{String.raw`Now replace subsystem B by a very large thermal reservoir at fixed temperature $T_0$. Keep the sample’s volume and particle number fixed, and allow no work other than volume work. Since the volume does not change, energy entering the sample is heat: $Q=\Delta E$. The reservoir loses that energy, so its entropy changes by $-\Delta E/T_0$.`}</P>
        <P>{String.raw`Apply the second law to the isolated combination of sample and reservoir:`}</P>
        <Equation>{String.raw`\Delta S_{\mathrm{tot}}=\Delta S-\frac{\Delta E}{T_0}\ge0.`}</Equation>
        <P>{String.raw`Multiplying by the positive temperature and rearranging yields`}</P>
        <Equation>{String.raw`\Delta(E-T_0S)\le0.`}</Equation>
        <P>{String.raw`This is the origin of a free-energy minimum principle. Among candidate states at the bath temperature, define the Helmholtz free energy $F=E-TS$. At fixed $T$, $V$, and $N$, spontaneous relaxation lowers F, and stable equilibrium minimizes it over allowed internal changes. For a genuinely nonequilibrium state with no single temperature, use the reservoir form $E-T_0S$ when an entropy description is available rather than assigning an invented equilibrium temperature.`}</P>
        <P>{String.raw`We can also understand why temperature is the natural variable of F. Differentiate its definition, use the product rule, and substitute the thermodynamic identity:`}</P>
        <Equation>{String.raw`\begin{aligned}dF&=dE-T\,dS-S\,dT\\&=(T\,dS-P\,dV+\mu\,dN)-T\,dS-S\,dT\\&=-S\,dT-P\,dV+\mu\,dN.\end{aligned}`}</Equation>
        <P>{String.raw`The entropy differential cancels. We have replaced S by its conjugate variable T, an operation called a Legendre transformation. Reading off coefficients gives $S=-(\partial F/\partial T)_{V,N}$ and $P=-(\partial F/\partial V)_{T,N}$. A potential is useful because it encodes measurable quantities in variables suited to the experiment.`}</P>
      </section>
      <section id="potentials" className={styles.section}>
        <h2>Allow the piston to move</h2>
        <NoteBox
          kind="definition"
          title="Choose the potential for the constraints"
        >
          <ul>
            <li>
              <strong>Helmholtz free energy:</strong> F = E − TS; minimized at
              fixed T, V, N.
            </li>
            <li>
              <strong>Gibbs free energy:</strong> G = E + PV − TS; minimized at
              fixed T, P, N.
            </li>
          </ul>
          <p>
            These equilibrium criteria apply to the simple compressible system
            and reservoir assumptions developed here.
          </p>
        </NoteBox>
        <P>{String.raw`Suppose the same thermostat is present but the piston now works against a fixed external pressure $P_0$. For a closed sample with only pressure–volume work, the first law gives $Q=\Delta E+P_0\Delta V$. Substituting this heat into the reservoir entropy balance gives`}</P>
        <Equation>{String.raw`\Delta(E+P_0V-T_0S)\le0.`}</Equation>
        <P>{String.raw`At equilibrium with the pressure and temperature reservoirs, the appropriate potential is the Gibbs free energy, $G=E+PV-TS$. The combination contains both the thermal reservoir’s contribution and the mechanical cost of displacing the surroundings. Its equilibrium differential follows by cancellation once again:`}</P>
        <Equation>{String.raw`\begin{aligned}dG&=dE+P\,dV+V\,dP-T\,dS-S\,dT\\&=-S\,dT+V\,dP+\mu\,dN.\end{aligned}`}</Equation>
        <P>{String.raw`At fixed T, P, and N, equilibrium minimizes G with respect to allowed internal changes such as the amount of material in each phase. This does not mean we differentiate G with respect to its fixed controls to find a minimum. The variable being varied must be an unconstrained internal coordinate.`}</P>
        <P>{String.raw`A related transformation introduces enthalpy, $H=E+PV$. Its differential is $dH=T\,dS+V\,dP+\mu\,dN$, making S, P, and N its natural variables. In a constant-pressure process with only volume work and fixed amount, $\delta Q=dH$. Consequently $C_P=(\partial H/\partial T)_{P,N}$. A minimum-enthalpy principle applies under fixed S, P, and N; it should not be confused with claiming that every insulated, constant-pressure process conserves entropy.`}</P>
        <P>{String.raw`If the sample can also exchange particles with a reservoir, the analogous transformation is the grand potential $\Omega=E-TS-\mu N$. Its natural variables are T, V, and $\mu$, since $d\Omega=-S\,dT-P\,dV-N\,d\mu$. Each transformation removes an extensive coordinate in favor of the intensive control supplied by a reservoir.`}</P>
      </section>
      <section id="piston" className={styles.section}>
        <h2>A free-energy minimum you can locate</h2>
        <P>{String.raw`For a fixed amount of ideal gas at fixed temperature, $P=Nk_BT/V$. Since $P=-(\partial F/\partial V)_{T,N}$, integrating between a reference volume $V_0$ and V gives`}</P>
        <Equation>{String.raw`F(T,V,N)-F(T,V_0,N)=-Nk_BT\ln\frac{V}{V_0}.`}</Equation>
        <P>{String.raw`When the piston pushes against constant external pressure $P_0$, the trial-volume potential is $\Phi(V)=F(T,V,N)+P_0V$. We keep the external pressure fixed while allowing the gas’s internal pressure to change with trial volume. Differentiating gives`}</P>
        <Equation>{String.raw`\frac{d\Phi}{dV}=-\frac{Nk_BT}{V}+P_0.`}</Equation>
        <P>{String.raw`The stationary point satisfies $P=P_0$, just as mechanical equilibrium requires. Its second derivative is $Nk_BT/V^2>0$, so this stationary point is a minimum. The graph below makes the difference between the controlled pressure and the trial internal pressure explicit.`}</P>
        <FreeEnergyLab />
        <P>{String.raw`At the equilibrium volume, the trial potential equals the equilibrium Gibbs energy. Away from that point it is better described as the gas-plus-load potential rather than G evaluated with the gas’s own varying pressure. That distinction is what allows differentiation with respect to V while the imposed pressure stays fixed.`}</P>
      </section>
      <section id="relations" className={styles.section}>
        <h2>Extracting more information from derivatives</h2>
        <P>{String.raw`A differentiable potential also relates responses that at first look unrelated. For F, we have $F_T=-S$ and $F_V=-P$. If mixed second derivatives commute within a smooth single phase, differentiating these two expressions in the opposite order gives a Maxwell relation:`}</P>
        <Equation>{String.raw`\left(\frac{\partial S}{\partial V}\right)_{T,N}=\left(\frac{\partial P}{\partial T}\right)_{V,N}.`}</Equation>
        <P>{String.raw`The identity lets us replace an entropy derivative by a pressure measurement. For an ideal gas the right side is $Nk_B/V$, consistent with the volume term in the entropy formula from lesson 2. Similar equalities follow from the other potentials; their signs come from their differentials rather than from memorization.`}</P>
        <P>{String.raw`Extensivity supplies another constraint. For an ordinary additive bulk system, scale S, V, and N together by a factor $\lambda$. Energy scales by the same factor: $E(\lambda S,\lambda V,\lambda N)=\lambda E(S,V,N)$. Differentiating in $\lambda$ at one gives Euler’s relation:`}</P>
        <Equation>{String.raw`E=TS-PV+\mu N.`}</Equation>
        <P>{String.raw`Differentiate this expression and subtract $dE=T\,dS-P\,dV+\mu\,dN$. The remaining terms must cancel, giving the Gibbs–Duhem relation:`}</P>
        <Equation>{String.raw`S\,dT-V\,dP+N\,d\mu=0.`}</Equation>
        <P>{String.raw`At fixed temperature in an ideal gas, it implies $d\mu=(V/N)dP=k_BT\,dP/P$. Integrating yields $\mu(P)-\mu(P_{\mathrm{ref}})=k_BT\ln(P/P_{\mathrm{ref}})$. Pressure and chemical potential cannot be varied independently while keeping T fixed in a single-component equilibrium phase.`}</P>
        <P>{String.raw`We have learned how constraints select a potential and how its derivatives encode equilibrium. But a vanishing first derivative only identifies a candidate. The next lesson asks whether a small disturbance raises or lowers the relevant potential, and what that tells us about measurable response functions.`}</P>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Work through the consequences</h2>
        <div className={styles.exercise}>
          <h3>1. Choose the potential</h3>
          <P>{String.raw`A closed sample can exchange heat with a thermostat while its volume is fixed. Which potential selects equilibrium?`}</P>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`The Helmholtz free energy is minimized over allowed internal changes at fixed $T,V,N$. The sample entropy alone need not increase because the thermostat also exchanges entropy.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Check a minimum</h3>
          <P>{String.raw`For $\Phi/(Nk_BT)=-\ln v+pv$, find the stationary volume and curvature.`}</P>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`$\Phi_v/(Nk_BT)=-1/v+p$ vanishes at $v=1/p$. The dimensionless second derivative is $1/v^2>0$, so the stationary point is a minimum.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Use a Maxwell relation</h3>
          <P>{String.raw`Given $dG=-S\,dT+V\,dP$ at fixed particle number, relate the entropy pressure derivative to thermal expansion.`}</P>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`Commuting the mixed derivatives gives $(\partial S/\partial P)_{T,N}=-(\partial V/\partial T)_{P,N}$. The minus sign comes from the coefficient of $dT$ in $dG$.`}</P>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original explanations, examples, and illustrations organized around{" "}
          <a href="https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/resources/lecture-3/">
            Mehran Kardar’s MIT 8.333 Lecture Note 3
          </a>
          . We use the simple-fluid pressure–volume convention and state the
          assumptions of each equilibrium criterion.
        </p>
      </div>
    </StatisticalLesson>
  );
}
