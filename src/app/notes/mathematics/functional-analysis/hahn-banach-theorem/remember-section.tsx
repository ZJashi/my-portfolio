import { MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function RememberSection() {
  return (
    <section id="remember" className={styles.section}>
      <span className={styles.sectionNumber}>12 / REVISION</span>
      <h2>Main results to remember</h2>
      <NoteBox kind="definition" title="Hypotheses and conclusion">
        <ul className={styles.takeaways}>
          <li>
            <strong>Data.</strong>{" "}
            <MathText>
              {
                "A real linear $\\ell:Y\\to\\mathbb R$ and a finite sublinear $p:X\\to\\mathbb R$ with $\\ell\\leq p$ on $Y$."
              }
            </MathText>
          </li>
          <li>
            <strong>Extension.</strong>{" "}
            <MathText>
              {
                "A linear $L:X\\to\\mathbb R$ exists with $L|_Y=\\ell$ and $L\\leq p$ everywhere."
              }
            </MathText>
          </li>
          <li>
            <strong>No completeness requirement.</strong>{" "}
            <MathText>
              {
                "This algebraic form does not need a Banach space or a closed subspace."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="result" title="The one-dimensional step">
        <ul className={styles.takeaways}>
          <li>
            <strong>Unique decomposition.</strong>{" "}
            <MathText>
              {
                "If $z\\notin Y$, every point of $Y+\\mathbb Rz$ has a unique form $y+t z$."
              }
            </MathText>
          </li>
          <li>
            <strong>One free value.</strong>{" "}
            <MathText>
              {
                "Set $L_a(y+t z)=\\ell(y)+t a$. Positive $t$ gives an upper bound on $a$; negative $t$ gives a lower bound."
              }
            </MathText>
          </li>
          <li>
            <strong>Compatibility.</strong>{" "}
            <MathText>
              {
                "Subadditivity and $\\ell\\leq p$ show $\\sup_y(\\ell(y)-p(y-z))\\leq\\inf_y(p(y+z)-\\ell(y))$."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
      <NoteBox kind="definition" title="The Zorn argument">
        <ul className={styles.takeaways}>
          <li>
            <strong>Order.</strong>{" "}
            <MathText>
              {
                "Order pairs of domains and dominated functionals by genuine extension, including agreement of values."
              }
            </MathText>
          </li>
          <li>
            <strong>Chains.</strong>{" "}
            <MathText>
              {
                "The union of a chain’s domains is a subspace, and its compatible functionals define a dominated linear functional there."
              }
            </MathText>
          </li>
          <li>
            <strong>Maximality.</strong>{" "}
            <MathText>
              {
                "A proper maximal domain would allow one more extension, a contradiction. Its domain is therefore all of $X$."
              }
            </MathText>
          </li>
        </ul>
      </NoteBox>
    </section>
  );
}
