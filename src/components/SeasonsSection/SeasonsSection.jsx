import { seasons } from '../../data/seasons.js'
import SeasonCard from '../SeasonCard/SeasonCard.jsx'
import './SeasonsSection.css'

export default function SeasonsSection() {
  return (
    <section className="section seasons" id="colecciones">
      <div className="container">
        <div className="section-head section-head--stack">
          <p className="eyebrow">Colecciones</p>
          <h2 className="display-title">Cada temporada, una pieza de la historia.</h2>
          <p className="lead">
            WAO evoluciona por temporadas. Cada entrega nace de una idea y se viste de identidad,
            con piezas que se agotan y no vuelven.
          </p>
        </div>
        <div className="seasons-grid">
          {seasons.map((season) => (
            <SeasonCard key={season.slug} season={season} />
          ))}
        </div>
      </div>
    </section>
  )
}