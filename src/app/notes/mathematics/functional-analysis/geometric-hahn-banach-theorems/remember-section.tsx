import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>12 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Geometric separation">
        <ul className={styles.takeaways}>
          <li>
            <strong>Hyperplane.</strong>{" "}
            <MathText>
              {"A level set $\\{L=c\\}$ for a nonzero real linear functional."}
            </MathText>
          </li>
          <li>
            <strong>Point separation.</strong>{" "}
            <MathText>
              {
                "An algebraically open convex set is strictly separated from an exterior point. With only a nonempty core, the inequality can be non-strict."
              }
            </MathText>
          </li>
          <li>
            <strong>Two sets.</strong>{" "}
            <MathText>
              {
                "Disjoint nonempty convex sets, one having a core point, admit $L(x)\\leq c\\leq L(y)$. Use the difference set to reduce to separation from zero."
              }
            </MathText>
          </li>
          <li>
            <strong>Topology.</strong>{" "}
            <MathText>
              {
                "These are algebraic statements. Continuity and topological closedness have not been assumed."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="Two extension applications">
        <ul className={styles.takeaways}>
          <li>
            <strong>Bounded extension.</strong>{" "}
            <MathText>
              {
                "Use $p(x)=C\\|x\\|$ to extend a real linear functional while retaining the bound $|L(x)|\\leq C\\|x\\|$. Extensions need not be unique."
              }
            </MathText>
          </li>
          <li>
            <strong>Positive extension.</strong>{" "}
            <MathText>
              {
                "If $Y\\subseteq B(\\Omega)$ contains a uniformly positive function, every positive linear functional on $Y$ extends positively to $B(\\Omega)$."
              }
            </MathText>
          </li>
          <li>
            <strong>Majorant.</strong>{" "}
            <MathText>
              {
                "$p(f)=\\inf\\{\\ell(y):y\\in Y,\\ f\\leq y\\}$ is finite and sublinear, agrees with $\\ell$ on $Y$, and is nonpositive on nonpositive functions."
              }
            </MathText>
          </li>
          <li>
            <strong>Final sign argument.</strong>{" "}
            <MathText>
              {
                "For $f\\geq0$, apply domination to $-f$ to get $-L(f)\\leq p(-f)\\leq0$."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
