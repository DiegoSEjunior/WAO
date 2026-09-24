import { seasons } from '../../data/seasons.js'
import { products } from '../../data/products.js'
import SeasonCard from '../../components/SeasonCard/SeasonCard.jsx'
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx'
import Newsletter from '../../components/Newsletter/Newsletter.jsx'
import { ArrowRightIcon } from '../../components/icons/Icons.jsx'
import './Collection.css'

export default function CollectionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-head section-head--stack">
            <p className="eyebrow">Colección completa</p>
            <h1 className="display-title">Cada temporada cuenta un principio.</h1>
            <p className="lead">
              Explora todas las entregas de WAO. Las piezas se producen en cantidades
              limitadas y no vuelven a fabricarse.
            </p>
          </div>
        </div>
      </section>

      <section className="section--tight seasons-block">
        <div className="container">
          <div className="seasons-grid">
            {seasons.map((season) => (
              <SeasonCard key={season.slug} season={season} />
            ))}
          </div>
        </div>
      </section>

      <section className="section all-products">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Disponibles ahora</p>
              <h2 className="display-title">Todas las piezas</h2>
            </div>
            <p className="all-products-count muted">{products.length} productos</p>
          </div>
          <ProductGrid products={products} />
          <a href="#newsletter" className="link-arrow products-section-link">
            Avisarme cuando caiga la próxima entrega
            <ArrowRightIcon size={17} />
          </a>
        </div>
      </section>

      <Newsletter />
    </>
  )
}