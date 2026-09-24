import { Link } from 'react-router-dom'
import { getSeasonBySlug } from '../../data/seasons.js'
import { formatPrice, getAvailabilityLevel } from '../../utils/format.js'
import { ArrowRightIcon } from '../icons/Icons.jsx'
import './ProductCard.css'

export default function ProductCard({ product, onNavigate }) {
  const season = getSeasonBySlug(product.seasonSlug)
  const seasonLabel = season ? `Temporada ${season.number}` : product.seasonSlug
  const availability = getAvailabilityLevel(product.stock)
  const primaryColor = product.colors[0]

  return (
    <article className="card">
      <div className="card-media">
        <img
          src={primaryColor.image}
          alt={`${product.name} de WAO por ${formatPrice(product.price)}`}
          loading="lazy"
          decoding="async"
        />
        {product.badge && <span className="card-badge">{product.badge}</span>}
      </div>

      <div className="card-body">
        <p className="card-category">
          {product.category} · {seasonLabel}
        </p>
        <h3 className="card-name">
          <Link to={`/producto/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="card-price">{formatPrice(product.price)}</p>

        <div className="card-colors">
          <div className="card-swatches" aria-label={`${product.colors.length} opciones de color`}>
            {product.colors.slice(0, 3).map((color) => (
              <span
                key={color.name}
                className="card-swatch"
                style={{ backgroundColor: color.hex }}
                title={color.name}
                aria-hidden="true"
              />
            ))}
          </div>
          {product.colors.length > 0 && (
            <span className="card-colors-label">
              {product.colors.length} {product.colors.length === 1 ? 'color' : 'colores'}
            </span>
          )}
        </div>

        <p className={`availability ${availability.className}`}>{availability.label}</p>

        <Link
          to={`/producto/${product.slug}`}
          className="btn btn-ghost btn-block card-cta"
          onClick={onNavigate}
        >
          Ver detalles
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </article>
  )
}