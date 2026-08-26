---
name: absorb
description: Cuando David pega un GitHub, skill pack, OS viral o captura de otro cerebro, extrae el máximo patrón útil a SU pack (chdavidfm/skills) sin copiar código GPL ni instalar un segundo OS. Úsala ante un link de repo, "mira esto", Archify, OpenHuman, o cualquier referencia elite.
license: MIT
metadata:
  author: chdavidfm
  version: "1.0"
---

# absorb — lo mejor de lo que pega, a su nombre

David va a seguir pasando repos. El trabajo no es admirarlos. Es **medir → tabla copia/rechazo → skill original → CI verde**.

Esto cubre **toda la vida** (estudios, dinero, producto, lab, perfil). No estreches a Renovo.

## 1. Medir (antes de opinar)

```bash
gh repo view <owner>/<repo> --json name,description,licenseInfo,stargazerCount,defaultBranchRef,repositoryTopics,homepageUrl,isPrivate
gh api repos/<owner>/<repo>/contents --jq "[.[] | {name,type}]"
```

Lista `SKILL.md`, `.github/workflows`, `AGENTS.md`, `CODEOWNERS`. Stars = marketing hasta que el `gh` lo confirme.

## 2. Tabla (obligatoria en el chat)

| Mecánica | ¿La tiene? | ¿Para David? |
|---|---|---|
| CI que **falla** si mientes | | Sí / no — por qué |
| `SKILL.md` / AGENTS.md skill-native | | Patrón sí, texto suyo no si GPL/AGPL |
| Release `v*` / CODEOWNERS / Dependabot | | Sí en repos de código |
| Flotas, 90k skills, auto-fetch a toda la red | | **No.** Vault ya es el wiki |
| Wiki de GitHub / Projects como CRM | | **No.** |
| Instalar su app | | **No** si es un segundo OS |

Licencia GPL/AGPL: **cero pegado** de `SKILL.md`, Rust, ni submodule. Extrae fases y reescribe.

## 3. Escribir (original)

- Skill nueva **sólo** si el flujo se va a repetir. Si cabe en `github` / `ship` / `verify`, engórdala.
- `skill-author` para el archivo. `name` = carpeta. `description` con cuándo usarla.
- No dupliques vault: `ingest` `captura` `briefing` `lint` `tension` `gtm` `puente` `pulso` se quedan locales.
- Sync: este repo + `C:\DAVID\IA\SKILLS` + Cursor `~/.cursor/skills/<name>/` + vault `.claude/skills/<name>/` **si** el OS debe dispararla.

## 4. Verificar

`node scripts/validate.mjs`. Luego `ship` si David pide embarcar.
Una línea en el Diario del vault. Destilado en el wiki (`fuentes/` + `GitHub-como-musculo`).

## No es

Un clon de OpenHuman. Un scraper de 90k skills. Un README inflado con badges que no miden nada.
