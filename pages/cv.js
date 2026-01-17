import Head from 'next/head'
import { Layout, LinkedInIcon } from '../components'
import { siteConfig } from '../lib/config'

const SkillBadge = ({ children }) => (
  <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
    {children}
  </span>
)

const TimelineItem = ({ company, role, period, location, skills, projects, children }) => (
  <div className="relative pl-8 pb-10 last:pb-0">
    {/* Timeline line */}
    <div className="absolute left-[7px] top-3 bottom-0 w-px bg-slate-700 last:hidden" />
    {/* Timeline dot */}
    <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-slate-600 bg-slate-900" />

    <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5">
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
                <span className="text-[10px] uppercase tracking-wider text-slate-500 bg-slate-700/50 px-1.5 py-0.5 rounded">
                  Project
                </span>
                {project.period && <span className="text-xs text-slate-500">{project.period}</span>}
              </div>
              <p className="font-medium text-slate-300 text-sm mb-1">{project.title}</p>
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
  <div className="relative pl-8 pb-6 last:pb-0">
    <div className="absolute left-[7px] top-3 bottom-0 w-px bg-slate-700" />
    <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-slate-600 bg-slate-900" />

    <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="font-semibold text-white">{school}</h3>
        <span className="text-sm text-slate-500">{period}</span>
      </div>
      <p className="text-slate-400 text-sm">{degree}</p>
    </div>
  </div>
)

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-xl font-bold mb-6 text-slate-300 uppercase tracking-wider text-sm">{title}</h2>
    {children}
  </section>
)

export default function CV() {
  return (
    <>
      <Head>
        <title>CV - Sami Nurmivaara</title>
      </Head>

      <Layout>
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
          <Section title="Experience">
            <TimelineItem
              company="Inven"
              role="Senior Software Engineer"
              period="Jan 2026 - Present"
              location="Helsinki, Finland"
            />

            <TimelineItem
              company="Nurmivaara Consulting Oy"
              role="Managing Partner"
              period="Mar 2023 - Present"
              location="Helsinki, Finland"
              projects={[
                {
                  title: 'Senior DevOps Engineer @ Leading Finnish Financial Group',
                  period: 'May 2023 - Dec 2025',
                  description:
                    'Platform engineering team. Managed and supported DevOps/Platform needs across the organization.',
                  skills: ['OpenShift', 'Kubernetes', 'Dynatrace', 'AWS', 'Azure', 'Terraform'],
                },
              ]}
            >
              IT consulting company. Now mainly an asset holding company after starting at Inven.
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
                  title: 'Aviation Data Platform',
                  description:
                    'Large scale data platform for flight data with high integrity DevOps workflow.',
                  skills: ['AWS', 'Serverless', 'TypeScript', 'Aurora PostgreSQL', 'Java'],
                },
                {
                  title: 'Financial Services',
                  description:
                    'Fullstack dev and release engineer on multiple projects. Managed release trains in a regulated industry.',
                  skills: ['AWS', 'DynamoDB', 'S3', 'Java', 'JavaScript', 'SAML'],
                },
                {
                  title: 'Media Streaming Service',
                  description:
                    'Streaming and metadata retrieval for a major Finnish media company.',
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
              skills={['Full-Stack', 'Data Migrations', 'Agile']}
            >
              Full-stack web development, data management and project work in self-organizing agile
              teams. Gofore acquired Solinor in 2018.
            </TimelineItem>

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
          </Section>

          <Section title="Education">
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

          <Section title="Languages">
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
