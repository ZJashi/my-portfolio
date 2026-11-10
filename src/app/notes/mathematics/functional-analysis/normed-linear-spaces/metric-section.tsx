import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function MetricSection() {
  return (
    <section id="metric" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 3</span>
      <h2>The metric induced by a norm</h2>
      <NoteBox kind="definition" title="Distance induced by the norm">
        <p>
          <MathText>
            {
              "Define the distance between two vectors by the norm of their difference."
            }
          </MathText>
        </p>
        <Equation>{"d(x,u)=\\|u-x\\|."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {"This function satisfies the three metric properties."}
        </MathText>
      </p>
      <h3>Nonnegativity and separation</h3>
      <p>
        <MathText>
          {
            "Nonnegativity follows directly from the norm. Also, $d(x,u)=0$ holds precisely when $\\|u-x\\|=0$, hence precisely when $u-x=0$, or $u=x$."
          }
        </MathText>
      </p>
      <h3>Symmetry</h3>
      <Equation>{"d(x,u)=\\|u-x\\|=\\|x-u\\|=d(u,x)."}</Equation>
      <h3>Triangle inequality</h3>
      <p>
        <MathText>
          {
            "For any intermediate point $u$, split the difference from $x$ to $z$ into two parts:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\begin{aligned}d(x,z)&=\\|z-x\\|\\\\&=\\|(z-u)+(u-x)\\|\\\\&\\leq\\|z-u\\|+\\|u-x\\|\\\\&=d(u,z)+d(x,u).\\end{aligned}"
        }
      </Equation>
      <p>
        <MathText>
          {
            "Thus every normed linear space is also a metric space. The norm and the metric have different inputs: $\\|x\\|$ measures one vector, whereas $d(x,u)$ measures the separation of two vectors."
          }
        </MathText>
      </p>
    </section>
  );
}
