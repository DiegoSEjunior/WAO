import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import HomePage from './pages/Home/Home.jsx'
import CollectionPage from './pages/Collection/Collection.jsx'
import SeasonPage from './pages/Collection/Season.jsx'
import ProductPage from './pages/Product/Product.jsx'
import NotFoundPage from './pages/NotFound/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/coleccion" element={<CollectionPage />} />
        <Route path="/coleccion/:seasonSlug" element={<SeasonPage />} />
        <Route path="/producto/:productSlug" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}