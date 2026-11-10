import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>11 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Measures and BV data">
        <ul className={styles.takeaways}>
          <li>
            <strong>Total variation.</strong>{" "}
            <MathText>
              {
                "For the Jordan decomposition $\\nu=\\nu^+-\\nu^-$, $\\|\\nu\\|_{\\mathrm{TV}}=\\nu^+([a,b])+\\nu^-([a,b])$."
              }
            </MathText>
          </li>
          <li>
            <strong>Cumulative convention.</strong>{" "}
            <MathText>
              {
                "$F(t)=\\nu([a,t])$ is right-continuous for $t<b$ and includes $\\nu(\\{a\\})=F(a)$."
              }
            </MathText>
          </li>
          <li>
            <strong>BV norm.</strong>{" "}
            <MathText>
              {
                "Use $|F(a)|+\\operatorname{Var}F$; variation alone misses a left-endpoint atom."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="Representation and proof strategy">
        <ul className={styles.takeaways}>
          <li>
            <strong>Riesz representation.</strong>{" "}
            <MathText>
              {
                "$C([a,b])'$ is isometrically the space of finite signed Borel measures: $\\ell(f)=\\int f\\,d\\nu$ and $\\|\\ell\\|=\\|\\nu\\|_{\\mathrm{TV}}$."
              }
            </MathText>
          </li>
          <li>
            <strong>Construction.</strong>{" "}
            <MathText>
              {
                "Extend to bounded functions, test interval indicators, use signs to bound variation, and approximate continuous functions uniformly by step functions."
              }
            </MathText>
          </li>
          <li>
            <strong>Normalization.</strong>{" "}
            <MathText>
              {
                "Choose right-continuous cumulative data before using countable-additive Stieltjes measures. Continuous integrals determine the measure uniquely."
              }
            </MathText>
          </li>
          <li>
            <strong>Density example.</strong>{" "}
            <MathText>
              {
                "For $\\ell_h(f)=\\int fh$, $\\|\\ell_h\\|=\\|h\\|_1$. Norm equality need not imply a maximizing continuous function exists."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
