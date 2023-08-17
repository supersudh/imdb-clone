import { Suspense } from 'react';
import Header from '@/components/Header'
import { Inter } from 'next/font/google'

import Providers from './Providers'
import Navbar from '@/components/Navbar'
import './globals.css'
import Loading from './loading';
import SearchBox from '@/components/SearchBox';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'IMDB clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar />
          {/* SearchBox  */}
          <SearchBox />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  )
}
