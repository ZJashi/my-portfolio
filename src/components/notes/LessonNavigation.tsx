import Link from "next/link";
import styles from "./LessonNavigation.module.css";

type Destination = { href: string; title: string };
export function LessonNavigation({ previous, next, contents }: { previous?: Destination; next?: Destination; contents: Destination }) {
  return <nav className={styles.navigation} aria-label="Lesson navigation">
    {previous && <Link href={previous.href}><span>← Previous</span><strong>{previous.title}</strong></Link>}
    <Link href={contents.href}><span>Course contents</span><strong>{contents.title}</strong></Link>
    {next && <Link href={next.href}><span>Next →</span><strong>{next.title}</strong></Link>}
  </nav>;
}
