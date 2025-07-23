import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Drivers from '@/components/sections/drivers'
import UpcommingEvents from '@/components/sections/upcommingEvents'
import Gallery from '@/components/sections/gallery'
import Sponsors from '@/components/sections/sponsors'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <About />
      <Drivers />
      <UpcommingEvents />
      <Gallery />
      <Sponsors />
      <Contact />
      {/* <Footer /> */}
    </>
  )
}
