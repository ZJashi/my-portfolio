import Link from "next/link";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import styles from "../notes.module.css";

export const metadata = { title: "Paper notes | Zura Jashi", description: "Detailed reading notes, derivations, and questions from research papers." };

export default function PapersPage() {
  return <div className={styles.page}>
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><span>Papers</span></nav>
    <SubjectHeader title="Paper notes" description="Reading research closely: the question, the machinery, the argument, and what remains unclear." />
    {/* Paper hidden for now; uncomment to restore.
    <Link href="/notes/papers/local-strong-symmetries" className={styles.chapterCard}>
      <span className={styles.chapterNumber}>01</span>
      <div><h2>Strong symmetry, locally</h2><p>Liu, Yi &amp; Else · Quantum many-body systems. Local charge coherence, infinite-volume states, and constraints from anomalous symmetries.</p></div>
    </Link>
    */}
  </div>;
}
