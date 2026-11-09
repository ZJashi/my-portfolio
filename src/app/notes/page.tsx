import Link from "next/link";
import { TbAtom, TbMathSymbols, TbCode, TbBrain, TbChartLine } from "react-icons/tb";
import styles from "./notes.module.css";

export const metadata = { title: "Notes | Zura Jashi", description: "Working notebooks on physics, mathematics, computer science, AI, and finance." };

export default function NotesPage() {
 return <div className={styles.page}>
  <header className={styles.fieldIndexHeader}>
   <p className={styles.fieldIndexKicker}>ZURA JASHI / PERSONAL NOTES</p>
   <h1>Field notes</h1>
   <p className={styles.fieldIndexDescription}>Notes, worked examples, and ideas across five fields.</p>
   <nav aria-label="Subject index" className={styles.fieldIndexNav}>
    {[
     { title: "Physics", slug: "physics", Icon: TbAtom },
     { title: "Mathematics", slug: "mathematics", Icon: TbMathSymbols },
     { title: "Computer Science", slug: "computer-science", Icon: TbCode },
     { title: "AI", slug: "ai", Icon: TbBrain },
     { title: "Finance", slug: "finance", Icon: TbChartLine },
    ].map(({ title, slug, Icon }) => <Link key={slug} href={`/notes/${slug}`}><Icon aria-hidden="true" /><span>{title}</span></Link>)}
   </nav>
  </header>
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
   <div className={styles.notebookBody}><h2 className={styles.fieldTitle}><TbAtom aria-hidden="true" /><span>Physics</span></h2><p>Motion, matter, and the laws that connect them. From classical mechanics to the quantum world.</p></div>
  </Link>
  <Link href="/notes/mathematics" className={styles.notebook}>
   <div className={styles.notebookDrawing} aria-hidden="true"><span className={styles.drawingNumber}>02 / MATHEMATICS</span><svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="M35 173h210M65 202V35" opacity=".5" />
 <path d="M42 75C80 205 102 207 140 120S202 30 240 102" />
 <path d="M105 173V164M140 173v-53M175 173V62M210 173V58" strokeDasharray="3 5" opacity=".4" />
 <path d="M105 164C116 157 126 145 140 120V173H105Z" fill="currentColor" fillOpacity=".09" stroke="none" />
 <g fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="18"><text x="184" y="40">f(x)</text><text x="236" y="195">x</text><text x="42" y="36">y</text></g>
 </svg><span className={styles.drawingCaption}>Patterns worth following.</span></div>
   <div className={styles.notebookBody}><h2 className={styles.fieldTitle}><TbMathSymbols aria-hidden="true" /><span>Mathematics</span></h2><p>The language behind the ideas. Exploring structure, change, and the patterns that make a proof click.</p></div>
  </Link>
  <Link href="/notes/computer-science" className={styles.notebook}>
   <div className={styles.notebookDrawing} aria-hidden="true"><span className={styles.drawingNumber}>03 / COMPUTER SCIENCE</span><svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="m140 55-60 60m60-60 60 60m-120 0-35 65m35-65 35 65m85-65-35 65m35-65 35 65" />
 <g fill="var(--bg-main)"><circle cx="140" cy="55" r="16" /><circle cx="80" cy="115" r="14" /><circle cx="200" cy="115" r="14" /><circle cx="45" cy="180" r="12" /><circle cx="115" cy="180" r="12" /><circle cx="165" cy="180" r="12" /><circle cx="235" cy="180" r="12" /></g>
 <g fill="currentColor" stroke="none" fontFamily="monospace" fontSize="12" textAnchor="middle"><text x="140" y="59">8</text><text x="80" y="119">3</text><text x="200" y="119">12</text><text x="45" y="184">1</text><text x="115" y="184">6</text><text x="165" y="184">10</text><text x="235" y="184">14</text></g>
 </svg><span className={styles.drawingCaption}>Ideas, expressed as computation.</span></div>
   <div className={styles.notebookBody}><h2 className={styles.fieldTitle}><TbCode aria-hidden="true" /><span>Computer Science</span></h2><p>Algorithms, data structures, and the systems built from them. Understanding how a good idea becomes a working program.</p></div>
  </Link>
  <Link href="/notes/ai" className={styles.notebook}>
   <div className={`${styles.notebookDrawing} ${styles.refinedDrawing}`} aria-hidden="true">
    <span className={styles.drawingNumber}>04 / AI</span>
    <svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.6">
     <path d="M38 35V205H245" opacity=".3" />
     <path d="M105 200C185 155 100 105 180 38" strokeWidth="2" />
     <g fill="currentColor" stroke="none"><circle cx="55" cy="65" r="4" /><circle cx="85" cy="85" r="4" /><circle cx="70" cy="125" r="4" /><circle cx="110" cy="110" r="4" /><circle cx="110" cy="55" r="4" /><circle cx="90" cy="170" r="4" /></g>
     <g fill="var(--bg-main)"><circle cx="180" cy="75" r="4.5" /><circle cx="205" cy="105" r="4.5" /><circle cx="190" cy="145" r="4.5" /><circle cx="230" cy="150" r="4.5" /><circle cx="205" cy="190" r="4.5" /><circle cx="160" cy="185" r="4.5" /></g>
     <path d="M99 200h12M174 38h12" opacity=".4" />
    </svg>
    <span className={styles.drawingCaption}>Patterns, learned from data.</span>
   </div>
   <div className={styles.notebookBody}><h2 className={styles.fieldTitle}><TbBrain aria-hidden="true" /><span>AI</span></h2><p>Learning from data, representing knowledge, and building intelligent systems. Working through the models and the ideas behind them.</p></div>
  </Link>
  <Link href="/notes/finance" className={styles.notebook}>
   <div className={`${styles.notebookDrawing} ${styles.refinedDrawing}`} aria-hidden="true">
    <span className={styles.drawingNumber}>05 / FINANCE</span>
    <svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.6">
     <path d="M42 35V195H242" opacity=".3" />
     <path d="M65 180Q100 62 230 48" strokeWidth="2.2" />
     <g fill="currentColor" stroke="none" opacity=".3"><circle cx="80" cy="174" r="3" /><circle cx="120" cy="150" r="3" /><circle cx="155" cy="125" r="3" /><circle cx="190" cy="108" r="3" /><circle cx="220" cy="92" r="3" /></g>
     <path d="M42 82H132V195" strokeDasharray="3 5" opacity=".4" />
     <circle cx="132" cy="82" r="8" fill="var(--bg-main)" strokeWidth="1.5" />
     <circle cx="132" cy="82" r="3" fill="currentColor" stroke="none" />
     <g fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="14"><text x="43" y="25">return</text><text x="219" y="219">risk</text></g>
    </svg>
    <span className={styles.drawingCaption}>Balancing risk and return.</span>
   </div>
   <div className={styles.notebookBody}><h2 className={styles.fieldTitle}><TbChartLine aria-hidden="true" /><span>Finance</span></h2><p>Risk, return, and the value of time. Exploring markets, portfolios, and the mathematics behind financial decisions.</p></div>
  </Link>
 </div>;
}
