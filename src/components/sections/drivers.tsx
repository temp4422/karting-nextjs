import ExportedImage from 'next-image-export-optimizer'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Drivers() {
  return (
    <>
      <h2>Знайомтесь з водіями</h2>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <DriverCard name="водій X" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <DriverCard name="водій Y" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <DriverCard name="водій Z" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}
function DriverCard({
  img = '/images/driver.jpeg',
  name = 'водій Х',
  kart = 'Sodi GT-series',
}: {
  img?: string
  name?: string
  kart?: string
}) {
  return (
    <div className="flex flex-col items-center">
      <ExportedImage src={img} alt="Driver image" width={300} height={200} sizes="100vw" />
      <p>
        Водій: <b>{name}</b>
      </p>
      <p>
        Карт: <b>{kart}</b>
      </p>
    </div>
  )
}
