import { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Nav />
      <div className="flex-grow max-w-4xl mx-auto px-6 pt-32 pb-20">
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout
