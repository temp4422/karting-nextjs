import ExportedImage from 'next-image-export-optimizer'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <>
      <ExportedImage src="images/screenshot.jpg" alt="Large Image" width={500} height={500} />;
      <h1>Speed. Passion. Victory.</h1>
      <p>Welcome to the adrenaline-fueled world of professional kart racing.</p>
      <Button variant="outline"> Join the Team</Button>
    </>
  )
}
