import Head from 'next/head'
import { Layout, LinkedInIcon } from '../components'
import { siteConfig } from '../lib/config'

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-6 text-slate-200">{title}</h2>
    {children}
  </section>
)

const ExperienceItem = ({ company, role, period, location, children }) => (
  <div className="mb-8 last:mb-0">
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
      <h3 className="text-lg font-semibold text-white">{company}</h3>
      <span className="text-sm text-slate-500">{period}</span>
    </div>
    <p className="text-blue-400 mb-1">{role}</p>
    {location && <p className="text-sm text-slate-500 mb-3">{location}</p>}
    {children && <div className="text-slate-400 text-sm leading-relaxed">{children}</div>}
  </div>
)

const EducationItem = ({ school, degree, period }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
      <h3 className="text-lg font-semibold text-white">{school}</h3>
      <span className="text-sm text-slate-500">{period}</span>
    </div>
    <p className="text-slate-400">{degree}</p>
  </div>
)

const SkillBadge = ({ children }) => (
  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">
    {children}
  </span>
)

export default function CV() {
  return (
    <>
      <Head>
        <title>CV - Sami Nurmivaara</title>
      </Head>

      <Layout>
        <div className="animate-fade-in mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Curriculum Vitae</h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Senior Software Engineer with a Master's in Computer Science. Generalist focused on
            full stack development, DevOps, and cloud architecture.
          </p>
          <a
            href={siteConfig.social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>View on LinkedIn</span>
          </a>
        </div>

        <div className="animate-slide-up [animation-delay:200ms] opacity-0">
          <Section title="Experience">
            <ExperienceItem
              company="Inven"
              role="Senior Software Engineer"
              period="Jan 2026 - Present"
              location="Helsinki, Finland"
            />

            <ExperienceItem
              company="Nurmivaara Consulting Oy"
              role="Managing Partner"
              period="Mar 2023 - Present"
              location="Helsinki, Finland"
            >
              <p className="mb-3">
                Founded and operated an IT consulting company. As of 2026, transitioned to
                an asset holding company following full-time employment at Inven.
              </p>
              <p className="font-medium text-slate-300 mb-2">Key Project:</p>
              <p className="mb-2">
                <strong className="text-slate-300">Senior DevOps Engineer</strong> at a leading Finnish financial group (May 2023 - Dec 2025)
              </p>
              <p>
                Worked in a centralized Platform engineering team, managing and supporting DevOps/Platform
                needs across the organization. Tech stack: OpenShift (Kubernetes), Dynatrace, AWS, Azure, Terraform.
              </p>
            </ExperienceItem>

            <ExperienceItem
              company="University of Helsinki"
              role="Graduate Research Assistant"
              period="Jan 2022 - Jul 2022"
              location="Helsinki, Finland"
            >
              <p>
                Contract work as part of the Toska research group. Developed and maintained Oodikone,
                a data-analysis platform for Finnish student data. Stack: Docker, Node.js, React,
                PostgreSQL, Redis, GitHub Actions.
              </p>
            </ExperienceItem>

            <ExperienceItem
              company="Firstbeat Technologies"
              role="Senior SW Developer"
              period="May 2021 - Sep 2021"
              location="Espoo, Finland"
            >
              <p>
                Developed HR-based wellbeing software. Left during probation to pursue Master's thesis
                opportunity at University of Helsinki.
              </p>
            </ExperienceItem>

            <ExperienceItem
              company="Nitor"
              role="Software Developer"
              period="May 2019 - May 2021"
              location="Helsinki, Finland"
            >
              <p className="mb-2">
                Consultant working on AWS, DevOps, and backend development across multiple projects:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Aviation data platform on AWS + Serverless (TypeScript, Aurora PostgreSQL, Java)</li>
                <li>Financial company projects as fullstack dev + release engineer (AWS, DynamoDB, Java)</li>
                <li>Media streaming service development (AWS, TypeScript, Jenkins)</li>
              </ul>
            </ExperienceItem>

            <ExperienceItem
              company="Gofore / Solinor"
              role="Software Developer"
              period="Nov 2017 - Apr 2019"
              location="Helsinki, Finland"
            >
              <p>
                Full-stack web development, data management, and project management in self-organizing
                agile teams. Gofore acquired Solinor in 2018.
              </p>
            </ExperienceItem>

            <ExperienceItem
              company="Laehtis Oy"
              role="Co-Founder"
              period="Dec 2015 - Dec 2017"
              location="Finland"
            >
              <p>
                Co-founded a mobile device repair business during military service.
                Handled device repairs and shared management responsibilities.
              </p>
            </ExperienceItem>

            <ExperienceItem
              company="OP Financial Group"
              role="ICT User Management Administrator"
              period="May 2014 - May 2015"
              location="Finland"
            >
              <p>
                Managed access rights and VDI infrastructure. Worked with SAP, JIRA, Active Directory,
                and multiple domain systems.
              </p>
            </ExperienceItem>
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

          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              <SkillBadge>Full-Stack Development</SkillBadge>
              <SkillBadge>Solution Architecture</SkillBadge>
              <SkillBadge>DevOps</SkillBadge>
              <SkillBadge>AWS</SkillBadge>
              <SkillBadge>Azure</SkillBadge>
              <SkillBadge>Kubernetes / OpenShift</SkillBadge>
              <SkillBadge>Terraform</SkillBadge>
              <SkillBadge>TypeScript / JavaScript</SkillBadge>
              <SkillBadge>Go</SkillBadge>
              <SkillBadge>Ruby</SkillBadge>
              <SkillBadge>Java</SkillBadge>
              <SkillBadge>PostgreSQL</SkillBadge>
              <SkillBadge>Docker</SkillBadge>
              <SkillBadge>React</SkillBadge>
              <SkillBadge>Node.js</SkillBadge>
            </div>
          </Section>

          <Section title="Languages">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-slate-300">Finnish</span>
                <span className="text-slate-500 ml-2">Native</span>
              </div>
              <div>
                <span className="text-slate-300">English</span>
                <span className="text-slate-500 ml-2">Professional</span>
              </div>
              <div>
                <span className="text-slate-300">Swedish</span>
                <span className="text-slate-500 ml-2">Elementary</span>
              </div>
              <div>
                <span className="text-slate-300">Russian</span>
                <span className="text-slate-500 ml-2">Elementary</span>
              </div>
              <div>
                <span className="text-slate-300">French</span>
                <span className="text-slate-500 ml-2">Elementary</span>
              </div>
            </div>
          </Section>

          <Section title="Awards">
            <ul className="space-y-2 text-slate-400">
              <li>Taitaja 2015 Silver Medal - IT / Software Applications</li>
              <li>Taitaja Competition Semifinalist (multiple years)</li>
              <li>Hackathon Winner</li>
            </ul>
          </Section>
        </div>
      </Layout>
    </>
  )
}
