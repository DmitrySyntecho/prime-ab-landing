// Convert every JPG/JPEG under public/ to WebP at high quality, then delete
// the original. PNG favicons / app icons are intentionally left alone — they
// need to stay PNG for cross-browser favicon and Apple touch icon support.
//
// Run: node scripts/optimize-images.mjs
import { promises as fs } from "node:fs"
import path from "node:path"
import sharp from "sharp"

const PUBLIC_DIR = path.join(process.cwd(), "public")
const QUALITY = 88 // high quality WebP

async function walk(dir) {
  const out = []
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...(await walk(full)))
    } else {
      out.push(full)
    }
  }
  return out
}

function isJpeg(file) {
  const ext = path.extname(file).toLowerCase()
  return ext === ".jpg" || ext === ".jpeg"
}

async function convertOne(file) {
  const target = file.replace(/\.(jpe?g)$/i, ".webp")
  const buf = await sharp(file).webp({ quality: QUALITY, effort: 6 }).toBuffer()
  await fs.writeFile(target, buf)
  const [origStat, newStat] = await Promise.all([fs.stat(file), fs.stat(target)])
  await fs.unlink(file)
  return {
    from: path.relative(process.cwd(), file),
    to: path.relative(process.cwd(), target),
    origKb: (origStat.size / 1024).toFixed(1),
    newKb: (newStat.size / 1024).toFixed(1),
    savedKb: ((origStat.size - newStat.size) / 1024).toFixed(1),
  }
}

const files = (await walk(PUBLIC_DIR)).filter(isJpeg)
console.log(`Found ${files.length} JPEG files. Converting at q=${QUALITY}…\n`)

let totalOrig = 0
let totalNew = 0
const rows = []
for (const f of files) {
  try {
    const r = await convertOne(f)
    totalOrig += Number(r.origKb)
    totalNew += Number(r.newKb)
    rows.push(r)
    console.log(`✓ ${r.from} → ${r.to}  (${r.origKb} → ${r.newKb} KB, saved ${r.savedKb} KB)`)
  } catch (err) {
    console.error(`✗ ${f}:`, err.message)
  }
}

console.log(`\nTotal: ${totalOrig.toFixed(1)} KB → ${totalNew.toFixed(1)} KB (saved ${(totalOrig - totalNew).toFixed(1)} KB / ${(((totalOrig - totalNew) / totalOrig) * 100).toFixed(1)}%)`)
