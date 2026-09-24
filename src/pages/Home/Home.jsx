import Hero from '../../components/Hero/Hero.jsx'
import Marquee from '../../components/Marquee/Marquee.jsx'
import FeaturedCollection from '../../components/FeaturedCollection/FeaturedCollection.jsx'
import ProductsSection from '../../components/ProductsSection/ProductsSection.jsx'
import Story from '../../components/Story/Story.jsx'
import SeasonsSection from '../../components/SeasonsSection/SeasonsSection.jsx'
import Newsletter from '../../components/Newsletter/Newsletter.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedCollection />
      <ProductsSection />
      <Story />
      <SeasonsSection />
      <Newsletter />
    </>
  )
}