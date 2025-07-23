import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import './icons.css'
// import Header from '@/components/header'
// import Footer from '@/components/footer'

// Optimize LCP with `display: 'optional'` https://web.dev/articles/optimize-lcp
// Also remove font shivering
// const inter = Inter({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'], display: 'optional' })

export const metadata: Metadata = {
  title: {
    template: '%s | Speed. Passion. Victory.',
    default: 'Speed. Passion. Victory.',
  },
  description:
    'Alepn Krokus hotel near Bukovel features apartment rooms; suites in one of the region’s most prominent ski resort areas. Enjoy your stay',
  keywords: 'alpen krokus, hotel, apartment, bukovel, ski, accomodation, vacation',
  metadataBase: new URL('https://localhost'),
  // i18n
  // alternates: {
  //   canonical: '/',
  //   languages: {
  //     'en-US': '/en-US',
  //     'de-DE': '/de-DE',
  //   },
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata
  // og:title & og:description got automatically from title & description
  openGraph: {
    title: {
      template: '%s | Alpen Krokus Hotel',
      default: 'Alpen Krokus Hotel',
    },
    description:
      'Alepn Krokus hotel near Bukovel features apartment rooms; suites in one of the region’s most prominent ski resort areas. Enjoy your stay',
    url: '/', // merged with `metadataBase`
    images: '/svg/alpen-krokus-logo.svg',
    // videos: 'video_url'
  },
  // Example with myMeta object
  // const myMeta = {
  //   title: 'Alpen Krokus Hotel',
  //   description:
  //     'Alepn Krokus hotel near Bukovel features apartment rooms; suites in one of the region’s most prominent ski resort areas. Enjoy your stay',
  //   keywords: 'alpen krokus, hotel, apartment, bukovel, ski, accomodation, vacation',
  //   ogUrl: 'localhost',
  //   ogImg: '',
  //   ogVideo: '',
  // }
  // title: {
  //   template: `%s | ${myMeta.title}`,
  //   default: myMeta.title,
  // },
  // description: `${myMeta.description}`,
  // keywords: `${myMeta.keywords}`,
  // openGraph: {
  //   title: {
  //     template: `%s | ${myMeta.title}`,
  //     default: myMeta.title,
  //   },
  //   description: `${myMeta.description}`,
  //   url: `${myMeta.ogUrl}`,
  // },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="flex flex-col items-center overflow-x-hidden text-foreground">
          {children}
        </main>
      </body>
    </html>
  )
}
