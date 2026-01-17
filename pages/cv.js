import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Layout, LinkedInIcon, ChevronRightIcon } from '../components'
import { siteConfig } from '../lib/config'

const SkillBadge = ({ children }) => (
  <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs hover:bg-slate-600 hover:text-slate-200 transition-colors cursor-default">
    {children}
  </span>
)

const TableOfContents = ({ visibleSections }) => {
  const sections = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'languages', label: 'Languages' },
  ]

  return (
    <nav className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
      <ul className="space-y-3">
        {sections.map((section) => {
          const isVisible = visibleSections.includes(section.id)
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`flex items-center gap-3 group transition-all duration-200 ${
                  isVisible ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    isVisible
                      ? 'bg-blue-400 scale-125'
                      : 'bg-slate-600 group-hover:bg-slate-400'
                  }`}
                />
                <span className="text-sm">{section.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const TimelineItem = ({ company, role, period, location, skills, projects, children }) => (
  <div className="relative pl-8 pb-10 last:pb-0 group/item">
    {/* Timeline line */}
    <div className="absolute left-[7px] top-3 bottom-0 w-px bg-slate-700 last:hidden" />
    {/* Timeline dot */}
    <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-slate-600 bg-slate-900 group-hover/item:border-blue-500/50 group-hover/item:bg-slate-800 transition-colors" />

    <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <h3 className="text-lg font-semibold text-white">{company}</h3>
        <span className="text-sm text-slate-500 whitespace-nowrap">{period}</span>
      </div>
      <p className="text-blue-400 text-sm mb-1">{role}</p>
      {location && <p className="text-xs text-slate-500 mb-3">{location}</p>}

      {children && <div className="text-slate-400 text-sm leading-relaxed mb-3">{children}</div>}

      {projects && (
        <div className="space-y-3 mb-3">
          {projects.map((project, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700/30 rounded-md p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase tracking-wider text-blue-300 border border-blue-500/40 px-1.5 py-0.5 rounded">
                  Project
                </span>
                {project.period && <span className="text-xs text-slate-500">{project.period}</span>}
              </div>
              <p className="font-medium text-slate-300 text-sm">
                {project.title}
                {project.client && (
                  <span className="text-slate-400 font-normal"> @ {project.client}</span>
                )}
              </p>
              {project.clientDesc && (
                <p className="text-xs text-slate-500 mb-1">{project.clientDesc}</p>
              )}
              <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
              {project.skills && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.skills.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {skills && (
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <SkillBadge key={skill}>{skill}</SkillBadge>
          ))}
        </div>
      )}
    </div>
  </div>
)

const EducationItem = ({ school, degree, period }) => (
  <div className="relative pl-8 pb-6 last:pb-0 group/item">
    <div className="absolute left-[7px] top-3 bottom-0 w-px bg-slate-700" />
    <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-slate-600 bg-slate-900 group-hover/item:border-blue-500/50 group-hover/item:bg-slate-800 transition-colors" />

    <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="font-semibold text-white">{school}</h3>
        <span className="text-sm text-slate-500">{period}</span>
      </div>
      <p className="text-slate-400 text-sm">{degree}</p>
    </div>
  </div>
)

const Section = ({ id, title, children }) => (
  <section id={id} className="mb-12 scroll-mt-24">
    <h2 className="text-xl font-bold mb-6 text-slate-300 uppercase tracking-wider text-sm">{title}</h2>
    {children}
  </section>
)

export default function CV() {
  const [showOlderExperience, setShowOlderExperience] = useState(false)
  const [visibleSections, setVisibleSections] = useState(['experience'])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experience', 'education', 'languages']
      const viewportTop = window.scrollY + 150
      const viewportBottom = window.scrollY + window.innerHeight - 100
      const visible = []

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          const sectionBottom = offsetTop + offsetHeight

          // Section is visible if it overlaps with viewport
          if (offsetTop < viewportBottom && sectionBottom > viewportTop) {
            visible.push(sectionId)
          }
        }
      }

      setVisibleSections(visible.length > 0 ? visible : ['experience'])
    }

    handleScroll() // Run on mount
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>CV - Sami Nurmivaara</title>
      </Head>

      <Layout>
        <TableOfContents visibleSections={visibleSections} />

        <div className="animate-fade-in mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Curriculum Vitae</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-4">
            Senior Software Engineer with a Master's in Computer Science. Generalist focused on
            full stack development, DevOps and cloud architecture.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-md text-sm">
              Full-Stack Development
            </span>
            <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-md text-sm">
              Solution Architecture
            </span>
            <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-md text-sm">
              DevOps
            </span>
          </div>

          <a
            href={siteConfig.social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>View full profile on LinkedIn</span>
          </a>
        </div>

        <div className="animate-slide-up [animation-delay:200ms] opacity-0">
          <Section id="experience" title="Experience">
            <TimelineItem
              company="Inven"
              role="Senior Software Engineer"
              period="Jan 2026 - Present"
              location="Helsinki, Finland"
              skills={[
                'Python',
                'TypeScript',
                'React',
                'SWR',
                'Jotai',
                'GitHub Actions',
                'AWS Lightsail',
                'Aurora PostgreSQL',
              ]}
            >
              Full stack development. Python backend, React/TypeScript frontend. Deployed via GitHub
              Actions to AWS.
            </TimelineItem>

            <TimelineItem
              company="Nurmivaara Consulting Oy"
              role="Founder & Owner"
              period="Mar 2023 - Present"
              location="Helsinki, Finland"
              projects={[
                {
                  title: 'Senior DevOps Engineer',
                  client: 'Mandatum',
                  clientDesc: 'Finnish life insurance and wealth management company',
                  period: 'May 2023 - Dec 2025',
                  description:
                    'Platform engineering team. Managed and supported DevOps/Platform needs across the organization.',
                  skills: ['OpenShift', 'Kubernetes', 'Dynatrace', 'AWS', 'Azure', 'Terraform'],
                },
              ]}
            >
              Founded and sole owner. IT consulting until 2026, now an investment holding company
              managing a six-figure portfolio.
            </TimelineItem>

            <TimelineItem
              company="University of Helsinki"
              role="Graduate Research Assistant"
              period="Jan 2022 - Jul 2022"
              location="Helsinki, Finland"
              skills={['Docker', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'GitHub Actions']}
            >
              Part of the Toska research group. Built and maintained Oodikone, a data analysis
              platform for Finnish student data.
            </TimelineItem>

            <TimelineItem
              company="Firstbeat Technologies"
              role="Senior SW Developer"
              period="May 2021 - Sep 2021"
              location="Espoo, Finland"
            >
              HR wellbeing software development. Left to do Master's thesis at University of
              Helsinki.
            </TimelineItem>

            <TimelineItem
              company="Nitor"
              role="Software Developer"
              period="May 2019 - May 2021"
              location="Helsinki, Finland"
              projects={[
                {
                  title: 'Cloud Full Stack Engineer',
                  client: 'Finnair',
                  clientDesc: 'Finnish national airline',
                  description:
                    'Large scale data platform for flight data with high integrity DevOps workflow.',
                  skills: ['AWS', 'Serverless', 'TypeScript', 'Aurora PostgreSQL', 'Java'],
                },
                {
                  title: 'Full Stack Engineer & Release Manager',
                  client: 'OP',
                  clientDesc: 'Largest financial services group in Finland',
                  description:
                    'Multiple projects. Managed release trains in a regulated industry.',
                  skills: ['AWS', 'DynamoDB', 'S3', 'Java', 'JavaScript', 'SAML'],
                },
                {
                  title: 'Full Stack Engineer',
                  client: 'MTV',
                  clientDesc: 'Finnish commercial broadcaster',
                  description:
                    'Streaming platform and metadata retrieval.',
                  skills: ['AWS', 'TypeScript', 'Jenkins', 'Coremedia'],
                },
              ]}
            >
              Consultant focused on AWS, DevOps and backend development. Also did student outreach
              and recruitment.
            </TimelineItem>

            <TimelineItem
              company="Gofore / Solinor"
              role="Software Developer"
              period="Nov 2017 - Apr 2019"
              location="Helsinki, Finland"
              projects={[
                {
                  title: 'Data Migration Specialist',
                  client: 'A-lehdet',
                  clientDesc: 'Finnish magazine publisher',
                  description:
                    'Migrated data from multiple old WordPress and Drupal deployments to Contentful. Data extraction, cleaning, reformatting and uploading.',
                  skills: ['Ruby', 'WordPress', 'Drupal', 'Contentful'],
                },
                {
                  title: 'WordPress Developer',
                  client: 'PwC',
                  clientDesc: 'Global professional services firm',
                  description:
                    'Development for PwC Uutishuone, the Finnish news blog. PHP components and styling.',
                  skills: ['WordPress', 'PHP'],
                },
                {
                  title: 'Frontend Developer',
                  client: 'Solinor',
                  description:
                    'Brand renewal site. Frontend development for the new company website before Gofore acquisition.',
                  skills: ['JavaScript', 'TypeScript', 'React', 'SCSS', 'Bootstrap'],
                },
                {
                  title: 'Student Recruitment',
                  description:
                    'Hosted hackathons and company excursions. Company representation at events and annual balls.',
                },
              ]}
            >
              Full-stack web development and project work in self-organizing agile teams. Gofore
              acquired Solinor in 2018.
            </TimelineItem>

            {/* Older experience toggle */}
            {!showOlderExperience ? (
              <div className="relative pl-8 pb-10">
                <div className="absolute left-[7px] top-3 bottom-0 w-px bg-slate-700" />
                <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-slate-600 bg-slate-900" />
                <button
                  onClick={() => setShowOlderExperience(true)}
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm group"
                >
                  <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Show earlier experience (2013-2017)</span>
                </button>
              </div>
            ) : (
              <div className="animate-slide-down">
                <div className="relative pl-8 pb-4">
                  <div className="absolute left-[7px] top-0 bottom-0 w-px bg-slate-700" />
                  <button
                    onClick={() => setShowOlderExperience(false)}
                    className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors text-xs"
                  >
                    <ChevronRightIcon className="w-3 h-3 rotate-90" />
                    <span>Hide earlier experience</span>
                  </button>
                </div>

                <TimelineItem
                  company="Iriba Oy"
                  role="Software Specialist"
                  period="Aug 2017 - Nov 2017"
                  location="Helsinki, Finland"
                >
                  Software development and testing as an IT consultant.
                </TimelineItem>

                <TimelineItem
                  company="Fairspectrum"
                  role="Part-time Developer"
                  period="Sep 2016 - Dec 2016"
                  location="Helsinki, Finland"
                >
                  Software development, server monitoring and system administration.
                </TimelineItem>

                <TimelineItem
                  company="Laehtis Oy"
                  role="Co-Founder"
                  period="Dec 2015 - Dec 2017"
                  location="Finland"
                >
                  Co-founded a mobile device repair business during military service. Did repairs and
                  shared management duties with co-founders.
                </TimelineItem>

                <TimelineItem
                  company="Finnish Defence Forces"
                  role="Conscript"
                  period="Jun 2015 - Jun 2016"
                  location="Finland"
                >
                  12-month mandatory service. Finished as NCO, currently Staff Sergeant in the reserve.
                </TimelineItem>

                <TimelineItem
                  company="OP Financial Group"
                  role="ICT User Management Administrator"
                  period="May 2014 - May 2015"
                  location="Finland"
                  skills={['SAP', 'JIRA', 'Active Directory', 'VDI']}
                >
                  Managed access rights and VDI infrastructure across multiple domains and systems.
                </TimelineItem>

                <TimelineItem
                  company="Atos"
                  role="Onsite Technician"
                  period="Nov 2013 - Jan 2014"
                  location="Finland"
                >
                  Technical support and device repairs. Laptop assessment/sales, IP phone installation
                  and hardware registry work.
                </TimelineItem>
              </div>
            )}
          </Section>

          <Section id="education" title="Education">
            <EducationItem
              school="University of Helsinki"
              degree="Master of Science (MSc), Computer Science"
              period="2021 - 2023"
            />
            <EducationItem
              school="University of Helsinki"
              degree="Bachelor of Science (BSc), Computer Science"
              period="2016 - 2021"
            />
            <EducationItem
              school="Helsinki Business College"
              degree="Vocational Qualification in Business Information Technology"
              period="2012 - 2015"
            />
          </Section>

          <Section id="languages" title="Languages">
            <div className="flex gap-6 text-sm pl-8">
              <div>
                <span className="text-slate-300">Finnish</span>
                <span className="text-slate-500 ml-2">Native</span>
              </div>
              <div>
                <span className="text-slate-300">English</span>
                <span className="text-slate-500 ml-2">Professional</span>
              </div>
            </div>
          </Section>
        </div>
      </Layout>
    </>
  )
}
