---
name: verify
description: Impide marcar trabajo como hecho sin evidencia medible (comando, CI, prod, o dispositivo). Úsala en cualquier repo o superficie de David cuando alguien diga listo, deployed, magistral, o "ya está al máximo".
license: MIT
metadata:
  author: chdavidfm
  version: "1.0"
---

# verify — evidencia antes de “hecho”

La calidad de David: nada hecho sin prueba. Research de otra IA = hipótesis. Esto vale para código, GitHub, landing, y claims de “nivel élite”.

## Qué cuenta como evidencia

| Afirmación | Prueba mínima |
|---|---|
| CI verde | `gh pr checks` / `gh run list` con `SUCCESS` (no `PENDING`) |
| Pack de skills válido | `node scripts/validate.mjs` exit 0 |
| En prod | HTML/API medido en el dominio real, o log de deploy |
| Repo existe / topics / default branch | `gh repo view --json …` |
| El vault no se rompió | `node .claude/tools/scan.mjs` (sólo si el trabajo tocó el vault) |

## Qué no cuenta

- Un README bonito.
- Stars de un repo ajeno.
- Un widget de trophies / stats (se rompe, y con 3 repos públicos argumenta en contra).
- “Debería funcionar”.
- Screenshot de una sola pantalla si el cambio es un flujo (click, submit, otra ruta).

## Cómo entregas

Primera línea: **sí / no / a medias**, con el comando o URL que lo prueba.
Si es a medias, lista el hueco concreto (bio sin scope `user`, org sólo en la web, branch protection 403 en Free privado, etc.). No lo disfraces de máximo.

## Relación

`ship` embarca. `verify` delata. `fleet` pone un adversario que puede ganar. `absorb` destila un repo ajeno. `github` es el mapa.
