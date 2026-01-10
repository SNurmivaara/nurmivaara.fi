import Head from 'next/head'
import { Layout, LinkedInIcon, GitHubIcon, ChevronRightIcon } from '../components'
import { siteConfig } from '../lib/config'

const ContactLink = ({ href, icon: Icon, title, handle, hoverColor }) => {
  const colorClasses = {
    blue: {
      border: 'hover:border-blue-500/50',
      bg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
      icon: 'text-blue-400',
      text: 'group-hover:text-blue-400'
    },
    purple: {
      border: 'hover:border-purple-500/50',
      bg: 'bg-purple-500/10 group-hover:bg-purple-500/20',
      icon: 'text-purple-400',
      text: 'group-hover:text-purple-400'
    }
  }

  const colors = colorClasses[hoverColor]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 p-6 bg-slate-800/50 hover:bg-slate-800 rounded-xl border border-slate-700/50 ${colors.border} transition-all duration-300`}
    >
      <div className={`p-3 rounded-lg transition-colors ${colors.bg}`}>
        <Icon className={`w-6 h-6 ${colors.icon}`} />
      </div>
      <div>
        <h3 className={`font-semibold transition-colors ${colors.text}`}>
          {title}
        </h3>
        <p className="text-sm text-slate-500">{handle}</p>
      </div>
      <ChevronRightIcon
        className={`w-5 h-5 ml-auto text-slate-600 ${colors.text} group-hover:translate-x-1 transition-all`}
      />
    </a>
  )
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Sami Nurmivaara</title>
      </Head>

      <Layout>
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>
          <p className="text-lg text-slate-400 mb-12 max-w-xl">
            Feel free to reach out through any of the platforms below.
          </p>
        </div>

        <div className="grid gap-4 max-w-md animate-slide-up [animation-delay:200ms] opacity-0">
          <ContactLink
            href={siteConfig.social.linkedin.url}
            icon={LinkedInIcon}
            title="LinkedIn"
            handle={siteConfig.social.linkedin.handle}
            hoverColor="blue"
          />
          <ContactLink
            href={siteConfig.social.github.url}
            icon={GitHubIcon}
            title="GitHub"
            handle={siteConfig.social.github.handle}
            hoverColor="purple"
          />
        </div>
      </Layout>
    </>
  )
}
