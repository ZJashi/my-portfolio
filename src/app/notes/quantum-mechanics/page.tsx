import Link from "next/link";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import { QuantumSketch } from "@/components/notes/QuantumSketch";
import styles from "../notes.module.css";
export const metadata = { title: "Quantum Mechanics | Notes | Zura Jashi" };
export default function QuantumPage() { return <div className={styles.page}>
<nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><Link href="/notes/physics">Physics</Link><span>/</span><span>Quantum Mechanics</span></nav>
<SubjectHeader number="03" label="PHYSICS / COURSE SERIES" title="Quantum Mechanics" description="States, amplitudes, and the experiments that make them necessary. A three-course notebook following Barton Zwiebach’s MIT sequence." topics="Quantum Physics I / II / III" caption="Add amplitudes. Then ask for probabilities."><QuantumSketch /></SubjectHeader>
<p className={styles.label}>The course sequence</p>
{[['i','01','Quantum Physics I','MIT 8.04 · Spring 2016','Start with superposition and photon experiments. Build toward wave mechanics.','2 chapters · 20 lessons'],['ii','02','Quantum Physics II','MIT 8.05 · Fall 2013','Continue the sequence with a dedicated second course notebook.','In preparation'],['iii','03','Quantum Physics III','MIT 8.06 · Spring 2018','The third course in the sequence, reserved for further study.','In preparation']].map(([slug,num,title,code,description,status])=><Link key={slug} href={`/notes/quantum-mechanics/quantum-physics-${slug}`} className={styles.chapterCard}><span className={styles.chapterNumber}>{num}</span><div><p className={styles.cardTop}>{code}</p><h2>{title}</h2><p>{description}</p><span className={styles.openNotebook}>{status}</span></div></Link>)}
<p className={styles.reference}>Independent study notes. Course sources: <a href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/">8.04</a>, <a href="https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/">8.05</a>, and <a href="https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/">8.06</a>, taught by Barton Zwiebach on MIT OpenCourseWare.</p>
</div>; }
