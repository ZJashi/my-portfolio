import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function CorrespondenceSection() {
  return (
    <section id="correspondence" className={styles.section}>
      <span className={styles.sectionNumber}>04 / LECTURE 14A</span>
      <h2>Cumulative functions and Stieltjes measures</h2>
      <p>
        <MathText>
          {
            "Given $\\nu\\in M([a,b])$, set $r(t)=\\nu([a,t])$. Then $r$ is right-continuous on $[a,b)$, its value at $a$ records the atom there, and"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\nu(\\{a\\})=r(a),\\qquad \\nu((s,t])=r(t)-r(s)\\quad(a\\leq s<t\\leq b)."
        }
      </Equation>
      <p>
        <MathText>
          {
            "To see bounded variation, apply $|\\nu(E)|\\leq|\\nu|(E)$ to the disjoint partition cells $\\{a\\},(t_0,t_1],\\ldots,(t_{n-1},t_n]$. This bounds $|r(a)|+V_\\pi(r)$ by $|\\nu|([a,b])$. The full equality, a standard fact for interval measures, is"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|\\nu\\|_{\\mathrm{TV}}=|r(a)|+\\operatorname{Var}_{[a,b]}r."}
      </Equation>
      <p>
        <MathText>
          {
            "Conversely, a right-continuous BV function gives a unique finite signed Borel measure with these interval values. One decomposes it into right-continuous nondecreasing parts, builds their positive Stieltjes measures by extension from half-open intervals, and subtracts. The singleton $\\{a\\}$ is included separately. Right continuity is required for countable additivity, not just for presentation."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Endpoint convention">
        <p>
          <MathText>
            {
              "We use cumulative functions $r(t)=\\nu([a,t])$, right-continuous for $t<b$, with a possible jump at $b$ recording an atom at $b$. The integral notation includes the initial mass:"
            }
          </MathText>
        </p>
        <Equation>
          {"\\int_{[a,b]}f\\,d\\nu=f(a)r(a)+\\int_{(a,b]}f\\,dr."}
        </Equation>
      </NoteBox>
    </section>
  );
}
