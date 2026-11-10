import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function DoubleIndicesSection() {
  return (
    <section id="double-indices" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 4</span>
      <h2>Completeness and the two sequence indices</h2>
      <p>
        <MathText>
          {
            "To prove completeness, start with a Cauchy sequence $(\\xi_n)$ in $\\widehat X$. Choose one representative $(x_j^{(n)})_{j\\geq1}$ for each class:"
          }
        </MathText>
      </p>
      <Equation>{"\\xi_n=[(x_j^{(n)})_{j\\geq1}]."}</Equation>
      <p>
        <MathText>
          {
            "There are two distinct indices. The outer index $n$ selects a point of $\\widehat X$; the inner index $j$ selects an entry of the representative sequence in $X$. For each fixed $n$, the row $(x_j^{(n)})_j$ is Cauchy in $X$. The sequence of row classes $(\\xi_n)_n$ is Cauchy in $\\widehat X$."
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\|\\xi_n-\\xi_m\\|_{\\widehat X}=\\lim_{j\\to\\infty}\\|x_j^{(n)}-x_j^{(m)}\\|_X."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Our task is to construct a Cauchy sequence $(a_p)$ in $X$ such that its class $\\eta=[(a_p)]$ satisfies $\\xi_n\\to\\eta$. We cannot assume any individual row has a limit in $X$, since that is precisely what may fail in an incomplete space."
          }
        </MathText>
      </p>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 620 290"
          role="img"
          aria-labelledby="diagonal-title diagonal-desc"
        >
          <title id="diagonal-title">
            Selecting a diagonal sequence from Cauchy rows
          </title>
          <desc id="diagonal-desc">
            Each horizontal row is a Cauchy sequence in the original space.
            Select an entry from row n one, a later entry from row n two, and a
            still later entry from row n three. Tail estimates make the selected
            entries a Cauchy sequence.
          </desc>
          <g fill="currentColor" fontFamily="Georgia" fontSize="20">
            <text x="18" y="55">
              row n₁
            </text>
            <text x="18" y="125">
              row n₂
            </text>
            <text x="18" y="195">
              row n₃
            </text>
            <text x="470" y="270">
              j increases →
            </text>
          </g>
          <g stroke="currentColor" strokeWidth="1.5" opacity=".35">
            <path
              d="M125 48H580M125 118H580M125 188H580"
              strokeDasharray="4 6"
            />
          </g>
          <g fill="currentColor">
            <circle cx="150" cy="48" r="3" />
            <circle cx="220" cy="48" r="3" />
            <circle cx="290" cy="48" r="3" />
            <circle cx="360" cy="48" r="3" />
            <circle cx="430" cy="48" r="3" />
            <circle cx="500" cy="48" r="3" />
            <circle cx="570" cy="48" r="3" />
            <circle cx="150" cy="118" r="3" />
            <circle cx="220" cy="118" r="3" />
            <circle cx="290" cy="118" r="3" />
            <circle cx="360" cy="118" r="3" />
            <circle cx="430" cy="118" r="3" />
            <circle cx="500" cy="118" r="3" />
            <circle cx="570" cy="118" r="3" />
            <circle cx="150" cy="188" r="3" />
            <circle cx="220" cy="188" r="3" />
            <circle cx="290" cy="188" r="3" />
            <circle cx="360" cy="188" r="3" />
            <circle cx="430" cy="188" r="3" />
            <circle cx="500" cy="188" r="3" />
            <circle cx="570" cy="188" r="3" />
          </g>
          <g stroke="currentColor" fill="none" strokeWidth="2">
            <path d="M220 48 360 118 500 188" strokeDasharray="5 5" />
            <circle cx="220" cy="48" r="12" />
            <circle cx="360" cy="118" r="12" />
            <circle cx="500" cy="188" r="12" />
          </g>
          <g fill="currentColor" fontFamily="Georgia" fontSize="18">
            <text x="200" y="28">
              a₁
            </text>
            <text x="340" y="98">
              a₂
            </text>
            <text x="480" y="168">
              a₃
            </text>
          </g>
        </svg>
        <figcaption>
          Schematic diagonal selection. The row and column indices are chosen
          using tail estimates; the ordinary diagonal need not work.
        </figcaption>
      </figure>
    </section>
  );
}
