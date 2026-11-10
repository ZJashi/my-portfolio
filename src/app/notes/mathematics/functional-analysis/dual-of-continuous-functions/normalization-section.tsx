import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function NormalizationSection() {
  return (
    <section id="normalization" className={styles.section}>
      <span className={styles.sectionNumber}>08 / LECTURE 14A</span>
      <h2>Choose the right-continuous representative</h2>
      <p>
        <MathText>
          {
            "To pass from the preliminary BV data to a countably additive measure, take its right-continuous representative:"
          }
        </MathText>
      </p>
      <Equation>{"F(t)=r(t+)\\quad(a\\leq t<b),\\qquad F(b)=r(b)."}</Equation>
      <p>
        <MathText>
          {
            "BV functions have one-sided limits, so this is defined. The initial right limit absorbs any preliminary variation immediately to the right of $a$ into the endpoint mass; keeping $r(b)$ retains the final endpoint contribution. The BV bound survives normalization:"
          }
        </MathText>
      </p>
      <Equation>
        {"|F(a)|+\\operatorname{Var}F\\leq|r(a)|+\\operatorname{Var}r\\leq C."}
      </Equation>
      <p>
        <MathText>
          {
            "For a direct justification, estimate any partition sum for $F$ by choosing points just to the right of its interior nodes and $a$, keeping $b$ fixed. The triangle inequality bounds the initial value at the first chosen point by $|r(a)|$ plus the variation from $a$ to that point. Let the chosen points decrease to the nodes and take the supremum."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "Normalization leaves the Stieltjes functional on continuous functions unchanged. This can also be checked first for $f\\in C^1([a,b])$: summation by parts in the preceding step sums gives"
          }
        </MathText>
      </p>
      <Equation>{"\\ell(f)=f(b)r(b)-\\int_a^b r(t)f'(t)\\,dt."}</Equation>
      <p>
        <MathText>
          {
            "A BV function and its right-limit version differ only at a countable set, so the ordinary integral is unchanged when $r$ is replaced by $F$. Since $F(b)=r(b)$, the same expression equals $\\int_{[a,b]}f\\,d\\nu_F$ for the Stieltjes measure of $F$. Finally, $C^1$ functions are uniformly dense in $C([a,b])$, and both functionals are bounded, so equality extends to every continuous $f$."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="The representing measure exists">
        <p>
          <MathText>
            {
              "The normalized BV function determines a finite signed Borel measure $\\nu_F$ with"
            }
          </MathText>
        </p>
        <Equation>
          {
            "\\ell(f)=\\int_{[a,b]}f\\,d\\nu_F,\\qquad \\|\\nu_F\\|_{\\mathrm{TV}}\\leq\\|\\ell\\|."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "This normalization makes explicit the right-continuity convention used for half-open intervals. It does not claim the arbitrary extension $\\Lambda$ agrees with the final measure on every bounded function; the required agreement is on continuous functions."
          }
        </MathText>
      </p>
    </section>
  );
}
