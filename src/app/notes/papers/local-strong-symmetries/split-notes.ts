import { p, eq, box, type Section } from "./content-model";
export const entries: Section[] = [
  {
    id: "split",
    title: "The split property and information across a cut",
    source: "§ VI · pp. 28–29",
    page: 28,
    blocks: [
      p(
        "From this point the spatial setting is a one-dimensional spin chain. Cut it into left and right half-chains. Their observable algebras tensor-factorize, but the state’s infinite-volume representation need not have the benign tensor structure familiar from finite-dimensional quantum mechanics.",
      ),
      box(
        "Split property — Definition VI.1",
        "A factor state is split when $\\psi\\sim\\psi_L\\otimes\\psi_R$, where $\\sim$ denotes quasi-equivalence of representations. This is not equality of states and is not a statement that correlations across the cut vanish.",
      ),
      p(
        "Quasi-equivalence identifies representations with the same normal state space, through an isomorphism of the generated von Neumann algebras matching represented observables. It is weaker than unitary equivalence of the full GNS triples. It must not be confused with finite-depth circuit equivalence or equality of phases.",
      ),
      eq(
        "I_\\psi(\\Gamma:\\Gamma^c)=S(\\psi\\Vert\\psi_\\Gamma\\otimes\\psi_{\\Gamma^c})\\le C_\\psi\\quad\\text{for every finite interval }\\Gamma.",
      ),
      p(
        "Proposition VI.1 gives a sufficient condition: a factor state with this uniform mutual-information area law is split. The constant cannot grow with interval length. Relative entropy, rather than separate infinite entropies, defines the expression safely. Mutual information includes both classical and quantum correlations; for a mixed state it is not simply twice an entanglement entropy.",
      ),
      p(
        "Proof outline. Let the right interval grow to the right half-chain while comparing the original state with the product of its interval and complementary restrictions. Lower semicontinuity bounds the relative entropy to $\\psi_L\\otimes\\psi_R$ by the same constant. For factor states, representations are either quasi-equivalent or disjoint; the finite relative entropy excludes disjointness. Hence the split property follows. The later anomaly argument uses this route, not a claim that all split states are unentangled.",
      ),
      box(
        "Reading check: split does not mean separable",
        "Definition VI.2 and Lemma VI.2 in the attached v3 identify splitting with a countable convex mixture of product states. As written, this conflicts with an entangled Bell pair across the cut surrounded by pure product spins: it is a split pure state, but cannot be a convex mixture of product states. A Schmidt expansion of a vector is not a convex product decomposition of its density matrix. These notes do not use that asserted equivalence.",
      ),
      p(
        "For the Bell-pair check, the finite entangled pair changes only a bounded neighborhood of the cut. It can be described on the usual left/right tensor-product representation, so splitting is intact. Its restriction to the two crossing spins is an entangled rank-one projector. If the whole state were a convex product mixture, that two-spin restriction would be separable, which is impossible. This is a concrete qualification of the wording in the supplied version, not a proposed replacement proof of the paper’s results.",
      ),
    ],
  },
  {
    id: "anomaly",
    title: "Projective representations and the anomaly index",
    source: "Appendices D–E · pp. 46–50",
    page: 46,
    blocks: [
      p(
        "Before the LSM theorem, distinguish two cohomological degrees. A projective representation multiplies correctly only up to a scalar phase. Associativity forces its phases to satisfy the 2-cocycle identity:",
      ),
      eq("u_gu_h=c(g,h)u_{gh},\\qquad c(g,h)c(gh,k)=c(g,hk)c(h,k)."),
      p(
        "Changing the phase convention $u_g\\mapsto\\eta(g)u_g$ multiplies $c$ by $\\eta(g)\\eta(h)/\\eta(gh)$, a coboundary. Thus the invariant is the class $[c]\\in H^2(G;U(1))$, not the values of a chosen cocycle. A nontrivial class obstructs an invariant one-dimensional ray: its symmetry phases would otherwise trivialize the cocycle.",
      ),
      p(
        "For an elementary example, take two commuting generators of $\\mathbb Z_2\\times\\mathbb Z_2$ represented by anticommuting Pauli matrices. Rephasing either generator does not remove that anticommutation. This is the projective obstruction that can appear on an SPT edge. It does not forbid invariant mixed density matrices: the identity matrix remains invariant under conjugation.",
      ),
      p(
        "The chain anomaly is one degree higher. After the locality and index adjustments described in Appendix E, restrict the symmetry to the right half-chain. The restricted transformations need not multiply exactly; they agree up to conjugation by boundary unitaries:",
      ),
      eq(
        "\\alpha_g^R\\alpha_h^R=\\operatorname{Ad}_{V_{g,h}}\\,\\alpha_{gh}^R.",
      ),
      p(
        "Associating a triple product in two ways leaves a scalar discrepancy. In the paper’s convention a representative is:",
      ),
      eq(
        "\\omega_{g,h,k}=V_{g,h}V_{gh,k}V_{g,hk}^{-1}\\,\\alpha_g^R(V_{h,k})^{-1}.",
      ),
      p(
        "This is a 3-cocycle. Rephasing the boundary choices changes it by a 3-coboundary, so the invariant is $[\\omega]\\in H^3(G;U(1))$. A nontrivial class means that boundary composition cannot be made consistently trivial by these choices. It is an obstruction associated with the symmetry action and locality, not a failure of associativity of physical operators.",
      ),
      p(
        "Translation and nonzero locality-flow indices require the stacking construction discussed in the paper. Smooth compact Lie-group actions require the corresponding regularity assumptions. These notes explain the mechanism but do not reproduce a full classification or calculate a particular microscopic chain’s anomaly index.",
      ),
    ],
  },
  {
    id: "lsm",
    title: "The mixed-state LSM constraints",
    source: "Theorems VII.1–VII.2; Corollaries VII.1, VII.3 · pp. 29–32",
    page: 29,
    blocks: [
      box(
        "The incompatibility theorem",
        "For the admissible locality-preserving group action on a one-dimensional quantum spin chain, the following cannot all hold: the state is clustering, it is split, every group element is a vN symmetry, and the action has nontrivial anomaly class. Strong symmetry is a special case.",
      ),
      p(
        "This is an incompatibility statement, not a unique prediction of the resulting phase. If the symmetry is anomalous and is imposed in the stated vN sense, the state must fail clustering or splitting. With an assumed uniform mutual-information area law, Proposition VI.1 supplies splitting, so that package is excluded as well.",
      ),
      p(
        "For strong symmetry the proof is particularly economical. A clustering state is a factor state, so its canonical purification is pure. Lemma VI.1 transfers the split property to that purification. Strong symmetry makes the purified state invariant under the action on the system copy alone. That one-sided action retains the original anomaly. The known pure-state split-versus-anomaly obstruction then gives a contradiction.",
      ),
      p(
        "Why not apply the symmetry on both copies? Every weakly symmetric state has a canonical doubling invariant under the conjugate action on one copy together with the original action on the other. Those two anomaly contributions cancel. Strong symmetry is useful precisely because it supplies the one-sided invariant action, where the anomaly is still present.",
      ),
      p(
        "The vN proof instead works with half-chain implementers. Splitting makes the left/right von Neumann structure manageable. Since the action is inner there, choose implementing unitaries $U_g$ in the right algebra. Comparing $U_gU_h$ with the boundary correction $V_{g,h}U_{gh}$ produces an operator in both the algebra and its commutant. Factoriality forces it to be a scalar phase. Substitution into the associator expresses $\\omega$ as a coboundary, contradicting the nontrivial anomaly class.",
      ),
      p(
        "The mixed strong–weak versions matter because demanding vN translation symmetry would already force a factor state to be pure. Let $G$ act weakly and $H$ act strongly, or in the generalized result vN. The obstruction applies when the anomaly on $G\\times H$ has a component not attributable solely to $G$. Technically the relevant class survives after quotienting out the classes pulled back from $H^3(G;U(1))$.",
      ),
      box(
        "What the theorem does not say",
        "Weak invariance by itself is insufficient: a maximally mixed state can be weakly invariant without carrying a nontrivial strong or vN symmetry of the required kind. Nor does failure of splitting alone prove a Hamiltonian is gapless; the theorem concerns states and symmetry actions under its stated hypotheses.",
      ),
    ],
  },
  {
    id: "dynamics",
    title: "Bath evolutions and an irreversible direction",
    source:
      "§ VIII, Definitions VIII.1–VIII.2 and Proposition VIII.2 · pp. 33–35",
    page: 33,
    blocks: [
      p(
        "A general open-system evolution is described in the Heisenberg picture by a unital completely positive map $E$ on observables. The state evolves as $\\psi\\mapsto\\psi\\circ E$. The paper restricts to bath evolutions admitting a specific dilation: append a bath, apply an automorphism of the joint algebra, and evaluate the bath in its initial state.",
      ),
      eq(
        "E=(\\mathrm{id}_{\\mathcal A}\\otimes\\Phi_{\\mathcal B})\\circ\\beta\\circ\\iota,\\qquad \\iota(a)=a\\otimes1.",
      ),
      p(
        "In finite dimensions a unitary dilation gives this familiar system–environment description. For infinite algebras, the authors do not identify every UCP map with an allowed bath evolution. The selected class has a physically interpretable reversible joint dynamics, even though the reduced evolution need not be invertible.",
      ),
      p(
        "Weakly symmetric evolution commutes with the symmetry action. Strongly symmetric bath evolution has a dilation in which the joint automorphism commutes with symmetry acting on the system alone:",
      ),
      eq(
        "\\beta\\circ(\\alpha\\otimes\\mathrm{id}_{\\mathcal B})=(\\alpha\\otimes\\mathrm{id}_{\\mathcal B})\\circ\\beta.",
      ),
      box(
        "One-way constraint — Proposition VIII.2",
        "If $\\psi$ lacks strong symmetry and $E$ is a strongly symmetric bath evolution, then $\\psi\\circ E$ also lacks strong symmetry. Strong symmetry cannot be created by this class of evolution. It can be lost in the infinite-volume setting.",
      ),
      p(
        "Proof mechanism. Failure of strong symmetry means some extension $\\Psi$ is not invariant under system-only symmetry. Append the channel’s bath and evolve this enlarged extension by the dilation. Since the dilation is invertible and commutes with that symmetry, it cannot turn this noninvariant joint state into an invariant one. The evolved joint state is an extension of the output, so the output fails the every-extension definition too. Keeping the dilation bath is essential; the reduced extension after tracing it out need not itself retain the witness.",
      ),
      p(
        "The example uses two staggered infinite spin chains, system and bath, initially in $|+\\rangle$ at every site. Apply controlled-$Z$ gates between each system spin and its two nearest bath neighbors. The combined state is a cluster state. Its system marginal is locally tracial. The initial system state is strongly symmetric under the global on-site $X$ action, and the bath evolution is strongly symmetric in the stated sense, but the final infinite local state is only weakly symmetric.",
      ),
      p(
        "There is no conflict with finite charge conservation. On a suitable finite periodic chain the system output retains its global parity constraint. Its local limit is precisely the kind of tracial state encountered at the beginning. Finite-size strong symmetry is preserved while infinite-volume strong symmetry can disappear. This example joins the paper’s opening calculation to its dynamical conclusion.",
      ),
      p(
        "The arrow of time is restricted to this class of dynamics and this thermodynamic notion of symmetry. It is not a blanket assertion that arbitrary quantum operations can never prepare a strongly symmetric state. A two-way connection by strongly symmetric bath evolutions preserves the presence or absence of strong symmetry, because applying the one-way obstruction in both directions excludes a mismatch.",
      ),
    ],
  },
  {
    id: "phases",
    title: "Local generation and nontrivial mixed-state phases",
    source: "Definitions VIII.3–VIII.6 and Proposition VIII.3 · pp. 35–36",
    page: 35,
    blocks: [
      p(
        "Bath evolutions alone are broad. To define phases, the paper further controls spatial locality through locally generated automorphisms: finite-time evolutions produced by time-dependent almost-local Hamiltonians. Their interaction tails decay faster than every power. Lieb–Robinson control makes their action on the infinite observable algebra well-defined.",
      ),
      p(
        "A locally generated channel is a bath evolution with such a locally generated dilation. Two states are in the same phase, in the paper’s definition, when each can be obtained from the other by allowed locally generated channels. For symmetry-protected questions, the corresponding strong or weak symmetry restriction is imposed on those channels.",
      ),
      eq("\\psi_1=\\psi_2\\circ E,\\qquad \\psi_2=\\psi_1\\circ E'."),
      p(
        "The two-way requirement matters: one-way information loss is common and cannot by itself establish phase equivalence. A state is in a trivial phase when it has a two-way connection to a possibly mixed product state. Keep this separate from a pure short-range-entangled state, for which the usual finite-time locally generated reversible preparation is the relevant notion.",
      ),
      box(
        "Preparation obstruction — Proposition VIII.3",
        "In one dimension, a state with an anomalous symmetry in the paper’s vN sense cannot be locally generated from a product state by the allowed channels. In particular, it cannot belong to the trivial phase so defined.",
      ),
      p(
        "The proof route is: locally generated preparation from a product state yields a short-range-entangled purification; this gives clustering of the system state and an area-law bound on its mutual information. Restriction cannot increase relative entropy, so the bound survives tracing out the bath. Proposition VI.1 then yields splitting, and the vN LSM theorem contradicts the anomalous action.",
      ),
      p(
        "The conceptual payoff is that the obstruction can be phrased for mixed states without assigning them a ground-state wavefunction or assuming a particular Lindbladian. The cost is that the exact symmetry notion, allowed dynamics, and locality assumptions must stay attached to the claim.",
      ),
    ],
  },
];
