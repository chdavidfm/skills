# skills

Agent Skills I run in Cursor, Claude Code, and Codex. Spec: [agentskills.io](https://agentskills.io/specification). CI fails if a `SKILL.md` is incomplete.

[![ci](https://github.com/chdavidfm/skills/actions/workflows/ci.yml/badge.svg)](https://github.com/chdavidfm/skills/actions/workflows/ci.yml)

Clone, copy a folder into `~/.cursor/skills/<name>/`, done. To check the pack:

```bash
node scripts/validate.mjs
```

| Skill | When |
|---|---|
| [`github`](github/SKILL.md) | the whole GitHub account — not one product |
| [`ship`](ship/SKILL.md) | PR until CI is green |
| [`absorb`](absorb/SKILL.md) | someone pastes a repo / skill pack / “elite” screenshot |
| [`verify`](verify/SKILL.md) | “done” or “maxed out” with no proof |
| [`fleet`](fleet/SKILL.md) | agents that argue instead of agreeing |
| [`skill-author`](skill-author/SKILL.md) | write a `SKILL.md` that passes CI |

Memory, CRM, and life notes stay off GitHub. Product site: [userenovo.com](https://userenovo.com).

MIT. See [CONTRIBUTING.md](CONTRIBUTING.md) if you send a PR.
