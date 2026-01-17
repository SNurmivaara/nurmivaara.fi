interface SocialLink {
  url: string
  handle: string
}

interface SiteConfig {
  name: string
  title: string
  description: string
  social: {
    linkedin: SocialLink
    github: SocialLink
  }
}

export const siteConfig: SiteConfig = {
  name: 'Sami Nurmivaara',
  title: 'Senior Software Engineer',
  description: 'Senior Software Engineer',
  social: {
    linkedin: {
      url: 'https://linkedin.com/in/snurmivaara/',
      handle: '@SNurmivaara'
    },
    github: {
      url: 'https://github.com/SNurmivaara',
      handle: '@SNurmivaara'
    }
  }
}
