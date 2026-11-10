import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function BoundsSection() {
  return (
    <section id="bounds" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 8</span>
      <h2>Upper bounds, maximal elements and greatest elements</h2>
      <NoteBox kind="definition" title="Upper bound">
        <p>
          <MathText>
            {
              "For $A\\subseteq P$, a point $u\\in P$ is an upper bound if every element of $A$ lies below it."
            }
          </MathText>
        </p>
        <Equation>{"a\\preceq u\\qquad(a\\in A)."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "An upper bound need not belong to $A$, and it need not be unique. For coordinatewise order, $(u_1,u_2)$ bounds $A$ above if each coordinate is at least the corresponding coordinate of every point in $A$."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Maximal element">
        <p>
          <MathText>
            {
              "A point $m\\in A$ is maximal in $A$ if no distinct element of $A$ is above it."
            }
          </MathText>
        </p>
        <Equation>
          {"m\\preceq a,\\ a\\in A\\quad\\Longrightarrow\\quad a=m."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Maximality does not say that every point of $A$ lies below $m$. Other points may be incomparable with it. A greatest element, by contrast, is an element of $A$ that is an upper bound for all of $A$. A greatest element is maximal and unique, whereas several incomparable maximal elements can coexist."
          }
        </MathText>
      </p>
      <h3>Example — Many maximal points</h3>
      <p>
        <MathText>
          {
            "Consider $A=\\{(s,t):s\\geq0,\\ t\\geq0,\\ s+t\\leq1\\}$ under coordinatewise order. Every point on the boundary segment $s+t=1$ is maximal. Increasing either coordinate without decreasing the other leaves the triangle. Distinct points on this segment are incomparable, so there is no greatest element."
          }
        </MathText>
      </p>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 500 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          role="img"
          aria-labelledby="maximal-title maximal-desc"
        >
          <title id="maximal-title">A triangle with many maximal points</title>
          <desc id="maximal-desc">
            For coordinatewise order on a filled triangle in the first quadrant,
            every point on the sloping edge is maximal. Two marked points on the
            edge are incomparable.
          </desc>
          <path d="M60 240H440M80 260V25" opacity=".4" />
          <path d="M80 240V50L390 240Z" fill="currentColor" fillOpacity=".06" />
          <path d="M80 50 390 240" strokeWidth="3" />
          <circle cx="173" cy="107" r="5" fill="currentColor" />
          <circle cx="297" cy="183" r="5" fill="currentColor" />
          <path
            d="M173 107V240M297 183V240"
            strokeDasharray="4 5"
            opacity=".4"
          />
          <g
            fill="currentColor"
            stroke="none"
            fontFamily="Georgia"
            fontSize="18"
          >
            <text x="40" y="45">
              t
            </text>
            <text x="438" y="263">
              s
            </text>
            <text x="215" y="65">
              s + t = 1
            </text>
            <text x="110" y="290">
              Sloping edge: maximal points
            </text>
          </g>
        </svg>
        <figcaption>
          Schematic coordinatewise order: maximal points need not dominate one
          another.
        </figcaption>
      </figure>
    </section>
  );
}
