import { useState } from 'react'
import { CheckIcon, ArrowRightIcon } from '../icons/Icons.jsx'
import './Newsletter.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setError('')
    const value = email.trim()
    if (!value) {
      setError('Ingresa tu correo para continuar.')
      return
    }
    if (!EMAIL_PATTERN.test(value)) {
      setError('Ese correo no parece válido. Revísalo.')
      return
    }
    setSubmitted(true)
  }

  return (
    <section className="section newsletter" id="newsletter">
      <div className="container">
        <div className="newsletter-card">
          <p className="eyebrow">Comunidad WAO</p>
          <h2 className="newsletter-title">Sé el primero en conocer cada entrega.</h2>
          <p className="newsletter-text">
            Acceso anticipado a lanzamientos, piezas reservadas y noticias de la temporada.
            Sin spam, solo lo esencial.
          </p>

          {submitted ? (
            <p className="newsletter-success" role="status">
              <CheckIcon />
              ¡Listo! Te avisaremos cuando caiga la próxima entrega.
            </p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <label className="sr-only" htmlFor="newsletter-email">
                Correo electrónico
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                className={`field ${error ? 'field-error' : ''}`}
                placeholder="tu@correo.com"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (error) setError('')
                }}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'newsletter-error' : undefined}
              />
              <button type="submit" className="btn btn-primary">
                Suscribirme
                <ArrowRightIcon size={17} />
              </button>
            </form>
          )}

          {error && (
            <p className="error-text newsletter-error" id="newsletter-error" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}