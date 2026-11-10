export type { Block, Section } from "./content-model";
import { entries as part1 } from "./question-notes";
import { entries as part2 } from "./gns-notes";
import { entries as part3 } from "./split-notes";
import { entries as part4 } from "./appendices-notes";
export const sections = [...part1, ...part2, ...part3, ...part4];
