const currencyFormatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
})

export function formatPrice(value) {
  return currencyFormatter.format(value)
}

export function getAvailabilityLevel(stock) {
  if (stock <= 0) return { label: 'Agotado', className: 'availability--out' }
  if (stock <= 5) return { label: `Pocas unidades · quedan ${stock}`, className: 'availability--low' }
  return { label: 'Disponible', className: 'availability--ok' }
}