import Head from 'next/head'
import { Layout, LinkedInIcon, GitHubIcon } from '../components'
import { siteConfig } from '../lib/config'

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
      </Head>

      <Layout>
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            {siteConfig.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 animate-slide-up [animation-delay:200ms] opacity-0">
            {siteConfig.title}
          </p>
        </div>

        <div className="animate-slide-up [animation-delay:400ms] opacity-0">
          <p className="text-lg text-slate-300 mb-6 max-w-2xl leading-relaxed">
            Full stack development at scale. Generalist with a Master's in
            Computer Science from University of Helsinki.
          </p>
          <p className="text-base text-slate-400 mb-12 max-w-2xl leading-relaxed">
            AWS, TypeScript/Javascript, Kubernetes, Terraform, Ruby — whatever
            solves the problem. Focused on deliverable results, from building
            features to designing architecture.
          </p>
        </div>

        <div className="flex gap-4 animate-slide-up [animation-delay:600ms] opacity-0">
          <a
            href={siteConfig.social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View LinkedIn profile"
            className="group flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <LinkedInIcon className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
            <span>LinkedIn</span>
          </a>

          <a
            href={siteConfig.social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile"
            className="group flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <GitHubIcon className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
            <span>GitHub</span>
          </a>
        </div>
      </Layout>
    </>
  )
}
