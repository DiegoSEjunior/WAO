import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import { useLockBody } from '../../hooks/useLockBody.js'
import { formatPrice } from '../../utils/format.js'
import { BrandIcon, CartIcon, MinusIcon, PlusIcon, TrashIcon } from '../icons/Icons.jsx'
import './CartDrawer.css'

function CartItem({ item }) {
  const { incrementItem, decrementItem, removeItem } = useCart()
  const color = item.color
  return (
    <li className="cart-item">
      <img
        src={item.product.colors.find((c) => c.name === color.name)?.image ?? item.product.images[0]}
        alt=""
        className="cart-item-img"
      />
      <div className="cart-item-info">
        <p className="cart-item-name">{item.product.name}</p>
        <p className="cart-item-meta">
          Talla {item.size} · {color.name}
        </p>
        <p className="cart-item-price">{formatPrice(item.product.price)}</p>
        <div className="cart-item-actions">
          <div className="qty-stepper" aria-label={`Cantidad de ${item.product.name}`}>
            <button
              type="button"
              className="qty-btn"
              onClick={() => decrementItem(item.key)}
              aria-label={`Disminuir cantidad de ${item.product.name}`}
            >
              <MinusIcon size={15} />
            </button>
            <span className="qty-value" aria-live="polite">
              {item.qty}
            </span>
            <button
              type="button"
              className="qty-btn"
              onClick={() => incrementItem(item.key)}
              aria-label={`Aumentar cantidad de ${item.product.name}`}
            >
              <PlusIcon size={15} />
            </button>
          </div>
          <button
            type="button"
            className="cart-item-remove"
            onClick={() => removeItem(item.key)}
            aria-label={`Eliminar ${item.product.name} del carrito`}
          >
            <TrashIcon size={16} />
          </button>
        </div>
      </div>
      <p className="cart-item-total">{formatPrice(item.product.price * item.qty)}</p>
    </li>
  )
}

export default function CartDrawer() {
  const { items, count, subtotal, isOpen, closeCart } = useCart()
  const closeRef = useRef(null)

  useLockBody(isOpen)

  useEffect(() => {
    if (isOpen) closeRef.current?.focus()
    function onKeyDown(event) {
      if (event.key === 'Escape') closeCart()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, closeCart])

  return (
    <>
      <div
        className={`drawer-overlay ${isOpen ? 'is-open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`drawer ${isOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
        aria-hidden={!isOpen}
        {...(isOpen ? {} : { inert: '' })}
      >
        <header className="drawer-header">
          <div>
            <h2>Tu carrito</h2>
            <p className="drawer-count">
              {count} {count === 1 ? 'artículo' : 'artículos'}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="icon-btn"
            onClick={closeCart}
            aria-label="Cerrar carrito"
          >
            <span className="sr-only">Cerrar carrito</span>
            <BrandIcon name="close" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="drawer-empty">
            <CartIcon size={36} />
            <p className="drawer-empty-title">Tu carrito está vacío</p>
            <p className="drawer-empty-text">
              Explora la temporada y encuentra tu próxima pieza.
            </p>
            <Link to="/coleccion" className="btn btn-primary" onClick={closeCart}>
              Explorar colección
            </Link>
          </div>
        ) : (
          <>
            <ul className="drawer-items">
              {items.map((item) => (
                <CartItem key={item.key} item={item} />
              ))}
            </ul>

            <footer className="drawer-footer">
              <div className="drawer-subtotal">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p className="drawer-note">Envío calculado al finalizar la compra. IVA incluido.</p>
              <button type="button" className="btn btn-primary btn-block" disabled title="Pagos disponibles próximamente">
                Finalizar compra
              </button>
              <button type="button" className="btn btn-ghost btn-block" onClick={closeCart}>
                Seguir comprando
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  )
}