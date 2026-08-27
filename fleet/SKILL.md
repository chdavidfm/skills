---
name: fleet
description: Cuando se diseñan agentes con nombre, cuando una pantalla o un ship no tiene quién lo pare, cuando todos coinciden a la primera, o cuando David dice fleet / veto / adversarial. Destila agentes de intereses opuestos. Nunca copia prompts de producto.
license: MIT
metadata:
  author: chdavidfm
  version: "1.0"
---

# fleet — agentes que se oponen, no que asienten

Un loop genérico con una bolsa de tools no es arquitectura. El trabajo serio es lo que **sobrevive** a alguien cuyo trabajo es pararlo.

Esto no es una flota de 90k skills. No es OpenHuman. Es un patrón pequeño: hacedor contra adversario, con veto real.

## Los dos tipos

| Tipo | Trabajo | Gana si |
|---|---|---|
| **Hacedor** | produce el cambio (pantalla, texto, PR, brief) | el cambio existe y se puede verificar |
| **Adversario** | intenta tumbarlo o impedir que se llame “hecho” | encuentra un agujero, o el hacedor lo cierra |

Si los dos tienen el mismo incentivo (“queda bien”, “cierra el chat”), no hay fleet. Hay un coro.

## Cuatro bloqueadores que merecen existir

1. **Dominio.** Puede vetar una pantalla que al que construye le gusta. El usuario del oficio manda sobre el gusto del builder.
2. **Verdad.** Existe para tumbar la afirmación que acabas de hacer. Si no puede fallar, no es un chequeo — es `verify` con dientes.
3. **Entrega.** Puede parar un ship. CI rojo, o “esto no sale”. `ship` no mergea; este dice *por qué* no debería.
4. **Humano.** Un paso del flujo, no un overlay. Lo irreversible (dinero, menor, reseña negativa pública) no lo cierra un agente solo.

No hace falta tener los cuatro en cada repo. Hace falta que **al menos uno** pueda ganar.

## Cinco reglas que lo hacen real

1. **Un nombre, un trabajo.** Si hace dos cosas, son dos agentes.
2. **El veto puede ganar.** Si nunca ha parado nada, es teatro.
3. **Intereses opuestos**, no un comité que asiente.
4. **“Hecho” es evidencia.** El adversario no gana por elocuencia. Invoca `verify`.
5. **Los prompts del producto no salen de casa.** Este pack es el patrón. Copiar `.claude/agents/` de un SaaS a GitHub público es filtrar el oficio.

## Cuatro síntomas de que se ha podrido

1. Todos coinciden en el primer pase.
2. El veto no se ha disparado en semanas.
3. Un solo loop con cuarenta tools y cero dueño.
4. Publicar los prompts (o un repo de postmortems) para parecer élite.

Si ves (4): para. Las cicatrices de producción viven en el repo **privado** del producto, no en la vitrina.

## Cómo se usa en un chat

1. Nombra el hacedor y el adversario. Si no puedes, no hay fleet.
2. Di qué puede **parar** el adversario (pantalla / afirmación / ship / publicación).
3. Corre el hacedor. Luego el adversario, con permiso de fallar.
4. Entrega: qué sobrevivió, qué se vetó, con qué prueba.

## No haces

- Copiar prompts de producto, ni nombrar agentes internos de un SaaS en este archivo.
- Una sexta skill que sea otro “asistente útil”.
- Instalar un segundo OS ni una flota descargable.
- Repo público `postmortems`. Eso no es palanca: es escaparate de heridas.

## Dónde vive cada cosa

| Superficie | Qué |
|---|---|
| Este pack | el patrón (esta skill) |
| Vault | `bibliotecario` `fiscal` `cazador` — el mismo patrón en la vida |
| Producto (privado) | los agentes del oficio. No se publican |
| `verify` | la evidencia. El adversario sin prueba es opinión |
| `github` / `ship` | la cuenta y el PR. No el veto |

Hermanas: `verify` · `ship` · `github` · `skill-author`.
