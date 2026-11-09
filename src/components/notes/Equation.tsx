import katex from "katex";
import styles from "@/app/notes/notes.module.css";

export function Equation({ children }: { children: string }) {
  return <div className={styles.equation} dangerouslySetInnerHTML={{ __html: katex.renderToString(children, { displayMode: true, throwOnError: true, output: "htmlAndMathml" }) }} />;
}

export function InlineMath({ children }: { children: string }) {
  return <span className={styles.inlineMath} dangerouslySetInnerHTML={{ __html: katex.renderToString(children, { displayMode: false, throwOnError: true, output: "htmlAndMathml" }) }} />;
}

/** Author-controlled prose: $...$ marks inline mathematics. */
export function MathText({ children }: { children: string }) {
  return <>{children.split(/\$([^$]+)\$/g).map((part, index) => index % 2 ? <InlineMath key={index}>{part}</InlineMath> : part)}</>;
}

export function MathParagraph({ children }: { children: string }) {
  return <p><MathText>{children}</MathText></p>;
}
