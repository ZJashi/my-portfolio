import Link from "next/link";
import { SubjectHeader } from "@/components/notes/SubjectHeader";
import { CourseContents } from "@/components/notes/CourseContents";
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
<SubjectHeader title="Functional Analysis" description="Spaces of functions, built from their algebraic foundations, with definitions, examples, and proofs." credit={<> <a href="https://www.youtube.com/playlist?list=PLo4jXE-LdDTTIIIRwqK35CbFJieSJEcVR">Claudio Landim’s IMPA lectures</a> </>} />
<p className={styles.label}>Lectures</p>
<CourseContents groups={Array.from({ length: Math.ceil(lectures.length / 5) }, (_, groupIndex) => {
const batch = lectures.slice(groupIndex * 5, groupIndex * 5 + 5);
return { title: groupTitles[groupIndex] ?? "Further lectures", range: `Lectures ${batch[0].number}–${batch[batch.length - 1].number}`, entries: batch.map(lecture => ({ ...lecture, number: lecture.number.padStart(2, "0"), href: `/notes/mathematics/functional-analysis/${lecture.slug}` })) };
})} />

</div>;
}

