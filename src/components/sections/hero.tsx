import ExportedImage from 'next-image-export-optimizer'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <>
      <ExportedImage
        src="images/hero.jpg"
        alt="Kart Racing Hero Image"
        fetchPriority="high"
        loading="eager"
        width={1024}
        height={768}
        sizes="100vw"
      />
      <h1>Швидкість. Пристрасть. Перемога.</h1>
      <p>Ласкаво просимо у світ професійних картингів, сповнений адреналіну.</p>
      <Button variant="default" className="mb-10">
        Приєднатися до команди
      </Button>
    </>
  )
}
