export default function UpcommingEvents() {
  return (
    <section
      id="events"
      className="w-full max-w-6xl px-6 py-20 sm:px-12 lg:px-20"
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Календар
      </p>
      <h2 className="mt-0 text-4xl">Найближчі події</h2>
      <div className="mt-8 aspect-square w-full overflow-hidden rounded-lg border bg-white shadow-sm">
        <iframe
          src="https://fau.ua/events/"
          title="Календар подій FAU"
          loading="lazy"
          className="block h-full w-full border-0"
        />
      </div>
    </section>
  )
}
