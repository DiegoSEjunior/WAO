import { Link } from 'react-router-dom'
import { currentSeason } from '../../data/seasons.js'
import { ArrowRightIcon } from '../icons/Icons.jsx'
import './FeaturedCollection.css'

export default function FeaturedCollection() {
  return (
    <section className="section featured" id="temporada">
      <div className="container featured-grid">
        <figure className="featured-media">
          <img
            src={currentSeason.image}
            alt={`Portada de la Temporada ${currentSeason.number} ${currentSeason.name} de WAO`}
            loading="lazy"
          />
        </figure>

        <div className="featured-copy">
          <p className="eyebrow">Temporada {currentSeason.number}</p>
          <h2 className="featured-title">{currentSeason.name}</h2>
          <p className="featured-year">{currentSeason.year}</p>
          <p className="featured-text">
            {currentSeason.description || currentSeason.tagline}
          </p>
          <ul className="featured-facts">
            <li>
              <strong>01</strong>
              <span>Colección</span>
            </li>
            <li>
              <strong>06</strong>
              <span>Piezas</span>
            </li>
            <li>
              <strong>04</strong>
              <span>Tallas</span>
            </li>
            <li>
              <strong>{currentSeason.statusLabel}</strong>
              <span>Estado</span>
            </li>
          </ul>
          <div className="featured-actions">
            <Link to={`/coleccion/${currentSeason.slug}`} className="btn btn-primary btn-lg">
              Explorar colección
              <ArrowRightIcon />
            </Link>
            <Link to="/coleccion" className="link-arrow">
              Ver todas las colecciones
              <ArrowRightIcon size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}