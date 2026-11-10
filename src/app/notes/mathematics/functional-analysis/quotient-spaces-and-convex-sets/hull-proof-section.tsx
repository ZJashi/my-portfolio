import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function HullProofSection() {
  return (
    <section id="hull-proof" className={styles.section}>
      <span className={styles.sectionNumber}>11 / LECTURE 2</span>
      <h2>The hull consists of finite convex combinations</h2>
      <NoteBox kind="result" title="Explicit description of the convex hull">
        <Equation>
          {
            "\\operatorname{co}(S)=\\left\\{\\sum_{j=1}^{n}\\alpha_jx_j:n\\geq1,\\ x_j\\in S,\\ \\alpha_j\\geq0,\\ \\sum_{j=1}^{n}\\alpha_j=1\\right\\}."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "Call the set on the right $Z$. We prove that $Z$ is convex, contains $S$, and is contained in every convex set containing $S$."
          }
        </MathText>
      </p>
      <h3>Step 1 — Z is convex</h3>
      <p>
        <MathText>
          {
            "Take $z_1,z_2\\in Z$ and write their convex-combination representations as"
          }
        </MathText>
      </p>
      <Equation>
        {"z_1=\\sum_{j=1}^{n}a_jx_j,\\qquad z_2=\\sum_{k=1}^{m}b_ky_k,"}
      </Equation>
      <p>
        <MathText>
          {
            "where all the points lie in $S$, the coefficients are nonnegative, and $\\sum_j a_j=\\sum_k b_k=1$. For $0\\leq t\\leq1$,"
          }
        </MathText>
      </p>
      <Equation>
        {"tz_1+(1-t)z_2=\\sum_{j=1}^{n}(ta_j)x_j+\\sum_{k=1}^{m}((1-t)b_k)y_k."}
      </Equation>
      <p>
        <MathText>
          {"Every new coefficient is nonnegative. Their total is"}
        </MathText>
      </p>
      <Equation>
        {"\\sum_{j=1}^{n}ta_j+\\sum_{k=1}^{m}(1-t)b_k=t+(1-t)=1."}
      </Equation>
      <p>
        <MathText>
          {
            "The result is therefore another finite convex combination of points of $S$, so it belongs to $Z$. This proves that $Z$ is convex."
          }
        </MathText>
      </p>
      <h3>Step 2 — Z contains S</h3>
      <p>
        <MathText>
          {
            "For every $x\\in S$, the one-term combination $x=1x$ belongs to $Z$. Thus $S\\subseteq Z$. Since $Z$ is convex and contains $S$, minimality of the convex hull gives $\\operatorname{co}(S)\\subseteq Z$."
          }
        </MathText>
      </p>
      <h3>Step 3 — Every convex set containing S contains Z</h3>
      <p>
        <MathText>
          {
            "If $C$ is convex and contains $S$, it contains every finite convex combination of points of $S$, by the induction result. Those combinations are exactly the elements of $Z$. Thus $Z\\subseteq C$ for every such $C$, and hence $Z\\subseteq\\operatorname{co}(S)$."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Combining the two inclusions proves equality. The intersection definition supplies the minimality property; the combination formula tells us exactly which points the hull contains."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "For $S=\\varnothing$, there are no combinations with $n\\geq1$, so $Z=\\varnothing$. The empty set is convex and contains $S$, giving $\\operatorname{co}(\\varnothing)=\\varnothing$. This differs from the linear span, where the empty sum supplies the zero vector."
          }
        </MathText>
      </p>
    </section>
  );
}
