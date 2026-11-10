import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function CurrentSection() {
  return (
    <section id="current" className={styles.section}>
      <h2>Integrate the balance over a detector region.</h2>
      <NoteBox kind="result" title="Probability balance on a fixed interval">
        <Equation>{String.raw`\frac{d}{dt}\int_a^b\rho(x,t)\,dx=j(a,t)-j(b,t).`}</Equation>
        <p>
          Positive current points along <strong>increasing x</strong>. It enters
          the interval at the left endpoint and leaves at the right endpoint. In
          one dimension, j has units of inverse time.
        </p>
      </NoteBox>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 600 220"
          role="img"
          aria-labelledby="flow-title flow-desc"
        >
          <title id="flow-title">Probability flow through an interval</title>
          <desc id="flow-desc">
            A region from a to b receives a rightward current at a and loses a
            rightward current at b. Probability in the region changes by inflow
            minus outflow.
          </desc>
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="165" y="55" width="270" height="110" rx="10" />
            <path d="M35 110H210M197 101L210 110L197 119M390 110H565M552 101L565 110L552 119" />
            <path d="M165 170V185M435 170V185" />
          </g>
          <g fill="currentColor" textAnchor="middle" fontSize="17">
            <text x="100" y="88">
              j(a)
            </text>
            <text x="500" y="88">
              j(b)
            </text>
            <text x="300" y="100">
              Probability inside
            </text>
            <text x="300" y="130">
              P[a,b]
            </text>
            <text x="165" y="208">
              a
            </text>
            <text x="435" y="208">
              b
            </text>
          </g>
        </svg>
        <figcaption>
          Signed flow through fixed endpoints. If j(a) exceeds j(b), the
          probability inside grows. These arrows show the positive-current
          convention.
        </figcaption>
      </figure>
      <P>{String.raw`For a plane wave $Ae^{i(kx-\omega t)}$, differentiating gives $\partial_x\psi=ik\psi$. Substituting into j yields`}</P>
      <Equation>{String.raw`j=\frac{\hbar k}{m}|A|^2=\frac{p}{m}\rho.`}</Equation>
      <P>{String.raw`This is density times the nonrelativistic particle velocity. The current reverses with k even though the density is unchanged. A plane wave can carry a constant nonzero current with a stationary density: equal currents enter and leave any fixed interval. Its infinite-line normalization remains idealized.`}</P>
      <div className={styles.workedExample}>
        <h3>Worked example · Same density, different flow</h3>
        <P>{String.raw`At a chosen instant write $\psi(x)=R(x)e^{iS(x)/\hbar}$, with R real and differentiable. Here S has units of action, so $S/\hbar$ is dimensionless. Differentiating gives`}</P>
        <Equation>{String.raw`\psi^*\partial_x\psi=R\,\partial_x R+\frac{iR^2}{\hbar}\partial_xS\quad\Rightarrow\quad j=\frac{\rho}{m}\partial_xS.`}</Equation>
        <P>{String.raw`A constant phase gives zero current. For the Gaussian above, $S=p_0x$, so $j(x,0)=\rho(x,0)p_0/m$. Two states can therefore share an initial position density and have different subsequent motion.`}</P>
      </div>
      <p>
        The phase-gradient expression is a useful way to read the current where
        the phase is well defined. It does not require assigning a measured
        trajectory to every particle.
      </p>
    </section>
  );
}
