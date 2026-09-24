import './Marquee.css'

const items = [
  'WAO',
  'Vive tu fe, luce tu propósito',
  'Temporada 01 · Genesis',
  'Edición limitada',
]

export default function Marquee() {
  const row = items.join('  —  ')
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span className="marquee-content">{row}</span>
        <span className="marquee-content">{row}</span>
      </div>
    </div>
  )
}