export function QuantumSketch() {
  return (
    <svg
      viewBox="0 0 280 240"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M35 177h210M50 192V45" opacity=".4" />
      <path
        d="M55 176C80 176 91 170 103 146S123 70 145 70 172 126 188 153 217 176 240 176"
        fill="currentColor"
        fillOpacity=".07"
      />
      <path d="M145 70v107" strokeDasharray="3 5" opacity=".4" />
      <path d="M60 133q12-30 24 0t24 0 24 0 24 0 24 0 24 0 24 0" opacity=".4" />
      <g
        fill="currentColor"
        stroke="none"
        fontFamily="Georgia"
        fontStyle="italic"
        fontSize="17"
      >
        <text x="159" y="65">
          |ψ|²
        </text>
        <text x="238" y="200">
          x
        </text>
      </g>
    </svg>
  );
}
