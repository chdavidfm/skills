---
name: ship
description: Embarca un cambio en CUALQUIER repo de David (no solo Renovo): rama, PR, vigila CI, arregla rojo. No mergea ni commitea sin que David lo pida. Úsala cuando diga ship, abre el PR, babysit, o el Actions está rojo.
---

# ship — PR hasta verde

Patrón (original): un cambio no está embarcado hasta que CI está verde. No se copia código de terceros.

Vale para `renovo-core`, `skills`, `rag-agent-lab`, `chdavidfm`, o el repo que esté abierto.

## No haces

- Commit o push si David no lo pidió en este chat.
- Merge a `master`/`main` sin orden explícita.
- `--no-verify` para esconder un fallo que tú introdujiste.
- Dormir 60 minutos en un bucle. Este chat no es un daemon. Polls cortos + evidencia.

## Haces

1. Repo y rama: `gh repo view` · `git status -sb`. Si estás en `master`/`main` con cambios, **pide** rama `fix/…` o `feat/…` antes de ensuciar default.
2. Diff mínimo. Un objetivo.
3. Si hay tests locales, córrelos **antes** de afirmar que está bien (`pnpm test`, `node --check`, lo que el repo documente).
4. Cuando David pida embarcar: commit convencional (`feat:` `fix:` `chore:`) · push · `gh pr create` con cómo verificar.
5. Vigila: `gh pr checks` / `gh run list --limit 5`. Si está rojo: log del job, arreglo mínimo, otro commit **si ya hay permiso de commit**.
6. Para cuando esté verde. No merges.

## Renovo

Default branch = `master`. CD = `deploy.yml` (secrets Netlify opcionales). CI = `ci.yml` (studio syntax + core vitest).

## Pack

Este skill vive también en `chdavidfm/skills`. Si el trabajo es el vault, no lo “shippees” a GitHub.
