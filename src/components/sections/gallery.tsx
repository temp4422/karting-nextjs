import * as fs from 'fs'

import ExportedImage from 'next-image-export-optimizer'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Gallery() {
  const images = fs
    .readdirSync('./public/images/gallery/')
    .filter((filename) => filename !== 'nextImageExportOptimizer')
    .map((filename) => `/images/gallery/${filename}`)

  return (
    <section>
      <h2>Галерея</h2>
      <Carousel>
        <CarouselContent>
          {images.map((image: string, index: number) => {
            return (
              <CarouselItem key={index} className="basis-1/3  flex flex-col items-center">
                <ExportedImage
                  src={image}
                  alt={'image of' + image}
                  width={300}
                  height={200}
                  sizes="100vw"
                />
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
