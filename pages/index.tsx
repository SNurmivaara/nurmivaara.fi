import Head from 'next/head'
import { Layout, LinkedInIcon, GitHubIcon, EmailIcon } from '../components'
import { siteConfig } from '../lib/config'

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
      </Head>

      <Layout>
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              {siteConfig.name}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-8 animate-slide-up [animation-delay:200ms] opacity-0">
            <p className="text-xl md:text-2xl text-slate-400">{siteConfig.title}</p>
            <span className="text-slate-600">·</span>
            <a
              href="https://www.inven.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-colors rounded"
            >
              @ {siteConfig.currentCompany}
            </a>
            <span className="text-slate-600">·</span>
            <span className="text-sm text-slate-400">
              {siteConfig.yearsExperience}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-sm px-2 py-0.5 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded">
              MSc
            </span>
          </div>
        </div>

        <div className="animate-slide-up [animation-delay:400ms] opacity-0">
          <p className="text-lg text-slate-300 mb-6 max-w-2xl leading-relaxed">
            Generalist solving problems with a healthy disregard for 'that's not my job'. <br/>
            Still get a kick when my code hits prod.
          </p>
          <p className="text-base text-slate-400 mb-12 max-w-2xl leading-relaxed">
            Tech stack? Whatever solves the problem. <br/>
            Right now that has been TypeScript, Python and AWS.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 animate-slide-up [animation-delay:600ms] opacity-0">
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

          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Send email"
            className="group flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <EmailIcon className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
            <span>Email</span>
          </a>
        </div>
      </Layout>
    </>
  )
}
