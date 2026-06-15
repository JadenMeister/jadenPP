import { ArrowUpRight, LockKeyhole } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { approvedProjects, projects } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLocale } from '../hooks/useLocale'
import { localize } from '../utils/localize'

export function PortfolioPage() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  useDocumentTitle(`${t('nav.portfolio')} | Jaden`)
  const candidateProjects = projects.filter(
    (project) => project.status === 'candidate',
  )

  return (
    <section className="portfolio-page section-pad">
      <header className="page-intro">
        <p className="eyebrow">{t('portfolio.eyebrow')}</p>
        <h1>{t('portfolio.title')}</h1>
        <p>{t('portfolio.intro')}</p>
      </header>

      {approvedProjects.length > 0 ? (
        <div className="portfolio-index">
          {approvedProjects.map((project, index) => (
            <Link
              className="portfolio-index-card"
              key={project.slug}
              to={`/${locale}/projects/${project.slug}`}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                {project.image && (
                  <img
                    className="portfolio-project-image"
                    src={project.image.src}
                    alt={localize(project.image.alt, locale)}
                  />
                )}
                <p className="eyebrow">{localize(project.eyebrow, locale)}</p>
                <h2>{localize(project.title, locale)}</h2>
                <p>{localize(project.summary, locale)}</p>
              </div>
              <ArrowUpRight size={24} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="portfolio-empty">
          <LockKeyhole size={28} />
          <h2>{t('portfolio.emptyTitle')}</h2>
          <p>{t('portfolio.emptyBody')}</p>
        </div>
      )}

      {candidateProjects.length > 0 && (
        <section className="portfolio-reviewing">
          <header>
            <p className="eyebrow">{t('portfolio.reviewing')}</p>
            <p>{t('portfolio.reviewingBody')}</p>
          </header>
          <div className="review-project-grid">
            {candidateProjects.map((project) => (
              <article key={project.slug}>
                <div>
                  <LockKeyhole size={18} />
                  <span>{project.status}</span>
                </div>
                <h2>{localize(project.title, locale)}</h2>
                <p>{localize(project.summary, locale)}</p>
                <div className="chip-row">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <Link
                  to={`/${locale}/review/projects/${project.slug}`}
                  className="candidate-detail-link"
                >
                  {t('portfolio.openDraft')} <ArrowUpRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  )
}
