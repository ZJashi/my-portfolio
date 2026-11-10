import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function VariationSection() {
  return (
    <section id="variation" className={styles.section}>
      <span className={styles.sectionNumber}>03 / LECTURE 14A</span>
      <h2>Functions of bounded variation and the endpoint mass</h2>
      <p>
        <MathText>
          {"For a partition $\\pi:a=t_0<t_1<\\cdots<t_n=b$, define"}
        </MathText>
      </p>
      <Equation>
        {
          "V_\\pi(r)=\\sum_{j=0}^{n-1}|r(t_{j+1})-r(t_j)|,\\qquad \\operatorname{Var}_{[a,b]}r=\\sup_\\pi V_\\pi(r)."
        }
      </Equation>
      <NoteBox kind="definition" title="Bounded variation">
        <p>
          <MathText>
            {
              "A real function belongs to $BV([a,b])$ if this supremum is finite. Its variation measures accumulated changes, not its absolute starting value."
            }
          </MathText>
        </p>
      </NoteBox>
      <p>
        <MathText>
          {
            "Variation alone is a seminorm: every constant function has variation zero. For the measure correspondence we must also record the mass at $a$. The appropriate norm is"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|r\\|_{\\mathrm{BV},a}=|r(a)|+\\operatorname{Var}_{[a,b]}r."}
      </Equation>
      <p>
        <MathText>
          {
            "For example, $\\nu=c\\delta_a$ has cumulative function $r(t)=c$ for every $t\\in[a,b]$. Its variation is zero but its measure norm is $|c|$. Omitting $|r(a)|$ would lose this mass and invalidate the norm identity."
          }
        </MathText>
      </p>
    </section>
  );
}
