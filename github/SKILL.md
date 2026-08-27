---
name: github
description: Músculo GitHub de TODA la vida de David (perfil, pack de skills, lab, producto, cualquier repo futuro). Úsala cuando hable de GitHub, un repo nuevo, CI, perfil, org, o el ecosistema de IAs en git — no asumas que es solo Renovo.
license: MIT
metadata:
  author: chdavidfm
  version: "1.2"
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
7. Vitrina en **español**. Pack `skills` en inglés (spec). No es el bug P1-C del producto.
8. Cero widgets de stats/trophies. Cero jerga de OS en el README de perfil. Karpathy: una frase. Raschka: oficio + 3 enlaces. Eso.
9. Following: si `following > followers` y miles de repos, unfollow. Payloads / HackTricks no es este grafo.

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
