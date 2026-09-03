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
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          aria-label="Основна навігація"
        >
          <a href="#" className="font-bold tracking-tight">
            KARTING<span className="text-primary">X</span>
          </a>
          <div className="hidden gap-6 text-sm sm:flex">
            <a href="#team" className="hover:text-primary">
              Команда
            </a>
            <a href="#drivers" className="hover:text-primary">
              Гонщики
            </a>
            <a href="#sponsors" className="hover:text-primary">
              Партнерство
            </a>
          </div>
          <a
            href="#sponsors"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Стати партнером
          </a>
        </nav>
      </header>
      <Hero />
      <About />
      <Drivers />
      <UpcommingEvents />
      <Gallery />
      <Sponsors />
      <Contact />
    </>
  )
}
