# Study-note design guidelines

When creating or editing learning material, including statistical mechanics, quantum mechanics, and classical mechanics, preserve the existing notebook palette, typography, navigation, mathematical conventions, and explanatory depth. Make notes polished and easy to revise using meaningful visual hierarchy.

- Use `NoteBox` from `src/components/notes/NoteBox.tsx` for titled callouts. Use `kind="law"` for named laws, `kind="definition"` for concise definitions, and `kind="result"` for important equations. These are the web equivalent of textbook colorboxes / tcolorboxes.
- Give the zeroth, first, second, and third laws explicit, easily scanned titles. State relevant assumptions and qualifications within or next to each box.
- Highlight selected final equations, not every intermediate algebra step. Keep derivations in the reading flow. Render mathematical expressions through the existing KaTeX components.
- Define sign conventions, symbols, units, constraints, and validity conditions where introduced. For Carnot calculations, distinguish heat magnitudes from signed heat, use kelvin, and state reversibility and reservoir assumptions.
- In classical mechanics, label Newton’s laws and conservation results explicitly. Attach the inertial-frame, fixed-mass, origin, force-model, and time-dependence assumptions that each result needs.
- In quantum mechanics, box definitions of amplitudes, superposition, mixtures, and entanglement. Highlight the Born rule and final measurement predictions; specify normalization, measurement basis, phase convention, coherence, and any conditioning on survival. Preserve the distinction between pure-state and mixed-state claims.
- Use semantic ordered lists for procedures and cycle stages; unordered lists for parallel definitions, conditions, and comparisons. Keep connected explanations as prose.
- Bold key terms at their definitions, physical constraints, and crucial conclusions. Avoid bolding whole paragraphs.
- Add a diagram when it explains a process, geometry, or calculation. Carnot material should connect the reservoirs, heat flows, work output, and cycle stages. Label directions and symbols; provide accessible SVG titles/descriptions and a caption. Identify schematic diagrams as such when necessary.
- Prefer reusable components and CSS module classes over repeated inline styling. Preserve light/dark theme contrast, mobile layouts, horizontally scrollable equations, and semantic headings. Never rely on color alone: label each callout type.
- Preserve source attribution, exercises, interactive labs, and existing explanations unless changes are requested. Avoid introducing unsupported claims or dropping mathematical caveats for visual simplicity.
- Validate with TypeScript and a production build when feasible. Inspect the affected pages at desktop and mobile sizes when a browser preview is available; report any verification limits honestly.

These guidelines apply to future study notes as well as revisions. Keep unrelated portfolio content and existing user changes intact.

## Local development and validation

- Development output lives in `.next-dev`; production build/start output lives in `.next`. Preserve this phase-based separation in `next.config.ts`.
- Never delete or replace the generated directory used by a running server. Stop only a server you own or have verified belongs to this project when a restart is necessary.
- Run production validation without interrupting the user’s development server. Use a separate port for temporary production previews and stop those previews after checking them.
