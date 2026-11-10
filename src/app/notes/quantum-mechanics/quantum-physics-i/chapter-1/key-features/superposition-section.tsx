import { NoteBox } from "@/components/notes/NoteBox";
import { Equation } from "@/components/notes/Equation";
import styles from "../../../../notes.styles";
export function SuperpositionSection() {
  return (
    <section id="superposition" className={styles.section}>
      <span className={styles.sectionNumber}>
        04 / MORE THAN A CLASSICAL MIXTURE
      </span>
      <h2>The same probabilities can hide different states.</h2>
      <NoteBox kind="definition" title="Superposition and mixture">
        <ul>
          <li>
            <strong>Coherent superposition:</strong> components retain a
            relative phase; amplitudes can interfere.
          </li>
          <li>
            <strong>Classical mixture:</strong> preparation probabilities
            describe an ensemble without that coherence.
          </li>
          <li>
            <strong>Test:</strong> change the measurement basis to reveal
            predictions that differ.
          </li>
        </ul>
      </NoteBox>
      <p>
        A coherent equal superposition and a random 50:50 preparation of |0⟩ or
        |1⟩ agree in the 0/1 basis. They need not agree after a change of basis.
        The coherent state retains a phase relationship; the mixture does not.
      </p>
      <Equation>{String.raw`|+\rangle=\frac{|0\rangle+|1\rangle}{\sqrt2},\qquad |-\rangle=\frac{|0\rangle-|1\rangle}{\sqrt2}`}</Equation>
      <p>
        A measurement in the +/− basis returns + with certainty for |+⟩. The
        random mixture returns each result half the time.
      </p>
      <h3>Two systems introduce entanglement.</h3>
      <NoteBox
        kind="definition"
        title="Entanglement · A joint state that does not factor"
      >
        <p>
          An <strong>entangled pure state</strong> cannot be written as a
          product of individual subsystem states. Consider the example below:
        </p>
      </NoteBox>
      <Equation>{String.raw`|\Phi^+\rangle=\frac{|00\rangle+|11\rangle}{\sqrt2}`}</Equation>
      <p>
        Joint 0/1 measurements give 00 or 11 with equal probability. Each
        individual outcome is random, yet the outcomes agree. The absence of 01
        and 10 cannot be achieved by a product of two independent superpositions
        that also contains both 00 and 11.
      </p>
      <div className={styles.callout}>
        <strong>Correlation does not send a message.</strong>
        <p>
          Entanglement is a property of the joint state. A local observer cannot
          choose the random outcome to transmit information faster than light.
          Correlations become evident when records are compared.
        </p>
      </div>
    </section>
  );
}
