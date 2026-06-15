import { Navigate, useParams } from 'react-router-dom'
import { ProjectCaseStudy } from '../components/ProjectCaseStudy'
import { projects } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLocale } from '../hooks/useLocale'
import { localize } from '../utils/localize'

export function ReviewProjectPage() {
  const { slug } = useParams()
  const { locale } = useLocale()
  const project = projects.find((item) => item.slug === slug)

  useDocumentTitle(
    project
      ? `${localize(project.title, locale)} | Review`
      : 'Project review | Jaden',
  )

  if (!project) {
    return <Navigate to={`/${locale}/review`} replace />
  }

  if (project.status === 'approved') {
    return <Navigate to={`/${locale}/projects/${project.slug}`} replace />
  }

  return (
    <ProjectCaseStudy
      project={project}
      locale={locale}
      backTo={`/${locale}/portfolio`}
      reviewMode
    />
  )
}
