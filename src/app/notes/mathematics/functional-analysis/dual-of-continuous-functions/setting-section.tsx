import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function SettingSection() {
  return (
    <section id="setting" className={styles.section}>
      <span className={styles.sectionNumber}>01 / LECTURE 14A</span>
      <h2>Continuous functions and signed measures</h2>
      <p>
        <MathText>
          {
            "Let $K$ be a compact metric space and let $C(K)=C(K;\\mathbb R)$ carry the norm $\\|f\\|_\\infty=\\sup_{x\\in K}|f(x)|$. Compactness makes each continuous function bounded. Uniform limits of continuous functions are continuous, so $C(K)$ is Banach. The Borel sigma-algebra $\\mathcal B(K)$ is the smallest sigma-algebra containing the open sets."
          }
        </MathText>
      </p>
      <NoteBox kind="definition" title="Signed Borel measure">
        <p>
          <MathText>
            {
              "A signed measure is countably additive on Borel sets and assigns zero to the empty set. In the extended-valued definition it cannot take both $+\\infty$ and $-\\infty$, since the required sums must be defined. Here the representing measures will be finite."
            }
          </MathText>
        </p>
      </NoteBox>
      <Equation>
        {
          "\\nu\\!\\left(\\bigcup_{j=1}^{\\infty}A_j\\right)=\\sum_{j=1}^{\\infty}\\nu(A_j)\\qquad(A_j\\text{ pairwise disjoint})."
        }
      </Equation>
      <p>
        <MathText>
          {
            "The Hahn–Jordan decomposition writes a finite signed measure uniquely as $\\nu=\\nu^+-\\nu^-$ with mutually singular finite positive measures. The mutual singularity is important: an arbitrary difference of positive measures is not necessarily the Jordan decomposition. Define $|\\nu|=\\nu^++\\nu^-$ and the total variation norm by"
          }
        </MathText>
      </p>
      <Equation>
        {"\\|\\nu\\|_{\\mathrm{TV}}=|\\nu|(K)=\\nu^+(K)+\\nu^-(K)."}
      </Equation>
      <p>
        <MathText>
          {
            "The space $M(K)$ of finite signed Borel measures is Banach in this norm. These measure-theory facts provide the background for the representation theorem."
          }
        </MathText>
      </p>
    </section>
  );
}
