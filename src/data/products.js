import waoBlack from '../assets/images/wao-black.svg'
import waoBone from '../assets/images/wao-bone.svg'
import waoGrey from '../assets/images/wao-grey.svg'
import waoWhite from '../assets/images/wao-white.svg'

export const currencyNote = 'IVA incluido'

export const products = [
  {
    id: 'h-genesis',
    slug: 'hoodie-genesis',
    name: 'Hoodie Genesis',
    price: 110000,
    category: 'Hoodie',
    seasonSlug: 'temporada-01',
    badge: 'Nuevo',
    featured: true,
    colors: [
      { name: 'Negro', hex: '#17171a', image: waoBlack },
      { name: 'Bone', hex: '#e8e2d8', image: waoBone },
      { name: 'Gris', hex: '#90908c', image: waoGrey },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 14,
    images: [waoBlack, waoBone],
    description:
      'El hoodie insignia de la temporada. Corte oversized, algodón pesado y un carácter que habla por sí solo. Diseñado para acompañarte todos los días.',
    details: [
      'Algodón peinado 380 g/m²',
      'Corte oversized con hombro caído',
      'Bolsillo canguro y capucha forrada',
      'Diseño exclusivo de la temporada',
    ],
    care: 'Lavar a máquina con agua fría. No usar secadora. Planchar del revés.',
  },
  {
    id: 'h-genesis-fe',
    slug: 'hoodie-genesis-fe',
    name: 'Hoodie Genesis “Fe”',
    price: 118000,
    category: 'Hoodie',
    seasonSlug: 'temporada-01',
    badge: 'Edición limitada',
    featured: true,
    colors: [
      { name: 'Negro', hex: '#17171a', image: waoBlack },
      { name: 'Bone', hex: '#e8e2d8', image: waoBone },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 6,
    images: [waoBlack, waoBone],
    description:
      'Una pieza de edición limitada con serigrafía al frente y detalles tonales. Para quienes llevan su propósito en la espalda y en el pecho.',
    details: [
      'Algodón peinado 400 g/m²',
      'Serigrafía de alta densidad',
      'Puños y cintura en canalé técnico',
      'Numerado de forma individual',
    ],
    care: 'Lavar a máquina con agua fría, del revés. No usar secadora.',
  },
  {
    id: 'c-genesis',
    slug: 'crewneck-genesis',
    name: 'Crewneck Genesis',
    price: 98000,
    category: 'Crewneck',
    seasonSlug: 'temporada-01',
    badge: 'Nuevo',
    featured: true,
    colors: [
      { name: 'Negro', hex: '#17171a', image: waoBlack },
      { name: 'Bone', hex: '#e8e2d8', image: waoBone },
      { name: 'Gris', hex: '#90908c', image: waoGrey },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 9,
    images: [waoBlack, waoBone, waoGrey],
    description:
      'El punto medio perfecto. Un crewneck limpio, sin estridencias, con la identidad grabada en cada costura. Menos ruido, más presencia.',
    details: [
      'Algodón peinado 340 g/m²',
      'Cuello de canalé reforzado',
      'Diseño minimalista en pecho',
      'Costuras planas',
    ],
    care: 'Lavar a máquina con agua fría. No usar secadora.',
  },
  {
    id: 't-genesis',
    slug: 'tee-genesis',
    name: 'Tee Genesis',
    price: 65000,
    category: 'Tee',
    seasonSlug: 'temporada-01',
    badge: 'Nuevo',
    featured: true,
    colors: [
      { name: 'Blanco', hex: '#f2f1ed', image: waoWhite },
      { name: 'Negro', hex: '#17171a', image: waoBlack },
      { name: 'Bone', hex: '#e8e2d8', image: waoBone },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 22,
    images: [waoWhite, waoBlack],
    description:
      'La base del guardarropa WAO. Camiseta de algodón suave, corte recto y un mensaje que no necesita explicación: vive tu fe, luce tu propósito.',
    details: [
      'Algodón cardado 200 g/m²',
      'Corte regular',
      'Serigrafía en pecho y espalda',
    ],
    care: 'Lavar a máquina con agua fría, del revés.',
  },
  {
    id: 'j-genesis',
    slug: 'jogger-genesis',
    name: 'Jogger Genesis',
    price: 74000,
    category: 'Jogger',
    seasonSlug: 'temporada-01',
    badge: 'Nuevo',
    featured: false,
    colors: [
      { name: 'Negro', hex: '#17171a', image: waoBlack },
      { name: 'Gris', hex: '#90908c', image: waoGrey },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 0,
    images: [waoBlack, waoGrey],
    description:
      'Comodidad con actitud. Jogger de tiro medio con bolsillos funcionales y cintura ajustable. Se agotó rápido por una razón.',
    details: [
      'Mezcla de algodón y poliéster',
      'Cintura con cordón y bolsillos',
      'Ajuste cómodo en tobillo',
    ],
    care: 'Lavar a máquina con agua fría. No usar secadora.',
  },
]

export const featuredProducts = products.filter((product) => product.featured)

export function getProductsBySeason(slug) {
  return products.filter((product) => product.seasonSlug === slug)
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug)
}