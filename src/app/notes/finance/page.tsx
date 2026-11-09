import { SubjectHeader } from "@/components/notes/SubjectHeader";
import Link from "next/link";
import styles from "../notes.module.css";
export const metadata = { title: "Finance | Notes | Zura Jashi" };
export default function SubjectPage() {
 return <div className={styles.page}>
 <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><span>Finance</span></nav>
 <SubjectHeader number="05" title="Finance" description="Risk, return, and the value of time. Exploring markets, portfolios, and the mathematics behind financial decisions." topics="Risk / Value / Markets" caption="Making sense of uncertainty.">
<svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="M42 40v150h200" opacity=".5" />
 <path d="M48 175 73 156 96 164 121 125 146 137 170 95 195 109 234 51V190H48Z" fill="currentColor" fillOpacity=".06" stroke="none" />
 <path d="M48 175 73 156 96 164 121 125 146 137 170 95 195 109 234 51" />
 <path d="M48 175Q145 151 234 72" strokeDasharray="4 5" opacity=".5" />
 <path d="M121 125v65M195 109v81" strokeDasharray="2 5" opacity=".35" />
 <circle cx="121" cy="125" r="3" fill="currentColor" /><circle cx="195" cy="109" r="3" fill="currentColor" />
 <g fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="16"><text x="49" y="30">value</text><text x="228" y="212">t</text><text x="76" y="228">Risk · return · time</text></g>
 </svg>
</SubjectHeader>
 <section className={`${styles.notebook} ${styles.placeholder}`}>
 <div className={styles.notebookDrawing} aria-hidden="true"><span className={styles.drawingNumber}>05 / FINANCE</span><svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="M42 40v150h200" opacity=".5" />
 <path d="M48 175 73 156 96 164 121 125 146 137 170 95 195 109 234 51V190H48Z" fill="currentColor" fillOpacity=".06" stroke="none" />
 <path d="M48 175 73 156 96 164 121 125 146 137 170 95 195 109 234 51" />
 <path d="M48 175Q145 151 234 72" strokeDasharray="4 5" opacity=".5" />
 <path d="M121 125v65M195 109v81" strokeDasharray="2 5" opacity=".35" />
 <circle cx="121" cy="125" r="3" fill="currentColor" /><circle cx="195" cy="109" r="3" fill="currentColor" />
 <g fill="currentColor" stroke="none" fontFamily="Georgia" fontStyle="italic" fontSize="16"><text x="49" y="30">value</text><text x="228" y="212">t</text><text x="76" y="228">Risk · return · time</text></g>
 </svg><span className={styles.drawingCaption}>Uncertainty, put into perspective.</span></div>
 <div className={styles.notebookBody}><div className={styles.cardTop}>IN PREPARATION</div><h2>A new notebook<br />starts here.</h2><p>I’m putting these notes together. Check back for the first topics, worked examples, and explanations.</p><div className={styles.notebookFoot}><span className={styles.comingSoon}>Coming soon</span></div></div>
 </section></div>;
}
