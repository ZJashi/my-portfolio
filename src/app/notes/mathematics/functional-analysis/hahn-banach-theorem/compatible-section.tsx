import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function CompatibleSection() {
  return (
    <section id="compatible" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 9</span>
      <h2>Why the extension interval is nonempty</h2>
      <p>
        <MathText>
          {
            "Take arbitrary $u,v\\in Y$. By linearity, domination on $Y$, and subadditivity on $X$,"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\begin{aligned}\\ell(u)+\\ell(v)&=\\ell(u+v)\\\\&\\leq p(u+v)\\\\&=p((u-z)+(v+z))\\\\&\\leq p(u-z)+p(v+z).\\end{aligned}"
        }
      </Equation>
      <p>
        <MathText>{"Rearranging gives"}</MathText>
      </p>
      <Equation>{"\\ell(u)-p(u-z)\\leq p(v+z)-\\ell(v)."}</Equation>
      <p>
        <MathText>
          {
            "This holds for every $u$ and every $v$. Taking the supremum on the left and the infimum on the right yields $A\\leq B$. The endpoints are finite real numbers: evaluating the expressions at zero gives the outer bounds"
          }
        </MathText>
      </p>
      <Equation>{"-p(-z)\\leq A\\leq B\\leq p(z)."}</Equation>
      <p>
        <MathText>
          {
            "More explicitly, the compatibility inequality with $v=0$ bounds every lower expression above by $p(z)$, and with $u=0$ bounds every upper expression below by $-p(-z)$. Thus neither endpoint is an inadmissible infinity."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Choose any $a\\in[A,B]$. The preceding positive, negative and zero cases show $L_a\\leq p$ throughout $Y_z$. This completes the one-dimensional extension step."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Keep track of domains">
        <p>
          <MathText>
            {
              "The proof evaluates $\\ell$ only at points of $Y$, such as $u+v$. It inserts $z$ only inside $p$, which is defined on all of $X$. Writing $\\ell(u-z)$ before extending would be undefined."
            }
          </MathText>
        </p>
      </NoteBox>
    </section>
  );
}
