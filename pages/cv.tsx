import { useState, MouseEvent } from 'react'
import Head from 'next/head'
import {
  Layout,
  LinkedInIcon,
  ChevronRightIcon,
  TimelineEntry,
  Card,
  Badge,
  BadgeList,
} from '../components'
import { siteConfig } from '../lib/config'
import { useVisibleSections } from '../lib/hooks/useVisibleSections'
import cvData from '../lib/cv-data.json'

const VISIBLE_SKILLS_COUNT = 3
const SECTION_IDS = ['experience', 'education', 'languages']

interface Project {
  title: string
  client?: string
  clientDesc?: string
  period?: string
  description: string
  skills?: string[]
}

interface Experience {
  company: string
  role: string
  period: string
  location?: string
  description?: string
  skills?: string[]
  projects?: Project[]
}

// --- Table of Contents ---

interface TableOfContentsProps {
  visibleSections: string[]
}

const TableOfContents = ({ visibleSections }: TableOfContentsProps) => {
  const sections = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'languages', label: 'Languages' },
  ]

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40"
    >
      <ul className="space-y-3">
        {sections.map(({ id, label }) => {
          const isVisible = visibleSections.includes(id)
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                aria-current={isVisible ? 'true' : undefined}
                className={`flex items-center gap-3 group transition-all duration-300 ${
                  isVisible ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isVisible ? 'bg-blue-400 scale-125' : 'bg-slate-600 group-hover:bg-slate-400'
                  }`}
                />
                <span className="text-sm">{label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

// --- Collapsible Skills ---

interface CollapsibleSkillsProps {
  skills: string[]
  visibleCount?: number
}

const CollapsibleSkills = ({ skills, visibleCount = VISIBLE_SKILLS_COUNT }: CollapsibleSkillsProps) => {
  const [expanded, setExpanded] = useState(false)

  if (skills.length <= visibleCount) {
    return <BadgeList items={skills} />
  }

  const visibleSkills = expanded ? skills : skills.slice(0, visibleCount)
  const hiddenCount = skills.length - visibleCount

  return (
    <div className="flex flex-wrap gap-1.5 items-center">
      {visibleSkills.map((skill) => (
        <Badge key={skill}>{skill}</Badge>
      ))}
      <button
        onClick={() => setExpanded(!expanded)}
        className="px-2 py-1 text-xs text-slate-400 hover:text-blue-400 transition-colors"
      >
        {expanded ? 'Show less' : `+${hiddenCount} more`}
      </button>
    </div>
  )
}

// --- Project Card ---

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-slate-800/50 border border-slate-700/30 rounded-md p-4">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[10px] uppercase tracking-wider text-blue-300 border border-blue-500/40 px-1.5 py-0.5 rounded">
        Project
      </span>
      {project.period && <span className="text-xs text-slate-500">{project.period}</span>}
    </div>
    <p className="font-medium text-slate-300 text-sm">
      {project.title}
      {project.client && <span className="text-slate-400 font-normal"> @ {project.client}</span>}
    </p>
    {project.clientDesc && <p className="text-xs text-slate-500 mb-1">{project.clientDesc}</p>}
    <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
    {project.skills && (
      <div className="mt-3">
        <CollapsibleSkills skills={project.skills} />
      </div>
    )}
  </div>
)

// --- Experience Item ---

const ExperienceItem = ({ exp }: { exp: Experience }) => (
  <TimelineEntry className="pb-10 last:pb-0">
    <Card>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
        <span className="text-sm text-slate-500 whitespace-nowrap">{exp.period}</span>
      </div>
      <p className="text-blue-400 text-sm mb-1">{exp.role}</p>
      {exp.location && <p className="text-xs text-slate-500 mb-3">{exp.location}</p>}

      {exp.description && (
        <p className="text-slate-400 text-sm leading-relaxed mb-3">{exp.description}</p>
      )}

      {exp.projects && (
        <div className="space-y-3 mb-3">
          {exp.projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      )}

      {exp.skills && <CollapsibleSkills skills={exp.skills} />}
    </Card>
  </TimelineEntry>
)

// --- Education Item ---

interface EducationItemProps {
  school: string
  degree: string
  period: string
}

const EducationItem = ({ school, degree, period }: EducationItemProps) => (
  <TimelineEntry className="pb-6 last:pb-0">
    <Card padding="sm">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="font-semibold text-white">{school}</h3>
        <span className="text-sm text-slate-500">{period}</span>
      </div>
      <p className="text-slate-400 text-sm">{degree}</p>
    </Card>
  </TimelineEntry>
)

// --- Section ---

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="mb-12 scroll-mt-24">
    <h2 className="text-sm font-bold mb-6 text-slate-300 uppercase tracking-wider">{title}</h2>
    {children}
  </section>
)

// --- Expand/Collapse Button ---

interface ExpandButtonProps {
  expanded: boolean
  onToggle: () => void
  expandLabel: string
  collapseLabel: string
}

const ExpandButton = ({ expanded, onToggle, expandLabel, collapseLabel }: ExpandButtonProps) => (
  <div className="relative pl-8 pb-4">
    <div className="absolute left-[7px] top-0 bottom-0 w-px bg-slate-700" aria-hidden="true" />
    {!expanded && (
      <div
        className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-slate-600 bg-slate-900"
        aria-hidden="true"
      />
    )}
    <button
      onClick={onToggle}
      aria-expanded={expanded}
      className={`flex items-center gap-2 transition-colors text-sm group ${
        expanded
          ? 'text-slate-500 hover:text-slate-300 text-xs'
          : 'text-slate-400 hover:text-blue-400'
      }`}
    >
      <ChevronRightIcon
        className={`w-4 h-4 transition-transform ${
          expanded ? 'w-3 h-3 rotate-90' : 'group-hover:translate-x-0.5'
        }`}
      />
      <span>{expanded ? collapseLabel : expandLabel}</span>
    </button>
  </div>
)

// --- Main Component ---

export default function CV() {
  const [showOlderExperience, setShowOlderExperience] = useState(false)
  const visibleSections = useVisibleSections(SECTION_IDS, 'experience')

  return (
    <>
      <Head>
        <title>CV - Sami Nurmivaara</title>
      </Head>

      <Layout>
        <TableOfContents visibleSections={visibleSections} />

        <div className="animate-fade-in mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Curriculum Vitae</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-4">{cvData.summary.title}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {cvData.summary.badges.map((badge) => (
              <Badge key={badge} variant="highlight">
                {badge}
              </Badge>
            ))}
          </div>

          <a
            href={siteConfig.social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View full profile on LinkedIn"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>View full profile on LinkedIn</span>
          </a>
        </div>

        <div className="animate-slide-up [animation-delay:200ms] opacity-0">
          <Section id="experience" title="Experience">
            {cvData.experience.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} />
            ))}

            <ExpandButton
              expanded={showOlderExperience}
              onToggle={() => setShowOlderExperience(!showOlderExperience)}
              expandLabel="Show earlier experience (2013-2017)"
              collapseLabel="Hide earlier experience"
            />

            {showOlderExperience && (
              <div className="animate-slide-down">
                {cvData.olderExperience.map((exp, i) => (
                  <ExperienceItem key={i} exp={exp} />
                ))}
              </div>
            )}
          </Section>

          <Section id="education" title="Education">
            {cvData.education.map((edu, i) => (
              <EducationItem key={i} school={edu.school} degree={edu.degree} period={edu.period} />
            ))}
          </Section>

          <Section id="languages" title="Languages">
            <div className="flex gap-6 text-sm pl-8">
              {cvData.languages.map((lang) => (
                <div key={lang.language}>
                  <span className="text-slate-300">{lang.language}</span>
                  <span className="text-slate-500 ml-2">{lang.level}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </Layout>
    </>
  )
}
