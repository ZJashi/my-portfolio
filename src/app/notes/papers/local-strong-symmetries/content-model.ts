export type Block =
  | { type: "p"; text: string }
  | { type: "equation"; text: string }
  | { type: "box"; title: string; text: string; kind?: "definition" | "result" }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "exercise"; title: string; question: string; answer: string };
export type Section = {
  id: string;
  title: string;
  source: string;
  page: number;
  blocks: Block[];
};
export const p = (text: string): Block => ({ type: "p", text });
export const eq = (text: string): Block => ({ type: "equation", text });
export const box = (
  title: string,
  text: string,
  kind: "definition" | "result" = "definition",
): Block => ({ type: "box", title, text, kind });
export const list = (items: string[], ordered = false): Block => ({
  type: "list",
  items,
  ordered,
});
export const exercise = (
  title: string,
  question: string,
  answer: string,
): Block => ({
  type: "exercise",
  title,
  question,
  answer,
});
