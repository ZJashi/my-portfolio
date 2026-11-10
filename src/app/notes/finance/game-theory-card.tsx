import Link from "next/link";
import styles from "../notes.styles";

export function GameTheoryCard() {
  return (
    <Link href="/notes/finance/game-theory" className={styles.notebook}>
      <div className={styles.notebookDrawing}>
        <svg
          viewBox="0 0 280 240"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          role="img"
          aria-labelledby="game-tree-title game-tree-description"
        >
          <title id="game-tree-title">A tree of strategic choices</title>
          <desc id="game-tree-description">
            One decision branches into two responses, each leading to two
            possible outcomes.
          </desc>
          <path d="M140 48 78 112M140 48 202 112M78 112 44 184M78 112 112 184M202 112 168 184M202 112 236 184" />
          <g fill="var(--bg-main)">
            <circle cx="140" cy="48" r="8" />
            <circle cx="78" cy="112" r="7" />
            <circle cx="202" cy="112" r="7" />
          </g>
          <g fill="currentColor" stroke="none">
            <circle cx="44" cy="184" r="3" />
            <circle cx="112" cy="184" r="3" />
            <circle cx="168" cy="184" r="3" />
            <circle cx="236" cy="184" r="3" />
          </g>
          <g
            fill="currentColor"
            stroke="none"
            fontFamily="Georgia"
            fontSize="14"
            textAnchor="middle"
          >
            <text x="140" y="27">
              choice
            </text>
            <text x="61" y="101">
              A
            </text>
            <text x="219" y="101">
              B
            </text>
            <text x="44" y="211">
              3, 2
            </text>
            <text x="112" y="211">
              1, 4
            </text>
            <text x="168" y="211">
              2, 1
            </text>
            <text x="236" y="211">
              4, 3
            </text>
          </g>
        </svg>
        <span className={styles.drawingCaption}>
          Choices, responses and outcomes.
        </span>
      </div>
      <div className={styles.notebookBody}>
        <h2>Economic Applications of Game Theory</h2>
        <p>
          Individual choice and strategic interaction. Study incentives,
          competition, bargaining, auctions and decisions under uncertainty.
        </p>
      </div>
    </Link>
  );
}
