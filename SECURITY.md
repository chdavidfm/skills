# Security

Este pack son instrucciones para agentes (`SKILL.md`). No hay runtime, no hay tokens.

- No abras issues pidiendo secretos, IBAN, ni datos personales.
- Si encuentras una credencial en un commit: avisa por [GitHub Security Advisories](https://github.com/chdavidfm/skills/security/advisories/new) o un mensaje privado a `chdavidfm`. No la pegues en un issue público.
- PRs: `node scripts/validate.mjs` rechaza patrones obvios (`ghp_`, `sk_live_`, private keys).
