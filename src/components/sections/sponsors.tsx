export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="w-full bg-foreground px-6 py-20 text-background sm:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            Партнерство
          </p>
          <h2 className="mt-0 text-4xl sm:text-5xl">Станьте частиною команди, за якою стежать</h2>
        </div>
        <div>
          <p className="text-lg text-background/70">
            Підтримайте концепт KartingX і отримайте помітну присутність у наших матеріалах, на
            подіях та в локальній спільноті.
          </p>
          <a
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
            href="#contact"
          >
            Обговорити партнерство →
          </a>
        </div>
      </div>
    </section>
  )
}
