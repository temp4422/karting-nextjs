import ExportedImage from 'next-image-export-optimizer'

export default function About() {
  return (
    <>
      <h2>Про команду</h2>
      <ExportedImage
        src="/images/kart-team.jpg"
        alt="Large Image"
        width={640}
        height={480}
        sizes="100vw"
      />
      <p>
        KartingX — це команда пристрасних гонщиків, відданих швидкості, пристрасті та перемозі. Наша
        місія: розширювати межі, вигравати гонки та надихати наступне покоління ентузіастів
        автоспорту.
      </p>
    </>
  )
}
