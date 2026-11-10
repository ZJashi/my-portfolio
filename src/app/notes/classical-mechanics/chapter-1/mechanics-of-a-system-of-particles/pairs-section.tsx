import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import styles from "../../../notes.styles";
export function PairsSection() {
  return (
    <section id="pairs" className={styles.section}>
      <span className={styles.sectionNumber}>
        06 / COUNT EACH INTERACTION ONCE
      </span>
      <h2>Build the potential from pairs.</h2>
      <p>
        For a conservative central interaction, a pair potential depends only on
        the separation sᵢⱼ. The gradient with respect to each particle’s
        position generates equal, opposite, central forces.
      </p>
      <Equation>{String.raw`s_{ij}=|\mathbf r_i-\mathbf r_j|,\qquad \mathbf f_{ij}=-\nabla_i V_{ij}(s_{ij})=-V'_{ij}(s_{ij})\frac{\mathbf r_i-\mathbf r_j}{s_{ij}}`}</Equation>
      <p>
        Because the derivatives with respect to the two positions have opposite
        signs, fⱼᵢ = −fᵢⱼ. Their pair work is −dVᵢⱼ. For example, gravity has
        Vᵢⱼ = −Gmᵢmⱼ/sᵢⱼ and gives an attractive force.
      </p>
      <Equation>{String.raw`V=\sum_i V_i^{\mathrm{ext}}+\sum_{i<j}V_{ij}=\sum_i V_i^{\mathrm{ext}}+\frac12\sum_i\sum_{j\ne i}V_{ij}`}</Equation>
      <p>
        The factor ½ corrects double counting in the ordered double sum: it
        contains both (i, j) and (j, i). Three particles have three distinct
        pairs, not six.
      </p>
      <p>
        If all the forces are obtained from this time-independent potential and
        no other forces do work, the mechanical energy is conserved.
      </p>
      <NoteBox kind="law" title="Conservation of mechanical energy">
        <Equation>{String.raw`E=T+V=\text{constant}`}</Equation>
        <p>
          For the stated <strong>time-independent potential</strong>, with no
          additional nonconservative work.
        </p>
      </NoteBox>
      <div className={styles.callout}>
        <strong>Rigid does not mean “no kinetic energy.”</strong>
        <p>
          In a rigid body, every interparticle distance stays fixed. For central
          pair forces, the relative displacement is perpendicular to that pair’s
          force, so total internal pair work is zero. Distance-dependent
          internal potential is constant and its value can be absorbed into the
          energy zero. Rotation and translation can still carry kinetic energy.
        </p>
      </div>
      <p>
        These are assumptions about the force model. A more general interaction
        need not be a sum of distance-only pair potentials. Explicit time
        dependence or nonconservative work also requires an energy balance
        rather than the constant-E statement.
      </p>
    </section>
  );
}
