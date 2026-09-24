import { Link } from 'react-router-dom'
import { featuredProducts } from '../../data/products.js'
import ProductGrid from '../ProductGrid/ProductGrid.jsx'
import { ArrowRightIcon } from '../icons/Icons.jsx'
import './ProductsSection.css'

export default function ProductsSection() {
  return (
    <section className="section products-section" id="productos">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Los favoritos</p>
            <h2 className="display-title">Piezas de la temporada</h2>
          </div>
          <Link to="/coleccion" className="link-arrow">
            Ver todo
            <ArrowRightIcon size={17} />
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
        <p className="products-note">Piezas numeradas y en edición limitada · {featuredProducts.length} destacados</p>
      </div>
    </section>
  )
}