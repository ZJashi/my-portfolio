import Link from "next/link";
import {
  TbAtom,
  TbMathSymbols,
  TbChartLine,
  TbCode,
  TbBrain,
} from "react-icons/tb";
import styles from "./notes.styles";
export function HeaderContent() {
  return (
    <header className={styles.fieldIndexHeader}>
      <p className={styles.fieldIndexKicker}>ZURA JASHI / PERSONAL NOTES</p>
      <h1>Field notes</h1>
      <p className={styles.fieldIndexDescription}>
        An evolving reading notebook: ideas from research papers, worked
        examples, and questions to return to.
      </p>
      <nav aria-label="Subject index" className={styles.fieldIndexNav}>
        {[
          { title: "Physics", slug: "physics", Icon: TbAtom },
          { title: "Mathematics", slug: "mathematics", Icon: TbMathSymbols },
          {
            title: "Computer Science",
            slug: "computer-science",
            Icon: TbCode,
          },
          { title: "AI", slug: "ai", Icon: TbBrain },
          { title: "Finance", slug: "finance", Icon: TbChartLine },
        ].map(({ title, slug, Icon }) => (
          <Link key={slug} href={`/notes/${slug}`}>
            <Icon aria-hidden="true" />
            <span>{title}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
