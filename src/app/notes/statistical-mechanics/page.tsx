import Link from "next/link";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import styles from "../notes.module.css";
export const metadata={title:"Statistical Mechanics | Notes | Zura Jashi"};
export default function SeriesPage(){return <div className={styles.page}><nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><Link href="/notes/physics">Physics</Link><span>/</span><span>Statistical Mechanics</span></nav><SubjectHeader title="Statistical Mechanics" description="From macroscopic laws to microscopic explanations. Explore thermodynamics, particle systems, and statistical fields." credit={<> Mehran Kardar’s MIT courses: <a href="https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/">8.333</a> · <a href="https://ocw.mit.edu/courses/8-334-statistical-mechanics-ii-statistical-physics-of-fields-spring-2014/">8.334</a> </>} />
{/* Courses hidden for now; uncomment to restore.
{[['i','01','Statistical Mechanics I','Statistical Mechanics of Particles'],['ii','02','Statistical Mechanics II','Statistical Physics of Fields']].map(([slug,num,title,subtitle])=><Link key={slug} href={`/notes/statistical-mechanics/statistical-mechanics-${slug}`} className={styles.chapterCard}><span className={styles.chapterNumber}>{num}</span><div><h2>{title}</h2><p>{subtitle}</p></div></Link>)}
*/}
</div>;}
