#!/usr/bin/env node
/**
 * i18n-check.mjs
 *
 * Checks translation health for better-together-vue (btv.* namespace only):
 *   FAIL  (exit 1): btv.* key used in code but missing from en.json
 *   FAIL  (exit 1): btv.* key in en.json missing from fr/es/uk locale files
 *   WARN  (exit 0): btv.* key in en.json not referenced in any source file
 *   --strict: also exit 1 on unused keys
 *
 * bt.* keys from community-engine-vue are intentionally skipped — they are
 * defined in CEV's own locale file and validated there.
 *
 * Usage:
 *   node scripts/i18n-check.mjs
 *   node scripts/i18n-check.mjs --strict
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT = resolve(__dirname, '..')
const SRC = join(ROOT, 'src')
const LOCALE_FILE = join(SRC, 'i18n', 'locales', 'en.json')

const strict = process.argv.includes('--strict')

// ── 1. Flatten en.json to dot-notation keys ──────────────────────────────────

function flattenKeys(obj, prefix = '') {
  const keys = []
  for (const [k, v] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${k}` : k
    if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
      keys.push(...flattenKeys(v, fullKey))
    } else {
      keys.push(fullKey)
    }
  }
  return keys
}

const localeJson = JSON.parse(readFileSync(LOCALE_FILE, 'utf8'))
const definedKeys = new Set(flattenKeys(localeJson))

// ── 2. Walk src/ and collect all source files ─────────────────────────────────

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      if (entry === 'node_modules' || entry === '__pycache__') continue
      walk(full, files)
    } else if (/\.(vue|js|ts)$/.test(entry) && !entry.endsWith('.spec.js') && !entry.endsWith('.spec.ts')) {
      files.push(full)
    }
  }
  return files
}

const sourceFiles = walk(SRC)

// ── 3. Extract all t() / $t() / tc() key references ──────────────────────────

// Matches: t('btv.some.key'), $t("btv.some.key"), t(`btv.some.key`)
const KEY_RE = /(?:\$t|(?<!\w)t|tc)\s*\(\s*['"`]([\w.]+)['"`]/g

const usedKeys = new Set()

for (const file of sourceFiles) {
  const content = readFileSync(file, 'utf8')
  for (const match of content.matchAll(KEY_RE)) {
    usedKeys.add(match[1])
  }
}

// ── 4. Compare (btv.* namespace only) ────────────────────────────────────────

// Only check btv.* keys — bt.* keys come from community-engine-vue
const usedBtvKeys = [...usedKeys].filter((k) => k.startsWith('btv.'))
const missing = usedBtvKeys.filter((k) => !definedKeys.has(k))
const unused = [...definedKeys].filter((k) => !usedKeys.has(k))

// ── 4b. Cross-locale coverage check ──────────────────────────────────────────

const EXTRA_LOCALES = ['fr', 'es', 'uk']
const localeCoverage = {}

for (const lang of EXTRA_LOCALES) {
  const langFile = join(SRC, 'i18n', 'locales', `${lang}.json`)
  let langKeys
  try {
    langKeys = new Set(flattenKeys(JSON.parse(readFileSync(langFile, 'utf8'))))
  } catch {
    langKeys = null
  }
  const missingInLang = langKeys === null
    ? [...definedKeys]
    : [...definedKeys].filter((k) => !langKeys.has(k))
  const extraInLang = langKeys === null ? [] : [...langKeys].filter((k) => !definedKeys.has(k))
  localeCoverage[lang] = { langKeys, missingInLang, extraInLang }
}

// ── 5. Report ─────────────────────────────────────────────────────────────────

const red = (s) => `\x1b[31m${s}\x1b[0m`
const yellow = (s) => `\x1b[33m${s}\x1b[0m`
const green = (s) => `\x1b[32m${s}\x1b[0m`
const bold = (s) => `\x1b[1m${s}\x1b[0m`

console.log(bold('\n── i18n Health Check (BTV) ─────────────────────────────────'))
console.log(`  Locale file:  ${LOCALE_FILE.replace(ROOT + '/', '')}`)
console.log(`  Defined keys: ${definedKeys.size}`)
console.log(`  Used btv.* keys: ${usedBtvKeys.length}`)
console.log(`  Source files: ${sourceFiles.length}`)
console.log('────────────────────────────────────────────────────────────\n')

let exitCode = 0

if (missing.length > 0) {
  console.error(bold(red(`✖  ${missing.length} MISSING key(s) — used in code but absent from en.json:\n`)))
  for (const k of missing) console.error(`   ${red('✖')} ${k}`)
  console.error()
  exitCode = 1
}

if (unused.length > 0) {
  const label = strict ? bold(red(`✖  ${unused.length} UNUSED key(s)`)) : bold(yellow(`⚠  ${unused.length} UNUSED key(s)`))
  console.warn(`${label} — defined in en.json but not referenced in source:\n`)
  for (const k of unused) console.warn(`   ${strict ? red('✖') : yellow('⚠')} ${k}`)
  console.warn()
  if (strict) exitCode = 1
}

// Cross-locale coverage
console.log(bold('── Locale Coverage (fr / es / uk) ──────────────────────────'))
for (const [lang, { langKeys, missingInLang, extraInLang }] of Object.entries(localeCoverage)) {
  if (langKeys === null) {
    console.error(`  ${red('✖')} ${bold(lang)}: locale file not found`)
    exitCode = 1
    continue
  }
  if (missingInLang.length > 0) {
    console.error(`  ${red('✖')} ${bold(lang)}: ${missingInLang.length} key(s) missing from ${lang}.json:`)
    for (const k of missingInLang) console.error(`     ${red('✖')} ${k}`)
    exitCode = 1
  } else {
    console.log(`  ${green('✔')} ${bold(lang)}: all ${langKeys.size} keys present`)
  }
  if (extraInLang.length > 0) {
    console.warn(`  ${yellow('⚠')} ${bold(lang)}: ${extraInLang.length} extra key(s) not in en.json (may be intentional)`)
  }
}
console.log()

if (exitCode === 0) {
  console.log(green('✔  All btv.* i18n keys are healthy.\n'))
}

process.exit(exitCode)
