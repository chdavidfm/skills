# Contributing

This pack is small on purpose. A skill lands here only if it will be invoked more than once, and only if it is not a second copy of vault-only work (`ingest`, `captura`, `briefing`, …).

## Before a PR

1. `name` in the frontmatter equals the folder name (kebab-case).
2. `description` says **what** it does and **when** to fire it.
3. Run `node scripts/validate.mjs` — CI runs the same command.
4. Do not paste GPL/AGPL skill text from another repo. Rewrite the pattern.

## PR

Branch off `main`. One skill or one fix per PR. Fill the template. I merge; agents do not.

Questions about the product (Renovo) do not belong here — that code is private.
