import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function NullSequencesSection() {
  return (
    <section id="null-sequences" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 4</span>
      <h2>Null sequences and the quotient</h2>
      <p>
        <MathText>
          {
            "Different Cauchy sequences may describe the same missing limit. They should be identified when their difference tends to zero."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="The subspace of null sequences">
        <Equation>
          {"Y=\\{(x_j)\\in Z:\\|x_j\\|_X\\longrightarrow0\\}."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "The set $Y$ is a linear subspace: if $x_j\\to0$ and $u_j\\to0$, then $\\|\\alpha x_j+u_j\\|\\leq|\\alpha|\\,\\|x_j\\|+\\|u_j\\|\\to0$. Its elements need not be zero term by term; they only need to tend to zero."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Equivalent Cauchy sequences">
        <Equation>
          {
            "(x_j)\\sim(u_j)\\quad\\Longleftrightarrow\\quad(x_j-u_j)\\in Y\\quad\\Longleftrightarrow\\quad\\|x_j-u_j\\|_X\\to0."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "This is the equivalence relation induced by the subspace $Y$. Reflexivity uses the zero sequence, symmetry uses closure under negation, and transitivity follows by adding two differences tending to zero."
          }
        </MathText>
      </p>
      <Equation>{"\\widehat X=Z/Y."}</Equation>
      <p>
        <MathText>
          {
            "Write $[(x_j)]$ for the equivalence class of a Cauchy sequence. The zero class is $Y$, and the operations on the quotient are"
          }
        </MathText>
      </p>
      <Equation>
        {"[(x_j)]+[(u_j)]=[(x_j+u_j)],\\qquad \\alpha[(x_j)]=[(\\alpha x_j)]."}
      </Equation>
      <p>
        <MathText>
          {
            "These operations are well defined by the quotient-space construction. At this stage $Z$ is a linear space; we have not assumed it carries a norm or is complete."
          }
        </MathText>
      </p>
    </section>
  );
}
