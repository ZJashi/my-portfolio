# Repository guidelines

## Formatting and file size

- Every hand-maintained source, stylesheet, configuration, script, and documentation file must contain **no more than 200 lines after Prettier formatting**, including comments and blank lines.
- Split larger files into cohesive components, section modules, data modules, or stylesheets. Preserve content and behavior; never compress code, disable Prettier, or remove explanations to meet the limit.
- This rule applies across the entire repository, including new files and changes to existing files. Generated dependency lockfiles, generated framework declarations, build output, and binary assets are exempt; do not split or hand-edit those generated files.
- Run `npm run format` after editing. Before finishing, run `npm run format:check` and `npm run check:lines`, then the appropriate TypeScript/build checks. The production build also enforces the line limit automatically.

## Study-note design guidelines

When creating or editing learning material, including statistical mechanics, quantum mechanics, and classical mechanics, preserve the existing notebook palette, typography, navigation, mathematical conventions, and explanatory depth. Make notes polished and easy to revise using meaningful visual hierarchy.

- Use `NoteBox` from `src/components/notes/NoteBox.tsx` for titled callouts. Use `kind="law"` for named laws, `kind="definition"` for concise definitions, and `kind="result"` for important equations. These are the web equivalent of textbook colorboxes / tcolorboxes.
- Give the zeroth, first, second, and third laws explicit, easily scanned titles. State relevant assumptions and qualifications within or next to each box.
- Highlight selected final equations, not every intermediate algebra step. Keep derivations in the reading flow. Render mathematical expressions through the existing KaTeX components.
- Define sign conventions, symbols, units, constraints, and validity conditions where introduced. For Carnot calculations, distinguish heat magnitudes from signed heat, use kelvin, and state reversibility and reservoir assumptions.
- In classical mechanics, label Newton’s laws and conservation results explicitly. Attach the inertial-frame, fixed-mass, origin, force-model, and time-dependence assumptions that each result needs.
- In quantum mechanics, box definitions of amplitudes, superposition, mixtures, and entanglement. Highlight the Born rule and final measurement predictions; specify normalization, measurement basis, phase convention, coherence, and any conditioning on survival. Preserve the distinction between pure-state and mixed-state claims.
- Never hide lecture content or worked solutions in dropdowns, accordions, or `<details>` disclosures. Keep explanations visible in the reading flow.
- End lectures with “Main results to remember”, following Functional Analysis: concise themed `NoteBox` callouts with `styles.takeaways` lists, bold concept labels and KaTeX mathematics. Prefer this revision summary over a “Practice and self check” question and answer section.
- Use semantic ordered lists for procedures and cycle stages; unordered lists for parallel definitions, conditions, and comparisons. Keep connected explanations as prose.
- Bold key terms at their definitions, physical constraints, and crucial conclusions. Avoid bolding whole paragraphs.
- Add a diagram when it explains a process, geometry, or calculation. Carnot material should connect the reservoirs, heat flows, work output, and cycle stages. Label directions and symbols; provide accessible SVG titles/descriptions and a caption. Identify schematic diagrams as such when necessary.
- Subject and course landing pages use the compact `SubjectHeader`: an icon, title, short description, and a concise linked source credit beneath the title when applicable. Do not restore large illustrated banners, numbered source badges, or decorative topic taglines there.
- Every course landing page keeps source attribution to one short linked credit beneath the title. Do not add source lists, syllabus/prerequisite paragraphs, or reference footers below course contents. Lecture source credits belong in the lecture header.
- Lecture headers include the short introduction and one concise linked source credit. Do not repeat the introduction in a separate overview block or add a source section at the end. Keep essential reading references in the opening credit.
- Illustrated course directory cards must include a subject-specific drawing using the existing notebook drawing layout; do not leave the illustration column empty.
- Omit redundant “Courses”, “Chapters”, and “The course sequence” section labels on landing pages. Directory cards show a title and description without repeated source badges, availability/chapter counts, or “Open notebook” / “View chapter contents” prompts. Preserve actual chapter and lecture identifiers, reading references, and source attribution within the notes.
- Prefer reusable components and CSS module classes over repeated inline styling. Preserve light/dark theme contrast, mobile layouts, horizontally scrollable equations, and semantic headings. Never rely on color alone: label each callout type.
- Preserve source attribution, exercises, interactive labs, and existing explanations unless changes are requested. Avoid introducing unsupported claims or dropping mathematical caveats for visual simplicity.
- Validate with TypeScript and a production build when feasible. Inspect the affected pages at desktop and mobile sizes when a browser preview is available; report any verification limits honestly.

These guidelines apply to future study notes as well as revisions. Keep unrelated portfolio content and existing user changes intact.

## Local development and validation

- Notes visibility is controlled by `src/lib/notes-visibility.ts`: all notebooks are visible in `npm run dev`, while production builds hide the sidebar entry and return 404 for the entire `/notes` subtree. Keep local directory entries active rather than manually commenting them out for deployment.

- Development output lives in `.next-dev`; production build/start output lives in `.next`. Preserve this phase-based separation in `next.config.ts`.
- Never delete or replace the generated directory used by a running server. Stop only a server you own or have verified belongs to this project when a restart is necessary.
- Run production validation without interrupting the user’s development server. Use a separate port for temporary production previews and stop those previews after checking them.
