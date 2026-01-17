import Link from 'next/link'
import { useRouter } from 'next/router'

export const Nav = () => {
  const router = useRouter()

  const linkClass = (path) =>
    router.pathname === path
      ? 'text-white hover:text-blue-400 transition-colors'
      : 'text-slate-400 hover:text-blue-400 transition-colors'

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-semibold hover:text-blue-400 transition-colors"
        >
          SN
        </Link>
        <div className="flex gap-6">
          <Link href="/" className={linkClass('/')}>
            About
          </Link>
          <Link href="/cv" className={linkClass('/cv')}>
            CV
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
