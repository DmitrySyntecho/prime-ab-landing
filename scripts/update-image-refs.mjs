// Replace references to the JPEG files we just converted with their .webp
// equivalents across the codebase. Only touches code files (ts/tsx/js/mjs/json),
// never docs/ or external URLs.
//
// Run AFTER scripts/optimize-images.mjs.
//
// Run: node scripts/update-image-refs.mjs
import { promises as fs } from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const PUBLIC_DIR = path.join(ROOT, "public")

// Directories whose code we will rewrite.
const CODE_ROOTS = ["app", "components", "lib", "hooks", "styles"].map((d) =>
  path.join(ROOT, d),
)

const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".json"])

async function walk(dir) {
  const out = []
  let entries
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name.startsWith(".")) continue
      out.push(...(await walk(full)))
    } else {
      out.push(full)
    }
  }
  return out
}

// Build the list of basenames that now exist as .webp in /public so we only
// rewrite references to files we actually converted (don't touch external URLs).
async function collectWebpBasenames() {
  const names = new Set()
  const files = await walk(PUBLIC_DIR)
  for (const f of files) {
    if (path.extname(f).toLowerCase() === ".webp") {
      names.add(path.basename(f, ".webp"))
    }
  }
  return names
}

const webpBasenames = await collectWebpBasenames()
console.log(`Tracking ${webpBasenames.size} .webp files in /public.`)

const codeFiles = []
for (const root of CODE_ROOTS) {
  codeFiles.push(...(await walk(root)))
}
const filtered = codeFiles.filter((f) => CODE_EXTS.has(path.extname(f).toLowerCase()))
console.log(`Scanning ${filtered.length} code files…\n`)

let totalReplacements = 0
const editedFiles = []

for (const file of filtered) {
  const original = await fs.readFile(file, "utf8")

  // Replace any `<basename>.jpg|.jpeg` with `<basename>.webp` when the basename
  // matches a WebP file we have on disk. Match either /<path>/<base>.jpg or
  // just <base>.jpg in quoted strings.
  let updated = original
  let perFile = 0
  for (const base of webpBasenames) {
    // Escape regex special chars in basename
    const escaped = base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const re = new RegExp(`${escaped}\\.(jpe?g)\\b`, "g")
    updated = updated.replace(re, (match) => {
      perFile += 1
      return `${base}.webp`
    })
  }

  if (perFile > 0) {
    await fs.writeFile(file, updated, "utf8")
    totalReplacements += perFile
    editedFiles.push({ file: path.relative(ROOT, file), count: perFile })
    console.log(`✓ ${path.relative(ROOT, file)}  (${perFile} replacement${perFile === 1 ? "" : "s"})`)
  }
}

console.log(`\nDone. ${totalReplacements} replacement${totalReplacements === 1 ? "" : "s"} across ${editedFiles.length} file${editedFiles.length === 1 ? "" : "s"}.`)
