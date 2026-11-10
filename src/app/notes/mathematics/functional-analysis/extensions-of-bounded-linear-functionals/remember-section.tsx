import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>10 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Extension and decomposition">
        <ul className={styles.takeaways}>
          <li>
            <strong>Norm preservation.</strong>{" "}
            <MathText>
              {
                "Every bounded real linear functional on a subspace extends with exactly the same norm."
              }
            </MathText>
          </li>
          <li>
            <strong>Finite interpolation.</strong>{" "}
            <MathText>
              {
                "Arbitrary values on finitely many independent vectors can be realized by a bounded functional."
              }
            </MathText>
          </li>
          <li>
            <strong>Finite dimensional complement.</strong>{" "}
            <MathText>
              {
                "Choose coordinate functionals $L_j$; then $M=\\bigcap_j\\ker L_j$ is closed and $X=Y\\oplus M$."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="The dual measures norms and distances">
        <ul className={styles.takeaways}>
          <li>
            <strong>Vector norm.</strong>{" "}
            <MathText>
              {
                "$\\|x\\|=\\sup_{\\|L\\|\\leq1}|L(x)|$. For $x\\neq0$, a norm-one functional attains it with positive value."
              }
            </MathText>
          </li>
          <li>
            <strong>Subspace distance.</strong>{" "}
            <MathText>
              {
                "$d(x,Y)=\\sup_{L\\in Y^\\perp,\\ \\|L\\|\\leq1}|L(x)|$. Use the ball formulation to include dense subspaces."
              }
            </MathText>
          </li>
          <li>
            <strong>Restriction norm.</strong>{" "}
            <MathText>
              {
                "$\\|L|_Y\\|=\\min_{M\\in Y^\\perp}\\|L-M\\|$, obtained by extending the restriction anew."
              }
            </MathText>
          </li>
          <li>
            <strong>Closed span.</strong>{" "}
            <MathText>
              {
                "$z$ is in the closed span precisely when every continuous functional vanishing on the generators vanishes at $z$."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
