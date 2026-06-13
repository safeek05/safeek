import './globals.css'

const siteUrl = 'https://safeek.dev'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Safeek — Frontend Developer & CS Student',
    template: '%s | Safeek',
  },
  description:
    'Frontend developer and Computer Science student available for freelance projects and internships. I build fast, responsive websites with React, Next.js, and Tailwind CSS.',
  keywords: [
    'Safeek',
    'frontend developer',
    'freelance web developer',
    'Computer Science student',
    'React developer',
    'Next.js portfolio',
    'internship',
  ],
  authors: [{ name: 'Safeek' }],
  creator: 'Safeek',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Safeek Portfolio',
    title: 'Safeek — Frontend Developer & CS Student',
    description:
      'Frontend developer and CS student available for freelance work and internships. Modern, responsive websites built with React and Next.js.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safeek — Frontend Developer & CS Student',
    description:
      'Frontend developer and CS student available for freelance work and internships.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#2563EB] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
