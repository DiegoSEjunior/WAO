import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'images')
mkdirSync(outDir, { recursive: true })

function defs(bgTop, bgBottom) {
  return `
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="42%" r="75%">
      <stop offset="0%" stop-color="${bgTop}"/>
      <stop offset="100%" stop-color="${bgBottom}"/>
    </radialGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>`
}

function background(bgTop, bgBottom, ink, { grainOpacity = 0.05, extra = '' } = {}) {
  return `
  <rect width="100%" height="100%" fill="url(#bgGrad)"/>
  <circle cx="50%" cy="50%" r="42%" fill="none" stroke="${ink}" stroke-opacity="0.1" stroke-width="1"/>
  <circle cx="50%" cy="50%" r="30%" fill="none" stroke="${ink}" stroke-opacity="0.08" stroke-width="1"/>
  <path d="M -12% 103% A 95% 95% 0 0 1 116% -8%" fill="none" stroke="${ink}" stroke-opacity="0.16" stroke-width="1.5"/>
  <rect width="100%" height="100%" filter="url(#grain)" opacity="${grainOpacity}"/>
  ${extra}`
}

function garment({ fill, stroke, ink, center = 400, extras = '' }) {
  const x = center
  return `
  <g>
    <path d="M ${x - 100} 440 Q ${x - 150} 400 ${x - 195} 335" fill="none" stroke="${fill}" stroke-width="64" stroke-linecap="round"/>
    <path d="M ${x + 100} 440 Q ${x + 150} 400 ${x + 195} 335" fill="none" stroke="${fill}" stroke-width="64" stroke-linecap="round"/>
    <circle cx="${x - 195}" cy="335" r="32" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>
    <circle cx="${x + 195}" cy="335" r="32" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>
    <rect x="${x - 100}" y="430" width="200" height="330" rx="36" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>
    <rect x="${x - 56}" y="398" width="112" height="88" rx="30" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>
    <path d="M ${x - 24} 474 L ${x - 32} 512" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>
    <path d="M ${x + 24} 474 L ${x + 32} 512" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>
    <circle cx="${x - 32}" cy="512" r="7" fill="${ink}"/>
    <circle cx="${x + 32}" cy="512" r="7" fill="${ink}"/>
    <rect x="${x - 44}" y="556" width="88" height="64" rx="20" fill="none" stroke="${stroke}" stroke-width="2.5"/>
    <rect x="${x - 100}" y="712" width="200" height="52" rx="26" fill="none" stroke="${stroke}" stroke-width="2.5"/>
    <text x="${x}" y="744" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="21" font-weight="700" letter-spacing="7" fill="${ink}">WAO</text>
    ${extras}
  </g>`
}

function writeSvg(name, body) {
  const file = join(outDir, name)
  writeFileSync(file, `<?xml version="1.0" encoding="UTF-8"?>\n${body}\n`, 'utf8')
  console.log(`generated ${file}`)
}

function flatLay({ bgTop, bgBottom, fill, stroke, ink }, name) {
  writeSvg(
    name,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
${defs(bgTop, bgBottom)}
${background(bgTop, bgBottom, ink, { extra: garment({ fill, stroke, ink, center: 400 }) })}
</svg>`,
  )
}

flatLay(
  { bgTop: '#0f0f10', bgBottom: '#16161a', fill: '#1c1c21', stroke: '#d8d5cb', ink: '#d8d5cb' },
  'wao-black.svg',
)
flatLay(
  { bgTop: '#eee9df', bgBottom: '#e0d9c8', fill: '#d6cdb8', stroke: '#161618', ink: '#161618' },
  'wao-bone.svg',
)
flatLay(
  { bgTop: '#dbdbd7', bgBottom: '#c3c3be', fill: '#b2b2ad', stroke: '#26262b', ink: '#26262b' },
  'wao-grey.svg',
)
flatLay(
  { bgTop: '#f5f4f2', bgBottom: '#e9e8e5', fill: '#ffffff', stroke: '#161618', ink: '#161618' },
  'wao-white.svg',
)

writeSvg(
  'hero-editorial.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
${defs('#101012', '#191920')}
${background('#101012', '#191920', '#e6e2d8', {
    grainOpacity: 0.04,
    extra: `
  <text transform="rotate(-90 750 500)" x="750" y="500" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="600" letter-spacing="8" fill="#e6e2d8" fill-opacity="0.35">GENESIS MMXXVI</text>
  <circle cx="400" cy="560" r="318" fill="none" stroke="#e6e2d8" stroke-opacity="0.14" stroke-width="1"/>
  ${garment({ fill: '#1c1c21', stroke: '#d8d5cb', ink: '#d8d5cb', center: 400 })}`,
  })}
</svg>`,
)

writeSvg(
  'genesis-cover.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
${defs('#101012', '#1a1a22')}
${background('#101012', '#1a1a22', '#e6e2d8', {
    grainOpacity: 0.045,
    extra: `
  <text transform="rotate(-90 1130 470)" x="1130" y="470" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" letter-spacing="9" fill="#e6e2d8" fill-opacity="0.35">TEMPORADA 01</text>
  <circle cx="820" cy="470" r="330" fill="none" stroke="#e6e2d8" stroke-opacity="0.12" stroke-width="1"/>
  ${garment({ fill: '#1c1c21', stroke: '#d8d5cb', ink: '#d8d5cb', center: 820 })}`,
  })}
</svg>`,
)

writeSvg(
  'cover-02.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
${defs('#0b0c0e', '#131418')}
${background('#0b0c0e', '#131418', '#cfd0d5', {
    extra: `
  <circle cx="400" cy="300" r="140" fill="none" stroke="#cfd0d5" stroke-opacity="0.55" stroke-width="1.5"/>
  <path d="M 280 300 A 120 120 0 0 0 520 300" fill="#131418" stroke="#cfd0d5" stroke-opacity="0.55" stroke-width="1.5"/>
  <text x="400" y="760" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700" letter-spacing="16" fill="none" stroke="#cfd0d5" stroke-opacity="0.55" stroke-width="1.5">ECLIPSE</text>`,
  })}
</svg>`,
)

writeSvg(
  'cover-03.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
${defs('#1c1d21', '#282930')}
${background('#1c1d21', '#282930', '#e8e6df', {
    extra: `
  <circle cx="400" cy="400" r="205" fill="none" stroke="#e8e6df" stroke-opacity="0.26" stroke-width="1.5"/>
  <circle cx="400" cy="400" r="150" fill="none" stroke="#e8e6df" stroke-opacity="0.22" stroke-width="1"/>
  <path d="M 400 195 A 205 205 0 0 1 400 605" fill="none" stroke="#e8e6df" stroke-opacity="0.32" stroke-width="1"/>
  <text x="400" y="780" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700" letter-spacing="16" fill="none" stroke="#e8e6df" stroke-opacity="0.55" stroke-width="1.5">ATLAS</text>`,
  })}
</svg>`,
)

writeSvg(
  'story-edit.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200">
${defs('#e9e4d9', '#d8d0bd')}
${background('#e9e4d9', '#d8d0bd', '#161618', {
    grainOpacity: 0.035,
    extra: `
  <text transform="rotate(-90 950 530)" x="950" y="530" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" letter-spacing="9" fill="#161618" fill-opacity="0.4">IDENTIDAD · DISEÑO · PROPÓSITO</text>
  <text x="500" y="215" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="88" font-weight="700" letter-spacing="12" fill="none" stroke="#161618" stroke-opacity="0.2" stroke-width="1.5">EST. 2026</text>
  ${garment({ fill: '#efe9dc', stroke: '#161618', ink: '#161618', center: 500 })}`,
  })}
</svg>`,
)

console.log('done')