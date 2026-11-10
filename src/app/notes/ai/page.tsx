import { SubjectHeader } from "@/components/notes/SubjectHeader";
import Link from "next/link";
import styles from "../notes.styles";
export const metadata = { title: "AI | Notes | Zura Jashi" };
export default function SubjectPage() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <span>AI</span>
      </nav>
      <SubjectHeader
        title="AI"
        description="Learning from data, representing knowledge, and building intelligent systems. Working through the models and the ideas behind them."
      />
      <section className={`${styles.notebook} ${styles.placeholder}`}>
        <div className={styles.notebookDrawing} aria-hidden="true">
          <span className={styles.drawingNumber}>04 / AI</span>
          <svg
            viewBox="0 0 280 240"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <g opacity=".45">
              <path d="M55 65 140 45 225 95M55 65 140 120 225 95M55 65 140 195 225 95M55 120 140 45 225 155M55 120H140L225 155M55 120 140 195 225 155M55 175 140 45M55 175 140 120M55 175 140 195" />
            </g>
            <g fill="var(--bg-main)">
              <circle cx="55" cy="65" r="10" />
              <circle cx="55" cy="120" r="10" />
              <circle cx="55" cy="175" r="10" />
              <circle cx="140" cy="45" r="12" />
              <circle cx="140" cy="120" r="12" />
              <circle cx="140" cy="195" r="12" />
              <circle cx="225" cy="95" r="10" />
              <circle cx="225" cy="155" r="10" />
            </g>
            <g fill="currentColor" stroke="none">
              <circle cx="140" cy="120" r="4" />
              <circle cx="225" cy="95" r="3" />
            </g>
            <text
              x="81"
              y="230"
              fill="currentColor"
              stroke="none"
              fontFamily="Georgia"
              fontStyle="italic"
              fontSize="16"
            >
              y = σ(Wx + b)
            </text>
          </svg>
          <span className={styles.drawingCaption}>
            Learning, one connection at a time.
          </span>
        </div>
        <div className={styles.notebookBody}>
          <h2>
            A new notebook
            <br />
            starts here.
          </h2>
          <p>
            I’m putting these notes together. Check back for the first topics,
            worked examples, and explanations.
          </p>
        </div>
      </section>
    </div>
  );
}
