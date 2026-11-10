import { NoteBox } from "@/components/notes/NoteBox";
import { StatisticalLesson } from "@/components/notes/StatisticalLesson";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
import { StabilityFigure } from "@/components/notes/StabilityFigure";
export const metadata = {
  title: "Stability & the Third Law | Statistical Mechanics I | Zura Jashi",
};
export default function Lesson() {
  return (
    <StatisticalLesson
      number="1.4"
      title={"Stability & the Third Law"}
      description={
        "Use curvature to test equilibrium, connect response functions, and examine what thermodynamics requires at low temperature."
      }
      sections={[
        ["curvature", "Stationarity & stability"],
        ["thermal", "Thermal stability"],
        ["mechanical", "Mechanical stability"],
        ["responses", "Response identities"],
        ["third-law", "Low-temperature entropy"],
        ["cooling", "Approaching zero"],
        ["practice", "Practice"],
      ]}
    >
      <P>{String.raw`In lesson 3, minimizing the appropriate potential gave us the familiar conditions of equilibrium: equal temperatures, balanced pressures, and equal chemical potentials. Finding a stationary point, however, is not enough. A ball can be momentarily balanced at the top of a hill as well as resting at its bottom. We now ask whether small allowed changes move a thermodynamic system toward equilibrium or away from it. That question turns the curvature of thermodynamic functions into restrictions on heat capacities and compressibilities.`}</P>
      <section id="curvature" className={styles.section}>
        <h2>Equilibrium must resist an allowed disturbance</h2>
        <P>{String.raw`Let x be an internal coordinate that can change while the external controls remain fixed. Near a stationary point $x_*$, expand the appropriate free energy:`}</P>
        <Equation>{String.raw`\Phi(x_*+\delta x)=\Phi(x_*)+\frac12\Phi''(x_*)(\delta x)^2+\cdots.`}</Equation>
        <P>{String.raw`The first-order term vanishes because $\Phi'(x_*)=0$. If the second derivative is positive, sufficiently small displacements raise the potential: the point is a local minimum and is stable against this mode of disturbance. If the curvature is negative, displacements lower the potential and the stationary point is unstable. Zero curvature requires examining higher-order terms; the quadratic test alone is inconclusive.`}</P>
        <StabilityFigure />
        <P>{String.raw`A local minimum need not be the global minimum. When a lower state exists elsewhere but a barrier separates the two, the higher local minimum is metastable. Thermodynamic comparison identifies which state is preferred; barrier crossing and relaxation rates require additional dynamical information. In the following calculations we test local stability in a smooth single phase, with the variables and allowed exchanges stated explicitly.`}</P>
      </section>
      <section id="thermal" className={styles.section}>
        <h2>Why a stable heat capacity is positive</h2>
        <P>{String.raw`Consider two identical portions of a system inside an isolated enclosure. Their volumes and particle numbers are fixed, and each initially has energy $E_0$ and temperature T. Transfer a small amount of energy $\epsilon$ from one to the other, keeping their combined energy fixed. The resulting total entropy is`}</P>
        <Equation>{String.raw`S_{\mathrm{tot}}(\epsilon)=S(E_0+\epsilon)+S(E_0-\epsilon).`}</Equation>
        <P>{String.raw`Expand both terms. Their first-order contributions cancel and their second-order terms add, giving`}</P>
        <Equation>{String.raw`S_{\mathrm{tot}}(\epsilon)=2S(E_0)+S''(E_0)\epsilon^2+\cdots.`}</Equation>
        <P>{String.raw`Stable isolated equilibrium requires an entropy maximum, so $S''(E_0)$ must be negative for strict local stability. From the equilibrium identity, $S'(E)=1/T$. Differentiating once more at fixed V and N connects the curvature to heat capacity:`}</P>
        <Equation>{String.raw`\begin{aligned}\left(\frac{\partial^2 S}{\partial E^2}\right)_{V,N}&=-\frac1{T^2}\left(\frac{\partial T}{\partial E}\right)_{V,N}\\&=-\frac1{T^2C_V}.\end{aligned}`}</Equation>
        <P>{String.raw`For a regular state at positive temperature, negative entropy curvature therefore requires $C_V>0$. Adding energy raises temperature, so a portion that gains energy tends to become hotter and give energy back. A negative heat capacity would reverse that restoring tendency in this exchange experiment.`}</P>
        <P>{String.raw`The assumptions matter. The argument concerns ordinary additive systems for which subdividing into weakly coupled macroscopic parts is legitimate. Nonadditive systems, including some self-gravitating systems, can exhibit negative microcanonical heat capacities. Those are not counterexamples to a derivation whose partition and reservoir assumptions they do not satisfy.`}</P>
      </section>
      <section id="mechanical" className={styles.section}>
        <h2>Pressure must respond in the restoring direction</h2>
        <P>{String.raw`Return to the thermostatted gas and movable piston of lesson 3. At fixed temperature and particle number, its trial potential under imposed pressure $P_0$ is $\Phi(V)=F(T,V,N)+P_0V$. The first derivative vanishes when the internal pressure equals the external pressure. Differentiating again gives`}</P>
        <Equation>{String.raw`\Phi''(V)=-\left(\frac{\partial P}{\partial V}\right)_{T,N}.`}</Equation>
        <P>{String.raw`A stable minimum thus requires the pressure to fall as volume increases. If a small expansion instead raised the internal pressure, the gas would push outward harder, amplifying the displacement. In terms of the isothermal compressibility introduced in lesson 1,`}</P>
        <Equation>{String.raw`\kappa_T=-\frac1V\left(\frac{\partial V}{\partial P}\right)_{T,N}>0.`}</Equation>
        <P>{String.raw`Where the derivative is finite and invertible, we can write the curvature as $\Phi''=1/(V\kappa_T)$. The ideal gas has $\kappa_T=1/P$, reproducing the positive curvature $Nk_BT/V^2$ found earlier. At a critical point the compressibility can diverge, so strict quadratic stability needs more care and higher-order or nonanalytic behavior may matter.`}</P>
        <P>{String.raw`When two or more coordinates can fluctuate together, testing each coordinate separately is insufficient. For example, a quadratic change in two coordinates can have the form`}</P>
        <Equation>{String.raw`\Delta\Phi=\frac12\left(a x^2+2bxy+c y^2\right).`}</Equation>
        <P>{String.raw`Even if a and c are positive, a sufficiently large coupling b can produce a downhill direction. Completing the square makes the full condition visible:`}</P>
        <Equation>{String.raw`2\Delta\Phi=a\left(x+\frac ba y\right)^2+\left(c-\frac{b^2}{a}\right)y^2.`}</Equation>
        <P>{String.raw`Strict positivity for all nonzero displacements requires $a>0$ and $ac-b^2>0$. More generally, the Hessian must be positive definite on the allowed fluctuation directions. Conserved quantities or overall extensivity can create constrained or zero directions, so one should not demand strict positivity on variations that the experiment does not allow.`}</P>
      </section>
      <section id="responses" className={styles.section}>
        <h2>A relation between heat capacity and compressibility</h2>
        <P>{String.raw`Stability also links response functions. For a simple fluid with fixed particle number, write entropy as a function of T and V. The temperature derivative gives $C_V/T$, and the Maxwell relation from lesson 3 gives the volume derivative:`}</P>
        <Equation>{String.raw`dS=\frac{C_V}{T}\,dT+\left(\frac{\partial P}{\partial T}\right)_{V,N}dV.`}</Equation>
        <P>{String.raw`Along a constant-pressure path, divide by $dT$ and multiply by T. Since $C_P=T(\partial S/\partial T)_{P,N}$, this becomes`}</P>
        <Equation>{String.raw`C_P-C_V=T\left(\frac{\partial P}{\partial T}\right)_{V,N}\left(\frac{\partial V}{\partial T}\right)_{P,N}.`}</Equation>
        <P>{String.raw`The definitions of expansion coefficient and compressibility imply $dV=V\alpha_P\,dT-V\kappa_T\,dP$. Setting $dV=0$ in this expression yields $(\partial P/\partial T)_{V,N}=\alpha_P/\kappa_T$. Substituting both factors into the heat-capacity difference gives`}</P>
        <NoteBox
          kind="result"
          title="Stable simple fluid · Positive temperature"
        >
          <Equation>{String.raw`C_P-C_V=\frac{TV\alpha_P^2}{\kappa_T}\ge0.`}</Equation>
        </NoteBox>
        <P>{String.raw`The inequality follows from positive temperature and stable positive compressibility. It is not necessary for the expansion coefficient itself to be positive because it enters squared. For the ideal gas, $\alpha_P=1/T$ and $\kappa_T=1/P$, so the expression reduces to $PV/T=nR$, exactly the result derived in lesson 1.`}</P>
      </section>
      <section id="third-law" className={styles.section}>
        <h2>What changes as temperature approaches zero</h2>
        <NoteBox kind="law" title="Third law · The zero-temperature limit">
          <p>
            <strong>Nernst form:</strong> equilibrium entropy differences under
            suitable changes of external parameters tend to zero as temperature
            tends to zero.
          </p>
          <p>
            <strong>Planck form:</strong> a perfect equilibrium crystal with a{" "}
            <strong>unique ground state</strong> has zero entropy at zero
            temperature. Degeneracy and incomplete equilibration require
            separate care.
          </p>
        </NoteBox>
        <P>{String.raw`Our discussion so far leaves an additive constant in entropy undetermined. Entropy differences followed from the second law, but the second law alone did not tell us their low-temperature limit. The third law adds experimental information about that limit.`}</P>
        <P>{String.raw`In its Nernst form, entropy differences between equilibrium states connected by changing suitable external parameters tend to zero as temperature tends to zero. The stronger Planck form assigns zero entropy to a perfect equilibrium crystal with a unique ground state. It is important to state the qualification: not every material prepared in a laboratory is a perfectly equilibrated, nondegenerate crystal.`}</P>
        <P>{String.raw`A microscopic way to see the distinction is to suppose a system has $g_0$ exactly degenerate accessible ground states. Its low-temperature equilibrium entropy can approach $k_B\ln g_0$ rather than zero. Glasses can also retain preparation-dependent residual entropy because they fail to equilibrate on the measurement timescale. These cases require attention to degeneracy, constraints, and equilibration rather than a blanket claim that every entropy must vanish.`}</P>
        <P>{String.raw`For a reversible path at fixed external parameter X with no phase transitions along the path, the heat capacity determines the entropy rise from zero temperature:`}</P>
        <Equation>{String.raw`S(T,X)-S(0,X)=\int_0^T\frac{C_X(T')}{T'}\,dT'.`}</Equation>
        <P>{String.raw`This equation sharply constrains low-temperature models. A positive heat capacity that remained constant all the way down to zero would make the integral diverge logarithmically. A regular model of an equilibrium phase with finite limiting entropy must instead have a sufficiently rapidly vanishing heat capacity. For a power law $C_X=A T^p$ with $p>0$, the integral is explicit:`}</P>
        <Equation>{String.raw`S(T,X)-S(0,X)=\frac{A}{p}T^p.`}</Equation>
        <P>{String.raw`A cubic heat capacity therefore gives an entropy rise $AT^3/3$, whereas a linear heat capacity gives $AT$. These are examples of possible low-temperature behavior, not one universal exponent for every substance. The classical constant heat capacity of a monatomic ideal gas cannot be extended unchanged to arbitrarily low temperature.`}</P>
        <P>{String.raw`To reconstruct entropy across a first-order phase transition, the heat-capacity integral must also include the entropy jump $L/T_*$, where L is the latent heat absorbed at transition temperature $T_*$. Omitting that jump would compare different paths incorrectly.`}</P>
      </section>
      <section id="cooling" className={styles.section}>
        <h2>Cooling toward zero is a limiting process</h2>
        <P>{String.raw`Low-temperature entropy also constrains expansion. From $dG=-S\,dT+V\,dP$ at fixed amount, equality of mixed derivatives gives`}</P>
        <Equation>{String.raw`\left(\frac{\partial V}{\partial T}\right)_{P,N}=-\left(\frac{\partial S}{\partial P}\right)_{T,N}.`}</Equation>
        <P>{String.raw`For a regular equilibrium phase obeying a pressure-independent zero-temperature entropy limit, with a smooth limit permitting the derivative to vanish, the right side tends to zero. Its thermal expansion coefficient therefore tends to zero as well. The smoothness and single-phase assumptions are part of the conclusion; a singular limit must be treated separately.`}</P>
        <P>{String.raw`Another familiar formulation of the third law is the unattainability of absolute zero by a finite sequence of ordinary thermodynamic operations. In cooling schemes based on reversible adiabatic changes, entropy stays constant while an external control changes. As equilibrium entropy curves approach a common zero-temperature limit, the endpoint at exactly zero remains a limiting target rather than an ordinary finite-temperature state reached by one more step. This is not a general numerical cooling-rate law; a real cooling calculation still requires a physical model of the apparatus and its coupling to the sample.`}</P>
        <P>{String.raw`This completes our macroscopic framework. The first law supplied energy accounting, the second selected the direction of change, thermodynamic potentials adapted that rule to reservoirs, and stability constrained the responses. The third law marks where a purely classical description becomes inadequate. The next stage of statistical mechanics asks how these properties arise from microscopic states and their probabilities.`}</P>
      </section>
      <section id="practice" className={styles.section}>
        <h2>Work through the consequences</h2>
        <div className={styles.exercise}>
          <h3>1. Coupled stability</h3>
          <P>{String.raw`In the quadratic form above, take $a=c=1$ and $b=2$. Is the stationary point stable?`}</P>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`No. The determinant is $ac-b^2=-3$. Choosing $x=-y$ gives $2\Delta\Phi=-2y^2<0$ for nonzero $y$, despite both diagonal curvatures being positive.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>2. Integrate a heat capacity</h3>
          <P>{String.raw`A model has $C_X=A T^3$. What is the entropy increase from zero to $T$?`}</P>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`Integrate $C_X/T=A T^2$ to obtain $S(T)-S(0)=AT^3/3$. Its units are entropy because $A$ has units of energy per temperature to the fourth power.`}</P>
          </details>
        </div>
        <div className={styles.exercise}>
          <h3>3. Residual entropy</h3>
          <P>{String.raw`Does the second law alone require $S(0)=0$?`}</P>
          <details>
            <summary>Show solution</summary>
            <P>{String.raw`No. It determines entropy differences and production inequalities, not the additive constant. A zero ground-state entropy additionally requires the appropriate equilibrium and nondegeneracy assumptions.`}</P>
          </details>
        </div>
      </section>
      <div className={styles.lessonSources}>
        <p>
          Original explanations, examples, and illustrations organized around{" "}
          <a href="https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/resources/lecture-4/">
            Mehran Kardar’s MIT 8.333 Lecture Note 4
          </a>
          . We use the simple-fluid pressure–volume convention and state the
          assumptions of each equilibrium criterion.
        </p>
      </div>
    </StatisticalLesson>
  );
}
