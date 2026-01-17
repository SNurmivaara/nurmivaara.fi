import Head from 'next/head'
import Link from 'next/link'
import { Layout } from '../components'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Sami Nurmivaara</title>
      </Head>

      <Layout>
        <div className="animate-fade-in text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-slate-700">
            404
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8">
            Page not found
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Go home
          </Link>
        </div>
      </Layout>
    </>
  )
}
