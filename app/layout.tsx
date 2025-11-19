import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Harmony Health Blueprint | Mary\'s Digital Lab',
  description: 'A minimalist-luxury digital guide for busy lives. Align brain, heart, body, and beauty with evidence-informed practices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
