import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kerem Korkmaz',
  description: 'Kerem Korkmaz - Yazar - Senarist - Radyocu - Yönetmen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-popins">
        <div className='bg-yellow-400 min-h-[100vh] pt-11 pb-6'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
