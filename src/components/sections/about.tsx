import ExportedImage from 'next-image-export-optimizer'

export default function About() {
  return (
    <section
      id="team"
      className="w-full max-w-6xl gap-10 px-6 py-20 sm:px-12 lg:grid lg:grid-cols-2 lg:px-20"
    >
      <div>
        <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          Про команду
        </p>
        <h2 className="mt-0 text-4xl sm:text-5xl">Швидкість має значення. Партнерство — теж.</h2>
        <p className="max-w-xl text-lg text-muted-foreground">
          KartingX — команда, що показує, як спорт, локальна спільнота та бізнес можуть зростати
          разом.
        </p>
      </div>
      <div>
        <ExportedImage
          src="/images/gallery/kart-team-mono.jpg"
          alt="Команда KartingX перед стартом"
          width={640}
          height={480}
          className="aspect-video w-full object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}
