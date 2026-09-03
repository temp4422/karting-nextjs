"use client"

import ExportedImage from 'next-image-export-optimizer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { drivers } from '@/lib/content'

export default function Drivers() {
  return (
    <section id="drivers" className="w-full bg-muted/40 px-6 py-20 sm:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          Люди за кермом
        </p>
        <h2 className="mt-0 text-4xl">Знайомтесь із гонщиками</h2>
        <Carousel className="mx-auto mt-10 w-full max-w-md">
          <CarouselContent>
            {drivers.map((driver) => (
              <CarouselItem key={driver.name}>
                <article className="group overflow-hidden border bg-background">
                  <ExportedImage
                    src={driver.image}
                    alt={`Портрет гонщика ${driver.name}`}
                    width={400}
                    height={400}
                    className="mx-auto aspect-square w-3/5 object-cover grayscale transition duration-500 group-hover:grayscale-0"
                    sizes="(max-width: 768px) 60vw, 240px"
                  />
                  <div className="p-5">
                    <p className="mb-1 text-sm text-primary">{driver.className}</p>
                    <h3>{driver.name}</h3>
                    <p className="text-muted-foreground">{driver.bio}</p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious aria-label="Попередній гонщик" />
          <CarouselNext aria-label="Наступний гонщик" />
        </Carousel>
      </div>
    </section>
  )
}
