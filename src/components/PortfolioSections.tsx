import {
  ArrowDownRight,
  BriefcaseBusiness,
  Code2,
  ShieldCheck,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {
  certifications,
  education,
  experiences,
  skillGroups,
} from '../data/profile'
import { approvedProjects, projects } from '../data/projects'
import { useLocale } from '../hooks/useLocale'
import { localize } from '../utils/localize'
import { SectionHeading } from './SectionHeading'

interface PortfolioSectionsProps {
  reviewMode?: boolean
}

export function PortfolioSections({
  reviewMode = false,
}: PortfolioSectionsProps) {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const visibleProjects = reviewMode ? projects : approvedProjects

  return (
    <>
      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1>{t('hero.title')}</h1>
          <p className="hero-intro">{t('hero.intro')}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              {t('hero.primary')} <ArrowDownRight size={17} />
            </a>
            <a className="button ghost" href="#experience">
              {t('hero.secondary')}
            </a>
          </div>
        </div>
        <aside className="hero-panel">
          <span className="signal-dot" />
          <p>{t('hero.availability')}</p>
          <div className="hero-stack" aria-label="Primary technology stack">
            <span>React</span>
            <span>Spring Boot</span>
            <span>FastAPI</span>
            <span>Machine Learning</span>
          </div>
        </aside>
      </section>

      <section className="section-pad split-section" id="about">
        <SectionHeading index="01" title={t('sections.about')} />
        <div className="about-copy">
          <p className="lead">{t('about.lead')}</p>
          <p>{t('about.body')}</p>
        </div>
      </section>

      <section className="section-pad" id="experience">
        <SectionHeading index="02" title={t('sections.experience')} />
        <div className="timeline">
          {experiences.map((item) => (
            <article key={item.title.en} className="timeline-item">
              <span>{localize(item.period, locale)}</span>
              <div>
                <h3>{localize(item.title, locale)}</h3>
                <p className="muted">{localize(item.organization, locale)}</p>
                <p>{localize(item.description, locale)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad credentials-grid">
        <div>
          <SectionHeading index="03" title={t('sections.education')} />
          <div className="stacked-cards">
            {education.map((item) => (
              <article className="info-card" key={item.school.en}>
                <h3>{localize(item.school, locale)}</h3>
                <p>{localize(item.program, locale)}</p>
                {item.detail && <span>{localize(item.detail, locale)}</span>}
              </article>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading index="04" title={t('sections.certification')} />
          {certifications.map((item) => (
            <article className="info-card certification" key={item.name.en}>
              <ShieldCheck size={24} />
              <h3>{localize(item.name, locale)}</h3>
              <p>{localize(item.issuer, locale)}</p>
              <span>{localize(item.expires, locale)}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad" id="skills">
        <SectionHeading index="05" title={t('sections.skills')} />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.label.en}>
              <h3>{localize(group.label, locale)}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad projects-section" id="projects">
        <SectionHeading index="06" title={t('sections.projects')} />
        {visibleProjects.length === 0 ? (
          <div className="empty-state">
            <p className="eyebrow">Approval gate active</p>
            <h3>{t('projects.emptyTitle')}</h3>
            <p>{t('projects.emptyBody')}</p>
          </div>
        ) : (
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.slug}>
                <div className="project-card-header">
                  <p className="eyebrow">{localize(project.eyebrow, locale)}</p>
                  {reviewMode && project.status === 'candidate' && (
                    <span className="review-badge">
                      {locale === 'ko' ? '승인 대기' : 'Approval pending'}
                    </span>
                  )}
                </div>
                <h3>{localize(project.title, locale)}</h3>
                <p>{localize(project.summary, locale)}</p>
                <div className="chip-row">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                {project.status === 'approved' && (
                  <Link to={`/${locale}/projects/${project.slug}`}>
                    {t('projects.view')} <ArrowDownRight size={16} />
                  </Link>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="section-pad contact-section" id="contact">
        <p className="eyebrow">{t('sections.contact')}</p>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.body')}</p>
        <div className="contact-links">
          <a
            href="https://github.com/JadenMeister"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={19} /> {t('contact.github')}
          </a>
          <a
            href="https://www.linkedin.com/in/jaden-choi-16a541227/"
            target="_blank"
            rel="noreferrer"
          >
            <BriefcaseBusiness size={19} /> {t('contact.linkedin')}
          </a>
        </div>
      </section>
    </>
  )
}
