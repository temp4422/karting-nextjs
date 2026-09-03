import ExportedImage from 'next-image-export-optimizer'
import { Button } from '@/components/ui/button'
import { teamContent } from '@/lib/content'

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-foreground text-background">
      <ExportedImage
        src="/images/gallery/kart-racer.jpeg"
        alt="Гонщик KartingX на трасі"
        width={1024}
        height={1024}
        className="h-[60vh] w-full object-cover md:aspect-[16/10] md:h-auto"
        priority
        sizes="100vw"
      />
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-12 lg:px-20">
        <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-primary uppercase">
          {teamContent.eyebrow}
        </p>
        <h1 className="my-0 max-w-3xl text-5xl leading-[0.95] sm:text-7xl">{teamContent.title}</h1>
        <p className="my-8 max-w-xl text-lg text-background/80">{teamContent.description}</p>
        <Button asChild size="lg">
          <a href="#sponsors">Переглянути можливості</a>
        </Button>
      </div>
    </section>
  )
}
