import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Claudette Web',
  description: 'AI coding assistant in the browser',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
