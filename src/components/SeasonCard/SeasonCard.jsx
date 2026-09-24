import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../icons/Icons.jsx'
import './SeasonCard.css'

export default function SeasonCard({ season }) {
  return (
    <article className="season-card">
      <Link to={`/coleccion/${season.slug}`} className="season-card-link">
        <div className="season-card-media">
          <img
            src={season.image}
            alt={`Portada de la Temporada ${season.number} ${season.name} de WAO`}
            loading="lazy"
            decoding="async"
          />
          <span className="season-card-tag">
            Temporada {season.number} · {season.year}
          </span>
          <span className={`season-card-status ${season.status}`}>{season.statusLabel}</span>
        </div>
        <div className="season-card-body">
          <div>
            <h3 className="season-card-name">{season.name}</h3>
            <p className="season-card-tagline">{season.tagline}</p>
          </div>
          <span className="season-card-arrow" aria-hidden="true">
            <ArrowRightIcon />
          </span>
        </div>
      </Link>
    </article>
  )
}