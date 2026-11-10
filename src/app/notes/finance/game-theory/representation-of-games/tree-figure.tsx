import styles from "@/app/notes/notes.styles";

export function TreeFigure({ hidden = false }: { hidden?: boolean }) {
  const id = hidden ? "hidden" : "observed";
  return (
    <figure className={styles.lessonFigure}>
      <svg
        viewBox="0 0 640 310"
        role="img"
        aria-labelledby={`${id}-title ${id}-desc`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <title id={`${id}-title`}>
          Seller and rival game with {hidden ? "unobserved" : "observed"}{" "}
          pricing
        </title>
        <desc id={`${id}-desc`}>
          The seller chooses H or L. After H the rival chooses Out yielding 80,
          0 or Enter yielding 0, 30. After L, Out yields 40, 0 and Enter yields
          40, minus 10.
          {hidden
            ? " A dashed line joins the rival nodes: the rival cannot distinguish H from L."
            : " The rival observes the price before choosing."}
        </desc>
        <path d="M320 45 165 135M320 45 475 135M165 135 80 245M165 135 250 245M475 135 390 245M475 135 560 245" />
        {hidden && <path d="M175 135H465" strokeDasharray="6 6" />}
        <g fill="var(--bg-main)">
          <circle cx="320" cy="45" r="6" />
          <circle cx="165" cy="135" r="6" />
          <circle cx="475" cy="135" r="6" />
        </g>
        <g
          fill="currentColor"
          stroke="none"
          fontSize="17"
          textAnchor="middle"
          fontFamily="Georgia"
        >
          <text x="320" y="23">
            Seller
          </text>
          <text x="225" y="78">
            H
          </text>
          <text x="415" y="78">
            L
          </text>
          <text x="145" y="120">
            Rival
          </text>
          <text x="495" y="120">
            Rival
          </text>
          <text x="105" y="187">
            Out
          </text>
          <text x="230" y="187">
            Enter
          </text>
          <text x="415" y="187">
            Out
          </text>
          <text x="545" y="187">
            Enter
          </text>
          <text x="80" y="277">
            (80, 0)
          </text>
          <text x="250" y="277">
            (0, 30)
          </text>
          <text x="390" y="277">
            (40, 0)
          </text>
          <text x="560" y="277">
            (40, −10)
          </text>
          {hidden && (
            <text x="320" y="121" fontSize="14">
              same information set
            </text>
          )}
        </g>
      </svg>
      <figcaption>
        {hidden
          ? "Unobserved pricing: the rival must choose without knowing which price was selected. The dashed connection represents uncertainty, not an available action."
          : "Observed pricing: follow one branch from each decision to a terminal outcome. Payoffs are ordered (seller, rival), in pounds of profit under risk neutrality."}
      </figcaption>
    </figure>
  );
}
