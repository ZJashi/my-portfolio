import Link from "next/link";
import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.module.css";

export const metadata = { title: "Quotient Spaces and Convex Sets | Functional Analysis | Zura Jashi", description: "Lecture 2: equivalence classes, quotient spaces, linear maps, convex combinations and convex hulls, with proofs." };

export default function QuotientSpacesLesson() {
return <div className={styles.page}>
<nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/notes">Notes</Link><span>/</span><Link href="/notes/mathematics">Mathematics</Link><span>/</span><Link href="/notes/mathematics/functional-analysis">Functional Analysis</Link><span>/</span><span>Lecture 2</span></nav>
<header className={styles.readingHeader}><p className={styles.subjectKicker}>02 / FUNCTIONAL ANALYSIS</p><h1 className={styles.subjectTitle}>Quotient spaces and convex sets</h1><p className={styles.subjectDescription}>Identify vectors that differ by a subspace, preserve linear structure through maps, and build convex sets from finite combinations.</p><div className={styles.readingMeta}><span>Lecture 2</span><span>Linear spaces · Subspaces · Induction</span></div></header>
<div className={styles.lessonLayout}><article className={styles.article}>
<div className={styles.lessonOverview}><p><MathText>{"A quotient space treats vectors differing by an element of a chosen subspace as one object. Convexity places a different restriction on combinations: the coefficients must be nonnegative and sum to one. Both constructions lead from abstract definitions to explicit descriptions and closure proofs."}</MathText></p></div>
<section id="equivalence" className={styles.section}><span className={styles.sectionNumber}>01 / LECTURE 2</span><h2>Equivalence modulo a subspace</h2><p><MathText>{"Let $X$ be a linear space over $\\mathbb K$, where $\\mathbb K=\\mathbb R$ or $\\mathbb C$, and let $Y\\subseteq X$ be a linear subspace. We want to regard two vectors as equivalent whenever their difference lies entirely in $Y$."}</MathText></p>
<NoteBox kind="definition" title="Equivalence modulo Y"><p><MathText>{"For $x,u\\in X$, define the relation"}</MathText></p><Equation>{"x\\sim u\\quad\\Longleftrightarrow\\quad x-u\\in Y."}</Equation></NoteBox>
<p><MathText>{"The subspace condition is what makes this an equivalence relation. First, $Y$ contains zero: choose $y\\in Y$; closure under scalar multiplication gives $-y\\in Y$, and closure under addition gives $y+(-y)=0\\in Y$."}</MathText></p>
<h3>Reflexivity</h3>
<p><MathText>{"Every vector is equivalent to itself, since $x-x=0\\in Y$."}</MathText></p>
<h3>Symmetry</h3>
<p><MathText>{"If $x\\sim u$, then $x-u\\in Y$. Multiplication by $-1$ keeps the difference in $Y$, so $u-x=-(x-u)\\in Y$. Thus $u\\sim x$."}</MathText></p>
<h3>Transitivity</h3>
<p><MathText>{"If $x\\sim u$ and $u\\sim v$, then both $x-u$ and $u-v$ belong to $Y$. Their sum is still in $Y$:"}</MathText></p>
<Equation>{"x-v=(x-u)+(u-v)\\in Y."}</Equation>
<p><MathText>{"Hence $x\\sim v$. Reflexivity, symmetry and transitivity together establish the equivalence relation."}</MathText></p></section>
<section id="quotient" className={styles.section}><span className={styles.sectionNumber}>02 / LECTURE 2</span><h2>Classes and the quotient space</h2><p><MathText>{"The equivalence class of $x$ is the set of all vectors equivalent to $x$. It can also be written as a translate of the subspace $Y$:"}</MathText></p>
<Equation>{"[x]=\\{u\\in X:u-x\\in Y\\}=x+Y=\\{x+y:y\\in Y\\}."}</Equation>
<p><MathText>{"Indeed, $u-x\\in Y$ means precisely that $u=x+y$ for some $y\\in Y$. A vector $x$ is a representative of its class. Different representatives may describe exactly the same class."}</MathText></p>
<NoteBox kind="definition" title="Quotient space"><p><MathText>{"The quotient of $X$ by $Y$ is the set of equivalence classes"}</MathText></p><Equation>{"X/Y=\\{[x]:x\\in X\\}."}</Equation></NoteBox>
<p><MathText>{"An element of $X/Y$ is therefore a whole subset of $X$, rather than a selected vector of $X$. The equivalence classes partition $X$: two classes either coincide or have no common element."}</MathText></p>
<h3>Operations on classes</h3>
<p><MathText>{"To add two classes, add representatives and take the resulting class. To multiply a class by a scalar, multiply a representative and take its class:"}</MathText></p>
<Equation>{"[x]+[u]=[x+u],\\qquad \\alpha[x]=[\\alpha x]."}</Equation>
<p><MathText>{"These formulas define operations on classes only if changing representatives leaves the answer unchanged. This is the essential well-definedness check."}</MathText></p></section>
<section id="well-defined" className={styles.section}><span className={styles.sectionNumber}>03 / LECTURE 2</span><h2>Why the quotient operations are well defined</h2><h3>Addition</h3>
<p><MathText>{"Suppose $x_1\\sim x_2$ and $u_1\\sim u_2$. The differences $x_2-x_1$ and $u_2-u_1$ lie in $Y$. Adding them gives"}</MathText></p>
<Equation>{"(x_2+u_2)-(x_1+u_1)=(x_2-x_1)+(u_2-u_1)\\in Y."}</Equation>
<p><MathText>{"Thus $x_1+u_1\\sim x_2+u_2$, so the resulting equivalence class is independent of both representatives."}</MathText></p>
<p><MathText>{"The same argument can be expressed directly as equality of sets. If $z\\in[x_1+u_1]$, then $z-(x_1+u_1)\\in Y$. Subtract the two known differences:"}</MathText></p>
<Equation>{"z-(x_2+u_2)=\\bigl(z-(x_1+u_1)\\bigr)-(x_2-x_1)-(u_2-u_1)\\in Y."}</Equation>
<p><MathText>{"Therefore $z\\in[x_2+u_2]$. Interchanging the pairs of representatives proves the reverse inclusion. Hence the classes are equal."}</MathText></p>
<h3>Scalar multiplication</h3>
<p><MathText>{"If $x_1\\sim x_2$, then $x_1-x_2\\in Y$. Closure under scalar multiplication gives"}</MathText></p>
<Equation>{"\\alpha x_1-\\alpha x_2=\\alpha(x_1-x_2)\\in Y."}</Equation>
<p><MathText>{"It follows that $[\\alpha x_1]=[\\alpha x_2]$. Scalar multiplication is also well defined."}</MathText></p>
<NoteBox kind="result" title="The quotient is a linear space"><p><MathText>{"With these operations, $X/Y$ is a linear space over the same field $\\mathbb K$. Its zero vector is the class $[0]=Y$, and the additive inverse of $[x]$ is $[-x]$."}</MathText></p><Equation>{"[x]+[0]=[x],\\qquad [x]+[-x]=[0]."}</Equation></NoteBox>
<p><MathText>{"The other axioms follow from those in $X$. For example, $([x]+[u])+[v]=[(x+u)+v]=[x+(u+v)]=[x]+([u]+[v])$. Distributivity and compatibility of scalar multiplication pass to classes in exactly the same way."}</MathText></p></section>
<section id="linear-maps" className={styles.section}><span className={styles.sectionNumber}>04 / LECTURE 2</span><h2>Linear maps and isomorphisms</h2><p><MathText>{"Let $X$ and $W$ be linear spaces over the same scalar field $\\mathbb K$. A map $T:X\\to W$ is linear when it preserves addition and scalar multiplication."}</MathText></p>
<NoteBox kind="definition" title="Linear map"><Equation>{"T(x+u)=T(x)+T(u),\\qquad T(\\alpha x)=\\alpha T(x)."}</Equation></NoteBox>
<p><MathText>{"Both identities must hold for every $x,u\\in X$ and every $\\alpha\\in\\mathbb K$. Equivalently, $T(\\alpha x+u)=\\alpha T(x)+T(u)$. The common scalar field matters: the scalar on the input side must also act on the output space."}</MathText></p>
<p><MathText>{"Linearity also implies $T(0)=0$, because $T(0)=T(0+0)=T(0)+T(0)$ and cancellation gives the result."}</MathText></p>
<NoteBox kind="definition" title="Isomorphism"><p><MathText>{"Two linear spaces are isomorphic if there exists a bijective linear map between them. Such a map is called an isomorphism. It preserves the linear structure while pairing each vector in one space with exactly one vector in the other."}</MathText></p></NoteBox>
<p><MathText>{"Here $W$ denotes the target space; no dual-space structure is assumed. Everything so far is algebraic: no norm, topology or continuity assumption is needed."}</MathText></p></section>
<section id="subspace-images" className={styles.section}><span className={styles.sectionNumber}>05 / LECTURE 2</span><h2>Images and preimages of subspaces</h2><h3>The image of a subspace</h3>
<p><MathText>{"Let $U\\subseteq X$ be a linear subspace. Its image under $T$ is"}</MathText></p>
<Equation>{"T(U)=\\{T(x):x\\in U\\}."}</Equation>
<p><MathText>{"To prove that $T(U)$ is a subspace of $W$, take $z_1,z_2\\in T(U)$ and $\\alpha\\in\\mathbb K$. Choose $x_1,x_2\\in U$ with $z_i=T(x_i)$. Since $U$ is a subspace, $\\alpha x_1+x_2\\in U$. Linearity gives"}</MathText></p>
<Equation>{"\\alpha z_1+z_2=\\alpha T(x_1)+T(x_2)=T(\\alpha x_1+x_2)\\in T(U)."}</Equation>
<p><MathText>{"The image contains $T(0)=0$, so it is nonempty and satisfies the subspace test."}</MathText></p>
<h3>The preimage of a subspace</h3>
<p><MathText>{"For a subspace $V\\subseteq W$, its preimage is"}</MathText></p>
<Equation>{"T^{-1}(V)=\\{x\\in X:T(x)\\in V\\}."}</Equation>
<p><MathText>{"Take $x_1,x_2\\in T^{-1}(V)$. Their images belong to $V$, so for any scalar $\\alpha$,"}</MathText></p>
<Equation>{"T(\\alpha x_1+x_2)=\\alpha T(x_1)+T(x_2)\\in V."}</Equation>
<p><MathText>{"Consequently $\\alpha x_1+x_2\\in T^{-1}(V)$. The preimage contains zero because $T(0)=0\\in V$, and is therefore a subspace of $X$."}</MathText></p>
<NoteBox kind="definition" title="Preimage does not require an inverse"><p><MathText>{"The notation $T^{-1}(V)$ means the set of all inputs whose images lie in $V$. The map $T$ need not be injective, surjective or invertible."}</MathText></p></NoteBox></section>
<section id="convexity" className={styles.section}><span className={styles.sectionNumber}>06 / LECTURE 2</span><h2>Convex sets</h2><p><MathText>{"For convexity, work in a real linear space $X$. A subset $C\\subseteq X$ is convex when the entire line segment joining any two of its points stays inside the set."}</MathText></p>
<NoteBox kind="definition" title="Convex set"><Equation>{"x,u\\in C,\\quad 0\\leq t\\leq1\\quad\\Longrightarrow\\quad tx+(1-t)u\\in C."}</Equation></NoteBox>
<p><MathText>{"The parameter $t$ is real. At $t=0$ the expression equals $u$, at $t=1$ it equals $x$, and between these values it traces the segment between them."}</MathText></p>
<p><MathText>{"A filled disk, a filled triangle and a filled square are convex. A star-shaped region with indentations need not be convex: two points can lie in the region while part of the connecting segment lies outside it. The filled region matters; the boundary of a triangle or circle alone is not convex."}</MathText></p>
<figure className={styles.lessonFigure}><svg viewBox="0 0 600 260" fill="none" stroke="currentColor" strokeWidth="2" role="img" aria-labelledby="convex-title convex-desc"><title id="convex-title">Convex and nonconvex regions</title><desc id="convex-desc">A segment stays inside a filled disk. In a region with an indentation, a segment joining two interior points leaves the region.</desc><circle cx="140" cy="110" r="80" fill="currentColor" fillOpacity=".06"/><path d="M85 140 195 80"/><circle cx="85" cy="140" r="4" fill="currentColor"/><circle cx="195" cy="80" r="4" fill="currentColor"/><path d="M345 35H540V190H485V90H400V190H345Z" fill="currentColor" fillOpacity=".06"/><path d="M370 145H515" strokeDasharray="5 5"/><circle cx="370" cy="145" r="4" fill="currentColor"/><circle cx="515" cy="145" r="4" fill="currentColor"/><g fill="currentColor" stroke="none" fontFamily="Georgia" fontSize="18"><text x="100" y="235">Convex</text><text x="392" y="235">Not convex</text></g></svg><figcaption>Schematic: convexity requires every segment between points in the set to remain in the set.</figcaption></figure>
<p><MathText>{"The empty set is convex because there are no pairs of points violating the condition. A singleton is convex as well. Unlike a subspace, a convex set need not contain zero or be closed under arbitrary scalar multiplication."}</MathText></p></section>
<section id="combinations" className={styles.section}><span className={styles.sectionNumber}>07 / LECTURE 2</span><h2>Finite convex combinations</h2><NoteBox kind="definition" title="Convex combination"><p><MathText>{"A convex combination is a finite linear combination whose coefficients are nonnegative real numbers and sum to one."}</MathText></p><Equation>{"\\sum_{j=1}^{n}\\alpha_jx_j,\\qquad \\alpha_j\\geq0,\\qquad \\sum_{j=1}^{n}\\alpha_j=1,\\qquad n\\geq1."}</Equation></NoteBox>
<p><MathText>{"Each coefficient automatically lies in $[0,1]$. If $C$ is convex and all $x_j$ belong to $C$, every such convex combination belongs to $C$. The two-point definition is enough to guarantee this for any finite number of points."}</MathText></p>
<h3>Proof by induction</h3>
<p><MathText>{"For one point the conclusion is immediate. For two points, $\\alpha_2=1-\\alpha_1$, so the conclusion is exactly the definition of convexity. Assume it holds for combinations of $n$ points and consider $n+1$ points."}</MathText></p>
<p><MathText>{"If $\\alpha_1=1$, all the remaining coefficients vanish and the combination is simply $x_1\\in C$. If $\\alpha_1<1$, define"}</MathText></p>
<Equation>{"u=\\sum_{j=2}^{n+1}\\frac{\\alpha_j}{1-\\alpha_1}x_j."}</Equation>
<p><MathText>{"These new coefficients are nonnegative and sum to one, since $\\sum_{j=2}^{n+1}\\alpha_j=1-\\alpha_1$. The induction hypothesis therefore gives $u\\in C$. Now rewrite the original combination as"}</MathText></p>
<Equation>{"\\sum_{j=1}^{n+1}\\alpha_jx_j=\\alpha_1x_1+(1-\\alpha_1)u\\in C."}</Equation>
<p><MathText>{"This is a convex combination of two points in $C$, completing the induction. The separate case $\\alpha_1=1$ is necessary to avoid division by zero."}</MathText></p></section>
<section id="convex-operations" className={styles.section}><span className={styles.sectionNumber}>08 / LECTURE 2</span><h2>Subspaces, sums, intersections and unions</h2><h3>Every linear subspace is convex</h3>
<p><MathText>{"If $Y$ is a linear subspace and $x,u\\in Y$, both $tx$ and $(1-t)u$ lie in $Y$, so their sum lies in $Y$. Thus the convexity condition holds. The converse fails: a filled disk is convex but is not a linear subspace."}</MathText></p>
<h3>The sum of two convex sets is convex</h3>
<p><MathText>{"Let $A,B\\subseteq X$ be convex. Their sum is $A+B=\\{a+b:a\\in A,\\ b\\in B\\}$. Take $z_1,z_2\\in A+B$ and write $z_i=a_i+b_i$, where $a_i\\in A$ and $b_i\\in B$. For $0\\leq t\\leq1$,"}</MathText></p>
<Equation>{"tz_1+(1-t)z_2=\\bigl(ta_1+(1-t)a_2\\bigr)+\\bigl(tb_1+(1-t)b_2\\bigr)."}</Equation>
<p><MathText>{"The first bracket belongs to $A$ and the second to $B$. Their sum belongs to $A+B$, proving convexity. If either set is empty, the sum is empty and is still convex."}</MathText></p>
<h3>Any intersection of convex sets is convex</h3>
<p><MathText>{"Let $C=\\bigcap_{\\theta\\in I}C_\\theta$, where each $C_\\theta$ is convex and the index set $I$ is arbitrary. If $x,u\\in C$, then both points belong to every $C_\\theta$. Hence $tx+(1-t)u$ belongs to every $C_\\theta$, and so belongs to their intersection."}</MathText></p>
<p><MathText>{"The intersection may be empty, which causes no problem for convexity. With the ambient-space convention, an intersection over an empty index set equals $X$ and is also convex."}</MathText></p>
<h3>The union of a chain of convex sets is convex</h3>
<p><MathText>{"Assume the family is totally ordered by inclusion: for any two indices, one of the corresponding sets is contained in the other. Let $C=\\bigcup_{\\theta\\in I}C_\\theta$ and choose $x,u\\in C$. There are indices $\\theta_1,\\theta_2$ with $x\\in C_{\\theta_1}$ and $u\\in C_{\\theta_2}$."}</MathText></p>
<p><MathText>{"After interchanging indices if necessary, assume $C_{\\theta_1}\\subseteq C_{\\theta_2}$. Both points then lie in the convex set $C_{\\theta_2}$, so their whole segment lies in $C_{\\theta_2}\\subseteq C$. Thus $C$ is convex."}</MathText></p>
<NoteBox kind="definition" title="The chain condition is essential"><p><MathText>{"The proof works because any two selected points can be placed in one common member of the family. An arbitrary union of convex sets need not be convex."}</MathText></p></NoteBox></section>
<section id="convex-maps" className={styles.section}><span className={styles.sectionNumber}>09 / LECTURE 2</span><h2>Linear images and preimages preserve convexity</h2><p><MathText>{"Let $T:X\\to W$ be a linear map between real linear spaces. Linearity preserves the coefficients of a convex combination:"}</MathText></p>
<Equation>{"T(tx+(1-t)u)=tT(x)+(1-t)T(u)."}</Equation>
<h3>Images</h3>
<p><MathText>{"Let $C\\subseteq X$ be convex. Given $z_1,z_2\\in T(C)$, choose $x_1,x_2\\in C$ with $T(x_i)=z_i$. Convexity gives $tx_1+(1-t)x_2\\in C$. Applying $T$ yields"}</MathText></p>
<Equation>{"tz_1+(1-t)z_2=T(tx_1+(1-t)x_2)\\in T(C)."}</Equation>
<p><MathText>{"Therefore $T(C)$ is convex."}</MathText></p>
<h3>Preimages</h3>
<p><MathText>{"Let $D\\subseteq W$ be convex and take $x_1,x_2\\in T^{-1}(D)$. Then $T(x_1),T(x_2)\\in D$, and convexity of $D$ gives"}</MathText></p>
<Equation>{"T(tx_1+(1-t)x_2)=tT(x_1)+(1-t)T(x_2)\\in D."}</Equation>
<p><MathText>{"This says precisely that $tx_1+(1-t)x_2\\in T^{-1}(D)$. Therefore the preimage is convex. No inverse map is required; if the preimage is empty it remains convex."}</MathText></p></section>
<section id="hull" className={styles.section}><span className={styles.sectionNumber}>10 / LECTURE 2</span><h2>The convex hull</h2><p><MathText>{"Let $S\\subseteq X$ be any subset of a real linear space. To construct the smallest convex set containing $S$, intersect every convex set that contains it."}</MathText></p>
<NoteBox kind="definition" title="Convex hull"><Equation>{"\\operatorname{co}(S)=\\bigcap\\{C\\subseteq X:C\\text{ is convex and }S\\subseteq C\\}."}</Equation></NoteBox>
<p><MathText>{"The family being intersected is nonempty because $X$ itself is convex and contains $S$. Three properties characterize the result:"}</MathText></p>
<ul className={styles.takeaways}><li><strong>Convexity.</strong> <MathText>{"An intersection of convex sets is convex, so $\\operatorname{co}(S)$ is convex."}</MathText></li><li><strong>Containment.</strong> <MathText>{"Every set in the defining family contains $S$, hence their intersection contains $S$."}</MathText></li><li><strong>Minimality.</strong> <MathText>{"If $C$ is convex and $S\\subseteq C$, then $C$ is one of the sets being intersected, so $\\operatorname{co}(S)\\subseteq C$."}</MathText></li></ul>
<p><MathText>{"Thus “smallest” means contained in every convex set containing $S$. This is the convex analogue of the smallest-subspace description of the linear span."}</MathText></p></section>
<section id="hull-proof" className={styles.section}><span className={styles.sectionNumber}>11 / LECTURE 2</span><h2>The hull consists of finite convex combinations</h2><NoteBox kind="result" title="Explicit description of the convex hull"><Equation>{"\\operatorname{co}(S)=\\left\\{\\sum_{j=1}^{n}\\alpha_jx_j:n\\geq1,\\ x_j\\in S,\\ \\alpha_j\\geq0,\\ \\sum_{j=1}^{n}\\alpha_j=1\\right\\}."}</Equation></NoteBox>
<p><MathText>{"Call the set on the right $Z$. We prove that $Z$ is convex, contains $S$, and is contained in every convex set containing $S$."}</MathText></p>
<h3>Step 1 — Z is convex</h3>
<p><MathText>{"Take $z_1,z_2\\in Z$ and write their convex-combination representations as"}</MathText></p>
<Equation>{"z_1=\\sum_{j=1}^{n}a_jx_j,\\qquad z_2=\\sum_{k=1}^{m}b_ky_k,"}</Equation>
<p><MathText>{"where all the points lie in $S$, the coefficients are nonnegative, and $\\sum_j a_j=\\sum_k b_k=1$. For $0\\leq t\\leq1$,"}</MathText></p>
<Equation>{"tz_1+(1-t)z_2=\\sum_{j=1}^{n}(ta_j)x_j+\\sum_{k=1}^{m}((1-t)b_k)y_k."}</Equation>
<p><MathText>{"Every new coefficient is nonnegative. Their total is"}</MathText></p>
<Equation>{"\\sum_{j=1}^{n}ta_j+\\sum_{k=1}^{m}(1-t)b_k=t+(1-t)=1."}</Equation>
<p><MathText>{"The result is therefore another finite convex combination of points of $S$, so it belongs to $Z$. This proves that $Z$ is convex."}</MathText></p>
<h3>Step 2 — Z contains S</h3>
<p><MathText>{"For every $x\\in S$, the one-term combination $x=1x$ belongs to $Z$. Thus $S\\subseteq Z$. Since $Z$ is convex and contains $S$, minimality of the convex hull gives $\\operatorname{co}(S)\\subseteq Z$."}</MathText></p>
<h3>Step 3 — Every convex set containing S contains Z</h3>
<p><MathText>{"If $C$ is convex and contains $S$, it contains every finite convex combination of points of $S$, by the induction result. Those combinations are exactly the elements of $Z$. Thus $Z\\subseteq C$ for every such $C$, and hence $Z\\subseteq\\operatorname{co}(S)$."}</MathText></p>
<p><MathText>{"Combining the two inclusions proves equality. The intersection definition supplies the minimality property; the combination formula tells us exactly which points the hull contains."}</MathText></p>
<p><MathText>{"For $S=\\varnothing$, there are no combinations with $n\\geq1$, so $Z=\\varnothing$. The empty set is convex and contains $S$, giving $\\operatorname{co}(\\varnothing)=\\varnothing$. This differs from the linear span, where the empty sum supplies the zero vector."}</MathText></p></section>
<section id="remember" className={styles.section}><span className={styles.sectionNumber}>12 / REVISION</span><h2>Main results to remember</h2><NoteBox kind="definition" title="Quotient spaces"><ul className={styles.takeaways}><li><strong>Equivalence.</strong> <MathText>{"$x\\sim u$ precisely when $x-u\\in Y$. Each class is the translate $[x]=x+Y$."}</MathText></li><li><strong>Operations.</strong> <MathText>{"$[x]+[u]=[x+u]$ and $\\alpha[x]=[\\alpha x]$ are independent of representatives. The zero class is $Y$."}</MathText></li></ul></NoteBox>
<NoteBox kind="definition" title="Linear maps"><ul className={styles.takeaways}><li><strong>Structure.</strong> <MathText>{"A linear map preserves addition and scalar multiplication over a common scalar field. A bijective linear map is an isomorphism."}</MathText></li><li><strong>Subspaces.</strong> <MathText>{"Linear images and preimages of subspaces are subspaces. Preimages do not require an inverse map."}</MathText></li></ul></NoteBox>
<NoteBox kind="definition" title="Convexity and convex hulls"><ul className={styles.takeaways}><li><strong>Coefficients.</strong> <MathText>{"Convex combinations use nonnegative real coefficients whose sum is one. Every convex set contains all finite convex combinations of its points."}</MathText></li><li><strong>Set operations.</strong> <MathText>{"Subspaces are convex. Sums, arbitrary intersections and unions of chains preserve convexity; arbitrary unions need not."}</MathText></li><li><strong>Maps.</strong> <MathText>{"Linear images and preimages preserve convexity."}</MathText></li><li><strong>Hull.</strong> <MathText>{"$\\operatorname{co}(S)$ is the smallest convex set containing $S$, and consists exactly of finite convex combinations of points of $S$."}</MathText></li></ul></NoteBox></section>
<div className={styles.lessonSources}><p>Independent study notes based on Claudio Landim’s <a href="https://www.youtube.com/watch?v=Hb9bCMB7KS8">IMPA Functional Analysis Lecture 2</a>, with supporting algebra and explanations. Source: available English auto-generated captions; board notation has not been independently verified. <a href="https://www.youtube.com/playlist?list=PLo4jXE-LdDTTIIIRwqK35CbFJieSJEcVR">Course playlist</a>.</p></div>
<nav className={styles.lessonEnd} aria-label="Lesson navigation"><Link href="/notes/mathematics/functional-analysis/linear-spaces">Previous: Linear spaces</Link><Link href="/notes/mathematics/functional-analysis">Functional Analysis contents</Link><Link href="/notes/mathematics/functional-analysis/normed-linear-spaces">Next: Normed linear spaces</Link></nav>
</article><aside className={styles.toc}><nav aria-label="On this page"><p className={styles.label}>In this lecture</p><ol><li><a href="#equivalence">Equivalence modulo a subspace</a></li><li><a href="#quotient">Classes and the quotient space</a></li><li><a href="#well-defined">Why the quotient operations are well defined</a></li><li><a href="#linear-maps">Linear maps and isomorphisms</a></li><li><a href="#subspace-images">Images and preimages of subspaces</a></li><li><a href="#convexity">Convex sets</a></li><li><a href="#combinations">Finite convex combinations</a></li><li><a href="#convex-operations">Subspaces, sums, intersections and unions</a></li><li><a href="#convex-maps">Linear images and preimages preserve convexity</a></li><li><a href="#hull">The convex hull</a></li><li><a href="#hull-proof">The hull consists of finite convex combinations</a></li><li><a href="#remember">Main results to remember</a></li></ol></nav></aside></div>
</div>;
}

