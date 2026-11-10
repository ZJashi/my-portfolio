import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function CoordinateNormSection() {
  return (
    <section id="coordinate-norm" className={styles.section}>
      <span className={styles.sectionNumber}>06 / LECTURE 5</span>
      <h2>The coordinate norm</h2>
      <p>
        <MathText>
          {
            "Using the fixed basis, define a new norm by adding the absolute values of the coordinates."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Coordinate norm">
        <Equation>{"\\|x\\|_0=\\sum_{j=1}^{n}|\\alpha_j(x)|."}</Equation>
      </NoteBox>
      <h3>Verification of the norm axioms</h3>
      <ul className={styles.takeaways}>
        <li>
          <strong>Definiteness.</strong>{" "}
          <MathText>
            {
              "$\\|x\\|_0\\geq0$. It equals zero precisely when every coordinate is zero, which is equivalent to $x=0$."
            }
          </MathText>
        </li>
        <li>
          <strong>Absolute homogeneity.</strong>{" "}
          <MathText>
            {
              "Coordinate linearity gives $\\alpha_j(a x)=a\\alpha_j(x)$, so $\\|a x\\|_0=|a|\\,\\|x\\|_0$."
            }
          </MathText>
        </li>
        <li>
          <strong>Triangle inequality.</strong>{" "}
          <MathText>
            {
              "Since $\\alpha_j(x+u)=\\alpha_j(x)+\\alpha_j(u)$, summing the scalar triangle inequalities gives $\\|x+u\\|_0\\leq\\|x\\|_0+\\|u\\|_0$."
            }
          </MathText>
        </li>
      </ul>
      <p>
        <MathText>
          {
            "This norm depends on the chosen basis, but its relation to any other norm can be controlled uniformly."
          }
        </MathText>
      </p>
    </section>
  );
}
