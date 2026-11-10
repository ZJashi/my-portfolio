import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function KernelSection() {
  return (
    <section id="kernel" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 12</span>
      <h2>Closed kernels and codimension one</h2>
      <p>
        <MathText>
          {
            "Define $N=\\ker L=\\{x\\in X:L(x)=0\\}$. Linearity makes $N$ a linear subspace. If $z_n\\in N$ and $z_n\\to z$, continuity gives $L(z)=\\lim_nL(z_n)=0$. Thus $N$ is closed."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Kernel decomposition">
        <p>
          <MathText>
            {"If $L\\neq0$, choose $e$ with $L(e)\\neq0$. Then"}
          </MathText>
        </p>
        <Equation>
          {
            "X=\\operatorname{span}\\{e\\}\\oplus\\ker L,\\qquad \\dim(X/\\ker L)=1."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>{"Every $y\\in X$ can be decomposed explicitly:"}</MathText>
      </p>
      <Equation>
        {"y=\\frac{L(y)}{L(e)}e+\\left(y-\\frac{L(y)}{L(e)}e\\right)."}
      </Equation>
      <p>
        <MathText>
          {
            "The parenthesized term is in the kernel. If $\\alpha e\\in\\ker L$, then $\\alpha L(e)=0$, so $\\alpha=0$. The intersection is trivial, making the decomposition unique. For $L=0$, the kernel is all of $X$ and has codimension zero."
          }
        </MathText>
      </p>
    </section>
  );
}
