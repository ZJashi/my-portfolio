import Link from "next/link";
import styles from "./CourseContents.module.css";

export type CourseEntry = {
  number: string;
  title: string;
  description?: string;
  href?: string;
};
export type CourseGroup = {
  title: string;
  range: string;
  entries: CourseEntry[];
};

export function CourseContents({ groups }: { groups: CourseGroup[] }) {
  return (
    <div className={styles.groups}>
      {groups.map((group) => (
        <details className={styles.group} key={group.range}>
          <summary className={styles.summary}>
            <div>
              <span className={styles.range}>{group.range}</span>
              <h2>{group.title}</h2>
            </div>
            <span className={styles.chevron} aria-hidden="true">
              ⌄
            </span>
          </summary>
          <ol className={styles.lectures}>
            {group.entries.map((entry) => {
              const content = (
                <>
                  <span className={styles.number}>{entry.number}</span>
                  <div>
                    <h3>{entry.title}</h3>
                    {entry.description && <p>{entry.description}</p>}
                  </div>
                </>
              );
              return (
                <li key={entry.number}>
                  {entry.href ? (
                    <Link className={styles.lecture} href={entry.href}>
                      {content}
                    </Link>
                  ) : (
                    <div className={styles.lecture}>{content}</div>
                  )}
                </li>
              );
            })}
          </ol>
        </details>
      ))}
    </div>
  );
}
