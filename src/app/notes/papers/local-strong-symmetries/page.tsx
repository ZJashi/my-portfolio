import Link from "next/link";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import { CourseContents } from "@/components/notes/CourseContents";

import { sections } from "./content";
import { ReadingBlock } from "./ReadingBlock";
import styles from "../../notes.styles";
import paper from "./paper.module.css";

export const metadata = {
  title: "Strong symmetry, locally | Paper notes | Zura Jashi",
  description:
    "Detailed notes on Liu, Yi and Else: local strong symmetry, charge coherence, GNS representations, mixed-state LSM constraints, and bath evolution.",
};
const source = "https://arxiv.org/abs/2605.28925v3";
const pdf = "https://arxiv.org/pdf/2605.28925v3";

export default function PaperPage() {
  const groups = [
    {
      title: "The physical idea",
      range: "01–04 · Foundations",
      from: 0,
      to: 4,
    },
    {
      title: "The equivalent definitions",
      range: "05–09 · Symmetry and local diagnostics",
      from: 4,
      to: 9,
    },
    {
      title: "Information, anomalies, and dynamics",
      range: "10–14 · Consequences",
      from: 9,
      to: 14,
    },
    {
      title: "Appendices and reading checks",
      range: "15–16 · Further study",
      from: 14,
      to: 16,
    },
  ].map((group) => ({
    title: group.title,
    range: group.range,
    entries: sections.slice(group.from, group.to).map((section, i) => ({
      number: String(group.from + i + 1).padStart(2, "0"),
      title: section.title,
      href: `#${section.id}`,
    })),
  }));
  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/notes">Notes</Link>
        <span>/</span>
        <Link href="/notes/papers">Papers</Link>
        <span>/</span>
        <span>Strong symmetry, locally</span>
      </nav>
      <SubjectHeader
        title="Strong symmetry, locally"
        description="How local observations reshape symmetry in mixed states, and what that implies for phases of quantum matter."
        credit={
          <>
            <a href={source}>Liu, Yi &amp; Else · arXiv:2605.28925v3</a>
          </>
        }
      />
      <p className={paper.context}>
        <cite>
          A local description of strong symmetries and strong-to-weak symmetry
          breaking in quantum many-body systems
        </cite>{" "}
        — Ruizhi Liu, Jinmin Yi, and Dominic V. Else. Reading notes on the
        attached version dated 12 August 2026. Section and page references
        follow that PDF. Explanations and worked checks are added for study;
        claims attributed to the paper retain their stated assumptions.
      </p>
      <div className={paper.contents} id="contents">
        <CourseContents groups={groups} />
      </div>
      <figure
        className={paper.flow}
        aria-label="Outline of the paper’s argument"
      >
        <ol>
          <li>
            <strong>Local data</strong>
            <span>
              Define the infinite state from fixed-region expectations.
            </span>
          </li>
          <li>
            <strong>Strong symmetry</strong>
            <span>
              Test every extension, or test charged-operation fidelity.
            </span>
          </li>
          <li>
            <strong>Constraints</strong>
            <span>
              Apply the definition to anomalous actions and symmetric baths.
            </span>
          </li>
        </ol>
        <figcaption>
          Conceptual outline added for these notes. The implications require the
          hypotheses developed below.
        </figcaption>
      </figure>
      <div className={styles.lessonLayout}>
        <article className={styles.article}>
          {sections.map((section, i) => (
            <section
              className={styles.section}
              id={section.id}
              key={section.id}
            >
              <span className={styles.sectionNumber}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2>{section.title}</h2>
              <p className={paper.source}>
                <a href={`${pdf}#page=${section.page}`}>{section.source}</a>
              </p>
              {section.blocks.map((block, j) => (
                <ReadingBlock block={block} key={j} />
              ))}
              {section.id === "gns" && (
                <div className={paper.tableWrap}>
                  <table className={paper.table}>
                    <caption>Symmetry of a weakly invariant state</caption>
                    <thead>
                      <tr>
                        <th>Condition</th>
                        <th>Canonical implementation</th>
                        <th>What it adds</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Weak</td>
                        <td>Unitary on the GNS Hilbert space</td>
                        <td>Invariance of system expectations</td>
                      </tr>
                      <tr>
                        <td>von Neumann</td>
                        <td>
                          Product of system-algebra and commutant unitaries
                        </td>
                        <td>Inner action on the generated algebra</td>
                      </tr>
                      <tr>
                        <td>Strong</td>
                        <td>Implementer belongs to the system algebra</td>
                        <td>
                          Invariance of every extension under system-only action
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
          <nav className={paper.end} aria-label="Paper navigation">
            <Link href="/notes/papers">All paper notes</Link>
            <a href="#contents">Back to contents ↑</a>
          </nav>
        </article>
        <aside className={`${styles.toc} ${paper.sidebar}`}>
          <nav aria-label="On this page">
            <p className={styles.label}>In these notes</p>
            <ol>
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    {String(i + 1).padStart(2, "0")} · {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      </div>
    </div>
  );
}
