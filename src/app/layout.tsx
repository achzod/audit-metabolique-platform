import './globals.css'

export const metadata = {
  title: 'Audit Métabolique - Achzod',
  description: 'Découvre ton potentiel',
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

