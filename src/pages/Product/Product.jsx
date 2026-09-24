import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductBySlug, getProductsBySeason } from '../../data/products.js'
import { getSeasonBySlug } from '../../data/seasons.js'
import { formatPrice, getAvailabilityLevel } from '../../utils/format.js'
import { useCart } from '../../context/CartContext.jsx'
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx'
import NotFoundPage from '../NotFound/NotFound.jsx'
import { ArrowLeftIcon, CheckIcon, ArrowRightIcon } from '../../components/icons/Icons.jsx'
import './Product.css'

export default function ProductPage() {
  const { productSlug } = useParams()
  const product = getProductBySlug(productSlug)
  const { addItem, openCart } = useCart()

  const firstColor = product?.colors?.[0]
  const [selectedColor, setSelectedColor] = useState(firstColor)
  const [selectedSize, setSelectedSize] = useState('')
  const [sizeError, setSizeError] = useState('')
  const [justAdded, setJustAdded] = useState(false)

  const gallery = useMemo(() => {
    if (!product) return []
    const unique = new Set()
    product.colors.forEach((color) => unique.add(color.image))
    product.images.forEach((image) => unique.add(image))
    return [...unique]
  }, [product])

  const activeImage = selectedColor?.image ?? product?.images?.[0]

  const slugRef = useRef(productSlug)
  useEffect(() => {
    if (slugRef.current === productSlug) return
    slugRef.current = productSlug
    const fresh = getProductBySlug(productSlug)
    setSelectedColor(fresh?.colors?.[0])
    setSelectedSize('')
    setSizeError('')
    setJustAdded(false)
  }, [productSlug])

  if (!product) return <NotFoundPage />

  const season = getSeasonBySlug(product.seasonSlug)
  const seasonLabel = season ? `Temporada ${season.number}` : product.seasonSlug
  const availability = getAvailabilityLevel(product.stock)
  const isSoldOut = product.stock <= 0

  const related = getProductsBySeason(product.seasonSlug)
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3)

  function handleAdd() {
    if (!selectedSize) {
      setSizeError('Selecciona una talla para continuar.')
      return
    }
    setSizeError('')
    addItem(product, selectedSize, selectedColor)
    setJustAdded(true)
    openCart()
    window.setTimeout(() => setJustAdded(false), 2500)
  }

  return (
    <>
      <section className="product-detail section">
        <div className="container">
          <nav className="breadcrumb product-breadcrumb" aria-label="Ruta de navegación">
            <Link to="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link to="/coleccion">Colección</Link>
            <span aria-hidden="true">/</span>
            <Link to={`/coleccion/${product.seasonSlug}`}>{seasonLabel}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className="product-layout">
            <div className="product-gallery">
              <div className="product-gallery-main">
                <img src={activeImage} alt={`${product.name} de WAO en color ${selectedColor?.name ?? ''}`} />
                {product.badge && <span className="card-badge">{product.badge}</span>}
              </div>

              <div className="product-thumbs" role="group" aria-label="Colores disponibles">
                {gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className={`product-thumb ${activeImage === image ? 'is-active' : ''}`}
                    onClick={() => {
                      const match = product.colors.find((color) => color.image === image)
                      if (match) setSelectedColor(match)
                    }}
                    aria-label={`Ver imagen ${index + 1} del producto`}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-info">
              <p className="eyebrow">
                {product.category} · {seasonLabel}
              </p>
              <h1 className="product-title">{product.name}</h1>
              <p className="product-price">{formatPrice(product.price)}</p>
              <p className={`availability ${availability.className}`}>{availability.label}</p>

              <p className="product-description">{product.description}</p>

              <fieldset className="product-option">
                <legend>
                  Talla {!selectedSize && <span className="product-option-hint">(obligatoria)</span>}
                </legend>
                <div className="size-options" role="radiogroup" aria-label="Selecciona una talla">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      role="radio"
                      aria-checked={selectedSize === size}
                      className={`size-btn ${selectedSize === size ? 'is-selected' : ''} ${isSoldOut ? 'is-disabled' : ''}`}
                      onClick={() => {
                        setSelectedSize(size)
                        setSizeError('')
                      }}
                      disabled={isSoldOut}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {sizeError && (
                  <p className="error-text product-option-error" role="alert">
                    {sizeError}
                  </p>
                )}
              </fieldset>

              <fieldset className="product-option">
                <legend>Color · {selectedColor?.name}</legend>
                <div className="color-options" role="radiogroup" aria-label="Selecciona un color">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      role="radio"
                      aria-checked={selectedColor?.name === color.name}
                      className={`color-btn ${selectedColor?.name === color.name ? 'is-selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      <span className="color-btn-swatch" style={{ backgroundColor: color.hex }} />
                      {color.name}
                      {selectedColor?.name === color.name && <CheckIcon size={14} />}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="product-buy">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleAdd}
                  disabled={isSoldOut}
                >
                  {isSoldOut ? 'Agotado' : justAdded ? 'Agregado ✓' : 'Agregar al carrito'}
                </button>
                {!isSoldOut && (
                  <p className="product-buy-note">
                    {justAdded
                      ? 'Listo. Revisa tu carrito.'
                      : 'Envíos a todo el país · Cambios dentro de 15 días.'}
                  </p>
                )}
              </div>

              <div className="product-accordions">
                <details open>
                  <summary>Detalles</summary>
                  <ul className="product-list">
                    {product.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </details>
                <details>
                  <summary>Cuidado</summary>
                  <p className="product-list-text">{product.care}</p>
                </details>
                <details>
                  <summary>Envío y devoluciones</summary>
                  <p className="product-list-text">
                    Despachamos a todo el país en 2 a 5 días hábiles. Cambios y devoluciones
                    dentro de los 15 días siguientes a la compra.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section product-related">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">También te puede gustar</p>
                <h2 className="display-title">De la misma temporada</h2>
              </div>
              <Link to={`/coleccion/${product.seasonSlug}`} className="link-arrow">
                Ver temporada
                <ArrowRightIcon size={17} />
              </Link>
            </div>
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </>
  )
}