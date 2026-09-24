import { Link } from 'react-router-dom'
import { currentSeason } from '../../data/seasons.js'
import heroImage from '../../assets/images/hero-editorial.svg'
import { ArrowRightIcon } from '../icons/Icons.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <span className="hero-wordmark" aria-hidden="true">
        WAO
      </span>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Nueva colección · {currentSeason.year}</p>
          <h1 className="hero-title">WAO</h1>
          <p className="hero-tagline">“Vive tu fe, luce tu propósito.”</p>
          <p className="hero-text">
            Una marca construida alrededor de identidad, diseño y propósito. Piezas urbanas
            para quienes llevan algo más que ropa.
          </p>
          <div className="hero-actions">
            <Link to={`/coleccion/${currentSeason.slug}`} className="btn btn-primary btn-lg">
              Explorar colección
              <ArrowRightIcon />
            </Link>
            <Link to="/#nosotros" className="btn btn-ghost btn-lg">
              Nuestra historia
            </Link>
          </div>
          <ul className="hero-meta">
            <li>Temporada 01 · Genesis disponible</li>
            <li>Envíos a todo el país</li>
            <li>Piezas de edición limitada</li>
          </ul>
        </div>

        <figure className="hero-media">
          <img
            src={heroImage}
            alt="Modelo con hoodie negro de la colección Genesis de WAO sobre fondo oscuro"
            loading="eager"
            fetchPriority="high"
          />
          <figcaption className="hero-media-card" aria-hidden="true">
            <span className="hero-media-eyebrow">Temporada 01</span>
            <strong>GENESIS</strong>
            <span className="hero-media-status">Disponible ahora</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}