import Link from "next/link";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import courseStyles from "./course.module.css";
import styles from "@/app/notes/notes.module.css";

const lectures = [
  {
    "slug": "linear-spaces",
    "title": "Linear spaces",
    "description": "Vector space axioms, polynomial and function spaces, subspace sums and intersections, totally ordered unions, and the proof that a span consists of finite linear combinations.",
    "number": "1"
  },
  {
    "slug": "quotient-spaces-and-convex-sets",
    "title": "Quotient spaces and convex sets",
    "description": "Equivalence classes, operations on quotient spaces, linear maps and isomorphisms, convex combinations, and the construction of the convex hull.",
    "number": "2"
  },
  {
    "slug": "normed-linear-spaces",
    "title": "Normed linear spaces",
    "description": "Norm axioms, induced metrics and convergence, equivalent norms, products and closures, the quotient norm, and the definition of a Banach space.",
    "number": "3"
  },
  {
    "slug": "completing-a-normed-linear-space",
    "title": "Completing a normed linear space",
    "description": "Construct a Banach space from Cauchy sequences, prove completeness by diagonal selection, and embed the original space isometrically and densely.",
    "number": "4"
  },
  {
    "slug": "finite-dimensional-linear-spaces",
    "title": "Finite dimensional linear spaces",
    "description": "Bases and dimension, uniform coordinate estimates, compactness of the closed unit ball, equivalence of norms, and completeness.",
    "number": "5"
  },
  {
    "slug": "examples-of-normed-linear-spaces",
    "title": "Examples of normed linear spaces",
    "description": "Complete sequence spaces, Hölder and Minkowski inequalities, compactly supported continuous functions, integral norms, and the construction of Lp spaces.",
    "number": "6"
  },
  {
    "slug": "noncompact-unit-balls-and-separability",
    "title": "Noncompact unit balls and separability",
    "description": "Riesz’s lemma, closed finite spans, separated unit vectors, and the nonseparability of signed measures under total variation.",
    "number": "7"
  },
  {
    "slug": "zorns-lemma",
    "title": "Zorn’s lemma",
    "description": "Partial orders, chains, upper bounds and maximal elements, followed by the proof that every vector space has an algebraic basis.",
    "number": "8"
  },
  {
    "slug": "hahn-banach-theorem",
    "title": "The Hahn–Banach theorem",
    "description": "Sublinear domination, extension across one new direction, and the Zorn argument extending a real linear functional to the whole space.",
    "number": "9"
  },
  {
    "slug": "convex-sets-and-gauge-functions",
    "title": "Convex sets and gauge functions",
    "description": "Algebraic interior, admissible scales, sublinear gauges, and the relation between convex sets and their unit sublevels.",
    "number": "10"
  },
  {
    "slug": "geometric-hahn-banach-theorems",
    "title": "Geometric Hahn–Banach theorems",
    "description": "Point and set separation by hyperplanes, extensions preserving norm bounds, and positive extensions on bounded functions.",
    "number": "11"
  },
  {
    "slug": "dual-of-a-normed-linear-space",
    "title": "Dual of a normed linear space",
    "description": "Bounded linear functionals, the dual norm, closed kernels, and the proof that the continuous dual is Banach.",
    "number": "12"
  },
  {
    "slug": "extensions-of-bounded-linear-functionals",
    "title": "Extensions of bounded linear functionals",
    "description": "Norm-preserving extensions, finite dimensional complements, annihilators, dual distance formulas, and closed linear spans.",
    "number": "13"
  },
  {
    "number": "14",
    "slug": "reflexive-spaces",
    "title": "Reflexive spaces",
    "description": "The canonical bidual embedding, norm attainment, separability, and reflexivity of closed subspaces."
  },
  {
    "number": "14A",
    "slug": "dual-of-continuous-functions",
    "title": "The dual space of C([a,b])",
    "description": "Signed measures, bounded variation, Stieltjes integration, and the interval proof of Riesz representation."
  }
];
const groupTitles = ["Algebraic and metric foundations", "Examples and extension theorems", "Separation and duality"];

export const metadata = { title: "Functional Analysis | Mathematics | Zura Jashi", description: "Functional analysis lecture notes, following Claudio Landim’s full IMPA course, from linear spaces to the central results of functional analysis." };
export default function FunctionalAnalysisPage() {
return <div className={styles.page}>
<nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><Link href="/notes/mathematics">Mathematics</Link><span>/</span><span>Functional Analysis</span></nav>
<SubjectHeader number="01" label="MATHEMATICS / LECTURE NOTES" title="Functional Analysis" description="Spaces of functions, built from their algebraic foundations. Lecture notes following the IMPA Functional Analysis video series, with definitions, examples and proofs." topics="Spaces / Operators / Analysis" caption="Finite combinations. A space of possibilities.">
<svg viewBox="0 0 280 240" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M35 190h210M60 210V30" opacity=".4"/><path d="M60 190 170 55M60 190 230 135M170 55 230 135" /><path d="m170 55-3 14m3-14-13 5m73 75-14-1m14 1-10 10" /><path d="M115 123 200 95" strokeDasharray="4 5" opacity=".5"/><g fill="currentColor" stroke="none" fontFamily="Georgia" fontSize="18" fontStyle="italic"><text x="155" y="40">x</text><text x="236" y="136">y</text><text x="125" y="220">span S</text></g></svg>
</SubjectHeader>
<p className={styles.label}>Lectures</p>
<div className={courseStyles.groups}>
{Array.from({ length: Math.ceil(lectures.length / 5) }, (_, groupIndex) => {
const start = groupIndex * 5;
return <details className={courseStyles.group} key={start} open={groupIndex === Math.floor((lectures.length - 1) / 5)}>
<summary className={courseStyles.summary}><div><span className={courseStyles.range}>Lectures {lectures[start].number}–{lectures[Math.min(start + 4, lectures.length - 1)].number}</span><h2>{groupTitles[groupIndex] ?? "Further lectures"}</h2></div><span className={courseStyles.chevron} aria-hidden="true">⌄</span></summary>
<ol className={courseStyles.lectures} start={start + 1}>
{lectures.slice(start, start + 5).map((lecture) => <li key={lecture.slug}><Link className={courseStyles.lecture} href={`/notes/mathematics/functional-analysis/${lecture.slug}`}><span className={courseStyles.number}>{lecture.number.padStart(2, "0")}</span><div><h3>{lecture.title}</h3><p>{lecture.description}</p><span className={courseStyles.read}>Read lecture notes <span aria-hidden="true">↗</span></span></div></Link></li>)}
</ol></details>;
})}
</div>
<p className={styles.reference}>Course source: <a href="https://www.youtube.com/playlist?list=PLo4jXE-LdDTTIIIRwqK35CbFJieSJEcVR">Functional Analysis</a>, taught by Claudio Landim at IMPA.</p>
</div>;
}

