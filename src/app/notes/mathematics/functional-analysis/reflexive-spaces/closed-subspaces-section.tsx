import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ClosedSubspacesSection() {
  return (
    <section id="closed-subspaces" className={styles.section}>
      <span className={styles.sectionNumber}>08 / LECTURE 14</span>
      <h2>Closed subspaces of reflexive spaces are reflexive</h2>
      <NoteBox kind="result" title="Inheritance by closed subspaces">
        <p>
          <MathText>
            {
              "Let $X$ be a reflexive real normed space and $Y\\subseteq X$ a closed linear subspace. Then $Y$ is reflexive."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "Fix $F\\in Y''$. We need to find $z\\in Y$ such that $F(m)=m(z)$ for every $m\\in Y'$. Restriction is the bounded linear map $R:X'\\to Y'$ defined by $R\\ell=\\ell|_Y$, with $\\|R\\ell\\|\\leq\\|\\ell\\|$. Define"
          }
        </MathText>
      </p>
      <Equation>{"F_0(\\ell)=F(R\\ell)\\qquad(\\ell\\in X')."}</Equation>
      <p>
        <MathText>
          {
            "It is linear, and $|F_0(\\ell)|\\leq\\|F\\|\\|R\\ell\\|\\leq\\|F\\|\\|\\ell\\|$, so $F_0\\in X''$. Reflexivity of $X$ gives $z\\in X$ such that $F_0(\\ell)=\\ell(z)$ for all $\\ell\\in X'$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The crucial step is to show $z\\in Y$. If not, closedness of $Y$ and Hahn–Banach separation supply $\\ell\\in X'$ with $\\ell|_Y=0$ but $\\ell(z)\\neq0$. Yet $F_0(\\ell)=F(0)=0$, while the representation gives $F_0(\\ell)=\\ell(z)\\neq0$, a contradiction."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Finally, take any $m\\in Y'$. Extend it by Hahn–Banach to $\\widehat m\\in X'$. Since $z\\in Y$,"
          }
        </MathText>
      </p>
      <Equation>
        {"F(m)=F(R\\widehat m)=F_0(\\widehat m)=\\widehat m(z)=m(z)."}
      </Equation>
      <p>
        <MathText>
          {
            "The result does not depend on which extension is chosen: all extensions restrict to $m$, and all agree at $z\\in Y$. Thus every $F\\in Y''$ is evaluation at a vector of $Y$, proving reflexivity. Closedness entered exactly where separation forced the representing vector back into $Y$."
          }
        </MathText>
      </p>
    </section>
  );
}
