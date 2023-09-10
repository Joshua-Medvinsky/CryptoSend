import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cryptosend',
  description: 'Crypto transfer site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Use an ICO image for the favicon */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/logo.ico" // Replace with the path to your ICO favicon image
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
