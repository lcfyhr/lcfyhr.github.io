import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lars Fyhr Portfolio',
  description: 'Curated portfolio site built by Lars Fyhr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overscroll-none">{children}</body>
    </html>
  )
}
