import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function ComptonSection() {
  return (
    <section id="compton" className={styles.section}>
      <h2>A photon can transfer momentum as well as energy.</h2>
      <P>{String.raw`Consider a photon scattering from a free electron initially at rest. Let $\theta$ be the angle between the incident and scattered photon directions. Conservation of momentum gives the recoiling electron the vector difference of the two photon momenta. The electron’s energy must be treated relativistically.`}</P>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 560 240"
          role="img"
          aria-labelledby="scatter-title scatter-desc"
        >
          <title id="scatter-title">Compton scattering geometry</title>
          <desc id="scatter-desc">
            An incident photon travels right toward an electron initially at
            rest. The scattered photon travels up and right at angle theta; the
            electron recoils down and right.
          </desc>
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M35 130H240M225 122L240 130L225 138M255 125L460 35M443 34L460 35L449 49M255 135L420 210M403 194L420 210L399 210" />
            <circle cx="250" cy="130" r="6" />
            <path d="M310 130A60 60 0 0 0 305 106" />
          </g>
          <g fill="currentColor" fontSize="16">
            <text x="45" y="110">
              Incident photon · λ
            </text>
            <text x="340" y="27">
              Scattered photon · λ′
            </text>
            <text x="330" y="232">
              Recoil electron
            </text>
            <text x="315" y="119">
              θ
            </text>
          </g>
        </svg>
        <figcaption>
          Schematic laboratory-frame geometry. The electron starts at rest; the
          photon loses energy when it scatters through a nonzero angle.
        </figcaption>
      </figure>
      <Equation>{String.raw`pc+m_ec^2=p'c+E_e,\qquad E_e^2=m_e^2c^4+c^2|\mathbf p-\mathbf p'|^2.`}</Equation>
      <P>{String.raw`Substitute $E_e=m_ec^2+c(p-p')$, square, and cancel the common rest-energy and momentum-square terms. The remaining relation is`}</P>
      <Equation>{String.raw`m_ec(p-p')=pp'(1-\cos\theta).`}</Equation>
      <P>{String.raw`Divide by $pp'$ and use $p=h/\lambda$. This turns the energy and momentum balance into a directly measurable wavelength shift.`}</P>
      <NoteBox
        kind="result"
        title="Compton wavelength shift · Free electron initially at rest"
      >
        <Equation>{String.raw`\lambda'-\lambda=\frac{h}{m_ec}(1-\cos\theta),\qquad \frac{h}{m_ec}\approx2.426\,\mathrm{pm}.`}</Equation>
        <p>
          The shift is zero for forward scattering and largest for
          backscattering. Binding and initial electron motion require
          corrections to this ideal model.
        </p>
      </NoteBox>
      <div className={styles.workedExample}>
        <h3>Worked example · A right-angle scatter</h3>
        <P>{String.raw`For an incident wavelength of $10.0\,\mathrm{pm}$ and $\theta=90^\circ$, the shift is $2.426\,\mathrm{pm}$, giving $\lambda'=12.426\,\mathrm{pm}$. Since energy is inversely proportional to wavelength, the scattered photon retains $10.0/12.426\approx0.805$ of its initial energy. The recoil electron receives the remaining kinetic energy.`}</P>
      </div>
    </section>
  );
}
