import Link from "next/link";
import styles from "@/app/notes/notes.styles";
import { base, source } from "../course-data";
import { ChoiceSection } from "./choice-section";
import { RiskSection } from "./risk-section";
import { RememberSection } from "./remember-section";

export const metadata = {
  title: "Individual Decision Making | MIT 14.12 Lecture 1 | Zura Jashi",
  description:
    "Preferences, utility, lotteries and risk aversion, with worked examples and a revision summary.",
};
const sections = [
  ["choice", "Individual choice"],
  ["utility", "Utility and rankings"],
  ["uncertainty", "Expected utility"],
  ["risk", "Risk and certainty"],
  ["strategy", "Strategic beliefs"],
  ["remember", "Main results to remember"],
];

export default function DecisionLesson() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/finance">Finance</Link>
        <span>/</span>
        <Link href={base}>Game theory</Link>
        <span>/</span>
        <span>Lecture 1</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>01 / MIT 14.12</p>
        <h1 className={styles.subjectTitle}>
          Introduction to individual decision making
        </h1>
        <p className={styles.subjectDescription}>
          Represent consistent preferences, calculate expected utility and
          interpret a certainty equivalent before analysing strategic
          interaction.
        </p>
        <div className={styles.readingMeta}>
          <span>Ian Ball · Fall 2025</span>
          <span>Preferences · Probability · Utility</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Independent notes on{" "}
          <a href={`${source}resources/mit14_12f25_lec01_1080p_mp4/`}>
            MIT 14.12 Lecture 1
          </a>{" "}
          · Supporting reading:{" "}
          <a href={`${source}mit14_12f12_chapter2_f12.pdf`}>
            Yildiz, Decision Theory, §§2.1–2.4 (2012)
          </a>
          . Original worked examples.
        </p>
      </header>
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          <ChoiceSection />
          <RiskSection />
          <RememberSection />
          <nav className={styles.lessonEnd} aria-label="Lesson navigation">
            <Link href="/notes/finance">Finance notebooks</Link>
            <Link href={base}>Course contents</Link>
            <Link href={`${base}/representation-of-games`}>
              Next: Representation of games
            </Link>
          </nav>
        </article>
        <aside className={styles.toc}>
          <nav aria-label="On this page">
            <p className={styles.label}>In this lecture</p>
            <ol>
              {sections.map(([id, title]) => (
                <li key={id}>
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      </div>
    </div>
  );
}
