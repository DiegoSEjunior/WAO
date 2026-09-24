import { Link, useParams } from 'react-router-dom'
import { getSeasonBySlug } from '../../data/seasons.js'
import { getProductsBySeason } from '../../data/products.js'
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx'
import Newsletter from '../../components/Newsletter/Newsletter.jsx'
import NotFoundPage from '../NotFound/NotFound.jsx'
import { ArrowLeftIcon, ArrowRightIcon } from '../../components/icons/Icons.jsx'
import './Season.css'

export default function SeasonPage() {
  const { seasonSlug } = useParams()
  const season = getSeasonBySlug(seasonSlug)

  if (!season) return <NotFoundPage />

  const seasonProducts = getProductsBySeason(season.slug)
  const isAvailable = season.status === 'available'

  return (
    <>
      <section className="season-hero">
        <div className="season-hero-bg" aria-hidden="true">
          <img src={season.image} alt="" />
        </div>
        <div className="container">
          <nav className="breadcrumb" aria-label="Ruta de navegación">
            <Link to="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link to="/coleccion">Colección</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Temporada {season.number}</span>
          </nav>

          <div className="season-hero-copy">
            <p className="eyebrow">Temporada {season.number} · {season.year}</p>
            <h1 className="season-hero-title">{season.name}</h1>
            <p className="season-hero-tagline">{season.tagline}</p>
            <p className="season-hero-text">{season.description}</p>
            <div className="season-hero-actions">
              {isAvailable ? (
                <a href="#productos-s" className="btn btn-primary btn-lg">
                  Ver piezas
                  <ArrowRightIcon />
                </a>
              ) : (
                <a href="#newsletter" className="btn btn-primary btn-lg">
                  Avisarme cuando esté disponible
                  <ArrowRightIcon />
                </a>
              )}
              <Link to="/coleccion" className="btn btn-ghost btn-lg">
                <ArrowLeftIcon />
                Todas las colecciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section season-products" id="productos-s">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Piezas de la temporada</p>
              <h2 className="display-title">{season.name}</h2>
            </div>
            <p className="season-products-count muted">
              {isAvailable ? `${seasonProducts.length} piezas` : season.statusLabel}
            </p>
          </div>

          {seasonProducts.length > 0 ? (
            <ProductGrid products={seasonProducts} />
          ) : (
            <div className="season-empty">
              <p className="season-empty-title">{season.name} está en camino.</p>
              <p className="season-empty-text">
                Esta colección aún está en producción. Déjanos tu correo y serás de los primeros
                en conocer cada detalle.
              </p>
              <a href="#newsletter" className="btn btn-primary">
                Unirme a la lista
                <ArrowRightIcon size={17} />
              </a>
            </div>
          )}
        </div>
      </section>

      <Newsletter />
    </>
  )
}