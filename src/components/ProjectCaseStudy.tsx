import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  LockKeyhole,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { Project } from '../types/content'
import type { Locale } from '../types/content'
import { localize } from '../utils/localize'

interface ProjectCaseStudyProps {
  project: Project
  locale: Locale
  backTo: string
  reviewMode?: boolean
}

export function ProjectCaseStudy({
  project,
  locale,
  backTo,
  reviewMode = false,
}: ProjectCaseStudyProps) {
  const { t } = useTranslation()

  return (
    <article className="case-study section-pad">
      <Link className="back-link" to={backTo}>
        <ArrowLeft size={16} /> {t('projects.back')}
      </Link>

      {reviewMode && (
        <div className="draft-notice">
          <LockKeyhole size={18} />
          <div>
            <strong>
              {locale === 'ko' ? '공개 전 검수 초안' : 'Pre-publication draft'}
            </strong>
            <p>
              {locale === 'ko'
                ? '표현, 기여 범위, 공개 가능한 정보를 확인한 후 승인 상태로 전환합니다.'
                : 'Wording, contribution scope, and disclosure must be approved before publication.'}
            </p>
          </div>
        </div>
      )}

      <header>
        <p className="eyebrow">{localize(project.eyebrow, locale)}</p>
        <h1>{localize(project.title, locale)}</h1>
        <p>{localize(project.summary, locale)}</p>
      </header>
      {project.image && (
        <figure className="case-visual">
          <img
            src={project.image.src}
            alt={localize(project.image.alt, locale)}
          />
          <figcaption>
            {locale === 'ko'
              ? '실제 배포된 공개 갤러리 화면'
              : 'Publicly deployed gallery interface'}
          </figcaption>
        </figure>
      )}
      <div className="case-meta">
        <div>
          <span>{t('projects.role')}</span>
          <strong>{localize(project.role, locale)}</strong>
          {project.repositoryUrl && (
            <a
              className="case-repository-link"
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t('projects.repository')} <ArrowUpRight size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a
              className="case-repository-link"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {locale === 'ko' ? '라이브 사이트' : 'Live site'}{' '}
              <ExternalLink size={15} />
            </a>
          )}
        </div>
        <ul>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
      <div className="case-sections">
        {project.sections.map((section) => (
          <section key={section.heading.en}>
            <h2>{localize(section.heading, locale)}</h2>
            <p>{localize(section.body, locale)}</p>
          </section>
        ))}
      </div>
      <aside className="disclosure">
        <strong>{t('projects.disclosure')}</strong>
        <p>{localize(project.disclosure, locale)}</p>
      </aside>
    </article>
  )
}
