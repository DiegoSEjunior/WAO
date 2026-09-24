import { Link } from 'react-router-dom'
import { ArrowLeftIcon, ArrowRightIcon } from '../../components/icons/Icons.jsx'
import './NotFound.css'

export default function NotFoundPage() {
  return (
    <section className="notfound">
      <div className="container notfound-inner">
        <p className="notfound-code">404</p>
        <h1 className="display-title">Esta página no existe.</h1>
        <p className="lead notfound-text">
          Lo que buscas se agotó, se movió o nunca existió. Volvamos a un lugar seguro.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary btn-lg">
            <ArrowLeftIcon />
            Volver al inicio
          </Link>
          <Link to="/coleccion" className="btn btn-ghost btn-lg">
            Explorar la colección
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}