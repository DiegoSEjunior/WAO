import genesisCover from '../assets/images/genesis-cover.svg'
import cover02 from '../assets/images/cover-02.svg'
import cover03 from '../assets/images/cover-03.svg'

export const seasons = [
  {
    slug: 'temporada-01',
    number: '01',
    name: 'GENESIS',
    year: 2026,
    tagline: 'El principio de todo.',
    description:
      'Una colección construida alrededor de una identidad. Siluetas amplias, negro profundo, bone y piezas pensadas para durar más que una temporada.',
    image: genesisCover,
    status: 'available',
    statusLabel: 'Disponible',
    featured: true,
  },
  {
    slug: 'temporada-02',
    number: '02',
    name: 'ECLIPSE',
    year: 2026,
    tagline: 'La noche toma el control.',
    description:
      'La siguiente etapa de la historia. Menos luz, más sombra, mismas convicciones. En producción.',
    image: cover02,
    status: 'upcoming',
    statusLabel: 'Próximamente',
    featured: false,
  },
  {
    slug: 'temporada-03',
    number: '03',
    name: 'ATLAS',
    year: 2027,
    tagline: 'El peso del propósito.',
    description:
      'Una colección que carga con el mapa completo de la identidad WAO. Próximamente.',
    image: cover03,
    status: 'upcoming',
    statusLabel: 'Próximamente',
    featured: false,
  },
]

export const currentSeason = seasons.find((season) => season.featured) ?? seasons[0]

export function getSeasonBySlug(slug) {
  return seasons.find((season) => season.slug === slug)
}