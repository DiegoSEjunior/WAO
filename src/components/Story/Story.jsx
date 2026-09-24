import { Link } from 'react-router-dom'
import { currentSeason } from '../../data/seasons.js'
import storyImage from '../../assets/images/story-edit.svg'
import { ArrowRightIcon } from '../icons/Icons.jsx'
import './Story.css'

const pillars = [
  {
    index: '01',
    title: 'Historia',
    text: 'WAO nace de la convicción de que lo que vistes es parte de lo que eres. Cada prenda cuenta un inicio.',
  },
  {
    index: '02',
    title: 'Propósito',
    text: 'Fe, identidad y carácter. Diseñamos para quienes viven con intención y no necesitan explicarse.',
  },
  {
    index: '03',
    title: 'Filosofía',
    text: 'Menos, pero mejor. Piezas duraderas, siluetas limpias y una marca que no necesita subir el volumen.',
  },
]

export default function Story() {
  return (
    <section className="section story" id="nosotros">
      <div className="container">
        <div className="section-head section-head--stack">
          <p className="eyebrow">Nuestra historia</p>
          <h2 className="display-title">Más que ropa, una identidad.</h2>
          <p className="lead">
            WAO no es una fábrica de tendencias. Es una marca construida alrededor de identidad,
            diseño y propósito, para quienes llevan algo más que una etiqueta.
          </p>
        </div>

        <div className="story-grid">
          <div className="story-pillars">
            {pillars.map((pillar) => (
              <article key={pillar.index} className="story-pillar">
                <span className="story-pillar-index">{pillar.index}</span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </article>
            ))}
            <Link to={`/coleccion/${currentSeason.slug}`} className="btn btn-ghost">
              Conocer la temporada 01
              <ArrowRightIcon size={17} />
            </Link>
          </div>

          <figure className="story-media">
            <img
              src={storyImage}
              alt="Composición editorial de la identidad visual de WAO con prendas y tipografía"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}