import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>12 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="The construction">
        <ul className={styles.takeaways}>
          <li>
            <strong>Start with sequences.</strong>{" "}
            <MathText>
              {"$Z$ is the linear space of all Cauchy sequences in $X$."}
            </MathText>
          </li>
          <li>
            <strong>Identify zero differences.</strong>{" "}
            <MathText>
              {
                "$Y$ consists of sequences tending to zero; $(x_j)\\sim(u_j)$ when $\\|x_j-u_j\\|_X\\to0$."
              }
            </MathText>
          </li>
          <li>
            <strong>Take the quotient.</strong>{" "}
            <MathText>
              {
                "$\\widehat X=Z/Y$ turns equivalent descriptions of a missing limit into one point."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="definition" title="The norm and completeness proof">
        <ul className={styles.takeaways}>
          <li>
            <strong>Limit norm.</strong>{" "}
            <MathText>
              {
                "$\\|[(x_j)]\\|_{\\widehat X}=\\lim_j\\|x_j\\|_X$. The reverse triangle inequality proves existence and independence of representatives."
              }
            </MathText>
          </li>
          <li>
            <strong>Why quotient.</strong>{" "}
            <MathText>
              {
                "A sequence tending to zero need not be the zero sequence. The quotient makes the limiting seminorm definite."
              }
            </MathText>
          </li>
          <li>
            <strong>Diagonal selection.</strong>{" "}
            <MathText>
              {
                "Choose row bands and column thresholds, then set $a_p=x_{t_p}^{(n_p)}$. Summable bounds make $(a_p)$ Cauchy and give a limit for the original sequence of classes."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="What the completion preserves">
        <ul className={styles.takeaways}>
          <li>
            <strong>Isometry.</strong>{" "}
            <MathText>
              {
                "$\\iota(x)=[(x,x,\\ldots)]$ is linear, injective and norm preserving."
              }
            </MathText>
          </li>
          <li>
            <strong>Density.</strong>{" "}
            <MathText>
              {
                "Every $[(x_j)]$ is the limit of $\\iota(x_n)$, so the embedded copy of $X$ is dense."
              }
            </MathText>
          </li>
          <li>
            <strong>Banach space.</strong>{" "}
            <MathText>
              {"The resulting $\\widehat X$ is complete, even when $X$ is not."}
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
