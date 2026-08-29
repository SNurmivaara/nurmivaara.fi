interface SocialLink {
  url: string
  handle: string
}

interface SiteConfig {
  name: string
  title: string
  description: string
  email: string
  currentCompany: string
  yearsExperience: string
  social: {
    linkedin: SocialLink
    github: SocialLink
  }
}

export const siteConfig: SiteConfig = {
  name: 'Sami Nurmivaara',
  title: 'Senior Software Engineer',
  description: 'Senior Software Engineer',
  email: 'sami@nurmivaara.fi',
  currentCompany: 'Inven',
  yearsExperience: '10+ years across consulting, enterprise and product',
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
