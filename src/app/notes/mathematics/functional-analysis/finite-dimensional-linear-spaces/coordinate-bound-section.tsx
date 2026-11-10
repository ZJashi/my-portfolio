import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function CoordinateBoundSection() {
  return (
    <section id="coordinate-bound" className={styles.section}>
      <span className={styles.sectionNumber}>04 / LECTURE 5</span>
      <h2>A uniform bound on coordinates</h2>
      <p>
        <MathText>
          {
            "Fix a basis $z_1,\\ldots,z_n$ of the finite dimensional normed space $X$. Although each vector has coordinates, it remains to show that a small vector cannot have arbitrarily large coordinates through cancellation."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Coordinate estimate">
        <p>
          <MathText>
            {
              "There is a finite constant $C>0$, depending on the fixed basis and norm but not on $x$, such that"
            }
          </MathText>
        </p>
        <Equation>
          {"\\sum_{j=1}^{n}|\\alpha_j(x)|\\leq C\\|x\\|\\qquad(x\\in X)."}
        </Equation>
      </NoteBox>
      <h3>Normalize a hypothetical counterexample</h3>
      <p>
        <MathText>
          {
            "Assume no such constant exists. For every integer $p\\geq1$, choose $x_p$ satisfying"
          }
        </MathText>
      </p>
      <Equation>{"s_p:=\\sum_{j=1}^{n}|\\alpha_j(x_p)|>p\\|x_p\\|."}</Equation>
      <p>
        <MathText>
          {
            "The number $s_p$ is positive, so define $y_p=x_p/s_p$. By linearity of the coordinates and homogeneity of the norm,"
          }
        </MathText>
      </p>
      <Equation>
        {"\\sum_{j=1}^{n}|\\alpha_j(y_p)|=1,\\qquad \\|y_p\\|<\\frac1p."}
      </Equation>
      <p>
        <MathText>
          {
            "Thus $y_p\\to0$ in $X$, while its total coordinate magnitude stays equal to one."
          }
        </MathText>
      </p>
      <h3>Extract a common coordinate subsequence</h3>
      <p>
        <MathText>
          {
            "Each scalar sequence $(\\alpha_j(y_p))_p$ is bounded by one. A bounded sequence in $\\mathbb R$ or $\\mathbb C$ has a convergent subsequence. Extract a subsequence for the first coordinate, then a subsequence of it for the second, and continue through the finitely many coordinates. The resulting indices $p_\\ell$ satisfy"
          }
        </MathText>
      </p>
      <Equation>
        {"\\alpha_j(y_{p_\\ell})\\longrightarrow a_j\\qquad(1\\leq j\\leq n)."}
      </Equation>
      <p>
        <MathText>
          {
            "Because the number of coordinates is finite, the normalization passes to the limit: $\\sum_j|a_j|=1$. Define $y=\\sum_j a_jz_j$. The triangle inequality gives convergence in the original norm without invoking any unproved coordinate-continuity claim:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|y_{p_\\ell}-y\\|\\leq\\sum_{j=1}^{n}|\\alpha_j(y_{p_\\ell})-a_j|\\,\\|z_j\\|\\longrightarrow0."
        }
      </Equation>
      <h3>Obtain the contradiction</h3>
      <p>
        <MathText>
          {
            "The same subsequence converges to zero because $\\|y_p\\|<1/p$. Limits in a normed space are unique, so $y=0$. Independence of the basis gives $a_j=0$ for all $j$, contradicting $\\sum_j|a_j|=1$. The coordinate estimate follows."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "This proof uses compactness only for bounded scalar sequences, not compactness of the unit ball in $X$. There is therefore no circular dependence on the next result."
          }
        </MathText>
      </p>
    </section>
  );
}
