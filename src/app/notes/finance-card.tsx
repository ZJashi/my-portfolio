import Link from "next/link";
import { TbChartLine } from "react-icons/tb";
import styles from "./notes.styles";
export function FinanceCard() {
  return (
    <Link href="/notes/finance" className={styles.notebook}>
      <div
        className={`${styles.notebookDrawing} ${styles.refinedDrawing}`}
        aria-hidden="true"
      >
        <span className={styles.drawingNumber}>05 / FINANCE</span>
        <svg
          viewBox="0 0 280 240"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M42 35V195H242" opacity=".3" />
          <path d="M65 180Q100 62 230 48" strokeWidth="2.2" />
          <g fill="currentColor" stroke="none" opacity=".3">
            <circle cx="80" cy="174" r="3" />
            <circle cx="120" cy="150" r="3" />
            <circle cx="155" cy="125" r="3" />
            <circle cx="190" cy="108" r="3" />
            <circle cx="220" cy="92" r="3" />
          </g>
          <path d="M42 82H132V195" strokeDasharray="3 5" opacity=".4" />
          <circle
            cx="132"
            cy="82"
            r="8"
            fill="var(--bg-main)"
            strokeWidth="1.5"
          />
          <circle cx="132" cy="82" r="3" fill="currentColor" stroke="none" />
          <g
            fill="currentColor"
            stroke="none"
            fontFamily="Georgia"
            fontStyle="italic"
            fontSize="14"
          >
            <text x="43" y="25">
              return
            </text>
            <text x="219" y="219">
              risk
            </text>
          </g>
        </svg>
        <span className={styles.drawingCaption}>
          Balancing risk and return.
        </span>
      </div>
      <div className={styles.notebookBody}>
        <h2 className={styles.fieldTitle}>
          <TbChartLine aria-hidden="true" />
          <span>Finance</span>
        </h2>
        <p>
          Risk, return, and the value of time. Exploring markets, portfolios,
          and the mathematics behind financial decisions.
        </p>
      </div>
    </Link>
  );
}
