import styles from "@/app/notes/notes.styles";
export function StabilityFigure() {
  return (
    <figure className={styles.lessonFigure}>
      <svg
        viewBox="0 0 600 260"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        role="img"
        aria-label="Stable minimum and unstable maximum have zero slope, but opposite curvature. A displacement from a minimum raises potential; a displacement from a maximum lowers it."
      >
        <path d="M35 195h230M335 195h230" opacity=".35" />
        <path d="M55 45q90 260 180 0M355 175q90-260 180 0" strokeWidth="2" />
        <circle cx="145" cy="175" r="5" fill="currentColor" />
        <circle cx="445" cy="45" r="5" fill="currentColor" />
        <path d="M145 175v25M445 45v155" strokeDasharray="3 5" opacity=".35" />
        <g stroke="none" fill="currentColor" fontFamily="Georgia" fontSize="17">
          <text x="145" y="230" textAnchor="middle">
            Stable: positive curvature
          </text>
          <text x="445" y="230" textAnchor="middle">
            Unstable: negative curvature
          </text>
        </g>
      </svg>
      <figcaption>
        Stationarity alone cannot distinguish these points. Stability tests the
        change produced by a small allowed displacement.
      </figcaption>
    </figure>
  );
}
