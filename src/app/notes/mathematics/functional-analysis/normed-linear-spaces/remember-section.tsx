import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>13 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="From size to convergence">
        <ul className={styles.takeaways}>
          <li>
            <strong>Norm axioms.</strong>{" "}
            <MathText>
              {
                "Definiteness, absolute homogeneity and the triangle inequality define a norm."
              }
            </MathText>
          </li>
          <li>
            <strong>Reverse triangle inequality.</strong>{" "}
            <MathText>
              {
                "$\\bigl|\\|x\\|-\\|u\\|\\bigr|\\leq\\|x-u\\|$, and $\\|-x\\|=\\|x\\|$."
              }
            </MathText>
          </li>
          <li>
            <strong>Induced metric.</strong>{" "}
            <MathText>
              {
                "$d(x,u)=\\|u-x\\|$ is a distance, and $x_n\\to x$ means $\\|x_n-x\\|\\to0$."
              }
            </MathText>
          </li>
          <li>
            <strong>Equivalent norms.</strong>{" "}
            <MathText>
              {
                "Uniform two-sided comparison gives the same convergent sequences, open sets and closed sets."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="definition" title="Constructing normed spaces">
        <ul className={styles.takeaways}>
          <li>
            <strong>Subspaces and closures.</strong>{" "}
            <MathText>
              {
                "A subspace inherits the ambient norm; the closure of a subspace is also a subspace."
              }
            </MathText>
          </li>
          <li>
            <strong>Products.</strong>{" "}
            <MathText>
              {
                "The sum, maximum and Euclidean combination norms on $X_1\\times X_2$ are equivalent."
              }
            </MathText>
          </li>
          <li>
            <strong>Quotients.</strong>{" "}
            <MathText>
              {
                "For closed $Y$, $\\|[x]\\|_{X/Y}=\\inf_{y\\in Y}\\|x-y\\|$ is a norm. Closedness is used to prove definiteness."
              }
            </MathText>
          </li>
          <li>
            <strong>Infima.</strong>{" "}
            <MathText>
              {
                "Use representatives within $\\varepsilon$ of each infimum; a minimizer need not exist."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="definition" title="When a normed space is Banach">
        <ul className={styles.takeaways}>
          <li>
            <strong>Cauchy.</strong>{" "}
            <MathText>
              {"Late terms become arbitrarily close to each other."}
            </MathText>
          </li>
          <li>
            <strong>Complete.</strong>{" "}
            <MathText>
              {"Every Cauchy sequence has a limit in the space itself."}
            </MathText>
          </li>
          <li>
            <strong>Banach.</strong>{" "}
            <MathText>
              {
                "A normed linear space that is complete in its norm-induced metric."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
