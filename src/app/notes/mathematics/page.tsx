import { SubjectHeader } from "@/components/notes/SubjectHeader";
import Link from "next/link";
import styles from "../notes.module.css";
export const metadata = { title: "Mathematics | Notes | Zura Jashi" };
export default function SubjectPage() {
 return <div className={styles.page}>
 <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><span>Mathematics</span></nav>
 <SubjectHeader title="Mathematics" description="The language behind the ideas. Exploring structure, change, and the patterns that make a proof click." />

 {/* Course hidden for now; uncomment to restore.
<Link href="/notes/mathematics/functional-analysis" className={styles.chapterCard}>
 <span className={styles.chapterNumber}>01</span>
 <div><h2>Functional Analysis</h2><p>Linear spaces, functions and the structure behind analysis. Follow the lecture through definitions, examples and complete proofs.</p></div>
 </Link>
*/}</div>;
}
