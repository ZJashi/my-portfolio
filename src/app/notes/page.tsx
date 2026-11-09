import Link from "next/link";
import styles from "./notes.module.css";

export const metadata = { title: "Notes | Zura Jashi", description: "Working notebooks on physics, mathematics, computer science, AI, and finance." };

export default function NotesPage() {
 return <div className={styles.page}>
  <div className={styles.indexMasthead}><span>ZJ / FIELD NOTES</span></div>
  <header className={styles.notebookHero}>
   <div className={styles.heroCopy}>
    <p className={styles.heroEdition}>PERSONAL NOTEBOOK / VOL. 01</p>
    <h1 className={styles.heroTitle}>Ideas worth<br /><em>working through.</em></h1>
    <p className={styles.heroDescription}>From a physical question to a mathematical model. Notes, worked examples, and the connections I find along the way.</p>
    <nav aria-label="Subject index" className={styles.heroSubjects}>
     {[['01', 'Physics', 'physics'], ['02', 'Mathematics', 'mathematics'], ['03', 'Computer Science', 'computer-science'], ['04', 'AI', 'ai'], ['05', 'Finance', 'finance']].map(([number, title, slug]) => <Link key={slug} href={`/notes/${slug}`}><span>{number}</span>{title}</Link>)}
    </nav>
   </div>
   <div className={styles.heroSketch} aria-hidden="true">
    <span className={styles.sketchLabel}>IN THE MARGINS</span>
    <svg viewBox="0 0 320 320" fill="none">
     <g stroke="currentColor" strokeWidth="1.3">
      <path d="M40 243h239M72 271V47" opacity=".4" />
      <path d="M44 225C87 226 98 207 128 166S190 78 265 72" strokeWidth="2" />
      <path d="m105 240 114-145" strokeDasharray="5 5" opacity=".6" />
      <path d="M155 132v111M72 132h83" strokeDasharray="3 5" opacity=".4" />
      <circle cx="155" cy="132" r="5" fill="var(--bg-main)" />
      <path d="M203 145q41 5 48-24m-8 5 8-5 1 10" />
      <path d="M103 283q65 9 126-1" opacity=".4" />
     </g>
     <g fill="currentColor" fontFamily="Georgia" fontStyle="italic">
      <text x="192" y="168" fontSize="15" transform="rotate(-7 192 168)">find the connection</text>
      <text x="91" y="62" fontSize="22">f(x)</text>
      <text x="267" y="264" fontSize="17">x</text>
      <text x="137" y="269" fontSize="16">x₀</text>
      <text x="111" y="310" fontSize="18">a question → a model</text>
     </g>
    </svg>
    <span className={styles.sketchNote}>Always a work in progress.</span>
   </div>
  </header>
  <p className={styles.label}>Explore by subject</p>
  <Link href="/notes/physics" className={styles.notebook}>
   <div className={styles.notebookDrawing} aria-hidden="true"><span className={styles.drawingNumber}>01 / PHYSICS</span>          <svg viewBox="0 0 280 240" fill="none">
            <path d="M75 38h130M87 30l-8 8m24-8-8 8m24-8-8 8m24-8-8 8m24-8-8 8m24-8-8 8m24-8-8 8m24-8-8 8" stroke="currentColor" strokeWidth="1.2" />
            <path d="M140 38v156M140 38l62 139" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" opacity=".45" />
            <path d="M140 38l-60 141" stroke="currentColor" strokeWidth="2" />
            <path d="M121 83q10 7 19 5M80 179q58 28 122-2" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 4" />
            <circle cx="140" cy="38" r="3" fill="currentColor" />
            <circle cx="80" cy="179" r="12" fill="currentColor" />
            <text x="121" y="110" fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="18">θ</text>
            <text x="91" y="128" fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="18">l</text>
            <text x="57" y="210" fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="18">m</text>
          </svg><span className={styles.drawingCaption}>The physical world, worked through.</span></div>
   <div className={styles.notebookBody}><div className={styles.cardTop}><span>SUBJECT 01</span></div><h2>Physics</h2><p>Motion, matter, and the laws that connect them. From classical mechanics to the quantum world.</p><div className={styles.notebookFoot}><span>4 notebooks · 8 lessons available</span><span className={styles.openNotebook}>Explore subject</span></div></div>
  </Link>
  <Link href="/notes/mathematics" className={styles.notebook}>
   <div className={styles.notebookDrawing} aria-hidden="true"><span className={styles.drawingNumber}>02 / MATHEMATICS</span><svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="M35 173h210M65 202V35" opacity=".5" />
 <path d="M42 75C80 205 102 207 140 120S202 30 240 102" />
 <path d="M105 173V164M140 173v-53M175 173V62M210 173V58" strokeDasharray="3 5" opacity=".4" />
 <path d="M105 164C116 157 126 145 140 120V173H105Z" fill="currentColor" fillOpacity=".09" stroke="none" />
 <g fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="18"><text x="184" y="40">f(x)</text><text x="236" y="195">x</text><text x="42" y="36">y</text></g>
 </svg><span className={styles.drawingCaption}>Patterns worth following.</span></div>
   <div className={styles.notebookBody}><div className={styles.cardTop}><span>SUBJECT 02</span></div><h2>Mathematics</h2><p>The language behind the ideas. Exploring structure, change, and the patterns that make a proof click.</p><div className={styles.notebookFoot}><span>Functional Analysis · Course notebook</span><span className={styles.openNotebook}>Explore subject</span></div></div>
  </Link>
  <Link href="/notes/computer-science" className={styles.notebook}>
   <div className={styles.notebookDrawing} aria-hidden="true"><span className={styles.drawingNumber}>03 / COMPUTER SCIENCE</span><svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="m140 55-60 60m60-60 60 60m-120 0-35 65m35-65 35 65m85-65-35 65m35-65 35 65" />
 <g fill="var(--bg-main)"><circle cx="140" cy="55" r="16" /><circle cx="80" cy="115" r="14" /><circle cx="200" cy="115" r="14" /><circle cx="45" cy="180" r="12" /><circle cx="115" cy="180" r="12" /><circle cx="165" cy="180" r="12" /><circle cx="235" cy="180" r="12" /></g>
 <g fill="currentColor" stroke="none" fontFamily="monospace" fontSize="12" textAnchor="middle"><text x="140" y="59">8</text><text x="80" y="119">3</text><text x="200" y="119">12</text><text x="45" y="184">1</text><text x="115" y="184">6</text><text x="165" y="184">10</text><text x="235" y="184">14</text></g>
 </svg><span className={styles.drawingCaption}>Ideas, expressed as computation.</span></div>
   <div className={styles.notebookBody}><div className={styles.cardTop}><span>SUBJECT 03</span></div><h2>Computer Science</h2><p>Algorithms, data structures, and the systems built from them. Understanding how a good idea becomes a working program.</p><div className={styles.notebookFoot}><span>Notebooks in preparation</span><span className={styles.openNotebook}>Explore subject</span></div></div>
  </Link>
  <Link href="/notes/ai" className={styles.notebook}>
   <div className={styles.notebookDrawing} aria-hidden="true"><span className={styles.drawingNumber}>04 / AI</span><svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.5">
 <g opacity=".45"><path d="M55 65 140 45 225 95M55 65 140 120 225 95M55 65 140 195 225 95M55 120 140 45 225 155M55 120H140L225 155M55 120 140 195 225 155M55 175 140 45M55 175 140 120M55 175 140 195" /></g>
 <g fill="var(--bg-main)"><circle cx="55" cy="65" r="10" /><circle cx="55" cy="120" r="10" /><circle cx="55" cy="175" r="10" /><circle cx="140" cy="45" r="12" /><circle cx="140" cy="120" r="12" /><circle cx="140" cy="195" r="12" /><circle cx="225" cy="95" r="10" /><circle cx="225" cy="155" r="10" /></g>
 <g fill="currentColor" stroke="none"><circle cx="140" cy="120" r="4" /><circle cx="225" cy="95" r="3" /></g>
 <text x="81" y="230" fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="16">y = σ(Wx + b)</text>
 </svg><span className={styles.drawingCaption}>Learning, one connection at a time.</span></div>
   <div className={styles.notebookBody}><div className={styles.cardTop}><span>SUBJECT 04</span></div><h2>AI</h2><p>Learning from data, representing knowledge, and building intelligent systems. Working through the models and the ideas behind them.</p><div className={styles.notebookFoot}><span>Notebooks in preparation</span><span className={styles.openNotebook}>Explore subject</span></div></div>
  </Link>
  <Link href="/notes/finance" className={styles.notebook}>
   <div className={styles.notebookDrawing} aria-hidden="true"><span className={styles.drawingNumber}>05 / FINANCE</span><svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="M42 40v150h200" opacity=".5" />
 <path d="M48 175 73 156 96 164 121 125 146 137 170 95 195 109 234 51V190H48Z" fill="currentColor" fillOpacity=".06" stroke="none" />
 <path d="M48 175 73 156 96 164 121 125 146 137 170 95 195 109 234 51" />
 <path d="M48 175Q145 151 234 72" strokeDasharray="4 5" opacity=".5" />
 <path d="M121 125v65M195 109v81" strokeDasharray="2 5" opacity=".35" />
 <circle cx="121" cy="125" r="3" fill="currentColor" /><circle cx="195" cy="109" r="3" fill="currentColor" />
 <g fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="16"><text x="49" y="30">value</text><text x="228" y="212">t</text><text x="76" y="228">Risk · return · time</text></g>
 </svg><span className={styles.drawingCaption}>Uncertainty, put into perspective.</span></div>
   <div className={styles.notebookBody}><div className={styles.cardTop}><span>SUBJECT 05</span></div><h2>Finance</h2><p>Risk, return, and the value of time. Exploring markets, portfolios, and the mathematics behind financial decisions.</p><div className={styles.notebookFoot}><span>MIT 18.642 · Course notebook</span><span className={styles.openNotebook}>Explore subject</span></div></div>
  </Link>
 </div>;
}
