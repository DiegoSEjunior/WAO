import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import CartDrawer from '../CartDrawer/CartDrawer.jsx'
import ScrollToTop from '../ScrollToTop.jsx'

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <Navbar />
      <ScrollToTop />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}