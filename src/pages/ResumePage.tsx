import { BriefcaseBusiness, Code2, Printer } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  certifications,
  education,
  experiences,
  skillGroups,
} from '../data/profile'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLocale } from '../hooks/useLocale'
import { localize } from '../utils/localize'

export function ResumePage() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  useDocumentTitle(`${t('resume.title')} | ${t('nav.resume')}`)

  return (
    <article className="resume-page section-pad">
      <header className="resume-header">
        <div>
          <p className="eyebrow">{t('resume.eyebrow')}</p>
          <h1>{t('resume.title')}</h1>
          <h2>{t('resume.role')}</h2>
          <p>{t('resume.summary')}</p>
        </div>
        <button
          className="button ghost print-button"
          type="button"
          onClick={() => window.print()}
        >
          <Printer size={17} /> {t('resume.print')}
        </button>
      </header>

      <div className="resume-layout">
        <main className="resume-main">
          <ResumeSection title={t('resume.experience')}>
            <div className="resume-timeline">
              {experiences.map((item) => (
                <article key={item.title.en}>
                  <span>{localize(item.period, locale)}</span>
                  <div>
                    <h3>{localize(item.title, locale)}</h3>
                    <strong>{localize(item.organization, locale)}</strong>
                    <p>{localize(item.description, locale)}</p>
                  </div>
                </article>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title={t('resume.education')}>
            <div className="resume-list">
              {education.map((item) => (
                <article key={item.school.en}>
                  <h3>{localize(item.school, locale)}</h3>
                  <p>{localize(item.program, locale)}</p>
                  {item.detail && <span>{localize(item.detail, locale)}</span>}
                </article>
              ))}
            </div>
          </ResumeSection>
        </main>

        <aside className="resume-aside">
          <ResumeSection title={t('resume.skills')}>
            <div className="resume-skills">
              {skillGroups.map((group) => (
                <article key={group.label.en}>
                  <h3>{localize(group.label, locale)}</h3>
                  <p>{group.skills.join(' · ')}</p>
                </article>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title={t('resume.certification')}>
            {certifications.map((item) => (
              <article className="resume-certification" key={item.name.en}>
                <h3>{localize(item.name, locale)}</h3>
                <p>{localize(item.expires, locale)}</p>
              </article>
            ))}
          </ResumeSection>

          <ResumeSection title={t('resume.contact')}>
            <div className="resume-links">
              <a
                href="https://github.com/JadenMeister"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} /> github.com/JadenMeister
              </a>
              <a
                href="https://www.linkedin.com/in/jaden-choi-16a541227/"
                target="_blank"
                rel="noreferrer"
              >
                <BriefcaseBusiness size={17} /> LinkedIn
              </a>
            </div>
          </ResumeSection>
        </aside>
      </div>
    </article>
  )
}

function ResumeSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}
