import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>12 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Quotient spaces">
        <ul className={styles.takeaways}>
          <li>
            <strong>Equivalence.</strong>{" "}
            <MathText>
              {
                "$x\\sim u$ precisely when $x-u\\in Y$. Each class is the translate $[x]=x+Y$."
              }
            </MathText>
          </li>
          <li>
            <strong>Operations.</strong>{" "}
            <MathText>
              {
                "$[x]+[u]=[x+u]$ and $\\alpha[x]=[\\alpha x]$ are independent of representatives. The zero class is $Y$."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="definition" title="Linear maps">
        <ul className={styles.takeaways}>
          <li>
            <strong>Structure.</strong>{" "}
            <MathText>
              {
                "A linear map preserves addition and scalar multiplication over a common scalar field. A bijective linear map is an isomorphism."
              }
            </MathText>
          </li>
          <li>
            <strong>Subspaces.</strong>{" "}
            <MathText>
              {
                "Linear images and preimages of subspaces are subspaces. Preimages do not require an inverse map."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="definition" title="Convexity and convex hulls">
        <ul className={styles.takeaways}>
          <li>
            <strong>Coefficients.</strong>{" "}
            <MathText>
              {
                "Convex combinations use nonnegative real coefficients whose sum is one. Every convex set contains all finite convex combinations of its points."
              }
            </MathText>
          </li>
          <li>
            <strong>Set operations.</strong>{" "}
            <MathText>
              {
                "Subspaces are convex. Sums, arbitrary intersections and unions of chains preserve convexity; arbitrary unions need not."
              }
            </MathText>
          </li>
          <li>
            <strong>Maps.</strong>{" "}
            <MathText>
              {"Linear images and preimages preserve convexity."}
            </MathText>
          </li>
          <li>
            <strong>Hull.</strong>{" "}
            <MathText>
              {
                "$\\operatorname{co}(S)$ is the smallest convex set containing $S$, and consists exactly of finite convex combinations of points of $S$."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
