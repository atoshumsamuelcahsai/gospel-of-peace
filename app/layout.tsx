import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { getHeaderContent } from '@/lib/sanity'


export const metadata: Metadata = {
  title: 'Gospel of Peace – Church',
  description: 'Welcome to our church. Join us Sundays!',
  icons: {
    icon: '/favicon.ico',
  }
}


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerData = await getHeaderContent('en')
  
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header data={headerData} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}