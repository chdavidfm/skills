---
name: skill-author
description: Escribe o parchea un SKILL.md del pack de David cumpliendo agentskills.io y el CI del repo. Úsala al crear una skill nueva, al engordar github/ship/absorb/verify, o cuando validate.mjs falle.
license: MIT
metadata:
  author: chdavidfm
  version: "1.0"
---

# skill-author — SKILL.md que pasa CI

Especificación: [agentskills.io/specification](https://agentskills.io/specification). Validador: `node scripts/validate.mjs`.

## Forma

```
skill-name/
└── SKILL.md     # name === carpeta
```

`references/` o `scripts/` sólo si el cuerpo pasaría de ~400 líneas.

## Frontmatter

```yaml
---
name: kebab-case-igual-que-la-carpeta
description: Qué hace Y cuándo dispararla. Keywords que un agente buscaría. 1–1024 chars.
license: MIT
metadata:
  author: chdavidfm
  version: "1.0"
---
```

- `name`: `a-z0-9` y guiones. Sin mayúsculas. Sin `--`. ≤64.
- `description`: inútil si dice “ayuda con X”. Incluye el gatillo (“cuando David pega…”, “cuando Actions está rojo”).

## Cuerpo

1. Una frase de ley.
2. Pasos numerados o tabla.
3. **No haces** (el fallo previsible).
4. Dónde no vive (vault vs este pack).

Texto original. Si el origen es GPL, reescribe; no copies párrafos.

## Dónde guardarla

| Sitio | Qué |
|---|---|
| `chdavidfm/skills/<name>/` | canónico público |
| `C:\DAVID\IA\SKILLS\<name>/` | espejo disco |
| `~/.cursor/skills/<name>/` | Cursor en esta máquina |
| vault `.claude/skills/<name>/` | **sólo** si el OS de vida debe invocarlo |

No pongas en GitHub: `ingest` `captura` `briefing` `lint` `tension` `deriva` `promover` `gtm` `puente` `pulso`.

## Cierre

Corre `node scripts/validate.mjs`. Actualiza la tabla de `README.md` y `AGENTS.md`.
