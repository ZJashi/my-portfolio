import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function QuotientTriangleSection() {
  return (
    <section id="quotient-triangle" className={styles.section}>
      <span className={styles.sectionNumber}>11 / LECTURE 3</span>
      <h2>The quotient triangle inequality</h2>
      <p>
        <MathText>
          {
            "We need to prove that the norm of a sum of classes is at most the sum of their quotient norms. Use $u$ for the second vector, keeping $Y$ reserved for the subspace."
          }
        </MathText>
      </p>
      <Equation>
        {"\\|[x]+[u]\\|_{X/Y}\\leq\\|[x]\\|_{X/Y}+\\|[u]\\|_{X/Y}."}
      </Equation>
      <h3>Representatives of the sum class</h3>
      <p>
        <MathText>
          {
            "As subsets of $X$, the sum of the classes is precisely the class of the sum:"
          }
        </MathText>
      </p>
      <Equation>{"[x+u]=\\{z_1+z_2:z_1\\in[x],\\ z_2\\in[u]\\}."}</Equation>
      <p>
        <MathText>
          {
            "One inclusion follows by adding $z_1-x\\in Y$ and $z_2-u\\in Y$. For the reverse inclusion, if $z-(x+u)\\in Y$, take $z_1=x$ and $z_2=z-x$; then $z_2-u\\in Y$. Thus every representative of $[x+u]$ has the required form."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The quotient definition and the triangle inequality in $X$ now give"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\begin{aligned}\\|[x]+[u]\\|_{X/Y}&=\\inf_{\\substack{z_1\\in[x]\\\\z_2\\in[u]}}\\|z_1+z_2\\|\\\\&\\leq\\inf_{\\substack{z_1\\in[x]\\\\z_2\\in[u]}}\\bigl(\\|z_1\\|+\\|z_2\\|\\bigr).\\end{aligned}"
        }
      </Equation>
      <h3>Separating the two infima</h3>
      <p>
        <MathText>
          {
            "Put $A=\\inf_{z_1\\in[x]}\\|z_1\\|$ and $B=\\inf_{z_2\\in[u]}\\|z_2\\|$. Both are finite. For any $\\varepsilon>0$, choose $w_1\\in[x]$ and $w_2\\in[u]$ with"
          }
        </MathText>
      </p>
      <Equation>
        {
          "A\\leq\\|w_1\\|<A+\\varepsilon,\\qquad B\\leq\\|w_2\\|<B+\\varepsilon."
        }
      </Equation>
      <p>
        <MathText>{"Then"}</MathText>
      </p>
      <Equation>
        {
          "\\inf_{\\substack{z_1\\in[x]\\\\z_2\\in[u]}}\\bigl(\\|z_1\\|+\\|z_2\\|\\bigr)\\leq\\|w_1\\|+\\|w_2\\|<A+B+2\\varepsilon."
        }
      </Equation>
      <p>
        <MathText>
          {
            "Because this holds for every positive $\\varepsilon$, the infimum is at most $A+B$. It is also at least $A+B$, since each individual summand is at least its own infimum. Hence"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\inf_{\\substack{z_1\\in[x]\\\\z_2\\in[u]}}\\bigl(\\|z_1\\|+\\|z_2\\|\\bigr)=A+B."
        }
      </Equation>
      <NoteBox kind="result" title="Triangle inequality on the quotient">
        <Equation>
          {"\\|[x]+[u]\\|_{X/Y}\\leq\\|[x]\\|_{X/Y}+\\|[u]\\|_{X/Y}."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "All three norm axioms are now proved. Therefore the quotient by a closed linear subspace is a normed linear space. The approximate-minimizer argument avoids making any claim that either infimum is attained."
          }
        </MathText>
      </p>
    </section>
  );
}
