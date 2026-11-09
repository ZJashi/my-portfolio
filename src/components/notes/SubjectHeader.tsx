import type { ReactNode } from "react";
import { TbAtom, TbMathSymbols, TbCode, TbBrain, TbChartLine, TbBook2 } from "react-icons/tb";
import styles from "@/app/notes/notes.module.css";

/** Compact subject/course introduction with an optional concise source credit. */
export function SubjectHeader({ title, description, credit }: { title: string; description: string; credit?: ReactNode }) {
  const Icon = /finance/i.test(title) ? TbChartLine
    : /mathematics|analysis/i.test(title) ? TbMathSymbols
    : /computer/i.test(title) ? TbCode
    : title === "AI" ? TbBrain
    : /physics|mechanics/i.test(title) ? TbAtom : TbBook2;
  return <header className={styles.courseHeader}>
    <h1><Icon aria-hidden="true" /><span>{title}</span></h1>
    {credit && <p className={styles.courseCredit}>{credit}</p>}
    <p>{description}</p>
  </header>;
}
