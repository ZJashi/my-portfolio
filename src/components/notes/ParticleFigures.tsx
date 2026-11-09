import styles from "@/app/notes/notes.module.css";

export function ParticleFigure({ kind }: { kind: "motion" | "torque" | "work" }) {
  const captions = {
    motion: "Position points from the origin to the particle. Velocity is tangent to the path; the net force sets the direction of acceleration.",
    torque: "Only the component of force perpendicular to the position vector produces torque about O. Angular momentum and torque depend on the chosen origin.",
    work: "Work adds up the component of force along each small displacement. A perpendicular force changes direction without doing work.",
  };
  return <figure className={styles.lessonFigure}>
    <svg viewBox="0 0 580 280" role="img" aria-label={captions[kind]} fill="none" stroke="currentColor" strokeWidth="1.6">
      <defs><marker id={`arrow-${kind}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="m1 1 8 4-8 4" /></marker></defs>
      {kind === "motion" && <>
        <path d="M70 230H510M90 247V35" opacity=".3" />
        <path d="M130 210C200 205 230 130 295 120S405 120 475 62" strokeDasharray="4 6" opacity=".55" />
        <path d="M90 230 295 120" markerEnd="url(#arrow-motion)" />
        <path d="M295 120H395" markerEnd="url(#arrow-motion)" strokeWidth="2" />
        <path d="m295 120 25-65" markerEnd="url(#arrow-motion)" strokeWidth="2" />
        <circle cx="295" cy="120" r="5" fill="currentColor" />
        <g fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="19"><text x="67" y="255">O</text><text x="187" y="166">r</text><text x="365" y="105">v</text><text x="330" y="56">F = ma</text><text x="449" y="103">path</text><text x="513" y="248">x</text><text x="69" y="33">y</text></g>
      </>}
      {kind === "torque" && <>
        <path d="M110 220H475" opacity=".3" />
        <path d="M110 220 320 220" markerEnd="url(#arrow-torque)" />
        <path d="M320 220 410 90" markerEnd="url(#arrow-torque)" strokeWidth="2" />
        <path d="M320 220V90M320 90h90" strokeDasharray="4 5" opacity=".5" />
        <path d="M320 220 320 93" markerEnd="url(#arrow-torque)" />
        <path d="M352 220A32 32 0 0 0 338 194" />
        <circle cx="320" cy="220" r="5" fill="currentColor" />
        <g fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="19"><text x="96" y="247">O</text><text x="205" y="245">r</text><text x="418" y="90">F</text><text x="278" y="140">F⊥</text><text x="361" y="201">α</text><text x="95" y="51">|τ| = rF sin α</text></g>
      </>}
      {kind === "work" && <>
        <path d="M65 218C145 224 195 136 270 160S395 207 510 105" strokeDasharray="4 6" opacity=".4" />
        <path d="M270 160 351 185" markerEnd="url(#arrow-work)" strokeWidth="2" />
        <path d="M270 160 370 95" markerEnd="url(#arrow-work)" strokeWidth="2" />
        <path d="M370 95 343 183" strokeDasharray="4 5" opacity=".4" />
        <path d="M297 142A32 32 0 0 1 301 170" />
        <circle cx="270" cy="160" r="5" fill="currentColor" />
        <g fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="19"><text x="378" y="92">F</text><text x="351" y="209">dr</text><text x="312" y="155">α</text><text x="73" y="69">dW = F · dr</text><text x="73" y="94" fontSize="15">Only the parallel component counts.</text></g>
      </>}
    </svg>
    <figcaption>{captions[kind]}</figcaption>
  </figure>;
}
