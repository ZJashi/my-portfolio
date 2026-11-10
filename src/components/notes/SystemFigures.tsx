import styles from "@/app/notes/notes.styles";
export function SystemFigure({ pair = false }: { pair?: boolean }) {
  const caption = pair
    ? "Equal and opposite forces cancel in the total force. Their torques cancel only if the forces also lie along the line joining the particles."
    : "Each position splits into the center-of-mass position R and a relative position r′. The mass-weighted sum of the relative positions is zero.";
  return (
    <figure className={styles.lessonFigure}>
      <svg
        viewBox="0 0 580 280"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        role="img"
        aria-label={caption}
      >
        <defs>
          <marker
            id={pair ? "sys-pair" : "sys-com"}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="m1 1 8 4-8 4" />
          </marker>
        </defs>
        {pair ? (
          <>
            <path d="M160 155H420" strokeDasharray="4 5" opacity=".4" />
            <circle cx="160" cy="155" r="12" />
            <circle cx="420" cy="155" r="12" />
            <path d="M175 155h78M405 155h-78" markerEnd="url(#sys-pair)" />
            <path
              d="M160 140V65M420 170v75"
              markerEnd="url(#sys-pair)"
              opacity=".5"
            />
            <g
              fill="currentColor"
              stroke="none"
              fontFamily="Georgia"
              fontSize="17"
            >
              <text x="150" y="190">
                i
              </text>
              <text x="415" y="190">
                j
              </text>
              <text x="212" y="138">
                F
              </text>
              <text x="344" y="138">
                −F
              </text>
              <text x="183" y="61">
                Noncentral pair:
              </text>
              <text x="183" y="85">
                net force zero, torque may remain
              </text>
            </g>
          </>
        ) : (
          <>
            <path d="M60 235H505M80 250V35" opacity=".3" />
            <path
              d="M80 235 320 160M320 160 390 65M80 235 390 65"
              markerEnd="url(#sys-com)"
            />
            <circle cx="320" cy="160" r="6" fill="currentColor" />
            <circle cx="390" cy="65" r="9" />
            <g fill="currentColor" stroke="none" opacity=".4">
              {[
                [270, 90],
                [310, 65],
                [430, 125],
                [410, 190],
                [280, 200],
                [360, 210],
                [450, 75],
              ].map(([x, y]) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
              ))}
            </g>
            <g
              fill="currentColor"
              stroke="none"
              fontFamily="Georgia"
              fontSize="19"
            >
              <text x="60" y="258">
                O
              </text>
              <text x="200" y="214">
                R
              </text>
              <text x="225" y="127">
                rᵢ
              </text>
              <text x="363" y="132">
                r′ᵢ
              </text>
              <text x="405" y="61">
                mᵢ
              </text>
              <text x="331" y="182" fontSize="15">
                center of mass
              </text>
            </g>
          </>
        )}
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
