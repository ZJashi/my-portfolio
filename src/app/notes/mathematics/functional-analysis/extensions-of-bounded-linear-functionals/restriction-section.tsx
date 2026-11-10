import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RestrictionSection() {
  return (
    <section id="restriction" className={styles.section}>
      <span className={styles.sectionNumber}>07 / LECTURE 13</span>
      <h2>Restriction norm as a distance in the dual</h2>
      <p>
        <MathText>
          {"For $L\\in X'$, denote the norm of its restriction to $Y$ by"}
        </MathText>
      </p>
      <Equation>
        {
          "\\|L\\|_Y=\\|L|_Y\\|_{Y'}=\\sup_{\\substack{y\\in Y\\\\\\|y\\|\\leq1}}|L(y)|."
        }
      </Equation>
      <p>
        <MathText>
          {
            "This may be much smaller than $\\|L\\|$: it ignores all inputs outside $Y$. As a function of $L$ on $X'$, it is a seminorm, with kernel $Y^\\perp$. For $Y=\\{0\\}$ it is zero."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Distance to the annihilator">
        <p>
          <MathText>
            {
              "The restriction norm equals the distance, in dual norm, from $L$ to $Y^\\perp$. The infimum is attained."
            }
          </MathText>
        </p>
        <Equation>{"\\|L\\|_Y=\\inf_{M\\in Y^\\perp}\\|L-M\\|."}</Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "For $M\\in Y^\\perp$ and $y\\in Y$, we have $|L(y)|=|(L-M)(y)|\\leq\\|L-M\\|\\|y\\|$. Taking the unit-ball supremum gives $\\|L\\|_Y\\leq\\|L-M\\|$, hence the lower bound for the infimum."
          }
        </MathText>
      </p>
      <p>
        <MathText>
          {
            "For the reverse bound, restrict first: $\\ell=L|_Y$. Extend $\\ell$ afresh by Hahn–Banach to $F\\in X'$ with $\\|F\\|=\\|\\ell\\|=\\|L\\|_Y$. Set $M_0=L-F$. Since $F$ and $L$ agree on $Y$, $M_0\\in Y^\\perp$, and"
          }
        </MathText>
      </p>
      <Equation>{"\\|L-M_0\\|=\\|F\\|=\\|L\\|_Y."}</Equation>
      <p>
        <MathText>
          {
            "The key step is to discard the original behavior outside $Y$ and replace it by a norm-preserving extension. The difference then vanishes on $Y$, producing exactly the required minimizer."
          }
        </MathText>
      </p>
    </section>
  );
}
