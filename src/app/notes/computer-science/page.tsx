import { SubjectHeader } from "@/components/notes/SubjectHeader";
import Link from "next/link";
import styles from "../notes.module.css";
export const metadata = { title: "Computer Science | Notes | Zura Jashi" };
export default function SubjectPage() {
 return <div className={styles.page}>
 <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><span>Computer Science</span></nav>
 <SubjectHeader title="Computer Science" description="Algorithms, data structures, and the systems built from them. Understanding how a good idea becomes a working program." />
 <section className={`${styles.notebook} ${styles.placeholder}`}>
 <div className={styles.notebookDrawing} aria-hidden="true"><span className={styles.drawingNumber}>03 / COMPUTER SCIENCE</span><svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.5">
 <path d="m140 55-60 60m60-60 60 60m-120 0-35 65m35-65 35 65m85-65-35 65m35-65 35 65" />
 <g fill="var(--bg-main)"><circle cx="140" cy="55" r="16" /><circle cx="80" cy="115" r="14" /><circle cx="200" cy="115" r="14" /><circle cx="45" cy="180" r="12" /><circle cx="115" cy="180" r="12" /><circle cx="165" cy="180" r="12" /><circle cx="235" cy="180" r="12" /></g>
 <g fill="currentColor" stroke="none" fontFamily="monospace" fontSize="12" textAnchor="middle"><text x="140" y="59">8</text><text x="80" y="119">3</text><text x="200" y="119">12</text><text x="45" y="184">1</text><text x="115" y="184">6</text><text x="165" y="184">10</text><text x="235" y="184">14</text></g>
 </svg><span className={styles.drawingCaption}>Ideas, expressed as computation.</span></div>
 <div className={styles.notebookBody}><h2>A new notebook<br />starts here.</h2><p>I’m putting these notes together. Check back for the first topics, worked examples, and explanations.</p></div>
 </section></div>;
}
