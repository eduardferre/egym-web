import type { Metadata } from 'next'
import { onest } from './ui/fonts'
import Footer from './ui/global/footer'
import Header from './ui/global/header'
import './ui/globals.css'

export const metadata: Metadata = {
  title: 'eGym App - Fitness Tracking Application',
  description:
    'eGym is a comprehensive fitness tracking application designed to optimize your workout routine. With seamless integration of machine learning, it provides personalized exercise guidance, real-time pose tracking, and progress monitoring. Perfect for fitness enthusiasts looking to elevate their training experience.',
  icons: {
    icon: '/logo.webp'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased relative bg-gray-950`}>
        {/* Background Gradient */}
        <div className="absolute inset-0 z-[-2] min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(192,142,58,0.3),rgba(0,0,0,0.9))]"></div>

        <Header />

        {/* Main Content Area */}
        <main className="flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-6 lg:px-8 mx-auto max-w-full md:max-w-4xl lg:max-w-6xl">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
