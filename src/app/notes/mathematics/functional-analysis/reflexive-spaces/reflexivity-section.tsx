import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function ReflexivitySection() {
  return (
    <section id="reflexivity" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 14</span>
      <h2>Reflexivity and basic examples</h2>
      <NoteBox kind="definition" title="Reflexive space">
        <p>
          <MathText>
            {
              "A normed space is reflexive if the canonical embedding is onto. Every bounded linear functional on $X'$ must therefore be evaluation at a vector of $X$."
            }
          </MathText>
        </p>
        <Equation>
          {
            "J(X)=X''\\quad\\Longleftrightarrow\\quad \\forall F\\in X''\\ \\exists x\\in X:\\ F(\\ell)=\\ell(x)\\ \\forall\\ell\\in X'."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Writing $X=X''$ is shorthand for this canonical identification, rather than an arbitrary isomorphism between the spaces. Reflexivity implies completeness, because $J$ is an onto isometry to the Banach space $X''$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Every finite dimensional normed space is reflexive. If $\\dim X=n$, every linear functional is continuous and $\\dim X'=\\dim X''=n$. The injective map $J:X\\to X''$ is consequently onto."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "A central infinite dimensional example is $L^p(\\Omega,\\mu)$ for $1<p<\\infty$. In the usual measure-theoretic setting where the integral duality theorem applies, for example a sigma-finite measure space, $(L^p)'$ is isometrically $L^q$ with $1/p+1/q=1$, through $\\ell_g(f)=\\int fg\\,d\\mu$ in the real case. Applying the same theorem to $L^q$ recovers $L^p$, and the recovery agrees with $J$. This uses the measure-theory duality theorem, rather than proving it here. The endpoints $p=1$ and $p=\\infty$ are not included."
          }
        </MathText>
      </p>
    </section>
  );
}
