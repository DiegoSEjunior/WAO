import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext.jsx'
import { useCart } from '../../context/CartContext.jsx'
import { useScrolled } from '../../hooks/useScrolled.js'
import { useLockBody } from '../../hooks/useLockBody.js'
import { navLinks, brand } from '../../data/brand.js'
import { seasons } from '../../data/seasons.js'
import { BrandIcon } from '../icons/Icons.jsx'
import './Navbar.css'

export function Logo({ className = '' }) {
  return (
    <Link to="/" className={`logo ${className}`} aria-label={`${brand.name} — inicio`}>
      <span className="logo-mark">WAO</span>
      <span className="logo-dot">.</span>
    </Link>
  )
}

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggleTheme}
      aria-pressed={isDark}
      title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <span className="sr-only">{isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}</span>
      <BrandIcon name={isDark ? 'sun' : 'moon'} />
    </button>
  )
}

function CartButton() {
  const { count, openCart } = useCart()
  return (
    <button type="button" className="icon-btn cart-btn" onClick={openCart} aria-label={`Abrir carrito, ${count} artículos`}>
      <BrandIcon name="cart" />
      {count > 0 && <span className="cart-badge" aria-hidden="true">{count}</span>}
    </button>
  )
}

export default function Navbar() {
  const scrolled = useScrolled(10)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const closeButtonRef = useRef(null)

  useLockBody(menuOpen)

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    function onClickOutside(event) {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) closeButtonRef.current?.focus()
  }, [menuOpen])

  function navigateAndClose() {
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Logo />

        <nav className="nav-links" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          <CartButton />
          <button
            ref={closeButtonRef}
            type="button"
            className="icon-btn nav-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
            <BrandIcon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`navbar-mobile ${menuOpen ? 'is-open' : ''}`} {...(menuOpen ? {} : { inert: '' })}>
        <nav className="navbar-mobile-inner container" aria-label="Menú móvil">
          <ul className="mobile-links">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <Link to={link.to} onClick={navigateAndClose} className="mobile-link">
                  <span className="mobile-link-index">0{index + 1}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-seasons">
            <p className="mobile-seasons-label">Colecciones</p>
            <ul>
              {seasons.map((season) => (
                <li key={season.slug}>
                  <Link to={`/coleccion/${season.slug}`} onClick={navigateAndClose} className="mobile-season-link">
                    <span className="mobile-season-name">Temporada {season.number}</span>
                    <span className="mobile-season-sub">
                      {season.name} · {season.statusLabel}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}