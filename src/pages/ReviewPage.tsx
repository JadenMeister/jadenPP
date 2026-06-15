import { ArrowUpRight, LockKeyhole } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLocale } from '../hooks/useLocale'
import { localize } from '../utils/localize'

const designs = [
  {
    id: 'editorial',
    number: '01',
    name: 'Editorial Grid',
    note: 'Structured, restrained, recruiter-friendly',
    selected: true,
  },
  {
    id: 'terminal',
    number: '02',
    name: 'Secure Terminal',
    note: 'Technical, dark, security-oriented',
    selected: false,
  },
  {
    id: 'kinetic',
    number: '03',
    name: 'Kinetic Studio',
    note: 'Bold typography and energetic color',
    selected: false,
  },
  {
    id: 'minimal',
    number: '04',
    name: 'Quiet Minimal',
    note: 'Calm, spacious, content-first',
    selected: false,
  },
  {
    id: 'blueprint',
    number: '05',
    name: 'System Blueprint',
    note: 'Modular, architectural, engineering-led',
    selected: false,
  },
]

export function ReviewPage() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  useDocumentTitle('Portfolio review room | Jaden')

  return (
    <div className="review-page section-pad">
      <header className="review-intro">
        <p className="eyebrow">
          <LockKeyhole size={15} /> {t('review.eyebrow')}
        </p>
        <h1>{t('review.title')}</h1>
        <p>{t('review.body')}</p>
      </header>

      <section>
        <SectionLabel text={t('review.candidates')} />
        <div className="candidate-grid">
          {projects
            .filter((project) => project.status === 'candidate')
            .map((project) => (
              <article className="candidate-card" key={project.slug}>
                <div className="status-row">
                  <span>{project.status}</span>
                  <small>{t('review.candidateNotice')}</small>
                </div>
                <h2>{localize(project.title, locale)}</h2>
                <p>{localize(project.summary, locale)}</p>
                <div className="chip-row">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <Link
                  className="candidate-detail-link"
                  to={`/${locale}/review/projects/${project.slug}`}
                >
                  {locale === 'ko' ? '사례 초안 보기' : 'Open case-study draft'}
                  <ArrowUpRight size={15} />
                </Link>
              </article>
            ))}
        </div>
      </section>

      <section>
        <SectionLabel text={t('review.designs')} />
        <div className="design-grid">
          {designs.map((design) => (
            <article
              className={`design-card ${design.id} ${
                design.selected ? 'is-selected' : ''
              }`}
              key={design.id}
            >
              <div className="design-canvas">
                <span>{design.number}</span>
                <strong>JADEN.</strong>
                <div className="mock-lines">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div>
                {design.selected && (
                  <span className="selected-design-badge">
                    {locale === 'ko' ? 'MVP 선택' : 'MVP direction'}
                  </span>
                )}
                <h2>{design.name}</h2>
                <p>{design.note}</p>
                <div className="design-actions">
                  <Link to={`/${locale}/review/${design.id}`}>
                    {t('review.preview')} <ArrowUpRight size={15} />
                  </Link>
                  {design.selected && (
                    <Link to={`/${locale}`}>
                      {locale === 'ko' ? '공개 홈 보기' : 'View public home'}
                      <ArrowUpRight size={15} />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="review-section-label">
      <span />
      <h2>{text}</h2>
    </div>
  )
}
