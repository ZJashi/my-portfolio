import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function CurvesSection() {
  return (
    <section id="curves" className={styles.section}>
      <span className={styles.sectionNumber}>
        04 / CALIBRATION AND INTERPOLATION
      </span>
      <h2>Building a yield curve</h2>
      <p>
        A curve is a parameterised way to value payments at many dates.
        Calibration chooses parameters so that model prices reproduce selected
        deposit, futures and swap quotes. Interpolation controls values between
        the calibration dates and can change both forward shapes and hedge
        sensitivities.
      </p>
      <h3>Original bootstrap</h3>
      <p>
        <MathText>
          {
            "Suppose the first half year discount factor is 0.98 and a one year swap with half year coupons has par rate 5%. Solve for the second discount factor using the zero PV condition:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "0.05[0.5(0.98)+0.5D_2]=1-D_2\\quad\\Longrightarrow\\quad D_2=\\frac{1-0.025(0.98)}{1.025}\\approx0.9517073."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Log linear discount interpolation gives $\\log D(t)=(1-w)\\log D(t_a)+w\\log D(t_b)$, where $w=(t-t_a)/(t_b-t_a)$. It preserves positive discount factors and makes the instantaneous forward $-d\\log D(t)/dt$ constant between knots. It need not make forwards continuous at knots."
          }
        </MathText>
      </p>
      <p>
        A smooth spline supplies different local forwards and hedge
        distributions. Policy meeting dates may motivate piecewise front end
        segments, while a smoother approach may suit longer maturities. Smooth
        appearance alone does not establish a good calibration.
      </p>
      <p>
        <MathText>
          {
            "With parameters $\\theta$, quote errors $g_i(\\theta)$ can be set to zero or fitted by $\\min_\\theta\\sum_iw_i g_i(\\theta)^2$ with suitable weights and constraints. An equal count of instruments and parameters does not guarantee a solution or uniqueness: independence and identification also matter."
          }
        </MathText>
      </p>
    </section>
  );
}
