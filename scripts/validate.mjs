#!/usr/bin/env node
/**
 * CI del pack: cada carpeta con SKILL.md debe cumplir agentskills.io.
 * Falla el job si miente el frontmatter o si hay secretos obvios.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SECRET_RE =
  /(sk_live_|sk_test_|ghp_[A-Za-z0-9]{20,}|BEGIN (RSA |OPENSSH )?PRIVATE KEY|AKIA[0-9A-Z]{16})/;

function fail(msg) {
  console.error(`FAIL  ${msg}`);
  process.exitCode = 1;
}

function parseFrontmatter(raw, file) {
  if (!raw.startsWith("---\n") && !raw.startsWith("---\r\n")) {
    fail(`${file}: falta frontmatter YAML (---)`);
    return null;
  }
  const end = raw.indexOf("\n---", 4);
  if (end < 0) {
    fail(`${file}: frontmatter sin cierre`);
    return null;
  }
  const yaml = raw.slice(4, end).replace(/\r/g, "");
  const body = raw.slice(end + 4).replace(/^\r?\n/, "");
  const fields = {};
  for (const line of yaml.split("\n")) {
    if (!line.trim() || line.startsWith("#") || line.startsWith(" ") || line.startsWith("\t")) {
      continue;
    }
    const i = line.indexOf(":");
    if (i < 0) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    fields[key] = val;
  }
  return { fields, body };
}

const dirs = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith(".") && d.name !== "scripts")
  .map((d) => d.name);

if (dirs.length === 0) fail("no hay carpetas de skill");

for (const dir of dirs) {
  const file = path.join(root, dir, "SKILL.md");
  if (!fs.existsSync(file)) {
    fail(`${dir}/: carpeta sin SKILL.md`);
    continue;
  }
  const raw = fs.readFileSync(file, "utf8");
  if (SECRET_RE.test(raw)) fail(`${dir}/SKILL.md: patrón de secreto`);
  const parsed = parseFrontmatter(raw, `${dir}/SKILL.md`);
  if (!parsed) continue;
  const { fields, body } = parsed;
  const name = fields.name || "";
  const description = fields.description || "";
  if (name !== dir) fail(`${dir}/SKILL.md: name="${name}" debe coincidir con la carpeta`);
  if (!NAME_RE.test(name) || name.length > 64) fail(`${dir}/SKILL.md: name inválido (kebab-case, ≤64)`);
  if (!description || description.length > 1024) {
    fail(`${dir}/SKILL.md: description obligatoria (1–1024)`);
  }
  if (!body.trim()) fail(`${dir}/SKILL.md: cuerpo vacío`);
  if (body.split(/\n/).length > 500) {
    fail(`${dir}/SKILL.md: >500 líneas — mueve detalle a references/`);
  }
  console.log(`OK    ${dir}`);
}

if (process.exitCode) {
  console.error("\nvalidate.mjs: pack inválido");
  process.exit(1);
}
console.log(`\n${dirs.length} skills válidas`);
