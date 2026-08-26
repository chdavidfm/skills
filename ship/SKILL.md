---
name: ship
description: Embarca un cambio en CUALQUIER repo de David (no solo Renovo): rama, PR, vigila CI, arregla rojo. No mergea ni commitea sin que David lo pida. Úsala cuando diga ship, abre el PR, babysit, o el Actions está rojo.
license: MIT
metadata:
  author: chdavidfm
  version: "1.1"
---

# ship — PR hasta verde

Un cambio no está embarcado hasta que CI está verde. Vale para `renovo-core`, `skills`, `rag-agent-lab`, `chdavidfm`, o el repo abierto.

Patrón extraído de harnesses serios (fases inspect → PR → logs del job rojo). Texto original. Este chat **no** es un daemon de 60 minutos.

## No haces

- Commit, push a default, o merge si David no lo pidió en este chat.
- `--no-verify` para esconder un fallo que **tú** introdujiste.
- Reescribir commits ya pusheados salvo orden explícita.
- Dormir 60 minutos en un bucle. Polls cortos + evidencia + paras.
- Afirmar “verde” mientras un check esté `PENDING`.

## Fases

### 1. Inspeccionar

En paralelo: `git status -sb` · `git diff --stat` · `git log -8 --oneline` · `gh repo view`.
Default branch: `master` o `main` según el repo (`gh repo view --json defaultBranchRef`).

Si estás en default **con cambios**: pide rama `fix/…` o `feat/…` (o créala **si** ya hay permiso de embarcar). No dejes commits de agente en default.

### 2. Validar en local

Lo más pequeño que el repo documente: `node scripts/validate.mjs` (este pack), `pnpm test`, `node --check`. Si no corriste el comando, no digas que pasó.

### 3. Embarcar (sólo con permiso)

Commit convencional (`feat:` `fix:` `chore:` `docs:`) · push `-u` · `gh pr list --head <branch> --state open`.
Si ya hay PR, **reúsala**. Si no: `gh pr create` con cómo verificar. No inventes checklist de otro producto.

### 4. Vigilar

`gh pr checks`. Rojo de Actions: `gh run view <id> --log-failed`. Arreglo mínimo → otro commit **si ya hay permiso**.
Si hay review comments (`gh api repos/<owner>/<repo>/pulls/<n>/comments`): aplica lo que esté in-scope; lo demás, dilo.

Para cuando esté verde. **No merges.**

## Renovo

Default = `master`. CI = `ci.yml` (studio syntax + core vitest). CD = `deploy.yml` (secrets Netlify opcionales).

## Pack

Este skill vive en `chdavidfm/skills`. El vault no se “shippea”.
