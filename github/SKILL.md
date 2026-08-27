---
name: github
description: Músculo GitHub de TODA la vida de David (perfil, pack de skills, lab, producto, cualquier repo futuro). Úsala cuando hable de GitHub, un repo nuevo, CI, perfil, org, o el ecosistema de IAs en git — no asumas que es solo Renovo.
license: MIT
metadata:
  author: chdavidfm
  version: "1.3"
---

# github — el músculo de toda la vida

GitHub de `chdavidfm` no es “el repo de Renovo”. Es el sitio donde vive **código + skills portables + lab**. El cerebro sigue siendo el vault. El CRM sigue siendo Notion.

## Mapa de la cuenta

| Pieza | Repo / sitio | Manda |
|---|---|---|
| Vitrina persona | `chdavidfm/chdavidfm` · [github.com/chdavidfm](https://github.com/chdavidfm) | cara pública |
| Pack de skills | `chdavidfm/skills` | este repo |
| Producto | `chdavidfm/renovo-core` (privado) | SaaS que corre |
| Lab | `chdavidfm/rag-agent-lab` | experimentos; no es el producto |
| Memoria | vault local | qué sé / por qué |
| CRM | Notion | locales, no issues de código |

## Leyes

1. Un hecho, un sitio. No subas el vault. No subas Bella, secretos, ARE, IBAN.
2. Repo nuevo **sólo** si hay código o skills que no caben en los cuatro de arriba. No 30 repos de carpetas.
3. Org de producto = cuando David la cree en la web. Hasta entonces el usuario `chdavidfm` es la casa.
4. Source del SaaS **privado**. Ayuda = invitar, no hacer público el producto.
5. CI que falle si mientes. Releases en `v*` en repos de código. CODEOWNERS. Dependabot. Este pack: `node scripts/validate.mjs`.
6. Tras merge que importe: Diario 3 frases. Si tocó Renovo, `pulso` en el vault.
7. Vitrina de perfil en **inglés** (contratación IA): hechos de producción, no eslóganes. Pack `skills` en inglés (spec).
8. Cero widgets de stats/trophies. Cero jerga de OS en el README de perfil.
9. Following: si `following > followers` y miles de repos, unfollow. Payloads / HackTricks no es este grafo.

## Archify (`tt-a1i/archify`) y el tuit de Charlie Hills

Medido 27/08/2026: 21902★, MIT, CI + release + CODEOWNERS. Pestaña **Agents** = Copilot; `chdavidfm` tiene `plan: null`. Cero PRs tuyos al repo.

| Mecánica | ¿La tiene Archify? | ¿Para David? |
|---|---|---|
| CI que falla / release `v*` / CODEOWNERS / Dependabot | Sí | **Sí** en `skills` (ya) y `rag-agent-lab` / `renovo-core` |
| `SKILL.md` en el repo | Sí | Ya. No copiar el texto de Archify. No sexta skill `archify` |
| 20 topics, Pages demo, GIF AWS | Sí | Topics **pocos y verdaderos**. Demo = userenovo.com. **No** un diagrama de AWS que no operas |
| Pestaña Agents | Copilot | **No se finge** |
| Charlie Hills (92k views, sin GitHub `charliejhills`) | Distribución | **No** es un perfil de ingeniero. No copies el tuit. Archify como *herramienta* cuando dibujes **tu** stack (Netlify + Supabase + Anthropic), en `TYRONE\RENOVO` |

## 12-factor agents (Dex / HumanLayer) — patrón, no framework

Apache/CC. No se instala. Lo que sí entra a `ship` / `verify`:

- El control flow es código, no un prompt con una bolsa de tools.
- Agentes pequeños y con dueño (`bibliotecario` `fiscal` `cazador`). No un loop genérico.
- El humano es un paso del flujo (reseña negativa: nunca se publica sola).
- “Hecho” = evidencia (`verify`). Un widget no es evidencia.

## Cuando David pega un GitHub / skill pack / OS viral

Invoca **`absorb`**. No improvises un segundo cerebro. Destila patrón → skill original → CI verde.

## Conexiones

Hermanas: `ship` · `absorb` · `verify` · `skill-author`.
