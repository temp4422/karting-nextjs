'use client'

import Autoplay from 'embla-carousel-autoplay'
import ExportedImage from 'next-image-export-optimizer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

// // Alternative image loading approach using fs to read images from the public folder.
// import * as fs from 'fs'
// import Carousel from '@/components/carousel'
// const cakes = fs
//   .readdirSync('./public/images/cakes/')
//   .filter((filename) => filename !== 'nextImageExportOptimizer')
//   .map((filename) => `/images/cakes/${filename}`)
// export default function CarouselWithImages() {
//   return (
//     <>
//       <Carousel images={cakes} id={'carousel1'} />
//     </>
//   )
// }

const gallery = [
  { src: '/images/gallery/hero_mod1.jpg', alt: 'Гонщик KartingX на трасі' },
  { src: '/images/gallery/kart-racer.jpeg', alt: 'Гонщик входить у поворот' },
  { src: '/images/gallery/racer.jpeg', alt: 'Картинг на гоночній трасі' },
  { src: '/images/gallery/kart-team-mono.jpg', alt: 'Команда перед стартом' },
  { src: '/images/gallery/team.jpeg', alt: 'Командна робота в паддоку' },
  { src: '/images/gallery/go-kart.jpg', alt: 'Карт на гоночній трасі' },
  { src: '/images/gallery/kart-race.jpg', alt: 'Гонщики змагаються на трасі' },
  { src: '/images/gallery/kart-race-2.jpg', alt: 'Гонщики змагаються на трасі' },
  { src: '/images/gallery/karting-paddock.jpg', alt: 'Карти команди в паддоку' },
  { src: '/images/gallery/kart-start.jpg', alt: 'Старт картингової гонки' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="w-full max-w-6xl px-6 py-20 sm:px-12 lg:px-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            Поза трасою
          </p>
          <h2 className="mt-0 text-4xl">Моменти, які хочеться підтримати</h2>
        </div>
      </div>
      <Carousel
        className="mx-auto mt-10 w-full max-w-4xl"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000 })]}
      >
        <CarouselContent>
          {gallery.map((image) => (
            <CarouselItem key={image.src} className="md:basis-1/2 lg:basis-1/3">
              <div className="gallery-image">
                <ExportedImage
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="aspect-square w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious aria-label="Попереднє фото" />
        <CarouselNext aria-label="Наступне фото" />
      </Carousel>
    </section>
  )
}
