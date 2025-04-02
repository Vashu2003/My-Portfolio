import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar/Navbar' 
import Footer from '../components/Footer/Footer' 


export const metadata: Metadata = {
  title: 'Vashu | Portfolio',
  description: 'Showcase of my work',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 bg-gray-900">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}