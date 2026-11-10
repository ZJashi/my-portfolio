import { NoteBox } from "@/components/notes/NoteBox";
import { Equation, MathParagraph as P } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function SpectrumSection() {
  return (
    <section id="spectrum" className={styles.section}>
      <h2>Photon energy is a difference between atomic energies.</h2>
      <NoteBox kind="law" title="Emission energy and the Rydberg formula">
        <Equation>{String.raw`h\nu=E_{n_i}-E_{n_f}=E_C\left(\frac1{n_f^2}-\frac1{n_i^2}\right),\qquad n_i>n_f.`}</Equation>
        <Equation>{String.raw`\frac1{\lambda}=R_{\mu,Z}\left(\frac1{n_f^2}-\frac1{n_i^2}\right),\qquad R_{\mu,Z}=\frac{E_C}{hc}.`}</Equation>
        <p>
          λ is a <strong>vacuum wavelength</strong>. Absorption reverses the
          energy transfer. The reduced mass and nuclear charge must match the
          atom or ion being modeled.
        </p>
      </NoteBox>
      <ul className={styles.takeaways}>
        <li>
          <strong>Lyman series:</strong> emission ending at n = 1, in the
          ultraviolet.
        </li>
        <li>
          <strong>Balmer series:</strong> emission ending at n = 2; its first
          lines are visible and its series limit is ultraviolet.
        </li>
        <li>
          <strong>Paschen series:</strong> emission ending at n = 3, in the
          infrared.
        </li>
      </ul>
      <div className={styles.workedExample}>
        <h3>Worked example · The 3 → 2 energy gap</h3>
        <P>{String.raw`Using $E_C\approx13.6\,\mathrm{eV}$ and $hc\approx1240\,\mathrm{eV\,nm}$ gives`}</P>
        <Equation>{String.raw`\Delta E\approx13.6\left(\frac14-\frac19\right)\mathrm{eV}=1.889\,\mathrm{eV},\qquad\lambda\approx656\,\mathrm{nm}.`}</Equation>
        <p>
          This predicts the gross red Balmer feature. It is not a precision
          wavelength calculation: finite-mass conventions, fine structure,
          radiative shifts, and air versus vacuum wavelengths matter when
          comparing resolved lines. See{" "}
          <a href="https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable2.htm">
            NIST’s measured hydrogen line table
          </a>{" "}
          for line data.
        </p>
      </div>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 600 280"
          role="img"
          aria-labelledby="hydrogen-levels-title hydrogen-levels-desc"
        >
          <title id="hydrogen-levels-title">
            Hydrogen energies approaching the continuum
          </title>
          <desc id="hydrogen-levels-desc">
            The ground level is minus one in Coulomb energy units, the second
            minus one quarter, the third minus one ninth, and the fourth minus
            one sixteenth. Levels cluster near zero; an arrow shows emission
            from n three to n two.
          </desc>
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M130 35H540" strokeDasharray="5 5" />
            <path d="M130 235H540M130 85H540M130 57.2222H540M130 47.5H540M410 59V82M402 70L410 82L418 70" />
          </g>
          <g fill="currentColor" fontSize="15">
            <text x="20" y="240">
              n = 1
            </text>
            <text x="20" y="90">
              n = 2
            </text>
            <text x="20" y="61">
              n = 3
            </text>
            <text x="190" y="27">
              Ionization threshold · E = 0
            </text>
            <text x="210" y="258">
              Energy to scale: E / EC = −1/n²
            </text>
            <text x="430" y="113">
              3 → 2 photon
            </text>
            <path d="M438 98L414 83" fill="none" stroke="currentColor" />
          </g>
        </svg>
        <figcaption>
          The unlabeled line just below the threshold is n = 4. Higher discrete
          energies accumulate at zero. Energies above zero belong to the ionized
          relative-motion continuum.
        </figcaption>
      </figure>
      <P>{String.raw`Taking $n_i\to\infty$ at fixed $n_f$ gives the short-wavelength series limit $\lambda_{\mathrm{lim}}=hc\,n_f^2/E_C$. For Balmer, this is about 365 nm. Adjacent high-n levels crowd together as their spacings shrink; the ionization threshold remains a finite energy above any fixed bound level.`}</P>
    </section>
  );
}
