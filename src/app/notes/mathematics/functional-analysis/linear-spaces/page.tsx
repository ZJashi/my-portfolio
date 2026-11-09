import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.module.css";

export const metadata = { title: "Linear Spaces | Functional Analysis | Zura Jashi", description: "Lecture 1: vector spaces, examples, subspaces, sums, intersections, chains and linear spans, with complete proofs." };

export default function LinearSpacesLesson() {
return <div className={styles.page}>
<nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><Link href="/notes/mathematics">Mathematics</Link><span>/</span><Link href="/notes/mathematics/functional-analysis">Functional Analysis</Link><span>/</span><span>Lecture 1</span></nav>
<header className={styles.readingHeader}><p className={styles.subjectKicker}>01 / FUNCTIONAL ANALYSIS</p><h1 className={styles.subjectTitle}>Linear spaces</h1><p className={styles.subjectDescription}>Definitions, examples and the algebra of subspaces. Build the span from first principles, then describe every element explicitly.</p><div className={styles.readingMeta}><span>Lecture 1 · approximately 39 minutes</span><span>Real and complex scalars · Sets · Basic algebra</span></div></header>
<div className={styles.lessonLayout}><article className={styles.article}>
<div className={styles.lessonOverview}><p>{"The structure of a linear space provides the algebraic foundation for functional analysis. Starting with "}<a href="https://www.youtube.com/watch?v=OonaUALrKUk">{"linear spaces"}</a>{", we develop subspaces and prove that every element of a span is a finite linear combination of its generators."}</p>
</div>
<section id="definition" className={styles.section}><span className={styles.sectionNumber}>01 / LECTURE 1</span><h2>Definition of a linear space</h2><NoteBox kind="definition" title="Linear space">
<p>{"A "}<strong>{"linear space"}</strong>{", also called a "}<strong>{"vector space"}</strong><MathText>{", consists of a set $X$ and two operations: addition of elements of $X$, and multiplication of an element of $X$ by a scalar. The scalar field $\\mathbb K$ is either the real numbers or the complex numbers."}</MathText></p></NoteBox>
<Equation>{"\\mathbb K\\in\\{\\mathbb R,\\mathbb C\\},\\qquad +:X\\times X\\to X,\\qquad \\mathbb K\\times X\\to X."}</Equation>
<p><MathText>{"The operations must satisfy the following axioms for every $x$, $y$, $z$ in $X$ and every pair of scalars $\\alpha$, $\\beta$ in $\\mathbb K$."}</MathText></p>
<p><strong>{"Addition is commutative and associative."}</strong>{" Changing the order of two terms or the grouping of three terms leaves their sum unchanged."}</p>
<Equation>{"x+y=y+x,\\qquad x+(y+z)=(x+y)+z."}</Equation>
<p><strong>{"Addition has a neutral element and inverses."}</strong><MathText>{" There is a zero vector, denoted 0, and each $x$ has an additive inverse, denoted $-x$."}</MathText></p>
<Equation>{"0+x=x,\\qquad (-x)+x=0."}</Equation>
<p><MathText>{"Thus $X$ is an abelian group under addition."}</MathText></p>
<p><strong>{"Scalar multiplication is compatible with multiplication in the field."}</strong>{" Multiplying the scalars first has the same effect as applying them successively."}</p>
<Equation>{"(\\alpha\\beta)x=\\alpha(\\beta x)."}</Equation>
<p><strong>{"Scalar multiplication distributes over both kinds of addition."}</strong></p>
<Equation>{"(\\alpha+\\beta)x=\\alpha x+\\beta x,\\qquad \\alpha(x+y)=\\alpha x+\\alpha y."}</Equation>
<p><strong>{"The scalar identity acts as the identity."}</strong></p>
<Equation>{"1x=x."}</Equation>
<p><MathText>{"The notation $\\alpha x$ denotes scalar multiplication. Vectors need not be arrows or finite lists of numbers; functions and infinite sequences will also be vectors in the examples below."}</MathText></p></section>
<section id="section-1" className={styles.section}><span className={styles.sectionNumber}>02 / LECTURE 1</span><h2>Two consequences of the axioms</h2>
<p><strong>{"First consequence: multiplying any vector by the scalar zero gives the zero vector."}</strong><MathText>{" To distinguish the two kinds of zero temporarily, write $0_{\\mathbb K}$ for the scalar zero and $0_X$ for the zero vector."}</MathText></p>
<Equation>{"0_{\\mathbb K}x=(0_{\\mathbb K}+0_{\\mathbb K})x=0_{\\mathbb K}x+0_{\\mathbb K}x."}</Equation>
<p><MathText>{"Add the additive inverse of $0_{\\mathbb K}x$ to both sides. One copy cancels, leaving the desired identity."}</MathText></p>
<Equation>{"0_{\\mathbb K}x=0_X."}</Equation>
<p>{"The same symbol 0 usually denotes both objects; its meaning follows from context."}</p>
<p><strong><MathText>{"Second consequence: multiplying by $-1$ gives the additive inverse."}</MathText></strong>{" Use the first consequence, distributivity and the identity axiom."}</p>
<Equation>{"0_X=0_{\\mathbb K}x=(1+(-1))x=1x+(-1)x=x+(-1)x."}</Equation>
<p><MathText>{"Adding $-x$ to both sides gives:"}</MathText></p>
<Equation>{"(-1)x=-x."}</Equation>
<p><MathText>{"This establishes that the inverse supplied by the additive group structure agrees with scalar multiplication by $-1$."}</MathText></p></section>
<section id="section-2" className={styles.section}><span className={styles.sectionNumber}>03 / LECTURE 1</span><h2>Examples of linear spaces</h2>
<p><strong>{"Polynomials."}</strong><MathText>{" Take $X$ to be all polynomials in one real variable with real coefficients, with the usual addition and multiplication by real numbers."}</MathText></p>
<Equation>{"p(t)=\\sum_{j=0}^{n}a_jt^j,\\qquad a_j\\in\\mathbb R."}</Equation>
<p><MathText>{"Adding two polynomials gives a polynomial; multiplying a polynomial by a real scalar gives a polynomial. The usual operations satisfy all the vector space axioms. The same construction gives a vector space of polynomials in finitely many variables, $t_1,\\ldots,t_n$."}</MathText></p>
<p><strong>{"Continuous functions."}</strong>{" Continuous real-valued or complex-valued functions on the domain under consideration form a linear space over the corresponding scalar field. Addition and scalar multiplication act pointwise."}</p>
<Equation>{"(f+g)(t)=f(t)+g(t),\\qquad (\\alpha f)(t)=\\alpha f(t)."}</Equation>
<p><MathText>{"A sum of continuous functions is continuous, and a scalar multiple of a continuous function is continuous. The zero vector is the function that is zero at every point. For a fixed topological domain $D$, write this space as $C(D;\\mathbb K)$."}</MathText></p>
<p><strong>{"Sequences."}</strong>{" The collection of all real sequences is a real linear space, and the collection of all complex sequences is a complex linear space. Operations act on each coordinate."}</p>
<Equation>{"(a_j)_{j\\geq1}+(b_j)_{j\\geq1}=(a_j+b_j)_{j\\geq1},\\qquad\n\\alpha(a_j)_{j\\geq1}=(\\alpha a_j)_{j\\geq1}."}</Equation>
<p><MathText>{"The zero vector is the sequence $(0,0,\\ldots)$. No convergence or boundedness condition is imposed in this example."}</MathText></p>
<p><strong><MathText>{"Integrable functions of order $p$."}</MathText></strong><MathText>{" Start with a measure space consisting of a set $\\Omega$, a sigma algebra $\\mathcal F$ and a measure $\\mu$. Consider measurable real-valued functions for which the pth power of the absolute value is integrable."}</MathText></p>
<Equation>{"\\int_\\Omega |f|^p\\,d\\mu<\\infty."}</Equation>
<p>{"These functions are closed under pointwise addition and scalar multiplication, so they form a linear space."}</p>
<p><strong>{"Equality almost everywhere."}</strong><MathText>{" For the customary range $1\\leq p<\\infty$, $L^p(\\Omega,\\mathcal F,\\mu)$ identifies functions that agree almost everywhere. Before making that identification, the actual functions form a vector space too. Absolute values are required in the integrability condition. Closure under addition follows from the inequality below; scalar multiplication follows by taking out the factor $|\\alpha|^p$."}</MathText></p>
<Equation>{"|f+g|^p\\leq2^{p-1}(|f|^p+|g|^p),\\qquad\n\\int_\\Omega|\\alpha f|^p\\,d\\mu=|\\alpha|^p\\int_\\Omega|f|^p\\,d\\mu."}</Equation></section>
<section id="section-3" className={styles.section}><span className={styles.sectionNumber}>04 / LECTURE 1</span><h2>Linear subspaces</h2>
<p><MathText>{"Fix a linear space $X$ over $\\mathbb K$. A "}</MathText><strong>{"linear subspace"}</strong><MathText>{" $Y$ is a nonempty subset of $X$ closed under the following operation: for any two elements $x$, $y$ of $Y$ and any scalar $\\alpha$, the vector $\\alpha x+y$ belongs to $Y$."}</MathText></p>
<Equation>{"x,y\\in Y,\\ \\alpha\\in\\mathbb K\\quad\\Longrightarrow\\quad\\alpha x+y\\in Y."}</Equation>
<p><strong>{"Important condition."}</strong><MathText>{" Nonemptiness is needed: the closure condition alone would also hold vacuously for the empty set, which is not a vector space. For nonempty $Y$, the condition guarantees that $Y$ contains zero and additive inverses and is closed under addition and scalar multiplication."}</MathText></p>
<Equation>{"0=(-1)x+x\\in Y,\\qquad\n\\alpha x=\\alpha x+0\\in Y,\\qquad\nx+y=1x+y\\in Y."}</Equation>
<p><MathText>{"All remaining vector space identities are inherited from $X$."}</MathText></p></section>
<section id="section-4" className={styles.section}><span className={styles.sectionNumber}>05 / LECTURE 1</span><h2>The zero subspace and sums of subspaces</h2>
<p><strong>{"The zero subspace."}</strong><MathText>{" The singleton set containing only the zero vector is a subspace, since every expression $\\alpha 0+0$ equals 0."}</MathText></p>
<NoteBox kind="definition" title="The zero subspace"><Equation>{"\\{0\\}\\subseteq X."}</Equation></NoteBox>
<p><strong>{"Sum of two subspaces."}</strong><MathText>{" Given subspaces $Y_1$ and $Y_2$, their sum consists of every vector that can be expressed as one vector from each subspace added together."}</MathText></p>
<Equation>{"Y_1+Y_2=\\{x_1+x_2:x_1\\in Y_1,\\ x_2\\in Y_2\\}."}</Equation>
<p><strong>{"Claim."}</strong><MathText>{" This sum is a subspace of $X$."}</MathText></p>
<p><strong>{"Proof."}</strong><MathText>{" Let $x$ and $y$ belong to the sum and let $\\alpha$ be a scalar. By the definition of the sum, choose decompositions:"}</MathText></p>
<Equation>{"x=x_1+x_2,\\qquad y=y_1+y_2,\\qquad x_i,y_i\\in Y_i."}</Equation>
<p>{"Regroup using distributivity, associativity and commutativity."}</p>
<Equation>{"\\alpha x+y=(\\alpha x_1+y_1)+(\\alpha x_2+y_2)."}</Equation>
<p><MathText>{"The first parenthesis belongs to $Y_1$ and the second belongs to $Y_2$, because each is a subspace. Their sum therefore belongs to $Y_1+Y_2$. The sum also contains zero, so it is nonempty. This proves the claim."}</MathText></p></section>
<section id="section-5" className={styles.section}><span className={styles.sectionNumber}>06 / LECTURE 1</span><h2>Intersections of subspaces</h2>
<p><MathText>{"Let the family of subspaces be indexed by an arbitrary set $I$. The index set need not be countable. Their intersection is again a subspace."}</MathText></p>
<Equation>{"Y=\\bigcap_{\\theta\\in I}Y_\\theta."}</Equation>
<p><strong>{"Proof."}</strong><MathText>{" Each subspace contains zero, so the intersection contains zero. Suppose $x$, $y$ belong to $Y$ and $\\alpha$ belongs to $\\mathbb K$. Membership in the intersection means that $x$ and $y$ belong to every $Y_\\theta$. Closure in each such subspace gives:"}</MathText></p>
<Equation>{"\\alpha x+y\\in Y_\\theta\\quad\\text{for every }\\theta\\in I."}</Equation>
<p>{"Consequently the vector belongs to the intersection itself. This establishes closure and proves the claim."}</p>
<p><strong>{"Important condition."}</strong><MathText>{" If $I$ is empty, the intersection is conventionally taken within the ambient space $X$ and equals $X$."}</MathText></p></section>
<section id="section-6" className={styles.section}><span className={styles.sectionNumber}>07 / LECTURE 1</span><h2>Totally ordered families and their unions</h2>
<p>{"A family is "}<strong>{"totally ordered by inclusion"}</strong>{" if any two members are comparable: one is contained in the other."}</p>
<Equation>{"\\forall\\theta_1,\\theta_2\\in I,\\qquad\nY_{\\theta_1}\\subseteq Y_{\\theta_2}\\quad\\text{or}\\quad\nY_{\\theta_2}\\subseteq Y_{\\theta_1}."}</Equation>
<p>{"Such a family is also called a chain."}</p>
<p><strong>{"Claim."}</strong>{" The union of a nonempty chain of linear subspaces is a linear subspace."}</p>
<Equation>{"Y=\\bigcup_{\\theta\\in I}Y_\\theta."}</Equation>
<p><strong>{"Proof."}</strong><MathText>{" Take $x$, $y$ in the union and a scalar $\\alpha$. There are indices $\\theta_1$ and $\\theta_2$ with $x$ in $Y_{\\theta_1}$ and $y$ in $Y_{\\theta_2}$. Because the family is totally ordered, assume, after interchanging the indices if necessary, that $Y_{\\theta_1}$ is contained in $Y_{\\theta_2}$. Both $x$ and $y$ then belong to the larger subspace. Hence:"}</MathText></p>
<Equation>{"\\alpha x+y\\in Y_{\\theta_2}\\subseteq Y."}</Equation>
<p>{"The union contains zero because the family is nonempty. Therefore it is a subspace."}</p>
<p>{"The essential step is placing both selected vectors in one member of the family. In an arbitrary union, this need not be possible."}</p>
<p><strong>{"Why arbitrary unions fail."}</strong><MathText>{" The two coordinate axes in the plane are subspaces, but their union is not: $(1,0)$ and $(0,1)$ belong to that union, while their sum $(1,1)$ does not. The chain assumption ensures that both selected vectors lie in a common subspace, where closure applies."}</MathText></p></section>
<section id="section-7" className={styles.section}><span className={styles.sectionNumber}>08 / LECTURE 1</span><h2>Definition of the linear span</h2>
<p><MathText>{"Let $S$ be any subset of $X$; $S$ itself need not be a subspace. Its "}</MathText><strong>{"linear span"}</strong><MathText>{", denoted $L(S)$, is the intersection of all subspaces of $X$ that contain $S$."}</MathText></p>
<Equation>{"L(S)=\\bigcap\\{Y\\subseteq X:Y\\text{ is a linear subspace and }S\\subseteq Y\\}."}</Equation>
<p><MathText>{"There is at least one subspace in this family: $X$ itself."}</MathText></p>
<p><strong>{"The defining family is nonempty."}</strong><MathText>{" Every subspace in the family contains zero and all of $S$. Their intersection therefore contains zero and all of $S$ as well."}</MathText></p>
<p><MathText>{"By the intersection theorem, $L(S)$ is a subspace. It contains $S$ because every subspace in the defining family contains $S$."}</MathText></p>
<p><strong>{"Smallest subspace property."}</strong><MathText>{" If $Y$ is any subspace containing $S$, then $Y$ is one of the sets in the intersection. Therefore:"}</MathText></p>
<Equation>{"S\\subseteq Y\\ \\text{and }Y\\text{ a subspace}\n\\quad\\Longrightarrow\\quad L(S)\\subseteq Y."}</Equation>
<p><MathText>{"Thus $L(S)$ is the smallest linear subspace containing $S$. Here “smallest” means contained in every subspace that contains $S$."}</MathText></p></section>
<section id="section-8" className={styles.section}><span className={styles.sectionNumber}>09 / LECTURE 1</span><h2>Linear combinations</h2>
<p>{"A "}<strong>{"linear combination"}</strong><MathText>{" of elements $x_1,\\ldots,x_n$ of a set is a finite sum of scalar multiples of those elements."}</MathText></p>
<Equation>{"\\sum_{j=1}^{n}\\alpha_jx_j,\\qquad \\alpha_j\\in\\mathbb K."}</Equation>
<p>{"The number of terms can vary from one combination to another. The word "}<strong>{"finite"}</strong>{" is essential. No operation of summing infinitely many vectors has been defined in an abstract linear space."}</p></section>
<section id="section-9" className={styles.section}><span className={styles.sectionNumber}>10 / LECTURE 1</span><h2>The span consists of finite linear combinations</h2>
<p><strong>{"Theorem."}</strong><MathText>{" The span of $S$ consists precisely of all finite linear combinations of elements of $S$."}</MathText></p>
<Equation>{"L(S)=\\left\\{\\sum_{j=1}^{n}\\alpha_jx_j:\n n\\geq0,\\ \\alpha_j\\in\\mathbb K,\\ x_j\\in S\\right\\}."}</Equation>
<p><strong>{"Important condition."}</strong><MathText>{" Allowing $n=0$ includes the empty sum, defined as zero. This handles $S$ empty, for which $L(S)=\\{0\\}$. For nonempty $S$, allowing positive n already includes zero by choosing a zero coefficient."}</MathText></p>
<p><strong>{"Proof."}</strong><MathText>{" Call the set on the right $Z$. To establish equality, first show that $Z$ is a subspace containing $S$, then show that every subspace containing $S$ must contain $Z$."}</MathText></p>
<p><strong><MathText>{"Step 1: $Z$ is a subspace."}</MathText></strong><MathText>{" Take two vectors in $Z$ and a scalar $\\alpha$. Write each vector as a finite linear combination of elements of $S$."}</MathText></p>
<Equation>{"z_1=\\sum_{j=1}^{n_1}a_jx_j,\\qquad\nz_2=\\sum_{j=1}^{n_2}b_jy_j."}</Equation>
<p>{"Distribute the scalar through the first sum and then add the second sum."}</p>
<Equation>{"\\alpha z_1+z_2=\n\\sum_{j=1}^{n_1}(\\alpha a_j)x_j+\n\\sum_{j=1}^{n_2}b_jy_j."}</Equation>
<p><MathText>{"This is a finite linear combination with at most $n_1+n_2$ terms, all from $S$. It therefore belongs to $Z$. Since zero belongs to $Z$, this proves that $Z$ is a subspace."}</MathText></p>

<p><strong><MathText>{"Step 2: $Z$ contains $S$."}</MathText></strong><MathText>{" Any $x$ in $S$ is a one-term linear combination with coefficient 1."}</MathText></p>
<Equation>{"x=1x\\in Z."}</Equation>
<p><MathText>{"Since $Z$ is a subspace containing $S$, the smallest subspace property yields the first inclusion."}</MathText></p>
<Equation>{"L(S)\\subseteq Z."}</Equation>
<p><strong><MathText>{"Step 3: Every subspace containing $S$ contains $Z$."}</MathText></strong><MathText>{" Let $Y$ be such a subspace and take any $z$ in $Z$. Express $z$ as a finite linear combination of elements of $S$. Each term's vector belongs to $Y$ because $S$ is contained in $Y$. Scalar multiplication keeps each term in $Y$, and finite addition keeps their sum in $Y$. Thus $z$ belongs to $Y$."}</MathText></p>
<p><MathText>{"This holds for every subspace containing $S$, so $Z$ is contained in their intersection:"}</MathText></p>
<Equation>{"Z\\subseteq L(S)."}</Equation>
<p>{"The two inclusions establish the theorem."}</p>
<NoteBox kind="result" title="The span is all finite linear combinations"><Equation>{"Z=L(S)."}</Equation></NoteBox>
<p>{"The definition by intersection now has an explicit description. To belong to the span is exactly to be expressible as a finite linear combination of the original elements."}</p></section>
<section id="section-10" className={styles.section}>
<span className={styles.sectionNumber}>11 / REVISION</span><h2>Main results to remember</h2>
<NoteBox kind="definition" title="The structure of a linear space">
<ul className={styles.takeaways}>
<li><strong>Two operations:</strong> addition makes <MathText>{"$X$ an abelian group; scalar multiplication by $\\mathbb K$ is associative, distributive and satisfies $1x=x$."}</MathText></li>
<li><strong>Zero and inverses:</strong> <MathText>{"$0_{\\mathbb K}x=0_X$ and $(-1)x=-x$."}</MathText></li>
<li><strong>Examples:</strong> polynomials, continuous functions, sequences and <MathText>{"$L^p$ spaces."}</MathText></li>
</ul></NoteBox>
<NoteBox kind="definition" title="How subspaces combine">
<ul className={styles.takeaways}>
<li><strong>Subspace test:</strong> <MathText>{"$Y$ must be nonempty and satisfy $\\alpha x+y\\in Y$ for every $x,y\\in Y$ and $\\alpha\\in\\mathbb K$."}</MathText></li>
<li><strong>Sums and intersections:</strong> the sum of two subspaces and any intersection of subspaces are subspaces.</li>
<li><strong>Unions need a condition:</strong> the union of a nonempty chain is a subspace; an arbitrary union can fail to be closed under addition.</li>
</ul></NoteBox>
<NoteBox kind="result" title="Two equivalent descriptions of the span">
<ul className={styles.takeaways}>
<li><strong>By containment:</strong> <MathText>{"$L(S)$ is the smallest subspace containing $S$."}</MathText></li>
<li><strong>By construction:</strong> its elements are exactly the <strong>finite linear combinations</strong> of elements of <MathText>{"$S$."}</MathText></li>
<li><strong>Empty set:</strong> <MathText>{"$L(\\varnothing)=\\{0\\}$, using the empty sum."}</MathText></li>
</ul></NoteBox>
</section>
<div className={styles.lessonSources}><p>Independent study notes following <a href="https://www.youtube.com/watch?v=OonaUALrKUk">IMPA Functional Analysis Lecture 1</a>. <a href="https://www.youtube.com/playlist?list=PLo4jXE-LdDTTIIIRwqK35CbFJieSJEcVR">Course playlist</a>. The exposition includes supporting explanations and the conditions needed for each result.</p></div>
<nav className={styles.lessonEnd} aria-label="Lesson navigation"><Link href="/notes/mathematics/functional-analysis">Functional Analysis contents</Link><Link href="/notes/mathematics/functional-analysis/quotient-spaces-and-convex-sets">Next: Quotient spaces and convex sets</Link></nav>
</article><aside className={styles.toc}><nav aria-label="On this page"><p className={styles.label}>In this lecture</p><ol><li><a href="#definition">Definition of a linear space</a></li><li><a href="#section-1">Two consequences of the axioms</a></li><li><a href="#section-2">Examples of linear spaces</a></li><li><a href="#section-3">Linear subspaces</a></li><li><a href="#section-4">The zero subspace and sums of subspaces</a></li><li><a href="#section-5">Intersections of subspaces</a></li><li><a href="#section-6">Totally ordered families and their unions</a></li><li><a href="#section-7">Definition of the linear span</a></li><li><a href="#section-8">Linear combinations</a></li><li><a href="#section-9">The span consists of finite linear combinations</a></li><li><a href="#section-10">Main results to remember</a></li></ol></nav></aside></div>
</div>;
}

