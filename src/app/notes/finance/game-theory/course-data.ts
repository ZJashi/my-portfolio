import type { CourseGroup } from "@/components/notes/CourseContents";

export const base = "/notes/finance/game-theory";
export const source =
  "https://ocw.mit.edu/courses/14-12-economic-applications-of-game-theory-fall-2025/";
const topics = [
  [
    "Introduction to Individual Decision-Making",
    "Representation of Games",
    "Dominance",
    "Rationalizability",
    "Nash Equilibrium",
    "Imperfect Competition",
    "Zero-Sum Games",
  ],
  [
    "Backward Induction",
    "Negotiation",
    "Subgame-Perfect Nash Equilibrium",
    "One-Shot Deviation Principle and Bargaining",
    "Finitely Repeated Games",
    "Infinitely Repeated Games",
    "Folk Theorem",
    "Implicit Cartels",
  ],
  [
    "Bayesian Games",
    "Bayesian Nash Equilibrium: Applications",
    "Auctions",
    "Revenue Equivalence",
    "Ad Auctions",
  ],
  [
    "Perfect Bayesian Equilibrium",
    "Signaling",
    "Bargaining with Incomplete Information",
    "Cheap Talk",
    "Common Knowledge",
  ],
];
const titles = [
  "Choice and simultaneous games",
  "Sequential and repeated interaction",
  "Private information and auctions",
  "Beliefs and communication",
];
let offset = 0;
export const groups: CourseGroup[] = topics.map((entries, index) => {
  const start = offset + 1;
  offset += entries.length;
  return {
    title: titles[index],
    range: `Lectures ${start}–${offset}`,
    entries: entries.map((title, i) => ({
      number: String(start + i).padStart(2, "0"),
      title,
      ...(start + i === 1
        ? {
            href: `${base}/individual-decision-making`,
            description:
              "Preferences, utility, uncertainty and risk, with worked examples and a revision summary.",
          }
        : start + i === 2
          ? {
              href: `${base}/representation-of-games`,
              description:
                "Game trees, information sets, complete plans and payoff tables, with a worked example and revision summary.",
            }
          : {}),
    })),
  };
});
