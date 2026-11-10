import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ConvexitySection() {
  return (
    <section id="convexity" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 2</span>
      <h2>Convex sets</h2>
      <p>
        <MathText>
          {
            "For convexity, work in a real linear space $X$. A subset $C\\subseteq X$ is convex when the entire line segment joining any two of its points stays inside the set."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Convex set">
        <Equation>
          {
            "x,u\\in C,\\quad 0\\leq t\\leq1\\quad\\Longrightarrow\\quad tx+(1-t)u\\in C."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The parameter $t$ is real. At $t=0$ the expression equals $u$, at $t=1$ it equals $x$, and between these values it traces the segment between them."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "A filled disk, a filled triangle and a filled square are convex. A star-shaped region with indentations need not be convex: two points can lie in the region while part of the connecting segment lies outside it. The filled region matters; the boundary of a triangle or circle alone is not convex."
          }
        </MathText>
      </p>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 600 260"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          role="img"
          aria-labelledby="convex-title convex-desc"
        >
          <title id="convex-title">Convex and nonconvex regions</title>
          <desc id="convex-desc">
            A segment stays inside a filled disk. In a region with an
            indentation, a segment joining two interior points leaves the
            region.
          </desc>
          <circle
            cx="140"
            cy="110"
            r="80"
            fill="currentColor"
            fillOpacity=".06"
          />
          <path d="M85 140 195 80" />
          <circle cx="85" cy="140" r="4" fill="currentColor" />
          <circle cx="195" cy="80" r="4" fill="currentColor" />
          <path
            d="M345 35H540V190H485V90H400V190H345Z"
            fill="currentColor"
            fillOpacity=".06"
          />
          <path d="M370 145H515" strokeDasharray="5 5" />
          <circle cx="370" cy="145" r="4" fill="currentColor" />
          <circle cx="515" cy="145" r="4" fill="currentColor" />
          <g
            fill="currentColor"
            stroke="none"
            fontFamily="Georgia"
            fontSize="18"
          >
            <text x="100" y="235">
              Convex
            </text>
            <text x="392" y="235">
              Not convex
            </text>
          </g>
        </svg>
        <figcaption>
          Schematic: convexity requires every segment between points in the set
          to remain in the set.
        </figcaption>
      </figure>
      <p>
        <MathText>
          {
            "The empty set is convex because there are no pairs of points violating the condition. A singleton is convex as well. Unlike a subspace, a convex set need not contain zero or be closed under arbitrary scalar multiplication."
          }
        </MathText>
      </p>
    </section>
  );
}
