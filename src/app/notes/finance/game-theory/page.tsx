import Link from "next/link";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import { CourseContents } from "@/components/notes/CourseContents";
import styles from "@/app/notes/notes.styles";
import { source, groups } from "./course-data";

export const metadata = {
  title: "Economic Applications of Game Theory | MIT 14.12 | Zura Jashi",
};

export default function GameTheoryCourse() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/finance">Finance</Link>
        <span>/</span>
        <span>Economic Applications of Game Theory</span>
      </nav>
      <SubjectHeader
        title="Economic Applications of Game Theory"
        description="Choices, incentives and strategic interaction, from individual decisions to bargaining, auctions and private information."
        credit={
          <>
            <a href={`${source}pages/syllabus/`}>MIT 14.12 · Ian Ball</a> · Fall
            2025
          </>
        }
      />
      <CourseContents groups={groups} />
    </div>
  );
}
