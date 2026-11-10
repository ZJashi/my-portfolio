import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function SubspaceImagesSection() {
  return (
    <section id="subspace-images" className={styles.section}>
      <span className={styles.sectionNumber}>05 / LECTURE 2</span>
      <h2>Images and preimages of subspaces</h2>
      <h3>The image of a subspace</h3>
      <p>
        <MathText>
          {"Let $U\\subseteq X$ be a linear subspace. Its image under $T$ is"}
        </MathText>
      </p>
      <Equation>{"T(U)=\\{T(x):x\\in U\\}."}</Equation>
      <p>
        <MathText>
          {
            "To prove that $T(U)$ is a subspace of $W$, take $z_1,z_2\\in T(U)$ and $\\alpha\\in\\mathbb K$. Choose $x_1,x_2\\in U$ with $z_i=T(x_i)$. Since $U$ is a subspace, $\\alpha x_1+x_2\\in U$. Linearity gives"
          }
        </MathText>
      </p>
      <Equation>
        {"\\alpha z_1+z_2=\\alpha T(x_1)+T(x_2)=T(\\alpha x_1+x_2)\\in T(U)."}
      </Equation>
      <p>
        <MathText>
          {
            "The image contains $T(0)=0$, so it is nonempty and satisfies the subspace test."
          }
        </MathText>
      </p>
      <h3>The preimage of a subspace</h3>
      <p>
        <MathText>{"For a subspace $V\\subseteq W$, its preimage is"}</MathText>
      </p>
      <Equation>{"T^{-1}(V)=\\{x\\in X:T(x)\\in V\\}."}</Equation>
      <p>
        <MathText>
          {
            "Take $x_1,x_2\\in T^{-1}(V)$. Their images belong to $V$, so for any scalar $\\alpha$,"
          }
        </MathText>
      </p>
      <Equation>{"T(\\alpha x_1+x_2)=\\alpha T(x_1)+T(x_2)\\in V."}</Equation>
      <p>
        <MathText>
          {
            "Consequently $\\alpha x_1+x_2\\in T^{-1}(V)$. The preimage contains zero because $T(0)=0\\in V$, and is therefore a subspace of $X$."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Preimage does not require an inverse">
        <p>
          <MathText>
            {
              "The notation $T^{-1}(V)$ means the set of all inputs whose images lie in $V$. The map $T$ need not be injective, surjective or invertible."
            }
          </MathText>
        </p>
      </NoteBox>
    </section>
  );
}
