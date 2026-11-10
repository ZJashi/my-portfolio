import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function LinearMapsSection() {
  return (
    <section id="linear-maps" className={styles.section}>
      <span className={styles.sectionNumber}>04 / LECTURE 2</span>
      <h2>Linear maps and isomorphisms</h2>
      <p>
        <MathText>
          {
            "Let $X$ and $W$ be linear spaces over the same scalar field $\\mathbb K$. A map $T:X\\to W$ is linear when it preserves addition and scalar multiplication."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Linear map">
        <Equation>
          {"T(x+u)=T(x)+T(u),\\qquad T(\\alpha x)=\\alpha T(x)."}
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Both identities must hold for every $x,u\\in X$ and every $\\alpha\\in\\mathbb K$. Equivalently, $T(\\alpha x+u)=\\alpha T(x)+T(u)$. The common scalar field matters: the scalar on the input side must also act on the output space."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Linearity also implies $T(0)=0$, because $T(0)=T(0+0)=T(0)+T(0)$ and cancellation gives the result."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Isomorphism">
        <p>
          <MathText>
            {
              "Two linear spaces are isomorphic if there exists a bijective linear map between them. Such a map is called an isomorphism. It preserves the linear structure while pairing each vector in one space with exactly one vector in the other."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "Here $W$ denotes the target space; no dual-space structure is assumed. Everything so far is algebraic: no norm, topology or continuity assumption is needed."
          }
        </MathText>
      </p>
    </section>
  );
}
