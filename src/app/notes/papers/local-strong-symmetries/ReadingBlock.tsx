import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import type { Block } from "./content-model";
import paper from "./paper.module.css";
export function ReadingBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <MathText>{block.text}</MathText>
        </p>
      );
    case "equation":
      return <Equation>{block.text}</Equation>;
    case "box":
      return (
        <NoteBox title={block.title} kind={block.kind}>
          <p>
            <MathText>{block.text}</MathText>
          </p>
        </NoteBox>
      );
    case "list": {
      const items = block.items.map((item, i) => (
        <li key={i}>
          <MathText>{item}</MathText>
        </li>
      ));
      return block.ordered ? (
        <ol className={paper.list}>{items}</ol>
      ) : (
        <ul className={paper.list}>{items}</ul>
      );
    }
    case "exercise":
      return (
        <div className={paper.exercise}>
          <h3>{block.title}</h3>
          <p>
            <MathText>{block.question}</MathText>
          </p>
          <details>
            <summary>Worked answer</summary>
            <p>
              <MathText>{block.answer}</MathText>
            </p>
          </details>
        </div>
      );
  }
}
