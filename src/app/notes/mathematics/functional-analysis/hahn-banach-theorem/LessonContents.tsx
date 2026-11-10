import styles from "@/app/notes/notes.styles";
export function LessonContents() {
  return (
    <aside className={styles.toc}>
      <nav aria-label="On this page">
        <p className={styles.label}>In this lecture</p>
        <ol>
          <li>
            <a href="#functionals">Real linear functionals</a>
          </li>
          <li>
            <a href="#sublinear">The dominating sublinear function</a>
          </li>
          <li>
            <a href="#statement">The real Hahn–Banach theorem</a>
          </li>
          <li>
            <a href="#one-direction">Extending across one new direction</a>
          </li>
          <li>
            <a href="#upper-bound">
              The restriction from positive coefficients
            </a>
          </li>
          <li>
            <a href="#lower-bound">
              The restriction from negative coefficients
            </a>
          </li>
          <li>
            <a href="#compatible">Why the extension interval is nonempty</a>
          </li>
          <li>
            <a href="#extension-poset">Order all dominated extensions</a>
          </li>
          <li>
            <a href="#chain-domain">An upper bound for a chain of extensions</a>
          </li>
          <li>
            <a href="#maximal">The maximal extension has full domain</a>
          </li>
          <li>
            <a href="#interpretation">What the theorem preserves</a>
          </li>
          <li>
            <a href="#remember">Main results to remember</a>
          </li>
        </ol>
      </nav>
    </aside>
  );
}
