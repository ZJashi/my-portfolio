import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function StrictSeparationSection() {
  return (
    <section id="strict-separation" className={styles.section}>
      <span className={styles.sectionNumber}>02 / LECTURE 11</span>
      <h2>Separating an algebraically open convex set from a point</h2>
      <NoteBox kind="result" title="Point separation with a strict inequality">
        <p>
          <MathText>
            {
              "Let $K$ be a nonempty convex set with $K=\\operatorname{core}K$, and let $b\\notin K$. There is a nonzero real linear functional $L$ such that"
            }
          </MathText>
        </p>
        <Equation>{"L(k)<L(b)\\qquad(k\\in K)."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Taking $c=L(b)$ gives a hyperplane through $b$ with $K$ contained in the strict half-space $\\{L<c\\}$. The inequality is strict at each point; it does not assert a uniform positive gap between all values on $K$ and the threshold."
          }
        </MathText>
      </p>
      <figure className={styles.lessonFigure}>
        <svg
          viewBox="0 0 560 290"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          role="img"
          aria-labelledby="separation-title separation-desc"
        >
          <title id="separation-title">
            A hyperplane through an exterior point
          </title>
          <desc id="separation-desc">
            A convex region lies on the lower-value side of a vertical
            hyperplane. The exterior point b lies on the hyperplane where L
            equals c.
          </desc>
          <ellipse
            cx="160"
            cy="145"
            rx="105"
            ry="85"
            fill="currentColor"
            fillOpacity=".06"
          />
          <path d="M350 25V265" strokeWidth="2.4" />
          <circle cx="350" cy="145" r="5" fill="currentColor" />
          <path d="M220 145H320m-10-6 10 6-10 6" opacity=".6" />
          <g
            fill="currentColor"
            stroke="none"
            fontFamily="Georgia"
            fontSize="20"
          >
            <text x="151" y="152">
              K
            </text>
            <text x="365" y="145">
              b
            </text>
            <text x="365" y="40">
              L = c
            </text>
            <text x="95" y="270">
              L &lt; c
            </text>
          </g>
        </svg>
        <figcaption>
          Schematic: the separating hyperplane passes through the exterior
          point. The picture does not impose an inner product or a metric gap.
        </figcaption>
      </figure>
    </section>
  );
}
