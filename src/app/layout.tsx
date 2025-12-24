import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audit Métabolique Complet | Achzod Coaching',
  description: 'Découvre ton potentiel inexploité avec un audit métabolique personnalisé. 5000+ transformations réussies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
