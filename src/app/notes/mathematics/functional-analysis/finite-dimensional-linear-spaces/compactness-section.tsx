import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function CompactnessSection() {
  return (
    <section id="compactness" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 5</span>
      <h2>The closed unit ball is compact</h2>
      <NoteBox kind="result" title="Finite dimensional compactness">
        <p>
          <MathText>
            {
              "In a finite dimensional normed space, the closed unit ball is compact."
            }
          </MathText>
        </p>
        <Equation>{"B=\\{x\\in X:\\|x\\|\\leq1\\}."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "To prove this, take any sequence $(x_p)$ in $B$. The coordinate estimate gives"
          }
        </MathText>
      </p>
      <Equation>
        {"\\sum_{j=1}^{n}|\\alpha_j(x_p)|\\leq C\\|x_p\\|\\leq C."}
      </Equation>
      <p>
        <MathText>
          {
            "In particular each coordinate sequence is bounded by $C$. Successively extract subsequences to obtain a common subsequence $p_\\ell$ for which every coordinate converges, say $\\alpha_j(x_{p_\\ell})\\to a_j$. Let $y=\\sum_j a_jz_j$. Then"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|x_{p_\\ell}-y\\|\\leq\\sum_{j=1}^{n}|\\alpha_j(x_{p_\\ell})-a_j|\\,\\|z_j\\|\\longrightarrow0."
        }
      </Equation>
      <p>
        <MathText>
          {"The limit remains in the closed unit ball, since"}
        </MathText>
      </p>
      <Equation>
        {
          "\\|y\\|\\leq\\|y-x_{p_\\ell}\\|+\\|x_{p_\\ell}\\|\\leq\\|y-x_{p_\\ell}\\|+1."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Taking the limit yields $\\|y\\|\\leq1$. Thus every sequence in $B$ has a subsequence converging to a point of $B$. In metric spaces, sequential compactness is equivalent to compactness, proving the result."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The word “closed” is essential: the set here uses $\\|x\\|\\leq1$, not $\\|x\\|<1$. A limit of points of an open unit ball can lie on its boundary."
          }
        </MathText>
      </p>
    </section>
  );
}
