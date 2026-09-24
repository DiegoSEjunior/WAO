import { Link } from 'react-router-dom'
import { brand, navLinks, socials, policyLinks } from '../../data/brand.js'
import { seasons } from '../../data/seasons.js'
import { Logo } from '../Navbar/Navbar.jsx'
import { BrandIcon, MailIcon, MapPinIcon } from '../icons/Icons.jsx'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo className="footer-logo" />
            <p className="footer-tagline">{brand.tagline}</p>
            <p className="footer-desc">{brand.description}</p>
            <ul className="footer-socials">
              {socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} className="footer-social" aria-label={social.label}>
                    <BrandIcon name={social.icon} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer-col" aria-label="Enlaces del pie de página">
            <p className="footer-col-title">Navegación</p>
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Colecciones en el pie de página">
            <p className="footer-col-title">Colecciones</p>
            <ul>
              {seasons.map((season) => (
                <li key={season.slug}>
                  <Link to={`/coleccion/${season.slug}`} className="footer-link">
                    Temporada {season.number} · {season.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <p className="footer-col-title">Contacto</p>
            <ul className="footer-contact">
              <li>
                <MailIcon size={16} />
                <a href={`mailto:${brand.email}`} className="footer-link">
                  {brand.email}
                </a>
              </li>
              <li>
                <MapPinIcon size={16} />
                <span>{brand.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} {brand.name}. Todos los derechos reservados.
          </p>
          <ul className="footer-policies">
            {policyLinks.map((policy) => (
              <li key={policy}>
                <a href="#" className="footer-policy">
                  {policy}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}