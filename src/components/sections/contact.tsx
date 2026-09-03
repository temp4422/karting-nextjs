export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-6xl px-6 py-20 sm:px-12 lg:px-20">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            Звʼязок
          </p>
          <h2 className="mt-0 text-4xl">Поговорімо про наступне коло</h2>
        </div>
        <div className="flex flex-col items-start gap-3 text-lg">
          <a
            className="underline decoration-primary decoration-2 underline-offset-4 hover:text-primary"
            href="mailto:hello@kartingx.example"
          >
            hello@kartingx.example
          </a>
          <a
            className="underline decoration-primary decoration-2 underline-offset-4 hover:text-primary"
            href="tel:+380000000000"
          >
            +38 (000) 000-00-00
          </a>
          <p className="text-sm text-muted-foreground">Концепт-проєкт</p>
        </div>
      </div>
    </section>
  )
}
