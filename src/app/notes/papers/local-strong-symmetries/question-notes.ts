import { p, eq, box, list, exercise, type Section } from "./content-model";
export const entries: Section[] = [
  {
    id: "question",
    title: "The question: what survives a local limit?",
    source: "§§ I–II C · pp. 2–7",
    page: 2,
    blocks: [
      p(
        "The paper studies symmetry in mixed quantum states, especially states of open many-body systems. A density matrix can be invariant under a symmetry while mixing different charge sectors. That is weaker than occupying a single symmetry sector. For a finite system these are straightforward matrix statements. The difficulty is deciding which distinction should survive when the system becomes infinite.",
      ),
      box(
        "The authors’ organizing principle",
        "Describe a thermodynamic state through its expectation values on every fixed finite region. A distinction that depends only on a constraint spanning the entire finite sample need not define a distinction between its infinite-volume states.",
      ),
      p(
        "This is a proposed framework for mixed-state phases, not a claim that global finite-size information is meaningless. The authors deliberately retain local expectation values as the state data. A global parity constraint can be physically real in each finite sample and yet disappear from this data in the thermodynamic limit.",
      ),
      p(
        "The central achievement is an infinite-volume definition of strong symmetry with several equivalent formulations: invariance of every extension, symmetry on one side of a canonical doubling, a condition on the GNS implementing unitary, and vanishing fidelity after a charged local operation. The last of these gives the phrase local charge coherence a precise meaning.",
      ),
      p(
        "The later applications concern one-dimensional spin chains: anomalous symmetry actions cannot coexist with certain short-range correlation properties, even for mixed states. The paper also distinguishes symmetry of a state from symmetry of a dynamical process. A process that conserves system charge can lose strong symmetry in its infinite-volume output.",
      ),
      list([
        "Prerequisites for the examples: density matrices, partial trace, Pauli matrices, and unitary symmetry.",
        "Prerequisites for the proofs: positive linear functionals, representations, commutants, and basic fidelity properties.",
        "Prerequisites for the anomaly sections: projective representations and the distinction between a cocycle and its cohomology class.",
      ]),
    ],
  },
  {
    id: "finite",
    title: "Weak and strong symmetry in finite dimensions",
    source: "§ I A and § II D · pp. 3–8",
    page: 3,
    blocks: [
      p(
        "Let a unitary $U$ act on a finite Hilbert space and let $\\rho$ be a normalized positive density matrix. Weak invariance means that conjugation leaves the density matrix unchanged. Strong symmetry asks that left multiplication already leaves it unchanged up to one phase:",
      ),
      eq(
        "U\\rho U^\\dagger=\\rho\\quad\\text{(weak)},\\qquad U\\rho=e^{i\\theta}\\rho\\quad\\text{(strong)}.",
      ),
      p(
        "Weak symmetry is equivalent to $[U,\\rho]=0$. It allows a block-diagonal mixture across different eigenspaces of $U$. Strong symmetry says that the entire support of $\\rho$ lies in one eigenspace. To see this, diagonalize $\\rho$: if $\\rho|j\\rangle=p_j|j\\rangle$ with $p_j>0$, the strong equation gives $U|j\\rangle=e^{i\\theta}|j\\rangle$. The converse follows by multiplying the spectral decomposition.",
      ),
      p(
        "For a group, this support condition must hold for every group element. The scalar phases on a nonzero invariant support obey the group multiplication law. The condition does not mean that every pure-state component is the same vector: a degenerate charge sector may contain a genuinely mixed state.",
      ),
      box(
        "Pure-state exception",
        "For a rank-one density matrix, weak invariance already implies that the state vector changes only by a phase. Strong and weak state symmetry therefore coincide for pure states.",
      ),
      p(
        "For a qubit with $U=X$, the maximally mixed state $I/2$ is weakly invariant, but $X(I/2)$ is not a scalar multiple of $I/2$. By contrast, $|+\\rangle\\langle+|$ is strongly symmetric because $X|+\\rangle=|+\\rangle$. Here $|\\pm\\rangle$ denote eigenvectors of $X$, not of $Z$.",
      ),
      exercise(
        "Check the support criterion",
        "Take $\\rho=p|+\\rangle\\langle+|+(1-p)|-\\rangle\\langle-|$. For which $p$ is the $X$ symmetry strong?",
        "It is weak for every $0\\le p\\le1$. It is strong only at $p=0$ or $p=1$, because the two eigenvalues of $X$ differ. This does not exclude mixed strong states in a larger, degenerate eigenspace.",
      ),
    ],
  },
  {
    id: "parity",
    title: "A global parity constraint that disappears locally",
    source: "§ I A, Eqs. (I.1)–(I.4) · pp. 3–4",
    page: 4,
    blocks: [
      p(
        "The opening example is the most useful calculation to do before reading the operator algebra. For $N$ spins set $X_N=X^{\\otimes N}$. The paper suppresses normalization in its introduction; the normalized states used here are:",
      ),
      eq("\\rho_{1,N}=\\frac{I}{2^N},\\qquad \\rho_{2,N}=\\frac{I+X_N}{2^N}."),
      p(
        "Since $X_N^2=I$ and $\\operatorname{Tr}X_N=0$, the second state is the normalized projector onto the $+1$ parity sector. It is positive, has trace one, and satisfies $X_N\\rho_{2,N}=\\rho_{2,N}$. The first state is only weakly symmetric.",
      ),
      p(
        "Now trace out one spin. The parity term vanishes because $\\operatorname{Tr}X=0$. More generally, for any proper subset $A$ of the chain:",
      ),
      eq(
        "\\operatorname{Tr}_{A^c}\\rho_{2,N}=\\frac{I_A}{2^{|A|}}=\\operatorname{Tr}_{A^c}\\rho_{1,N}.",
      ),
      p(
        "Equivalently, the expectation of every operator supported in a proper subset is identical in the two states. Fix a finite region first, then let $N$ grow: both sequences give the same infinite-volume tracial state. A local-state definition must assign the same symmetry status to their limits. In this paper that limit has weak symmetry but lacks the nontrivial global strong symmetry.",
      ),
      box(
        "Order of operations matters",
        "Taking the local thermodynamic limit and testing a finite-size global charge-sector constraint do not commute. A sequence can have strong symmetry at every finite size while its local limit lacks strong symmetry.",
      ),
      p(
        "Compare a different mixed state: group the lattice into pairs and place each pair in $p|++\\rangle\\langle++|+(1-p)|--\\rangle\\langle--|$. Each pair lies entirely in the $+1$ eigenspace of $X\\otimes X$. This is a local charge constraint, repeated throughout the lattice; the paper identifies its infinite product as strongly symmetric. Unlike the single global parity bit, its constraints remain visible in fixed finite regions.",
      ),
      exercise(
        "Two spins are enough to see the distinction",
        "Compute $\\langle X_1X_2\\rangle$ in the paired state, and compare it with the tracial state.",
        "In the paired state both $|++\\rangle$ and $|--\\rangle$ have pair parity $+1$, so the expectation is 1, independently of $p$. In the tracial state it is 0. A two-site measurement distinguishes these states, whereas no fixed proper subsystem distinguishes the two finite global-parity examples above.",
      ),
    ],
  },
  {
    id: "algebra",
    title: "States without an infinite density matrix",
    source: "§ II A–C and § III A · pp. 5–7, 12–13",
    page: 5,
    blocks: [
      p(
        "On a lattice $\\Lambda$, each site carries a finite matrix algebra. For a finite region $\\Gamma$, its observable algebra is the tensor product of the site algebras. An observable on a smaller region is identified with the same observable tensored with the identity on added sites.",
      ),
      eq(
        "\\mathcal A_\\Gamma=\\bigotimes_{i\\in\\Gamma}M_{n_i}(\\mathbb C),\\qquad \\mathcal A_\\ell=\\bigcup_{\\Gamma\\Subset\\Lambda}\\mathcal A_\\Gamma,\\qquad \\mathcal A=\\overline{\\mathcal A_\\ell}^{\\|\\cdot\\|}.",
      ),
      p(
        "The union uses those embeddings. Its norm completion is the quasi-local algebra. A quasi-local operator can be approximated arbitrarily well in operator norm by operators with finite support. This is different from saying that every operator acting on an infinite tensor-product Hilbert space is admissible.",
      ),
      box(
        "State as an expectation-value rule",
        "A state is a linear functional $\\psi:\\mathcal A\\to\\mathbb C$ satisfying $\\psi(1)=1$ and $\\psi(a^*a)\\ge0$. In finite dimensions it is $\\psi(a)=\\operatorname{Tr}(\\rho a)$. Positivity makes the same language meaningful without a single global trace-class density matrix.",
      ),
      p(
        "A pure state is an extreme point of this convex state space. It cannot be written as a nontrivial convex mixture of distinct states. Purity here is a statement about the whole observable algebra; a pure infinite-system state may still have mixed reduced states on every finite region.",
      ),
      p(
        "A symmetry is an automorphism $\\alpha$ preserving multiplication, adjoints, and the identity. An on-site symmetry conjugates a local operator by the product of unitaries on its support. Thus the action is defined without first defining an infinite product unitary. Translation is another automorphism, although it moves the support.",
      ),
      p(
        "A QCA has a uniform finite radius: an operator initially supported in $A$ is sent into a fixed-radius neighborhood of $A$. Appendix E later allows locality-preserving automorphisms with decaying approximation tails; for Lie-group actions the paper assumes the appropriate smooth almost-local setting. These locality assumptions matter in the anomaly results.",
      ),
      eq(
        "\\psi_m\\longrightarrow\\psi\\quad\\Longleftrightarrow\\quad \\psi_m(a)\\longrightarrow\\psi(a)\\ \\text{for every fixed }a\\in\\mathcal A_\\ell.",
      ),
      p(
        "For a finite-size sequence, an observable is evaluated only once the sample contains its support. The topology records all fixed-region expectation values. It does not retain a sequence of observables whose support grows with sample size. That is exactly why the global parity bit is lost. Infinite tensor-product Hilbert spaces can be constructed with additional choices; the point is that a single naive tensor product is not the natural universal starting point here.",
      ),
    ],
  },
  {
    id: "extensions",
    title: "Strong symmetry means every extension is invariant",
    source: "Definition II.5 and Theorem IV.1 · pp. 7, 20–22",
    page: 7,
    blocks: [
      p(
        "An extension places the system next to another observable algebra and specifies their joint state while retaining the original system marginal. The second system can store correlations invisible in that marginal. It is not required to start uncorrelated and need not be a particular laboratory bath.",
      ),
      eq(
        "\\Psi(1\\otimes a)=\\psi(a),\\qquad \\Psi:\\mathcal B\\otimes\\mathcal A\\to\\mathbb C.",
      ),
      box(
        "Infinite-volume strong symmetry",
        "A weakly invariant state $\\psi$ is strongly symmetric under $\\alpha$ if every allowed extension $\\Psi$ satisfies $\\Psi\\circ(\\mathrm{id}_{\\mathcal B}\\otimes\\alpha)=\\Psi$. The symmetry acts on the system alone, leaving the auxiliary system untouched.",
      ),
      p(
        "The quantifier every is essential. Finding one invariant extension proves very little: a product extension of a weakly invariant state is already invariant. Strong symmetry rules out any auxiliary record that exposes a failure of system-only invariance.",
      ),
      p(
        "For finite dimensions, purify $\\rho=\\sum_jp_j|j\\rangle\\langle j|$ as $|\\sqrt\\rho\\rangle=\\sum_j\\sqrt{p_j}|\\bar j\\rangle\\otimes|j\\rangle$. Invariance of its rank-one density matrix under $I\\otimes U$ means $(I\\otimes U)|\\sqrt\\rho\\rangle=e^{i\\theta}|\\sqrt\\rho\\rangle$. Comparing the orthogonal auxiliary components shows that all occupied eigenvectors of $\\rho$ carry the same phase. This recovers $U\\rho=e^{i\\theta}\\rho$.",
      ),
      p(
        "For a pure marginal, every extension factors as a product with an auxiliary state; Appendix A proves the algebraic version. Therefore weak invariance of a pure state automatically implies invariance of every extension. This is a useful consistency check on the definition.",
      ),
      p(
        "Theorem IV.1 makes the universal extension condition tractable by equating it with a condition on a canonical doubling and with the GNS criterion below. The canonical doubled state need not be pure for an arbitrary nonfactor state. For factor states, the canonical construction in § IV is a pure, exact, positive doubling. Do not import finite-dimensional freedom between all purifications into the infinite local setting without checking the representation.",
      ),
    ],
  },
];
