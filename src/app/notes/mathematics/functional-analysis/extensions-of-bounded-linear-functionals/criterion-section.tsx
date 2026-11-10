import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function CriterionSection() {
  return (
    <section id="criterion" className={styles.section}>
      <span className={styles.sectionNumber}>09 / LECTURE 13</span>
      <h2>Membership in a closed span via functionals</h2>
      <NoteBox kind="result" title="Closed-span criterion">
        <p>
          <MathText>
            {
              "Let $A=\\overline{\\operatorname{span}}\\{x_\\theta:\\theta\\in I\\}$. A vector $z$ lies in $A$ if and only if every continuous linear functional vanishing on all generators also vanishes at $z$."
            }
          </MathText>
        </p>
        <Equation>
          {
            "z\\in A\\quad\\Longleftrightarrow\\quad\\big[L(x_\\theta)=0\\ \\forall\\theta\\ \\Longrightarrow\\ L(z)=0\\big]\\quad\\forall L\\in X'."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "For the forward direction, write $z=\\lim_nz_n$ where $z_n=\\sum_{j=1}^{m_n}\\alpha_{nj}x_{\\theta_{nj}}$. If $L$ vanishes on every generator, linearity gives $L(z_n)=0$ and continuity gives $L(z)=\\lim_nL(z_n)=0$. Both linearity and continuity are needed: one handles finite combinations, the other their limits."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "For the converse, suppose $z\\notin A$. Because $A$ is closed, $d=d(z,A)>0$. On $A_0=A+\\operatorname{span}\\{z\\}$, the unique decomposition $\\alpha z+w$ permits the definition $\\ell(\\alpha z+w)=\\alpha d$. For $\\alpha\\neq0$,"
          }
        </MathText>
      </p>
      <Equation>
        {
          "|\\ell(\\alpha z+w)|=|\\alpha|d\\leq|\\alpha|\\left\\|z+\\frac w\\alpha\\right\\|=\\|\\alpha z+w\\|."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The estimate also holds for $\\alpha=0$. Extend by Hahn–Banach to $L\\in X'$ with $\\|L\\|\\leq1$. This extension vanishes on $A$, hence on every generator, but $L(z)=d>0$. It contradicts the proposed vanishing condition. Therefore that condition forces $z\\in A$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "As a useful consequence, the generators have dense linear span in $X$ exactly when the only continuous linear functional vanishing on all of them is the zero functional. Indeed, a proper closed span would admit the nonzero separating functional just constructed."
          }
        </MathText>
      </p>
    </section>
  );
}
