import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function NonseparableDualSection() {
  return (
    <section id="nonseparable-dual" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 14</span>
      <h2>A separable space can have a nonseparable dual</h2>
      <p>
        <MathText>
          {
            "The space $C([-1,1])$ is separable. One explicit dense family consists of piecewise linear functions on uniform rational grids with rational values at the grid points. Uniform continuity and rational approximation give density, and the collection is countable."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Its dual is not separable. For each $t\\in[-1,1]$, let $\\delta_t(g)=g(t)$. Each evaluation functional has norm one. For $s\\neq t$,"
          }
        </MathText>
      </p>
      <Equation>{"\\|\\delta_s-\\delta_t\\|=2."}</Equation>
      <p>
        <MathText>
          {
            "The upper bound follows from $|g(s)-g(t)|\\leq2\\|g\\|_\\infty$. For the lower bound, choose a continuous function bounded by one with $g(s)=1$ and $g(t)=-1$, for example linear between the two points and constant outside them. This gives an uncountable family whose distinct members are distance two apart."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "The open balls of radius $1/2$ about these functionals are disjoint. A dense set would need a distinct point in each ball, so no countable dense set exists. This also gives a second proof of nonreflexivity: if $C$ were reflexive, $C''$ would be separable because $C$ is; the separability theorem applied to $C'$ would force $C'$ to be separable, a contradiction."
          }
        </MathText>
      </p>
    </section>
  );
}
