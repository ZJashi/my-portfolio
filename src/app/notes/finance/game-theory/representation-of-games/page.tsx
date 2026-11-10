import Link from "next/link";
import styles from "@/app/notes/notes.styles";
import { base, source } from "../course-data";
import { TreeSection } from "./tree-section";
import { InformationSection } from "./information-section";
import { StrategiesSection } from "./strategies-section";
import { NormalSection } from "./normal-section";
import { RememberSection } from "./remember-section";

export const metadata = {
  title: "Representation of Games | MIT 14.12 Lecture 2 | Zura Jashi",
  description:
    "Game trees, information sets, complete strategies and payoff tables with a worked seller and rival example.",
};
const sections = [
  ["ingredients", "Ingredients of a game"],
  ["tree", "Game trees"],
  ["information", "Information sets"],
  ["strategies", "Complete strategies"],
  ["normal", "Normal form"],
  ["chance", "Chance and expected payoffs"],
  ["remember", "Main results to remember"],
];

export default function RepresentationLesson() {
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/finance">Finance</Link>
        <span>/</span>
        <Link href={base}>Game theory</Link>
        <span>/</span>
        <span>Lecture 2</span>
      </nav>
      <header className={styles.readingHeader}>
        <p className={styles.subjectKicker}>02 / MIT 14.12</p>
        <h1 className={styles.subjectTitle}>Representation of games</h1>
        <p className={styles.subjectDescription}>
          Turn a strategic situation into a game tree and a payoff table,
          keeping actions, complete plans and information distinct.
        </p>
        <div className={styles.readingMeta}>
          <span>Ian Ball · Fall 2025</span>
          <span>Trees · Information · Strategies</span>
        </div>
        <p className={styles.lessonSourceCredit}>
          Independent study notes for{" "}
          <a href={`${source}resources/mit14_12f25_lec02_1080p_mp4/`}>
            MIT 14.12 Lecture 2
          </a>{" "}
          · Supporting reading:{" "}
          <a href={`${source}mit14_12f12_chapter3_f12.pdf`}>
            Yildiz, Representation of Games, §§3.1–3.3 (2012)
          </a>
          . Original worked examples.
        </p>
      </header>
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          <TreeSection />
          <InformationSection />
          <StrategiesSection />
          <NormalSection />
          <RememberSection />
          <nav className={styles.lessonEnd} aria-label="Lesson navigation">
            <Link href={`${base}/individual-decision-making`}>
              Previous: Individual decision making
            </Link>
            <Link href={base}>Course contents</Link>
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
