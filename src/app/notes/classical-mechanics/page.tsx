import { SubjectHeader } from "@/components/notes/SubjectHeader";
import Link from "next/link";
import styles from "../notes.module.css";

export const metadata = {
  title: "Classical Mechanics | Notes | Zura Jashi",
  description: "Intuitive, quantitative classical mechanics notes following Goldstein, Poole, and Safko. Start with Newton’s laws, constraints, and generalized coordinates.",
};

export default function ClassicalMechanicsPage() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><Link href="/notes/physics">Physics</Link><span>/</span><span>Classical Mechanics</span></nav>
      <SubjectHeader title="Classical Mechanics" description="From Newton’s laws and conservation principles to constraints and analytical mechanics." credit={<> Based on Goldstein, Poole &amp; Safko’s <a href="https://www.pearson.com/en-us/subject-catalog/p/Goldstein-Classical-Mechanics-3rd-Edition/P200000006871?view=educator">Classical Mechanics, 3rd ed.</a> </>} />

      <Link href="/notes/classical-mechanics/chapter-1" className={styles.chapterCard}>
        <span className={styles.chapterNumber}>01</span>
        <div><h2>Survey of the Elementary Principles</h2><p>Particle mechanics, constraints, and the path to Lagrange’s equations.</p></div>
      </Link>

    </div>
  );
}
