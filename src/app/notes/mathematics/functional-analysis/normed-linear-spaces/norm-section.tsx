import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function NormSection() {
  return (
    <section id="norm" className={styles.section}>
      <span className={styles.sectionNumber}>01 / LECTURE 3</span>
      <h2>Norms on linear spaces</h2>
      <p>
        <MathText>
          {
            "Let $X$ be a linear space over $\\mathbb K$, where $\\mathbb K$ is $\\mathbb R$ or $\\mathbb C$. A norm assigns a nonnegative real size to each vector. Write its value at $x$ as $\\|x\\|$."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Norm">
        <p>
          <MathText>
            {
              "A function $\\|\\cdot\\|:X\\to[0,\\infty)$ is a norm if it satisfies definiteness, absolute homogeneity and the triangle inequality."
            }
          </MathText>
        </p>
      </NoteBox>
      <ul className={styles.takeaways}>
        <li>
          <strong>Definiteness.</strong>{" "}
          <MathText>
            {
              "$\\|x\\|\\geq0$ for every $x\\in X$, and $\\|x\\|=0$ if and only if $x=0$."
            }
          </MathText>
        </li>
        <li>
          <strong>Absolute homogeneity.</strong>{" "}
          <MathText>
            {
              "$\\|\\alpha x\\|=|\\alpha|\\,\\|x\\|$ for every $\\alpha\\in\\mathbb K$ and $x\\in X$."
            }
          </MathText>
        </li>
        <li>
          <strong>Triangle inequality.</strong>{" "}
          <MathText>
            {"$\\|x+u\\|\\leq\\|x\\|+\\|u\\|$ for every $x,u\\in X$."}
          </MathText>
        </li>
      </ul>
      <p>
        <MathText>
          {
            "The pair $(X,\\|\\cdot\\|)$ is a normed linear space. The vectors may be functions, sequences or other objects; the norm provides a way to measure their size without requiring coordinates. In the complex case, $|\\alpha|$ is the complex modulus."
          }
        </MathText>
      </p>
    </section>
  );
}
