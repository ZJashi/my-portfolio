import { p, eq, box, list, exercise, type Section } from "./content-model";
export const entries: Section[] = [
  {
    id: "appendices",
    title: "The appendices and the half-chain SPT example",
    source: "§ IV, Theorem IV.3; Appendices A–E · pp. 24–25, 37–50",
    page: 24,
    blocks: [
      list(
        [
          "Appendix A proves that an extension of a pure marginal factors. This explains why strong and weak symmetry agree for pure states.",
          "Appendix B tracks canonical purification under an automorphism. Weak invariance produces a simultaneous conjugate/original symmetry on the two copies, whereas strong symmetry supplies the more restrictive one-sided symmetry.",
          "Appendix C extends the definitions to fermionic observable algebras. Tensor products and commutants must respect parity; ordinary commuting spin-system formulas cannot simply be copied.",
          "Appendix D develops projective representations and group cohomology. Its ray obstruction concerns pure invariant rays; it does not rule out weakly invariant mixed states.",
          "Appendix E constructs the anomaly from half-chain boundary corrections and specifies locality-preserving actions with tails. It supplies the hypotheses behind the one-dimensional LSM discussion.",
        ],
        true,
      ),
      p(
        "For the fermionic extension, write $|a|\\in\\{0,1\\}$ for parity. Swapping homogeneous odd operators incurs a minus sign. In particular the graded tensor product multiplies as:",
      ),
      eq(
        "(a_1\\widehat\\otimes b_1)(a_2\\widehat\\otimes b_2)=(-1)^{|b_1||a_2|}(a_1a_2)\\widehat\\otimes(b_1b_2).",
      ),
      p(
        "The appendix takes physical states to be parity invariant and symmetries to preserve the grading. The resulting symmetry implementer is even. This is why the strong-symmetry and fidelity arguments can be adapted once the graded definitions are in place. The graded center, however, need not equal the ordinary center. The appendix gives a two-block algebra whose grading exchanges the blocks: its ordinary center is two-dimensional but its graded center is scalar.",
      ),
      p(
        "A useful main-text example starts from a symmetric pure short-range-entangled state and restricts it to a half-chain. Theorem IV.3 says the half-chain symmetry is vN. For it to be strong, the parent SPT index must be trivial. The converse fails: a trivial SPT need not have a strongly symmetric half-chain state.",
      ),
      p(
        "A singlet crossing the cut makes the failure tangible. The parent can be a product away from two spins straddling the cut. Their singlet is invariant under simultaneous rotations, but the reduced spin is maximally mixed. Acting on only that spin gives weak invariance without a fixed charge sector. Local entanglement across the boundary can prevent strong half-chain symmetry even though there is no nontrivial bulk SPT index.",
      ),
      p(
        "In a factor representation the two factors of a vN implementation are defined up to reciprocal scalar phases. As the group varies, the system-side factors can therefore form a projective representation. Its degree-two class captures the SPT edge information in the split setting. This is distinct from the degree-three anomaly obstructing a split symmetric chain state.",
      ),
    ],
  },
  {
    id: "review",
    title: "Checks, qualifications, and questions to carry forward",
    source: "Reading synthesis · § II F, § IV, § VI, § IX",
    page: 36,
    blocks: [
      p(
        "The notes above explain the paper’s main logical routes and provide separate calculations. They are a reading companion, not an independent verification of every operator-algebraic lemma. In particular, the split/separability wording flagged above should be resolved before using Lemma VI.2 as a premise in another argument.",
      ),
      p(
        "Another proof detail to check is Theorem IV.2: the supplied version argues from faithfulness on the quasi-local algebra to a separating GNS vector for its von Neumann closure by invoking strong density. Strict positivity on the smaller algebra does not by itself make that passage automatic. The notes rely on the direct tracial-state calculation rather than this step for their central counterexample. A precise normal-faithfulness or separating-vector hypothesis would make the displayed implication to absence of nontrivial strong symmetry immediate.",
      ),
      list([
        "Which finite-region fidelities can be computed for a concrete model, and how do they scale with region size? The theorem gives a limiting criterion, not a convergence rate.",
        "Which symmetry action is being tested: on-site internal symmetry, translation, or a mixed action? Their strong and vN restrictions have very different consequences.",
        "Does a proposed numerical test distinguish limiting states or merely distinguish finite-size families approaching the same local state?",
        "When applying an LSM result, are clustering, splitting, locality, regularity, and anomaly assumptions all established?",
        "For a dynamical example, is the dilation strongly symmetric under system-only symmetry, or is the reduced channel merely covariant?",
        "Can the apparent separability claim in § VI be reformulated in terms of normality or quasi-equivalence, without asserting an actual convex product decomposition? These notes leave that question open.",
      ]),
      box(
        "The takeaway",
        "A finite global charge-sector condition is not enough to define strong symmetry of an infinite local state. The paper replaces it with an extension-invariant, representation-theoretic condition and connects it to charged-operation fidelity. That framework supports both a restricted dynamical irreversibility and one-dimensional anomaly obstructions.",
      ),
      exercise(
        "Reconstruct the argument without the terminology",
        "Explain in three steps why the global-parity example and the cluster-state bath example are parts of the same story.",
        "First, a finite parity-projected state can be indistinguishable from the maximally mixed state on every proper subsystem. Second, their local infinite-volume state is therefore the same tracial state, which fails the charged-operation fidelity test. Third, a charge-conserving bath construction can leave precisely such a global finite-size constraint while producing that tracial local limit. The finite and infinite symmetry statements refer to different retained data.",
      ),
    ],
  },
];
