import { Equation, MathText } from "@/components/notes/Equation";
import styles from "@/app/notes/notes.styles";
export function QuotientHomogeneitySection() {
  return (
    <section id="quotient-homogeneity" className={styles.section}>
      <span className={styles.sectionNumber}>10 / LECTURE 3</span>
      <h2>Absolute homogeneity of the quotient norm</h2>
      <p>
        <MathText>
          {
            "We must show $\\|\\alpha[x]\\|_{X/Y}=|\\alpha|\\,\\|[x]\\|_{X/Y}$. First take $\\alpha\\ne0$. Multiplication by $\\alpha$ maps the representatives of $[x]$ bijectively onto those of $[\\alpha x]$:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "z\\in[\\alpha x]\\quad\\Longleftrightarrow\\quad z-\\alpha x\\in Y\\quad\\Longleftrightarrow\\quad z/\\alpha-x\\in Y\\quad\\Longleftrightarrow\\quad z/\\alpha\\in[x]."
        }
      </Equation>
      <p>
        <MathText>
          {
            "This uses closure of $Y$ under multiplication by both $\\alpha$ and $1/\\alpha$. Substitute $z=\\alpha w$ in the infimum and use homogeneity in $X$:"
          }
        </MathText>
      </p>
      <Equation>
        {
          "\\begin{aligned}\\|\\alpha[x]\\|_{X/Y}&=\\|[\\alpha x]\\|_{X/Y}\\\\&=\\inf_{w\\in[x]}\\|\\alpha w\\|\\\\&=|\\alpha|\\inf_{w\\in[x]}\\|w\\|\\\\&=|\\alpha|\\,\\|[x]\\|_{X/Y}.\\end{aligned}"
        }
      </Equation>
      <p>
        <MathText>
          {
            "For $\\alpha=0$, the left side is $\\|[0]\\|_{X/Y}=0$ and the right side is also zero. This case is handled separately because division by $\\alpha$ is unavailable."
          }
        </MathText>
      </p>
    </section>
  );
}
