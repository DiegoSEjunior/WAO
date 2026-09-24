import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const CART_KEY = 'wao-cart'

const CartContext = createContext(null)

function loadCart() {
  try {
    const raw = window.localStorage.getItem(CART_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function buildKey(productId, size, colorName) {
  return `${productId}--${size}--${colorName}`
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(items))
    } catch {
      return undefined
    }
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((open) => !open), [])

  const addItem = useCallback((product, size, color) => {
    const key = buildKey(product.id, size, color.name)
    setItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, qty: item.qty + 1 } : item,
        )
      }
      return [...current, { key, product, size, color, qty: 1 }]
    })
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }, [])

  const incrementItem = useCallback(
    (key) => {
      setItems((current) =>
        current.map((item) => (item.key === key ? { ...item, qty: item.qty + 1 } : item)),
      )
    },
    [],
  )

  const decrementItem = useCallback((key) => {
    setItems((current) =>
      current
        .map((item) => (item.key === key ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const count = useMemo(() => items.reduce((total, item) => total + item.qty, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.product.price * item.qty, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      incrementItem,
      decrementItem,
      clearCart,
    }),
    [items, count, subtotal, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, incrementItem, decrementItem, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart debe usarse dentro de CartProvider')
  return context
}