import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {TransactionProvider} from '@/context/TransactionContext';

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
    <TransactionProvider>
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
    </TransactionProvider>
  )
}
