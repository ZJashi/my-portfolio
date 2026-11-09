import { SubjectHeader } from "@/components/notes/SubjectHeader";
import Link from "next/link";
import styles from "../notes.module.css";
export const metadata = { title: "Mathematics | Notes | Zura Jashi" };
export default function SubjectPage() {
 return <div className={styles.page}>
 <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><span>Mathematics</span></nav>
 <SubjectHeader number="02" title="Mathematics" description="The language behind the ideas. Exploring structure, change, and the patterns that make a proof click." topics="Structure / Change / Proof" caption="A language for the patterns we find.">
<svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="M35 173h210M65 202V35" opacity=".5" />
 <path d="M42 75C80 205 102 207 140 120S202 30 240 102" />
 <path d="M105 173V164M140 173v-53M175 173V62M210 173V58" strokeDasharray="3 5" opacity=".4" />
 <path d="M105 164C116 157 126 145 140 120V173H105Z" fill="currentColor" fillOpacity=".09" stroke="none" />
 <g fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="18"><text x="184" y="40">f(x)</text><text x="236" y="195">x</text><text x="42" y="36">y</text></g>
 </svg>
</SubjectHeader>
 <section className={`${styles.notebook} ${styles.placeholder}`}>
 <div className={styles.notebookDrawing} aria-hidden="true"><span className={styles.drawingNumber}>02 / MATHEMATICS</span><svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="M35 173h210M65 202V35" opacity=".5" />
 <path d="M42 75C80 205 102 207 140 120S202 30 240 102" />
 <path d="M105 173V164M140 173v-53M175 173V62M210 173V58" strokeDasharray="3 5" opacity=".4" />
 <path d="M105 164C116 157 126 145 140 120V173H105Z" fill="currentColor" fillOpacity=".09" stroke="none" />
 <g fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="18"><text x="184" y="40">f(x)</text><text x="236" y="195">x</text><text x="42" y="36">y</text></g>
 </svg><span className={styles.drawingCaption}>Patterns worth following.</span></div>
 <div className={styles.notebookBody}><div className={styles.cardTop}>IN PREPARATION</div><h2>A new notebook<br />starts here.</h2><p>I’m putting these notes together. Check back for the first topics, worked examples, and explanations.</p><div className={styles.notebookFoot}><span className={styles.comingSoon}>Coming soon</span></div></div>
 </section></div>;
}
