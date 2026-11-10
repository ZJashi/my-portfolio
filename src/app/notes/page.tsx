import Link from "next/link";
import { TbMathSymbols, TbBrain } from "react-icons/tb";
import styles from "./notes.styles";
import { HeaderContent } from "./header-content";
import { PhysicsCard } from "./physics-card";
import { ComputerScienceCard } from "./computer-science-card";
import { FinanceCard } from "./finance-card";

export const metadata = {
  title: "Notes | Zura Jashi",
  description:
    "Research reading notes, worked examples, and evolving study notebooks.",
};

export default function NotesPage() {
  return (
    <div className={styles.page}>
      <HeaderContent />
      <Link href="/notes/papers" className={styles.chapterCard}>
        <span className={styles.chapterNumber}>01</span>
        <div>
          <h2>Paper notes</h2>
          <p>
            Detailed readings of research papers, with explanations,
            derivations, and open questions.
          </p>
        </div>
      </Link>

      <PhysicsCard />

      <Link href="/notes/mathematics" className={styles.notebook}>
        <div className={styles.notebookDrawing} aria-hidden="true">
          <span className={styles.drawingNumber}>02 / MATHEMATICS</span>
          <svg
            viewBox="0 0 280 240"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M35 173h210M65 202V35" opacity=".5" />
            <path d="M42 75C80 205 102 207 140 120S202 30 240 102" />
            <path
              d="M105 173V164M140 173v-53M175 173V62M210 173V58"
              strokeDasharray="3 5"
              opacity=".4"
            />
            <path
              d="M105 164C116 157 126 145 140 120V173H105Z"
              fill="currentColor"
              fillOpacity=".09"
              stroke="none"
            />
            <g
              fill="currentColor"
              stroke="none"
              fontFamily="Georgia"
              fontStyle="italic"
              fontSize="18"
            >
              <text x="184" y="40">
                f(x)
              </text>
              <text x="236" y="195">
                x
              </text>
              <text x="42" y="36">
                y
              </text>
            </g>
          </svg>
          <span className={styles.drawingCaption}>
            Patterns worth following.
          </span>
        </div>
        <div className={styles.notebookBody}>
          <h2 className={styles.fieldTitle}>
            <TbMathSymbols aria-hidden="true" />
            <span>Mathematics</span>
          </h2>
          <p>
            The language behind the ideas. Exploring structure, change, and the
            patterns that make a proof click.
          </p>
        </div>
      </Link>

      <ComputerScienceCard />

      <Link href="/notes/ai" className={styles.notebook}>
        <div
          className={`${styles.notebookDrawing} ${styles.refinedDrawing}`}
          aria-hidden="true"
        >
          <span className={styles.drawingNumber}>04 / AI</span>
          <svg
            viewBox="0 0 280 240"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M38 35V205H245" opacity=".3" />
            <path d="M105 200C185 155 100 105 180 38" strokeWidth="2" />
            <g fill="currentColor" stroke="none">
              <circle cx="55" cy="65" r="4" />
              <circle cx="85" cy="85" r="4" />
              <circle cx="70" cy="125" r="4" />
              <circle cx="110" cy="110" r="4" />
              <circle cx="110" cy="55" r="4" />
              <circle cx="90" cy="170" r="4" />
            </g>
            <g fill="var(--bg-main)">
              <circle cx="180" cy="75" r="4.5" />
              <circle cx="205" cy="105" r="4.5" />
              <circle cx="190" cy="145" r="4.5" />
              <circle cx="230" cy="150" r="4.5" />
              <circle cx="205" cy="190" r="4.5" />
              <circle cx="160" cy="185" r="4.5" />
            </g>
            <path d="M99 200h12M174 38h12" opacity=".4" />
          </svg>
          <span className={styles.drawingCaption}>
            Patterns, learned from data.
          </span>
        </div>
        <div className={styles.notebookBody}>
          <h2 className={styles.fieldTitle}>
            <TbBrain aria-hidden="true" />
            <span>AI</span>
          </h2>
          <p>
            Learning from data, representing knowledge, and building intelligent
            systems. Working through the models and the ideas behind them.
          </p>
        </div>
      </Link>

      <FinanceCard />
    </div>
  );
}
