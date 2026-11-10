import Link from "next/link";
import { TbAtom } from "react-icons/tb";
import styles from "./notes.styles";
export function PhysicsCard() {
  return (
    <Link href="/notes/physics" className={styles.notebook}>
      <div className={styles.notebookDrawing} aria-hidden="true">
        <span className={styles.drawingNumber}>01 / PHYSICS</span>{" "}
        <svg viewBox="0 0 280 240" fill="none">
          <path
            d="M75 38h130M87 30l-8 8m24-8-8 8m24-8-8 8m24-8-8 8m24-8-8 8m24-8-8 8m24-8-8 8m24-8-8 8"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M140 38v156M140 38l62 139"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            opacity=".45"
          />
          <path d="M140 38l-60 141" stroke="currentColor" strokeWidth="2" />
          <path
            d="M121 83q10 7 19 5M80 179q58 28 122-2"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
          <circle cx="140" cy="38" r="3" fill="currentColor" />
          <circle cx="80" cy="179" r="12" fill="currentColor" />
          <text
            x="121"
            y="110"
            fill="currentColor"
            stroke="none"
            fontFamily="Georgia"
            fontStyle="italic"
            fontSize="18"
          >
            θ
          </text>
          <text
            x="91"
            y="128"
            fill="currentColor"
            stroke="none"
            fontFamily="Georgia"
            fontStyle="italic"
            fontSize="18"
          >
            l
          </text>
          <text
            x="57"
            y="210"
            fill="currentColor"
            stroke="none"
            fontFamily="Georgia"
            fontStyle="italic"
            fontSize="18"
          >
            m
          </text>
        </svg>
        <span className={styles.drawingCaption}>
          The physical world, worked through.
        </span>
      </div>
      <div className={styles.notebookBody}>
        <h2 className={styles.fieldTitle}>
          <TbAtom aria-hidden="true" />
          <span>Physics</span>
        </h2>
        <p>
          Motion, matter, and the laws that connect them. From classical
          mechanics to the quantum world.
        </p>
      </div>
    </Link>
  );
}
